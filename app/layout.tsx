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

export const metadata = {
  metadataBase: new URL('https://thesayan.vercel.app'),
  title: 'Sayan Ghosh | Full-Stack & AI Engineer Portfolio',
  description: 'Personal portfolio of Sayan Ghosh — Full-Stack Developer, AI Enthusiast, and Open-Source Builder based in Kalyani, West Bengal.',
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

export const viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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
