'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, ArrowRight, Search, Tag } from 'lucide-react';
import { blogsData } from './data/blogsData';
import { ContactAndSignature } from '../contact';

export default function BlogsPage() {
  const router = useRouter();
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract all unique tags
  const allTags = ['All', ...Array.from(new Set(blogsData.flatMap((b) => b.tags)))];

  // Filtered blogs
  const filteredBlogs = blogsData.filter((blog) => {
    const matchesTag = selectedTag === 'All' || blog.tags.includes(selectedTag);
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  return (
    <motion.div
      key="blogs-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="pt-20 sm:pt-24 pb-16 max-w-4xl mx-auto px-4 sm:px-6"
    >
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-4 font-sans">
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
      <div className="mb-8">
        <h1
          className="font-bricolage text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Blogs<span className="text-amber-500">.</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed font-sans">
          Deep dives, technical architectures, and practical lessons on Python backend engineering, AI systems, and modern web software.
        </p>
      </div>

      {/* Search & Tag Filter Bar */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, topic, or keyword..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#161616] border border-white/10 hover:border-white/20 focus:border-amber-500/50 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none transition-colors shadow-inner"
          />
        </div>

        {/* Tag Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {allTags.map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-black font-semibold shadow-md'
                    : 'bg-[#1e1e1e] border border-white/10 text-gray-300 hover:text-white hover:border-white/25'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Blog Cards List */}
      <div className="space-y-4 mb-16">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 bg-[#161616]/50 rounded-2xl border border-white/10">
            <BookOpen className="w-8 h-8 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">No articles found matching your criteria.</p>
          </div>
        ) : (
          filteredBlogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              onClick={() => router.push(`/blogs/${blog.id}`)}
              className="group cursor-pointer p-4 sm:p-5 rounded-2xl bg-[#171717]/90 hover:bg-[#1e1e1e] border border-white/10 hover:border-amber-500/30 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-amber-500/5"
            >
              {/* Cover Banner Image */}
              {blog.coverImage && (
                <div className="relative w-full aspect-[16/9] sm:aspect-[2.2/1] rounded-xl overflow-hidden mb-4 bg-[#141414] border border-white/10">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2.5">
                {/* Tags & Meta */}
                <div className="flex flex-wrap items-center gap-2">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-400 font-sans">
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
              <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors tracking-tight mb-2">
                {blog.title}
              </h2>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed mb-4 line-clamp-2">
                {blog.excerpt}
              </p>

              {/* Author & Read Link */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex items-center gap-2.5">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-6 h-6 rounded-full object-cover border border-white/20"
                  />
                  <span className="text-xs text-gray-300 font-medium">
                    {blog.author.name}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500 group-hover:text-amber-400 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))
        )}
      </div>

      {/* Footer Contact & Signature */}
      <ContactAndSignature />
    </motion.div>
  );
}
