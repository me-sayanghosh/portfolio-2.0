'use client';

import React from 'react';

export default function ContactAndSignature() {
  return (
    <section className="py-6 sm:py-10 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="flex flex-row items-center justify-between gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10">
        
        {/* Left Column Contact Details */}
        <div className="space-y-4 sm:space-y-5 min-w-0 flex-1">
          <div>
            <span className="text-xs sm:text-sm text-gray-400 font-normal block mb-0.5 sm:mb-1">Email</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sayanghosh1887@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-base font-light text-gray-100 hover:text-white transition-colors tracking-wide block truncate"
            >
              sayanghosh1887@gmail.com
            </a>
          </div>

          <div>
            <span className="text-xs sm:text-sm text-gray-400 font-normal block mb-0.5 sm:mb-1">Phone</span>
            <a
              href="tel:+919339740537"
              className="text-xs sm:text-base font-light text-gray-100 hover:text-white transition-colors tracking-wide block"
            >
              +91 9339740537
            </a>
          </div>

          <div>
            <span className="text-xs sm:text-sm text-gray-400 font-normal block mb-0.5 sm:mb-1">Address</span>
            <span className="text-xs sm:text-base font-light text-gray-100 block tracking-wide">
              Kalyani, West Bengal
            </span>
          </div>
        </div>

        {/* Right Column Custom Signature */}
        <div className="flex items-center justify-end shrink-0">
          <img
            src="/assets/signature.png"
            alt="Warm Regards, Sayan Ghosh"
            className="w-32 xs:w-40 sm:w-56 md:w-64 lg:w-76 h-auto opacity-95 hover:opacity-100 transition-opacity mix-blend-screen"
          />
        </div>

      </div>
    </section>
  );
}
