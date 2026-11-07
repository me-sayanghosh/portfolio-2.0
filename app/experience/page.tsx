import type { Metadata } from 'next';
import { ExperiencePage } from '../../src/features/experience';
import { experiencesData } from '../../src/features/experience/data/experiencesData';
import { BASE_URL, buildBreadcrumbSchema, buildCollectionSchema, createGraphJsonLd } from '../../src/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Work Experience',
  description:
    'Work experience, engineering internships, and technical roles held by Sayan Ghosh at RealAI Solutions, PHICSIT InfoTech, and Sewakunj Technologies.',
  alternates: {
    canonical: `${BASE_URL}/experience`,
  },
  openGraph: {
    title: 'Work Experience | Sayan Ghosh',
    description:
      'Explore the professional software engineering experience, roles, and technical achievements of Sayan Ghosh.',
    url: `${BASE_URL}/experience`,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Sayan Ghosh Experience',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work Experience | Sayan Ghosh',
    description:
      'Explore the professional software engineering experience, roles, and technical achievements of Sayan Ghosh.',
    images: ['/twitter-image'],
  },
};

export default function ExperienceRoute() {
  const collection = buildCollectionSchema(
    'Work Experience of Sayan Ghosh',
    'Professional software engineering history, roles, internships, and technical contributions.',
    '/experience',
    experiencesData.map((e) => ({
      name: `${e.title} at ${e.company}`,
      url: `/experience#${e.id}`,
      description: e.description,
      image: e.logo,
    }))
  );

  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Experience', url: '/experience' },
  ]);

  const jsonLd = createGraphJsonLd(collection, breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExperiencePage />
    </>
  );
}
