import React from 'react';

export default function UserCard({
  name,
  username,
  avatarUrl,
  bannerUrl,
  isVerified = false,
  isAvailable = false,
  newPosts = 0,
  expiredDate,
}) {
  return (
    <div className="w-[300px] rounded-xl border border-gray-300 shadow-md overflow-hidden relative bg-white">
      {/* Top Banner */}
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Banner"
          className="w-full h-[120px] object-cover"
        />
        {newPosts > 0 && (
          <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-[2px] rounded">
            {newPosts} new posts
          </div>
        )}
      </div>

      {/* Avatar, Name, and Green Dot */}
      <div className="flex items-center px-4 -mt-8 relative">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-16 h-16 rounded-full border-4 border-white object-cover"
        />
        {isAvailable && (
          <span className="absolute left-16 bottom-2 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        )}
        <div className="ml-3">
          <div className="flex items-center gap-1">
            <h3 className="text-md font-semibold">{name}</h3>
            {isVerified && (
              <svg
                className="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            )}
          </div>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="px-4 py-3 space-y-2">
        <button className="w-full text-sm text-gray-700 hover:text-blue-500 font-medium flex items-center gap-2">
          ⭐ Add to favorites and other lists
        </button>
        <button className="w-full border border-gray-300 rounded py-1 text-sm">
          💬 Message
        </button>

        {/* Single Subscribe for Free Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-semibold">
          SUBSCRIBE FOR FREE
        </button>

        <p className="text-xs text-gray-400 mt-2">Expired • {expiredDate}</p>
      </div>
    </div>
  );
}
