import type { Metadata } from 'next';
import { ProjectsPage } from '../../src/features/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore web apps, AI tools, and scalable software systems built by Sayan Ghosh including DropTalk, HoopIt, PrepDost, and CodeReviewer AI.',
  alternates: {
    canonical: 'https://thesayan.vercel.app/projects',
  },
  openGraph: {
    title: 'Projects | Sayan Ghosh Portfolio',
    description: 'Explore web applications, real-time architectures, and AI tools built by Sayan Ghosh.',
    url: 'https://thesayan.vercel.app/projects',
    images: [{ url: '/assets/droptalk-banner.webp', width: 1200, height: 630, alt: 'Sayan Ghosh Projects' }],
  },
};

export default function ProjectsRoute() {
  return <ProjectsPage />;
}
