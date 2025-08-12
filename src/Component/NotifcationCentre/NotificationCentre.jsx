import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlinePencil } from 'react-icons/hi2';
import {
  IoArrowBackOutline,
  IoEllipsisVerticalOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import useDeviceType from '../../hooks/useDeviceType';

function NotificationCentre() {
  const isMobile = useDeviceType();
  const username = "yourUsername"; // Replace with dynamic value



  return (
    <section className="flex relative border-l border-r border-gray-300 w-full max-w-full h-dvh bg-white">
      <div className="w-full max-w-[700px] mx-auto flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-3 py-3 border-b border-gray-200 sticky top-0 w-full z-10 bg-white">
          <div className="flex items-center gap-3">
            <Link to={`/my/${username}`}>
              <IoArrowBackOutline className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <h1 className="text-base sm:text-lg md:text-xl font-bold">Notifications</h1>
          </div>
          <div className="flex items-center gap-3">
            <IoEllipsisVerticalOutline className="w-5 h-5 sm:w-6 sm:h-6" />
            <Link  to={isMobile ? '/my/:username/mobile/settings' : '/my/:username/settings'}>
              <IoSettingsOutline className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 px-3 py-3 overflow-x-auto scrollbar-hide">
          {['All', 'Tags', 'Comments', 'Mention', 'Subscriptions', 'Promotions'].map((label, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gray-200 text-xs sm:text-sm px-3 py-1.5 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white transition whitespace-nowrap"
            >
              {label}
            </div>
          ))}
          {/* Pencil Icon */}
          <div className="flex-shrink-0 bg-gray-200 px-2 py-1.5 rounded-full cursor-pointer hover:bg-blue-500 transition">
            <HiOutlinePencil className="w-[18px] h-[18px]" />
          </div>
        </div>

        {/* Body */}
        <div className="flex-grow p-4 text-center text-gray-500 text-sm sm:text-base">
          <p>No notifications yet</p>
        </div>
      </div>
    </section>
  );
}

export default NotificationCentre;
