'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
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
      className="pt-16 sm:pt-24 pb-28 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6"
    >
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 font-sans">
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
      <div className="mb-8 sm:mb-10">
        <h1
          className="font-bricolage text-3xl sm:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-3"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Blogs<span className="text-amber-500">.</span>
        </h1>
        <p className="text-xs sm:text-base text-gray-400 max-w-2xl leading-relaxed font-sans">
          Deep dives, technical architectures, and practical engineering lessons on Python, AI workflows, and modern web systems.
        </p>
      </div>

      {/* Blog Cards List */}
      <div className="space-y-4 mb-14 sm:mb-16">
        {blogsData.map((blog, idx) => (
          <motion.article
            key={blog.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            onClick={() => router.push(`/blogs/${blog.id}`)}
            className="group cursor-pointer p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#161616]/95 hover:bg-[#1e1e1e] border border-white/10 hover:border-amber-500/30 active:scale-[0.99] active:bg-[#202020] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5"
          >
            {/* Cover Banner Image */}
            {blog.coverImage && (
              <div className="relative w-full aspect-[16/9] sm:aspect-[2.2/1] rounded-lg sm:rounded-xl overflow-hidden mb-3.5 sm:mb-4 bg-[#111111] border border-white/10 shadow-inner">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            )}

            {/* Tags & Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex flex-wrap items-center gap-1.5">
                {blog.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-400 font-sans">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-gray-500" />
                  {blog.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gray-500" />
                  {blog.readTime}
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-base sm:text-xl font-bold text-white group-hover:text-amber-400 group-active:text-amber-400 transition-colors tracking-tight mb-1.5 leading-snug">
              {blog.title}
            </h2>

            {/* Excerpt */}
            <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed mb-3 sm:mb-4 line-clamp-2">
              {blog.excerpt}
            </p>

            {/* Author & Read Link */}
            <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-white/5">
              <div className="flex items-center gap-2">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border border-white/20"
                />
                <span className="text-[11px] sm:text-xs text-gray-300 font-medium font-sans">
                  {blog.author.name}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500 group-hover:text-amber-400 transition-colors">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Footer Contact & Signature */}
      <ContactAndSignature />
    </motion.div>
  );
}
