import React from 'react';
import { CheckCircle2, Twitter, Linkedin, Mail, Github, FileText } from 'lucide-react';

export default function HeroSection({ onOpenResume }) {
  return (
    <section className="pt-24 pb-12 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Main Header Card from Figma Node 136:18 */}
      <div className="bg-[#0D0F17] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
        
        {/* Top-Right Grumpy Cat & Open for new projects badge */}
        <div className="flex items-center justify-between mb-8">
          <div></div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161A24] border border-white/10 text-xs font-medium text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open for new projects</span>
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-white/15 shadow-md flex-shrink-0">
              <img
                src="/assets/6e3ab355521a13942b5a4a11d3ed107d310428f8.jpg"
                alt="Cat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-8">
          Finally found me!!
        </h1>

        {/* Profile Picture */}
        <div className="mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
            <img
              src="/assets/db4e4c670606b40c42a7d9c020a9d0a72812ffc3.jpg"
              alt="Sayan Ghosh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name & Verified Badge */}
        <div className="flex items-center space-x-2 mb-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Sayan Ghosh</h2>
          <svg className="w-6 h-6 text-blue-500 fill-current" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg font-bold text-gray-200 mb-4">
          Transforming complex problems into elegant, scalable solution
        </p>

        {/* Bio Text */}
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-3xl mb-8">
          I am Sayan, a dedicated full-stack web developer and programmer working remotely from my workspace in Kalyani, India. As a passionate fresher and self-taught software engineer, I have spent countless hours mastering the modern web ecosystem: engineering high-performance interfaces, developing secure API gateways, and structuring clean database schemas.
        </p>

        {/* Social Icons & Resume Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:sayanghosh1887@gmail.com"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/me-sayanghosh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onOpenResume}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
          >
            My Resume
          </button>
        </div>

      </div>

    </section>
  );
}
