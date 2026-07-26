import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Github, Instagram, X } from 'lucide-react';

export default function HeroSection({ onOpenResume, onOpenHackathonModal }) {
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  return (
    <section className="pt-20 sm:pt-24 pb-4 max-w-[762px] mx-auto px-4 sm:px-6">
      
      {/* Pure Black Banner Container from Figma */}
      <div className="bg-[#000000] border border-black/15 rounded-2xl relative overflow-hidden h-[180px] sm:h-[210px] shadow-2xl flex items-center justify-center">
        
        {/* Top-Right "Open for new projects" Badge */}
        <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0F1118] border border-white/10 text-xs font-medium text-white/80 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span>Open for new projects</span>
        </div>

        {/* Large Grumpy White Cat Image filling full right side of black banner */}
        <div className="absolute right-0 top-0 bottom-0 w-[500px] sm:w-[270px] pointer-events-none overflow-hidden rounded-r-2xl flex items-center justify-end">
          <img
            src="/assets/Cat.png"
            alt="Grumpy Cat"
            className="h-full w-full object-cover object-right"
          />
        </div>

        {/* Banner Title - Centered Vertically & Horizontally in Black Banner */}
        <h1
          className="font-bricolage font-bold text-3xl sm:text-[40px] text-white text-center z-10 px-4"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '48px',
            letterSpacing: '-1.6px'
          }}
        >
          Finally found me!!
        </h1>

      </div>

      {/* Row containing Overlapping Profile Picture (Left) & My Resume Button (Right) */}
      <div className="flex items-start justify-between px-2 sm:px-4 mb-2 relative">
        {/* Profile Avatar overlapping bottom of black banner - Click to Expand */}
        <div
          onClick={() => setIsAvatarModalOpen(true)}
          className="w-22 h-22 sm:w-24 sm:h-24 rounded-[18px] overflow-hidden border-2 border-white shadow-2xl flex-shrink-0 relative -mt-11 sm:-mt-12 z-30 bg-black cursor-pointer group transform-gpu transition-all duration-300 ease-out hover:-rotate-3 hover:scale-105"
          title="Click to view photo"
        >
          <img
            src="/assets/profile-avatar.jpg"
            alt="Sayan Ghosh"
            className="w-full h-full object-cover"
          />
        </div>

        {/* My Resume Button (Matching Figma Screenshot) */}
        <button
          onClick={onOpenResume}
          className="mt-3 px-4 py-1 sm:px-5 sm:py-1.5 rounded-full border border-white/40 bg-black/80 hover:bg-white/15 text-white font-urbanist text-xs sm:text-sm font-medium tracking-tight italic transition-all active:scale-95 cursor-pointer shadow-md"
        >
          My Resume
        </button>
      </div>

      {/* Name, Tagline, Bio & Social Links */}
      <div className="px-1 sm:px-2 mt-2">
        {/* Name & Verified Badge */}
        <div className="flex items-center space-x-2.5 mb-1.5">
          <h2
            className="font-bricolage font-bold text-3xl sm:text-[40px] text-white"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '48px',
              letterSpacing: '-1.6px'
            }}
          >
            Sayan Ghosh
          </h2>
          {/* Verified Blue Badge */}
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#1D9BF0] fill-current flex-shrink-0" viewBox="0 0 24 24">
            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238 1.35 1.273 2.72 2.148 4.3 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-1.35 2.148-2.72 2.148-4.3zM9.6 17.2l-4.4-4.4 1.4-1.4 3 3 7.6-7.6 1.4 1.4-9 9z" />
          </svg>
        </div>

        {/* Tagline */}
        <p className="font-sans text-lg sm:text-[20px] font-medium text-gray-200 mb-3 tracking-[-0.8px] leading-[24px]">
          Transforming complex problems into elegant, scalable solution
        </p>

        {/* Bio Text */}
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-3xl mb-6 font-sans">
          I am Sayan, a dedicated full-stack web developer and programmer working remotely from my workspace in Kalyani, India. As a passionate fresher and self-taught software engineer, I have spent countless hours mastering the modern web ecosystem: engineering high-performance interfaces, developing secure API gateways, and structuring clean database schemas.
        </p>

        {/* Social Icons & Building Scalable Products Pill Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {/* X (Twitter) */}
            <div className="relative group flex flex-col items-center">
              <a
                href="https://x.com/SayanDev01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Tooltip Popup */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-30">
                <div className="bg-[#181A24] border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-xl whitespace-nowrap relative">
                  Twitter / X
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#181A24]" />
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="relative group flex flex-col items-center">
              <a
                href="https://www.linkedin.com/in/sayan-ghosh-b7aaa5293/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              {/* Tooltip Popup */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-30">
                <div className="bg-[#181A24] border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-xl whitespace-nowrap relative">
                  LinkedIn
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#181A24]" />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="relative group flex flex-col items-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sayanghosh1887@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              {/* Tooltip Popup */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-30">
                <div className="bg-[#181A24] border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-xl whitespace-nowrap relative">
                  Email
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#181A24]" />
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="relative group flex flex-col items-center">
              <a
                href="https://github.com/me-sayanghosh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              {/* Tooltip Popup */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-30">
                <div className="bg-[#181A24] border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-xl whitespace-nowrap relative">
                  GitHub
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#181A24]" />
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="relative group flex flex-col items-center">
              <a
                href="https://www.instagram.com/sayann.exe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              {/* Tooltip Popup */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-30">
                <div className="bg-[#181A24] border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-xl whitespace-nowrap relative">
                  Instagram
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#181A24]" />
                </div>
              </div>
            </div>
          </div>

          {/* ~ Building Scalable products Pill Badge */}
          <div className="px-4 py-1.5 rounded-full bg-[#181A22] border border-white/10 text-xs sm:text-sm font-semibold text-white tracking-tight shadow-md flex items-center space-x-1.5">
            <span className="text-gray-400 font-mono">~</span>
            <span>Building Scalable products</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Expanded Profile Picture Modal Lightbox */}
      <AnimatePresence>
        {isAvatarModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAvatarModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-[#12141C] border border-white/20 rounded-3xl overflow-hidden shadow-2xl cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsAvatarModalOpen(false)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* High-res Image */}
              <div className="w-full max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src="/assets/profile-avatar.jpg"
                  alt="Sayan Ghosh Full"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Footer Caption */}
              <div className="p-4 bg-[#0F1118] border-t border-white/10 flex items-center justify-between text-white">
                <div>
                  <h3 className="font-bold text-base font-bricolage">Sayan Ghosh</h3>
                  <p className="text-xs text-gray-400 font-sans">Software Engineer & Full-Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
