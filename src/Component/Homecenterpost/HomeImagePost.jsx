import React from 'react';
import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png';

function HomeImagePost() {
  return (
    <div className=" md:max-w-[856px]  w-full mb-10 rounded-md border border-gray-200 shadow-sm bg-white">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dri7edc3h/image/upload/v1749632907/Amisha/n1tzjvbpugi1rid9rauf.jpg"
            alt="OnlyFans Logo"
            className="w-12 h-12 object-cover object-top rounded-full"
          />
          <div className="leading-4">
            <h1 className="font-bold text-sm">OnlyFans ✅</h1>
            <p className="text-gray-600 text-sm">@onlyfans</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm">8 hours ago</p>
      </div>

      {/* Caption */}
      <div className="px-4 pb-3 text-[15px] text-gray-800 leading-5">
        Ready to tee it up with{' '}
        <span className="text-blue-500">@karinhart.golf</span>? Tag along as she
        plays three holes at a stunning Florida course—nothing but fairways and
        solid swings. 🏌️‍♀️ ⛳
        <br />
        <a
          href="https://onlyfans.com/karinhart.golf"
          className="text-blue-500 block"
        >
          onlyfans.com/karinhart.golf / onlyfans.com/oftv
        </a>
      </div>

      {/* Main Image */}
      <div className="relative w-full h-auto">
        <img
          src="https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg"
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Card Preview */}
      <div className="relative px-4 pt-4">
        <div className="relative w-full rounded-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg"
            alt="Card Cover"
            className="w-full h-32 object-cover rounded-md"
          />
          <img
            src={Menu}
            alt="Menu"
            className="absolute top-2 right-2 w-6 h-6 z-20"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center rounded-md">
            <div className="flex items-center gap-4 px-6">
              <img
                src="https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-white"
              />
              <div className="text-white">
                <h1 className="text-lg font-bold">OnlyFans</h1>
                <p>@onlyfans</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between px-4 py-3 mt-2">
        <div className="flex gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            alt="Like"
            title="Like"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
            alt="Comment"
            title="Comment"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
            alt="Send Tip"
            title="Send Tip"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
          alt="Bookmark"
          title="Bookmark"
          className="w-6 h-6 cursor-pointer"
        />
      </div>

      {/* Likes Count */}
      <div className="px-5 text-sm text-gray-600 pb-4">83 likes</div>
    </div>
  );
}

export default HomeImagePost;
