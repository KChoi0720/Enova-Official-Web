import Navbar from '@/components/Navbar';

export default function CoursesPage() {
  return (
    <main>
      <div style={{ backgroundColor: 'var(--primary)' }}>
        <Navbar />
      </div>
      <div className="container" style={{ padding: '100px 20px', minHeight: '60vh' }}>
        <h1>All Courses</h1>
        <p>List of all available courses.</p>
      </div>
    </main>
  );
}
