import type { Metadata, Viewport } from 'next';
import '../src/index.css';
import { Plus_Jakarta_Sans, Bricolage_Grotesque, Newsreader, Urbanist } from 'next/font/google';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import SmoothScroll from '../src/components/SmoothScroll';
import { ModalProvider } from '../src/context/ModalContext';
import RegisterSW from '../src/components/RegisterSW';
import PWAInstallPrompt from '../src/components/PWAInstallPrompt';
import { ThemeProvider } from '../src/components/ThemeProvider';
import AuthProvider from '../src/components/AuthProvider';
import { rootJsonLd } from '../src/lib/jsonLd';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thesayan.vercel.app'),
  title: {
    default: 'Sayan Ghosh | Full-Stack & AI Engineer',
    template: '%s | Sayan Ghosh',
  },
  description: 'Personal portfolio of Sayan Ghosh — Full-Stack Developer, AI Enthusiast, and Open-Source Builder based in Kalyani, West Bengal. Transforming complex problems into elegant, scalable solutions.',
  keywords: [
    'Sayan Ghosh',
    'Sayan',
    'Full-Stack Developer',
    'AI Engineer',
    'Software Engineer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Node.js',
    'Python Developer',
    'Kalyani Developer',
    'Kolkata Software Engineer',
    'Open Source Builder',
    'DropTalk',
    'HoopIt',
    'PrepDost',
  ],
  authors: [{ name: 'Sayan Ghosh', url: 'https://thesayan.vercel.app' }],
  creator: 'Sayan Ghosh',
  publisher: 'Sayan Ghosh',
  alternates: {
    canonical: 'https://thesayan.vercel.app',
    types: {
      'application/rss+xml': [{ url: 'https://thesayan.vercel.app/feed.xml', title: 'Sayan Ghosh — RSS Feed' }],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesayan.vercel.app',
    siteName: 'Sayan Ghosh Portfolio',
    title: 'Sayan Ghosh | Full-Stack & AI Engineer',
    description: 'Transforming complex problems into elegant, scalable solutions. Full-stack developer and AI builder based in Kalyani, India.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Sayan Ghosh - Full-Stack Developer & AI Engineer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sayan Ghosh | Full-Stack & AI Engineer',
    description: 'Transforming complex problems into elegant, scalable solutions. Full-stack developer and AI builder based in Kalyani, India.',
    creator: '@SayanDev01',
    images: ['/twitter-image'],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION || process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: process.env.BING_VERIFICATION || process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { 'msvalidate.01': (process.env.BING_VERIFICATION || process.env.NEXT_PUBLIC_BING_VERIFICATION)! }
      : undefined,
  },
  category: 'technology',
  classification: 'Portfolio & Engineering Blog',
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Sayan Ghosh',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootJsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${bricolageGrotesque.variable} ${newsreader.variable} ${urbanist.variable} bg-[#fafafa] dark:bg-[#121212] text-neutral-900 dark:text-white transition-colors duration-300 min-h-screen font-sans antialiased selection:bg-amber-500/30 selection:text-amber-800 dark:selection:text-amber-200`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AuthProvider>
            <RegisterSW />
            <ModalProvider>
              <SmoothScroll>
                <Navbar />
                <main className="min-h-screen pb-24 md:pb-0">
                  {children}
                </main>
                <Footer />
                <PWAInstallPrompt />
              </SmoothScroll>
            </ModalProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
