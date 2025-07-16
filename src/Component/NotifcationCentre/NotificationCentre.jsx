import React from 'react';
import menu from '../../assets/Icons_Images/icons8-menu-vertical-32.png';
import settings from '../../assets/Icons_Images/icons8-settings-50.png';
import Pencil from '../../assets/Icons_Images/icons8-pencil-32.png';
import { Link } from 'react-router-dom';
import Chat from '../Messagecenter/chat/chat'

function NotificationCentre() {
  return (
    <section className="flex relative border-l border-r border-gray-400 w-full md:w-[632px] h-dvh">
      <div className="w-full max-w-[700px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-300 sticky top-0 w-full z-10 bg-white">
          <div className="flex items-center gap-3">
            <Link to="/Dashboard">
              <h1 className="text-[28px] md:text-[36px]">&larr;</h1>
            </Link>
            <h1 className="text-lg md:text-xl font-bold">Notifications</h1>
          </div>
          <div className="flex items-center gap-3">
            <img src={menu} alt="Menu" className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
            <img src={settings} alt="Settings" className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />
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
            <img src={Pencil} alt="Compose" className="w-[20px] h-[20px]" />
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
