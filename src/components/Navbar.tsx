'use client';

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { House, UserRound, Briefcase, BookOpen } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "experience", label: "Experience", path: "/experience" },
    { id: "projects", label: "Projects", path: "/projects" },
  ];

  const mobileTabs = [
    { id: "home", label: "Home", path: "/", Icon: House },
    { id: "about", label: "About", path: "/about", Icon: UserRound },
    { id: "experience", label: "Experience", path: "/experience", Icon: Briefcase },
    { id: "projects", label: "Projects", path: "/projects", Icon: BookOpen },
  ];

  // Hide navbar on gallery page and individual project detail pages e.g. /projects/:id
  if (
    pathname === "/gallery" ||
    pathname.startsWith("/gallery") ||
    (pathname.startsWith("/projects/") && pathname !== "/projects")
  ) {
    return null;
  }

  const getActiveIndex = () => {
    if (pathname === "/about") return 1;
    if (pathname === "/experience") return 2;
    if (pathname === "/projects") return 3;
    return 0;
  };

  const activeIndex = getActiveIndex();

  const getMobileActiveId = () => {
    if (pathname === "/about") return "about";
    if (pathname === "/experience") return "experience";
    if (pathname === "/projects") return "projects";
    return "home";
  };

  const mobileActiveId = getMobileActiveId();

  return (
    <>
      {/* ─── Desktop Spotlight Navbar (md and above) ─── */}
      <div className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className="w-[340px] sm:w-[380px] h-[46px] border border-white/10 rounded-[30px] p-[5px] flex flex-row items-center justify-between bg-[#1f1f1f]/95 backdrop-blur-xl shadow-2xl relative">
          {/* Persistent Pure-Horizontal Animated Spotlight Slider */}
          <motion.div
            animate={{ x: `${activeIndex * 100}%` }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 32,
              mass: 0.7,
            }}
            className="absolute top-[5px] left-[5px] w-[calc((100%-10px)/4)] h-[36px] rounded-[22px] border border-white/15 bg-[#262626] overflow-hidden transform-gpu pointer-events-none z-0"
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

      {/* ─── Mobile Floating Bottom Capsule Navbar (below md) ─── */}
      <div
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-[#161616]/95 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.85)]">
          {mobileTabs.map((tab, idx) => {
            const isActive = mobileActiveId === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => router.push(tab.path)}
                aria-label={tab.label}
                className="relative flex flex-col items-center justify-center cursor-pointer select-none focus:outline-none"
              >
                {/* Active warm glow disc */}
                {isActive && (
                  <motion.div
                    layoutId="activeMobileNavPill"
                    className="absolute inset-0 rounded-full border border-orange-500/30"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(255, 92, 0, 0.30) 0%, rgba(255, 92, 0, 0.10) 55%, rgba(22, 22, 22, 0.0) 100%)",
                      boxShadow: "0 0 16px rgba(255, 92, 0, 0.22)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                      mass: 0.6,
                    }}
                  />
                )}

                {/* Icon + orange dot wrapper */}
                <div className="relative flex flex-col items-center justify-center w-11 h-11">
                  <tab.Icon
                    className={`w-[22px] h-[22px] transition-colors duration-200 ${
                      isActive ? "text-white" : "text-[#888888]"
                    }`}
                    strokeWidth={isActive ? 2 : 1.75}
                  />

                  {/* Active indicator dot */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        key="dot"
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.4 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ff5c00]"
                        style={{
                          boxShadow: "0 0 5px 1px rgba(255,92,0,0.75)",
                        }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
