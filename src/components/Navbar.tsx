import { getTranslations } from 'next-intl/server';
import {Link} from '@/i18n/routing';
import styles from './Navbar.module.css';
import MobileNav from './MobileNav';

interface NavbarProps {
  theme?: 'dark' | 'light';
}

export default async function Navbar({ theme = 'dark' }: NavbarProps) {
  const t = await getTranslations('Navigation');

  return (
    <nav className={`${styles.navbar} ${theme === 'light' ? styles.navbarLight : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Enova.
        </Link>
        <MobileNav theme={theme} />
      </div>
    </nav>
  );
}
