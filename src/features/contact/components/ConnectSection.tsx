'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SocialLink {
  label: string;
  href: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Github', href: 'https://github.com/me-sayanghosh' },
  { label: 'Twitter', href: 'https://x.com/SayanDev01' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sayan-ghosh-b7aaa5293/' },
  { label: 'Instagram', href: 'https://www.instagram.com/sayann.exe/' },
  { label: 'Email', href: 'mailto:sayanghosh1887@gmail.com' },
];

export default function ConnectSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-8">
      {/* ─── Heading: Connect. ─── */}
      <h2
        className="text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight"
        style={{ fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif" }}
      >
        Connect<span className="text-amber-500">.</span>
      </h2>

      {/* ─── Social Pills Row ─── */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-4 sm:mt-5">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === 'Email' ? undefined : '_blank'}
            rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
            className="group inline-flex items-center gap-1.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full bg-[#18181b] hover:bg-[#27272a] border border-white/10 hover:border-white/20 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
          >
            <span>{link.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
}
