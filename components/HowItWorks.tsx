import { howItWorks } from '@/lib/content';
import RevealOnScroll from './RevealOnScroll';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.section} id="howitworks">
      <div className={styles.inner}>
        <RevealOnScroll>
          <div className="sectionTag">{howItWorks.tag}</div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className={styles.heading}>{howItWorks.heading}</h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className={styles.intro}>{howItWorks.intro}</p>
        </RevealOnScroll>
        <div className={styles.steps}>
          {howItWorks.steps.map((step) => (
            <RevealOnScroll className={styles.step} key={step.num}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepBody}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
