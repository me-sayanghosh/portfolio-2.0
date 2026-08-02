'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Masonry from '../../components/ui/Masonry';

export default function GalleryPage() {
  const router = useRouter();

  const galleryItems = [
    {
      id: '1',
      title: 'Hackfest & Tech Meetup Highlights',
      img: '/gallery/gallery-1.jpg',
      url: 'https://github.com/me-sayanghosh',
      height: 480
    },
    {
      id: '2',
      title: 'Community Keynote & Team Moments',
      img: '/gallery/gallery-2.jpg',
      url: 'https://github.com/me-sayanghosh',
      height: 270
    },
    {
      id: '3',
      title: 'Developer Conference Stage',
      img: '/gallery/gallery-3.jpg',
      url: 'https://github.com/me-sayanghosh',
      height: 270
    },
    {
      id: '4',
      title: 'Late Night Build Sessions',
      img: '/gallery/gallery-4.jpg',
      url: 'https://github.com/me-sayanghosh',
      height: 220
    },
    {
      id: '5',
      title: 'Hackathon Winner Celebration',
      img: '/gallery/gallery-5.jpg',
      url: 'https://github.com/me-sayanghosh',
      height: 270
    },
    {
      id: '6',
      title: 'Product Showcase & Demo Night',
      img: '/gallery/gallery-6.jpg',
      url: 'https://github.com/me-sayanghosh',
      height: 270
    },
    {
      id: '7',
      title: 'Building Scalable AI Systems',
      img: '/gallery/gallery-7.jpg',
      url: 'https://github.com/me-sayanghosh',
      height: 270
    },
    {
      id: '8',
      title: 'Tech Workshop & Mentorship',
      img: '/gallery/gallery-8.jpg',
      url: 'https://github.com/me-sayanghosh',
      height: 480
    },
    {
      id: '9',
      title: 'Community Event & Networking',
      img: '/gallery/gallery-9.jpg',
      url: 'https://github.com/me-sayanghosh',
      height: 480
    },
    {
      id: '10',
      title: 'Open Source & Engineering Milestones',
      img: '/gallery/gallery-10.jpg',
      url: 'https://github.com/me-sayanghosh',
      height: 480
    }
  ];

  return (
    <motion.div
      key="gallery-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="pt-8 sm:pt-10 pb-16 max-w-5xl mx-auto px-4 sm:px-6"
    >
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-3 font-sans">
        <span
          onClick={() => router.push('/')}
          className="hover:text-white cursor-pointer transition-colors"
        >
          Home
        </span>
        <span>/</span>
        <span className="text-white font-medium">Gallery</span>
      </div>

      {/* Page Title */}
      <div className="mb-10">
        <h1
          className="font-bricolage text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Gallery<span className="text-amber-500">.</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed font-sans">
          A visual glimpse into builds, hackathons, late-night coding sessions, and community moments.
        </p>
      </div>

      {/* Masonry Grid */}
      <div>
        <Masonry
          items={galleryItems}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.96}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </motion.div>
  );
}
