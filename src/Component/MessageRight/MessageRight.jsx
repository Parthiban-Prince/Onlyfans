import React from 'react';
import { Link } from 'react-router-dom';
import { IoAddOutline, IoArrowBackOutline, IoSearchOutline } from 'react-icons/io5';


function MessageRight() {
  return (
    <section className="flex relative border-x border-gray-300 bg-white h-dvh">
      <div className="w-full md:w-[632px] h-full overflow-y-auto">
        {/* Header */}
        <div className="fixed top-0 z-10 flex justify-between items-center p-4 border-b border-gray-300 bg-white w-[inherit]">
          <div className="flex items-center gap-3">
            <Link to="/my/:username">
              <span className="hover:text-blue-500 transition"><IoArrowBackOutline className='w-6 h-6'/></span>
            </Link>
            <h1 className="text-lg font-semibold">Messages</h1>
          </div>
          <div className="flex items-center gap-4">
            <IoSearchOutline alt="Search" className="w-6 h-6 cursor-pointer" />
            <IoAddOutline alt="New" className="w-6 h-6 cursor-pointer hover:text-blue-500" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default MessageRight;
