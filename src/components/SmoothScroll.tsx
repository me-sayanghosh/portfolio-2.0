'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis Ultra Smooth Scroll Engine
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 2.0,
      autoResize: true,
    });

    // Synchronize Lenis raf updates with GSAP Ticker at 60fps/120fps
    const updateGsapTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGsapTicker);
    gsap.ticker.lagSmoothing(0);

    // Instant reset to top when navigating routes
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });

    return () => {
      gsap.ticker.remove(updateGsapTicker);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
