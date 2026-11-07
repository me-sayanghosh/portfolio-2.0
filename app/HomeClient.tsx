'use client';

import { HomePage } from '../src/features/home';
import { useModal } from '../src/context/ModalContext';

export default function HomeClient() {
  const { openResume, openHackathonModal } = useModal();

  return (
    <HomePage
      onOpenResume={openResume}
      onOpenHackathonModal={openHackathonModal}
    />
  );
}
