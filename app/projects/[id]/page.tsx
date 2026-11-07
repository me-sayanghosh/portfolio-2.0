'use client';

import { use } from 'react';
import { ProjectDetailPage } from '../../../src/features/projects';

export default function ProjectDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);

  return (
    <ProjectDetailPage
      projectId={resolvedParams?.id}
    />
  );
}
