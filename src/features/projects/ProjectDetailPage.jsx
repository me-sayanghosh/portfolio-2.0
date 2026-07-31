import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Sparkles, CheckCircle2, Code2, Server, Terminal, Layers, Download, Copy, Check } from 'lucide-react';
import { projectsData } from './data/projectsData';
import { ContactAndSignature } from '../contact';

export default function ProjectDetailPage({ onOpenHireModal }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  const handleCopyCode = () => {
    if (project.setupGuide) {
      navigator.clipboard.writeText(project.setupGuide.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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

      {/* Header Row matching Picture 1 */}
      <div className="flex items-center space-x-3.5 mb-8">
        {/* Circular Back Button Arrow */}
        <button
          onClick={() => navigate('/projects')}
          className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all shrink-0 active:scale-95 cursor-pointer"
          title="Back to Projects"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Square White Icon Container */}
        <div className="w-14 h-14 rounded-2xl bg-white border border-white/20 p-2.5 flex items-center justify-center shadow-md shrink-0 overflow-hidden">
          {project.logoImg ? (
            <img
              src={project.logoImg}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-2xl">{project.icon}</span>
          )}
        </div>

        {/* Title, Category Tag & Subtitle Block */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center space-x-3 flex-wrap gap-y-1">
            <h1
              className="font-bricolage text-2xl sm:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {project.title}
            </h1>
            <span className="px-3 py-0.5 rounded-full border border-white/20 text-xs text-gray-300 bg-white/5 font-medium">
              {project.tag}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-blue-400 font-medium font-sans mt-0.5">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Main Showcase Image / Banner */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 shadow-2xl mb-6 bg-black">
        <img
          src={project.bannerImg}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Buttons Below Image (Picture 1 style) */}
      <div className="flex items-center space-x-3 mb-10">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-gray-200 text-black hover:bg-white transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center border border-white/20"
            title="Live Demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#181A20] border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Github className="w-4 h-4 text-white" />
            <span className="text-white font-medium">View on GitHub</span>
          </a>
        )}
      </div>

      {/* Pure Frameless Flowing Content Sections */}
      <div className="space-y-12 mb-16">
        
        {/* Overview Paragraphs */}
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
            {project.overview}
          </p>
        </div>

        {/* Installation Section matching Picture 2 */}
        {project.setupGuide && project.setupGuide.length > 0 && (
          <div className="space-y-3">
            <h2
              className="font-bricolage text-2xl sm:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Installation
            </h2>

            {/* Terminal Box matching picture 2 design */}
            <div className="bg-transparent border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">bash</span>
                
                <div className="border border-white/10 rounded-lg p-1 px-2.5 flex items-center space-x-2.5 bg-white/5 text-gray-400 hover:text-white transition-colors">
                  <Download className="w-3.5 h-3.5 cursor-pointer hover:text-amber-400 transition-colors" />
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center space-x-1 hover:text-amber-400 transition-colors cursor-pointer"
                    title="Copy code"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Code Lines Container */}
              <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs sm:text-sm text-gray-100 space-y-2 overflow-x-auto">
                {project.setupGuide.map((cmd, i) => (
                  <div key={i} className="leading-relaxed">
                    {cmd}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Core Features Section */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-4">
            <h2
              className="font-bricolage text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center space-x-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              <span>Features</span>
              <span className="text-amber-500">.</span>
            </h2>
            <ul className="space-y-3 font-sans">
              {project.features.map((feature, i) => {
                const cleanFeature = feature.replace(/^(?:\p{Extended_Pictographic}|\p{Emoji_Presentation}|\s)+/u, '');
                const colonIndex = cleanFeature.indexOf(':');

                if (colonIndex !== -1) {
                  const title = cleanFeature.slice(0, colonIndex + 1);
                  const rest = cleanFeature.slice(colonIndex + 1);
                  return (
                    <li key={i} className="flex items-start space-x-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                      <span className="text-amber-400 text-base mt-0.5 select-none">•</span>
                      <span>
                        <strong className="text-white font-semibold">{title}</strong>
                        {rest}
                      </span>
                    </li>
                  );
                }

                return (
                  <li key={i} className="flex items-start space-x-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <span className="text-amber-400 text-base mt-0.5 select-none">•</span>
                    <span>{cleanFeature}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* System Architecture Section */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="space-y-4">
            <h2
              className="font-bricolage text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center space-x-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              <span>System Architecture</span>
              <span className="text-amber-500">.</span>
            </h2>
            <ul className="space-y-3 font-sans">
              {project.architecture.map((arch, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                  <span className="text-amber-400 text-base mt-0.5 select-none">•</span>
                  <span>
                    <strong className="text-white font-semibold">{arch.name}:</strong> {arch.tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* API Reference Table Section */}
        {project.apiEndpoints && project.apiEndpoints.length > 0 && (
          <div className="space-y-4">
            <h2
              className="font-bricolage text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center space-x-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              <span>API Reference</span>
              <span className="text-amber-500">.</span>
            </h2>
            <div className="overflow-x-auto border-t border-b border-white/10 py-2">
              <table className="w-full text-left text-xs sm:text-sm font-sans border-collapse min-w-[550px]">
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

        {/* Technologies & Tools Section */}
        {project.tags && (
          <div className="space-y-4">
            <h2
              className="font-bricolage text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center space-x-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              <span>Technologies & Tools</span>
              <span className="text-amber-500">.</span>
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {project.tags.map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-lg bg-white text-black text-xs sm:text-sm font-semibold shadow-sm transition-all hover:bg-gray-200"
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
