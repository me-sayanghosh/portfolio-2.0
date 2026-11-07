'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

export interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number; opacity?: number; filter?: string };
    visible: { y: number; opacity?: number; filter?: string };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 24,
  inView = true,
  inViewMargin = '-40px',
  blur = '6px',
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin as any });
  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      exit="hidden"
      variants={combinedVariants}
      transition={{
        delay: 0.02 + delay,
        duration,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`transform-gpu ${className || ''}`}
    >
      {children}
    </motion.div>
  );
}

export const BLUR_FADE_DELAY = 0.04;
