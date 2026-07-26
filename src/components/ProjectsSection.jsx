import React, { useState } from 'react';
import { ExternalLink, Github, Trophy, Sparkles, FolderGit2, Layers, Cpu } from 'lucide-react';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const projects = [
    {
      id: 'hoopit',
      title: 'HoopIt',
      category: 'Productivity & URL Suite',
      dates: 'Jan 2024 – Present',
      description: 'An all-in-one productivity suite combining a powerful URL shortener, custom link management, and real-time click analytics dashboard.',
      technologies: ['React', 'Vite', 'CSS Modules', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/me-sayanghosh/hoopit',
      live: '#'
    },
    {
      id: 'prepdost',
      title: 'PrepDost — AI Interviewer',
      category: 'Full-Stack & Generative AI',
      dates: 'Dec 2023 – Jan 2024',
      description: 'Full-stack mock interview platform with real-time audio/text evaluation, AI resume parsing, and personalized feedback reports.',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'OpenAI API', 'MongoDB'],
      github: 'https://github.com/me-sayanghosh/prepdost',
      live: '#'
    },
    {
      id: 'chatapp',
      title: 'Realtime Chat Application',
      category: 'WebSockets & Backend',
      dates: 'Nov 2023',
      description: 'High-throughput real-time messaging application with room management, media attachments, and end-to-end socket handling.',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'Tailwind CSS'],
      github: '#',
      live: '#'
    }
  ];

  const achievements = [
    {
      title: 'Top 5 Finalist',
      subtitle: 'GeeksforGeeks Kolkata Hackfest 2k26',
      date: 'Jan 2024',
      name: 'Sayan Ghosh'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative" onMouseMove={handleMouseMove}>
      
      {/* Floating Custom Cursor from Figma Hover State (Node 114:354) */}
      {hoveredProject && (
        <div
          className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out transform -translate-x-1/2 -translate-y-full mb-3"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        >
          <div className="bg-[#181C28] border border-orange-500/50 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl flex items-center space-x-2 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span className="text-orange-300">Dev Note:</span>
            <span>Custom Cursor While Hovering on Projects</span>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Featured Projects & Builds
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md mt-2 md:mt-0">
            Real full-stack applications built from scratch with robust backends and clean user interfaces.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onMouseEnter={() => setHoveredProject(proj.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between relative group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
                    {proj.category}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{proj.dates}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-gray-400 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer Links */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-gray-400 hover:text-white flex items-center space-x-1 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                  <a
                    href={proj.live}
                    className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center space-x-1"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon Achievements Showcase */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/20">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">Hackathon Recognition</span>
                  <span className="text-xs text-gray-500">• Jan 2024</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  Top 5 Finalist — GeeksforGeeks Kolkata Hackfest 2k26
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Engineered real-time server architecture under intense 48-hour pressure alongside top developer teams.
                </p>
              </div>
            </div>
            <span className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold whitespace-nowrap">
              Sayan Ghosh
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
