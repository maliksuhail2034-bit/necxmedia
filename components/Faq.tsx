'use client';

import { useState } from 'react';
import { faq } from '@/lib/content';
import RevealOnScroll from './RevealOnScroll';
import styles from './Faq.module.css';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <RevealOnScroll>
          <div className="sectionTag">{faq.tag}</div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className={styles.heading}>{faq.heading}</h2>
        </RevealOnScroll>
        <RevealOnScroll className={styles.list}>
          {faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={styles.item} key={item.q}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className={`${styles.plus} ${open ? styles.plusOpen : ''}`}>+</span>
                </button>
                <div className={`${styles.answer} ${open ? styles.answerOpen : ''}`}>
                  <div className={styles.answerInner}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </RevealOnScroll>
      </div>
    </section>
  );
}
