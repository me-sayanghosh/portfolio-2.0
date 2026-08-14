'use client';

import React, { createContext, useContext, useState } from 'react';
import ModalPopUp from '../components/ModalPopUp';
import HireMeModal from '../components/HireMeModal';

export interface ModalContextType {
  isHackathonModalOpen: boolean;
  isHireModalOpen: boolean;
  openHackathonModal: () => void;
  closeHackathonModal: () => void;
  openHireModal: () => void;
  closeHireModal: () => void;
  openResume: () => void;
}

const ModalContext = createContext<ModalContextType>({
  isHackathonModalOpen: false,
  isHireModalOpen: false,
  openHackathonModal: () => {},
  closeHackathonModal: () => {},
  openHireModal: () => {},
  closeHireModal: () => {},
  openResume: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isHackathonModalOpen, setIsHackathonModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1DHve9dCBtZaNsVG_SMCtDCqEZXKMvxxB/view?usp=sharing', '_blank');
  };

  return (
    <ModalContext.Provider
      value={{
        isHackathonModalOpen,
        isHireModalOpen,
        openHackathonModal: () => setIsHackathonModalOpen(true),
        closeHackathonModal: () => setIsHackathonModalOpen(false),
        openHireModal: () => setIsHireModalOpen(true),
        closeHireModal: () => setIsHireModalOpen(false),
        openResume,
      }}
    >
      {children}
      <ModalPopUp
        isOpen={isHackathonModalOpen}
        onClose={() => setIsHackathonModalOpen(false)}
      />
      <HireMeModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
