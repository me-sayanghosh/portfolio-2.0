'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
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

      {/* Editorial Divided Blog Feed Matching Requested Style */}
      <div className="divide-y divide-white/10 border-t border-b border-white/10 mb-6">
        {blogsData.slice(0, 4).map((blog) => (
          <div
            key={blog.id}
            onClick={() => router.push(`/blogs/${blog.id}`)}
            className="py-3.5 sm:py-4 px-2 sm:px-3 hover:bg-white/[0.03] active:bg-white/[0.06] transition-colors cursor-pointer group select-none rounded-md"
          >
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 group-active:text-amber-400 transition-colors tracking-tight leading-snug">
              {blog.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans mt-1 line-clamp-1 sm:line-clamp-2 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>
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
