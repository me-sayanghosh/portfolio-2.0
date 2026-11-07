'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Loader2, MessageSquare, Sparkles, X } from 'lucide-react';
import GuestbookModal from './GuestbookModal';
import { CloudShader } from '@/components/ui/cloud-shader';
import { timeAgo } from '../../../lib/utils/timeAgo';

interface Entry {
  _id: string;
  name: string;
  email: string;
  image?: string;
  message: string;
  createdAt: string;
}

export default function GuestbookSection() {
  const { data: session, status } = useSession();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [messageText, setMessageText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch entries
  const fetchEntries = async () => {
    try {
      const res = await fetch('/api/guestbook');
      const data = await res.json();
      if (data.entries) {
        setEntries(data.entries);
      }
    } catch (err) {
      console.error('Failed to load guestbook entries:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  // Submit message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit message');
      }

      if (data.entry) {
        setEntries((prev) => [data.entry, ...prev]);
        setMessageText('');
        setIsMessageModalOpen(false);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete message
  const handleDelete = async (id: string) => {
    if (deletingId) return;
    setDeletingId(id);

    try {
      const res = await fetch(`/api/guestbook?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setEntries((prev) => prev.filter((entry) => entry._id !== id));
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete message');
      }
    } catch (err) {
      console.error('Error deleting entry:', err);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-8 mt-4">
      {/* ─── Artistic Quote Banner with Cloud Shader & Rotating Circular Badge ─── */}
      <div className="relative overflow-hidden rounded-2xl h-48 sm:h-60 border border-zinc-200/80 dark:border-white/10 shadow-xl flex items-center justify-center p-6 text-center select-none group">
        {/* Aceternity Cloud Shader Background */}
        <CloudShader className="absolute inset-0 w-full h-full min-h-0 pointer-events-none" speed={1} count={6} />

        {/* Subtle Overlay Vignette for Text Contrast & Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/25 pointer-events-none" />

        {/* Centered Atmospheric Serif Quote */}
        <h2 className="relative z-10 font-serif italic text-2xl sm:text-3xl md:text-4xl text-white tracking-tight max-w-lg leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
          &ldquo;Write something. Future me will smile.&rdquo;
        </h2>

        {/* Rotating Circular Stamp Badge in Bottom Right Corner */}
        <div className="absolute -bottom-7 -right-7 sm:-bottom-8 sm:-right-8 w-28 h-28 sm:w-32 sm:h-32 pointer-events-none z-10 flex items-center justify-center">
          <svg
            className="w-full h-full animate-[spin_14s_linear_infinite]"
            viewBox="0 0 100 100"
          >
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[9.5px] uppercase tracking-[3.8px] fill-white/85 font-mono font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              <textPath href="#circlePath">
                think • design • execute •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* ─── Auth Action Area: Sign In or Leave a message ─── */}
      <div className="pt-1">
        {status === 'loading' ? (
          <div className="h-10 flex items-center gap-3 text-sm text-zinc-500">
            <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
            <span>Checking authentication...</span>
          </div>
        ) : status !== 'authenticated' || !session ? (
          /* Logged-out State: Sign in button */
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSignInModalOpen(true)}
              className="px-4 py-1.5 rounded-lg border border-amber-600/70 bg-[#22160d]/90 hover:bg-[#2c1d12] text-amber-500 font-medium text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
            >
              Sign in
            </button>
            <span className="text-xs sm:text-sm text-zinc-300 font-sans font-medium">
              To leave a message
            </span>
          </div>
        ) : (
          /* Logged-in State: Leave a message button */
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMessageModalOpen(true)}
              className="px-4 py-1.5 rounded-lg border border-zinc-700/80 bg-[#1e1e22] hover:bg-[#27272c] text-white font-medium text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
            >
              Leave a message
            </button>
            <span className="text-xs sm:text-sm text-zinc-300 font-sans font-medium">
              for future visitors
            </span>
          </div>
        )}
      </div>

      {/* ─── Recent Messages List ─── */}
      <div className="space-y-6 mt-8 sm:mt-10">
        <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-zinc-300 dark:text-zinc-300">
          Recent Messages
        </h2>

        {isLoading ? (
          /* Loading Skeletons */
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {[1, 2, 3].map((i) => (
              <div key={i} className="py-4 flex gap-4 animate-pulse">
                <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 rounded" />
                  <div className="h-3 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : entries.length === 0 ? (
          /* Empty State */
          <div className="p-8 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-white/10 text-zinc-500 dark:text-zinc-400">
            <MessageSquare className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
            <p className="text-sm font-medium">No messages yet.</p>
            <p className="text-xs text-zinc-400 mt-1">Be the first to leave your mark!</p>
          </div>
        ) : (
          /* Messages List */
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
            {entries.map((entry) => {
              const isOwner =
                session?.user?.email &&
                entry.email &&
                session.user.email.toLowerCase() === entry.email.toLowerCase();

              return (
                <div key={entry._id} className="py-4 flex justify-between items-start gap-4 group">
                  <div className="flex gap-3.5 sm:gap-4 flex-1 min-w-0">
                    {/* User Avatar */}
                    {entry.image ? (
                      <img
                        src={entry.image}
                        alt={entry.name || 'User'}
                        className="rounded-full w-10 h-10 object-cover shrink-0 ring-1 ring-zinc-300 dark:ring-white/15"
                      />
                    ) : (
                      <div className="rounded-full w-10 h-10 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-sm flex items-center justify-center shrink-0">
                        {entry.name?.[0]?.toUpperCase() || 'U'}
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="font-semibold text-sm text-zinc-900 dark:text-white">
                          {entry.name}
                        </span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 font-sans">
                          {timeAgo(entry.createdAt)}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed break-words whitespace-pre-wrap">
                        {entry.message}
                      </p>
                    </div>
                  </div>

                  {/* Delete Button (Owner Only) */}
                  {isOwner && (
                    <button
                      type="button"
                      onClick={() => handleDelete(entry._id)}
                      disabled={deletingId === entry._id}
                      title="Delete your message"
                      aria-label="Delete message"
                      className="opacity-70 group-hover:opacity-100 p-1.5 text-zinc-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all cursor-pointer shrink-0"
                    >
                      {deletingId === entry._id ? (
                        <Loader2 className="w-4 h-4 animate-spin text-red-500" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ─── Leave a Message Modal Dialog (Image 3) ─── */}
      <AnimatePresence>
        {isMessageModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMessageModalOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-sm sm:max-w-md rounded-2xl bg-[#141416] border border-zinc-800 shadow-2xl p-6 z-10"
            >
              {/* Header with Title & Close Icon */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
                  Write Something Nice :3
                </h2>
                <button
                  type="button"
                  onClick={() => setIsMessageModalOpen(false)}
                  aria-label="Close dialog"
                  className="p-1 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <textarea
                    id="modal-guestbook-message"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Leave a message..."
                    rows={4}
                    maxLength={500}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-[#1e1e22] border border-zinc-700/80 p-3.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs text-red-500 font-medium">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !messageText.trim()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-sm font-medium bg-[#52525b] hover:bg-[#5f5f69] text-white transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {isSubmitting && <Loader2 className="w-4 h-4 animate-spin text-white" />}
                  <span>Sign</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── Sign In Dialog Modal ─── */}
      <GuestbookModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />
    </div>
  );
}
