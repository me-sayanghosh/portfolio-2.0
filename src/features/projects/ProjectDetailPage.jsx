import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Sparkles, CheckCircle2, Code2 } from 'lucide-react';
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
      className="pt-24 pb-16 max-w-4xl mx-auto px-4 sm:px-6"
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
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#222222] border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/15 hover:border-white/40 transition-all shadow-md active:scale-95 cursor-pointer"
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
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Showcase Image / Banner */}
      <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/15 shadow-2xl mb-12 bg-black">
        <img
          src={project.bannerImg}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Project Overview */}
      <div className="space-y-10 mb-16">
        <div className="bg-[#12141A] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2.5 text-amber-400">
            <Sparkles className="w-5 h-5" />
            <h2 className="font-bricolage text-xl sm:text-2xl font-bold text-white">
              Project Overview
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
            {project.overview}
          </p>
        </div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="bg-[#12141A] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center space-x-2.5 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
              <h2 className="font-bricolage text-xl sm:text-2xl font-bold text-white">
                Key Features & Architecture
              </h2>
            </div>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm sm:text-base text-gray-300 font-sans">
                  <span className="text-amber-400 text-base mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Badges */}
        {project.tags && (
          <div className="bg-[#12141A] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center space-x-2.5 text-purple-400">
              <Code2 className="w-5 h-5" />
              <h2 className="font-bricolage text-xl sm:text-2xl font-bold text-white">
                Technologies & Tools
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {project.tags.map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-[#1e2029] border border-white/15 text-xs sm:text-sm font-medium text-gray-200"
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
