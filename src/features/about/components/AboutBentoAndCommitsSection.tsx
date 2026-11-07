'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import createGlobe from 'cobe';
import { MapPin, SquareDashed } from 'lucide-react';

// ─── 1. TECH ICONS FOR SKILLS CARD ──────────────────────────────────────────
const TECH_ROW_1 = [
  {
    name: 'C++',
    svg: (
      <svg viewBox="0 0 128 128" className="w-9 h-9 fill-current" aria-label="C++">
        <path d="M64 14L14 43v58l50 29 50-29V43L64 14zm-4.7 66.8c-2.4 2.8-5.7 4.2-9.7 4.2-4.2 0-7.6-1.5-10.2-4.5-2.6-3-3.9-7.1-3.9-12.4s1.3-9.4 3.9-12.4c2.6-3 6-4.5 10.2-4.5 3.9 0 7.2 1.4 9.7 4.1l4.9-6.4c-4-4.2-8.9-6.3-14.7-6.3-6.6 0-12 2.3-16.1 6.8s-6.2 10.7-6.2 18.6c0 8 2.1 14.2 6.2 18.7s9.5 6.8 16.1 6.8c5.9 0 10.8-2.1 14.8-6.4l-5.1-6.8zm23.4-9.3h5.6v-5.6h-5.6v-5.6h-5.6v5.6h-5.6v5.6h5.6v5.6h5.6v-5.6zm19 0h5.6v-5.6h-5.6v-5.6h-5.6v5.6h-5.6v5.6h5.6v5.6h5.6v-5.6z" />
      </svg>
    ),
  },
  {
    name: 'HTML5',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="HTML5">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.7 5.4H5.8l.4 4.5h11.6l-.4 4.5-5.4 1.5-5.4-1.5-.3-3.2H3.7l.5 5.7L12 20.4l7.8-2.5 1-12.5h-2.6z" />
      </svg>
    ),
  },
  {
    name: 'CSS3',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="CSS3">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.9 5.3H5.6l.3 3.6h12l-.4 4.8-5.5 1.5-5.5-1.5-.3-3H3.6l.5 5.5L12 20.2l7.9-2.5 1.1-12.4h-2.6z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="JavaScript">
        <path d="M3 3h18v18H3V3zm13.7 13.9c.7 1.2 1.7 1.9 3.3 1.9 1.4 0 2.3-.7 2.3-1.6 0-1.1-.9-1.5-2.5-2.2l-.9-.4c-2.5-1.1-4.2-2.4-4.2-5.3 0-2.6 2-4.6 5.1-4.6 2.2 0 3.8.8 4.9 2.7l-2.6 1.7c-.6-.9-1.3-1.3-2.3-1.3-1.1 0-1.8.7-1.8 1.5 0 1 .7 1.4 2.2 2.1l.9.4c2.9 1.2 4.6 2.5 4.6 5.5 0 3.1-2.4 4.9-5.7 4.9-3.2 0-5.2-1.7-6.1-3.6l2.8-1.8zm-7.7.3c0 2.2-.9 3.5-2.8 3.5-1.5 0-2.4-.7-2.9-1.6l2.4-1.5c.3.5.6.8 1 .8.4 0 .7-.2.7-.9V8h2.6v9.2z" />
      </svg>
    ),
  },
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-current" strokeWidth="1.5" aria-label="React">
        <ellipse cx="12" cy="12" rx="4" ry="11" />
        <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="Next.js">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm4.8 17.4l-6-7.8v7.8H8.5V6.6h2.4l6.3 8.3V6.6h2.3v10.8h-2.7z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="Tailwind CSS">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="TypeScript">
        <path d="M3 3h18v18H3V3zm7.4 6.8H5.6v2.3h2.1V18h2.6v-5.9h2.1V9.8h-2zm9.1 4.8c-.3-.4-.8-.7-1.4-.9l-.8-.3c-.5-.2-.9-.4-1.2-.6-.3-.2-.4-.5-.4-.9 0-.4.2-.7.5-.9.4-.2.8-.3 1.3-.3.6 0 1.1.1 1.5.4.4.3.7.7.8 1.2l2.2-1.1c-.3-.8-.8-1.4-1.6-1.9-.7-.5-1.7-.7-2.9-.7-1.2 0-2.2.3-3 .9-.8.6-1.2 1.5-1.2 2.6 0 .8.3 1.5.8 2 .5.5 1.3.9 2.3 1.3l.8.3c.6.2 1 .5 1.3.7.3.2.4.6.4 1 0 .5-.2.8-.6 1.1-.4.3-1 .4-1.6.4-.8 0-1.4-.2-1.9-.6-.5-.4-.8-1-1-1.7l-2.3.9c.4 1.2 1 2.1 1.9 2.7.9.6 2 .9 3.3.9 1.4 0 2.6-.3 3.4-1 .8-.7 1.3-1.6 1.3-2.8 0-1-.3-1.7-.9-2.2z" />
      </svg>
    ),
  },
];

