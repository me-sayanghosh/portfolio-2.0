import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Masonry from '../../components/ui/Masonry';
import { ContactAndSignature } from '../contact';

export default function GalleryPage() {
  const navigate = useNavigate();

  const galleryItems = [
    {
      id: '1',
      title: 'Hackfest 2K26 Finalist Team',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      url: 'https://github.com/me-sayanghosh',
      height: 500
    },
    {
      id: '2',
      title: 'DevDotCom 2K+ Tech Community Meetup',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      url: 'https://github.com/me-sayanghosh',
      height: 380
    },
    {
      id: '3',
      title: 'Late Night Backend Architecture Setup',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      url: 'https://github.com/me-sayanghosh',
      height: 600
    },
    {
      id: '4',
      title: 'App-e-teaser 12hr Hyperthon 1st Runner Up',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      url: 'https://github.com/me-sayanghosh',
      height: 420
    },
    {
      id: '5',
      title: 'JISTECH Hackathon Winner 2025',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      url: 'https://github.com/me-sayanghosh',
      height: 460
    },
    {
      id: '6',
      title: 'HoopIt Product Launch & Demo',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      url: 'https://github.com/me-sayanghosh/hoopit',
      height: 520
    },
    {
      id: '7',
      title: 'PrepDost AI Interviewer Dashboard',
      img: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
      url: 'https://github.com/me-sayanghosh/prepdost',
      height: 400
    },
    {
      id: '8',
      title: 'Open Source Community Code Review',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
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
      className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6"
    >
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-3 font-sans">
        <span
          onClick={() => navigate('/')}
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
      <div className="mb-16">
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

      <ContactAndSignature />
    </motion.div>
  );
}
