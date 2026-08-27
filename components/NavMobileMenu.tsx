'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import styles from './NavMobileMenu.module.css';

type NavLink = { href: string; label: string };

export default function NavMobileMenu({ links, cta }: { links: NavLink[]; cta: NavLink }) {
  const [open, setOpen] = useState(false);

  // next/link's client-side hash navigation doesn't reliably scroll to the
  // target section from inside this overlay, so scroll manually instead.
  function handleSectionClick(e: React.MouseEvent, href: string) {
    e.preventDefault();
    setOpen(false);
    const id = href.replace('#', '');
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    });
  }

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Icon name="menu" className={styles.triggerIcon} />
      </button>

      {open && (
        <div className={styles.panel} role="dialog" aria-modal="true">
          <div className={styles.panelHeader}>
            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <Icon name="close" className={styles.closeIcon} />
            </button>
          </div>
          <ul className={styles.panelLinks}>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={(e) => handleSectionClick(e, link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={cta.href} className={styles.panelCta} onClick={() => setOpen(false)}>
            {cta.label}
          </Link>
        </div>
      )}
    </>
  );
}
