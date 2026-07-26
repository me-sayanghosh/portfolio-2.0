import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';

export default function AboutPage({ onOpenHireModal, onOpenResume }) {
  return (
    <motion.div
      key="about-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <AboutSection
        onOpenHireModal={onOpenHireModal}
        onOpenResume={onOpenResume}
      />
    </motion.div>
  );
}
