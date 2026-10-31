'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ContactAndSignature } from '../../src/features/contact';

export default function GuestbookPage() {
  const router = useRouter();

  return (
    <motion.div
      key="guestbook-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="pt-3 sm:pt-24 pb-16 max-w-4xl mx-auto px-4 sm:px-6"
    >
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-2.5 font-sans">
        <span
          onClick={() => router.push('/')}
          className="hover:text-white cursor-pointer transition-colors"
        >
          Home
        </span>
        <span>/</span>
        <span className="text-white font-medium">Guestbook</span>
      </div>

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1
          className="font-bricolage text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-2.5"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Guestbook<span className="text-amber-500">.</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed font-sans">
          Leave a note, share your thoughts, or connect directly. Always happy to chat about software engineering, AI, and systems design.
        </p>
      </div>

      {/* Contact & Signature Section */}
      <ContactAndSignature />
    </motion.div>
  );
}
