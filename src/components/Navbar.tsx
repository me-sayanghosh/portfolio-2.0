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
    // Navigate without changing the dropdown state (dropdown stays open)
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

      {/* ─── Mobile Sticky Top Navbar with In-Flow Dropdown (below md) ─── */}
      <div className="md:hidden sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md pt-3.5 px-4 pb-2 transition-all duration-300">
        <div className="max-w-lg mx-auto">
          {/* Floating Top Header Bar */}
          <div className="h-[50px] px-4 rounded-2xl bg-[#161616] border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex items-center justify-between">
            {/* Left: Home Icon Button */}
            <button
              onClick={() => router.push("/")}
              aria-label="Home"
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                pathname === "/"
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5 active:scale-95"
              }`}
            >
              <House className="w-[18px] h-[18px]" strokeWidth={1.75} />
            </button>

            {/* Right: Theme Indicator + Hamburger Menu Toggle */}
            <div className="flex items-center gap-3">
              {/* Theme Indicator (Moon) */}
              <button
                type="button"
                aria-label="Theme indicator"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
              >
                <Moon className="w-[18px] h-[18px]" strokeWidth={1.75} />
              </button>

              {/* Hamburger Button (Always 3 lines, toggles dropdown on click) */}
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
              >
                <Menu className="w-5 h-5 text-gray-300" strokeWidth={1.75} />
              </button>
            </div>
          </div>

          {/* Floating Dropdown Menu Card (Pushes content down, stays open on click) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -6, height: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="mt-2.5 p-2 rounded-2xl bg-[#161616] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.7)] flex flex-col space-y-1 overflow-hidden"
              >
                {mobileMenuItems.map((item) => {
                  const active = isItemActive(item.path);
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.path)}
                      className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-left transition-colors cursor-pointer select-none w-full ${
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
                      <span className="text-[15px] tracking-tight">{item.label}</span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
