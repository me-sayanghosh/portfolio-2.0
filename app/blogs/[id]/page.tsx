import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogDetailPage } from '../../../src/features/blogs';
import { blogsData } from '../../../src/features/blogs/data/blogsData';
import { BASE_URL, buildBlogPostingSchema, buildBreadcrumbSchema, createGraphJsonLd } from '../../../src/lib/jsonLd';

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    id: blog.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === id || b.slug === id);

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  const parsedDate = new Date(blog.date);
  const isoPublished = isNaN(parsedDate.getTime()) ? new Date().toISOString() : parsedDate.toISOString();

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: [...blog.tags, 'Sayan Ghosh', 'Engineering Blog', 'Software Architecture', 'Web Development'],
    alternates: {
      canonical: `${BASE_URL}/blogs/${blog.id}`,
    },
    openGraph: {
      title: `${blog.title} | Sayan Ghosh`,
      description: blog.excerpt,
      url: `${BASE_URL}/blogs/${blog.id}`,
      type: 'article',
      publishedTime: isoPublished,
      authors: [blog.author.name],
      images: [
        {
          url: `/blogs/${blog.id}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: blog.title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [`/blogs/${blog.id}/opengraph-image`],
    },
  };
}

export default async function BlogDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === id || b.slug === id);

  if (!blog) {
    notFound();
  }

  const blogPosting = buildBlogPostingSchema(blog);
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blogs', url: '/blogs' },
    { name: blog.title, url: `/blogs/${blog.id}` },
  ]);
  const jsonLd = createGraphJsonLd(blogPosting, breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailPage blogId={id} />
    </>
  );
}
