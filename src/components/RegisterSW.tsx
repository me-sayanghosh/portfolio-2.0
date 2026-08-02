'use client';

import { useEffect } from 'react';

export default function RegisterSW() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('[SW] Service worker registered successfully with scope:', registration.scope);
          })
          .catch((err) => {
            console.error('[SW] Service worker registration failed:', err);
          });
      });
    }
  }, []);

  return null;
}
