import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomeProjectsSection() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'hoopit',
      title: 'HoopIt',
      tagline: 'An all-in-one productivity suite & URL analytics platform',
      logoImg: '/assets/hoopit-logo.png',
      github: 'https://github.com/me-sayanghosh/hoopit'
    },
    {
      id: 'prepdost',
      title: 'PrepDost',
      tagline: 'AI-powered mock interview & career prep platform',
      logoImg: '/assets/prepdost-logo.png',
      github: 'https://github.com/me-sayanghosh/prepdost'
    },
    {
      id: 'codereviewer',
      title: 'CodeReviewer',
      tagline: 'Real-time AI automated pull request & code review agent',
      logoImg: '/assets/codereviewer-logo.png',
      github: 'https://github.com/me-sayanghosh'
    }
  ];

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Title with Bricolage Grotesque Font */}
      <h2
        className="font-bricolage text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        Projects <span className="text-amber-500">.</span>
      </h2>

      {/* Optimized Smooth Projects List */}
      <div className="space-y-3.5 mb-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => window.open(proj.github, '_blank')}
            className="group bg-[#0F1118] border border-[#222535] hover:border-white/20 hover:bg-[#141620] rounded-2xl p-4 sm:p-5 flex items-center space-x-4 transition-colors duration-200 cursor-pointer shadow-md"
          >
            {/* Smooth Pop-up App Logo */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center flex-shrink-0 bg-black shadow-inner transform-gpu transition-transform duration-300 ease-out group-hover:scale-110">
              <img
                src={proj.logoImg}
                alt={proj.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Title & Subtitle (No Yellow Hover Color Change) */}
            <div className="flex-grow min-w-0">
              <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                {proj.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 truncate tracking-tight font-sans">
                {proj.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Cool Stuff Button */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate('/projects')}
          className="px-6 py-2.5 rounded-full border border-white/30 bg-[#12141C] hover:bg-white/15 text-white font-semibold text-xs sm:text-sm shadow-lg transition-all active:scale-95 cursor-pointer flex items-center space-x-2"
        >
          <span>see more cool stuff</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
