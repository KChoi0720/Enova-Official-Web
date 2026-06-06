'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Search, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';

export default function MobileNav() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Links */}
      <div className={`${styles.navLinks} ${styles.desktopOnly}`}>
        <Link href="/" className={styles.navLink}>{t('home')}</Link>
        <Link href="/about" className={styles.navLink}>{t('about')}</Link>
        <Link href="/courses" className={styles.navLink}>{t('courses')}</Link>
        <Link href="/team" className={styles.navLink}>{t('team')}</Link>
        <Link href="/blog" className={styles.navLink}>{t('blog')}</Link>
        <Link href="/contact" className={styles.navLink}>{t('contact')}</Link>
        <LanguageSwitcher />
        <button className={styles.searchBtn} aria-label="Search">
          <Search size={20} />
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button className={styles.hamburgerBtn} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>{t('home')}</Link>
            <Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>{t('about')}</Link>
            <Link href="/courses" className={styles.mobileNavLink} onClick={toggleMenu}>{t('courses')}</Link>
            <Link href="/team" className={styles.mobileNavLink} onClick={toggleMenu}>{t('team')}</Link>
            <Link href="/blog" className={styles.mobileNavLink} onClick={toggleMenu}>{t('blog')}</Link>
            <Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>{t('contact')}</Link>
            <div className={styles.mobileMenuFooter}>
              <LanguageSwitcher />
              <button className={styles.searchBtn} aria-label="Search">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
