import React, { useState } from 'react';

export default function CreationOfAdamBanner({ onOpenHireModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="py-16 max-w-4xl mx-auto px-4 sm:px-6 relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpenHireModal}
    >
      <div className="bg-[#0A0C12] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex items-center justify-between min-h-[220px] shadow-2xl group">
        
        {/* Left Hand Image */}
        <div
          className={`w-40 sm:w-64 h-32 sm:h-48 transition-transform duration-500 ease-out ${
            isHovered ? 'translate-x-6 sm:translate-x-12 scale-105' : 'translate-x-0'
          }`}
        >
          <img
            src="/assets/12a5154efd1927d7112e89cc82979c0aea6d7555.jpg"
            alt="Left Hand"
            className="w-full h-full object-cover rounded-xl filter grayscale contrast-125"
          />
        </div>

        {/* Center Neon Lime Green HIRE ME Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenHireModal();
          }}
          className={`px-8 py-3.5 rounded-full bg-[#80EE00] text-black font-black text-sm tracking-wider uppercase shadow-[0_0_35px_rgba(128,238,0,0.6)] transition-all duration-300 transform z-20 ${
            isHovered ? 'scale-110 shadow-[0_0_50px_rgba(128,238,0,0.9)] bg-[#95FF1A]' : 'scale-100'
          }`}
        >
          HIRE ME
        </button>

        {/* Right Hand Image */}
        <div
          className={`w-40 sm:w-64 h-32 sm:h-48 transition-transform duration-500 ease-out ${
            isHovered ? '-translate-x-6 sm:-translate-x-12 scale-105' : 'translate-x-0'
          }`}
        >
          <img
            src="/assets/12a5154efd1927d7112e89cc82979c0aea6d7555.jpg"
            alt="Right Hand"
            className="w-full h-full object-cover rounded-xl filter grayscale contrast-125 transform -scale-x-100"
          />
        </div>

      </div>
    </section>
  );
}
