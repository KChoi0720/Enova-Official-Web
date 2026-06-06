import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

export default async function BlogPage() {
  const t = await getTranslations('Navigation');

  return (
    <PageLayout
      title="Blog"
      breadcrumbs={[
        { label: t('home'), href: '/' },
        { label: t('blog') },
      ]}
    >
      <div className="container" style={{ padding: '80px 20px', minHeight: '60vh' }}>
        <h2>Blog</h2>
        <p>Latest news and articles.</p>
      </div>
    </PageLayout>
  );
}
