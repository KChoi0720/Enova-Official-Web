import Navbar from '@/components/Navbar';

export default function ContactPage() {
  return (
    <main>
      <div style={{ backgroundColor: 'var(--primary)' }}>
        <Navbar />
      </div>
      <div className="container" style={{ padding: '100px 20px', minHeight: '60vh' }}>
        <h1>Contact Us</h1>
        <p>Get in touch with Enova.</p>
      </div>
    </main>
  );
}
