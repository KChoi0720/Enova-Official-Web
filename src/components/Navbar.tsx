import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import styles from './Navbar.module.css';
import MobileNav from './MobileNav';
import Image from 'next/image';


interface NavbarProps {
  theme?: 'dark' | 'light';
  compact?: boolean;
}

export default async function Navbar({ theme = 'dark', compact = false }: NavbarProps) {
  const t = await getTranslations('Navigation');

  return (
    <nav className={`${styles.navbar} ${theme === 'light' ? styles.navbarLight : ''} ${compact ? styles.navbarCompact : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Image src="/enova-small-Picsart-BackgroundRemover.png" alt="Enova" width={110} height={28} />
        <MobileNav theme={theme} />
      </div>
    </nav>
  );
}
