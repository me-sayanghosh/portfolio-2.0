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
  BookOpen,
  ArrowRight,
  Sparkles
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
      className="pt-20 sm:pt-24 pb-16 max-w-4xl mx-auto px-4 sm:px-6"
    >
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-6 font-sans">
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
        <span className="text-amber-400 font-medium truncate max-w-[200px] sm:max-w-md">
          {blog.title}
        </span>
      </div>

      {/* Top Navigation Row: Back Button + Share */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <button
          onClick={() => router.push('/blogs')}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1b1b] border border-white/10 hover:border-white/25 text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-all active:scale-95 cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Articles</span>
        </button>

        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1b1b] border border-white/10 hover:border-amber-500/30 text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-all active:scale-95 cursor-pointer shadow-sm"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Link Copied!</span>
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
      <header className="mb-10 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="font-bricolage text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {blog.title}
        </h1>

        {/* Excerpt / Lead */}
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
          {blog.excerpt}
        </p>

        {/* Meta & Author Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-b border-white/10 py-3.5">
          <div className="flex items-center gap-3">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-sm"
            />
            <div>
              <p className="text-sm font-bold text-white leading-tight">
                {blog.author.name}
              </p>
              <p className="text-xs text-gray-400 font-sans mt-0.5">
                {blog.author.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-400 font-sans">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-500" />
              {blog.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gray-500" />
              {blog.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Article Content Sections */}
      <article className="space-y-8 font-sans text-gray-300 leading-relaxed text-sm sm:text-base">
        {blog.sections.map((section, idx) => (
          <div key={idx} className="space-y-3.5">
            {/* Section Heading */}
            {section.heading && (
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-3">
                {section.heading}
              </h2>
            )}

            {/* Section Body */}
            {section.body && (
              <p className="text-gray-300 leading-relaxed">
                {section.body}
              </p>
            )}

            {/* Bullet points if any */}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2 pl-4 list-disc text-gray-300 marker:text-amber-500">
                {section.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {/* Callout quote box if any */}
            {section.callout && (
              <div className="p-4 sm:p-5 rounded-xl bg-amber-500/5 border-l-4 border-amber-500 my-4 text-amber-200/90 text-sm italic shadow-inner">
                {section.callout}
              </div>
            )}

            {/* Code Snippet if any */}
            {section.codeSnippet && (
              <div className="my-5 rounded-xl overflow-hidden border border-white/10 bg-[#121212] shadow-2xl">
                {/* Code header bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#1a1a1a] border-b border-white/10 text-xs text-gray-400 font-mono">
                  <span>{section.codeSnippet.caption || section.codeSnippet.language}</span>
                  <button
                    onClick={() => handleCopyCode(section.codeSnippet!.code, idx)}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
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

                {/* Code Body */}
                <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-gray-200 leading-relaxed scrollbar-thin">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </article>

      {/* Post-Article Divider */}
      <div className="border-t border-white/10 my-12" />

      {/* Read Next / More Articles Section */}
      {moreArticles.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bricolage text-xl sm:text-2xl font-bold text-white tracking-tight">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {moreArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => router.push(`/blogs/${article.id}`)}
                className="group cursor-pointer p-5 rounded-xl bg-[#171717] hover:bg-[#202020] border border-white/10 hover:border-amber-500/30 transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
                    <span className="text-amber-400 font-medium">
                      {article.tags[0]}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2 font-sans">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
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
