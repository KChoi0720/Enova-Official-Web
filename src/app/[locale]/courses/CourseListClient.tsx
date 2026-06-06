'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Star } from 'lucide-react';
import styles from './Courses.module.css';

interface Course {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

interface Props {
  initialCourses: Course[];
}

export default function CourseListClient({ initialCourses }: Props) {
  const t = useTranslations('CoursesPage');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Language', 'Marketing', 'Social', 'Medicine', 'Computers'];

  const filteredCourses = activeCategory === 'All' 
    ? initialCourses 
    : initialCourses.filter(c => c.category === activeCategory);

  const getColorClass = (category: string, type: 'bg' | 'text') => {
    switch (category) {
      case 'Language': return type === 'bg' ? styles.bgLanguage : styles.textLanguage;
      case 'Marketing': return type === 'bg' ? styles.bgMarketing : styles.textMarketing;
      case 'Social': return type === 'bg' ? styles.bgSocial : styles.textSocial;
      case 'Medicine': return type === 'bg' ? styles.bgMedicine : styles.textMedicine;
      case 'Computers': return type === 'bg' ? styles.bgComputers : styles.textComputers;
      default: return type === 'bg' ? styles.bgDefault : styles.textDefault;
    }
  };

  // Generate a mock rating score based on course ID for UI demonstration
  const getMockRating = (id: number) => {
    const scores = [60.5, 76.3, 53.5, 82.1, 91.0, 45.2];
    return scores[id % scores.length];
  };

  return (
    <div className="container">
      {/* Filter Bar */}
      <div className={styles.filterBar}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
          >
            {cat === 'All' ? t('filterAll') : cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className={styles.courseGrid}>
        {filteredCourses.map(course => (
          <div key={course.id} className={styles.courseCard}>
            
            {/* Image Overlay */}
            <div className={styles.cardImageWrapper}>
              <Image 
                src={course.image || '/course_placeholder.png'} 
                alt={course.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }} 
              />
              <div className={`${styles.cardOverlayBar} ${getColorClass(course.category, 'bg')}`}>
                <h3 className={styles.cardTitle}>{course.title}</h3>
              </div>
            </div>

            {/* Details Section */}
            <div className={styles.cardBody}>
              <div className={`${styles.cardCategory} ${getColorClass(course.category, 'text')}`}>
                {course.category}
              </div>
              
              <div className={styles.cardFooter}>
                <div className={styles.cardRating}>
                  <div className={styles.ratingStars}>
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} strokeWidth={1} />
                  </div>
                  <span className={styles.ratingScore}>{getMockRating(course.id)}</span>
                </div>
                
                <div className={styles.cardPrice}>
                  {course.price === 0 ? (
                    <span>{t('free')}</span>
                  ) : (
                    <>
                      ${course.price} <span>{t('monthly')}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
