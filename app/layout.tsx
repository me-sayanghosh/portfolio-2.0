import '../src/index.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import SmoothScroll from '../src/components/SmoothScroll';
import { ModalProvider } from '../src/context/ModalContext';
import RegisterSW from '../src/components/RegisterSW';
import PWAInstallPrompt from '../src/components/PWAInstallPrompt';

export const metadata = {
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Urbanist:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#121212] text-white selection:bg-amber-500/30 selection:text-amber-200 min-h-screen font-sans antialiased">
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
      </body>
    </html>
  );
}
