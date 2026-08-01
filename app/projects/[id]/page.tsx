'use client';

import { use } from 'react';
import { ProjectDetailPage } from '../../../src/features/projects';
import { useModal } from '../../../src/context/ModalContext';

export default function ProjectDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { openHireModal } = useModal();
  const resolvedParams = use(params);

  return (
    <ProjectDetailPage
      projectId={resolvedParams?.id}
      onOpenHireModal={openHireModal}
    />
  );
}
