import { funnel } from '@/lib/content';
import Icon from './Icon';
import RevealOnScroll from './RevealOnScroll';
import styles from './FunnelSection.module.css';

const OPACITIES = [0.9, 0.72, 0.54, 0.38, 0.22];
const MARGINS = [0, 36, 72, 108, 144];

export default function FunnelSection() {
  return (
    <section className={styles.section} id="funnel">
      <div className={styles.inner}>
        <RevealOnScroll>
          <div className="sectionTag sectionTagOnDark">{funnel.tag}</div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className={styles.heading}>{funnel.heading}</h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className={styles.intro}>{funnel.intro}</p>
        </RevealOnScroll>
        <RevealOnScroll>
          <span className={styles.illustrativeLabel}>{funnel.illustrativeLabel}</span>
        </RevealOnScroll>

        <RevealOnScroll className={styles.visual}>
          {funnel.stages.map((stage, i) => (
            <div className={styles.stage} key={stage.name}>
              <div
                className={styles.stageInner}
                style={{
                  background: `rgba(232,83,26,${OPACITIES[i]})`,
                  margin: `0 ${MARGINS[i]}px`,
                }}
              >
                <div className={styles.stageLeft}>
                  <div className={styles.stageIcon}>
                    <Icon name={stage.icon} />
                  </div>
                  <div>
                    <div className={styles.stageName}>{stage.name}</div>
                    <div className={styles.stageDesc}>{stage.desc}</div>
                  </div>
                </div>
                <div className={styles.stageCount}>{stage.count}</div>
              </div>
            </div>
          ))}
          <div className={styles.outcome}>
            <div className={styles.outcomeLine} />
            <div className={styles.outcomePill}>{funnel.outcome}</div>
            <div className={styles.outcomeLine} />
          </div>
        </RevealOnScroll>

        <div className={styles.cards}>
          {funnel.cards.map((card) => (
            <RevealOnScroll className={styles.card} key={card.num}>
              <div className={styles.cardNum}>{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
