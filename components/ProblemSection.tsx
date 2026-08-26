import { problem } from '@/lib/content';
import RevealOnScroll from './RevealOnScroll';
import styles from './ProblemSection.module.css';

export default function ProblemSection() {
  return (
    <section className={styles.section} id="problem">
      <div className={styles.inner}>
        <RevealOnScroll>
          <div className="sectionTag">{problem.tag}</div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className={styles.heading}>{problem.heading}</h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className={styles.intro}>{problem.intro}</p>
        </RevealOnScroll>
        <RevealOnScroll className={styles.grid}>
          {problem.cards.map((card) => (
            <div className={styles.card} key={card.num}>
              <div className={styles.num}>{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
