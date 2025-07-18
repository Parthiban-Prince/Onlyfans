import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Chat from '../Messagecenter/chat/chat'
import { HiOutlinePencil } from 'react-icons/hi2';
import { IoArrowBackOutline, IoEllipsisVerticalOutline, IoSettingsOutline } from 'react-icons/io5';
import useDeviceType from '../../hooks/useDeviceType';

function NotificationCentre() {

  const navigate  = useNavigate()

  const  isMobile  = useDeviceType

  return (
    <section className="flex relative border-l border-r border-gray-400 w-full md:w-[632px] h-dvh">
      <div className="w-full max-w-[700px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-300 sticky top-0 w-full z-10 bg-white">
          <div className="flex items-center gap-3">
            <Link to="/Dashboard">
              <IoArrowBackOutline className="w-6 h-6"/>
            </Link>
            <h1 className="text-lg md:text-xl font-bold">Notifications</h1>
          </div>
          <div className="flex items-center gap-3">
            <IoEllipsisVerticalOutline alt="Menu" className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
             <Link to={isMobile ? "settings":"/my/settings"}> <IoSettingsOutline alt="Settings" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />  </Link>   
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 px-3 py-4 overflow-x-auto no-scrollbar">
          {['All', 'Tags', 'Comments', 'Mention', 'Subscriptions', 'Promotions'].map((label, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gray-200 text-sm px-4 py-1.5 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white transition whitespace-nowrap"
            >
              {label}
            </div>
          ))}

          {/* Pencil Icon */}
          <div className="flex-shrink-0 bg-gray-200 px-3 py-1.5 rounded-full cursor-pointer hover:bg-blue-500 transition">
             <HiOutlinePencil alt="Compose" className="w-[20px] h-[20px]" />
          </div>
        </div>

        {/* Body (notifications would go here) */}
        <div className="p-4 text-center text-gray-500">
          <p>No notifications yet</p>
        </div>
      </div>
    </section>
  );
}

export default NotificationCentre;
