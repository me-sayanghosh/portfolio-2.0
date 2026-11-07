import type { Metadata } from 'next';
import AboutClient from './AboutClient';
import { BASE_URL, buildBreadcrumbSchema, createGraphJsonLd } from '../../src/lib/jsonLd';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'About Sayan Ghosh — Full-Stack Developer and AI Engineer based in Kalyani, India. Read about my engineering background, technical journey, tech stack, and values.',
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: 'About Sayan Ghosh | Full-Stack & AI Engineer',
    description:
      'Learn more about Sayan Ghosh, his technical background, engineering journey, and core software stack.',
    url: `${BASE_URL}/about`,
    type: 'profile',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'About Sayan Ghosh',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sayan Ghosh | Full-Stack & AI Engineer',
    description:
      'Learn more about Sayan Ghosh, his technical background, engineering journey, and core software stack.',
    images: ['/twitter-image'],
  },
};

export default function AboutRoute() {
  const aboutPage = {
    '@type': 'AboutPage',
    '@id': `${BASE_URL}/about#webpage`,
    url: `${BASE_URL}/about`,
    name: 'About Sayan Ghosh | Full-Stack & AI Engineer',
    description:
      'Background, engineering journey, skills, values, and community contributions of Sayan Ghosh.',
    mainEntity: {
      '@id': `${BASE_URL}/#person`,
    },
  };

  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  const jsonLd = createGraphJsonLd(aboutPage, breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
