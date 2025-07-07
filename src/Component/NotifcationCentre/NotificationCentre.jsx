import React from 'react';
import menu from '../../assets/Icons_Images/icons8-menu-vertical-32.png';
import settings from '../../assets/Icons_Images/icons8-settings-50.png';
import Pencil from '../../assets/Icons_Images/icons8-pencil-32.png';
import { Link } from 'react-router-dom';

function NotificationCentre() {
  return (
    <section className="flex relative border-l border-r border-gray-400">
      <div className="w-[632px]">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b border-gray-300 h-[56px] sticky top-0 w-full z-10 bg-white">
          <div className="flex items-center gap-3">
            <Link to="/Dashboard">
              <h1 className="text-[40px]">&larr;</h1>
            </Link>
            <h1 className="text-xl font-bold">Notifications</h1>
          </div>
          <div className="flex items-center gap-3">
            <img src={menu} alt="Menu" />
            <img src={settings} alt="Settings" className="w-[30px] h-[30px]" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex  py-5  justify-between px-1">
          {['All', 'Tags', 'Comments', 'Mention', 'Subscriptions', 'Promotions'].map((label, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-300 px-5 py-1 rounded-full cursor-pointer hover:bg-blue-500 transition"
            >
              <h1 className="text-sm whitespace-nowrap">{label}</h1>
            </div>
          ))}

          {/* Pencil Icon */}
          <div className="flex items-center bg-gray-300 px-3 py-1 rounded-full cursor-pointer hover:bg-blue-500 transition">
            <img src={Pencil} alt="Compose" className="w-[25px] h-[25px] object-center" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotificationCentre;
