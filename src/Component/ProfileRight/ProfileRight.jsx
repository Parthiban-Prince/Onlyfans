import React from 'react'
import Spotify from '../../assets/Icons_Images/icons8-spotify-32.png'



function ProfileRight() {
  return (
    <section className='w-[368px] ml-4 basis-[280px]  py-5  relative z-10' >
            <div className='sticky top-5 left-0 flex flex-col gap-5 px-[16px] w-[368px] h-[128px]' >
                    <div>
                            <input type='text' placeholder="Search user's Post" className='w-full h-[40px] px-3 border border-gray-300 rounded-md' />
                          </div>
                          <div className='flex flex-col justify-between items-cente border gap-10 rounded-sm border-gray-300'>
                            <div className='flex px-4'>
                                 <h1 className='text-xl text-gray-500 font-bold'>SPOTIFY</h1>
                            </div>
                                <div className='flex bg-[#1Db954] rounded-full gap-10 px-5 py-2 m-5'>
                                    <img src={Spotify} className='w-[30px] h-[30px]'/>
                                    <button className='text-white text-center font-semibold'>SIGN IN WITH  SPOTIFY</button>
                                </div>
                          </div>
                  </div>

    </section>
  )
}

export default ProfileRight