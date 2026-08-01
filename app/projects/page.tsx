'use client';

import { ProjectsPage } from '../../src/features/projects';
import { useModal } from '../../src/context/ModalContext';

export default function ProjectsRoute() {
  const { openHireModal } = useModal();

  return (
    <ProjectsPage
      onOpenHireModal={openHireModal}
    />
  );
}
