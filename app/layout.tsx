import type { Metadata } from 'next';
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

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
        url: '/assets/profile-avatar.webp',
        width: 800,
        height: 800,
        alt: 'Sayan Ghosh - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sayan Ghosh | Full-Stack & AI Engineer',
    description: 'Transforming complex problems into elegant, scalable solutions. Full-stack developer and AI builder based in Kalyani, India.',
    creator: '@SayanDev01',
    images: ['/assets/profile-avatar.webp'],
  },
  robots: {
    index: true,
    follow: true,
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://thesayan.vercel.app/#person',
      name: 'Sayan Ghosh',
      url: 'https://thesayan.vercel.app',
      image: 'https://thesayan.vercel.app/assets/profile-avatar.webp',
      jobTitle: 'Full-Stack Software Engineer & AI Builder',
      worksFor: {
        '@type': 'Organization',
        name: 'RealAI Solutions',
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
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://thesayan.vercel.app/#website',
      url: 'https://thesayan.vercel.app',
      name: 'Sayan Ghosh — Portfolio & Engineering Blog',
      publisher: {
        '@id': 'https://thesayan.vercel.app/#person',
      },
      description: 'Personal portfolio, engineering blogs, and projects by Sayan Ghosh — Full-Stack Developer and AI Builder.',
    },
  ],
};

export const viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
