import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import CreationOfAdamBanner from './components/CreationOfAdamBanner';
import { SkillsSection } from '../skills';
import { FeatureProjectsSection } from '../projects';
import { ContactAndSignature } from '../contact';

export default function HomePage({ onOpenResume, onOpenHackathonModal, onOpenHireModal }) {
  return (
    <motion.div
      key="home-page"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <HeroSection
        onOpenResume={onOpenResume}
        onOpenHackathonModal={onOpenHackathonModal}
      />
      
      <SkillsSection />
      
      <FeatureProjectsSection />
      
      <CreationOfAdamBanner
        onOpenHireModal={onOpenHireModal}
      />
      
      <ContactAndSignature />
    </motion.div>
  );
}
