import React from 'react';

export default function HomeEducationSection() {
  return (
    <section className="py-6 max-w-[762px] mx-auto px-4 sm:px-6">
      
      {/* Title with Bricolage Grotesque Font */}
      <h2
        className="font-bricolage text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        Education <span className="text-amber-500">.</span>
      </h2>

      {/* Minimalist Text Layout matching Screenshot */}
      <div className="space-y-1">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
            B.Tech in Computer Science & Engineering
          </h3>
          <span className="text-xs sm:text-sm text-gray-400 font-sans whitespace-nowrap">
            2023 - 2027
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 font-sans">
          <a
            href="https://www.google.com/maps/place/JIS+College+of+Engineering/@22.9595762,88.4451771,17z/data=!3m1!4b1!4m6!3m5!1s0x3a027730302f6e25:0xe50dfccae21e1fc!8m2!3d22.9595762!4d88.447752!16s%2Fm%2F0wbh4fh?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline underline-offset-4 decoration-white/40 hover:decoration-blue-400 hover:text-blue-400 transition-colors"
          >
            JIS College of Engineering
          </a>
          , Kalyani, West Bengal
        </p>
      </div>

    </section>
  );
}
