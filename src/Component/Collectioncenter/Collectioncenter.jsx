import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IoAddCircleOutline,
  IoArrowBackOutline,
  IoFilterOutline,
  IoSearchOutline
} from 'react-icons/io5';

function CollectionCenter() {
  const [activeTab, setActiveTab] = useState('USER_LISTS');

  return (
    <section className="flex relative border-l border-r border-gray-400 h-dvh">
      <div className="w-full sm:w-[395px] relative h-full overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300 h-[56px] sticky top-0 z-10 bg-white">
          <div className="flex items-center gap-3">
            <Link to="/my/:username">
              <span className="cursor-pointer">
                <IoArrowBackOutline className="w-6 h-6" />
              </span>
            </Link>
            <h1 className="text-lg font-semibold">COLLECTIONS</h1>
          </div>
          <div className="flex items-center gap-3">
            <IoSearchOutline className="w-6 h-6 cursor-pointer" />
            <IoAddCircleOutline className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 py-4">
          {/* Tabs */}
          <div className="flex justify-evenly text-sm font-medium border-b border-gray-300 px-5 py-2">
            <h2
              className={`cursor-pointer hover:text-[#00aff0] ${
                activeTab === 'USER_LISTS' ? 'text-[#00aff0]' : ''
              }`}
              onClick={() => setActiveTab('USER_LISTS')}
            >
              USER LISTS
            </h2>
            <h2
              className={`cursor-pointer hover:text-[#00aff0] ${
                activeTab === 'BOOKMARKS' ? 'text-[#00aff0]' : ''
              }`}
              onClick={() => setActiveTab('BOOKMARKS')}
            >
              BOOKMARKS
            </h2>
          </div>

          {/* Sort */}
          <div className="flex justify-between items-center px-5 py-2">
            <h3 className="text-sm font-semibold text-gray-600">CUSTOM ORDER</h3>
            <IoFilterOutline className="w-6 h-6 cursor-pointer" />
          </div>

          {/* Tab-specific content */}
          <div className="flex flex-col divide-y divide-gray-200 text-sm">
            {activeTab === 'USER_LISTS' && (
              <>
                {['FANS', 'Following', 'Restricted', 'Blocked'].map((title) => (
                  <div key={title} className="px-5 py-3">
                    <h4 className="font-semibold text-gray-800">{title}</h4>
                    <p className="text-gray-400 text-sm">empty</p>
                  </div>
                ))}
              </>
            )}

            {activeTab === 'BOOKMARKS' && (
              <>
                {['All Bookmark'].map((title) => (
                  <div key={title} className="px-5 py-3">
                    <h4 className="font-semibold text-gray-800">{title}</h4>
                    <p className="text-gray-400 text-sm">empty</p>
                  </div>
                ))}
              </>
            )}

            {/* Shared Show All Bookmarks button */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionCenter;
