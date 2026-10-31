'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  House,
  CircleUser,
  Monitor,
  Briefcase,
  Users,
  BookOpen,
  Moon,
  Menu,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "experience", label: "Experience", path: "/experience" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "blogs", label: "Blogs", path: "/blogs" },
  ];

  const mobileMenuItems = [
    { id: "about", label: "About", path: "/about", icon: CircleUser },
    { id: "projects", label: "Projects", path: "/projects", icon: Monitor },
    { id: "experience", label: "Experience", path: "/experience", icon: Briefcase },
    { id: "guestbook", label: "Guestbook", path: "/guestbook", icon: Users },
    { id: "blogs", label: "Blog", path: "/blogs", icon: BookOpen },
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
    if (pathname === "/about" || pathname.startsWith("/about")) return 1;
    if (pathname === "/experience" || pathname.startsWith("/experience")) return 2;
    if (pathname === "/projects" || pathname.startsWith("/projects")) return 3;
    if (pathname === "/blogs" || pathname.startsWith("/blogs")) return 4;
    return 0;
  };

  const activeIndex = getActiveIndex();

  const isItemActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || (path !== "/" && pathname.startsWith(path));
  };

  const handleNavClick = (path: string) => {
    // Navigate to route without closing dropdown or altering menu state
    router.push(path);
  };

  return (
    <>
      {/* ─── Desktop Spotlight Navbar (md and above) ─── */}
      <div className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className="w-[420px] sm:w-[460px] h-[46px] border border-white/10 rounded-[30px] p-[5px] flex flex-row items-center justify-between bg-[#1f1f1f]/95 backdrop-blur-xl shadow-2xl relative">
          {/* Persistent Pure-Horizontal Animated Spotlight Slider */}
          <motion.div
            animate={{ x: `${activeIndex * 100}%` }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 32,
              mass: 0.7,
            }}
            className="absolute top-[5px] left-[5px] w-[calc((100%-10px)/5)] h-[36px] rounded-[22px] border border-white/15 bg-[#262626] overflow-hidden transform-gpu pointer-events-none z-0"
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

      {/* ─── Mobile Sticky Top Island Navbar (below md) ─── */}
      {/* Floating Island in-flow: Content starts cleanly below top bar or dropdown without static black background */}
      <div className="md:hidden sticky top-0 z-40 bg-transparent pt-2.5 px-2 sm:px-3 pb-1.5 transition-all duration-300 w-full">
        <div className="w-full max-w-xl mx-auto">
          {/* Floating Top Header Bar - Sleek & Compact Proportions */}
          <div className="h-[52px] p-1.5 px-2 rounded-[20px] bg-[#141414]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center justify-between">
            {/* Left: Home Icon Pill Button */}
            <button
              onClick={() => router.push("/")}
              aria-label="Home"
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
                pathname === "/"
                  ? "text-white bg-[#262626] shadow-sm"
                  : "text-white bg-[#222222] hover:bg-[#282828]"
              }`}
            >
              <House className="w-[18px] h-[18px]" strokeWidth={1.75} />
            </button>

            {/* Right: Theme Indicator + Hamburger Menu Pill Button */}
            <div className="flex items-center gap-3 pr-0.5">
              {/* Theme Indicator (Moon) */}
              <button
                type="button"
                aria-label="Theme indicator"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
              >
                <Moon className="w-[18px] h-[18px]" strokeWidth={1.75} />
              </button>

              {/* Hamburger Button (Always 3 lines inside rounded square pill) */}
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="w-9 h-9 rounded-xl bg-[#222222] hover:bg-[#282828] active:scale-95 transition-all flex items-center justify-center text-white cursor-pointer"
              >
                <Menu className="w-5 h-5 text-white" strokeWidth={1.75} />
              </button>
            </div>
          </div>

          {/* Floating Dropdown Menu Card (Pushes content down with silky smooth spring physics) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  marginTop: 8,
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 340,
                      damping: 30,
                      mass: 0.8,
                    },
                    opacity: { duration: 0.2, ease: "easeOut" },
                    marginTop: { duration: 0.18 },
                  },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                  transition: {
                    height: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.14, ease: "easeIn" },
                    marginTop: { duration: 0.18 },
                  },
                }}
                className="overflow-hidden"
              >
                <div className="p-2 rounded-[20px] bg-[#141414]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col space-y-0.5">
                  {mobileMenuItems.map((item, index) => {
                    const active = isItemActive(item.path);
                    const Icon = item.icon;

                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 0.02 + index * 0.02,
                            duration: 0.18,
                            ease: "easeOut",
                          },
                        }}
                        onClick={() => handleNavClick(item.path)}
                        className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer select-none w-full active:scale-[0.99] ${
                          active
                            ? "bg-[#262626] text-white font-medium shadow-sm"
                            : "text-gray-300 hover:text-white hover:bg-white/[0.04] active:bg-white/[0.06]"
                        }`}
                      >
                        <Icon
                          className={`w-[19px] h-[19px] shrink-0 transition-colors ${
                            active ? "text-white" : "text-gray-400"
                          }`}
                          strokeWidth={1.75}
                        />
                        <span className="text-[14.5px] font-medium tracking-tight">{item.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
