import React, { useState } from 'react';
import { Paperclip, Layers, Code, Bot, CloudRain } from 'lucide-react';

export default function FeatureProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const projects = [
    {
      title: 'HoopIt',
      icon: Paperclip,
      iconBg: 'bg-orange-500',
      tags: ['React', 'Vite', 'CSSModules'],
      dates: 'Jan2021–May2021 · MachineLearning',
      description: 'An all-in-one productivity suite combining a powerful URL shortener..',
      platformBg: 'from-orange-600 to-amber-600',
      laptopImg: '/assets/hoopit-banner.png'
    },
    {
      title: 'PrepDost',
      icon: Layers,
      iconBg: 'bg-amber-500',
      tags: ['React.js', 'GSAP', 'CSSModules'],
      dates: 'Jan2021–May2021 · AI-ML',
      description: 'A full-stack career platform designed to help students and job seekers build confidence...',
      platformBg: 'from-amber-500 to-yellow-600',
      laptopImg: '/assets/prepdost-banner.png'
    },
    {
      title: 'CodeReviewer',
      icon: Bot,
      iconBg: 'bg-rose-500',
      tags: ['FastAPI', 'Node.js', 'Vite'],
      dates: 'Jan2021–May2021 · MachineLearning',
      description: 'Developed a full-stack AI automated agent that reviews pull requests and code submissions in real-time.',
      platformBg: 'from-rose-600 to-pink-600',
      laptopImg: '/assets/codereviewer-banner.png'
    },
    {
      title: 'Veritas AI',
      icon: CloudRain,
      iconBg: 'bg-slate-500',
      tags: ['React', 'Chart.js', 'FramerMotion'],
      dates: 'Jan2021–May2021 · MachineLearning',
      description: 'Engineered a visually striking weather forecasting engine displaying complex meteorological datasets.',
      platformBg: 'from-slate-600 to-gray-700',
      laptopImg: '/assets/b91090124f830732de45724a6f591436543ed934.jpg'
    }
  ];

  return (
    <section className="py-6 max-w-[762px] mx-auto px-4 sm:px-6 relative" onMouseMove={handleMouseMove}>
      
      {/* Custom Cursor from Figma Hover State */}
      {hoveredIndex !== null && (
        <div
          className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        >
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full animate-spin [animation-duration:8s]" viewBox="0 0 100 100">
              <path
                id="textPath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[10px] font-extrabold fill-white uppercase tracking-widest">
                <textPath href="#textPath">
                  ✦ VIEW PROJECT ✦ VIEW PROJECT
                </textPath>
              </text>
            </svg>
          </div>

          <div className="bg-[#12151E] border border-white/20 text-white p-3 rounded-xl shadow-2xl backdrop-blur-md max-w-xs">
            <span className="text-xs font-bold text-gray-200 block mb-0.5">Dev Note</span>
            <span className="text-[10px] text-gray-400 block">Custom Cursor While Hovering on Projects.</span>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold text-white mb-6">Feature project work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => {
          const Icon = proj.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-[#12141C] border border-white/10 rounded-3xl p-6 relative overflow-hidden group cursor-pointer shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap justify-end gap-1.5 mb-4">
                  {proj.tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-black/60 text-[10px] font-mono text-gray-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg ${proj.iconBg} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-black text-white">{proj.title}</h3>
                </div>

                <p className="text-[11px] text-gray-400 font-mono mb-3">{proj.dates}</p>

                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="relative mt-4 pt-8 pb-4 flex justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-transparent to-black/40">
                <div className={`absolute bottom-0 w-full h-24 bg-gradient-to-r ${proj.platformBg} opacity-80 rounded-b-2xl`} />
                <div className="relative z-10 w-full max-w-[280px] transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={proj.laptopImg}
                    alt={proj.title}
                    className="w-full h-auto drop-shadow-2xl rounded-lg border border-white/10"
                  />
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
