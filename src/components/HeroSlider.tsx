'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

interface Slide {
  id: number;
  bgColor: string;
  layout: 'laptop' | 'bordered';
  imgSrc: string;
  titleKey: string;
  subtitleKey: string;
}

const slides: Slide[] = [
  {
    id: 0,
    bgColor: '#0e8760', // Teal/Green
    layout: 'laptop',
    imgSrc: '/hero_image.png',
    titleKey: 'slide1Title',
    subtitleKey: 'slide1Subtitle',
  },
  {
    id: 1,
    bgColor: '#d38c0f', // Golden Yellow
    layout: 'bordered',
    imgSrc: '/video_training.png', // Reusing an existing image as placeholder
    titleKey: 'slide2Title',
    subtitleKey: 'slide2Subtitle',
  },
  {
    id: 2,
    bgColor: '#3b5998', // Blue Placeholder
    layout: 'bordered',
    imgSrc: '/video_training.png', // Reusing an existing image as placeholder
    titleKey: 'slide3Title',
    subtitleKey: 'slide3Subtitle',
  }
];

export default function HeroSlider() {
  const t = useTranslations('Hero');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className={styles.heroSection} style={{ backgroundColor: slide.bgColor }}>
      <div className={styles.heroContainer} key={slide.id}>
        {/* Text Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t(slide.titleKey as any)}</h1>
          <p className={styles.heroSubtitle}>{t(slide.subtitleKey as any)}</p>
          <button className="btn btn-white">{t('cta')}</button>
        </div>

        {/* Image Content */}
        <div className={styles.heroImageWrapper}>
          {slide.layout === 'laptop' ? (
            <div className={styles.laptopFrame}>
              <div className={styles.laptopScreen}>
                <Image
                  src={slide.imgSrc}
                  alt="Students learning"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', borderRadius: '6px' }}
                  priority={true}
                />
              </div>
              <div className={styles.laptopBase}></div>
            </div>
          ) : (
            <div className={styles.borderedImage}>
              <Image
                src={slide.imgSrc}
                alt="Students learning"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority={currentSlide === slide.id}
              />
            </div>
          )}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className={styles.heroDots}>
        {slides.map((s) => (
          <span
            key={s.id}
            className={`${styles.dot} ${currentSlide === s.id ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(s.id)}
          ></span>
        ))}
      </div>
    </section>
  );
}
