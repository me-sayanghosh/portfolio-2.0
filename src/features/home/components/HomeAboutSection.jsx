import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Twitter, ArrowRight } from 'lucide-react';

export default function HomeAboutSection() {
  const navigate = useNavigate();

  const techStack = [
    {
      name: 'TypeScript',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'JavaScript',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Python',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'React',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Next.js',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
    {
      name: 'Tailwind',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
      name: 'Node.js',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Flask',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
    },
    {
      name: 'WebSocket',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg'
    },
    {
      name: 'PostgreSQL',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'MongoDB',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'Redis',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
    },
    {
      name: 'Supabase',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg'
    },
    {
      name: 'Firebase',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
    {
      name: 'AWS',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    },
    {
      name: 'Docker',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
      name: 'Vercel',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg'
    },
    {
      name: 'GitHub Actions',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'Postman',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
    },
    {
      name: 'Git',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'Figma',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    }
  ];

  return (
    <section className="py-6 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Title */}
      <h2
        className="font-bricolage text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        About <span className="text-amber-500">.</span>
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
          className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-amber-400/60 transition-all shadow-sm mx-1"
        >
          email <Mail className="w-3.5 h-3.5 ml-1 text-amber-400" />
        </a>{' '}
        or{' '}
        <a
          href="https://x.com/SayanDev01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-sky-400/60 transition-all shadow-sm mx-1"
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

      {/* Tech Stack Pills Grid: Grayscale B&W by default -> Full Color on Hover */}
      <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="group flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#11131C] border border-[#222535] hover:border-white/30 hover:bg-[#161926] transition-all duration-300 cursor-pointer shadow-sm"
          >
            {/* Tech Logo: Black & White by default, Full Vibrant Color on Hover */}
            <img
              src={tech.iconUrl}
              alt={tech.name}
              className="w-4 h-4 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
            />
            <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>
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

    </section>
  );
}
