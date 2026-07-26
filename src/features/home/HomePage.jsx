import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import HomeAboutSection from './components/HomeAboutSection';
import HomeEducationSection from './components/HomeEducationSection';
import HomeProjectsSection from './components/HomeProjectsSection';
import HomeExperienceSection from './components/HomeExperienceSection';
import HomeAchievementsSection from './components/HomeAchievementsSection';
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
      
      {/* About Section on Home Page */}
      <HomeAboutSection />

      {/* Education Section on Home Page */}
      <HomeEducationSection />

      {/* Projects Section on Home Page */}
      <HomeProjectsSection />

      {/* Experience Section on Home Page */}
      <HomeExperienceSection />

      {/* Achievements Section on Home Page */}
      <HomeAchievementsSection />
      
      <ContactAndSignature />
    </motion.div>
  );
}