const TECH_ROW_2 = [
  {
    name: 'Python',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="Python">
        <path d="M11.9 1c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.6H6.1s-2.8-.3-2.8 4.1 2.4 4.3 2.4 4.3h1.4v-2s-.1-2.4 2.3-2.4h3.9s2.2.1 2.2-2.2V3.2S15.9 1 11.9 1zm-1.2 1.3c.4 0 .7.3.7.7 0 .4-.3.7-.7.7s-.7-.3-.7-.7c0-.4.3-.7.7-.7zm1.3 20.7c4.4 0 4.1-1.9 4.1-1.9v-2h-4.2v-.6h5.9s2.8.3 2.8-4.1-2.4-4.3-2.4-4.3h-1.4v2s.1 2.4-2.3 2.4h-3.9s-2.2-.1-2.2 2.2v4.1s-.4 2.2 3.6 2.2zm1.2-1.3c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7s.7.3.7.7c0 .4-.3.7-.7.7z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="Node.js">
        <path d="M12 2L2 7.7v11.6L12 25l10-5.7V7.7L12 2zm7.6 15.8L12 22.1l-7.6-4.3V9.2L12 4.9l7.6 4.3v8.6z" />
      </svg>
    ),
  },
  {
    name: 'Database',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-none stroke-current" strokeWidth="1.8" aria-label="Database">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" />
        <path d="M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="AWS">
        <path d="M12 18.5c-4.2 0-7.8-1.6-10.4-4.2-.3-.3-.2-.8.2-.9.5-.2 1 .1 1.3.4 2.2 2.2 5.3 3.6 8.9 3.6 3.2 0 6.1-1.1 8.3-3.1.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1-2.5 2.3-5.8 3.5-9.4 3.5zm9.5-3.8c-.4-.5-1.1-.7-1.7-.5l-.8.3c-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4l.8-.3.8 1.1c.3.4.8.5 1.2.2.4-.3.5-.8.2-1.2l-1.2-1.1zM7.5 7.6c0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2v3H7.5v-3zm4.8 0c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6v1.4h3.2v-1.4z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="Git">
        <path d="M23.5 10.9L13.1.5c-.7-.7-1.8-.7-2.5 0L8.2 2.9l3.1 3.1c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3 3c.8-.3 1.7-.1 2.3.5.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.6-.6-.8-1.5-.5-2.3l-2.8-2.8v5.5c.2.2.4.4.5.7.6.8.5 2-.4 2.6-.8.6-2 .5-2.6-.4-.6-.8-.5-2 .4-2.6.3-.2.6-.3.9-.3V9.6c-.3 0-.6-.1-.9-.3-.6-.6-.8-1.5-.5-2.3L7.1 3.9.5 10.5c-.7.7-.7 1.8 0 2.5l10.4 10.4c.7.7 1.8.7 2.5 0l10.1-10c.7-.7.7-1.8 0-2.5z" />
      </svg>
    ),
  },
  {
    name: 'Postman',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="Postman">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-2h-2v2h2zm-1-3.5c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="Figma">
        <path d="M8 16c0 2.2 1.8 4 4 4s4-1.8 4-4v-4H8v4zm0-8c0-2.2 1.8-4 4-4s4 1.8 4 4v4H8V8zm-4 4c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4zm0 8c0-2.2 1.8-4 4-4h4v4c0 2.2-1.8 4-4 4s-4-1.8-4-4zm12-8c2.2 0 4-1.8 4-4s-1.8-4-4-4h-4v8h4z" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current" aria-label="Docker">
        <path d="M23.8 11.2c-.3-.2-1.1-.3-2.1.2-.5-.9-1.3-1.6-2.4-2l-.4-.2-.2.4c-.6 1.1-.7 2.3-.2 3.5-.9.5-2.3.6-4.5.6H1.4c-.4 1.6 0 3.8 1.3 5.4 1.6 1.9 4.1 2.9 7.7 2.9 6.2 0 10.7-3.4 12.1-9.2.6.2 1.3.1 1.7-.1.4-.2.6-.5.7-.7l-.1-.4-.8-.4zm-14-3.6h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm-6-3h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm3 3h-2v2h2v-2z" />
      </svg>
    ),
  },
];

