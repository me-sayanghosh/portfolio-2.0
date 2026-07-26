import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Layers, Bot, CloudRain, Paperclip } from 'lucide-react';
import CreationOfAdamBanner from '../../home/components/CreationOfAdamBanner';
import { ContactAndSignature } from '../../contact';

export default function ProjectsSection({ onOpenHireModal }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const projects = [
    {
      title: 'HoopIt',
      category: 'Productivity & URL Suite',
      icon: Paperclip,
      iconBg: 'bg-orange-500',
      tags: ['React', 'Vite', 'CSS Modules', 'Node.js', 'Express', 'MongoDB'],
      dates: 'Jan 2024 – Present',
      description: 'An all-in-one productivity suite combining a powerful URL shortener, custom link management, and real-time click analytics dashboard.',
      platformBg: 'from-orange-600 to-amber-600',
      laptopImg: '/assets/a3d295e02ea0c5a89aa612766ca75feaf88c9620.jpg',
      github: 'https://github.com/me-sayanghosh/hoopit',
      live: 'https://github.com/me-sayanghosh/hoopit'
    },
    {
      title: 'PrepDost — AI Interviewer',
      category: 'Full-Stack & Generative AI',
      icon: Layers,
      iconBg: 'bg-amber-500',
      tags: ['React.js', 'GSAP', 'CSS Modules', 'OpenAI API', 'MongoDB'],
      dates: 'Dec 2023 – Jan 2024',
      description: 'A full-stack career platform designed to help students and job seekers build confidence with real-time AI mock interviews.',
      platformBg: 'from-amber-500 to-yellow-600',
      laptopImg: '/assets/b91090124f830732de45724a6f591436543ed934.jpg',
      github: 'https://github.com/me-sayanghosh/prepdost',
      live: 'https://github.com/me-sayanghosh/prepdost'
    },
    {
      title: 'CodeReviewer AI',
      category: 'Machine Learning & DevOps',
      icon: Bot,
      iconBg: 'bg-rose-500',
      tags: ['FastAPI', 'Node.js', 'Vite', 'Python', 'Docker'],
      dates: 'Oct 2023 – Nov 2023',
      description: 'Engineered a full-stack AI automated agent that reviews pull requests and code submissions in real-time with granular static analysis.',
      platformBg: 'from-rose-600 to-pink-600',
      laptopImg: '/assets/a3d295e02ea0c5a89aa612766ca75feaf88c9620.jpg',
      github: 'https://github.com/me-sayanghosh',
      live: 'https://github.com/me-sayanghosh'
    },
    {
      title: 'Veritas Weather Engine',
      category: 'Data Visualization & Analytics',
      icon: CloudRain,
      iconBg: 'bg-slate-500',
      tags: ['React', 'Chart.js', 'Framer Motion', 'TailwindCSS'],
      dates: 'Aug 2023 – Sep 2023',
      description: 'Engineered a visually striking weather forecasting engine displaying complex meteorological datasets with dynamic interactive charts.',
      platformBg: 'from-slate-600 to-gray-700',
      laptopImg: '/assets/b91090124f830732de45724a6f591436543ed934.jpg',
      github: 'https://github.com/me-sayanghosh',
      live: 'https://github.com/me-sayanghosh'
    }
  ];

  return (
    <section className="pt-24 pb-16 max-w-4xl mx-auto px-4 sm:px-6 relative" onMouseMove={handleMouseMove}>
      
      {/* Custom Cursor while hovering projects */}
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
            <span className="text-[10px] text-gray-400 block">Click card to open GitHub repository.</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Selected Works & Builds</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Projects<span className="text-amber-500">.</span>
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 max-w-md mt-2 md:mt-0">
          Real full-stack applications built from scratch with robust backends and clean user interfaces.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((proj, idx) => {
          const Icon = proj.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => window.open(proj.github, '_blank')}
              className="bg-[#12141C] border border-white/10 rounded-3xl p-6 relative overflow-hidden group cursor-pointer shadow-2xl flex flex-col justify-between hover:border-white/25 transition-all duration-300"
            >
              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-black/60 text-[10px] font-mono text-gray-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Header: Icon + Title */}
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg ${proj.iconBg} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h3>
                </div>

                {/* Dates */}
                <p className="text-[11px] text-gray-400 font-mono mb-3">{proj.dates}</p>

                {/* Description */}
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              {/* Laptop Image Mockup */}
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

              {/* Card Footer Links */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between z-20">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-semibold text-gray-300 hover:text-white flex items-center space-x-1.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
                >
                  <span>View Code</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          );
        })}
      </div>

      {/* Creation of Adam Banner & Contact */}
      <CreationOfAdamBanner onOpenHireModal={onOpenHireModal} />
      <ContactAndSignature />

    </section>
  );
}
