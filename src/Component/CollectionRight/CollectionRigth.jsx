
import React from 'react';

import search from '../../assets/Icons_Images/icons8-search-50.png';

import sort from '../../assets/Icons_Images/icons8-sorting-50.png'
import { Link } from 'react-router-dom';


function CollectionRight() {
  return (
        <section className='flex  border-r-[1px]  border-gray-400' >
            <div  className='w-[640px] relative h-full'>
                <div className='flex justify-between items-center p-3  border-b-[1px] border-gray-300 h-[56px]  sticky w-full  z-10 bg-white top-0 '>
                  <div className='flex items-center gap-3 px-5'>
                    <h1 className='text-xl font-semibold'>FANS</h1>
                  </div>
                </div>
                <div className='flex  flex-col gap-3  py-5 '>
                  <div className='flex justify-evenly  border-b border-gray-300 px-5 py-1 '>
                    <button>USERS</button>
                    <button>POSTS</button>
                  </div>
                  <div className='flex justify-between px-1'>
                    <div>
                          <h1 className='font-semibold text-gray-500 px-5'>RECENT</h1>
                    </div>
                    <div className='flex gap-5 px-1'>
                                                     <button>
                      <img src={search} className= " w-[25px] h-[25px] rounded-full object-center"/>
                    </button>
                                                   <button>
                      <img src={sort} className= " w-[25px] h-[25px] rounded-full object-center"/>
                    </button>
                    </div>
                  </div>
                  <div className='flex gap-5 px-3'>
                                  <div className='flex items-center  active:bg-blue-500 bg-gray-300 px-5  rounded-full'>
                                    <h1>All</h1>
                                  </div>
                                  <div className='flex items-center gap-3 active:bg-blue-500 bg-gray-300 px-2 rounded-full'>
                                    <h1>Active</h1>
                                  </div>
                                  <div className='flex items-center gap-3 active:bg-blue-500 bg-gray-300 px-2 rounded-full'>
                                    <h1>Expired</h1>
                                  </div>
                                  <div  className='flex items-center gap-3 active:bg-blue-500 bg-gray-300 px-2 rounded-full'>
                                    <h1>Restricted</h1>
                                  </div>
                                  <div  className='flex items-center gap-3 active:bg-blue-500 bg-gray-300 px-2 rounded-full'>
                                    <h1>Blocked</h1>
                                  </div>
                   </div>
                </div>
            </div>
        </section>
  )
}

export default CollectionRight;
