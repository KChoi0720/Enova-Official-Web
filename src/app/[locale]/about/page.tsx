import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

export default async function AboutPage() {
  const t = await getTranslations('Navigation');

  return (
    <PageLayout
      title="About Us"
      breadcrumbs={[
        { label: t('home'), href: '/' },
        { label: t('about') },
      ]}
    >
      <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
        <h2>About Enova</h2>
        <p>Information about Enova.</p>
      </div>
    </PageLayout>
  );
}
