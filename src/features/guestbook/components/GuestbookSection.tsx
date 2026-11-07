'use client';

import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Trash2, Loader2, MessageSquare, Sparkles } from 'lucide-react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
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

      {/* ─── Auth Area: Sign In Prompt or User Form ─── */}
      <div className="pt-2">
        {status === 'loading' ? (
          <div className="h-12 flex items-center gap-3 text-sm text-zinc-500">
            <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
            <span>Checking authentication...</span>
          </div>
        ) : status !== 'authenticated' || !session ? (
          /* Logged-out State: Sign In Button with Gradient & Pulse */
          <div className="flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium h-10 px-5 group relative overflow-hidden border border-amber-500/50 bg-gradient-to-r from-amber-500/10 to-red-500/10 text-amber-700 dark:text-amber-400 shadow-sm transition-all duration-300 hover:scale-105 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Sparkles className="w-4 h-4 text-amber-500 relative z-10" />
              <span className="relative z-10 font-semibold">Sign in</span>
            </button>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-sans animate-pulse">
              To leave a message
            </span>
          </div>
        ) : (
          /* Logged-in State: User Profile Bar + Message Input Form */
          <div className="space-y-4 p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#18181b]/80 border border-zinc-200 dark:border-white/10 backdrop-blur-md shadow-sm">
            {/* User Info & Sign Out */}
            <div className="flex items-center justify-between gap-3 border-b border-zinc-200/80 dark:border-white/10 pb-3">
              <div className="flex items-center gap-3">
                {session.user?.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-500/40"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold text-sm">
                    {session.user?.name?.[0] || 'U'}
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium text-zinc-900 dark:text-white leading-none">
                    {session.user?.name}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    {session.user?.email}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => signOut()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-500/10 border border-zinc-200 dark:border-white/10 transition-colors cursor-pointer"
                title="Sign out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign out</span>
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-bricolage">
                Write Something Nice :3
              </h3>

              <div className="relative">
                <textarea
                  id="guestbook-message"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Leave a message..."
                  rows={3}
                  maxLength={500}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-zinc-100/90 dark:bg-[#1f1f23] border border-zinc-200 dark:border-white/10 p-3.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none"
                />
                <span className="absolute bottom-2.5 right-3 text-[11px] text-zinc-400 font-mono">
                  {messageText.length} / 500
                </span>
              </div>

              {errorMessage && (
                <p className="text-xs text-red-500 font-medium">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !messageText.trim()}
                className="cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-black shadow-md hover:shadow-amber-500/25 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-95"
              >
                {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                <span>Sign</span>
              </button>
            </form>
          </div>
        )}
      </div>

      {/* ─── Recent Messages List ─── */}
      <div className="space-y-6 mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 font-bricolage">
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

      {/* ─── Sign In Dialog Modal ─── */}
      <GuestbookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
