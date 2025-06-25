import React from 'react';
import menu from '../../assets/Icons_Images/icons8-menu-vertical-32.png';
import settings from '../../assets/Icons_Images/icons8-settings-50.png';
import Pencil from '../../assets/Icons_Images/icons8-pencil-32.png'
import { Link } from 'react-router-dom';

function NotificationCentre() {
  return (


    <section className='flex relative border-l-[1px] border-r-[1px]  border-gray-400' >
        <div  className='w-[632px]'>
            <div className='flex justify-between items-center p-3  border-b-[1px] border-gray-300 h-[56px]  sticky w-full  z-10 bg-white top-0 '>
              <div className='flex items-center gap-3'>
                <Link to='/Dashboard'>
                          <h1 className='text-[40px]'> &larr;</h1>
                </Link>
                <h1 className='text-xl font-bold'>Notifications</h1>
              </div>
              <div className='flex items-center gap-3'>
                <img src={menu} alt='Menu-vertical'/>
                <img src={settings} alt='Menu-vertical' className='w-[30px] h-[30px]'/>
              </div>
            </div>
            <div className='flex justify-between  gap-3 px-5 py-5'>
              <div className='flex items-center  active:bg-blue-500 bg-gray-300 px-5  rounded-full'>
                <h1>All</h1>
              </div>
              <div className='flex items-center gap-3 active:bg-blue-500 bg-gray-300 px-2 rounded-full'>
                <h1>Tags</h1>
              </div>
              <div className='flex items-center gap-3 active:bg-blue-500 bg-gray-300 px-2 rounded-full'>
                <h1>Comments</h1>
              </div>
              <div  className='flex items-center gap-3 active:bg-blue-500 bg-gray-300 px-2 rounded-full'>
                <h1>Mention</h1>
              </div>
              <div  className='flex items-center gap-3 active:bg-blue-500 bg-gray-300 px-2 rounded-full'>
                <h1>Subscriptions</h1>
              </div>
              <div  className='flex items-center gap-3 active:bg-blue-500 bg-gray-300 px-2 rounded-full'>
                <h1>Promotions</h1>
              </div>
              <div  className='flex items-center gap-3 active:bg-blue-500 bg-gray-300 px-2 rounded-full'>
                <h1>
                  <img src={Pencil} className= " w-[25px] h-[25px] rounded-full object-center"/>
                </h1>
              </div>
            </div>
        </div>
    </section>
  )
}

export default NotificationCentre;
