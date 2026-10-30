'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { blogsData } from '../../blogs/data/blogsData';

export default function HomeBlogSection() {
  const router = useRouter();

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Title */}
      <h2
        className="font-bricolage text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        Blogs <span className="text-amber-500">.</span>
      </h2>

      {/* Blog Cards List */}
      <div className="space-y-3.5 mb-6">
        {blogsData.slice(0, 2).map((blog, idx) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            whileHover={{ y: -2 }}
            onClick={() => router.push(`/blogs/${blog.id}`)}
            className="p-5 sm:p-6 rounded-2xl bg-[#181818]/90 border border-white/10 hover:border-amber-500/30 hover:bg-[#1f1f1f] transition-all duration-300 group cursor-pointer shadow-sm"
          >
            {/* Top row: tags and reading time */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-2">
                {blog.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-500 font-sans">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  {blog.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gray-500" />
                  {blog.readTime}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors tracking-tight mb-1.5">
              {blog.title}
            </h3>

            {/* Excerpt */}
            <p className="text-xs sm:text-sm text-gray-400 font-sans line-clamp-2 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Read article link */}
            <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-gray-400 font-medium font-sans">
                By {blog.author.name}
              </span>
              <div className="flex items-center gap-1 text-amber-500 font-semibold group-hover:text-amber-400 transition-colors">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Blogs Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => router.push('/blogs')}
          className="px-7 py-2.5 rounded-full border border-white/20 bg-[#181818] hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center space-x-2"
        >
          <span>View All Blogs</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
