import React from 'react';

export default function SkillsSection() {
  const skills = [
    { name: 'React', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
    { name: 'Next.js', color: 'text-white', bg: 'bg-white/10', border: 'border-white/20' },
    { name: 'JavaScript', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
    { name: 'TailwindCSS', color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
    { name: 'HTML', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    { name: 'CSS', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { name: 'Node.js', color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { name: 'Express.js', color: 'text-gray-300', bg: 'bg-white/5', border: 'border-white/10' },
    { name: 'Redis', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
    { name: 'MongoDB', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { name: 'PostgreSQL', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { name: 'Docker', color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
  ];

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-xl font-bold text-white mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full ${skill.bg} border ${skill.border} shadow-sm hover:scale-105 transition-transform cursor-pointer`}
          >
            <span className={`w-2 h-2 rounded-full ${skill.color.replace('text-', 'bg-')}`} />
            <span className={`text-xs font-semibold ${skill.color}`}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
