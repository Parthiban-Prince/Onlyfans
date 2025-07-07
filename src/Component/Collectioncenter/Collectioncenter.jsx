import React from 'react';
import search from '../../assets/Icons_Images/icons8-search-50.png';
import plus from '../../assets/Icons_Images/icons8-plus-24.png';
import sort from '../../assets/Icons_Images/icons8-sorting-50.png';
import { Link } from 'react-router-dom';

function CollectionCenter() {
  return (
    <section className="flex  relative border-l border-r border-gray-400">
      <div className="w-full sm:w-[395px] relative h-full overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300 h-[56px] sticky top-0 z-10 bg-white">
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <span className="text-[28px] font-bold cursor-pointer">&larr;</span>
            </Link>
            <h1 className="text-lg font-semibold">COLLECTIONS</h1>
          </div>
          <div className="flex items-center gap-3">
            <img src={search} alt="Search" className="w-[22px] h-[22px] cursor-pointer" />
            <img src={plus} alt="Add" className="w-[26px] h-[26px] bg-black rounded-full p-1 cursor-pointer" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 py-4">
          {/* Tabs */}
          <div className="flex justify-evenly text-sm font-medium border-b border-gray-300 px-5 py-2">
            <h2 className="cursor-pointer hover:text-[#00aff0]">USER LISTS</h2>
            <h2 className="cursor-pointer hover:text-[#00aff0]">BOOKMARKS</h2>
          </div>

          {/* Sort */}
          <div className="flex justify-between items-center px-5 py-2">
            <h3 className="text-sm font-semibold text-gray-600">CUSTOM ORDER</h3>
            <img src={sort} alt="Sort" className="w-6 h-6 cursor-pointer" />
          </div>

          {/* List Items */}
          <div className="flex flex-col divide-y divide-gray-200 text-sm">
            {['FANS', 'Following', 'Restricted', 'Blocked'].map((title) => (
              <div key={title} className="px-5 py-3">
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="text-gray-400 text-sm">empty</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionCenter;
