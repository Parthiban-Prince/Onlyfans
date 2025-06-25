import React from 'react';
import { Link } from 'react-router-dom';

function Settingscenter() {
  return (
    <section className='flex relative border-[1px] border-gray-300 shadow-md'>
      <div className='w-[395px] relative h-full overflow-y-auto '>
        {/* Header */}
        <div className='flex justify-between items-center p-3 border-b border-gray-300 h-[56px] sticky w-full z-10 bg-white top-0'>
          <div className='flex items-center gap-3'>
            <Link to='/dashboard'>
              <h1 className='text-[28px] font-bold'>&larr;</h1>
            </Link>
            <h1 className='text-xl font-bold'>SETTINGS</h1>
          </div>
        </div>

        {/* Settings Content */}
        <div className='flex flex-col gap-5 px-5 py-5 '>
          <h1 className='text-lg font-semibold border-b'>@u507114711</h1>

          {/* Main Settings List */}
          <ul className='flex flex-col gap-3'>
            <Link to='/my/settings/profile'className='border-b' >
              <li className='flex justify-between items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer'>
                <span>Profile</span>
                <span>&rarr;</span>
              </li>
            </Link>
            <Link to='/my/settings/account'className='border-b'>
              <li className='flex justify-between items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer'>
                <span>Account</span>
                <span>&rarr;</span>
              </li>
            </Link>
            <Link to='/my/settings/privacy'className='border-b' >
              <li className='flex justify-between items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer'>
                <span>Privacy and Safety</span>
                <span>&rarr;</span>
              </li>
            </Link>
            <Link to='/my/settings/subscription' className='border-b' >
              <li className='flex justify-between items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer'>
                <span>Subscription Price</span>
                <span>&rarr;</span>
              </li>
            </Link>
            <Link to='/my/settings/notifications '  className='border-b'  >
              <li className='flex justify-between items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer'>
                <span>Notifications</span>
                <span>&rarr;</span>
              </li>
            </Link>
          </ul>

          {/* General Section */}
          <div className='mt-5'>
            <h1 className='text-md font-semibold mb-2 border-b '>General</h1>
            <ul className='flex flex-col gap-3'>
              <Link to='/my/settings/display'>
                <li className='flex justify-between items-center hover:bg-gray-100 p-2 rounded-md cursor-pointer'>
                  <span>Display</span>
                  <span>&rarr;</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settingscenter;
