import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

export default async function ContactPage() {
  const t = await getTranslations('Navigation');

  return (
    <PageLayout
      title="Contact Us"
      breadcrumbs={[
        { label: t('home'), href: '/' },
        { label: t('contact') },
      ]}
    >
      <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
        <h2>Contact Us</h2>
        <p>Get in touch with Enova.</p>
      </div>
    </PageLayout>
  );
}
