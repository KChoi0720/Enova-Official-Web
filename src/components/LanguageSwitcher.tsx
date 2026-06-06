'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/routing';
import styles from './Navbar.module.css';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'zh' : 'en';
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <button className={styles.langBtn} onClick={toggleLocale}>
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  );
}
