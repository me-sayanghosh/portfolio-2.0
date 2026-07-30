import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ContactAndSignature } from '../../contact';

export default function ProjectsSection({ onOpenHireModal }) {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-3 font-sans">
        <span
          onClick={() => navigate('/')}
          className="hover:text-white cursor-pointer transition-colors"
        >
          Home
        </span>
        <span>/</span>
        <span className="text-white font-medium">Projects</span>
      </div>

      {/* Page Title & Description */}
      <div className="mb-10">
        <h1
          className="font-bricolage text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Projects<span className="text-amber-500">.</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed font-sans">
          Web apps, AI tools, Scalable Products and open-source software built by Sayan Ghosh.
        </p>
      </div>

      {/* 3-Column Projects Grid matching User Screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/projects/${project.id}`)}
            className="group cursor-pointer bg-[#12141A] border border-white/10 hover:border-white/35 rounded-[26px] p-4 flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1.5 hover:shadow-amber-500/5 transform-gpu"
          >
            {/* Top Preview Image Container */}
            <div>
              <div className="relative w-full aspect-[16/9] rounded-[18px] overflow-hidden mb-4 bg-gradient-to-br border border-white/10">
                <img
                  src={project.bannerImg}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top-Left Category Tag Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-tight shadow-md backdrop-blur-md ${
                      project.tagBg || 'bg-black/60 text-white border border-white/20'
                    }`}
                  >
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Title & Icon Header */}
              <div className="flex items-center space-x-2.5 mb-1.5 px-1">
                <span className="text-xl sm:text-2xl flex-shrink-0">
                  {project.icon}
                </span>
                <h3 className="font-bricolage text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors tracking-tight line-clamp-1">
                  {project.title}
                </h3>
              </div>

              {/* Short Subtitle Description */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans line-clamp-2 px-1">
                {project.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ContactAndSignature />
    </section>
  );
}
