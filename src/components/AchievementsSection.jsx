import React from 'react';
import { Trophy } from 'lucide-react';

export default function AchievementsSection({ onOpenHackathonModal }) {
  const achievements = [
    {
      id: 'finalist',
      title: 'Top 5 Finalist',
      active: true,
      renderIcon: () => <Trophy className="w-7 h-7 text-white stroke-[2]" />
    },
    {
      id: 'runner1',
      title: '1st runner up',
      active: false,
      renderIcon: () => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
          <text x="12" y="11.5" textAnchor="middle" fill="currentColor" stroke="none" fontSize="8" fontWeight="bold">1</text>
        </svg>
      )
    },
    {
      id: 'runner2',
      title: '2nd runner up',
      active: false,
      renderIcon: () => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
          <text x="12" y="11.5" textAnchor="middle" fill="currentColor" stroke="none" fontSize="8" fontWeight="bold">2</text>
        </svg>
      )
    },
    {
      id: 'member',
      title: 'Active Member',
      active: false,
      renderIcon: () => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <polyline points="8 8 5 11 8 14" />
          <polyline points="16 8 19 11 16 14" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-2 pb-4">
      <h2 className="font-urbanist text-xl sm:text-2xl font-bold text-white mb-6 text-left tracking-tight">
        Achievements
      </h2>

      <div className="flex flex-wrap items-center justify-between sm:justify-start gap-6 sm:gap-12">
        {achievements.map((item) => (
          <div
            key={item.id}
            onClick={item.active ? onOpenHackathonModal : undefined}
            className={`flex flex-col items-center group ${item.active ? 'cursor-pointer' : ''}`}
          >
            {/* Neon Glowing Border Circle */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-[#00E5FF] via-[#A855F7] to-[#EC4899] shadow-[0_0_18px_rgba(168,85,247,0.35)] group-hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <div className="w-full h-full bg-[#080A10] rounded-full flex items-center justify-center text-white">
                {item.renderIcon()}
              </div>
            </div>
            {/* Label Underneath */}
            <span className="font-urbanist text-xs sm:text-sm font-semibold text-gray-300 mt-2.5 text-center tracking-tight group-hover:text-white transition-colors">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
