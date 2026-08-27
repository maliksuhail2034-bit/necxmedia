'use client';

import { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import { bookPage, bookFormFields, site } from '@/lib/content';
import styles from './book.module.css';

export default function BookFlow() {
  const [step, setStep] = useState<'form' | 'calendly'>('form');
  const [lead, setLead] = useState<{ name?: string; email?: string }>({});

  // Reading window.location.hash can't happen during SSR, so the initial
  // state above must be 'form' on both server and first client render (to
  // avoid a hydration mismatch) and switch to 'calendly' right after mount.
  useEffect(() => {
    if (window.location.hash === '#calendly') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStep('calendly');
    }
  }, []);

  return (
    <>
      <Nav minimal />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>{bookPage.eyebrow}</div>
          <h1 className={styles.heading}>
            {step === 'form' ? bookPage.heading : bookPage.calendlyHeading}
          </h1>
          <p className={styles.intro}>
            {step === 'form' ? bookPage.intro : bookPage.calendlyIntro}
          </p>
          {step === 'form' && (
            <>
              <ul className={styles.expect}>
                {bookPage.expect.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.forWho}>{bookPage.forWho}</p>
            </>
          )}
        </div>

        {step === 'form' ? (
          <div className={styles.formBlock}>
            <h2 className={styles.formHeading}>{bookPage.formHeading}</h2>
            <p className={styles.formIntro}>{bookPage.formIntro}</p>
            <LeadForm
              fields={bookFormFields}
              source="book"
              submitLabel={bookPage.submitLabel}
              onSuccess={(values) => {
                setLead({ name: values.name, email: values.email });
                setStep('calendly');
              }}
            />
          </div>
        ) : (
          <div id="calendly">
            <CalendlyEmbed
              calendlyUrl={site.calendlyUrl}
              prefillName={lead.name}
              prefillEmail={lead.email}
            />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
