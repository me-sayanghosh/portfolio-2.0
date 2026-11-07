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
    <section className="pt-10 sm:pt-14 pb-4">
      {/* ─── Compact Heading: Connect. ─── */}
      <h2
        className="text-3xl sm:text-[38px] font-normal text-zinc-900 dark:text-white tracking-tight"
        style={{ fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif" }}
      >
        Connect<span className="text-amber-500">.</span>
      </h2>

      {/* ─── Compact Social Pills Row ─── */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-3 sm:mt-3.5">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === 'Email' ? undefined : '_blank'}
            rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200/80 dark:bg-[#18181b] dark:hover:bg-[#27272a] border border-zinc-200 hover:border-zinc-300 dark:border-white/10 dark:hover:border-white/20 text-xs font-medium text-zinc-700 hover:text-zinc-950 dark:text-neutral-300 dark:hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
          >
            <span>{link.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-900 dark:text-neutral-400 dark:group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
}
