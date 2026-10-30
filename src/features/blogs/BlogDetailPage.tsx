'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  Copy,
  ArrowRight
} from 'lucide-react';
import { blogsData } from './data/blogsData';
import { ContactAndSignature } from '../contact';

interface BlogDetailPageProps {
  blogId?: string;
}

export default function BlogDetailPage({ blogId }: BlogDetailPageProps) {
  const params = useParams();
  const router = useRouter();
  const id = blogId || params?.id;
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSnippetIndex, setCopiedSnippetIndex] = useState<number | null>(null);

  const blog = blogsData.find((b) => b.id === id || b.slug === id) || blogsData[0];
  const moreArticles = blogsData.filter((b) => b.id !== blog.id).slice(0, 2);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetIndex(index);
    setTimeout(() => setCopiedSnippetIndex(null), 2000);
  };

  return (
    <motion.div
      key={`blog-detail-${blog.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="pt-16 sm:pt-24 pb-28 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6"
    >
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 font-sans">
        <span
          onClick={() => router.push('/')}
          className="hover:text-white cursor-pointer transition-colors"
        >
          Home
        </span>
        <span>/</span>
        <span
          onClick={() => router.push('/blogs')}
          className="hover:text-white cursor-pointer transition-colors"
        >
          Blogs
        </span>
        <span>/</span>
        <span className="text-amber-400 font-medium truncate max-w-[140px] sm:max-w-md">
          {blog.title}
        </span>
      </div>

      {/* Top Navigation Row: Back Button + Share */}
      <div className="flex items-center justify-between gap-3 mb-6 sm:mb-8">
        <button
          onClick={() => router.push('/blogs')}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#1b1b1b] border border-white/10 hover:border-white/25 active:scale-95 text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>All Articles</span>
        </button>

        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#1b1b1b] border border-white/10 hover:border-amber-500/30 active:scale-95 text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-sm"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-gray-400" />
              <span>Share</span>
            </>
          )}
        </button>
      </div>

      {/* Article Header */}
      <header className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
        {/* Title */}
        <h1
          className="font-bricolage text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {blog.title}
        </h1>

        {/* Excerpt / Lead */}
        <p className="text-xs sm:text-base md:text-lg text-gray-300 leading-relaxed font-sans">
          {blog.excerpt}
        </p>

        {/* Meta & Author Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-b border-white/10 py-3">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-white/20 shadow-sm"
            />
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                {blog.author.name}
              </p>
              <p className="text-[11px] sm:text-xs text-gray-400 font-sans mt-0.5">
                {blog.author.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-gray-400 font-sans">
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
      </header>

      {/* Featured Hero Cover Banner */}
      {blog.coverImage && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-10 bg-[#111111] border border-white/10 shadow-2xl">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content Sections */}
      <article className="space-y-6 sm:space-y-8 font-sans text-gray-300 leading-relaxed text-sm sm:text-base">
        {blog.sections.map((section, idx) => (
          <div key={idx} className="space-y-2.5 sm:space-y-3.5">
            {/* Section Heading */}
            {section.heading && (
              <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight pt-2 sm:pt-3">
                {section.heading}
              </h2>
            )}

            {/* Section Body */}
            {section.body && (
              <p className="text-gray-300 leading-relaxed text-xs sm:text-base">
                {section.body}
              </p>
            )}

            {/* Bullet points if any */}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-1.5 sm:space-y-2 pl-4 sm:pl-5 list-disc text-gray-300 marker:text-amber-500 text-xs sm:text-base">
                {section.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {/* Callout quote box if any */}
            {section.callout && (
              <div className="p-3.5 sm:p-5 rounded-xl bg-amber-500/5 border-l-4 border-amber-500 my-3 sm:my-4 text-amber-200/90 text-xs sm:text-sm italic shadow-inner leading-relaxed">
                {section.callout}
              </div>
            )}

            {/* Code Snippet if any */}
            {section.codeSnippet && (
              <div className="my-4 sm:my-5 rounded-xl overflow-hidden border border-white/10 bg-[#121212] shadow-2xl">
                {/* Code header bar */}
                <div className="flex items-center justify-between px-3.5 py-2 sm:px-4 sm:py-2.5 bg-[#1a1a1a] border-b border-white/10 text-[11px] sm:text-xs text-gray-400 font-mono">
                  <span className="truncate max-w-[200px] sm:max-w-none">
                    {section.codeSnippet.caption || section.codeSnippet.language}
                  </span>
                  <button
                    onClick={() => handleCopyCode(section.codeSnippet!.code, idx)}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white active:scale-95 transition-all cursor-pointer shrink-0"
                  >
                    {copiedSnippetIndex === idx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-sans">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="font-sans">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Body with Smooth Mobile Horizontal Scrolling */}
                <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm font-mono text-gray-200 leading-relaxed scrollbar-thin">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </article>

      {/* Post-Article Divider */}
      <div className="border-t border-white/10 my-8 sm:my-12" />

      {/* Read Next / More Articles Section */}
      {moreArticles.length > 0 && (
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="font-bricolage text-lg sm:text-2xl font-bold text-white tracking-tight">
              More Articles
            </h3>
            <button
              onClick={() => router.push('/blogs')}
              className="text-xs sm:text-sm text-amber-500 hover:text-amber-400 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {moreArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => router.push(`/blogs/${article.id}`)}
                className="group cursor-pointer p-3.5 sm:p-5 rounded-xl bg-[#161616] hover:bg-[#202020] border border-white/10 hover:border-amber-500/30 active:scale-[0.99] active:bg-[#222222] transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div>
                  {article.coverImage && (
                    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-3 bg-[#111111] border border-white/10">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-end text-[10px] sm:text-[11px] text-gray-400 mb-1.5">
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="text-xs sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-1.5 leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-400 line-clamp-2 font-sans">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
                  <span>{article.date}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Signature & Contact */}
      <ContactAndSignature />
    </motion.div>
  );
}
