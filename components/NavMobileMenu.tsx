'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import styles from './NavMobileMenu.module.css';

type NavLink = { href: string; label: string };

export default function NavMobileMenu({ links, cta }: { links: NavLink[]; cta: NavLink }) {
  const [open, setOpen] = useState(false);

  // Plain anchors (not next/link), so the browser's own default hash
  // navigation does the scrolling — we only need to close the panel.
  function handleSectionClick() {
    setOpen(false);
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
                <a href={link.href} onClick={handleSectionClick}>
                  {link.label}
                </a>
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
