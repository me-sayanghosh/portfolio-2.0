import React from 'react';
import { Trophy, Award, Medal, Code2 } from 'lucide-react';

export default function AchievementsSection({ onOpenHackathonModal }) {
  const achievements = [
    {
      id: 'finalist',
      title: 'Top 5 Finalist',
      subtitle: 'GeeksforGeeks Kolkata Hackfest 2k26',
      icon: Trophy,
      badgeText: '1',
      gradient: 'from-purple-600 to-indigo-600',
      active: true
    },
    {
      id: 'runner1',
      title: '1st runner up',
      subtitle: 'Regional Coding Sprint',
      icon: Award,
      badgeText: '1',
      gradient: 'from-[#D97706] to-[#F59E0B]',
      active: false
    },
    {
      id: 'runner2',
      title: '2nd runner up',
      subtitle: 'Hackathon 2024',
      icon: Medal,
      badgeText: '2',
      gradient: 'from-pink-600 to-rose-600',
      active: false
    },
    {
      id: 'member',
      title: 'Active Member',
      subtitle: 'DevDotCom Community',
      icon: Code2,
      badgeText: '</>',
      gradient: 'from-purple-500 to-pink-500',
      active: false
    }
  ];

  return (
    <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-xl font-bold text-white mb-6">Achievements</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={item.active ? onOpenHackathonModal : undefined}
              className={`bg-[#0D0F17] border border-white/10 rounded-2xl p-4 text-center transition-all ${
                item.active ? 'hover:border-purple-500/50 hover:scale-[1.03] cursor-pointer shadow-lg shadow-purple-950/30' : ''
              }`}
            >
              <div className="flex justify-center mb-3">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} p-0.5 shadow-md relative flex items-center justify-center`}>
                  <div className="w-full h-full bg-[#0D0F17] rounded-full flex items-center justify-center text-purple-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  {item.badgeText && (
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-extrabold flex items-center justify-center border border-[#0D0F17]">
                      {item.badgeText}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-xs font-bold text-white mb-0.5">{item.title}</h3>
              <p className="text-[10px] text-gray-400">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
