'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase, Code2, Layers, Users } from 'lucide-react';
import { experiencesData } from './data/experiencesData';

export default function ExperiencePage() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(experiencesData[0]?.id || 'phicsit');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const getFallbackIcon = (id: string) => {
    switch (id) {
      case 'phicsit': return Code2;
      case 'sewakunj': return Code2;
      case 'freelance': return Layers;
      case 'devdotcommunity': return Users;
      default: return Briefcase;
    }
  };

  const renderFormattedText = (text: string) => {
    const parts = [];
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (match[1] && match[2]) {
        // Link [text](url) -> orange bold link
        parts.push(
          <a
            key={match.index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-orange-500 hover:text-orange-400 font-bold underline underline-offset-2 transition-colors"
          >
            {match[1]}
          </a>
        );
      } else if (match[3]) {
        // Bold **text** -> orange highlighted bold text (or white for company name if needed)
        const isCompany = match[3].includes('PHICSIT') || match[3].includes('Outbox') || match[3].includes('Sewakunj');
        parts.push(
          <strong key={match.index} className={isCompany ? "text-white font-extrabold" : "text-orange-400 font-bold"}>
            {match[3]}
          </strong>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  };

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
          A detailed timeline of my engineering roles, developer internships, freelance products, and community initiatives.
        </p>
      </div>

      {/* Flat List / Accordion View */}
      <div className="divide-y divide-white/10 border-t border-b border-white/0">
        {experiencesData.map((exp) => {
          const isExpanded = expandedId === exp.id;
          const FallbackIcon = getFallbackIcon(exp.id);

          return (
            <div
              key={exp.id}
              className="py-4 sm:py-5 px-2 sm:px-3 rounded-xl cursor-pointer group"
              onClick={() => toggleExpand(exp.id)}
            >
              {/* Row Header: Logo + Title/Company/Location + Dates + Chevron */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 select-none">
                
                {/* Left Side: Logo & Info */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  
                  {/* Square Logo / Icon Container */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
                    {exp.logo ? (
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                    ) : (
                      <FallbackIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                      {exp.title} <span className="text-gray-400 font-normal">· {exp.company}</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400 font-sans mt-0.5 truncate">
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Right Side: Dates & Chevron */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0 text-xs sm:text-sm text-gray-400 font-sans">
                  <span className="hidden sm:inline">{exp.dates}</span>
                  <span className="sm:hidden text-xs">{exp.dates.split('-')[0]}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-amber-500 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 transition-transform duration-200" />
                  )}
                </div>

              </div>

              {/* Expandable Details Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden pl-0 sm:pl-[60px]"
                  >
                    <div className="pt-2 border-t border-white/5 space-y-3.5">
                      {exp.description && (
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                          {renderFormattedText(exp.description)}
                        </p>
                      )}

                      {exp.bullets && exp.bullets.length > 0 && (
                        <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-sans list-disc list-inside leading-relaxed">
                          {exp.bullets.map((bullet, idx) => (
                            <li key={idx} className="marker:text-orange-500">
                              <span className="pl-1.5">{renderFormattedText(bullet)}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {exp.outroDescription && (
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans pt-1">
                          {renderFormattedText(exp.outroDescription)}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
