import type { Metadata } from 'next';
import { Fraunces, Instrument_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { site } from '@/lib/content';
import { GA_ID } from '@/lib/analytics';
import UtmCapture from '@/components/UtmCapture';

// Only request the weights/styles actually used in the CSS (verified via a
// full grep of every .module.css): normal 300/600/700/800, and italic only
// at 300 (the Hero heading's emphasized phrase, see --font-serif-italic).
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '600', '700', '800'],
  style: ['normal'],
  variable: '--font-fraunces-raw',
  display: 'swap',
});

const frauncesItalic = Fraunces({
  subsets: ['latin'],
  weight: ['300'],
  style: ['italic'],
  variable: '--font-fraunces-italic-raw',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-instrument-sans-raw',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || site.domain),
  title: site.metaTitle,
  description: site.metaDescription,
  alternates: { canonical: '/' },
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.domain,
    siteName: site.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.metaTitle,
    description: site.metaDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${frauncesItalic.variable} ${instrumentSans.variable}`}>
      <body>
        <UtmCapture />
        {children}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
            <Script id="ga-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
