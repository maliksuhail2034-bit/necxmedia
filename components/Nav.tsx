import Link from 'next/link';
import { nav, site } from '@/lib/content';
import NavMobileMenu from './NavMobileMenu';
import styles from './Nav.module.css';

export default function Nav({ minimal = false }: { minimal?: boolean }) {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        {site.name}
      </Link>
      {!minimal && (
        <div className={styles.right}>
          <ul className={styles.links}>
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <Link href={nav.cta.href} className={styles.cta}>
            {nav.cta.label}
          </Link>
          <NavMobileMenu links={nav.links} cta={nav.cta} />
        </div>
      )}
    </nav>
  );
}
