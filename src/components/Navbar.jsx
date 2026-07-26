"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' }
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      
      {/* Frame 30 Outer Container */}
      <div className="w-[165px] h-[44px] border border-[#1E1E1E] rounded-[40px] p-[6px] gap-[5px] flex flex-row items-center justify-between bg-[#070709]/95 backdrop-blur-xl shadow-2xl relative">
        
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 h-full rounded-[30px] flex items-center justify-center text-xs font-semibold transition-colors duration-200 select-none ${
                isActive ? 'text-white' : 'text-[#737373] hover:text-white'
              }`}
            >
              {/* Animated Active Pill with Exact Figma CSS Spotlight */}
              {isActive && (
                <motion.div
                  layoutId="activeTabSpotlight"
                  className="absolute inset-0 rounded-[30px] border border-[#22242B] bg-[#111216] overflow-hidden"
                  transition={{
                    type: 'spring',
                    stiffness: 450,
                    damping: 32
                  }}
                >
                  {/* Rectangle 13 Light Beam Blur Glow (Exact Figma CSS) */}
                  <div
                    className="absolute pointer-events-none z-10"
                    style={{
                      width: '32px',
                      height: '25px',
                      left: 'calc(50% - 32px / 2 + 1px)',
                      top: '0px',
                      background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
                      filter: 'blur(7.7px)',
                    }}
                  />

                  {/* Spotlight Top Lamp Bar (Exact Figma CSS) */}
                  <div
                    className="absolute pointer-events-none z-20"
                    style={{
                      width: '22px',
                      height: '2px',
                      left: 'calc(50% - 22px / 2 + 1px)',
                      top: '0px',
                      background: '#FFFFFF',
                      borderRadius: '14px',
                    }}
                  />
                </motion.div>
              )}

              {/* Tab Text */}
              <span className="relative z-30 font-sans tracking-tight">{tab.label}</span>
            </button>
          );
        })}

      </div>

    </div>
  );
}