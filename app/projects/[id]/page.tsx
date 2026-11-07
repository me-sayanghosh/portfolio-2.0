import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetailPage } from '../../../src/features/projects';
import { projectsData } from '../../../src/features/projects/data/projectsData';
import { BASE_URL, buildBreadcrumbSchema, buildProjectSchema, createGraphJsonLd } from '../../../src/lib/jsonLd';

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
    keywords: [project.title, ...project.tags, 'Sayan Ghosh', 'Project', 'Full-Stack'],
    alternates: {
      canonical: `${BASE_URL}/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | Sayan Ghosh Portfolio`,
      description: project.subtitle,
      url: `${BASE_URL}/projects/${project.id}`,
      siteName: 'Sayan Ghosh Portfolio',
      type: 'article',
      images: [
        {
          url: `/projects/${project.id}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${project.title} by Sayan Ghosh`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Sayan Ghosh`,
      description: project.subtitle,
      images: [`/projects/${project.id}/opengraph-image`],
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

  const projectSchema = buildProjectSchema(project);
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: project.title, url: `/projects/${project.id}` },
  ]);
  const jsonLd = createGraphJsonLd(projectSchema, breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailPage projectId={id} />
    </>
  );
}
