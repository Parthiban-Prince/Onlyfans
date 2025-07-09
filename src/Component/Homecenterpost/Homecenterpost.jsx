import React from 'react';
import { useState,useRef } from 'react';
import Play from '../../assets/Icons_Images/play.png'
import Suggestioncard from '../Suggestioncard/Suggestioncard';
import Card from '../Suggestioncard/card';
import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png'




function HomeCenterPost() {


        const videoref = useRef(null)
        const[isPlaying,setIsPlaying]=useState(false)
    
    
        function handleplay(){
            if(videoref.current){
                videoref.current.play();
                setIsPlaying(true)
            }
        }
    

  return (
    <div className='w-[380px]md:max-w-[856px] w-full mb-10 rounded-md overflow-hidden border border-gray-200 shadow-sm'>

      {/* Header */}
      <div className='flex justify-between items-center px-4 py-3'>
        <div className='flex items-center gap-3'>
          <img
            src='https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000'
            alt='OnlyFans Logo'
            className='w-[50px] h-[50px] object-cover object-top rounded-full'
          />
          <div className='leading-4'>
            <h1 className='font-bold text-sm'>OnlyFans ✅</h1>
            <p className='text-gray-600 text-sm'>@onlyfans</p>
          </div>
        </div>
        <p className='text-gray-500 text-sm'>8 hours ago</p>
      </div>

      {/* Caption */}
      <div className='px-4 pb-3 text-[15px] text-gray-800 leading-5'>
        Ready to tee it up with <span className='text-blue-500'>@karinhart.golf</span>? Tag along as she plays three holes at a stunning Florida course—nothing but fairways and solid swings. 🏌️‍♀️ ⛳
        <br />
        <a href='https://onlyfans.com/karinhart.golf' className='text-blue-500 block'>
          onlyfans.com/karinhart.golf / onlyfans.com/oftv
        </a>
      </div>

      {/* Preview Image */}

    <div className="relative w-full h-[481px] -z-1">
      {!isPlaying && (
        <>
          <img
            src="https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000"
            alt="Thumbnail"
            className="absolute inset-0 w-full h-full object-cover z-1  cursor-pointer"
            onClick={handleplay}
          />
          <img
            src={Play}
            className="absolute z-20 w-[60px] h-[60px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 hover:bg-blue-500 rounded-full transition duration-300 ease-in-out cursor-pointer"
            alt="Play video"
            title="Play video"
            onClick={() => setIsPlaying(true)}
          />
        </>
      )}
      <video
        ref={videoref}
        src="https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000"
        controls
        className="absolute inset-0 w-full h-full object-cover  z-0"
        onPlay={() => setIsPlaying(true)}
      />
    </div>
    

      {/* Profile Card */}
         <div className='flex px-4 pt-4'>
                        <div className='relative w-full'>
                            <img src='https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000' alt='Profile' className='w-full h-[128px] flex rounded-md object-cover'/>
                            <img src={Menu} alt='Menu-vertical' className='absolute top-2 right-2 w-[24px] h-[24px] z-10' />
                            <div className=' absolute top-0 left-0 w-full h-full rounded-md  z-0 '>
                                                    <div className='absolute top-0 left-0 w-full h-full  rounded-md bg-[rgba(0,0,0,25%)]'>
                              <img src='https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000' alt='Profile' className=' w-[96px] h-[96px] flex rounded-full z-1 object-cover absolute top-5 left-10'/>
                            </div>
                            <div className='bg-linear-to-br from-green-300-900 to-dark-900  rounded-md z-2'>
                              <div className=' absolute left-36 top-15 flex flex-col  bg-linear-to r from-cyan-400 to-light-300 '>
                                <h1 className='text-white font-bold text-lg'>Onlyfans</h1>
                              <p className='text-white'>@onlyfans</p>
                              </div>
                            </div>
                              </div>
                        </div>
                      </div>






      {/* Action Buttons Below Card */}
      <div className='flex  justify-between px-4 py-3 mt-2'>
        <div className='flex gap-7'>
                    <button title='Like'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/833/833472.png'
            alt='Like'
            className='w-6 h-6'
          />
        </button>
        <button title='Comment'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/1380/1380338.png'
            alt='Comment'
            className='w-6 h-6'
          />
        </button>
        <button title='Send Tip'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png'
            alt='Send Tip'
            className='w-6 h-6'
          />
        </button>
        </div>
        <div>
        <button title='Bookmark'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png'
            alt='Bookmark'
            className='w-6 h-6'
          />
        </button>
        </div>
      </div>

      {/* Like Count */}
      <div className=' px-5 text-sm text-gray-600 pb-4'>83 likes</div>
    </div>

  );
}

export default HomeCenterPost;
