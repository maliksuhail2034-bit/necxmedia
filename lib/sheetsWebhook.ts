// Server-only. Appends a lead to a Google Sheet via an Apps Script Web App
// deployed on that Sheet — avoids Google Cloud Console, service accounts,
// and billing entirely. A shared secret (checked by the Apps Script) stands
// in for real auth, since the deployed web app URL itself has no built-in
// access control once set to "Anyone".

export interface LeadRecord {
  timestamp: string;
  name: string;
  email: string;
  companyWebsite: string;
  whatDoesCompanyDo: string;
  whatToImprove: string;
  biggestProblem: string;
  anythingElse: string;
  source: string;
  landingPage: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
}

export function isSheetsWebhookConfigured(): boolean {
  return Boolean(process.env.GOOGLE_SHEETS_WEBHOOK_URL && process.env.GOOGLE_SHEETS_WEBHOOK_SECRET);
}

export async function appendLeadToSheetWebhook(lead: LeadRecord): Promise<void> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  if (!url || !secret) {
    throw new Error('Google Sheets webhook is not configured (missing env vars).');
  }

  // Apps Script web apps respond via a redirect before the real response;
  // fetch follows that automatically.
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify({ ...lead, secret }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Google Sheets webhook append failed: ${res.status} ${text}`);
  }

  const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
  if (data && data.ok === false) {
    throw new Error(`Google Sheets webhook rejected the request: ${data.error || 'unknown error'}`);
  }
}
