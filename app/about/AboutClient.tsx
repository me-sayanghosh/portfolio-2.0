'use client';

import { AboutPage } from '../../src/features/about';
import { useModal } from '../../src/context/ModalContext';

export default function AboutClient() {
  const { openResume } = useModal();

  return <AboutPage onOpenResume={openResume} />;
}
