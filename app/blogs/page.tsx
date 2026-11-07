import type { Metadata } from 'next';
import { BlogsPage } from '../../src/features/blogs';

export const metadata: Metadata = {
  title: 'Engineering Blogs',
  description: 'Technical articles, architectural breakdowns, AI security analysis, and engineering perspectives written by Sayan Ghosh.',
  alternates: {
    canonical: 'https://thesayan.vercel.app/blogs',
  },
  openGraph: {
    title: 'Engineering Blogs | Sayan Ghosh',
    description: 'Technical articles, architectural breakdowns, AI security analysis, and engineering perspectives written by Sayan Ghosh.',
    url: 'https://thesayan.vercel.app/blogs',
    type: 'website',
    images: [{ url: '/assets/profile-avatar.webp', width: 800, height: 800, alt: 'Sayan Ghosh Blogs' }],
  },
};

export default function BlogsRoute() {
  return <BlogsPage />;
}
