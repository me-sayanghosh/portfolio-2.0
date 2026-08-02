'use client';

import React from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "projects", label: "Projects", path: "/projects" },
  ];

  // Hide navbar on individual project detail pages e.g. /projects/:id
  if (pathname.startsWith('/projects/') && pathname !== '/projects') {
    return null;
  }

  const getActiveIndex = () => {
    if (pathname === '/about') return 1;
    if (pathname === '/projects') return 2;
    return 0;
  };

  const activeIndex = getActiveIndex();

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      {/* Capsule Navigation Container */}
      <div className="w-[270px] sm:w-[290px] h-[46px] border border-white/10 rounded-[30px] p-[5px] flex flex-row items-center justify-between bg-[#1f1f1f]/95 backdrop-blur-xl shadow-2xl relative">
        
        {/* Persistent Pure-Horizontal Animated Spotlight Slider */}
        <motion.div
          animate={{ x: `${activeIndex * 100}%` }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 32,
            mass: 0.7,
          }}
          className="absolute top-[5px] left-[5px] w-[calc((100%-10px)/3)] h-[36px] rounded-[22px] border border-white/15 bg-[#262626] overflow-hidden transform-gpu pointer-events-none z-0"
        >
          {/* Layer 1: GPU-Accelerated Spotlight Beam Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[56px] h-[32px] pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(ellipse 55% 85% at 50% 0%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.25) 45%, rgba(255, 255, 255, 0) 100%)",
            }}
          />

          {/* Layer 2: Soft Ambient Base Glow */}
          <div
            className="absolute top-1 left-1/2 -translate-x-1/2 w-[36px] h-[20px] pointer-events-none z-0 opacity-50"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 80%)",
            }}
          />

          {/* Layer 3: Solid Top Lamp Bar with Crisp Flare */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[26px] h-[2px] bg-white rounded-full z-20 shadow-[0_0_8px_1px_rgba(255,255,255,0.9)]"
          />
        </motion.div>

        {/* Tab Buttons */}
        {tabs.map((tab, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={tab.id}
              onClick={() => router.push(tab.path)}
              className={`relative z-10 flex-1 h-full rounded-[22px] flex items-center justify-center text-xs sm:text-sm font-medium transition-colors duration-200 select-none cursor-pointer ${
                isActive ? "text-white" : "text-[#888888] hover:text-white"
              }`}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
