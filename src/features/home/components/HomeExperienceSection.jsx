import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function HomeExperienceSection() {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      id: 'freelance',
      title: 'Freelance FullStack Developer',
      dates: 'Oct 2025 - Present',
      location: 'Remote',
      bullets: [
        'Designed and developed user-centric interfaces focused on performance, usability, and scalability.',
        'Collaborated with diverse clients to translate ideas into reliable, production-ready digital products.'
      ]
    },
    {
      id: 'sewakunj',
      title: 'FullStack Developer Intern at Sewakunj Technologies',
      dates: 'Feb 13, 2025 - Jun 20, 2026',
      location: 'Remote, Gujrat',
      description: "Improved Sewakunj Technologies's web app by fixing key bugs and optimizing the backend for smoother performance, while collaborating with teams to enhance scalability and make the platform launch-ready.",
      skills: 'FullStack Development / Bug Fixing / Backend Optimization / Team Collaboration / Web App Scalability'
    },
    {
      id: 'devdotcommunity',
      title: 'Core Member at DevDotCommunity',
      dates: 'Jan 2025 - Present',
      description: 'I coordinated over 5+ events to foster developer engagement and knowledge sharing within the Community. To enhance the overall event experience, I implemented a structured feedback system, which led to a 25% increase in event satisfaction scores.',
      skills: 'Communication Skills / Leadership / Event Management / Community Building / Team Collaboration'
    }
  ];

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Title with Bricolage Grotesque Font */}
      <h2
        className="font-bricolage text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        Experience<span className="text-amber-500">.</span>
      </h2>

      {/* Experience List */}
      <div className="space-y-8">
        {/* Always visible 2 items */}
        {experiences.slice(0, 2).map((exp) => (
          <motion.div
            key={exp.id}
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="space-y-1.5 group cursor-pointer transform-gpu"
          >
            {/* Header: Title + Dates */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-white transition-colors">
                {exp.title}
              </h3>
              <span className="text-xs sm:text-sm text-gray-400 font-sans whitespace-nowrap">
                {exp.dates}
              </span>
            </div>

            {/* Location / Company Subtitle */}
            {exp.location && (
              <p className="text-xs sm:text-sm text-gray-400 font-sans">
                {exp.location}
              </p>
            )}

            {/* Bullets */}
            {exp.bullets && (
              <ul className="space-y-1.5 mt-2 text-xs sm:text-sm text-gray-300 font-sans list-disc list-inside leading-relaxed">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}

            {/* Description */}
            {exp.description && (
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mt-2">
                {exp.description}
              </p>
            )}

            {/* Skills Slash List */}
            {exp.skills && (
              <p className="text-xs text-gray-400 font-sans mt-3 leading-normal">
                {exp.skills}
              </p>
            )}
          </motion.div>
        ))}

        {/* 3rd Item dynamically toggled */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              key={experiences[2].id}
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              whileHover={{ x: 10 }}
              transition={{
                height: { duration: 0.2, ease: 'easeOut' },
                opacity: { duration: 0.2 },
                x: { type: 'spring', stiffness: 400, damping: 25 }
              }}
              className="space-y-1.5 group cursor-pointer transform-gpu overflow-hidden"
            >
              {/* Header: Title + Dates */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-white transition-colors">
                  {experiences[2].title}
                </h3>
                <span className="text-xs sm:text-sm text-gray-400 font-sans whitespace-nowrap">
                  {experiences[2].dates}
                </span>
              </div>

              {/* Description */}
              {experiences[2].description && (
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mt-2">
                  {experiences[2].description}
                </p>
              )}

              {/* Skills Slash List */}
              {experiences[2].skills && (
                <p className="text-xs text-gray-400 font-sans mt-3 leading-normal">
                  {experiences[2].skills}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less Toggle Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-full border border-white/30 bg-[#12141C] hover:bg-white/15 text-white font-semibold text-xs sm:text-sm shadow-lg transition-all active:scale-95 cursor-pointer flex items-center space-x-2"
        >
          <span>{showAll ? 'Show Less' : 'Show More'}</span>
          {showAll ? (
            <ChevronUp className="w-4 h-4 text-gray-300" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-300" />
          )}
        </button>
      </div>

    </section>
  );
}
