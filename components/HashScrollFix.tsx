'use client';

import { useEffect } from 'react';

function scrollToHash() {
  const hash = window.location.hash;
  if (!hash) return;
  document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant', block: 'start' });
}

// Next.js resets scroll position on both initial hydration and on later
// same-page hash changes, which fights the browser's native jump-to-fragment
// — so no #section link on the site actually lands anywhere. Re-run the
// scroll ourselves shortly after, once Next's own reset has had a chance to
// happen first.
function scheduleScrollToHash() {
  setTimeout(scrollToHash, 80);
}

export default function HashScrollFix() {
  useEffect(() => {
    scheduleScrollToHash();
    window.addEventListener('hashchange', scheduleScrollToHash);

    // next/link's router navigates via history.pushState/replaceState directly,
    // which — unlike a native anchor click or a `location.hash` assignment —
    // does NOT fire a `hashchange` event. Patch both so section links that go
    // through next/link (the desktop nav, hero CTAs, etc.) are covered too.
    const origPushState = history.pushState.bind(history);
    const origReplaceState = history.replaceState.bind(history);
    history.pushState = (...args: Parameters<typeof origPushState>) => {
      origPushState(...args);
      scheduleScrollToHash();
    };
    history.replaceState = (...args: Parameters<typeof origReplaceState>) => {
      origReplaceState(...args);
      scheduleScrollToHash();
    };

    return () => {
      window.removeEventListener('hashchange', scheduleScrollToHash);
      history.pushState = origPushState;
      history.replaceState = origReplaceState;
    };
  }, []);

  return null;
}
