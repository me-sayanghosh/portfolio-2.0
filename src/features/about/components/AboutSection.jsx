import React from 'react';
import { ContactAndSignature } from '../../contact';
import AboutMeBanner from './AboutMeBanner';
import AboutCollageSection from './AboutCollageSection';

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
    <div className="pt-16 sm:pt-20 pb-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
      
      {/* 1. Top Banner — "a lil bit about me!!" */}
      <AboutMeBanner />

      {/* 2. Interactive Animated Collage Grid Section */}
      <AboutCollageSection onOpenResume={onOpenResume} />

      {/* 3. Big Highlight Paragraph */}
      <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-100 leading-snug tracking-tight pt-2">
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
