'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogsData } from '../../blogs/data/blogsData';

export default function HomeBlogSection() {
  const router = useRouter();

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Title */}
      <h2
        className="font-bricolage text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        Blogs <span className="text-amber-500">.</span>
      </h2>

      {/* Blog Cards List */}
      <div className="space-y-3 sm:space-y-4 mb-6">
        {blogsData.slice(0, 3).map((blog, idx) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            whileHover={{ y: -2 }}
            onClick={() => router.push(`/blogs/${blog.id}`)}
            className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#161616]/95 border border-white/10 hover:border-amber-500/30 hover:bg-[#1c1c1c] active:scale-[0.99] active:bg-[#1e1e1e] transition-all duration-300 group cursor-pointer shadow-sm flex flex-col sm:flex-row gap-3.5 sm:gap-5"
          >
            {/* Thumbnail */}
            {blog.coverImage && (
              <div className="relative w-full sm:w-44 md:w-52 aspect-[16/9] sm:aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden shrink-0 bg-[#111111] border border-white/10 shadow-inner">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div>
                {/* Meta Row: Tags & Read time */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                  <div className="flex items-center gap-1.5">
                    {blog.tags.slice(0, 2).map((tag) => (
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

                {/* Article Title */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-amber-400 group-active:text-amber-400 transition-colors tracking-tight line-clamp-2 mb-1.5 leading-snug">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-gray-400 font-sans line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              {/* Author & Action Link */}
              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-5 h-5 rounded-full object-cover border border-white/20"
                  />
                  <span className="text-[11px] sm:text-xs text-gray-400 font-medium font-sans">
                    {blog.author.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-amber-500 font-semibold group-hover:text-amber-400 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Blogs Button */}
      <div className="flex justify-center mt-5 sm:mt-6">
        <button
          onClick={() => router.push('/blogs')}
          className="px-6 py-2.5 rounded-full border border-white/20 bg-[#161616] hover:bg-neutral-800 active:scale-95 text-white font-medium text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center space-x-2"
        >
          <span>View All Blogs</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
