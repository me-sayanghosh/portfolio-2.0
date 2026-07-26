import React from 'react';

export default function ContactAndSignature() {
  return (
    <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8 border-t border-white/10">
        
        {/* Left Column Contact Details */}
        <div className="space-y-6">
          <div>
            <span className="text-base text-gray-300 font-normal block mb-1">Email</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sayanghosh1887@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-light text-gray-100 hover:text-white transition-colors tracking-wide"
            >
              sayanghosh1887@gmail.com
            </a>
          </div>

          <div>
            <span className="text-base text-gray-300 font-normal block mb-1">Phone</span>
            <a
              href="tel:+919339740537"
              className="text-base font-light text-gray-100 hover:text-white transition-colors tracking-wide"
            >
              +91 9339740537
            </a>
          </div>

          <div>
            <span className="text-base text-gray-300 font-normal block mb-1">Address</span>
            <span className="text-base font-light text-gray-100 block tracking-wide">
              Kalyani, West Bengal
            </span>
          </div>
        </div>

        {/* Right Column Custom SVG Signature */}
        <div className="flex flex-col items-start md:items-end justify-center">
          <img
            src="/assets/signature.png"
            alt="Warm Regards, Sayan Ghosh"
            className="w-80 sm:w-90 md:w-96 lg:w-[590px] h-auto opacity-95 hover:opacity-100 transition-opacity mix-blend-screen"
          />
        </div>

      </div>
    </section>
  );
}
