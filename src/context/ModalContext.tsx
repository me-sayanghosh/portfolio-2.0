'use client';

import React, { createContext, useContext, useState } from 'react';
import ModalPopUp from '../components/ModalPopUp';

export interface ModalContextType {
  isHackathonModalOpen: boolean;
  openHackathonModal: () => void;
  closeHackathonModal: () => void;
  openResume: () => void;
}

const ModalContext = createContext<ModalContextType>({
  isHackathonModalOpen: false,
  openHackathonModal: () => {},
  closeHackathonModal: () => {},
  openResume: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isHackathonModalOpen, setIsHackathonModalOpen] = useState(false);

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1GhAigb1WHr6OWLokCNuCMpiZ2e2W_ZA5/view?usp=sharing', '_blank');
  };

  return (
    <ModalContext.Provider
      value={{
        isHackathonModalOpen,
        openHackathonModal: () => setIsHackathonModalOpen(true),
        closeHackathonModal: () => setIsHackathonModalOpen(false),
        openResume,
      }}
    >
      {children}
      <ModalPopUp
        isOpen={isHackathonModalOpen}
        onClose={() => setIsHackathonModalOpen(false)}
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}

