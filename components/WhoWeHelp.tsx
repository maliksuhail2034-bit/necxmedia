import { whoWeHelp } from '@/lib/content';
import RevealOnScroll from './RevealOnScroll';
import styles from './WhoWeHelp.module.css';

export default function WhoWeHelp() {
  return (
    <section className={styles.section} id="whowehelp">
      <div className={styles.inner}>
        <RevealOnScroll>
          <div className="sectionTag">{whoWeHelp.tag}</div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className={styles.heading}>{whoWeHelp.heading}</h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className={styles.intro}>{whoWeHelp.intro}</p>
        </RevealOnScroll>
        <RevealOnScroll className={styles.grid}>
          <div className={styles.col}>
            <div className={`${styles.colTitle} ${styles.colTitleFit}`}>This is for you if</div>
            <ul className={`${styles.list} ${styles.fit}`}>
              {whoWeHelp.fitFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <div className={`${styles.colTitle} ${styles.colTitleNotFit}`}>Not a fit if</div>
            <ul className={`${styles.list} ${styles.notFit}`}>
              {whoWeHelp.notFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
