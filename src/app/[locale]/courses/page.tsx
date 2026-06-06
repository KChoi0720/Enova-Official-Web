import { getTranslations } from 'next-intl/server';
import { getCourses } from '@/services/courseService';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import CoursesScrollNav from '@/components/CoursesScrollNav';
import CourseListClient from './CourseListClient';
import styles from './Courses.module.css';

export default async function CoursesPage() {
  const t = await getTranslations('CoursesPage');
  const courses = await getCourses();

  return (
    <main className={styles.main}>

      {/* ── Static white navbar at the top of the page ── */}
      <section className={styles.navbarSection}>
        <Navbar theme="light" />
      </section>

      {/* ── Fixed navbar that slides down (curtain) when user scrolls past the header ── */}
      <CoursesScrollNav threshold={160}>
        <Navbar theme="light" />
      </CoursesScrollNav>

      {/* ── Blue "All Courses" Banner ── */}
      <section className={styles.headerBanner}>
        <div className={`container ${styles.headerContent}`}>
          <h1 className={styles.headerTitle}>{t('allCourses')}</h1>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbItem}>{t('home')}</Link>
            <div className={styles.breadcrumbSeparator}>➔</div>
            <Link href="/courses" className={styles.breadcrumbItem}>{t('allCourses')}</Link>
          </div>
        </div>
      </section>

      {/* ── Course List & Filters ── */}
      <CourseListClient initialCourses={courses} />
    </main>
  );
}
