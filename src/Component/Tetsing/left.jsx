
import React, { useRef, useState } from 'react'
import Profile from '../../assets/images/OnlyFans_Logo_Icon_Blue.png'
import Play from '../../assets/Icons_Images/play.png'
import Menu from '../../assets/Icons_Images/icons8-menu-vertical-32.png'
import Heart from '../../assets/Icons_Images/icons8-heart-48.png'
import Comment from '../../assets/Icons_Images/icons8-comment-24.png'
import Dollar from '../../assets/Icons_Images/icons8-dollar-50.png'
import Bookmartk from '../../assets/Icons_Images/icons8-bookmark-24 (2).png'

function Left() {




    const videoref = useRef(null)
    const[isPlaying,setIsPlaying]=useState(false)


    function handleplay(){
        if(videoref.current){
            videoref.current.play();
            setIsPlaying(true)
        }
    }


 return (

        <>
            <div className='max-w-[856px] max-h-[750pxpx] h-[750px] mb-[50px] rounded-sm overflow-hidden shadow-xs shadow-black relative box-border'>
                <div className='flex justify-between '>
                    <div className='flex px-4 py-3'>
                        <img src = {Profile} alt='Profile' className='w-[48px] h-[48px]'/>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-bold'>Onlyfans
                            </h1>
                            <p>@onlyfans</p>
                        </div>
                    </div>
                    <div className='px-4 py-1 flex items-center justify-center gap-4'>
                        3 hours ago
                                            <div>
                      <img src= {Menu} alt='Menu' className='rotate-90'/>
                    </div>
                    </div>

                </div>
                <div className='px-4 py-1 mb-3'>
                    <p>
                        @anacheri shares her top bedtime tips to help wind down the right way. From cozy lighting to screen-free rituals, these small shifts can lead to deeper rest and brighter mornings. 🌙💤
                        <span className='block'>
                            onlyfans.com/anacheri / onlyfans.com/oftv
                        </span>
                    </p>
                </div>
                <div className='h-[337px] max--full relative box-border'>
                    {!isPlaying && 
                    (<>
                                            <img src='https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg' 
                        className='w-full absolute top-0 left-0 z-1 h-[337px] object-cover'
                        onClick={handleplay}
                        />
                                                    <img src={Play} className='absolute z-2 w-[60px] h-[60px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-none bg-[#0202028a] hover:bg-blue-500 transition-all ease duration-300'
                                                    title='Play video'
                                                    alt='Play video'
                                                    onClick={()=>setIsPlaying(true)}
                                                    />
                        
                    </>
                    )}
                    <video
                    ref={videoref}
                    src='https://res.cloudinary.com/dri7edc3h/video/upload/v1750321477/Video/yquo0qruy1aqnq1waze8.mp4'
                    controls
                    className='w-full h-full object-cover'
                    onPlay={()=>setIsPlaying(true)}
                    />
                </div>
                <div className='overflow-hidden flex justify-center py-2 items-center bg-white'>
                  <div className='relative'>
                      <img src='https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg' alt='Profile' className='w-[568px] h-[140px] flex rounded-md object-cover'/>
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
                <div className=' h-[44px] px-4 py-1 flex justify-between items-center bg-white'>
                  <div className='flex items-center gap-4'>
                    <img src={Heart} alt='Menu' className='w-[36px] h-[36px]' />
                    <img src={Comment} alt='Menu' className='w-[36px] h-[36px]'/>
                    <img src={Dollar} alt='Menu' className='w-[36px] h-[36px]' />
                  </div>
                  <div className='flex items-center gap-4'>
                    <img src={Bookmartk} alt='Menu'/>
                  </div>
                </div>
                <div className='px-5 flex justify-between items-center bg-white'>
                  <h1>194 likes</h1>
                </div>
            </div>
        </>

  )
}

export default Left