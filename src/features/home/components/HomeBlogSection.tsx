'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogsData } from '../../blogs/data/blogsData';
import BlurFade, { BLUR_FADE_DELAY } from '../../../components/ui/blur-fade';

export default function HomeBlogSection() {
  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Title */}
      <BlurFade delay={BLUR_FADE_DELAY * 12}>
        <h2
          className="font-bricolage text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Blogs <span className="text-amber-500">.</span>
        </h2>
      </BlurFade>

      {/* Editorial Divided Blog Feed Matching Requested Style */}
      <div className="divide-y divide-white/10 border-t border-b border-white/10 mb-6">
        {blogsData.slice(0, 5).map((blog, index) => (
          <BlurFade key={blog.id} delay={BLUR_FADE_DELAY * 13 + index * 0.04}>
            <Link
              href={`/blogs/${blog.id}`}
              className="block py-3.5 sm:py-4 px-2 sm:px-3 hover:bg-white/[0.03] active:bg-white/[0.06] transition-colors cursor-pointer group select-none rounded-md"
            >
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 group-active:text-amber-400 transition-colors tracking-tight leading-snug">
                {blog.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-sans mt-1 line-clamp-1 sm:line-clamp-2 leading-relaxed">
                {blog.excerpt}
              </p>
            </Link>
          </BlurFade>
        ))}
      </div>

      {/* View All Blogs Button */}
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <div className="flex justify-center mt-5 sm:mt-6">
          <Link
            href="/blogs"
            className="keep-dark px-6 py-2.5 rounded-full border border-black/10 dark:border-white/20 bg-neutral-900 dark:bg-[#161616] hover:bg-neutral-800 active:scale-95 text-white font-medium text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center space-x-2 group"
          >
            <span className="text-white">View All Blogs</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </BlurFade>
    </section>
  );
}
