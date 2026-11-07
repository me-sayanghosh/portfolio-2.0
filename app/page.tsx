import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { BASE_URL, buildBreadcrumbSchema } from '../src/lib/jsonLd';

export const metadata: Metadata = {
  title: {
    absolute: 'Sayan Ghosh | Full-Stack & AI Engineer',
  },
  description:
    'Official portfolio of Sayan Ghosh — Full-Stack Developer, AI Enthusiast, and Open-Source Builder based in Kalyani, West Bengal. Building high-performance web apps, AI tools, and scalable distributed systems.',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Sayan Ghosh | Full-Stack Developer & AI Engineer',
    description:
      'Transforming complex problems into elegant, scalable solutions. Full-stack developer and AI builder based in Kalyani, India.',
    url: BASE_URL,
    siteName: 'Sayan Ghosh Portfolio',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Sayan Ghosh - Full-Stack Developer & AI Engineer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sayan Ghosh | Full-Stack Developer & AI Engineer',
    description:
      'Transforming complex problems into elegant, scalable solutions. Full-stack developer and AI builder based in Kalyani, India.',
    images: ['/twitter-image'],
  },
};

export default function HomeRoute() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/#profile`,
    url: BASE_URL,
    name: 'Sayan Ghosh — Portfolio & Profile',
    description:
      'Official portfolio of Sayan Ghosh — Full-Stack Developer, AI Enthusiast, and Open-Source Builder based in Kalyani, West Bengal.',
    mainEntity: {
      '@id': `${BASE_URL}/#person`,
    },
    about: {
      '@id': `${BASE_URL}/#person`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
