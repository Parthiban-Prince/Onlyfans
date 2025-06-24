import React, { useRef, useState } from 'react'
import Profile from '../../assets/images/OnlyFans_Logo_Icon_Blue.png'
import Play from '../../assets/Icons_Images/play.png'



function FeaturedCard() {




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
            <div className='max-w-[856px] max-h-[641px] h-[641px] mb-[50px] rounded-sm overflow-hidden shadow-xs shadow-black relative box-border '>
                <div className='flex justify-between relative'>
                    <div className='flex px-4 py-3'>
                        <img src = {Profile} alt='Profile' className='w-[48px] h-[48px]'/>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-bold'>Onlyfans
                            </h1>
                            <p>@onlyfans</p>
                        </div>
                    </div>
                    <div className='px-4 py-1'>
                        3 hours ago
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
                <div className='h-[481px] max--full relative box-border'>
                    {!isPlaying && 
                    (<>
                                            <img src='https://res.cloudinary.com/dri7edc3h/image/upload/v1749891332/kayadu/ipwbjagjdunrcuizwa66.jpg' 
                        className='w-full absolute top-0 left-0 z-1 h-[481px] object-cover'
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
            </div>
        </>

  )
}

export default FeaturedCard