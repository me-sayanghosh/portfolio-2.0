import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "projects", label: "Projects", path: "/projects" },
  ];

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      {/* Capsule Navigation Container */}
      <div className="w-[270px] sm:w-[290px] h-[46px] border border-white/10 rounded-[30px] p-[5px] gap-[4px] flex flex-row items-center justify-between bg-[#1f1f1f]/95 backdrop-blur-xl shadow-2xl relative">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={`relative flex-1 h-full rounded-[22px] flex items-center justify-center text-xs sm:text-sm font-medium transition-colors duration-200 select-none cursor-pointer ${
                isActive ? "text-white" : "text-[#888888] hover:text-white"
              }`}
            >
              {/* Animated Active Pill with Spotlight Lamp */}
              {isActive && (
                <motion.div
                  layoutId="activeTabSpotlight"
                  className="absolute inset-0 rounded-[22px] border border-white/15 bg-[#262626] overflow-hidden"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 30,
                  }}
                >
                  {/* Layer 1: Soft Ambient Backing Glow */}
                  <div
                    className="absolute top-10 left-[calc(50%-12px)] w-[24px] h-[28px] pointer-events-none z-0 opacity-40"
                    style={{
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
                      filter: "blur(2px)",
                    }}
                  />

                  {/* Layer 2: Soft Flaring Trapezoidal Light Beam */}
                  <svg
                    className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
                    width="70"
                    height="32"
                    viewBox="0 0 70 32"
                  >
                    <defs>
                      <linearGradient id="beamFade" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#FFFFFF"
                          stopOpacity="0.85"
                        />
                        <stop
                          offset="50%"
                          stopColor="#FFFFFF"
                          stopOpacity="0.22"
                        />
                        <stop
                          offset="100%"
                          stopColor="#FFFFFF"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <filter
                        id="beamBlur"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feGaussianBlur stdDeviation="2" />
                      </filter>
                    </defs>
                    <polygon
                      points="22,0 48,0 62,28 8,28"
                      fill="url(#beamFade)"
                      filter="url(#beamBlur)"
                    />
                  </svg>

                  {/* Layer 3: Solid Top Lamp Bar */}
                  <div
                    className="absolute top-0 left-[calc(50%-13px)] w-[26px] h-[2.5px] bg-white rounded-full z-20"
                  />
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
