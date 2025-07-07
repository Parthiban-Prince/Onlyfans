import React from 'react';
import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png';

function Card() {
  return (
    <div className="flex px-4 pt-4">
      <div className="relative w-full rounded-md overflow-hidden">
        {/* Background Image */}
        <img
          src="https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg"
          alt="Profile Background"
          className="w-full h-[128px] object-cover"
        />

        {/* Menu Icon */}
        <img
          src={Menu}
          alt="Menu"
          className="absolute top-2 right-2 w-[24px] h-[24px] z-20"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

        {/* Profile Picture */}
        <img
          src="https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg"
          alt="Avatar"
          className="w-[96px] h-[96px] object-cover rounded-full border-4 border-white absolute top-[20px] left-[20px] z-30"
        />

        {/* Name and Username */}
        <div className="absolute top-[30px] left-[130px] z-30">
          <h1 className="text-white text-lg font-bold">OnlyFans</h1>
          <p className="text-white text-sm">@onlyfans</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
