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
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Capsule Navigation Container */}
      <div className="w-[340px] sm:w-[360px] h-[60px] border border-[#272727] rounded-[40px] p-[8px] gap-[6px] flex flex-row items-center justify-between bg-[#070709]/95 backdrop-blur-xl shadow-2xl relative">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className={`relative flex-1 h-full rounded-[30px] flex items-center justify-center text-sm sm:text-base font-semibold transition-colors duration-200 select-none cursor-pointer ${
                isActive ? "text-white" : "text-[#888888] hover:text-white"
              }`}
            >
              {/* Animated Active Pill with Spotlight Lamp */}
              {isActive && (
                <motion.div
                  layoutId="activeTabSpotlight"
                  className="absolute inset-0 rounded-[30px] border border-[#2f313a] bg-[#111216] overflow-hidden"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 30,
                  }}
                >
                  {/* Layer 1: Soft Ambient Backing Glow */}
                  <div
                    className="absolute top-100 left-[calc(59%-24px)] w-[29px] h-[35px] pointer-events-none z-0 opacity-40"
                    style={{
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
                      filter: "blur(2px)",
                    }}
                  />

                  {/* Layer 2: Soft Flaring Trapezoidal Light Beam */}
                  <svg
                    className="absolute top-0 left-[60%] -translate-x-1/2 pointer-events-none"
                    style={{ transform: "translateX(-57%)" }}
                    width="85"
                    height="40"
                    viewBox="0 0 80 40"
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
                        <feGaussianBlur stdDeviation="2.5" />
                      </filter>
                    </defs>
                    <polygon
                      points="26,0 44,0 63,32 7,32"
                      fill="url(#beamFade)"
                      filter="url(#beamBlur)"
                    />
                  </svg>

                  {/* Layer 3: Solid Top Lamp Bar */}
                  <div
                    className="absolute top-0 left-[calc(50%-16px)] w-[32px] h-[3px] bg-white rounded-full z-20"
                  />
                </motion.div>
              )}

              {/* Tab Text */}
              <span className="relative z-30 font-sans tracking-tight">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
