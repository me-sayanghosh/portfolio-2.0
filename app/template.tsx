'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.32,
        ease: [0.16, 1, 0.3, 1], // clean ease-out expo
      }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
}
