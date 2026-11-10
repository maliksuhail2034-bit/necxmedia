// Lead webhook for necxmedia.com — reference copy of the Apps Script bound to the
// "Lead Form [website leads]" Google Sheet. The site is a static export on GitHub
// Pages, so the /apply and /book forms POST here directly from the browser; this
// script does everything the old /api/lead server route did: validate, append to
// the "Leads" tab, and send the confirmation + internal notification emails.
//
// Script Properties (Project Settings → Script properties):
//   RESEND_API_KEY  Resend API key. If unset, emails fall back to MailApp
//                   (sent from the Google account that owns this script).
//   EMAIL_FROM      Optional. Default: NECXMEDIA <leads@necxmedia.com>
//   EMAIL_TO        Optional. Internal notification address. Default: suhail@necxmedia.com
//
// After editing: Deploy → Manage deployments → edit → Version: New version → Deploy
// (keeps the same /exec URL the site is built with).

var SITE_NAME = 'NECXMEDIA';
var CALENDLY_URL =
  'https://calendly.com/maliksuhail2034/30min?hide_gdpr_banner=1&background_color=111108&text_color=faf8f4&primary_color=e8531a';
var DEFAULT_FROM = 'NECXMEDIA <leads@necxmedia.com>';
var DEFAULT_TO = 'suhail@necxmedia.com';
var MAX_FIELD_LENGTH = 2000;
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function doPost(e) {
  var body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: 'Invalid request body.' });
  }

  // Honeypot: a hidden field real users never fill in.
  if (clean_(body.website_url)) return json_({ ok: true });

  var utm = body.utm || {};
  var lead = {
    timestamp: new Date().toISOString(),
    name: clean_(body.name),
    email: clean_(body.email),
    companyWebsite: clean_(body.companyWebsite),
    whatDoesCompanyDo: clean_(body.whatDoesCompanyDo),
    whatToImprove: clean_(body.whatToImprove),
    biggestProblem: clean_(body.biggestProblem),
    anythingElse: clean_(body.anythingElse),
    source: clean_(body.source) || 'website',
    landingPage: clean_(body.landingPage),
    utmSource: clean_(utm.utm_source),
    utmMedium: clean_(utm.utm_medium),
    utmCampaign: clean_(utm.utm_campaign),
    utmContent: clean_(utm.utm_content),
    utmTerm: clean_(utm.utm_term),
  };

  // The full /apply form requires the deeper-dive fields; the short /book form doesn't.
  var requiresFullDetail = lead.source !== 'book';
  if (
    !lead.name || !lead.email || !lead.companyWebsite ||
    (requiresFullDetail && (!lead.whatDoesCompanyDo || !lead.whatToImprove || !lead.biggestProblem))
  ) {
    return json_({ ok: false, error: 'Please fill in all required fields.' });
  }
  if (!EMAIL_RE.test(lead.email)) {
    return json_({ ok: false, error: 'Please enter a valid email address.' });
  }

  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads').appendRow([
      lead.timestamp, lead.name, lead.email, lead.companyWebsite,
      lead.whatDoesCompanyDo, lead.whatToImprove, lead.biggestProblem, lead.anythingElse,
      lead.source, lead.landingPage,
      lead.utmSource, lead.utmMedium, lead.utmCampaign, lead.utmContent, lead.utmTerm,
    ]);
  } catch (err) {
    console.error('Failed to record lead: ' + err);
    return json_({ ok: false, error: 'Something went wrong recording your application. Please email us directly.' });
  } finally {
    lock.releaseLock();
  }

  // Best-effort: a recorded-but-unconfirmed lead still reaches us.
  try {
    sendLeadEmails_(lead);
  } catch (err) {
    console.error('Lead email failed: ' + err);
  }

  return json_({ ok: true });
}

function sendLeadEmails_(lead) {
  var props = PropertiesService.getScriptProperties();
  var apiKey = props.getProperty('RESEND_API_KEY');
  var from = props.getProperty('EMAIL_FROM') || DEFAULT_FROM;
  var internalTo = props.getProperty('EMAIL_TO') || DEFAULT_TO;
  var firstName = escapeHtml_(lead.name.split(' ')[0]);
  var company = escapeHtml_(lead.companyWebsite || 'your business');
  var isBook = lead.source === 'book';

  var subject = isBook ? "Let's find a time, " + firstName : 'Thanks for applying, ' + firstName;
  var html = isBook
    ? '<p>Hi ' + firstName + ',</p>\n<p>Thanks for reaching out about ' + company +
      '. Grab a time that works for you on the calendar: <a href="' + CALENDLY_URL + '">' + CALENDLY_URL + '</a></p>\n<p>— ' + SITE_NAME + '</p>'
    : '<p>Hi ' + firstName + ',</p>\n<p>Thanks for telling us about ' + company +
      ". We'll review what you shared and follow up shortly.</p>\n<p>If you'd rather not wait, you can grab a time on the calendar directly: <a href=\"" +
      CALENDLY_URL + '">' + CALENDLY_URL + '</a></p>\n<p>— ' + SITE_NAME + '</p>';

  var internalSubject = (isBook ? 'New booking request' : 'New application') + ': ' + lead.name +
    ' (' + (lead.companyWebsite || 'no company given') + ')';
  var internalHtml = '<p>New ' + (isBook ? 'booking request' : 'lead application') + ' from <strong>' +
    escapeHtml_(lead.name) + '</strong> (' + escapeHtml_(lead.email) + ').</p>';

  var messages = [
    { to: lead.email, subject: subject, html: html },
    { to: internalTo, subject: internalSubject, html: internalHtml },
  ];

  if (!apiKey) {
    messages.forEach(function (m) {
      MailApp.sendEmail({ to: m.to, subject: m.subject, htmlBody: m.html, name: SITE_NAME });
    });
    return;
  }

  var responses = UrlFetchApp.fetchAll(messages.map(function (m) {
    return {
      url: 'https://api.resend.com/emails',
      method: 'post',
      contentType: 'application/json',
      headers: { Authorization: 'Bearer ' + apiKey },
      payload: JSON.stringify({ from: from, to: m.to, subject: m.subject, html: m.html }),
      muteHttpExceptions: true,
    };
  }));
  responses.forEach(function (r) {
    if (r.getResponseCode() >= 300) console.error('Resend send failed: ' + r.getContentText());
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function clean_(value) {
  return typeof value === 'string' ? value.trim().slice(0, MAX_FIELD_LENGTH) : '';
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
