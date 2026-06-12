'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import FeaturedCourseCard from '@/components/FeaturedCourseCard';
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

      {/* Course Grid — uses the same premium card as homepage */}
      <div className={styles.courseGrid}>
        {filteredCourses.map((course, i) => (
          <FeaturedCourseCard key={course.id} course={course} delay={i * 80} />
        ))}
      </div>
    </div>
  );
}
