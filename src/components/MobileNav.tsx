'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Search, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';

interface MobileNavProps {
  theme?: 'dark' | 'light';
}

export default function MobileNav({ theme = 'dark' }: MobileNavProps) {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const navRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);

  const isLight = theme === 'light';

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/courses', label: t('courses') },
    { href: '/team', label: t('team') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  React.useEffect(() => {
    const activeIdx = links.findIndex(
      (l) => pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
    );
    setActiveIndex(activeIdx);
    if (activeIdx !== -1 && navRefs.current[activeIdx]) {
      const el = navRefs.current[activeIdx]!;
      const s = { left: el.offsetLeft, width: el.offsetWidth, opacity: 1 };
      setActiveStyle(s);
      setHoverStyle(s);
    } else {
      setActiveIndex(-1);
      setActiveStyle({ left: 0, width: 0, opacity: 0 });
      setHoverStyle({ left: 0, width: 0, opacity: 0 });
    }
  }, [pathname, t]);

  /* Inline colour tokens for light theme */
  const linkColor = 'var(--white)';
  /**
   * In light theme the hover background is green, so any link that is
   * currently hovered or active needs WHITE text to stay readable.
   */
  const getLinkColor = (index: number) => {
    return 'var(--white)';
  };

  return (
    <>
      {/* Desktop Links */}
      <div
        className={`${styles.navLinks} ${styles.desktopOnly}`}
        onMouseLeave={() => {
          setHoverIndex(-1);
          setHoverStyle(activeStyle);
        }}
      >
        <div className={styles.hoverBackground} style={hoverStyle} />
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.navLink}
            style={{
              color: getLinkColor(index),
              transition: 'color 0.2s ease',
            }}
            ref={(el) => { navRefs.current[index] = el; }}
            onMouseEnter={() => {
              setHoverIndex(index);
              if (navRefs.current[index]) {
                const el = navRefs.current[index]!;
                setHoverStyle({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
              }
            }}
          >
            {link.label}
          </Link>
        ))}

        <LanguageSwitcher theme={theme} />

        <button
          className={styles.searchBtn}
          style={{ color: linkColor }}
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className={styles.hamburgerBtn}
        style={{ color: linkColor }}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
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
