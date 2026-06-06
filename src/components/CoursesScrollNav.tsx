'use client';

import { useState, useEffect } from 'react';
import styles from './CoursesScrollNav.module.css';

interface CoursesScrollNavProps {
  children: React.ReactNode;
  /** Scroll distance (px) before the navbar slides down. Default: 160 */
  threshold?: number;
}

/**
 * Wraps a Navbar so it stays hidden until the user scrolls past `threshold` px,
 * then slides down from the top like a curtain and stays fixed.
 */
export default function CoursesScrollNav({
  children,
  threshold = 160,
}: CoursesScrollNavProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on mount in case page loads mid-scroll
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return (
    <div
      className={`${styles.fixedNav} ${visible ? styles.fixedNavVisible : ''}`}
      aria-hidden={!visible}
    >
      {children}
    </div>
  );
}
