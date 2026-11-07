'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { signIn } from 'next-auth/react';

interface GuestbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuestbookModal({ isOpen, onClose }: GuestbookModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-[#18181b] border border-zinc-200 dark:border-white/10 shadow-2xl p-6 sm:p-7 z-10 text-center"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute right-4 top-4 p-1 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Heading & Subtitle */}
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white font-bricolage mb-1.5">
            Sign the Guestbook
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            Please sign in to leave a message.
          </p>

          {/* OAuth Buttons */}
          <div className="flex flex-col gap-2.5">
            {/* Google OAuth Button */}
            <button
              onClick={() => signIn('google')}
              className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 bg-white dark:bg-[#222226] text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-[#2a2a2f] text-sm font-medium shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg">
                <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
                <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
                <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" />
                <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" />
              </svg>
              <span>Sign in with Google</span>
            </button>

            {/* GitHub OAuth Button */}
            <button
              onClick={() => signIn('github')}
              className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 bg-white dark:bg-[#222226] text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-[#2a2a2f] text-sm font-medium shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Sign in with GitHub</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
