import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogDetailPage } from '../../../src/features/blogs';
import { blogsData } from '../../../src/features/blogs/data/blogsData';

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

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: [...blog.tags, 'Sayan Ghosh', 'Engineering Blog', 'Software Architecture'],
    alternates: {
      canonical: `https://thesayan.vercel.app/blogs/${blog.id}`,
    },
    openGraph: {
      title: `${blog.title} | Sayan Ghosh`,
      description: blog.excerpt,
      url: `https://thesayan.vercel.app/blogs/${blog.id}`,
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author.name],
      images: [
        {
          url: blog.coverImage,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
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

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.date,
    author: {
      '@type': 'Person',
      name: blog.author.name,
      url: 'https://thesayan.vercel.app',
    },
    publisher: {
      '@type': 'Person',
      name: 'Sayan Ghosh',
      url: 'https://thesayan.vercel.app',
    },
    image: `https://thesayan.vercel.app${blog.coverImage}`,
    url: `https://thesayan.vercel.app/blogs/${blog.id}`,
    keywords: blog.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogDetailPage blogId={id} />
    </>
  );
}
