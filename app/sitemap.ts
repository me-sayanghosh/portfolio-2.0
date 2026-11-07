import type { MetadataRoute } from 'next';
import { projectsData } from '../src/features/projects/data/projectsData';
import { blogsData } from '../src/features/blogs/data/blogsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thesayan.vercel.app';
  const currentDate = new Date().toISOString();

  const getSafeDate = (d?: string) => {
    if (!d) return currentDate;
    const parsed = new Date(d);
    return isNaN(parsed.getTime()) ? currentDate : parsed.toISOString().slice(0, 10);
  };

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guestbook`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Dynamic project pages
  const projectPages: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic blog post pages
  const blogPages: MetadataRoute.Sitemap = blogsData.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.id}`,
    lastModified: getSafeDate(blog.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
