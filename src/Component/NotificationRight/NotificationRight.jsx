import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

export default function Notificationsettings() {

  const navigate = useNavigate()

  return (
    <section className="flex relative border border-gray-400 h-dvh">
      <div className="w-[632px]">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300 h-[56px] sticky w-full z-10 bg-white top-0">
          <h1 className="text-lg font-bold tracking-wide flex items-center gap-5"><span className='md:hidden'><IoArrowBack className='w-6 h-6 md:hidden' onClick={()=>navigate('/my/:username')} /></span> NOTIFICATIONS</h1>
        </div>

        {/* Notification Settings List */}
        <div className="flex flex-col gap-6 my-5">
          <div className="px-5">
            <h2 className="font-semibold border-b pb-1 mb-2 uppercase text-sm text-gray-700">
              Push Notifications
            </h2>
            <div className="space-y-2 text-sm text-gray-800">
              <h3 className="border-b pb-1">Email notifications</h3>
              <h3 className="border-b pb-1">Site notifications</h3>
              <h3 className="border-b pb-1">Toast notifications</h3>
            </div>
          </div>

          <div className="px-5">
            <h2 className="font-semibold border-b pb-1 uppercase text-sm text-gray-700">
              Other
            </h2>
            <div className="mt-2 text-sm text-gray-800">
              {/* Add additional settings here if needed */}
              <p className="text-gray-500 italic">No additional options available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
