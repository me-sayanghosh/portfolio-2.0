import type { Metadata } from 'next';
import { ProjectsPage } from '../../src/features/projects';
import { projectsData } from '../../src/features/projects/data/projectsData';
import { BASE_URL, buildBreadcrumbSchema, buildCollectionSchema, createGraphJsonLd } from '../../src/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore web apps, AI tools, and scalable software systems built by Sayan Ghosh including DropTalk, HoopIt, PrepDost, and CodeReviewer AI.',
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
  openGraph: {
    title: 'Projects | Sayan Ghosh Portfolio',
    description:
      'Explore web applications, real-time architectures, and AI tools built by Sayan Ghosh.',
    url: `${BASE_URL}/projects`,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Sayan Ghosh Projects',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Sayan Ghosh Portfolio',
    description:
      'Explore web applications, real-time architectures, and AI tools built by Sayan Ghosh.',
    images: ['/twitter-image'],
  },
};

export default function ProjectsRoute() {
  const collection = buildCollectionSchema(
    'Projects by Sayan Ghosh',
    'Curated list of software engineering projects, web applications, and AI systems built by Sayan Ghosh.',
    '/projects',
    projectsData.map((p) => ({
      name: p.title,
      url: `/projects/${p.id}`,
      description: p.overview,
      image: p.bannerImg,
    }))
  );

  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
  ]);

  const jsonLd = createGraphJsonLd(collection, breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsPage />
    </>
  );
}
