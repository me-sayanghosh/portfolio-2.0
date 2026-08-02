'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Masonry from '../../components/ui/Masonry';

export default function GalleryPage() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const galleryItems = [
    {
      id: '1',
      title: 'Community Tech Keynote & Meetup',
      img: '/gallery/gallery-1.webp',
      height: 480
    },
    {
      id: '2',
      title: 'Hackfest & Tech Meetup Highlights',
      img: '/gallery/gallery-2.webp',
      height: 480
    },
    {
      id: '3',
      title: 'Engineering Showcase & Team Session',
      img: '/gallery/gallery-3.webp',
      height: 520
    },
    {
      id: '4',
      title: 'Hackathon Finalist Presentation',
      img: '/gallery/gallery-4.webp',
      height: 520
    },
    {
      id: '5',
      title: 'Tech Summit & Speaker Moments',
      img: '/gallery/gallery-5.webp',
      height: 520
    },
    {
      id: '6',
      title: 'Community Keynote & Team Moments',
      img: '/gallery/gallery-6.webp',
      height: 270
    },
    {
      id: '7',
      title: 'Developer Conference Stage',
      img: '/gallery/gallery-7.webp',
      height: 270
    },
    {
      id: '8',
      title: 'Dev Community Meetup & Networking',
      img: '/gallery/gallery-8.webp',
      height: 270
    },
    {
      id: '9',
      title: 'Late Night Build Sessions',
      img: '/gallery/gallery-9.webp',
      height: 220
    },
    {
      id: '10',
      title: 'Hackathon Winner Celebration',
      img: '/gallery/gallery-10.webp',
      height: 270
    },
    {
      id: '11',
      title: 'Product Showcase & Demo Night',
      img: '/gallery/gallery-11.webp',
      height: 270
    },
    {
      id: '12',
      title: 'Building Scalable AI Systems',
      img: '/gallery/gallery-12.webp',
      height: 270
    },
    {
      id: '13',
      title: 'Open Source Code Review & Demo',
      img: '/gallery/gallery-13.webp',
      height: 270
    },
    {
      id: '14',
      title: 'Tech Workshop & Mentorship',
      img: '/gallery/gallery-14.webp',
      height: 480
    },
    {
      id: '15',
      title: 'Community Event & Networking',
      img: '/gallery/gallery-15.webp',
      height: 480
    },
    {
      id: '16',
      title: 'Open Source & Engineering Milestones',
      img: '/gallery/gallery-16.webp',
      height: 480
    },
    {
      id: '17',
      title: 'Personal Coding & Creative Snapshot',
      img: '/gallery/gallery-17.webp',
      height: 540
    }
  ];

  return (
    <motion.div
      key="gallery-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="pt-6 sm:pt-10 pb-16 max-w-6xl mx-auto px-2.5 sm:px-6"
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
          onItemClick={(item: any) => setSelectedItem(item)}
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

      {/* High-Resolution Image Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Top-Right Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-11 h-11 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl active:scale-95"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[88vh] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/40 flex items-center justify-center"
            >
              <img
                src={selectedItem.img}
                alt={selectedItem.title || 'Gallery view'}
                className="max-h-[85vh] max-w-full w-auto h-auto object-contain rounded-2xl select-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
