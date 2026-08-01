import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSection from './components/ProjectsSection';

export default function ProjectsPage({ onOpenHireModal }) {
  return (
    <motion.div
      key="projects-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <ProjectsSection onOpenHireModal={onOpenHireModal} />
    </motion.div>
  );
}
