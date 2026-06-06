import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import styles from './Home.module.css';
import Navbar from '@/components/Navbar';
import CoursesScrollNav from '@/components/CoursesScrollNav';
import { Monitor, Rocket, Globe, Timer, Star, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { getCourses } from '@/services/courseService';

import HeroSlider from '@/components/HeroSlider';

export default async function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const courses = await getCourses();

  return (
    <main className={styles.main}>
      {/* Dark navbar overlaying the hero */}
      <Navbar />

      {/* Curtain navbar: slides down as compact light bar after scrolling past the hero */}
      <CoursesScrollNav threshold={200}>
        <Navbar theme="light" compact />
      </CoursesScrollNav>

      {/* Auto-Playing Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={`container ${styles.featuresContainer}`}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Monitor size={48} strokeWidth={1.5} />
            </div>
            <p className={styles.featureText}>{t('Features.feature1')}</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Rocket size={48} strokeWidth={1.5} />
            </div>
            <p className={styles.featureText}>{t('Features.feature2')}</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Globe size={48} strokeWidth={1.5} />
            </div>
            <p className={styles.featureText}>{t('Features.feature3')}</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className={styles.coursesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{t('Courses.title')}</h2>
          <div className={styles.coursesGrid}>
            {courses.map((course: any) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseImagePlaceholder}></div>
                <div className={styles.courseContent}>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <div className={styles.courseFooter}>
                    <span className={styles.courseCategory}>{course.category}</span>
                    <span className={styles.coursePrice}>
                      {course.price === 0 ? t('Courses.free') : `$${course.price} `}
                      {course.price !== 0 && <small>{t('Courses.priceMonthly')}</small>}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={styles.partnersSection}>
        <div className={`container ${styles.partnersContainer}`}>
          <h2 className={styles.partnersTitle}>{t('Partners.title')}</h2>
          <p className={styles.partnersSubtitle}>{t('Partners.subtitle')}</p>
          <div className={styles.partnersLogos}>
            <div className={styles.partnerLogo}>Logo 1</div>
            <div className={styles.partnerLogo}>Logo 2</div>
            <div className={styles.partnerLogo}>Logo 3</div>
            <div className={styles.partnerLogo}>Logo 4</div>
            <div className={styles.partnerLogo}>Logo 5</div>
          </div>
        </div>
      </section>

      {/* Video Training Section */}
      <section className={styles.videoSection}>
        <div className={`container ${styles.videoContainer}`}>
          <div className={styles.videoContent}>
            <h2 className={styles.videoTitle}>{t('VideoTraining.title')}</h2>
            <p className={styles.videoSubtitle}>{t('VideoTraining.subtitle')}</p>
            <button className="btn btn-primary">{t('VideoTraining.browseCourses')}</button>
          </div>
          <div className={styles.videoImageWrapper}>
            <div className={styles.videoMockup}>
              <Image src="/video_training.png" alt="Video Training Mockup" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className="container">
          <h2 className={styles.pricingTitle}>{t('Pricing.title')}</h2>
          <div className={styles.pricingGrid}>

            {/* Trial Plan */}
            <div className={`${styles.pricingCard} ${styles.cardTrial}`}>
              <div className={styles.pricingHeader}>{t('Pricing.trial')}</div>
              <div className={styles.pricingBody}>
                <Timer size={48} className={styles.pricingIcon} strokeWidth={1.5} />
                <div className={styles.pricingPrice}>{t('Pricing.trialPrice')}</div>
                <div className={styles.pricingDesc}></div>
                <button className={styles.pricingBtn}>{t('Pricing.button')}</button>
              </div>
            </div>

            {/* Monthly Plan */}
            <div className={`${styles.pricingCard} ${styles.cardMonthly}`}>
              <div className={styles.pricingHeader}>{t('Pricing.monthly')}</div>
              <div className={styles.pricingBody}>
                <div className={styles.pricingPrice}>{t('Pricing.monthlyPrice')}</div>
                <div className={styles.pricingDesc}>{t('Pricing.monthlyDesc')}</div>
                <button className={styles.pricingBtn}>{t('Pricing.button')}</button>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className={`${styles.pricingCard} ${styles.cardYearly}`}>
              <div className={styles.pricingHeader}>{t('Pricing.yearly')}</div>
              <div className={styles.pricingBody}>
                <div className={styles.pricingPrice}>{t('Pricing.yearlyPrice')}</div>
                <div className={styles.pricingDesc}>{t('Pricing.yearlyDesc')}</div>
                <button className={styles.pricingBtn}>{t('Pricing.button')}</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Info Section (Calendar, Popular, Recent) */}
      <section className={styles.infoSection}>
        <div className={`container ${styles.infoGrid}`}>

          {/* Calendar Column */}
          <div className={styles.infoColumn}>
            <h3 className={styles.infoTitle}>{t('Info.calendar')}</h3>
            <div className={styles.calendarContainer}>
              <div className={styles.calendarHeader}>
                <ChevronLeft size={16} />
                <span>SEPTEMBER 2019</span>
                <ChevronRight size={16} />
              </div>
              <div className={styles.calendarGrid}>
                <div className={styles.calendarDayName}>MON</div><div className={styles.calendarDayName}>TUE</div><div className={styles.calendarDayName}>WED</div><div className={styles.calendarDayName}>THU</div><div className={styles.calendarDayName}>FRI</div><div className={styles.calendarDayName}>SAT</div><div className={styles.calendarDayName}>SUN</div>
                <div className={styles.calendarDay}></div><div className={styles.calendarDay}>1</div><div className={styles.calendarDay}>2</div><div className={styles.calendarDay}>3</div><div className={styles.calendarDay}>4</div><div className={styles.calendarDay}>5</div><div className={styles.calendarDay}>6</div>
                <div className={styles.calendarDay}>7</div><div className={styles.calendarDay}>8</div><div className={styles.calendarDay}>9</div><div className={`${styles.calendarDay} ${styles.calendarActive}`}>10</div><div className={styles.calendarDay}>11</div><div className={styles.calendarDay}>12</div><div className={styles.calendarDay}>13</div>
                <div className={styles.calendarDay}>14</div><div className={styles.calendarDay}>15</div><div className={styles.calendarDay}>16</div><div className={styles.calendarDay}>17</div><div className={`${styles.calendarDay} ${styles.calendarActive}`}>18</div><div className={styles.calendarDay}>19</div><div className={styles.calendarDay}>20</div>
                <div className={`${styles.calendarDay} ${styles.calendarBorder}`}>21</div><div className={styles.calendarDay}>22</div><div className={styles.calendarDay}>23</div><div className={styles.calendarDay}>24</div><div className={styles.calendarDay}>25</div><div className={styles.calendarDay}>26</div><div className={styles.calendarDay}>27</div>
                <div className={styles.calendarDay}>28</div><div className={styles.calendarDay}>29</div><div className={styles.calendarDay}>30</div><div></div><div></div><div></div><div></div>
              </div>
            </div>
          </div>

          {/* Popular Courses Column */}
          <div className={styles.infoColumn}>
            <h3 className={styles.infoTitle}>{t('Info.popular')}</h3>
            <div className={styles.courseList}>
              {courses.slice(0, 3).map((course: any) => (
                <div key={`pop-${course.id}`} className={styles.miniCourseItem}>
                  <div className={styles.miniCourseImage}>
                    <Image src="/course_placeholder.png" alt={course.title} fill sizes="60px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className={styles.miniCourseInfo}>
                    <div className={styles.miniCourseTitle}>{course.title}</div>
                    <div className={styles.miniCourseMeta}>
                      <span>Dec 24, 2018 by John Doe</span>
                      <span className={styles.starIcon}><Star size={10} fill="currentColor" /> {80 + course.id}.{course.id % 10}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Courses Column */}
          <div className={styles.infoColumn}>
            <h3 className={styles.infoTitle}>{t('Info.recent')}</h3>
            <div className={styles.courseList}>
              {courses.slice(3, 6).map((course: any) => (
                <div key={`rec-${course.id}`} className={styles.miniCourseItem}>
                  <div className={styles.miniCourseImage}>
                    <Image src="/course_placeholder.png" alt={course.title} fill sizes="60px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className={styles.miniCourseInfo}>
                    <div className={styles.miniCourseTitle}>{course.title}</div>
                    <div className={styles.miniCourseMeta}>
                      <span>Feb 10, 2019 by John Doe</span>
                      <span className={styles.starIcon}><Eye size={12} /> {700 + course.id * 10}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
