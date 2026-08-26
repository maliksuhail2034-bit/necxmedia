import { Fragment } from 'react';
import { hero, site } from '@/lib/content';
import VideoEmbed from './VideoEmbed';
import CtaLink from './CtaLink';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.eyebrow}>
        <span />
        {hero.eyebrow}
      </div>
      <h1 className={styles.heading}>
        {hero.heading.map((part, i) =>
          typeof part === 'string' ? (
            <span key={i}>{part}</span>
          ) : (
            <em key={i}>
              <br />
              {part.text}
            </em>
          )
        )}
      </h1>
      <p className={styles.sub}>{hero.sub}</p>

      <div className={styles.videoWrap}>
        <VideoEmbed
          videoId={site.youtubeVideoId}
          title={`${site.name} Lead Education System`}
          playLabel={hero.videoLabel}
        />
      </div>

      <div className={styles.actions}>
        <CtaLink href={hero.primaryCta.href} className="btnPrimary" ctaId="hero_primary">
          {hero.primaryCta.label}
        </CtaLink>
        <CtaLink href={hero.secondaryCta.href} className="btnGhost" ctaId="hero_secondary">
          {hero.secondaryCta.label}
        </CtaLink>
      </div>

      <div className={styles.trust}>
        {hero.trust.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && <span className={styles.trustDiv} />}
            <span>{item}</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
