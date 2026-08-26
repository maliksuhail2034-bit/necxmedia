'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { applyFields, applyPage } from '@/lib/content';
import { getStoredUtm } from '@/lib/utm';
import { trackEvent } from '@/lib/analytics';
import styles from './ApplyForm.module.css';

type FormState = Record<string, string>;

export default function ApplyForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormState>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedRef = useRef(false);

  function handleChange(id: string, value: string) {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent('apply_started');
    }
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          source: 'apply',
          landingPage: typeof window !== 'undefined' ? window.location.href : '',
          utm: getStoredUtm(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setError(data.error || 'Something went wrong. Please try again or email us directly.');
        setSubmitting(false);
        return;
      }

      trackEvent('apply_submitted');
      router.push('/thank-you?type=applied');
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Honeypot field: hidden from real users, catches bots that auto-fill every input */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website_url">Website</label>
        <input
          id="website_url"
          name="website_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          onChange={(e) => handleChange('website_url', e.target.value)}
        />
      </div>

      {applyFields.map((field) => (
        <div className={styles.field} key={field.id}>
          <label className={styles.label} htmlFor={field.id}>
            {field.label}
            {!field.required && <span className={styles.optional}> (optional)</span>}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              className={styles.textarea}
              required={field.required}
              placeholder={field.placeholder}
              value={values[field.id] || ''}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
          ) : (
            <input
              id={field.id}
              type={field.type}
              className={styles.input}
              required={field.required}
              placeholder={field.placeholder}
              value={values[field.id] || ''}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
          )}
        </div>
      ))}

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" className={`${styles.submit} btnPrimary`} disabled={submitting}>
        {submitting ? 'Submitting…' : applyPage.submitLabel}
      </button>
    </form>
  );
}
