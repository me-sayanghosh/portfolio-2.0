import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Sparkles, CheckCircle2, Code2, Server, Terminal, Layers } from 'lucide-react';
import { projectsData } from './data/projectsData';
import { ContactAndSignature } from '../contact';

export default function ProjectDetailPage({ onOpenHireModal }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  return (
    <motion.div
      key={`project-detail-${project.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="pt-20 sm:pt-24 pb-16 max-w-4xl mx-auto px-4 sm:px-6"
    >
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-6 font-sans">
        <span
          onClick={() => navigate('/')}
          className="hover:text-white cursor-pointer transition-colors"
        >
          Home
        </span>
        <span>/</span>
        <span
          onClick={() => navigate('/projects')}
          className="hover:text-white cursor-pointer transition-colors"
        >
          Projects
        </span>
        <span>/</span>
        <span className="text-amber-400 font-medium">{project.title}</span>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate('/projects')}
        className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all mb-8 cursor-pointer active:scale-95"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects</span>
      </button>

      {/* Project Header Title & Category */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-3xl sm:text-4xl">{project.icon}</span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
              project.tagBg || 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}
          >
            {project.tag}
          </span>
        </div>

        <h1
          className="font-bricolage text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {project.title}
        </h1>

        <p className="text-base sm:text-xl font-medium text-gray-300 leading-relaxed font-sans max-w-3xl">
          {project.subtitle}
        </p>

        {/* External Links */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#222222] border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/15 hover:border-white/40 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Showcase Image / Banner */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 shadow-2xl mb-10 bg-black">
        <img
          src={project.bannerImg}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Section Blocks matching thatdevguy.in layout */}
      <div className="space-y-8 mb-16">
        
        {/* Project Overview */}
        <div className="bg-[#111319] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 shadow-2xl">
          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2
              className="font-bricolage text-xl sm:text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Project Overview <span className="text-amber-500">.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
            {project.overview}
          </p>
        </div>

        {/* Core Features */}
        {project.features && project.features.length > 0 && (
          <div className="bg-[#111319] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 shadow-2xl">
            <div className="flex items-center space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h2
                className="font-bricolage text-xl sm:text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Core Features <span className="text-amber-500">.</span>
              </h2>
            </div>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                  <span className="text-amber-400 text-base mt-0.5 select-none">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* System Architecture */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="bg-[#111319] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 shadow-2xl">
            <div className="flex items-center space-x-2.5">
              <Layers className="w-5 h-5 text-blue-400" />
              <h2
                className="font-bricolage text-xl sm:text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                System Architecture <span className="text-amber-500">.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.architecture.map((arch, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-xl bg-[#181B24] border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-amber-400 block uppercase tracking-wider">
                    {arch.name}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                    {arch.tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* API Reference Table */}
        {project.apiEndpoints && project.apiEndpoints.length > 0 && (
          <div className="bg-[#111319] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 shadow-2xl overflow-hidden">
            <div className="flex items-center space-x-2.5">
              <Server className="w-5 h-5 text-orange-400" />
              <h2
                className="font-bricolage text-xl sm:text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                API Reference <span className="text-amber-500">.</span>
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-sans border-collapse">
                <thead>
                  <tr className="border-b border-white/15 text-gray-400">
                    <th className="pb-3 pr-4 font-semibold">Method</th>
                    <th className="pb-3 pr-4 font-semibold">Endpoint</th>
                    <th className="pb-3 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {project.apiEndpoints.map((api, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 pr-4">
                        <span
                          className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                            api.method === 'GET'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : api.method === 'POST'
                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              : api.method === 'PUT'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          }`}
                        >
                          {api.method}
                        </span>
                      </td>
                      <td className="py-3 pr-4 font-mono text-gray-200">{api.path}</td>
                      <td className="py-3 text-gray-400">{api.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Quick Setup Terminal Box */}
        {project.setupGuide && project.setupGuide.length > 0 && (
          <div className="bg-[#111319] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 shadow-2xl">
            <div className="flex items-center space-x-2.5">
              <Terminal className="w-5 h-5 text-purple-400" />
              <h2
                className="font-bricolage text-xl sm:text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Quick Setup <span className="text-amber-500">.</span>
              </h2>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-black border border-white/15 font-mono text-xs sm:text-sm text-emerald-400 space-y-2 overflow-x-auto">
              {project.setupGuide.map((cmd, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <span className="text-gray-500 select-none">$</span>
                  <span>{cmd}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies & Tools */}
        {project.tags && (
          <div className="bg-[#111319] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 shadow-2xl">
            <div className="flex items-center space-x-2.5">
              <Code2 className="w-5 h-5 text-purple-400" />
              <h2
                className="font-bricolage text-xl sm:text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Technologies & Tools <span className="text-amber-500">.</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {project.tags.map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-[#181B24] border border-white/15 text-xs sm:text-sm font-medium text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <ContactAndSignature />
    </motion.div>
  );
}
