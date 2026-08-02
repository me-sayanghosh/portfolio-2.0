'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on gallery page (/gallery) and individual project detail pages (/projects/[id])
  if (pathname === '/gallery' || pathname?.startsWith('/gallery') || (pathname?.startsWith('/projects/') && pathname !== '/projects')) {
    return null;
  }

  return (
    <footer className="py-12 border-t border-white/10 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Giant Typography from Figma Footer */}
      <div className="text-center mb-10">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#333845] hover:text-white transition-colors duration-500 tracking-tight select-none">
          Made by Sayan
        </h1>
      </div>

      {/* Footer Subtitles */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-mono space-y-2 sm:space-y-0">
        <span>Made with ♡ and lots of coffee ☕️</span>
        <span>Copyright © 2026 Sayan Ghosh</span>
      </div>
    </footer>
  );
}
