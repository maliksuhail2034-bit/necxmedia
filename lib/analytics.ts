// Thin, provider-agnostic event tracking. No-ops until NEXT_PUBLIC_GA_ID is configured,
// so nothing pretends to track before it actually can.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export type AnalyticsEvent =
  | 'cta_click'
  | 'video_play'
  | 'apply_started'
  | 'apply_submitted'
  | 'book_page_viewed'
  | 'booking_completed';

export function trackEvent(event: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  if (window.gtag) {
    window.gtag('event', event, params);
  }
}
