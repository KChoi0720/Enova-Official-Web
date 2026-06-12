'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './FeaturedCourseCard.module.css';

interface Course {
  id: number;
  title: string;
  category: string;
  price: number;
  image?: string;
}

interface Props {
  course: Course;
  /** Stagger delay in ms (e.g. 0, 100, 200) */
  delay?: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  Language:   'rgba(38,166,209,0.85)',
  Marketing:  'rgba(46,180,142,0.85)',
  Social:     'rgba(251,176,59,0.85)',
  Medicine:   'rgba(231,76,60,0.85)',
  Computers:  'rgba(155,89,182,0.85)',
};

export default function FeaturedCourseCard({ course, delay = 0 }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const badgeColor = CATEGORY_COLORS[course.category] ?? 'rgba(80,80,100,0.75)';

  return (
    <div
      ref={cardRef}
      className={styles.card}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* ── Image area ── */}
      <div className={styles.imageWrapper}>
        {course.image && course.image !== '/course_placeholder.png' ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className={styles.imagePlaceholder} />
        )}

        {/* Category badge */}
        <span
          className={styles.badge}
          style={{ backgroundColor: badgeColor }}
        >
          {course.category}
        </span>
      </div>

      {/* ── Divider ── */}
      <div className={styles.divider} />

      {/* ── Body ── */}
      <div className={styles.body}>
        <h3 className={styles.title}>{course.title}</h3>

        <div className={styles.footer}>
          {course.price === 0 ? (
            <span className={styles.priceTagFree}>Free</span>
          ) : (
            <span className={styles.priceTag}>
              ${course.price}
              <span className={styles.perMonth}>/mo</span>
            </span>
          )}

          <div className={styles.arrow}>→</div>
        </div>
      </div>
    </div>
  );
}
