'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function HomeProjectsSection() {
  const router = useRouter();

  const projects = [
    {
      id: 'hoopit',
      title: 'HoopIt',
      tagline: 'An all-in-one productivity suite & URL analytics platform',
      logoImg: '/assets/hoopit-logo.png',
      github: 'https://github.com/me-sayanghosh/hoopit'
    },
    {
      id: 'prepdost',
      title: 'PrepDost',
      tagline: 'AI-powered mock interview & career prep platform',
      logoImg: '/assets/prepdost-logo.png',
      github: 'https://github.com/me-sayanghosh/prepdost'
    },
    {
      id: 'codereviewer',
      title: 'CodeReviewer',
      tagline: 'Real-time AI automated pull request & code review agent',
      logoImg: '/assets/codereviewer-logo.png',
      github: 'https://github.com/me-sayanghosh'
    }
  ];

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Title with Bricolage Grotesque Font */}
      <h2
        className="font-bricolage text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        Projects <span className="text-amber-500">.</span>
      </h2>

      {/* Optimized Smooth Projects List */}
      <div className="space-y-3.5 mb-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => router.push('/projects')}
            className="group bg-[#222222] border border-[#333333] hover:border-white/20 hover:bg-[#2a2a2a] rounded-2xl p-4 sm:p-5 flex items-center space-x-4 transition-colors duration-200 cursor-pointer shadow-md"
          >
            {/* Custom App Logo with Hardware-Accelerated Smooth Hover Pop-up */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-black flex items-center justify-center border border-white/10 flex-shrink-0 overflow-hidden transform-gpu group-hover:scale-110 transition-transform duration-300 ease-out shadow-sm">
              <img
                src={project.logoImg}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-sans truncate">
                {project.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* see more cool stuff Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => router.push('/projects')}
          className="px-6 py-2.5 rounded-full border border-white/30 bg-[#222222] hover:bg-white/15 text-white font-semibold text-xs sm:text-sm shadow-lg transition-all active:scale-95 cursor-pointer flex items-center space-x-2"
        >
          <span>see more cool stuff</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
