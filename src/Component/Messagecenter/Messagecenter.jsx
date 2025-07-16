import React from 'react';
import search from '../../assets/Icons_Images/icons8-search-50.png';
import plus from '../../assets/Icons_Images/icons8-plus-24.png';
import pencil from '../../assets/Icons_Images/icons8-pencil-32.png';
import sort from '../../assets/Icons_Images/icons8-sorting-50.png';
import { Link } from 'react-router-dom';
import Chat from './chat/chat';


function MessageCenter() {
  return (
    <section className="flex relative border-x border-gray-300 bg-white">
      <div className="w-full md:w-[395px] h-full overflow-y-auto">
        {/* Header */}
        <div className="fixed top-0 z-10 flex justify-between items-center p-4 border-b border-gray-300 bg-white w-[inherit]">
          <div className="flex items-center gap-3">
            <Link to="/Dashboard">
              <span className="text-[30px] font-light hover:text-blue-500 transition">&larr;</span>
            </Link>
            <h1 className="text-lg font-semibold">Messages</h1>
          </div>
          <div className="flex items-center gap-4">
            <img src={search} alt="Search" className="w-5 h-5 cursor-pointer" />
            <img src={plus} alt="New" className="w-6 h-6 cursor-pointer hover:brightness-75" />
          </div>
        </div>

        {/* Sorting */}
        <div className="flex flex-col gap-3 px-5 py-4 mt-20">
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-medium text-gray-600">Newest First</h1>
            <img src={sort} alt="Sort" className="w-6 h-6 cursor-pointer" />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 mt-3">
            <button className="px-4 py-1 text-sm bg-gray-200 hover:bg-blue-500 hover:text-white rounded-md transition">
              All
            </button>
            <button className="p-1 bg-gray-200 hover:bg-blue-500 rounded-md transition">
              <img src={pencil} alt="Pencil" className="w-5 h-5" />
            </button>
          </div>
        </div>
        Still Development
      </div>
    </section>
  );
}

export default MessageCenter;
