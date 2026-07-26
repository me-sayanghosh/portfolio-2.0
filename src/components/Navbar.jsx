import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' }
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      
      {/* Frame 30 Container from Figma */}
      <div className="w-[165px] h-[44px] border border-[#1E1E1E] rounded-[40px] p-[6px] gap-[5px] flex flex-row items-center justify-between bg-[#0A0A0A]/90 backdrop-blur-xl shadow-2xl relative">
        
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
              {/* Animated Active Pill with Spotlight (using Framer Motion layoutId) */}
              {isActive && (
                <motion.div
                  layoutId="activeTabSpotlight"
                  className="absolute inset-0 rounded-[30px] border border-[#2B2B2B] bg-[#141414] shadow-md overflow-hidden"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30
                  }}
                >
                  {/* Top Bright White Lamp Bar */}
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-white rounded-full shadow-[0_0_8px_#FFFFFF]" />

                  {/* Downward Light Cone/Beam */}
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0)_75%)] pointer-events-none rounded-t-[30px]" />
                </motion.div>
              )}

              {/* Tab Text */}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}

      </div>

    </div>
  );
}
