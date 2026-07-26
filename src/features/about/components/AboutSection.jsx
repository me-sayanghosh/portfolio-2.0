import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ContactAndSignature } from '../../contact';

export default function AboutSection({ onOpenHireModal, onOpenResume }) {
  const stories = [
    {
      title: "How It Started: A Dangerous Curiosity",
      body: "I didn't start coding because of a profound calling to change the world. I started because I discovered \"Inspect Element\" and realized I could temporarily change my grades on a webpage. That tiny taste of digital power quickly spiralled. Soon, I was spending late nights wondering why my JavaScript was broken, only to realize I missed a single semicolon. The frustration was real, but the dopamine hit when it finally worked? I was hooked."
    },
    {
      title: "Falling for the Chaos (and the Backend)",
      body: "While making a UI look pretty is cool, I found my true love in the backend. There is something deeply satisfying about designing a clean REST API, structuring a MongoDB database, and making sure the logic is bulletproof. Add the absolute chaos of a 48-hour hackathon, a few energy drinks, and a team relying on my server to not crash during a live demo? That’s my happy place."
    },
    {
      title: "Building>>Learning",
      body: "I figured out early on that watching hours of tutorials doesn't make you a developer, building does. From engineering an AI code reviewer to a full-stack mock interview platform, I focus on creating tools that solve actual problems. If an idea requires integrating a new AI API, managing complex routing, and figuring things out on the fly, I am already on it."
    },
    {
      title: "My goal is simple",
      body: "I want to join a fast-moving engineering team as a backend or full-stack intern/developer. I’ve proven I can build robust applications from scratch in my own workspace in Kalyani. Now, I want to graduate to writing production code, scaling systems for real users, and learning from senior engineers who can show me the ropes."
    },
    {
      title: "So, Why Hire Me?",
      body: "I might not come with years of corporate legacy code experience, but that also means I come with zero bad habits. I learn incredibly fast, I thrive in collaborative team environments (shoutout to the DevDotCom community! 🚀), and I will treat your APIs with the utmost respect. If you need someone who is hungry to learn, ready to ship, and fun to work with, I'm your guy. Let's build something awesome."
    }
  ];

  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
      
      {/* 1. Top Dog Banner from Figma About Me V1 */}
      <div className="bg-[#0D0F17] border border-white/10 rounded-3xl p-6 sm:p-8 flex items-center justify-between relative overflow-hidden shadow-2xl">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/20 flex-shrink-0 shadow-lg">
            <img
              src="/assets/1b3b17fb4ccb09b3d62e3836afe1d1e7ea738253.jpg"
              alt="White Dog with Flower Crown"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              a lil bit about me!!
            </h1>
            <svg className="w-48 sm:w-64 h-4 text-white opacity-80 mt-1" viewBox="0 0 200 20">
              <path d="M5 10 Q 50 18, 100 8 T 195 12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161A24] border border-white/10 text-xs font-medium text-gray-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Open for new projects</span>
        </div>
      </div>

      {/* 2. Interactive Grid Canvas Collage */}
      <div className="bg-[#0A0C14] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden bg-dot-pattern min-h-[480px] flex flex-col justify-between shadow-2xl">
        
        {/* Top Right Resume Button */}
        <div className="flex justify-end">
          <button
            onClick={onOpenResume}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
          >
            My Resume
          </button>
        </div>

        {/* Center Grid Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center my-6">
          
          {/* Left Speech Bubble & WhatsApp */}
          <div className="bg-[#121520] border border-white/15 rounded-2xl p-5 shadow-xl relative text-left">
            <p className="text-xs sm:text-sm text-gray-200 font-medium mb-3">
              Love great tech or cats ? let’s chat about it i would love to know more
            </p>
            <a
              href="https://wa.me/919339740537"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Send “hi” on WhatsApp</span>
            </a>
            <span className="text-[10px] text-gray-500 block mt-2">promise i’ll reply faster than Claude</span>
          </div>

          {/* Center Sayan Portrait */}
          <div className="flex justify-center">
            <div className="w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform">
              <img
                src="/assets/4f640adde916bb548ff6329eae65d8d675030cae.jpg"
                alt="Sayan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Pinned Polaroids Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-1.5 rounded-xl shadow-lg transform rotate-3">
              <img src="/assets/ea0ee6ce4406a435c65efae50c3d4f240f15823e.jpg" alt="Guitar" className="w-full h-20 object-cover rounded-lg" />
            </div>
            <div className="bg-white p-1.5 rounded-xl shadow-lg transform -rotate-2">
              <img src="/assets/577c7fc7bcbe4e9bb3e0e6b04aab59e6b30d9600.jpg" alt="Food" className="w-full h-20 object-cover rounded-lg" />
            </div>
            <div className="bg-white p-1.5 rounded-xl shadow-lg transform -rotate-3 col-span-2">
              <img src="/assets/ef58a9a6e7cecb8641b70edfc3e1a44966687bda.jpg" alt="Mountains" className="w-full h-24 object-cover rounded-lg" />
            </div>
          </div>

        </div>

        <div></div>
      </div>

      {/* 3. Big Highlight Paragraph */}
      <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-100 leading-snug tracking-tight">
        I might not have years of corporate experience yet, but I have a serious track record of building live, full-stack projects that actually solve problems. I love building things from scratch, especially on the backend. Always down to talk tech, brainstorm API structures, or team up for the next build.
      </div>

      {/* 4. 2-Column Story Sections */}
      <div className="space-y-10 pt-6">
        {stories.map((story, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <h3 className="text-lg font-bold text-white md:col-span-1">
              {story.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed md:col-span-2">
              {story.body}
            </p>
          </div>
        ))}
      </div>

      {/* 5. Cursive / Serif Section */}
      <div className="py-12 text-center space-y-3">
        <h2 className="text-6xl sm:text-8xl font-black font-serif italic text-white tracking-tight">
          Thank you
        </h2>
        <p className="text-lg sm:text-2xl font-serif text-gray-300">
          Looking forward to <span className="italic font-bold">Connect</span> with You!
        </p>
      </div>

      {/* Contact */}
      <ContactAndSignature />

    </div>
  );
}
