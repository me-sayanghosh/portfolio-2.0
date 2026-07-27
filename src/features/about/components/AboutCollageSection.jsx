import React, { useState } from 'react';

export default function AboutCollageSection({ onOpenResume }) {
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#000000] select-none group">
      
      {/* 1. Full Pristine Figma Collage Image (Fades out smoothly when center card is hovered) */}
      <img
        src="/assets/figma-full-collage.png"
        alt="About Sayan Collage"
        className={`w-full h-auto block transition-all duration-500 ease-out ${
          isCenterHovered ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      />

      {/* 2. Popped Up Center Card (Appears & Scales Up when hovered) */}
      <div
        onMouseEnter={() => setIsCenterHovered(true)}
        onMouseLeave={() => setIsCenterHovered(false)}
        className={`absolute rounded-2xl overflow-hidden transition-all duration-500 ease-out cursor-pointer z-30 ${
          isCenterHovered 
            ? 'scale-110 opacity-100 shadow-[0_35px_90px_rgba(0,0,0,0.95)] border border-white/30' 
            : 'scale-100 opacity-0 pointer-events-none'
        }`}
        style={{
          top: '21.7%',
          left: '32.0%',
          width: '35.8%',
          height: '55.5%'
        }}
      >
        <img
          src="/assets/figma-center-card.png"
          alt="Hello World Card"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 3. Invisible Hover Trigger Region over Center Card */}
      <div
        onMouseEnter={() => setIsCenterHovered(true)}
        onMouseLeave={() => setIsCenterHovered(false)}
        className="absolute cursor-pointer z-20"
        style={{
          top: '21.7%',
          left: '32.0%',
          width: '35.8%',
          height: '55.5%'
        }}
      />

      {/* 4. Top Right "My Resume" Button (Same as Home Page) */}
      <button
        onClick={onOpenResume}
        className="resume-btn px-4 py-1 sm:px-5 sm:py-1.5 rounded-full border border-white/40 bg-[#0D0F15] text-white font-urbanist text-xs sm:text-sm font-medium tracking-tight italic active:scale-95 cursor-pointer shadow-lg z-40 transition-transform"
        style={{ position: 'absolute', top: '16px', right: '16px' }}
      >
        My Resume
      </button>

      {/* 5. Interactive Hotspot: "Send 'hi' on WhatsApp" Button */}
      <a
        href="https://wa.me/919339740537"
        target="_blank"
        rel="noopener noreferrer"
        title="Send 'hi' on WhatsApp"
        className="absolute cursor-pointer z-40"
        style={{
          top: '64.8%',
          left: '12.5%',
          width: '26.1%',
          height: '4.6%'
        }}
      >
        <span className="sr-only">Send "hi" on WhatsApp</span>
      </a>

    </div>
  );
}
