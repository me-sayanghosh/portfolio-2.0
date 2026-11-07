'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
      transition={{
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1], // thatdevguy.in signature cubic-bezier
      }}
    >
      {children}
    </motion.div>
  );
}
