import React from 'react';

export default function Subscriptionsettings() {
  return (
    <section className="flex relative border border-gray-400 rounded-xl shadow-sm bg-white">
      <div className="w-full max-w-[632px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center px-5 border-b border-gray-300 h-[56px] sticky top-0 z-10 bg-white">
          <h1 className="text-xl font-bold uppercase">SUBSCRIPTION AND PROMOTIONS</h1>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-5">
          {/* Price Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Price per Month</label>
            <input
              type="number"
              placeholder="$ Free"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">Minimum $0 USD or free</p>
            <p className="text-sm text-gray-500 mt-1">
              You must <span className="text-blue-600 underline cursor-pointer">Add a payment method</span> before you can set your price or accept tips.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button className="px-4 py-2 text-gray-600 hover:text-black border border-gray-300 rounded-md">
              Cancel
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save
            </button>
          </div>

          {/* Promotions & Links */}
          <div className="flex flex-col gap-3 mt-6">
            <h2 className="text-sm font-semibold text-gray-800 uppercase mb-2">Tools</h2>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700 font-medium">
              Profile Promotions
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700 font-medium">
              Free Trial Links
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700 font-medium">
              Tracking Links
            </button>
          </div>

          {/* Promotion Campaign Section */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-1">Profile Promotion Campaign</h3>
            <p className="text-sm text-gray-600 mb-3">
              Offer a free trial or a discounted subscription on your profile for a limited number of new or expired subscribers.
            </p>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium">
              Start Promotion Campaign
            </button>
          </div>

          {/* Subscription Bundles Section */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-1">Subscription Bundles</h3>
            <p className="text-sm text-gray-600 mb-3">
              Offer several months of subscription as a discounted bundle.
            </p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm font-medium">
              Add Bundle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
