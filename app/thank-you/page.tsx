import { Suspense } from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { site } from '@/lib/content';
import ThankYouContent from './ThankYouContent';
import styles from './thankyou.module.css';

export const metadata: Metadata = {
  title: `Thank you — ${site.name}`,
  robots: { index: false },
};

// The site is a static export, so `?type=` is read in the browser
// (ThankYouContent uses useSearchParams, which needs a Suspense boundary).
export default function ThankYouPage() {
  return (
    <>
      <Nav minimal />
      <section className={styles.section}>
        <Suspense fallback={null}>
          <ThankYouContent />
        </Suspense>
      </section>
      <Footer />
    </>
  );
}
