'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import { experiencesData } from '../../experience/data/experiencesData';
import BlurFade, { BLUR_FADE_DELAY } from '../../../components/ui/blur-fade';

export default function HomeExperienceSection() {
  const router = useRouter();

  // Show only top 2 experiences on the home page
  const featuredExperiences = experiencesData.slice(0, 2);

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Title */}
      <BlurFade delay={BLUR_FADE_DELAY * 8}>
        <h2
          className="font-bricolage text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Experience <span className="text-amber-500">.</span>
        </h2>
      </BlurFade>

      {/* Compact Experience Card List matching requested UI */}
      <div className="space-y-3.5">
        {featuredExperiences.map((exp, index) => {
          return (
            <BlurFade key={exp.id} delay={BLUR_FADE_DELAY * 9 + index * 0.05}>
              <motion.div
                whileHover={{ y: -2 }}
                className="p-4 sm:p-5 rounded-2xl bg-[#181818]/90 border border-white/10 hover:border-white/20 hover:bg-[#1f1f1f] transition-all duration-300 flex items-center gap-4 group shadow-sm cursor-pointer"
              >
                {/* Left Square Logo / Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-105 transition-transform duration-300" />
                  )}
                </div>

                {/* Middle Information */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors truncate">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans mt-0.5 truncate">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 font-sans mt-0.5">
                    {exp.dates}
                  </p>
                </div>
              </motion.div>
            </BlurFade>
          );
        })}
      </div>

      {/* View All Experience Button */}
      <BlurFade delay={BLUR_FADE_DELAY * 9 + featuredExperiences.length * 0.05}>
        <div className="flex justify-center mt-6">
          <Link
            href="/experience"
            className="keep-dark px-6 py-2.5 rounded-full border border-black/10 dark:border-white/20 bg-neutral-900 dark:bg-[#181818] hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center space-x-2 group"
          >
            <span className="text-white">View All Experience</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </BlurFade>

    </section>
  );
}
