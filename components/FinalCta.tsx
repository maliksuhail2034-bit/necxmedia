import { finalCta, site } from '@/lib/content';
import CtaLink from './CtaLink';
import RevealOnScroll from './RevealOnScroll';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={styles.section} id="contact">
      <RevealOnScroll className={styles.inner}>
        <div className="sectionTag sectionTagOnDark">{finalCta.tag}</div>
        <h2 className={styles.heading}>
          {finalCta.heading.map((line, i) => (
            <span key={line}>
              {line}
              {i < finalCta.heading.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className={styles.body}>{finalCta.body}</p>
        <div className={styles.actions}>
          <CtaLink href={finalCta.primaryCta.href} className="btnOnDark" ctaId="final_primary">
            {finalCta.primaryCta.label}
          </CtaLink>
          <CtaLink
            href={finalCta.secondaryCta.href}
            className="btnGhostOnDark"
            ctaId="final_secondary"
          >
            {finalCta.secondaryCta.label}
          </CtaLink>
        </div>
        <p className={styles.emailLine}>
          Prefer email? <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </p>
      </RevealOnScroll>
    </section>
  );
}
