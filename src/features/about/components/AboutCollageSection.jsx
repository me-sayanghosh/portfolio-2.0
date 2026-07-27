import React from 'react';

export default function AboutCollageSection({ onOpenResume }) {
  return (
    <div className="relative w-full aspect-[762/720] rounded-2xl overflow-hidden shadow-lg border border-white/0 bg-[#0D0F15] select-none group/canvas">
      
      {/* Background Grid Image Asset */}
      <img
        src="/assets/collage-elements/grid_bg.png"
        alt="Grid Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* Top Right "My Resume" Button (Home Page Style) */}
      <button
        onClick={onOpenResume}
        className="resume-btn absolute top-[1.94%] left-[83.5%] px-4 py-1 sm:px-5 sm:py-1.5 rounded-full border border-white/40 bg-[#0D0F15] text-white font-urbanist text-xs sm:text-sm font-medium tracking-tight italic active:scale-95 cursor-pointer shadow-lg z-50 transition-transform"
      >
        My Resume
      </button>

      {/* CENTER MAIN HERO CARD (Figma Frame 20: left 246px, top 158px, width 270px, height 380px) - z-10 below floating elements */}
      <div
        className="group/card absolute top-[21.94%] left-[32.28%] w-[35.43%] h-[52.78%] bg-[#1D1D1D] border border-[#404040] rounded-lg flex flex-col items-center overflow-hidden z-10 shadow-2xl cursor-pointer transition-all duration-500 ease-out hover:scale-[1.03] hover:border-white/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
      >
        {/* Hello World Header Text Graphic */}
        <div className="w-full px-[4%] pt-[4%] pb-[2%] flex items-center justify-center">
          <img
            src="/assets/collage-elements/hello_world_text.png"
            alt="hello world!"
            className="w-full h-auto block select-none"
          />
        </div>

        {/* Sayan's Main Portrait Image (Flush to left, right & bottom edges) */}
        <div className="w-full flex-1 overflow-hidden">
          <img
            src="/assets/collage-elements/sayan_portrait.png"
            alt="Sayan Ghosh"
            className="w-full h-full object-cover object-top block transition-transform duration-700 ease-out group-hover/card:scale-105"
          />
        </div>
      </div>

      {/* FLOATING ELEMENTS LAYER - z-20 on top of center card */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        
        {/* Cat Sticker 🐈 (Figma: left 133px, top 73px, width 38px) */}
        <div 
          className="absolute top-[10.14%] left-[17.45%] w-[4.99%] pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-130 hover:-rotate-12"
          title="Cat Sticker"
        >
          <img src="/assets/collage-elements/cat.png" alt="Cat" className="w-full h-auto drop-shadow-xl" />
        </div>

        {/* Soccer Ball ⚽ (Figma: left 137px, top 127px, width 30px) */}
        <div 
          className="absolute top-[17.64%] left-[17.98%] w-[3.94%] pointer-events-auto cursor-pointer transition-all duration-300 hover:scale-130 hover:rotate-45"
          title="Soccer Ball"
        >
          <img src="/assets/collage-elements/soccerball.png" alt="Soccer Ball" className="w-full h-auto drop-shadow-xl" />
        </div>

        {/* LEFT CLUSTER (Red Pushpin 📌 + Speech Bubble Card + Guitar Polaroid 🎸) */}
        <div className="group/left-cluster absolute top-[51.67%] left-[10.63%] w-[28.35%] h-[30.5%] z-20 pointer-events-auto cursor-pointer">
          
          {/* Speech Bubble Card PNG + Red Pushpin 📌 Sub-Group */}
          <div className="group/whatsapp-card absolute top-0 left-0 w-full h-[62%] z-20 pointer-events-auto cursor-pointer">
            
            {/* Speech Card Base with Spring Physics Bounce & Emerald Glow */}
            <div className="w-full mt-[6.4%] transition-all duration-300 ease-out group-hover/left-cluster:scale-[1.02] group-hover/whatsapp-card:!scale-[1.06] group-hover/whatsapp-card:!-translate-y-2.5 group-hover/whatsapp-card:!rotate-2 group-hover/whatsapp-card:!drop-shadow-[0_20px_35px_rgba(46,213,115,0.4)]">
              <img src="/assets/collage-elements/speech_bubble_card.png" alt="Speech Bubble" className="w-full h-auto drop-shadow-2xl" />
            </div>

            {/* Attached Red Pushpin 📌 (Spring Un-Pinning Lift & Tilt Physics) */}
            <div 
              className="absolute top-0 left-[3.7%] w-[13.9%] z-30 -rotate-[8deg] transition-all duration-300 origin-bottom-right group-hover/left-cluster:scale-120 group-hover/left-cluster:-rotate-12 group-hover/whatsapp-card:!scale-165 group-hover/whatsapp-card:!-rotate-35 group-hover/whatsapp-card:!-translate-y-3.5 group-hover/whatsapp-card:!-translate-x-1"
              title="Pushpin"
            >
              <img src="/assets/collage-elements/pushpin.png" alt="Pushpin" className="w-full h-auto drop-shadow-md" />
            </div>

          </div>

          {/* Attached Guitar Player Polaroid 🎸 (Bottom-center of Speech Card) */}
          <div 
            className="absolute top-[51.0%] left-[23.1%] w-[39.3%] z-20 -rotate-[12deg] transition-all duration-300 group-hover/left-cluster:rotate-[6deg] group-hover/left-cluster:scale-110 hover:!rotate-[12deg] hover:!scale-125 hover:!z-50"
            title="Guitar Polaroid"
          >
            <img src="/assets/collage-elements/guitar_polaroid.png" alt="Playing Guitar" className="w-full h-auto drop-shadow-2xl" />
          </div>

        </div>

        {/* RIGHT SIDE STACKED PHOTOS GROUP LAYER */}
        <div className="group/photo-stack">

          {/* Cat Laptop Polaroid + Silver Paperclip 📎 Group */}
          <div className="group/cat-photo absolute top-[22.22%] left-[62.40%] w-[15.95%] h-[20.8%] z-25 pointer-events-auto cursor-pointer">
            {/* Cat Laptop Polaroid Photo */}
            <div 
              className="w-[61.7%] mt-[41.8%] -rotate-[12deg] transition-all duration-300 group-hover/photo-stack:-rotate-3 group-hover/cat-photo:!rotate-[6deg] group-hover/cat-photo:!scale-125 group-hover/cat-photo:!z-50"
              title="Cat on Laptop"
            >
              <img src="/assets/collage-elements/cat_laptop_polaroid.png" alt="Cat Laptop" className="w-full h-auto drop-shadow-2xl" />
            </div>

            {/* Silver Paperclip 📎 (Attached to top of photo) */}
            <div 
              className="absolute top-0 right-0 w-[24.7%] z-30 -rotate-[8deg] transition-all duration-300 origin-bottom-left group-hover/photo-stack:translate-x-1 group-hover/photo-stack:rotate-[15deg] group-hover/cat-photo:!scale-140 group-hover/cat-photo:!rotate-[45deg]"
              title="Paperclip"
            >
              <img src="/assets/collage-elements/paperclip.png" alt="Paperclip" className="w-full h-auto drop-shadow" />
            </div>
          </div>

          {/* Mountain View Polaroid (Figma: left 531.86px, top 167px, width 85px, rotate 12deg) */}
          <div 
            className="absolute top-[23.19%] left-[69.80%] w-[11.15%] z-25 rotate-[12deg] transition-all duration-300 pointer-events-auto cursor-pointer group-hover/photo-stack:rotate-[6deg] hover:!-rotate-[6deg] hover:!scale-125 hover:!z-50"
            title="Mountain View"
          >
            <img src="/assets/collage-elements/mountain_polaroid.png" alt="Mountain View" className="w-full h-auto drop-shadow-2xl" />
          </div>

          {/* Food Dish Polaroid (Figma: left 569.02px, top 252.78px, width 90px, rotate -2deg) */}
          <div 
            className="absolute top-[35.11%] left-[74.67%] w-[11.81%] z-30 -rotate-[2deg] transition-all duration-300 pointer-events-auto cursor-pointer group-hover/photo-stack:rotate-[8deg] hover:!rotate-[12deg] hover:!scale-125 hover:!z-50"
            title="Food Dish"
          >
            <img src="/assets/collage-elements/food_polaroid.png" alt="Food Dish" className="w-full h-auto drop-shadow-2xl" />
          </div>

        </div>

        {/* Cookie 🍪 (Figma: left 571px, top 535px, width 31px, rotate 15deg) */}
        <div 
          className="absolute top-[74.31%] left-[74.93%] w-[4.07%] z-30 rotate-[15deg] pointer-events-auto cursor-pointer transition-all duration-300 ease-out hover:scale-160 hover:-rotate-[15deg] hover:-translate-y-2 hover:drop-shadow-2xl"
          title="Cookie"
        >
          <img src="/assets/collage-elements/cookie.png" alt="Cookie" className="w-full h-auto drop-shadow-lg" />
        </div>

        {/* Coffee Cup ☕ (Figma: left 511px, top 546px, width 75px, rotate 15deg) */}
        <div 
          className="absolute top-[75.83%] left-[67.06%] w-[9.84%] z-20 rotate-[15deg] pointer-events-auto cursor-pointer transition-all duration-300 ease-out hover:scale-130 hover:rotate-0 hover:-translate-y-2.5 hover:drop-shadow-2xl"
          title="Coffee Cup"
        >
          <img src="/assets/collage-elements/coffee_cup.png" alt="Coffee Cup" className="w-full h-auto drop-shadow-2xl" />
        </div>

      </div>

      {/* Interactive WhatsApp Link Hotspot over Speech Card */}
      <a
        href="https://wa.me/919339740537"
        target="_blank"
        rel="noopener noreferrer"
        title="Send 'hi' on WhatsApp"
        className="absolute cursor-pointer z-40 rounded-xl"
        style={{
          top: '54.86%',
          left: '10.63%',
          width: '28.35%',
          height: '14.3%'
        }}
      >
        <span className="sr-only">Send "hi" on WhatsApp</span>
      </a>

    </div>
  );
}
