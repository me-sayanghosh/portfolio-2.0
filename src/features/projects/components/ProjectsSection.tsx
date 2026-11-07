'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projectsData } from '../data/projectsData';
import { ContactAndSignature } from '../../contact';

export default function ProjectsSection() {
  const router = useRouter();

  // Dynamic gradient styling for category badge (matching thatdevguy.in)
  const getTagGradient = (tag: string) => {
    const normalized = (tag || '').toLowerCase();
    if (normalized.includes('web') || normalized.includes('fullstack')) {
      return 'bg-gradient-to-r from-violet-600 to-violet-800 text-white';
    }
    if (
      normalized.includes('tool') ||
      normalized.includes('dev') ||
      normalized.includes('ai')
    ) {
      return 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white';
    }
    if (normalized.includes('analytics') || normalized.includes('data')) {
      return 'bg-gradient-to-r from-slate-600 to-slate-800 text-white';
    }
    if (normalized.includes('game')) {
      return 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white';
    }
    return 'bg-gradient-to-r from-amber-600 to-amber-800 text-white';
  };

  return (
    <section className="pt-3 sm:pt-24 pb-16 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Breadcrumb Navigation (Exact thatdevguy.in pattern) */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-neutral-500 dark:text-gray-400 mb-3 sm:mb-4 font-sans">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link
              href="/"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">
            /
          </li>
          <li aria-current="page" className="text-neutral-900 dark:text-white font-medium">
            Projects
          </li>
        </ol>
      </nav>

      {/* Header Block */}
      <header className="flex flex-col gap-2 mb-6 sm:mb-8">
        <h1
          className="font-bricolage text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Projects<span className="text-amber-500 ml-0.5">.</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-gray-400 max-w-2xl leading-relaxed font-sans">
          Web apps, AI tools, Scalable Products and open-source software built by Sayan Ghosh.
        </p>
      </header>

      {/* Projects Grid: 3-column squircle layout matching thatdevguy.in */}
      <section aria-label="Project list" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {projectsData.map((project, index) => (
          <article key={project.id} className="h-full">
            <Link
              href={`/projects/${project.id}`}
              aria-label={`Open project ${project.title}`}
              className="group block h-full focus:outline-none"
            >
              {/* Outer Squircle Card */}
              <div
                className="bf group relative overflow-hidden rounded-[48px] sm:rounded-[60px] group-hover:rounded-2xl transition-all duration-300 squircle bg-neutral-100/60 dark:bg-white/[0.03] hover:bg-neutral-200/60 dark:hover:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20 p-2 sm:p-2.5 h-full w-full flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-0.5 transform-gpu"
                style={{
                  '--bf-delay': `${Math.min(index * 0.05, 0.4)}s`,
                  '--bf-dur': '0.4s',
                  '--bf-blur': '6px',
                  '--bf-t0': 'translateY(35px)',
                  '--bf-t1': 'translateY(0px)',
                } as React.CSSProperties}
              >
                {/* Media Thumbnail Container with Nested Squircle Corners */}
                <div className="relative aspect-video overflow-hidden rounded-[40px] sm:rounded-[52px] group-hover:rounded-xl transition-all duration-300 squircle border border-black/5 dark:border-white/5 bg-neutral-900/40">
                  <img
                    src={project.bannerImg}
                    alt={`${project.title} — preview screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                  {/* Top-Left Category Tag Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span
                      className={`inline-flex items-center rounded-md border border-white/20 px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold shadow-md backdrop-blur-md ${getTagGradient(
                        project.tag
                      )}`}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content Details Area */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-start">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    {/* Small App Logo / Icon */}
                    <div className="relative h-6 w-6 sm:h-7 sm:w-7 shrink-0 overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800/90 border border-black/10 dark:border-white/10 flex items-center justify-center shadow-xs">
                      {project.logoImg ? (
                        <img
                          src={project.logoImg}
                          alt={`${project.title} logo`}
                          className="w-full h-full object-contain p-0.5"
                        />
                      ) : (
                        <span className="text-xs sm:text-sm">{project.icon}</span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h2 className="font-bricolage text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                      {project.title}
                    </h2>
                  </div>

                  {/* Project Subtitle */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed line-clamp-2 px-0.5">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>

      {/* Footer Contact & Signature Section */}
      <ContactAndSignature />
    </section>
  );
}
