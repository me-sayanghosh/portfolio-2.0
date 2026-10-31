'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { blogsData } from './data/blogsData';
import { ContactAndSignature } from '../contact';

export default function BlogsPage() {
  const router = useRouter();

  return (
    <motion.div
      key="blogs-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="pt-3 sm:pt-24 pb-16 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6"
    >
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-2.5 font-sans">
        <span
          onClick={() => router.push('/')}
          className="hover:text-white cursor-pointer transition-colors"
        >
          Home
        </span>
        <span>/</span>
        <span className="text-white font-medium">Blogs</span>
      </div>

      {/* Page Title & Description */}
      <div className="mb-6 sm:mb-8">
        <h1
          className="font-bricolage text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-2.5"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Blogs<span className="text-amber-500">.</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed font-sans">
          Deep dives, technical architectures, and practical engineering lessons on Python, AI workflows, and modern web systems.
        </p>
      </div>

      {/* Editorial Divided Blog Feed Matching Requested Style */}
      <div className="divide-y divide-white/10 border-t border-b border-white/10 mb-14 sm:mb-16">
        {blogsData.map((blog, idx) => (
          <div
            key={blog.id}
            onClick={() => router.push(`/blogs/${blog.id}`)}
            className="py-3.5 sm:py-4 px-2 sm:px-3 hover:bg-white/[0.03] active:bg-white/[0.06] transition-colors cursor-pointer group select-none rounded-md"
          >
            <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 group-active:text-amber-400 transition-colors tracking-tight leading-snug">
              {blog.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-sans mt-1 line-clamp-1 sm:line-clamp-2 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Contact & Signature */}
      <ContactAndSignature />
    </motion.div>
  );
}
