import type { Metadata } from 'next';
import { GalleryPage } from '../../src/features/gallery';

export const metadata: Metadata = {
  title: 'Gallery & Community Moments',
  description: 'Life outside the code editor: tech meetups, community conferences, hackathon wins, and moments with developer communities.',
  alternates: {
    canonical: 'https://thesayan.vercel.app/gallery',
  },
  openGraph: {
    title: 'Gallery & Community Moments | Sayan Ghosh',
    description: 'Tech meetups, developer conferences, hackathon stages, and community keynotes attended by Sayan Ghosh.',
    url: 'https://thesayan.vercel.app/gallery',
    type: 'website',
    images: [{ url: '/gallery/gallery-1.webp', width: 1200, height: 630, alt: 'Sayan Ghosh Gallery' }],
  },
};

export default function GalleryRoute() {
  return <GalleryPage />;
}
