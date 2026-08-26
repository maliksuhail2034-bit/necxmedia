import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { bookPage, site } from '@/lib/content';
import styles from './book.module.css';

export const metadata: Metadata = {
  title: `${bookPage.heading} — ${site.name}`,
  description: bookPage.intro,
  alternates: { canonical: '/book' },
};

export default function BookPage() {
  return (
    <>
      <Nav minimal />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>{bookPage.eyebrow}</div>
          <h1 className={styles.heading}>{bookPage.heading}</h1>
          <p className={styles.intro}>{bookPage.intro}</p>
          <ul className={styles.expect}>
            {bookPage.expect.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.forWho}>{bookPage.forWho}</p>
        </div>
        <CalendlyEmbed calendlyUrl={site.calendlyUrl} />
      </section>
    </>
  );
}
