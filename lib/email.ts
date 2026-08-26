// Server-only. Sends the lead confirmation email via Resend's REST API directly
// (no SDK dependency needed for a single transactional send). No-ops with a
// console warning if EMAIL_PROVIDER_API_KEY isn't configured yet, so a missing
// email integration never blocks the lead from being recorded in Sheets.

import { site } from './content';

export function isEmailConfigured(): boolean {
  return Boolean(process.env.EMAIL_PROVIDER_API_KEY && process.env.EMAIL_FROM);
}

interface SendLeadEmailsInput {
  name: string;
  email: string;
  companyWebsite: string;
}

export async function sendLeadEmails(input: SendLeadEmailsInput): Promise<void> {
  if (!isEmailConfigured()) {
    console.warn('Email provider not configured; skipping lead confirmation email.');
    return;
  }

  const apiKey = process.env.EMAIL_PROVIDER_API_KEY;
  const from = process.env.EMAIL_FROM as string;
  const internalTo = process.env.EMAIL_TO || site.contactEmail;

  const confirmationToLead = fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: input.email,
      subject: `Thanks for applying, ${input.name.split(' ')[0]}`,
      html: `<p>Hi ${escapeHtml(input.name.split(' ')[0])},</p>
<p>Thanks for telling us about ${escapeHtml(input.companyWebsite || 'your business')}. We'll review your application and follow up shortly.</p>
<p>If you'd rather not wait, you can book a strategy call directly: <a href="${site.domain}/book">${site.domain}/book</a></p>
<p>— ${site.name}</p>`,
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
      subject: `New application: ${input.name} (${input.companyWebsite || 'no company given'})`,
      html: `<p>New lead application from <strong>${escapeHtml(input.name)}</strong> (${escapeHtml(
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
