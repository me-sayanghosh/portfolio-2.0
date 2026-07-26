import React from 'react';

export default function ContactAndSignature() {
  return (
    <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-8 border-t border-white/10">
        
        {/* Left Column Contact Details */}
        <div className="space-y-4">
          <div>
            <span className="text-xs text-gray-500 font-mono block mb-0.5">Email</span>
            <a href="mailto:sayanghosh1887@gmail.com" className="text-sm font-semibold text-gray-200 hover:text-white transition-colors">
              sayanghosh1887@gmail.com
            </a>
          </div>

          <div>
            <span className="text-xs text-gray-500 font-mono block mb-0.5">Phone</span>
            <a href="tel:+919339740537" className="text-sm font-semibold text-gray-200 hover:text-white transition-colors">
              +91 9339740537
            </a>
          </div>

          <div>
            <span className="text-xs text-gray-500 font-mono block mb-0.5">Address</span>
            <span className="text-sm font-semibold text-gray-200">
              Kalyani, West Bengal
            </span>
          </div>
        </div>

        {/* Right Column Cursive Signature */}
        <div className="text-left md:text-right font-serif">
          <span className="text-xl sm:text-2xl text-gray-300 italic block mb-1">
            Warm Regards,
          </span>
          <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide font-serif">
            Sayan Ghosh
          </span>
        </div>

      </div>
    </section>
  );
}
