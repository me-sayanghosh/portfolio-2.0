'use client';

import { AboutPage } from '../../src/features/about';
import { useModal } from '../../src/context/ModalContext';

export default function AboutRoute() {
  const { openHireModal, openResume } = useModal();

  return (
    <AboutPage
      onOpenHireModal={openHireModal}
      onOpenResume={openResume}
    />
  );
}
