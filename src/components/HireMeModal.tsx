'use client';

import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Copy, Check, MessageCircle, HeartHandshake } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeModal({ isOpen, onClose }: ModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const email = "sayanghosh1887@gmail.com";
  const phone = "+91 9339740537";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card matching Figma Modal Pop Up (Node ID 114:311) */}
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0C0F17] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-950/20 text-left transform animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Badge & Title */}
        <div className="flex items-center space-x-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
          <HeartHandshake className="w-4 h-4" />
          <span>Hire Me / Let's Connect</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          Looking forward to Connect with You!
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 bg-white/[0.03] p-4 rounded-2xl border border-white/5">
          "I might not have years of corporate experience yet, but I have a serious track record of building live, full-stack projects that actually solve problems. I love building things from scratch, especially on the backend. Always down to talk tech, brainstorm API structures, or team up for the next build."
        </p>

        {/* Contact Information List */}
        <div className="space-y-3 mb-6">
          
          {/* Email */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#141824] border border-white/10 hover:border-white/20 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 font-medium block">Email</span>
                <a href={`mailto:${email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-orange-400 transition-colors">
                  {email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              title="Copy email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#141824] border border-white/10 hover:border-white/20 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 font-medium block">Phone</span>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                  {phone}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              title="Copy phone number"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#141824] border border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-gray-400 font-medium block">Address</span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  Kalyani, West Bengal
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* WhatsApp Direct Action */}
        <a
          href="https://wa.me/919339740537?text=Hi%20Sayan,%20I'd%20like%20to%20discuss%20an%20opportunity!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center space-x-2 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01] mb-4"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Warm Regards Signature */}
        <div className="pt-3 border-t border-white/10 text-right">
          <span className="text-xs text-gray-400 italic block">Warm Regards,</span>
          <span className="text-sm font-bold text-white">Sayan Ghosh</span>
        </div>

      </div>
    </div>
  );
}
