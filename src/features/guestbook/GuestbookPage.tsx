'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GuestbookSection from './components/GuestbookSection';
import { ConnectSection } from '../contact';

export default function GuestbookPage() {
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
      <nav aria-label="Breadcrumb" className="mb-2.5">
        <ol className="flex items-center space-x-2 text-xs sm:text-sm text-zinc-500 dark:text-gray-400 font-sans">
          <li>
            <Link
              href="/"
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-zinc-950 dark:text-white font-medium">Guestbook</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1
          className="font-bricolage text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2 sm:mb-2.5"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Guestbook<span className="text-amber-500">.</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-gray-400 max-w-2xl leading-relaxed font-sans">
          You have scrolled enough. Leave a note so I know you were here.
        </p>
      </div>

      {/* Guestbook Section (MongoDB + Google OAuth + Responsive UI) */}
      <GuestbookSection />

      {/* Connect Section with Social Pills */}
      <ConnectSection />
    </motion.div>
  );
}
