import Navbar from '@/components/Navbar';

export default function TeamPage() {
  return (
    <main>
      <div style={{ backgroundColor: 'var(--primary)' }}>
        <Navbar />
      </div>
      <div className="container" style={{ padding: '100px 20px', minHeight: '60vh' }}>
        <h1>Our Team</h1>
        <p>Meet the teachers and team behind Enova.</p>
      </div>
    </main>
  );
}
