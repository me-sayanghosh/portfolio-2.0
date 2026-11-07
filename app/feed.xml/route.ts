import { NextResponse } from 'next/server';
import { blogsData } from '../../src/features/blogs/data/blogsData';

export const dynamic = 'force-static';
export const revalidate = 86400; // Cache 1 day

export async function GET() {
  const baseUrl = 'https://thesayan.vercel.app';

  const rssItems = blogsData
    .map((blog) => {
      const pubDate = new Date(blog.date).toUTCString();
      const blogUrl = `${baseUrl}/blogs/${blog.id}`;
      const imageUrl = blog.coverImage.startsWith('http')
        ? blog.coverImage
        : `${baseUrl}${blog.coverImage}`;

      return `    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${blogUrl}</link>
      <guid isPermaLink="true">${blogUrl}</guid>
      <description><![CDATA[${blog.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>sayanghosh1887@gmail.com (${blog.author.name})</author>
      ${blog.tags.map((tag) => `<category>${tag}</category>`).join('\n      ')}
      <enclosure url="${imageUrl}" length="0" type="image/webp" />
    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sayan Ghosh — Engineering Blogs &amp; Perspectives</title>
    <link>${baseUrl}/blogs</link>
    <description>Deep dives, technical architectures, and practical engineering lessons on Python, AI workflows, and modern web systems by Sayan Ghosh.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=18000, stale-while-revalidate=86400',
    },
  });
}
