'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
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

const NAV_ITEMS = [
  { id: "home", label: "Home", path: "/", icon: House, iconOnly: true },
  { id: "about", label: "About", path: "/about", icon: CircleUser },
  { id: "projects", label: "Projects", path: "/projects", icon: Monitor },
  { id: "experience", label: "Experience", path: "/experience", icon: Briefcase },
  { id: "blogs", label: "Blogs", path: "/blogs", icon: BookOpen },
  { id: "guestbook", label: "Guestbook", path: "/guestbook", icon: Users },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState<{ left: number; width: number; isIconOnly: boolean } | null>(null);

  useEffect(() => {
    setMounted(true);
    const activeEl = navContainerRef.current?.querySelector<HTMLButtonElement>('[data-active="true"]');
    if (activeEl) {
      setSpotlight({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        isIconOnly: activeEl.offsetWidth <= 44,
      });
    }
  }, [pathname]);

  const isDark = mounted ? (resolvedTheme === "dark" || theme === "dark") : true;

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // Hide navbar on gallery and project detail pages
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

  const handleNavClick = (path: string, el?: HTMLButtonElement) => {
    if (el) {
      setSpotlight({
        left: el.offsetLeft,
        width: el.offsetWidth,
        isIconOnly: el.offsetWidth <= 44,
      });
    }
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  return (
    <>
      {/* ─── Desktop Squarish Spotlight Navbar (md and above) ─── */}
      <nav aria-label="Main Navigation" className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 sm:px-6">
        <div className="w-full h-[52px] border border-zinc-200/90 dark:border-white/10 rounded-2xl p-1.5 flex flex-row items-center justify-between bg-white/85 dark:bg-[#121212]/95 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.8)] relative transition-colors duration-250">
          {/* Left: Navigation Items with Sliding Spotlight */}
          <div ref={navContainerRef} className="flex items-center gap-1 relative">
            {/* Sliding Spotlight Box (Immune to scroll position, animates strictly on X-axis) */}
            {mounted && spotlight && (
              <motion.div
                initial={false}
                animate={{
                  x: spotlight.left,
                  width: spotlight.width,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                  mass: 0.8,
                }}
                className="absolute top-0 h-[38px] rounded-xl border border-zinc-300 dark:border-white/20 bg-zinc-100 dark:bg-[#1e1e22] overflow-hidden pointer-events-none z-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_2px_8px_rgba(0,0,0,0.5)] transition-colors duration-200"
              >
                {/* Layer 1: Downward Spotlight Beam (Cone) */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: isDark
                      ? "radial-gradient(ellipse 75% 85% at 50% 0%, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.28) 35%, rgba(255, 255, 255, 0.08) 65%, transparent 85%)"
                      : "radial-gradient(ellipse 75% 85% at 50% 0%, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.03) 35%, transparent 70%)",
                  }}
                />

                {/* Layer 2: Soft Ambient Base Glow */}
                {isDark && (
                  <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                      background: "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
                    }}
                  />
                )}

                {/* Layer 3: Top Flare Glow beneath Filament */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 ${
                    spotlight.isIconOnly ? "w-7" : "w-14"
                  } h-[8px] pointer-events-none z-10 transition-all duration-200`}
                  style={{
                    background: isDark
                      ? "radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 75%)"
                      : "radial-gradient(ellipse at 50% 0%, rgba(0, 0, 0, 0.15) 0%, transparent 75%)",
                  }}
                />

                {/* Layer 4: Solid Crisp Lamp Bar with Clean Neon Bloom */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 ${
                    spotlight.isIconOnly ? "w-[22px]" : "w-11"
                  } h-[2px] rounded-full z-20 transition-all duration-200 ${
                    isDark
                      ? "bg-white shadow-[0_0_6px_1px_rgba(255,255,255,0.95),0_0_12px_2px_rgba(255,255,255,0.45)]"
                      : "bg-zinc-800 shadow-[0_0_4px_1px_rgba(0,0,0,0.25)]"
                  }`}
                />
              </motion.div>
            )}

            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.path);
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  data-active={active}
                  onClick={(e) => handleNavClick(item.path, e.currentTarget)}
                  title={item.label}
                  aria-label={item.label}
                  className={`relative h-[38px] rounded-xl flex items-center justify-center gap-2 text-[13.5px] font-medium transition-colors duration-200 select-none cursor-pointer z-10 active:scale-95 ${
                    item.iconOnly ? "w-10 px-0" : "px-3.5"
                  } ${
                    active
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/70 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 relative z-10 transition-colors ${
                      active ? "text-zinc-950 dark:text-white" : ""
                    }`}
                    strokeWidth={1.85}
                  />
                  {!item.iconOnly && (
                    <span
                      className={`relative z-10 ${
                        active
                          ? "text-zinc-950 dark:text-white font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                          : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Far Right: Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="w-10 h-[38px] rounded-xl flex items-center justify-center text-zinc-600 hover:text-black hover:bg-zinc-100/70 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/[0.04] active:scale-90 transition-all cursor-pointer shrink-0"
          >
            {isDark ? (
              <Moon className="w-4 h-4" strokeWidth={1.85} />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" strokeWidth={1.85} />
            )}
          </button>
        </div>
      </nav>

      {/* ─── Mobile Sticky Top Island Navbar (below md) ─── */}
      <div className="md:hidden sticky top-0 z-40 bg-transparent pt-2.5 px-2.5 sm:px-3 pb-1.5 transition-all duration-300 w-full">
        <div className="w-full max-w-xl mx-auto">
          {/* Floating Top Header Bar */}
          <div className="h-[52px] p-1.5 px-2 rounded-2xl bg-white/85 dark:bg-[#141414]/90 backdrop-blur-xl border border-zinc-200/80 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center justify-between transition-colors">
            {/* Left: Home Icon Pill Button */}
            <button
              onClick={() => handleNavClick("/")}
              aria-label="Home"
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer active:scale-95 relative overflow-hidden ${
                pathname === "/"
                  ? "text-zinc-950 bg-zinc-100 border border-zinc-300 shadow-sm dark:text-white dark:bg-[#1e1e22] dark:border-white/20 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_2px_8px_rgba(0,0,0,0.5)]"
                  : "text-zinc-600 hover:text-black bg-zinc-100/60 hover:bg-zinc-100 dark:text-neutral-400 dark:hover:text-white dark:bg-[#1a1a1a] dark:hover:bg-[#222222]"
              }`}
            >
              {pathname === "/" && (
                <>
                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: isDark
                        ? "radial-gradient(ellipse 75% 85% at 50% 0%, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.28) 35%, transparent 85%)"
                        : "radial-gradient(ellipse 75% 85% at 50% 0%, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.03) 35%, transparent 70%)",
                    }}
                  />
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full z-20 ${
                      isDark
                        ? "bg-white shadow-[0_0_6px_1px_rgba(255,255,255,0.95)]"
                        : "bg-zinc-800 shadow-[0_0_4px_1px_rgba(0,0,0,0.25)]"
                    }`}
                  />
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
                className="w-8 h-8 rounded-xl flex items-center justify-center text-zinc-600 hover:text-black hover:bg-zinc-100/70 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5 active:scale-90 transition-all cursor-pointer"
              >
                {isDark ? (
                  <Moon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                ) : (
                  <Sun className="w-[18px] h-[18px] text-amber-500" strokeWidth={1.75} />
                )}
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="w-9 h-9 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 dark:bg-[#222222] dark:hover:bg-[#282828] active:scale-95 transition-all flex items-center justify-center text-zinc-800 dark:text-white cursor-pointer border border-zinc-200 dark:border-white/10"
              >
                <Menu className="w-5 h-5" strokeWidth={1.75} />
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
                <div className="p-2 rounded-[20px] bg-white/95 dark:bg-[#141414]/95 backdrop-blur-2xl border border-zinc-200 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col space-y-0.5 transition-colors">
                  {NAV_ITEMS.map((item, index) => {
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
                            ? "bg-zinc-100 border border-zinc-300 text-zinc-950 font-medium shadow-sm dark:bg-[#1e1e22] dark:border-white/20 dark:text-white dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]"
                            : "text-zinc-600 hover:text-black hover:bg-zinc-100/70 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/[0.04] active:bg-zinc-200/50 dark:active:bg-white/[0.06]"
                        }`}
                      >
                        {active && (
                          <>
                            <div
                              className="absolute inset-0 pointer-events-none z-10"
                              style={{
                                background: isDark
                                  ? "radial-gradient(ellipse 60% 85% at 50% 0%, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.22) 40%, transparent 85%)"
                                  : "radial-gradient(ellipse 60% 85% at 50% 0%, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.03) 40%, transparent 85%)",
                              }}
                            />
                            <div
                              className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] rounded-full z-20 ${
                                isDark
                                  ? "bg-white shadow-[0_0_6px_1px_rgba(255,255,255,0.95)]"
                                  : "bg-zinc-800 shadow-[0_0_4px_1px_rgba(0,0,0,0.25)]"
                              }`}
                            />
                          </>
                        )}
                        <Icon
                          className={`w-[19px] h-[19px] shrink-0 relative z-10 transition-colors ${
                            active
                              ? "text-zinc-950 dark:text-white"
                              : "text-zinc-500 dark:text-neutral-400"
                          }`}
                          strokeWidth={1.75}
                        />
                        <span className="text-[14.5px] font-medium tracking-tight relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">{item.label}</span>
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
