'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import Icon from './Icon';
import { trackEvent } from '@/lib/analytics';
import styles from './VideoEmbed.module.css';

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  isMuted(): boolean;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getCurrentTime(): number;
  getDuration(): number;
  destroy(): void;
}

interface YTPlayerOptions {
  videoId: string;
  host?: string;
  playerVars?: Record<string, number | string>;
  events?: {
    onReady?: (event: { target: YTPlayer }) => void;
    onStateChange?: (event: { data: number; target: YTPlayer }) => void;
  };
}

declare global {
  interface Window {
    YT?: {
      Player: new (element: HTMLElement, options: YTPlayerOptions) => YTPlayer;
      PlayerState: { PLAYING: number; PAUSED: number; ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

// Loaded once and reused across every VideoEmbed instance on the page.
let apiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.onerror = () => reject(new Error('Failed to load YouTube iframe API'));
    document.head.appendChild(script);
  });

  return apiPromise;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function VideoEmbed({
  videoId,
  title,
  playLabel,
}: {
  videoId: string;
  title: string;
  playLabel: string;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const hideControlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasUnmutedInitially = useRef(false);

  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const clearProgressTimer = useCallback(() => {
    if (progressTimer.current) {
      clearInterval(progressTimer.current);
      progressTimer.current = null;
    }
  }, []);

  const scheduleHideControls = useCallback(() => {
    if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    hideControlsTimer.current = setTimeout(() => setShowControls(false), 2500);
  }, []);

  // Create the player only once the user has actually clicked play, so no
  // YouTube request (or branding) ever loads before that.
  useEffect(() => {
    if (!started) return;
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !window.YT || !targetRef.current) return;

      playerRef.current = new window.YT.Player(targetRef.current, {
        videoId,
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          fs: 0,
          playsinline: 1,
          autoplay: 1,
          // Start muted so autoplay is never blocked by the browser (muted
          // autoplay is always permitted); unmuted the instant playback
          // actually begins, in onStateChange below.
          mute: 1,
          origin: window.location.origin,
        },
        events: {
          onReady(event) {
            setDuration(event.target.getDuration());
            event.target.playVideo();
          },
          onStateChange(event) {
            const state = window.YT!.PlayerState;
            if (event.data === state.PLAYING) {
              if (!hasUnmutedInitially.current) {
                hasUnmutedInitially.current = true;
                playerRef.current?.unMute();
                setIsMuted(false);
              }
              setIsPlaying(true);
              setEnded(false);
              scheduleHideControls();
              clearProgressTimer();
              progressTimer.current = setInterval(() => {
                const player = playerRef.current;
                if (!player) return;
                const d = player.getDuration();
                const c = player.getCurrentTime();
                setDuration(d);
                setCurrentTime(c);
                setProgress(d > 0 ? (c / d) * 100 : 0);
              }, 250);
            } else if (event.data === state.ENDED) {
              setIsPlaying(false);
              setEnded(true);
              setShowControls(true);
              clearProgressTimer();
            } else {
              setIsPlaying(false);
              setShowControls(true);
              clearProgressTimer();
            }
          },
        },
      });
    }).catch(() => {
      if (!cancelled) setApiError(true);
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === wrapRef.current);
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    return () => {
      clearProgressTimer();
      if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
      playerRef.current?.destroy();
    };
  }, [clearProgressTimer]);

  function handleActivity() {
    setShowControls(true);
    if (isPlaying) scheduleHideControls();
  }

  function handleStart() {
    setStarted(true);
    setEnded(false);
    trackEvent('video_play', { video_id: videoId });
  }

  function togglePlay() {
    const player = playerRef.current;
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  }

  function toggleMute() {
    const player = playerRef.current;
    if (!player) return;
    if (player.isMuted()) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  }

  function toggleFullscreen() {
    if (!wrapRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      wrapRef.current.requestFullscreen?.();
    }
  }

  function seekFromClick(e: ReactMouseEvent<HTMLDivElement>) {
    const player = playerRef.current;
    if (!player || duration <= 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    player.seekTo(ratio * duration, true);
    setProgress(ratio * 100);
  }

  return (
    <div className={styles.wrap}>
      <div
        ref={wrapRef}
        className={styles.ytWrap}
        role="region"
        aria-label={title}
        onMouseMove={started ? handleActivity : undefined}
      >
        <div ref={targetRef} className={styles.ytTarget} />

        {started && !ended && (
          <button
            type="button"
            className={styles.tapZone}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          />
        )}

        {started && !ended && (
          <div className={`${styles.controls} ${showControls ? styles.controlsVisible : ''}`}>
            <div className={styles.progressTrack} onClick={seekFromClick}>
              <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.controlsRow}>
              <button type="button" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
                <Icon name={isPlaying ? 'pause' : 'play'} className={styles.controlIcon} />
              </button>
              <button type="button" onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
                <Icon name={isMuted ? 'volumeOff' : 'volumeOn'} className={styles.controlIcon} />
              </button>
              <span className={styles.time}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <span className={styles.spacer} />
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
              >
                <Icon name={isFullscreen ? 'exitFullscreen' : 'fullscreen'} className={styles.controlIcon} />
              </button>
            </div>
          </div>
        )}

        {(!started || ended) && (
          <button
            type="button"
            className={styles.overlay}
            onClick={handleStart}
            aria-label={ended ? 'Watch again' : playLabel}
            style={
              !started
                ? {
                    backgroundImage: `linear-gradient(160deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%), url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)`,
                  }
                : undefined
            }
          >
            <span className={styles.playRing}>
              <Icon name="play" className={styles.playIcon} />
            </span>
            <p className={styles.playLabel}>{ended ? 'Watch again' : playLabel}</p>
          </button>
        )}
      </div>
      {apiError && (
        <p className={styles.fallback}>
          Video not loading?{' '}
          <a href={`https://youtu.be/${videoId}`} target="_blank" rel="noreferrer">
            Watch it directly on YouTube
          </a>
        </p>
      )}
    </div>
  );
}
