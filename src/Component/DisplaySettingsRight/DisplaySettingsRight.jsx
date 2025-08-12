import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

export default function Displaysettings() {

  const navigate = useNavigate()

  return (
    <section className="flex relative border border-gray-300 h-dvh">
      <div className="w-full sm:w-[632px]">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300 h-[56px] sticky top-0 z-10 bg-white">
          <h1 className="text-xl font-bold flex gap-5 items-center"><span className='md:hidden'><IoArrowBack className='w-6 h-6 md:hidden' onClick={()=>navigate('/my/:username')} /></span>   DISPLAY</h1>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 px-5 py-6">
          <div>
            <h2 className="text-base font-semibold border-b pb-1 mb-2 text-gray-800">
              Customize your view
            </h2>

            {/* Language */}
            <div className="py-2 border-b text-sm">
              <span className="text-gray-700 font-medium">Language</span>
              <p className="text-gray-500 text-sm mt-1">English</p>
            </div>

            {/* Dark Mode */}
            <div className="py-2 border-b text-sm text-gray-700 font-medium">
              Dark mode
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
