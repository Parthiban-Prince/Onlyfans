import React, { useRef, useState } from 'react';
import Profile from '../../assets/images/OnlyFans_Logo_Icon_Blue.png';
import Play from '../../assets/Icons_Images/play.png';

function FeaturedCard() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <div className="max-w-[856px] w-full h-auto mb-12 rounded-md overflow-hidden shadow-md shadow-black/30 bg-white">
      
      {/* Header */}
      <div className="flex justify-between items-start px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={Profile} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
          <div className="leading-tight">
            <h1 className="font-semibold text-base">Onlyfans</h1>
            <p className="text-sm text-gray-600">@onlyfans</p>
          </div>
        </div>
        <div className="text-sm text-gray-500 pt-2 pr-1">3 hours ago</div>
      </div>

      {/* Description */}
      <div className="px-4 pb-3 text-sm text-gray-800 leading-relaxed">
        @anacheri shares her top bedtime tips to help wind down the right way. From cozy lighting to screen-free rituals, these small shifts can lead to deeper rest and brighter mornings. 🌙💤
        <span className="block mt-1 text-blue-500 hover:underline cursor-pointer">
          onlyfans.com/anacheri / onlyfans.com/oftv
        </span>
      </div>

      {/* Video Section */}
      <div className="relative w-full aspect-video">
        {!isPlaying && (
          <>
            <img
              src="https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000"
              alt="Video Thumbnail"
              className="absolute inset-0 w-full h-full object-cover z-10 cursor-pointer"
              onClick={handlePlay}
            />
            <img
              src={Play}
              alt="Play"
              title="Play Video"
              onClick={handlePlay}
              className="absolute z-20 w-[60px] h-[60px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 hover:bg-blue-600 rounded-full p-2 cursor-pointer transition"
            />
          </>
        )}
        <video
          ref={videoRef}
          src="https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000"
          controls
          className="absolute inset-0 w-full h-full object-cover z-0"
          onPlay={() => setIsPlaying(true)}
        />
      </div>
    </div>
  );
}

export default FeaturedCard;
