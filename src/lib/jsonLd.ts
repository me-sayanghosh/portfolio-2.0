import { BlogItem } from '../features/blogs/data/blogsData';
import { Project } from '../features/projects/data/projectsData';

export const BASE_URL = 'https://thesayan.vercel.app';

export const personEntity = {
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Sayan Ghosh',
  alternateName: ['Sayan', 'me-sayanghosh', 'SayanDev01'],
  url: BASE_URL,
  image: `${BASE_URL}/assets/profile-avatar.webp`,
  jobTitle: 'Full-Stack Software Engineer & AI Builder',
  description:
    'Full-Stack Developer, AI Enthusiast, and Open-Source Builder based in Kalyani, West Bengal. Specializing in Next.js, React, TypeScript, Node.js, Python, and scalable distributed systems.',
  email: 'sayanghosh1887@gmail.com',
  worksFor: {
    '@type': 'Organization',
    name: 'RealAI Solutions',
    url: `${BASE_URL}/experience`,
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'JIS College of Engineering',
  },
  sameAs: [
    'https://github.com/me-sayanghosh',
    'https://www.linkedin.com/in/sayan-ghosh-b7aaa5293/',
    'https://x.com/SayanDev01',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kalyani',
    addressRegion: 'West Bengal',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Full-Stack Web Development',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'Artificial Intelligence',
    'Gemini API',
    'MongoDB',
    'PostgreSQL',
    'Redis',
    'WebSockets',
    'System Design',
    'REST APIs',
    'Cloud Architecture',
  ],
};

export const websiteEntity = {
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Sayan Ghosh — Portfolio & Engineering Blog',
  alternateName: ['Sayan Ghosh Portfolio', 'Sayan Ghosh Developer'],
  publisher: {
    '@id': `${BASE_URL}/#person`,
  },
  inLanguage: 'en-US',
  description:
    'Personal portfolio, engineering blogs, and projects by Sayan Ghosh — Full-Stack Developer and AI Builder.',
};

/**
 * Wraps entities into a standard Schema.org @graph container with a single top-level @context
 */
export function createGraphJsonLd(...entities: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': entities,
  };
}

export const rootJsonLd = createGraphJsonLd(personEntity, websiteEntity);

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const itemUrl = item.url.startsWith('http')
        ? item.url
        : `${BASE_URL}${item.url.startsWith('/') ? item.url : `/${item.url}`}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: itemUrl,
      };
    }),
  };
}

export function buildBlogPostingSchema(blog: BlogItem) {
  const parsedDate = new Date(blog.date);
  const isoDate = isNaN(parsedDate.getTime()) ? new Date().toISOString() : parsedDate.toISOString();

  const totalWords = blog.sections.reduce((acc, section) => {
    const headingWords = section.heading ? section.heading.trim().split(/\s+/).filter(Boolean).length : 0;
    const bodyWords = section.body ? section.body.trim().split(/\s+/).filter(Boolean).length : 0;
    const calloutWords = section.callout ? section.callout.trim().split(/\s+/).filter(Boolean).length : 0;
    const bulletsWords = section.bullets ? section.bullets.join(' ').trim().split(/\s+/).filter(Boolean).length : 0;
    return acc + headingWords + bodyWords + calloutWords + bulletsWords;
  }, blog.excerpt.trim().split(/\s+/).filter(Boolean).length);

  const fullText = blog.sections
    .map((s) => [s.heading, s.body, s.callout, s.bullets?.join('. ')].filter(Boolean).join('\n\n'))
    .join('\n\n');

  const coverUrl = blog.coverImage.startsWith('http') ? blog.coverImage : `${BASE_URL}${blog.coverImage}`;
  const ogImageUrl = `${BASE_URL}/blogs/${blog.id}/opengraph-image`;

  return {
    '@type': 'BlogPosting',
    '@id': `${BASE_URL}/blogs/${blog.id}#article`,
    headline: blog.title,
    description: blog.excerpt,
    articleBody: fullText,
    datePublished: isoDate,
    dateModified: isoDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blogs/${blog.id}`,
    },
    author: {
      '@type': 'Person',
      name: blog.author.name,
      jobTitle: blog.author.role,
      url: BASE_URL,
      image: `${BASE_URL}${blog.author.avatar}`,
    },
    publisher: {
      '@type': 'Person',
      name: 'Sayan Ghosh',
      url: BASE_URL,
      image: `${BASE_URL}/assets/profile-avatar.webp`,
    },
    image: [ogImageUrl, coverUrl],
    url: `${BASE_URL}/blogs/${blog.id}`,
    keywords: blog.tags.join(', '),
    articleSection: blog.tags[0] || 'Software Engineering',
    inLanguage: 'en-US',
    wordCount: totalWords,
  };
}

export function buildProjectSchema(project: Project) {
  const projectUrl = `${BASE_URL}/projects/${project.id}`;
  const bannerUrl = project.bannerImg.startsWith('http') ? project.bannerImg : `${BASE_URL}${project.bannerImg}`;
  const ogImageUrl = `${projectUrl}/opengraph-image`;

  return {
    '@type': 'SoftwareApplication',
    '@id': `${projectUrl}#app`,
    name: project.title,
    description: project.overview,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any Web Browser',
    author: {
      '@type': 'Person',
      name: 'Sayan Ghosh',
      url: BASE_URL,
    },
    image: [bannerUrl, ogImageUrl],
    screenshot: bannerUrl,
    url: projectUrl,
    ...(project.live ? { installUrl: project.live } : {}),
    ...(project.github ? { codeRepository: project.github } : {}),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: project.features?.join(', ') || project.overview,
  };
}

export function buildCollectionSchema(
  title: string,
  description: string,
  path: string,
  items: { name: string; url: string; description?: string; image?: string }[]
) {
  const url = path.startsWith('http') ? path : `${BASE_URL}${path}`;
  return {
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    name: title,
    description,
    url,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => {
        const itemUrl = item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`;
        return {
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          url: itemUrl,
          item: itemUrl,
          description: item.description,
          ...(item.image ? { image: item.image.startsWith('http') ? item.image : `${BASE_URL}${item.image}` } : {}),
        };
      }),
    },
  };
}

export function buildGallerySchema(items: { title: string; img: string }[]) {
  const url = `${BASE_URL}/gallery`;
  return {
    '@type': 'ImageGallery',
    '@id': `${url}#gallery`,
    name: 'Sayan Ghosh — Community & Conference Gallery',
    description:
      'Photo moments from hackathons, developer conferences, tech meetups, and speaking engagements attended by Sayan Ghosh.',
    url,
    author: {
      '@type': 'Person',
      name: 'Sayan Ghosh',
      url: BASE_URL,
    },
    image: items.map((item) => ({
      '@type': 'ImageObject',
      name: item.title,
      contentUrl: item.img.startsWith('http') ? item.img : `${BASE_URL}${item.img}`,
    })),
  };
}

export function buildGuestbookSchema() {
  const url = `${BASE_URL}/guestbook`;
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: 'Guestbook | Sayan Ghosh',
    description: 'Leave a note, message, or feedback for Sayan Ghosh in his digital portfolio guestbook.',
    url,
    mainEntity: {
      '@type': 'CreativeWork',
      name: 'Sayan Ghosh Digital Guestbook',
      text: 'A collection of notes and well-wishes from friends, collaborators, and visitors.',
    },
    author: {
      '@id': `${BASE_URL}/#person`,
    },
  };
}
