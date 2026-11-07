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
  Sun,
  Menu,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navItems = [
    { id: "home", label: "Home", path: "/", icon: House, iconOnly: true },
    { id: "about", label: "About", path: "/about", icon: CircleUser },
    { id: "projects", label: "Projects", path: "/projects", icon: Monitor },
    { id: "experience", label: "Experience", path: "/experience", icon: Briefcase },
    { id: "blogs", label: "Blogs", path: "/blogs", icon: BookOpen },
    { id: "guestbook", label: "Guestbook", path: "/guestbook", icon: Users },
  ];

  const mobileMenuItems = [
    { id: "home", label: "Home", path: "/", icon: House },
    { id: "about", label: "About", path: "/about", icon: CircleUser },
    { id: "projects", label: "Projects", path: "/projects", icon: Monitor },
    { id: "experience", label: "Experience", path: "/experience", icon: Briefcase },
    { id: "blogs", label: "Blogs", path: "/blogs", icon: BookOpen },
    { id: "guestbook", label: "Guestbook", path: "/guestbook", icon: Users },
  ];

  // Hide navbar on gallery page and individual project detail pages e.g. /projects/:id
  if (
    pathname === "/gallery" ||
    pathname.startsWith("/gallery") ||
    (pathname.startsWith("/projects/") && pathname !== "/projects")
  ) {
    return null;
  }

  const isItemActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || (path !== "/" && pathname.startsWith(path));
  };

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* ─── Desktop Squarish Spotlight Navbar (md and above) ─── */}
      <nav aria-label="Main Navigation" className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className="h-[52px] border border-white/10 rounded-2xl p-1.5 flex flex-row items-center gap-1 bg-[#121212]/95 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.8)] relative">
          {navItems.map((item) => {
            const active = isItemActive(item.path);
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => router.push(item.path)}
                title={item.label}
                aria-label={item.label}
                className={`relative h-full rounded-xl flex items-center justify-center gap-2 text-[13.5px] font-medium transition-colors duration-200 select-none cursor-pointer z-10 active:scale-95 ${
                  item.iconOnly ? "w-10 px-0" : "px-3.5"
                } ${
                  active ? "text-white" : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="desktop-navbar-spotlight"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 rounded-xl border border-white/15 bg-[#222222] overflow-hidden pointer-events-none -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_2px_8px_rgba(0,0,0,0.5)]"
                  >
                    {/* Layer 1: Downward Spotlight Beam (Fans out across width and fades towards bottom) */}
                    <div
                      className="absolute inset-0 pointer-events-none z-10"
                      style={{
                        background:
                          "radial-gradient(ellipse 70% 85% at 50% 0%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.14) 45%, rgba(255, 255, 255, 0) 80%)",
                      }}
                    />

                    {/* Layer 2: Soft Ambient Base Glow */}
                    <div
                      className="absolute inset-0 pointer-events-none z-0"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.12) 0%, transparent 65%)",
                      }}
                    />

                    {/* Layer 3: Top Flare Glow beneath Filament */}
                    <div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 ${
                        item.iconOnly ? "w-8" : "w-16"
                      } h-[6px] pointer-events-none z-10`}
                      style={{
                        background:
                          "radial-gradient(ellipse at center top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 75%)",
                      }}
                    />

                    {/* Layer 4: Solid Crisp Lamp Bar with Neon Bloom */}
                    <div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 ${
                        item.iconOnly ? "w-[22px]" : "w-7"
                      } h-[2px] bg-white rounded-full z-20 shadow-[0_0_8px_1.5px_rgba(255,255,255,1),0_0_16px_3px_rgba(255,255,255,0.55)]`}
                    />
                  </motion.div>
                )}

                <Icon className="w-4 h-4 shrink-0" strokeWidth={1.85} />
                {!item.iconOnly && <span>{item.label}</span>}
              </button>
            );
          })}

          {/* Far Right: Theme Toggle Button (No divider, clean spacing) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="w-10 h-full rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/[0.04] active:scale-90 transition-all cursor-pointer shrink-0 ml-0.5"
          >
            {isDarkMode ? (
              <Moon className="w-4 h-4" strokeWidth={1.85} />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" strokeWidth={1.85} />
            )}
          </button>
        </div>
      </nav>

      {/* ─── Mobile Sticky Top Island Navbar (below md) ─── */}
      <div className="md:hidden sticky top-0 z-40 bg-transparent pt-2.5 px-2.5 sm:px-3 pb-1.5 transition-all duration-300 w-full">
        <div className="w-full max-w-xl mx-auto">
          {/* Floating Top Header Bar */}
          <div className="h-[52px] p-1.5 px-2 rounded-2xl bg-[#141414]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center justify-between">
            {/* Left: Home Icon Pill Button */}
            <button
              onClick={() => router.push("/")}
              aria-label="Home"
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer active:scale-95 relative overflow-hidden ${
                pathname === "/"
                  ? "text-white bg-[#222222] border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)]"
                  : "text-neutral-400 hover:text-white bg-[#1a1a1a] hover:bg-[#222222]"
              }`}
            >
              {pathname === "/" && (
                <>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 85% at 50% 0%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.14) 45%, rgba(255, 255, 255, 0) 80%)",
                    }}
                  />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-[1.5px] bg-white rounded-full shadow-[0_0_6px_1px_rgba(255,255,255,1),0_0_12px_2px_rgba(255,255,255,0.5)]" />
                </>
              )}
              <House className="w-[18px] h-[18px] relative z-10" strokeWidth={1.75} />
            </button>

            {/* Right: Theme Indicator + Hamburger Menu Pill Button */}
            <div className="flex items-center gap-2 pr-0.5">
              {/* Theme Indicator (Moon / Sun) */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-8 h-8 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 active:scale-90 transition-all cursor-pointer"
              >
                {isDarkMode ? (
                  <Moon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                ) : (
                  <Sun className="w-[18px] h-[18px] text-amber-400" strokeWidth={1.75} />
                )}
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="w-9 h-9 rounded-xl bg-[#222222] hover:bg-[#282828] active:scale-95 transition-all flex items-center justify-center text-white cursor-pointer border border-white/10"
              >
                <Menu className="w-5 h-5 text-white" strokeWidth={1.75} />
              </button>
            </div>
          </div>

          {/* Floating Dropdown Menu Card */}
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
                <div className="p-2 rounded-2xl bg-[#141414]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col space-y-1">
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
                        className={`relative flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer select-none w-full active:scale-[0.99] overflow-hidden ${
                          active
                            ? "bg-[#222222] border border-white/15 text-white font-medium shadow-sm"
                            : "text-neutral-400 hover:text-white hover:bg-white/[0.04] active:bg-white/[0.06]"
                        }`}
                      >
                        {active && (
                          <>
                            <div
                              className="absolute top-0 left-8 w-[50px] h-[24px] pointer-events-none"
                              style={{
                                background:
                                  "radial-gradient(ellipse 60% 85% at 50% 0%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.25) 45%, rgba(255, 255, 255, 0) 100%)",
                              }}
                            />
                            <div className="absolute top-0 left-8 w-[24px] h-[1.5px] bg-white rounded-full shadow-[0_0_6px_1px_rgba(255,255,255,0.9)]" />
                          </>
                        )}
                        <Icon
                          className={`w-[19px] h-[19px] shrink-0 relative z-10 transition-colors ${
                            active ? "text-white" : "text-neutral-400"
                          }`}
                          strokeWidth={1.75}
                        />
                        <span className="text-[14.5px] font-medium tracking-tight relative z-10">{item.label}</span>
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
