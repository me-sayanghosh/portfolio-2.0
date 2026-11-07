import type { Metadata } from 'next';
import { GalleryPage } from '../../src/features/gallery';
import { BASE_URL, buildBreadcrumbSchema } from '../../src/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Gallery & Community Moments',
  description:
    'Life outside the code editor: tech meetups, community conferences, hackathon wins, and moments with developer communities.',
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
  openGraph: {
    title: 'Gallery & Community Moments | Sayan Ghosh',
    description:
      'Tech meetups, developer conferences, hackathon stages, and community keynotes attended by Sayan Ghosh.',
    url: `${BASE_URL}/gallery`,
    type: 'website',
    images: [{ url: '/gallery/gallery-1.webp', width: 1200, height: 630, alt: 'Sayan Ghosh Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery & Community Moments | Sayan Ghosh',
    description:
      'Tech meetups, developer conferences, hackathon stages, and community keynotes attended by Sayan Ghosh.',
    images: ['/gallery/gallery-1.webp'],
  },
};

export default function GalleryRoute() {
  const galleryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Sayan Ghosh — Community & Conference Gallery',
    description:
      'Photo moments from hackathons, developer conferences, tech meetups, and speaking engagements.',
    url: `${BASE_URL}/gallery`,
    author: {
      '@type': 'Person',
      name: 'Sayan Ghosh',
      url: BASE_URL,
    },
  };

  const breadcrumbsJsonLd = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Gallery', url: '/gallery' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <GalleryPage />
    </>
  );
}
