import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetailPage } from '../../../src/features/projects';
import { projectsData } from '../../../src/features/projects/data/projectsData';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const description = project.overview.slice(0, 160);

  return {
    title: project.title,
    description,
    keywords: [project.title, ...project.tags, 'Sayan Ghosh', 'Project'],
    alternates: {
      canonical: `https://thesayan.vercel.app/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | Sayan Ghosh Portfolio`,
      description: project.subtitle,
      url: `https://thesayan.vercel.app/projects/${project.id}`,
      siteName: 'Sayan Ghosh Portfolio',
      type: 'article',
      images: [
        {
          url: project.bannerImg,
          alt: `${project.title} banner`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Sayan Ghosh`,
      description: project.subtitle,
      images: [project.bannerImg],
    },
  };
}

export default async function ProjectDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.overview,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    author: {
      '@type': 'Person',
      name: 'Sayan Ghosh',
      url: 'https://thesayan.vercel.app',
    },
    image: `https://thesayan.vercel.app${project.bannerImg}`,
    url: `https://thesayan.vercel.app/projects/${project.id}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectDetailPage projectId={id} />
    </>
  );
}
