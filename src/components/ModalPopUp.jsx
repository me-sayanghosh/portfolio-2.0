import React, { useState } from 'react';
import { X, Heart } from 'lucide-react';

export default function ModalPopUp({ isOpen, onClose }) {
  const [likes, setLikes] = useState(142);
  const [liked, setLiked] = useState(false);

  if (!isOpen) return null;

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Instagram Story Card Frame matching Figma Node 114:311 */}
      <div
        className="relative w-full max-w-sm sm:max-w-md bg-[#0D0F17] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between min-h-[580px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar: Profile & Close Button */}
        <div className="p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent relative z-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500 shadow-md">
              <img
                src="/assets/db4e4c670606b40c42a7d9c020a9d0a72812ffc3.jpg"
                alt="Sayan"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-sm font-bold text-white">Sayan Ghosh</span>
                <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">Jan 2024</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Center Hackathon Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/8b8d4eda03123921d4025488d9fc0e95485a2fcc.jpg"
            alt="GeeksforGeeks Kolkata Hackfest 2k26"
            className="w-full h-full object-cover filter brightness-90"
          />
        </div>

        {/* Bottom Overlay Info & Heart Button */}
        <div className="relative z-20 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-16 text-center space-y-4">
          <div>
            <h3 className="text-2xl font-black text-white tracking-tight">Top 5 Finalist</h3>
            <p className="text-xs text-gray-300 font-medium">GeeksforGeeks Kolkata Hackfest 2k26</p>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={handleLike}
              className={`p-3 rounded-full border transition-all ${
                liked
                  ? 'bg-rose-500 border-rose-400 text-white scale-110 shadow-lg shadow-rose-500/50'
                  : 'bg-black/50 border-white/20 text-rose-400 hover:scale-105'
              }`}
            >
              <Heart className={`w-6 h-6 ${liked ? 'fill-current' : ''}`} />
            </button>
            <span className="text-xs font-bold text-gray-200">{likes}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
