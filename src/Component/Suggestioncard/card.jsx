import React from 'react'
import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png'

function card() {
  return (


             <div className=' flex justify-center py-2 items-center bg-white relative left-0 z-20'>
                  <div className='relative'>
                      <img src='https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg' alt='Profile' className='w-[368px] h-[128px] flex rounded-md object-cover'/>
                      <img src={Menu} alt='Menu-vertical' className='absolute top-2 right-2 w-[24px] h-[24px] z-10' />
                      <div className=' absolute top-0 left-0 w-full h-full rounded-md  z-0'>
                                              <div className='absolute top-0 left-0 w-full h-full  rounded-md bg-[rgba(0,0,0,25%)] '>
                        <img src='https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg' alt='Profile' className=' w-[96px] h-[96px] flex rounded-full z-1 object-cover absolute top-5 left-10'/>
                      </div>
                      <div className='bg-linear-to-br from-green-300-900 to-dark-900  rounded-md z-2'>
                        <div className=' absolute left-36 top-15 flex flex-col  bg-linear-to r from-cyan-400 to-light-300  bg-[rgba(0,0,0,25%)]'>
                          <h1 className='text-white font-bold text-lg'>Onlyfans</h1>
                        <p className='text-white'>@onlyfans</p>
                        </div>
                      </div>
                        </div>
                  </div>
                </div>

  )
}

export default card