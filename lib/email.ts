// Server-only. Sends the lead confirmation email via Resend's REST API directly
// (no SDK dependency needed for a single transactional send). No-ops with a
// console warning if EMAIL_PROVIDER_API_KEY isn't configured yet, so a missing
// email integration never blocks the lead from being recorded in Airtable.

import { site } from './content';

export function isEmailConfigured(): boolean {
  return Boolean(process.env.EMAIL_PROVIDER_API_KEY && process.env.EMAIL_FROM);
}

interface SendLeadEmailsInput {
  name: string;
  email: string;
  companyWebsite: string;
  source: string;
}

export async function sendLeadEmails(input: SendLeadEmailsInput): Promise<void> {
  if (!isEmailConfigured()) {
    console.warn('Email provider not configured; skipping lead confirmation email.');
    return;
  }

  const apiKey = process.env.EMAIL_PROVIDER_API_KEY;
  const from = process.env.EMAIL_FROM as string;
  const internalTo = process.env.EMAIL_TO || site.contactEmail;
  const firstName = escapeHtml(input.name.split(' ')[0]);
  const isBook = input.source === 'book';

  // /book is a booking request (the next step is picking a time), while
  // /apply is a fuller application headed for manual review — the copy
  // should reflect which one the lead actually just submitted.
  const subject = isBook ? `Let's find a time, ${firstName}` : `Thanks for applying, ${firstName}`;
  const html = isBook
    ? `<p>Hi ${firstName},</p>
<p>Thanks for reaching out about ${escapeHtml(input.companyWebsite || 'your business')}. Grab a time that works for you on the calendar: <a href="${site.calendlyUrl}">${site.calendlyUrl}</a></p>
<p>— ${site.name}</p>`
    : `<p>Hi ${firstName},</p>
<p>Thanks for telling us about ${escapeHtml(input.companyWebsite || 'your business')}. We'll review what you shared and follow up shortly.</p>
<p>If you'd rather not wait, you can grab a time on the calendar directly: <a href="${site.calendlyUrl}">${site.calendlyUrl}</a></p>
<p>— ${site.name}</p>`;

  const confirmationToLead = fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: input.email,
      subject,
      html,
    }),
  });

  const internalNotification = fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: internalTo,
      subject: `${isBook ? 'New booking request' : 'New application'}: ${input.name} (${input.companyWebsite || 'no company given'})`,
      html: `<p>New ${isBook ? 'booking request' : 'lead application'} from <strong>${escapeHtml(input.name)}</strong> (${escapeHtml(
        input.email
      )}).</p>`,
    }),
  });

  const results = await Promise.allSettled([confirmationToLead, internalNotification]);
  for (const result of results) {
    if (result.status === 'rejected') {
      console.error('Lead email send failed:', result.reason);
    } else if (!result.value.ok) {
      console.error('Lead email send failed:', await result.value.text());
    }
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
