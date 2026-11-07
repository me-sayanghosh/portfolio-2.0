import type { Metadata } from 'next';
import { ExperiencePage } from '../../src/features/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Work experience, internships, and technical roles held by Sayan Ghosh at RealAI Solutions, PHICSIT InfoTech, and Sewakunj Technologies.',
  alternates: {
    canonical: 'https://thesayan.vercel.app/experience',
  },
  openGraph: {
    title: 'Work Experience | Sayan Ghosh',
    description: 'Explore the professional software engineering experience, roles, and technical achievements of Sayan Ghosh.',
    url: 'https://thesayan.vercel.app/experience',
    type: 'website',
    images: [{ url: '/assets/profile-avatar.webp', width: 800, height: 800, alt: 'Sayan Ghosh Experience' }],
  },
};

export default function ExperienceRoute() {
  return <ExperiencePage />;
}
