import { system } from '@/lib/content';
import Icon from './Icon';
import RevealOnScroll from './RevealOnScroll';
import styles from './SystemSection.module.css';

export default function SystemSection() {
  return (
    <section className={styles.section} id="system">
      <div className={styles.inner}>
        <RevealOnScroll>
          <div className="sectionTag">{system.tag}</div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className={styles.heading}>{system.heading}</h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className={styles.intro}>{system.intro}</p>
        </RevealOnScroll>
        <div className={styles.grid}>
          {system.items.map((item) => (
            <RevealOnScroll className={styles.card} key={item.title}>
              <div className={styles.icon}>
                <Icon name={item.icon as never} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className={styles.cardTag}>{item.tag}</span>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
