import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Twitter, ArrowRight } from 'lucide-react';

export default function HomeAboutSection() {
  const navigate = useNavigate();

  const techStack = [
    { name: 'JavaScript', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    { name: 'Python', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'React', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { name: 'Next.js', color: 'text-white', bg: 'bg-white/10' },
    { name: 'Tailwind', color: 'text-sky-400', bg: 'bg-sky-500/10' },
    { name: 'Node.js', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { name: 'Flask', color: 'text-gray-300', bg: 'bg-white/10' },
    { name: 'WebSocket', color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { name: 'PostgreSQL', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'MongoDB', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { name: 'Redis', color: 'text-red-500', bg: 'bg-red-500/10' },
    { name: 'Supabase', color: 'text-emerald-300', bg: 'bg-emerald-500/10' },
    { name: 'Firebase', color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { name: 'AWS', color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { name: 'Docker', color: 'text-sky-400', bg: 'bg-sky-500/10' },
    { name: 'Vercel', color: 'text-white', bg: 'bg-white/10' },
    { name: 'GitHub Actions', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'Postman', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { name: 'Git', color: 'text-red-400', bg: 'bg-red-500/10' },
    { name: 'Figma', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  ];

  return (
    <section className="py-6 max-w-[762px] mx-auto px-4 sm:px-6">
      
      {/* Title */}
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
        About<span className="text-amber-500">.</span>
      </h2>

      {/* Intro Paragraph 1 */}
      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 font-sans">
        🔥 Final-year student who spends most days building full-stack products. Currently Building{' '}
        <span className="font-semibold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors cursor-pointer">
          DropTalk
        </span>
        , shipping features, fixing bugs, and learning things you don't get from tutorials.
      </p>

      {/* Intro Paragraph 2 with Highlighted Email and Twitter/X */}
      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-sans">
        Let's connect! Reach out via{' '}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mesayanghosh.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-amber-400/60 transition-all shadow-sm mx-1"
        >
          email <Mail className="w-3.5 h-3.5 ml-1 text-amber-400" />
        </a>{' '}
        or{' '}
        <a
          href="https://x.com/SayanDev01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-sky-400/60 transition-all shadow-sm mx-1"
        >
          twitter/X <Twitter className="w-3.5 h-3.5 ml-1 text-sky-400" />
        </a>{' '}
        to discuss tech, collaborate on projects, or just have an engaging conversation.
      </p>

      {/* Details List with Urbanist Font & Interactive Hover Animations */}
      <div className="space-y-2 text-sm sm:text-base font-urbanist mb-8">
        {/* Sayan Ghosh */}
        <div className="group cursor-pointer flex items-center space-x-2.5 w-fit">
          <span className="text-gray-400 text-base inline-block transform group-hover:-rotate-45 group-hover:text-amber-400 transition-all duration-300">
            ➔
          </span>
          <span className="text-gray-200 font-semibold tracking-wide inline-block transform group-hover:translate-x-2 group-hover:text-white transition-all duration-300">
            Sayan Ghosh
          </span>
        </div>

        {/* Kolkata, India */}
        <div className="group cursor-pointer flex items-center space-x-2.5 w-fit">
          <span className="text-gray-400 text-base inline-block transform group-hover:-rotate-45 group-hover:text-amber-400 transition-all duration-300">
            ➔
          </span>
          <span className="text-gray-300 tracking-wide inline-block transform group-hover:translate-x-2 group-hover:text-white transition-all duration-300">
            Kolkata, India
          </span>
        </div>

        {/* mesayanghosh.dev@gmail.com */}
        <div className="group cursor-pointer flex items-center space-x-2.5 w-fit">
          <span className="text-gray-400 text-base inline-block transform group-hover:-rotate-45 group-hover:text-amber-400 transition-all duration-300">
            ➔
          </span>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mesayanghosh.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 tracking-wide inline-block transform group-hover:translate-x-2 group-hover:text-white transition-all duration-300"
          >
            mesayanghosh.dev@gmail.com
          </a>
        </div>
      </div>

      {/* Tech Stack Pills Grid */}
      <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#11131C] border border-[#222535] hover:border-white/20 transition-all cursor-pointer shadow-sm"
          >
            <span className={`w-2 h-2 rounded-full ${tech.color.replace('text-', 'bg-')}`} />
            <span className={`text-xs font-semibold ${tech.color}`}>{tech.name}</span>
          </div>
        ))}
      </div>

      {/* More About Me Button */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate('/about')}
          className="px-6 py-2 rounded-full border border-white/30 bg-[#12141C] hover:bg-white/15 text-white font-semibold text-xs sm:text-sm shadow-lg transition-all active:scale-95 cursor-pointer flex items-center space-x-2"
        >
          <span>More About Me</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Horizontal Divider Line */}
      <div className="border-t border-white/10 my-8" />

    </section>
  );
}
