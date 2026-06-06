import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <main>
      <div style={{ backgroundColor: 'var(--primary)' }}>
        <Navbar />
      </div>
      <div className="container" style={{ padding: '100px 20px', minHeight: '60vh' }}>
        <h1>About Us</h1>
        <p>Information about Enova.</p>
      </div>
    </main>
  );
}
