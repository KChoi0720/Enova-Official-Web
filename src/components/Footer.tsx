import { getTranslations } from 'next-intl/server';
import {Link} from '@/i18n/routing';
import styles from './Footer.module.css';

export default async function Footer() {
  const t = await getTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <h2 className={styles.footerLogo}>Enova.</h2>
        
        <div className={styles.footerContactInfo}>
          <div className={styles.contactCol}>
            <p>{t('address').split('\n')[0]}</p>
            <p>{t('address').split('\n')[1]}</p>
          </div>
          <div className={styles.contactCol}>
            <p>{t('contact').split('\n')[0]}</p>
            <p>{t('contact').split('\n')[1]}</p>
          </div>
        </div>

        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialBtn} style={{backgroundColor: '#3b5998'}} aria-label="Facebook">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className={styles.socialBtn} style={{backgroundColor: '#cb2027'}} aria-label="Pinterest">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.65 7.89 6.43 9.35-.1-.78-.18-1.99.04-2.85.19-.8 1.28-5.41 1.28-5.41s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.92 0 1.37.7 1.37 1.53 0 .93-.59 2.32-.9 3.61-.26 1.08.54 1.96 1.6 1.96 1.92 0 3.39-2.03 3.39-4.96 0-2.6-1.87-4.41-4.54-4.41-3.07 0-5.18 2.3-5.18 4.97 0 .93.36 1.93.81 2.47.09.11.1.2.07.31-.09.38-.3 1.25-.34 1.41-.05.21-.18.26-.39.16-1.46-.68-2.37-2.81-2.37-4.53 0-3.69 2.68-7.07 7.73-7.07 4.05 0 7.2 2.88 7.2 6.73 0 4.02-2.54 7.26-6.07 7.26-1.18 0-2.29-.62-2.67-1.34l-.73 2.78c-.26 1-.72 2.25-1.07 3.01 1.14.35 2.35.54 3.61.54 5.52 0 10-4.48 10-10S17.52 2 12 2z"></path></svg>
          </a>
          <a href="#" className={styles.socialBtn} style={{backgroundColor: '#00aced'}} aria-label="Twitter">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="#" className={styles.socialBtn} style={{backgroundColor: '#f39c12'}} aria-label="RSS">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M4 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </a>
          <a href="#" className={styles.socialBtn} style={{backgroundColor: '#ea4c89'}} aria-label="Dribbble">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8.46 9.5c-.27-.06-2.52-.56-5.2-.28.87 2.45 1.55 5.06 1.63 5.4 1.83-1.22 3.14-3.08 3.57-5.12zM12 20.5c-1.57 0-3.04-.43-4.32-1.18 1.48-.96 4.09-2.88 7.02-3.15-.06-.27-.72-2.78-1.54-5.08-3.06.87-6.23.95-6.62.96-.01.32-.01.63-.01.95 0 1.95.42 3.8 1.18 5.46-2.31-1.39-3.95-3.66-4.48-6.31.42-.01 3.25-.1 6.13-1.02-1.63-3.15-3.37-5.83-3.59-6.17C7.65 3.51 9.72 2.7 12 2.7c1.7 0 3.3.41 4.7 1.13-1.23 1.86-2.73 4.29-4.14 6.84 2.42.66 4.31 1.69 4.54 1.83.67-1.89 1.1-3.9 1.25-5.96 1.49 1.13 2.58 2.72 2.99 4.56-2.14-1.23-4.54-1.64-4.88-1.68z"></path></svg>
          </a>
        </div>
      </div>
      
      <div className={styles.copyrightBar}>
        <div className="container">
          {t('copyright')} <a href="#" className={styles.legalLink}>{t('terms')}</a> {t('and')} <a href="#" className={styles.legalLink}>{t('privacy')}</a>
        </div>
      </div>
    </footer>
  );
}
