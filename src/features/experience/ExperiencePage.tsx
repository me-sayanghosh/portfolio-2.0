'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { experiencesData } from './data/experiencesData';
import { ContactAndSignature } from '../contact';

export default function ExperiencePage() {
  const router = useRouter();

  return (
    <motion.div
      key="experience-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="pt-20 sm:pt-24 pb-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-8"
    >
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 font-sans">
        <span
          onClick={() => router.push('/')}
          className="hover:text-white cursor-pointer transition-colors"
        >
          Home
        </span>
        <span>/</span>
        <span className="text-white font-medium">Experience</span>
      </div>

      {/* Page Header */}
      <div>
        <h1
          className="font-bricolage text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Experience<span className="text-amber-500">.</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed font-sans">
          A comprehensive breakdown of my professional roles, developer internships, freelance products, and community leadership.
        </p>
      </div>

      {/* Experience List / Timeline */}
      <div className="space-y-6 pt-4">
        {experiencesData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 sm:p-7 rounded-2xl bg-[#1a1a1a]/80 border border-white/10 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-sm group"
          >
            {/* Header: Title + Type Badge + Dates */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-3 flex-wrap">
                {exp.logo && (
                  <div className="w-8 h-8 rounded-lg bg-black border border-white/10 p-1 flex items-center justify-center shrink-0">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </div>
                )}
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  {exp.title}
                </h2>
                {exp.type && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
                    {exp.type}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 font-sans shrink-0">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                <span>{exp.dates}</span>
              </div>
            </div>

            {/* Company & Location */}
            <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-300 font-sans mb-4">
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                <span className="font-semibold text-white">{exp.company}</span>
              </div>
              {exp.location && (
                <div className="flex items-center gap-1.5 text-gray-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              )}
            </div>

            {/* Description */}
            {exp.description && (
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-4">
                {exp.description}
              </p>
            )}

            {/* Bullet Points */}
            {exp.bullets && exp.bullets.length > 0 && (
              <ul className="space-y-2 mb-5 text-xs sm:text-sm text-gray-300 font-sans list-disc list-inside leading-relaxed">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="marker:text-amber-500">
                    <span className="pl-1">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Skills Badges */}
            {exp.skills && exp.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-[#222222] border border-[#333333] text-xs font-medium text-gray-300 group-hover:border-amber-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer Contact */}
      <ContactAndSignature />
    </motion.div>
  );
}
