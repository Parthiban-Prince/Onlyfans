import React from 'react';
import { Link } from 'react-router-dom';
import { IoFilterOutline, IoOptionsOutline, IoSearchOutline } from 'react-icons/io5';


function SubscriptionsRight() {
  return (
        <section className='flex  border-r-[1px]  border-gray-400 h-dvh' >
            <div  className='w-[640px] relative h-full'>
                <div className='flex justify-between items-center p-3  border-b-[1px] border-gray-300 h-[56px]  sticky w-full  z-10 bg-white top-0 '>
                  <div className='flex items-center gap-3 px-5'>
                    <h1 className='text-xl font-semibold'>FOLLOWING</h1>
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
                      <IoSearchOutline className= " w-6 h-6  object-center"/>
                    </button>
                                                        <button>
                      <IoOptionsOutline className= " w-6 h-6  object-center"/>
                    </button>
                                                   <button>
                      <IoFilterOutline className= " w-6 h-6  object-center"/>
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
                                    <h1>Attention required</h1>
                                  </div>
                   </div>
                </div>
            </div>
        </section>
  )
}

export default SubscriptionsRight;