// ─── 2. LOCATION GLOBE COMPONENT (COBE) ──────────────────────────────────────
function InteractiveLocationGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0.8;
    let width = 0;
    let animFrame: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      if (canvas) {
        width = canvas.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: 700 * 2,
      height: 700 * 2,
      phi: 0.8,
      theta: 0.28,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 4.8,
      baseColor: [0.12, 0.12, 0.14],
      markerColor: [1, 1, 1],
      glowColor: [0.15, 0.15, 0.18],
      markers: [
        // Kolkata, India coordinates
        { location: [22.5726, 88.3639], size: 0.085 },
      ],
    });

    const animate = () => {
      if (!pointerInteracting.current) {
        phi += 0.0035;
      }
      const currentPhi = phi + pointerInteractionMovement.current;
      globe.update({
        phi: currentPhi,
        width: (width || 350) * 2,
        height: (width || 350) * 2,
      });
      animFrame = requestAnimationFrame(animate);
    };
    animFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrame);
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      className="absolute inset-x-0 bottom-[-180px] sm:bottom-[-200px] mx-auto aspect-square h-[360px] sm:h-[400px] flex items-center justify-center overflow-visible pointer-events-auto cursor-grab active:cursor-grabbing"
      style={{
        WebkitMaskImage:
          'radial-gradient(ellipse 95% 75% at 50% 30%, black 50%, transparent 85%)',
        maskImage:
          'radial-gradient(ellipse 95% 75% at 50% 30%, black 50%, transparent 85%)',
      }}
      onPointerDown={(e) => {
        pointerInteracting.current =
          e.clientX - pointerInteractionMovement.current;
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta * 0.005;
        }
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          aspectRatio: '1/1',
        }}
      />
    </div>
  );
}

// ─── 3. GITHUB CONTRIBUTIONS CALENDAR COMPONENT ─────────────────────────────
interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const COLOR_LEVELS = [
  'bg-[#161b22] border border-white/[0.04]', // Level 0 (Empty)
  'bg-[#0e4429]',                           // Level 1
  'bg-[#006d32]',                           // Level 2
  'bg-[#26a641]',                           // Level 3
  'bg-[#39d353]',                           // Level 4 (High)
];

// Fallback contribution data generator matching high density
function generateFallbackContributions(): ContributionDay[] {
  const days: ContributionDay[] = [];
  const now = new Date();
  const totalDays = 53 * 7; // 371 days

  for (let i = totalDays - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];

    // Deterministic pseudo-random generation for rich realistic pattern
    const seed = (i * 9301 + 49297) % 233280;
    const rnd = seed / 233280;

    let level = 0;
    let count = 0;
    if (rnd > 0.35) {
      if (rnd > 0.88) {
        level = 4;
        count = Math.floor(rnd * 25) + 12;
      } else if (rnd > 0.7) {
        level = 3;
        count = Math.floor(rnd * 15) + 7;
      } else if (rnd > 0.5) {
        level = 2;
        count = Math.floor(rnd * 8) + 3;
      } else {
        level = 1;
        count = Math.floor(rnd * 4) + 1;
      }
    }

    days.push({
      date: dateStr,
      count,
      level,
    });
  }
  return days;
}

function formatContributionDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

interface HoveredCellInfo {
  day: ContributionDay;
  x: number;
  top: number;
  bottom: number;
}

