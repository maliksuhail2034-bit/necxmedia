'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';
import styles from './CalendlyEmbed.module.css';

// Calendly's embed widget posts a window message when a booking is completed
// (documented behavior: https://help.calendly.com/hc/en-us/articles/223147027).
// We listen for it to track the conversion and hand the visitor off to /thank-you.
export default function CalendlyEmbed({
  calendlyUrl,
  prefillName,
  prefillEmail,
}: {
  calendlyUrl: string;
  prefillName?: string;
  prefillEmail?: string;
}) {
  const router = useRouter();

  const url = new URL(calendlyUrl);
  if (prefillName) url.searchParams.set('name', prefillName);
  if (prefillEmail) url.searchParams.set('email', prefillEmail);
  // URLSearchParams encodes spaces as "+", but Calendly's embed reads the query
  // string literally and renders a raw "+" instead of a space — swap to %20.
  const embedUrl = url.toString().replace(/\+/g, '%20');

  useEffect(() => {
    trackEvent('book_page_viewed');
  }, []);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== 'https://calendly.com') return;
      const data = event.data;
      if (data?.event === 'calendly.event_scheduled') {
        trackEvent('booking_completed');
        router.push('/thank-you?type=booked');
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [router]);

  return (
    <div className={styles.wrap}>
      <div
        className="calendly-inline-widget"
        data-url={embedUrl}
        style={{ minWidth: 280, height: 700 }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </div>
  );
}
