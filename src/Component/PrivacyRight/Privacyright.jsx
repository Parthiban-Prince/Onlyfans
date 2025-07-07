import React from 'react';

export default function Privacysettings() {
  return (
    <section className="flex relative border border-gray-400">
      <div className="w-[632px]">
        {/* Header */}
        <div className="flex items-center p-3 border-b border-gray-300 h-[56px] sticky w-full z-10 bg-white top-0">
          <h1 className="text-lg font-bold tracking-wide">PRIVACY AND SAFETY</h1>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 px-5 py-5 text-sm text-gray-700">
          {/* Profile Settings */}
          <div>
            <h2 className="font-semibold text-gray-800 border-b pb-1 mb-2 uppercase text-[13px]">
              Profile
            </h2>

            {/* Setting 1 */}
            <div className="flex justify-between items-center border-b py-2">
              <span>Show activity status</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-500" />
            </div>

            {/* Setting 2 */}
            <div className="flex justify-between items-center border-b py-2">
              <span>Show subscription offers</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
