import React from 'react';
import Spotify from '../../assets/Icons_Images/icons8-spotify-32.png';

function ProfileRight() {
  return (
    <section className="w-[368px] ml-4 py-5 relative z-10">
      <div className="sticky top-5 flex flex-col gap-5 px-4 w-full">
        {/* Search Input */}
        <div>
          <input
            type="text"
            placeholder="Search user's post"
            className="w-full h-[40px] px-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Spotify Box */}
        <div className="flex flex-col gap-6 border border-gray-300 px-4 py-4 rounded-xl shadow-sm bg-white">
          <h1 className="text-xl text-gray-600 font-bold">SPOTIFY</h1>
          <div className="flex items-center gap-4 bg-[#1DB954] px-4 py-2 cursor-pointer rounded-full hover:bg-[#1ed760] transition duration-300">
            <img src={Spotify} alt="Spotify" className="w-6 h-6" />
            <button className="text-white font-semibold text-sm">
              SIGN IN WITH SPOTIFY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileRight;
