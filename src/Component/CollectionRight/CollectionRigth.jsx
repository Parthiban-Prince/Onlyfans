import React from 'react';
import search from '../../assets/Icons_Images/icons8-search-50.png';
import sort from '../../assets/Icons_Images/icons8-sorting-50.png';
import UserCard from '../userCard/UserCard';

function CollectionRight() {
  return (
    <section className="flex border-r border-gray-300 w-[640px] h-dvh">
      <div className="w-full sm:w-[640px] h-full overflow-y-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300 h-[56px] sticky top-0 z-10 bg-white">
          <h1 className="text-lg font-semibold">FANS</h1>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-4 px-4 py-4">

          {/* Tabs */}
          <div className="flex justify-evenly border-b border-gray-200 pb-2 text-sm font-medium text-gray-600">
            <button className="hover:text-[#00aff0] transition">USERS</button>
            <button className="hover:text-[#00aff0] transition">POSTS</button>
          </div>

          {/* RECENT and Icon actions */}
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold text-gray-500 px-1">RECENT</h2>
            <div className="flex gap-3 pr-1">
              <button>
                <img src={search} alt="Search" className="w-[24px] h-[24px] hover:opacity-80" />
              </button>
              <button>
                <img src={sort} alt="Sort" className="w-[24px] h-[24px] hover:opacity-80" />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-3 flex-wrap sm:flex-nowrap overflow-x-auto px-1">
            {['All', 'Active', 'Expired', 'Restricted', 'Blocked'].map((label, idx) => (
              <div
                key={idx}
                className="bg-gray-200 text-sm text-gray-700 px-4 py-1 rounded-full font-medium cursor-pointer hover:bg-[#00aff0] hover:text-white transition whitespace-nowrap"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Empty Placeholder (optional for now) */}
          <div className="flex justify-center items-center h-40 text-gray-400 text-sm">


          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionRight;
