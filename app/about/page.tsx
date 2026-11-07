import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'About Sayan Ghosh — Full-Stack Developer and AI Engineer based in Kalyani, India. Read about my background, software engineering journey, skills, and values.',
  alternates: {
    canonical: 'https://thesayan.vercel.app/about',
  },
  openGraph: {
    title: 'About Sayan Ghosh | Full-Stack & AI Engineer',
    description: 'Learn more about Sayan Ghosh, his technical background, engineering journey, and core software stack.',
    url: 'https://thesayan.vercel.app/about',
    images: [{ url: '/assets/profile-avatar.webp', width: 800, height: 800, alt: 'Sayan Ghosh' }],
  },
};

export default function AboutRoute() {
  return <AboutClient />;
}
