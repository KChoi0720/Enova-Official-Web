import { getTranslations } from 'next-intl/server';
import {Link} from '@/i18n/routing';
import styles from './Navbar.module.css';
import MobileNav from './MobileNav';

export default async function Navbar() {
  const t = await getTranslations('Navigation');

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Enova.
        </Link>
        <MobileNav />
      </div>
    </nav>
  );
}
