// Server-only. Appends a lead record to Airtable via its REST API using a
// Personal Access Token — much simpler than Google Sheets' service-account
// flow, and Airtable's free tier needs no payment method to sign up.

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

export function isAirtableConfigured(): boolean {
  return Boolean(
    process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_TABLE_NAME
  );
}

export async function appendLeadToAirtable(lead: LeadRecord): Promise<void> {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!apiKey || !baseId || !tableName) {
    throw new Error('Airtable is not configured (missing env vars).');
  }

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        Timestamp: lead.timestamp,
        Name: lead.name,
        Email: lead.email,
        'Company / Website': lead.companyWebsite,
        'What Does Company Do': lead.whatDoesCompanyDo,
        'What To Improve': lead.whatToImprove,
        'Biggest Problem': lead.biggestProblem,
        'Anything Else': lead.anythingElse,
        Source: lead.source,
        'Landing Page': lead.landingPage,
        'UTM Source': lead.utmSource,
        'UTM Medium': lead.utmMedium,
        'UTM Campaign': lead.utmCampaign,
        'UTM Content': lead.utmContent,
        'UTM Term': lead.utmTerm,
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Airtable append failed: ${res.status} ${text}`);
  }
}
