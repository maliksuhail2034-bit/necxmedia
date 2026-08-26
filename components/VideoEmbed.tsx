'use client';

import { useState } from 'react';
import Icon from './Icon';
import { trackEvent } from '@/lib/analytics';
import styles from './VideoEmbed.module.css';

export default function VideoEmbed({
  videoId,
  title,
  playLabel,
}: {
  videoId: string;
  title: string;
  playLabel: string;
}) {
  const [playing, setPlaying] = useState(false);

  const src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1${
    playing ? '&autoplay=1' : ''
  }`;

  function handlePlay() {
    setPlaying(true);
    trackEvent('video_play', { video_id: videoId });
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.ytWrap}>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        {!playing && (
          <button
            type="button"
            className={styles.overlay}
            onClick={handlePlay}
            aria-label={playLabel}
          >
            <span className={styles.playRing}>
              <Icon name="play" className={styles.playIcon} />
            </span>
            <p className={styles.playLabel}>{playLabel}</p>
          </button>
        )}
      </div>
      <p className={styles.fallback}>
        Video not loading?{' '}
        <a href={`https://youtu.be/${videoId}`} target="_blank" rel="noreferrer">
          Watch it directly on YouTube
        </a>
      </p>
    </div>
  );
}
