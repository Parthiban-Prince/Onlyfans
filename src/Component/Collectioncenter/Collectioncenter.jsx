import React from 'react';
import search from '../../assets/Icons_Images/icons8-search-50.png';
import plus from '../../assets/Icons_Images/icons8-plus-24.png';
import Pencil from '../../assets/Icons_Images/icons8-pencil-32.png'
import sort from '../../assets/Icons_Images/icons8-sorting-50.png'
import { Link } from 'react-router-dom';

function CollectionCenter() {
  return (


    <section className='flex relative border-l-[1px] border-r-[1px]  border-gray-400' >
        <div  className='w-[395px] relative h-full overflow-y-auto'>
            <div className='flex justify-between items-center p-3  border-b-[1px] border-gray-300 h-[56px]  sticky w-full  z-10 bg-white top-0 '>
              <div className='flex items-center gap-3'>
                <Link to='/Dashboard'>
                          <h1 className='text-[40px]'> &larr;</h1>
                </Link>
                <h1 className='text-xl font-semibold'>COLLECTIONS</h1>
              </div>
              <div className='flex items-center gap-3'>
                <img src={search} alt='Menu-vertical' className='w-[25px] h-[25px]'/>
                <img src={plus} alt='Menu-vertical' className='w-[30px] h-[30px] bg-black'/>
              </div>
            </div>
            <div className='flex  flex-col gap-3  py-5 '>
              <div className='flex justify-evenly  border-b border-gray-300 px-5 py-1 '>
                <h1>USER LISTS</h1>
                <h1>BOOKMARKS</h1>
              </div>
              <div className='flex justify-between px-1'>
                <h1 className='font-semibold text-gray-500 px-5'>CUSTOM ORDER</h1>
                           <h1>
                  <img src={sort} className= " w-[25px] h-[25px] rounded-full object-center"/>
                </h1>
              </div>
              <div className='flex flex-col gap-2 my-3'>
                <div className=' px-5 border-b border-gray-300'>
                  <h1 className='font-semibold'>FANS</h1>
                  <h3 className='text-gray-400'>empty</h3>
                </div>
                         <div className=' px-5 border-b border-gray-300'>
                  <h1 className='font-semibold'>Following</h1>
                  <h3 className='text-gray-400'>empty</h3>
                </div>
                         <div className=' px-5 border-b border-gray-300'>
                  <h1 className='font-semibold'>Restricted</h1>
                  <h3 className='text-gray-400'>empty</h3>
                </div>
                         <div className=' px-5 border-b border-gray-300'>
                  <h1 className='font-semibold'>Blocked</h1>
                  <h3 className='text-gray-400'>empty</h3>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default CollectionCenter;
