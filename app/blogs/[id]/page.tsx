'use client';

import { use } from 'react';
import { BlogDetailPage } from '../../../src/features/blogs';

export default function BlogDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);

  return <BlogDetailPage blogId={resolvedParams?.id} />;
}