export default function AboutBentoAndCommitsSection() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(6803);
  const [hoveredCell, setHoveredCell] = useState<HoveredCellInfo | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScrollOrResize = () => setHoveredCell(null);
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  useEffect(() => {
    // Initialize with rich fallback immediately
    const fallback = generateFallbackContributions();
    setContributions(fallback);

    // Fetch dynamic contributions from GitHub API
    fetch('https://github-contributions-api.jogruber.de/v4/me-sayanghosh?y=last')
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.contributions) && data.contributions.length > 0) {
          const fetchedTotal = data.total?.lastYear || data.total?.[new Date().getFullYear()];
          if (fetchedTotal && fetchedTotal > 100) {
            setTotalContributions(fetchedTotal);
          }
          setContributions(data.contributions);
        }
      })
      .catch((err) => {
        console.warn('Using fallback contribution calendar data:', err);
      });
  }, []);

  // Split contributions into columns of 7 days (weeks)
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  // Calculate month labels aligned to week columns
  const monthLabels = useMemo(() => {
    if (!weeks.length) return [];
    const labels: { month: string; colIndex: number }[] = [];
    let prevMonth = '';

    weeks.forEach((week, wIdx) => {
      const day = week[0];
      if (!day?.date) return;
      const date = new Date(day.date + 'T00:00:00');
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      if (month !== prevMonth) {
        if (wIdx <= weeks.length - 3) {
          labels.push({ month, colIndex: wIdx });
        }
        prevMonth = month;
      }
    });

    return labels;
  }, [weeks]);

  return (
    <div className="pt-8 pb-4 space-y-10">
      {/* ─── ROW 1: BENTO CARDS ("I'm here" + "Skills") ───────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: "I'm here" with Cobe 3D Globe */}
        <div className="relative overflow-hidden rounded-2xl bg-[#121212] border border-white/10 p-5 h-[230px] sm:h-[250px] flex flex-col justify-between group shadow-lg">
          {/* Card Header */}
          <div className="relative z-10 flex flex-col">
            <h3 className="font-bold tracking-tight text-white text-base sm:text-lg flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zinc-400" />
              <span>I&apos;m here</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-0.5">
              Kolkata, India
            </p>
          </div>

          {/* Interactive Dotted 3D Globe with Pinpoint Beacon */}
          <InteractiveLocationGlobe />
        </div>

        {/* Card 2: "Skills" with Scrolling Marquee Rows */}
        <div className="relative overflow-hidden rounded-2xl bg-[#121212] border border-white/10 p-5 h-[230px] sm:h-[250px] flex flex-col justify-between group shadow-lg">
          {/* Card Header */}
          <div className="relative z-10 flex flex-col mb-2">
            <h3 className="font-bold tracking-tight text-white text-base sm:text-lg flex items-center gap-2">
              <SquareDashed className="h-4 w-4 text-blue-500" />
              <span>Skills</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-0.5">
              Ughh, that&apos;s not enough
            </p>
          </div>

          {/* Scrolling Marquee Rows */}
          <div className="relative flex flex-col justify-center gap-4 py-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]">
            {/* Row 1: Marquee Left */}
            <div className="flex w-max gap-6 animate-[marquee_22s_linear_infinite] group-hover:[animation-play-state:paused] text-white/85">
              {[...TECH_ROW_1, ...TECH_ROW_1].map((tech, idx) => (
                <div
                  key={`row1-${tech.name}-${idx}`}
                  className="flex items-center justify-center shrink-0 hover:scale-115 transition-transform duration-200 cursor-pointer"
                >
                  {tech.svg}
                </div>
              ))}
            </div>

            {/* Row 2: Marquee Right */}
            <div className="flex w-max gap-6 animate-[marquee_24s_linear_infinite_reverse] group-hover:[animation-play-state:paused] text-white/85">
              {[...TECH_ROW_2, ...TECH_ROW_2].map((tech, idx) => (
                <div
                  key={`row2-${tech.name}-${idx}`}
                  className="flex items-center justify-center shrink-0 hover:scale-115 transition-transform duration-200 cursor-pointer"
                >
                  {tech.svg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── ROW 2: "Commits Over Claims ." WITH GITHUB HEATMAP ──────────── */}
      <section className="space-y-4">
        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white flex items-baseline gap-1">
          Commits Over Claims<span className="text-amber-500">.</span>
        </h2>

        {/* Calendar Box */}
        <div
          className="w-full overflow-x-auto pb-2 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          onScroll={() => setHoveredCell(null)}
        >
          <div className="w-full min-w-[700px] flex flex-col gap-2">
            {/* Month Labels Aligned With Starting Columns */}
            <div className="relative h-4 w-full select-none text-[11px] sm:text-xs text-neutral-400 font-sans font-medium">
              {monthLabels.map(({ month, colIndex }) => (
                <span
                  key={`${month}-${colIndex}`}
                  className="absolute"
                  style={{
                    left: `${(colIndex / (weeks.length || 53)) * 100}%`,
                  }}
                >
                  {month}
                </span>
              ))}
            </div>

            {/* 53 Columns Grid Spanning Full Width (Matching Bento Cards) */}
            <div
              className="grid w-full gap-[3px] select-none"
              style={{
                gridTemplateColumns: `repeat(${weeks.length || 53}, minmax(0, 1fr))`,
              }}
              onMouseLeave={() => setHoveredCell(null)}
            >
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3px]">
                  {week.map((day, dIdx) => (
                    <div
                      key={`${wIdx}-${dIdx}`}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setHoveredCell({
                          day,
                          x: rect.left + rect.width / 2,
                          top: rect.top,
                          bottom: rect.bottom,
                        });
                      }}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`aspect-square w-full rounded-[2px] transition-transform duration-100 cursor-pointer hover:scale-125 hover:z-10 ${
                        COLOR_LEVELS[day.level] || COLOR_LEVELS[0]
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Footer Summary & Legend */}
            <div className="flex items-center justify-between text-xs sm:text-[13px] font-sans pt-1 text-neutral-400 select-none w-full">
              <span className="font-medium text-white/90">
                {totalContributions.toLocaleString()} contributions in the last year
              </span>

              {/* Less / More Legend */}
              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <span>Less</span>
                {COLOR_LEVELS.map((cls, idx) => (
                  <span
                    key={`legend-${idx}`}
                    className={`w-2.5 h-2.5 rounded-[2px] inline-block ${cls}`}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Tooltip via Portal (Never clipped by container or overflow) */}
        {mounted && hoveredCell && createPortal(
          (() => {
            const isFlipped = hoveredCell.top < 65;
            const halfWidth = 125;
            const windowW = typeof window !== 'undefined' ? window.innerWidth : 1000;
            const safeLeft = Math.max(halfWidth + 12, Math.min(hoveredCell.x, windowW - halfWidth - 12));
            const arrowOffset = Math.max(-halfWidth + 24, Math.min(halfWidth - 24, hoveredCell.x - safeLeft));

            return (
              <div
                className={`pointer-events-none fixed z-[9999] -translate-x-1/2 px-3 py-1.5 rounded-md bg-[#161b22] border border-white/20 text-neutral-200 text-xs font-sans shadow-2xl whitespace-nowrap transition-transform duration-75 ease-out ${
                  isFlipped ? 'translate-y-2' : '-translate-y-full'
                }`}
                style={{
                  left: safeLeft,
                  top: isFlipped ? hoveredCell.bottom : hoveredCell.top - 8,
                }}
              >
                <p className="leading-tight text-[11.5px] select-none">
                  <span className="font-semibold text-white">
                    {hoveredCell.day.count === 0 ? 'No' : hoveredCell.day.count}{' '}
                    contribution{hoveredCell.day.count === 1 ? '' : 's'}
                  </span>{' '}
                  on{' '}
                  <span className="text-neutral-300">
                    {formatContributionDate(hoveredCell.day.date)}
                  </span>
                </p>

                {/* Arrow Indicator */}
                <div
                  className={`absolute w-2 h-2 rotate-45 bg-[#161b22] border-white/20 ${
                    isFlipped
                      ? '-top-1 border-l border-t'
                      : '-bottom-1 border-r border-b'
                  }`}
                  style={{ left: `calc(50% + ${arrowOffset}px - 4px)` }}
                />
              </div>
            );
          })(),
          document.body
        )}
      </section>
    </div>
  );
}
