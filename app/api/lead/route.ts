import { NextRequest, NextResponse } from 'next/server';
import { appendLeadToSheetWebhook, isSheetsWebhookConfigured } from '@/lib/sheetsWebhook';
import { sendLeadEmails } from '@/lib/email';

const MAX_FIELD_LENGTH = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: a hidden field real users never fill in. Bots that auto-fill every
  // field will trip it.
  if (clean(body.website_url)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const companyWebsite = clean(body.companyWebsite);
  const whatDoesCompanyDo = clean(body.whatDoesCompanyDo);
  const whatToImprove = clean(body.whatToImprove);
  const biggestProblem = clean(body.biggestProblem);
  const anythingElse = clean(body.anythingElse);
  const source = clean(body.source) || 'website';
  const landingPage = clean(body.landingPage);

  // The full /apply form asks for a fuller picture; the short /book form only
  // needs enough to reach out and schedule, so it skips the deeper-dive fields.
  const requiresFullDetail = source !== 'book';
  if (!name || !email || !companyWebsite || (requiresFullDetail && (!whatDoesCompanyDo || !whatToImprove || !biggestProblem))) {
    return NextResponse.json(
      { ok: false, error: 'Please fill in all required fields.' },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (!isSheetsWebhookConfigured()) {
    console.error('Lead submitted but the Google Sheets webhook is not configured:', { name, email, companyWebsite });
    return NextResponse.json(
      {
        ok: false,
        error: 'This form is not fully configured yet. Please email us directly instead.',
      },
      { status: 500 }
    );
  }

  const utm = (body.utm as Record<string, string>) || {};

  try {
    await appendLeadToSheetWebhook({
      timestamp: new Date().toISOString(),
      name,
      email,
      companyWebsite,
      whatDoesCompanyDo,
      whatToImprove,
      biggestProblem,
      anythingElse,
      source,
      landingPage,
      utmSource: clean(utm.utm_source),
      utmMedium: clean(utm.utm_medium),
      utmCampaign: clean(utm.utm_campaign),
      utmContent: clean(utm.utm_content),
      utmTerm: clean(utm.utm_term),
    });
  } catch (err) {
    console.error('Failed to record lead in Google Sheets:', err);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong recording your application. Please email us directly.' },
      { status: 500 }
    );
  }

  // Confirmation email is best-effort — a lead that's recorded but unconfirmed by
  // email still reaches us, so we don't fail the request over it.
  sendLeadEmails({ name, email, companyWebsite }).catch((err) =>
    console.error('Lead confirmation email failed:', err)
  );

  return NextResponse.json({ ok: true });
}
