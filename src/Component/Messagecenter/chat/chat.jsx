import React from 'react';

export default function Chat() {
  return (
    <div
      onClick={() => alert("loading")}
      className="flex items-center gap-4 p-4 rounded-xl bg-white hover:bg-gray-100 transition-all duration-200 cursor-pointer"
    >
      {/* Avatar */}
      <img
        src="https://res.cloudinary.com/dri7edc3h/image/upload/v1750063681/bhagyashri%20borse/pqekwwiuhfe2eobxd5r0.jpg"
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Text section */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="truncate">
            <span className="font-medium text-gray-900">Bhagyashri</span>
            <span className="text-sm text-gray-500 ml-1">@bhagyashriborse</span>
          </div>
          <span className="text-xs text-gray-400 whitespace-nowrap">2 min ago</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-gray-700 truncate">Hello, just checking in with you about the update!</p>
          <button className="text-gray-400 hover:text-red-400 transition text-sm px-2">✕</button>
        </div>
      </div>
    </div>
  );
}
