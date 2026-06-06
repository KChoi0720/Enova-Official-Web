'use client';

import { useState } from 'react';
import styles from './Courses.module.css';

// ── Mock Data ─────────────────────────────────────────────────

const partners = [
  { id: 1, name: 'Starline',  accent: '#f47920', bg: '#fff3ec', border: '#f47920' },
  { id: 2, name: 'STOCK↑',   accent: '#2eb48e', bg: '#edfaf4', border: '#2eb48e' },
  { id: 3, name: 'SH',        accent: '#fff',    bg: '#e74c3c', border: '#e74c3c' },
  { id: 4, name: '≋ waves',  accent: '#26a6d1', bg: '#eaf6fb', border: '#26a6d1' },
  { id: 5, name: 'super',     accent: '#888',    bg: '#f5f5f5', border: '#ccc'    },
];

const recentPosts = [
  { id: 1, title: 'Medical Chemistry: The Molecular Basis',        date: 'January 14, 2019', author: 'John Doe', comments: 157, color: '#2eb48e' },
  { id: 2, title: 'Introduction to Computer Science',              date: 'January 14, 2019', author: 'John Doe', comments: 163, color: '#26a6d1' },
  { id: 3, title: 'Introduction to Biomedical Imaging',           date: 'January 13, 2019', author: 'John Doe', comments: 80,  color: '#9b59b6' },
  { id: 4, title: 'Evaluating Social Programs',                    date: 'January 13, 2019', author: 'John Doe', comments: 77,  color: '#fbb03b' },
];

const latestComments = [
  { author: 'TRX_admin',       post: 'Star Print Backpack' },
  { author: 'TRX_admin',       post: 'Yellow Backpack' },
  { author: 'Sebastian Jones', post: 'Principles of Written English, Part 2' },
  { author: 'TRX_admin',       post: 'Principles of Written English, Part 2' },
  { author: 'TRX_admin',       post: 'Video Training for Microsoft products and technologies' },
];

// ── Calendar Helpers ──────────────────────────────────────────

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];
const DAYS = ['MON','TUE','WED','THU','FRI','SAT','SUN'];

function daysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate(); }
function firstWeekday(y: number, m: number) { const d = new Date(y, m, 1).getDay(); return d === 0 ? 6 : d - 1; }

function CalendarWidget() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const prev = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const next = () => { if (month === 11) { setMonth(0);  setYear(y => y + 1); } else setMonth(m => m + 1); };

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday(year, month); i++) cells.push(null);
  for (let d = 1; d <= daysInMonth(year, month); d++) cells.push(d);

  const isToday = (d: number) =>
    d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  return (
    <div className={styles.calWidget}>
      <div className={styles.calHeader}>
        <button onClick={prev} className={styles.calNav} aria-label="Previous">‹</button>
        <span className={styles.calMonthLabel}>{MONTHS[month].toUpperCase()} {year}</span>
        <button onClick={next} className={styles.calNav} aria-label="Next">›</button>
      </div>
      <div className={styles.calGrid}>
        {DAYS.map(d => <div key={d} className={styles.calDayName}>{d}</div>)}
        {cells.map((d, i) => (
          <div key={i} className={`${styles.calCell} ${d && isToday(d) ? styles.calToday : ''} ${!d ? styles.calBlank : ''}`}>
            {d ?? ''}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────

export default function CourseExtras() {
  return (
    <>
      {/* ── Schools & Partners ── */}
      <section className={styles.partnersSection}>
        <div className="container">
          <h2 className={styles.partnersTitle}>Schools &amp; Partners</h2>
          <p className={styles.partnersDesc}>
            We believe in offering the highest quality courses, created by schools and partners who
            share our commitment to excellence in teaching and learning, both online and in the classroom.
          </p>
          <div className={styles.partnersRow}>
            {partners.map(p => (
              <div
                key={p.id}
                className={styles.partnerLogo}
                style={{ backgroundColor: p.bg, borderColor: p.border, color: p.accent }}
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three Widgets ── */}
      <section className={styles.widgetsSection}>
        <div className={`container ${styles.widgetsGrid}`}>

          {/* Calendar */}
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>Calendar</h3>
            <CalendarWidget />
          </div>

          {/* Recent Posts */}
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>Recent Posts</h3>
            <div className={styles.postList}>
              {recentPosts.map(post => (
                <div key={post.id} className={styles.postRow}>
                  <div className={styles.postThumb} style={{ backgroundColor: post.color }}>
                    📚
                  </div>
                  <div className={styles.postContent}>
                    <p className={styles.postTitle}>{post.title}</p>
                    <div className={styles.postMeta}>
                      <span>{post.date}</span>
                      <span>by {post.author}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Comments */}
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>Latest comments</h3>
            <ul className={styles.commentList}>
              {latestComments.map((c, i) => (
                <li key={i} className={styles.commentItem}>
                  <span className={styles.commentDot}>•</span>
                  <span>
                    <strong>{c.author}</strong>
                    {' '}on{' '}
                    <a href="#" className={styles.commentLink}>{c.post}</a>
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
