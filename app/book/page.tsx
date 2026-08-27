import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import LeadForm from '@/components/LeadForm';
import { bookPage, bookFormFields, site } from '@/lib/content';
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

        <div className={styles.formBlock}>
          <h2 className={styles.formHeading}>{bookPage.formHeading}</h2>
          <p className={styles.formIntro}>{bookPage.formIntro}</p>
          <LeadForm fields={bookFormFields} source="book" submitLabel={bookPage.submitLabel} />
        </div>

        <p className={styles.orDivider}>{bookPage.orDivider}</p>

        <div id="calendly">
          <CalendlyEmbed calendlyUrl={site.calendlyUrl} />
        </div>
      </section>
    </>
  );
}
