# NECXMEDIA

Premium high-ticket sales funnel for NECXMEDIA — Next.js 16 (App Router, TypeScript), deployed on Vercel at [necxmedia.com](https://necxmedia.com).

## Structure

- `/` — homepage (hero + VSL, problem, mechanism, funnel, who we help, FAQ, final CTA)
- `/apply` — short lead application form
- `/book` — Calendly strategy-call booking
- `/thank-you` — post-apply / post-booking confirmation
- `/api/lead` — validates and records applications to a Google Sheet (via an Apps Script Web App), then sends a best-effort confirmation email via Resend

All site copy lives in `lib/content.ts` — edit there rather than in components.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Required environment variables

See `.env.example` for the full list and descriptions. The app runs and the marketing pages render with none of them set — `NEXT_PUBLIC_YOUTUBE_VIDEO_ID` falls back to the current VSL, and `/api/lead` will return a clear error (not a fake success) until `GOOGLE_SHEETS_WEBHOOK_URL` and `GOOGLE_SHEETS_WEBHOOK_SECRET` are set.

## Deployment

Deploys to Vercel from this repo. Set the environment variables above in the Vercel project settings (Production + Preview), then point the `necxmedia.com` domain at the Vercel project.
