import { footer, site } from '@/lib/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>{site.name}</div>
      <p>
        {footer.tagline} · <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
      </p>
    </footer>
  );
}
