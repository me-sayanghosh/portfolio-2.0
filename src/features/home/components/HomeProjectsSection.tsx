'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../../projects/data/projectsData';

export default function HomeProjectsSection() {
  const router = useRouter();

  // Show top featured projects on the home page
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Title with Bricolage Grotesque Font */}
      <h2
        className="font-bricolage text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        Projects <span className="text-amber-500">.</span>
      </h2>

      {/* Optimized Smooth Projects List (Matching thatdevguy.in layout) */}
      <div className="space-y-3 mb-8">
        {featuredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group p-2.5 sm:p-3 transition-all duration-300 rounded-2xl bg-neutral-100/60 dark:bg-white/[0.03] hover:bg-neutral-200/60 dark:hover:bg-white/[0.06] flex items-center gap-3 sm:gap-4 border border-black/5 dark:border-white/10 hover:border-black/15 dark:hover:border-white/20 w-full shadow-xs hover:shadow-md cursor-pointer"
          >
            {/* Custom App Logo / Icon */}
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center border border-black/10 dark:border-white/10 flex-shrink-0 overflow-hidden transform-gpu group-hover:scale-105 transition-transform duration-300 ease-out shadow-xs">
              {project.logoImg ? (
                <img
                  src={project.logoImg}
                  alt={project.title}
                  className="w-full h-full object-contain p-1"
                />
              ) : (
                <span className="text-xl sm:text-2xl">{project.icon}</span>
              )}
            </div>

            {/* Project Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 tracking-tight transition-colors duration-200 truncate">
                  {project.title}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 shrink-0">
                  {project.tag}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-gray-400 font-sans truncate mt-0.5">
                {project.subtitle}
              </p>
            </div>

            {/* Subtle Right Arrow */}
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all mr-1 sm:mr-2 shrink-0" />
          </Link>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="flex justify-center mt-6">
        <Link
          href="/projects"
          className="keep-dark px-6 py-2.5 rounded-full border border-black/10 dark:border-white/20 bg-neutral-900 dark:bg-[#181818] hover:bg-neutral-800 dark:hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center space-x-2 group"
        >
          <span className="text-white">View All Projects</span>
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
