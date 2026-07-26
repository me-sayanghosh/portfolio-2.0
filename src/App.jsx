import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import { HomePage } from './features/home';
import { AboutPage } from './features/about';
import { ProjectsPage } from './features/projects';
import Footer from './components/Footer';
import ModalPopUp from './components/ModalPopUp';
import HireMeModal from './components/HireMeModal';

function AnimatedRoutes({ setIsHackathonModalOpen, setIsHireModalOpen }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <HomePage
              onOpenResume={() => window.open('https://drive.google.com/file/d/1EkjbHJDA0z8kC-Ui1KGVEJw_bvqZm3oo/view', '_blank')}
              onOpenHackathonModal={() => setIsHackathonModalOpen(true)}
              onOpenHireModal={() => setIsHireModalOpen(true)}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              onOpenHireModal={() => setIsHireModalOpen(true)}
              onOpenResume={() => window.open('https://drive.google.com/file/d/1EkjbHJDA0z8kC-Ui1KGVEJw_bvqZm3oo/view', '_blank')}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <ProjectsPage
              onOpenHireModal={() => setIsHireModalOpen(true)}
            />
          }
        />
        <Route
          path="*"
          element={
            <HomePage
              onOpenResume={() => window.open('https://drive.google.com/file/d/1EkjbHJDA0z8kC-Ui1KGVEJw_bvqZm3oo/view', '_blank')}
              onOpenHackathonModal={() => setIsHackathonModalOpen(true)}
              onOpenHireModal={() => setIsHireModalOpen(true)}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isHackathonModalOpen, setIsHackathonModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#171717] text-gray-200 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-300 overflow-x-hidden">
        
        {/* Floating Capsule Top Navbar */}
        <Navbar />

        {/* Modular Page Routes */}
        <main className="flex-grow">
          <AnimatedRoutes
            setIsHackathonModalOpen={setIsHackathonModalOpen}
            setIsHireModalOpen={setIsHireModalOpen}
          />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals */}
        <ModalPopUp
          isOpen={isHackathonModalOpen}
          onClose={() => setIsHackathonModalOpen(false)}
        />

        <HireMeModal
          isOpen={isHireModalOpen}
          onClose={() => setIsHireModalOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}
