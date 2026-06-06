import Navbar from '@/components/Navbar';

export default function BlogPage() {
  return (
    <main>
      <div style={{ backgroundColor: 'var(--primary)' }}>
        <Navbar />
      </div>
      <div className="container" style={{ padding: '100px 20px', minHeight: '60vh' }}>
        <h1>Blog</h1>
        <p>Latest news and articles.</p>
      </div>
    </main>
  );
}
