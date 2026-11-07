import type { Metadata } from 'next';
import { GuestbookPage } from '../../src/features/guestbook';
import { BASE_URL, buildBreadcrumbSchema } from '../../src/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Leave a note so I know you were here. "Write something. Future me will smile."',
  alternates: {
    canonical: `${BASE_URL}/guestbook`,
  },
  openGraph: {
    title: 'Guestbook | Sayan Ghosh',
    description: 'Leave a note so I know you were here. "Write something. Future me will smile."',
    url: `${BASE_URL}/guestbook`,
    siteName: 'Sayan Ghosh',
    images: [
      {
        url: `${BASE_URL}/assets/guestbook-og.jpg`,
        width: 853,
        height: 242,
        alt: 'Guestbook — Write something. Future me will smile.',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guestbook | Sayan Ghosh',
    description: 'Leave a note so I know you were here. "Write something. Future me will smile."',
    images: [`${BASE_URL}/assets/guestbook-og.jpg`],
  },
};

export default function GuestbookRoute() {
  const breadcrumbsJsonLd = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Guestbook', url: '/guestbook' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <GuestbookPage />
    </>
  );
}
