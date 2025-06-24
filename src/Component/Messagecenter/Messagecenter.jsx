import React from 'react';
import search from '../../assets/Icons_Images/icons8-search-50.png';
import plus from '../../assets/Icons_Images/icons8-plus-24.png';
import Pencil from '../../assets/Icons_Images/icons8-pencil-32.png'
import sort from '../../assets/Icons_Images/icons8-sorting-50.png'
import { Link } from 'react-router-dom';

function MessageCenter() {
  return (


    <section className='flex relative border-l-[1px] border-r-[1px]  border-gray-400' >
        <div  className='w-[395px] relative h-full overflow-y-auto'>
            <div className='flex justify-between items-center p-3  border-b-[1px] border-gray-300 h-[56px]  sticky w-full  z-10 bg-white top-0 '>
              <div className='flex items-center gap-3'>
                <Link to='/Dashboard'>
                          <h1 className='text-[40px]'> &larr;</h1>
                </Link>
                <h1 className='text-xl font-bold'>MESSAGES</h1>
              </div>
              <div className='flex items-center gap-3'>
                <img src={search} alt='Menu-vertical' className='w-[25px] h-[25px]'/>
                <img src={plus} alt='Menu-vertical' className='w-[30px] h-[30px] bg-black'/>
              </div>
            </div>
            <div className='flex  flex-col gap-3 px-5 py-5'>
              <div className='flex justify-between px-1'>
                <h1 className='font-semibold text-gray-500'>NEWEST FIRST</h1>
                           <h1>
                  <img src={sort} className= " w-[25px] h-[25px] rounded-full object-center"/>
                </h1>
              </div>
              <div className='flex gap-2 my-3'>
                              <div className='flex items-center w-fit  active:bg-blue-500 bg-gray-300 px-5  rounded-full'>
                <h1>All</h1>
              </div>
              <div  className='flex items-center w-fit gap-3 active:bg-blue-500 bg-gray-300 px-2 rounded-full'>
                <h1>
                  <img src={Pencil} className= " w-[25px] h-[25px] rounded-full object-center"/>
                </h1>
              </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default MessageCenter;
