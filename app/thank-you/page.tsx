import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import CtaLink from '@/components/CtaLink';
import VideoEmbed from '@/components/VideoEmbed';
import Footer from '@/components/Footer';
import { thankYouPage, hero, site } from '@/lib/content';
import styles from './thankyou.module.css';

export const metadata: Metadata = {
  title: `Thank you — ${site.name}`,
  robots: { index: false },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { type } = await searchParams;
  const booked = type === 'booked';
  const copy = booked ? thankYouPage.booked : thankYouPage.applied;

  return (
    <>
      <Nav minimal />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.check}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className={styles.heading}>{copy.heading}</h1>
          <p className={styles.body}>{copy.body}</p>
          {!booked && (
            <CtaLink href={thankYouPage.cta.href} className="btnPrimary" ctaId="thankyou_cta">
              {thankYouPage.cta.label}
            </CtaLink>
          )}
        </div>
        {booked && (
          <div className={styles.videoWrap}>
            <VideoEmbed
              videoId={site.youtubeVideoId}
              title={`${site.name} Lead Education System`}
              playLabel={hero.videoLabel}
            />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
