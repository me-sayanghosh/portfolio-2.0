'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Users, Layers } from 'lucide-react';

export default function HomeExperienceSection() {
  const router = useRouter();

  const experiences = [
    {
      id: 'phicsit',
      title: 'SDE Intern',
      company: 'PHICSIT InfoTech Pvt. Ltd.',
      location: 'Remote',
      dates: 'Aug 2, 2026 - Present',
      icon: Code2,
      logo: '/assets/phicsit-logo.webp',
      logoBg: 'bg-black'
    },
    {
      id: 'sewakunj',
      title: 'FullStack Developer Intern',
      company: 'Sewakunj Technologies',
      location: 'Remote, Gujarat',
      dates: 'February 13, 2025 - June 20, 2026',
      icon: Code2,
      logo: '/assets/sewakunj-logo.webp',
      logoBg: 'bg-black'
    },
    {
      id: 'freelance',
      title: 'Freelance FullStack Developer',
      company: 'Self-Employed',
      location: 'Remote',
      dates: 'October 2025 - Present',
      icon: Layers,
      logoBg: 'bg-black'
    },
    {
      id: 'devdotcommunity',
      title: 'Core Member',
      company: 'DevDotCommunity',
      location: 'Remote',
      dates: 'January 2025 - Present',
      icon: Users,
      logo: '/assets/devdotcommunity-logo.webp',
      logoBg: 'bg-black'
    }
  ];

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Title */}
      <h2
        className="font-bricolage text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        Experience <span className="text-amber-500">.</span>
      </h2>

      {/* Compact Experience Card List matching requested UI */}
      <div className="space-y-3.5">
        {experiences.slice(0, 2).map((exp, index) => {
          const IconComponent = exp.icon || Briefcase;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ y: -2 }}
              onClick={() => router.push('/experience')}
              className="p-4 sm:p-5 rounded-2xl bg-[#181818]/90 border border-white/10 hover:border-white/20 hover:bg-[#1f1f1f] transition-all duration-300 flex items-center gap-4 cursor-pointer group shadow-sm"
            >
              {/* Left Square Logo / Icon Container */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${exp.logoBg} border border-white/10 flex items-center justify-center shrink-0 overflow-hidden shadow-inner`}>
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>

              {/* Middle Information */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-white transition-colors truncate">
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
          );
        })}
      </div>

      {/* View All Experience Button */}
      <div className="flex justify-center mt-7">
        <button
          onClick={() => router.push('/experience')}
          className="px-7 py-2.5 rounded-full border border-white/20 bg-[#181818] hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
        >
          View All Experience
        </button>
      </div>

    </section>
  );
}
