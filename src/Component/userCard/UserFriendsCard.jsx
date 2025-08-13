import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Sidebar() {
  const recentPosts = [
    "https://res.cloudinary.com/dri7edc3h/image/upload/v1754981474/aurora%20sinclair/the_aurora_sinclair__1743079257_3597532013550714606_58301357890_d8ttrs.webp",
    "https://res.cloudinary.com/dri7edc3h/image/upload/v1754981474/aurora%20sinclair/the_aurora_sinclair__1743079257_3597532013550714606_58301357890_d8ttrs.webp",
    "https://res.cloudinary.com/dri7edc3h/image/upload/v1754981474/aurora%20sinclair/the_aurora_sinclair__1743079257_3597532013550714606_58301357890_d8ttrs.webp",
  ];

  const friends = [
    {
      name: "Kaitlen",
      username: "@kaitlen",
      image:
        "https://res.cloudinary.com/dri7edc3h/image/upload/v1754981474/aurora%20sinclair/the_aurora_sinclair__1743079257_3597532013550714606_58301357890_d8ttrs.webp",
      cover: "https://via.placeholder.com/300x100/ffb6c1/000000", // cover photo
      free: true,
      verified: true,
    },
    {
      name: "Claire",
      username: "@oftvclaire",
      image: "https://via.placeholder.com/150",
      cover: "https://via.placeholder.com/300x100/87ceeb/000000",
      free: true,
      verified: true,
    },
    {
      name: "Emma Kate",
      username: "@emmakate",
      image: "https://via.placeholder.com/150",
      cover: "https://via.placeholder.com/300x100/90ee90/000000",
      free: true,
      verified: true,
    },
    {
      name: "Emma Kate",
      username: "@emmakate",
      image: "https://via.placeholder.com/150",
      cover: "https://via.placeholder.com/300x100/f0e68c/000000",
      free: true,
      verified: true,
    },
  ];

  return (
    <div className="w-full max-w-[360px] mx-auto space-y-6 p-2">
      {/* Search Card */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search user`s post"
            className="w-full rounded-sm border border-gray-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500 text-lg" />
        </div>
      </div>

      {/* Recent Card */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xs font-semibold text-gray-500 mb-3 tracking-wide">
          RECENT
        </h2>
        <div className="flex space-x-3">
          {recentPosts.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Recent"
              className="w-24 h-24 object-cover rounded-lg border hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>

      {/* Friends Card */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xs font-semibold text-gray-500 mb-3 tracking-wide flex justify-between items-center">
          FRIENDS
        </h2>

        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {friends.map((f, idx) => (
            <div
              key={idx}
              className="flex-none w-32 flex flex-col items-center bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Cover Photo */}
             <div className="w-full h-16 overflow-hidden relative">
  <img
    src={f.cover}
    alt={`${f.name} cover`}
    className="w-full h-full object-cover"
  />
  {f.free && (
    <span className="absolute top-1 left-1 bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded">
      Free
    </span>
  )}
</div>

              {/* Profile Image */}
    <div className="relative -mt-8">
  <img
    src={f.image}
    alt={f.name}
    className="w-16 h-16 object-cover rounded-full border-2 border-white shadow"
  />
  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
</div>

              {/* Name & Username */}
              <p className="mt-2 text-sm font-semibold flex items-center gap-1">
                {f.name}
                {f.verified && (
                  <BsCheckCircleFill className="text-blue-500 text-xs" />
                )}
              </p>
              <p className="text-xs text-gray-500">{f.username}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Card */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xs font-semibold text-gray-500 mb-3 tracking-wide">
          SUBSCRIPTION
        </h2>
        <div className="flex justify-between items-center border rounded-full px-4 py-2 bg-gray-50">
          <button className="text-sm font-semibold text-green-600 hover:text-green-700">
            SUBSCRIBED
          </button>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            FOR FREE
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400 flex justify-center space-x-4 pt-3">
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Cookie Notice
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
      </div>
    </div>
  );
}
