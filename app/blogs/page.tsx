import type { Metadata } from 'next';
import { BlogsPage } from '../../src/features/blogs';
import { blogsData } from '../../src/features/blogs/data/blogsData';
import { BASE_URL, buildBreadcrumbSchema, buildCollectionSchema, createGraphJsonLd } from '../../src/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Engineering Blogs',
  description:
    'Technical articles, architectural breakdowns, AI security analysis, and engineering perspectives written by Sayan Ghosh.',
  alternates: {
    canonical: `${BASE_URL}/blogs`,
    types: {
      'application/rss+xml': [{ url: `${BASE_URL}/feed.xml`, title: 'Sayan Ghosh — RSS Feed' }],
    },
  },
  openGraph: {
    title: 'Engineering Blogs | Sayan Ghosh',
    description:
      'Technical articles, architectural breakdowns, AI security analysis, and engineering perspectives written by Sayan Ghosh.',
    url: `${BASE_URL}/blogs`,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Sayan Ghosh Engineering Blogs',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Blogs | Sayan Ghosh',
    description:
      'Technical articles, architectural breakdowns, AI security analysis, and engineering perspectives written by Sayan Ghosh.',
    images: ['/twitter-image'],
  },
};

export default function BlogsRoute() {
  const collection = buildCollectionSchema(
    'Engineering Blogs by Sayan Ghosh',
    'Technical deep-dives, architectural breakdowns, AI code safety analysis, and engineering perspectives.',
    '/blogs',
    blogsData.map((b) => ({
      name: b.title,
      url: `/blogs/${b.id}`,
      description: b.excerpt,
      image: b.coverImage,
    }))
  );

  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blogs', url: '/blogs' },
  ]);

  const jsonLd = createGraphJsonLd(collection, breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogsPage />
    </>
  );
}
