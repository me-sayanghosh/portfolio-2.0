import React from 'react';
import { motion } from 'framer-motion';

export default function HomeAchievementsSection() {
  const achievements = [
    {
      id: 'app-e-teaser',
      title: '1st Runner-Up',
      event: 'App-e-teaser 2026 - 12 hours Hyperthon'
    },
    {
      id: 'gfg-hackfest',
      title: 'HackFest Finalist',
      event: 'GeeksforGeeks - Hackfest 2k26'
    },
    {
      id: 'jistech-winner',
      title: 'JISTECH Winner',
      event: 'JISTECH - RealWorld Problem Solution Hackathon 2025'
    }
  ];

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Title with Bricolage Grotesque Font */}
      <h2
        className="font-bricolage text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        Achievements <span className="text-amber-500">.</span>
      </h2>

      {/* Achievements List matching Experience Section Design */}
      <div className="space-y-6">
        {achievements.map((ach) => (
          <motion.div
            key={ach.id}
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="space-y-1 group cursor-pointer"
          >
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {ach.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans">
              {ach.event}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
