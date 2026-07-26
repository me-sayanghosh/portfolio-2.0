import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AchievementsSection from './components/AchievementsSection';
import SkillsSection from './components/SkillsSection';
import FeatureProjectsSection from './components/FeatureProjectsSection';
import CreationOfAdamBanner from './components/CreationOfAdamBanner';
import ContactAndSignature from './components/ContactAndSignature';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ModalPopUp from './components/ModalPopUp';
import HireMeModal from './components/HireMeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'about'
  const [isHackathonModalOpen, setIsHackathonModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06070B] text-gray-200 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-300 overflow-x-hidden">
      
      {/* Animated Floating Top Navbar Pill */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Animated Main Content View Switching */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {/* Main Home V2 Sections */}
              <HeroSection
                onOpenResume={() => setIsHireModalOpen(true)}
                onOpenHackathonModal={() => setIsHackathonModalOpen(true)}
              />
              
              <SkillsSection />
              
              <FeatureProjectsSection />
              
              <CreationOfAdamBanner
                onOpenHireModal={() => setIsHireModalOpen(true)}
              />
              
              <ContactAndSignature />
            </motion.div>
          ) : (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {/* About Me V1 Section */}
              <AboutSection
                onOpenHireModal={() => setIsHireModalOpen(true)}
                onOpenResume={() => setIsHireModalOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Hackathon Achievement Instagram Story Modal (Figma Node 114:311) */}
      <ModalPopUp
        isOpen={isHackathonModalOpen}
        onClose={() => setIsHackathonModalOpen(false)}
      />

      {/* Hire Me / Contact Modal */}
      <HireMeModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />

    </div>
  );
}
