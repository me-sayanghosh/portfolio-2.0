import type { Metadata } from 'next';
import { GuestbookPage } from '../../src/features/guestbook';

export const metadata: Metadata = {
  title: 'Guestbook | Sayan Ghosh',
  description: 'Leave a note so I know you were here. "Write something. Future me will smile."',
  openGraph: {
    title: 'Guestbook | Sayan Ghosh',
    description: 'Leave a note so I know you were here. "Write something. Future me will smile."',
    url: 'https://thesayan.vercel.app/guestbook',
    siteName: 'Sayan Ghosh',
    images: [
      {
        url: 'https://thesayan.vercel.app/assets/guestbook-og.jpg',
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
    images: ['https://thesayan.vercel.app/assets/guestbook-og.jpg'],
  },
};

export default function GuestbookRoute() {
  return <GuestbookPage />;
}
