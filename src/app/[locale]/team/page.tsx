import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

export default async function TeamPage() {
  const t = await getTranslations('Navigation');

  return (
    <PageLayout
      title="Our Team"
      breadcrumbs={[
        { label: t('home'), href: '/' },
        { label: t('team') },
      ]}
    >
      <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
        <h2>Our Team</h2>
        <p>Meet the teachers and team behind Enova.</p>
      </div>
    </PageLayout>
  );
}
