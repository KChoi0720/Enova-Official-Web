import { Link } from '@/i18n/routing';
import Navbar from './Navbar';
import CoursesScrollNav from './CoursesScrollNav';
import styles from './PageLayout.module.css';

export interface Breadcrumb {
  label: string;
  /** Omit to render as plain text (current page) */
  href?: string;
}

interface PageLayoutProps {
  /** Banner heading */
  title: string;
  /** Breadcrumb trail shown in the banner */
  breadcrumbs?: Breadcrumb[];
  /** Banner background colour. Defaults to the site blue. */
  bannerColor?: string;
  /** How many px to scroll before the curtain nav appears. Default 160. */
  threshold?: number;
  children: React.ReactNode;
}

/**
 * Shared layout for inner pages (About, Team, Blog, Contact, …).
 *
 * Renders:
 *  1. A static white navbar (light theme)
 *  2. A scroll-triggered compact navbar that slides down like a curtain
 *  3. A coloured banner with a page title + breadcrumb pills
 *  4. `children` below the banner
 */
export default function PageLayout({
  title,
  breadcrumbs = [],
  bannerColor = '#26a6d1',
  threshold = 160,
  children,
}: PageLayoutProps) {
  return (
    <main className={styles.main}>

      {/* ── 1. Static white navbar ── */}
      <section className={styles.navbarSection}>
        <Navbar theme="light" />
      </section>

      {/* ── 2. Curtain navbar (fixed, slides in on scroll) ── */}
      <CoursesScrollNav threshold={threshold}>
        <Navbar theme="light" compact />
      </CoursesScrollNav>

      {/* ── 3. Coloured page banner ── */}
      <section className={styles.banner} style={{ backgroundColor: bannerColor }}>
        <div className={`container ${styles.bannerContent}`}>
          <h1 className={styles.bannerTitle}>{title}</h1>

          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} style={{ display: 'contents' }}>
                  {crumb.href ? (
                    <Link href={crumb.href as any} className={styles.breadcrumbItem}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={styles.breadcrumbItem}>{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className={styles.breadcrumbSep}>➔</span>
                  )}
                </span>
              ))}
            </nav>
          )}
        </div>
      </section>

      {/* ── 4. Page content ── */}
      {children}
    </main>
  );
}
