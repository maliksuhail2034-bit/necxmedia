import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import LeadForm from '@/components/LeadForm';
import { applyPage, site } from '@/lib/content';
import styles from './apply.module.css';

export const metadata: Metadata = {
  title: `${applyPage.heading} — ${site.name}`,
  description: applyPage.intro,
  alternates: { canonical: '/apply' },
};

export default function ApplyPage() {
  return (
    <>
      <Nav minimal />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>{applyPage.eyebrow}</div>
          <h1 className={styles.heading}>{applyPage.heading}</h1>
          <p className={styles.intro}>{applyPage.intro}</p>
        </div>
        <LeadForm />
      </section>
    </>
  );
}
