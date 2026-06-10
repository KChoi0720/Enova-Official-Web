'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/routing';
import styles from './Navbar.module.css';

interface LanguageSwitcherProps {
  theme?: 'dark' | 'light';
}

export default function LanguageSwitcher({ theme = 'dark' }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'zh' : 'en';
    router.replace(pathname, {locale: nextLocale});
  };

  const color = 'var(--white)';

  return (
    <button
      className={styles.langBtn}
      style={{ color }}
      onClick={toggleLocale}
    >
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  );
}
