'use client';

import { HomePage } from '../src/features/home';
import { useModal } from '../src/context/ModalContext';

export default function HomeRoute() {
  const { openResume, openHackathonModal } = useModal();

  return (
    <HomePage
      onOpenResume={openResume}
      onOpenHackathonModal={openHackathonModal}
    />
  );
}
