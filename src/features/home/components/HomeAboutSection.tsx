'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Twitter, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeAboutSection() {
  const router = useRouter();
  const [isOsConnectHovered, setIsOsConnectHovered] = useState(false);

  const techStack = [
    {
      name: 'TypeScript',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'JavaScript',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Python',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'React',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Next.js',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
    {
      name: 'Tailwind',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
      name: 'Node.js',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Flask',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
    },
    {
      name: 'WebSocket',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg'
    },
    {
      name: 'PostgreSQL',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'MongoDB',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'Redis',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
    },
    {
      name: 'Supabase',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg'
    },
    {
      name: 'Firebase',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
    {
      name: 'AWS',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    },
    {
      name: 'Docker',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
      name: 'Vercel',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg'
    },
    {
      name: 'GitHub Actions',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'Postman',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
    },
    {
      name: 'Git',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'Figma',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    }
  ];

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Title */}
      

      {/* Intro Paragraph 1 */}
      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 font-sans">
        A Final-year student who spends most days building full-stack products. Recently built{' '}
        <span
          className="relative inline-block"
          onMouseEnter={() => setIsOsConnectHovered(true)}
          onMouseLeave={() => setIsOsConnectHovered(false)}
        >
          <a
            href="https://osci.osconnect.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors cursor-pointer"
          >
            OSConnect
          </a>

          <AnimatePresence>
            {isOsConnectHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 z-50 pointer-events-none w-72 sm:w-80"
              >
                <div className="bg-[#141416] border border-white/20 rounded-2xl p-2 shadow-2xl shadow-black/80 backdrop-blur-md overflow-hidden">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-black">
                    <img
                      src="/assets/osconnect-preview.webp"
                      alt="Open Source Connect India"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white font-medium">
                      <span className="truncate drop-shadow-md">Open Source Connect India</span>
                      <span className="text-[10px] text-amber-400 font-mono ml-2 shrink-0">osci.osconnect.org ↗</span>
                    </div>
                  </div>
                </div>
                {/* Downward Caret Arrow */}
                <div className="w-3 h-3 bg-[#141416] border-r border-b border-white/20 transform rotate-45 mx-auto -mt-1.5 shadow-md" />
              </motion.div>
            )}
          </AnimatePresence>
        </span>
        , that uses 1000+ users. Currently Building{' '}
        <span
          onClick={() => router.push('/projects/droptalk')}
          className="font-semibold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors cursor-pointer"
        >
          DropTalk
        </span>
        , shipping features, fixing bugs, and learning things you don't get from tutorials.
      </p>

      {/* Connecting Lines to Skills */}
      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 font-sans">
        Driven by curiosity and hands-on execution, I specialize in architecting scalable backend APIs and responsive web interfaces. Here are the core tools and technologies I work with:
      </p>
      
      

      {/* Tech Stack Pills Grid: Grayscale B&W by default -> Full Color on Hover */}
      <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="group flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#222222] border border-[#333333] hover:border-white/30 hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer shadow-sm"
          >
            <img
              src={tech.iconUrl}
              alt={tech.name}
              className="w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
            />
            <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* More About Me Button */}
      <div className="flex justify-center">
        <button
          onClick={() => router.push('/about')}
          className="px-6 py-2 rounded-full border border-white/30 bg-[#222222] hover:bg-white/15 text-white font-semibold text-xs sm:text-sm shadow-lg transition-all active:scale-95 cursor-pointer flex items-center space-x-2"
        >
          <span>More About Me</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
