import React from 'react'
import menu from '../../assets/Icons_Images/icons8-menu-vertical-32.png'
import Poll from '../../assets/Icons_Images/icons8-poll-horizontal-48.png'
import UploadImage from '../../assets/Icons_Images/icons8-image-24.png'
import Text from '../../assets/Icons_Images/icons8-font-size-16.png'
import Quiz from '../../assets/Icons_Images/icons8-ask-question-16.png'
import Pencil from '../../assets/Icons_Images/icons8-pencil-32.png'
import { Link } from 'react-router-dom'
import HomeCenterPost from '../Homecenterpost/Homecenterpost'
import HomeImagePost from '../Homecenterpost/HomeImagePost'


function CenterContent() { 
  return (
    <section className='flex relative h-full  border-l-gray-200 border-b-white border-r-gray-200 border-2' >
        <div  className='w-[632px] relative'>
            <div className='flex justify-between items-center p-3   h-[56px]  fixed w-[inherit]  z-1000 shadow-sm shadow-black/10 bg-white top-0 ' id="Home">
                <h1 className='text-xl font-bold'>Home</h1>
                <img src={menu} alt='Menu-vertical'/>
            </div>
            <div className='w-full z-10 mt-14  shadow-sm shadow-light-900'>
                
                <form className='flex  items-center w-full overflow-hidden'>
                    <Link to='/posts/create' className='w-full h-[76px] flex items-center'>
                         <input type='textarea' placeholder='Compose New Post...' className=' w-full h-[76px] px-3'/> 
                    </Link>

                </form>
                <div className='flex  p-2 object-contain gap-5' >
                    <img src={UploadImage}  className="w-[30px] h-[30px] object-contain" />
                    <img src={Poll} className="w-[30px] h-[30px] "  />
                    <img src={Quiz} className="w-[30px] h-[30px]"  />
                    <img src={Text} className="w-[30px] h-[30px] object-contain "  />
                </div>
            </div>
            <div className='flex gap-5 items-center px-5  mt-5  shadow-gray-300 bg-white py-2'>
                <h3 className=' px-5 text-center rounded-full h-[25px]' >All</h3>
                <h3  className=' px-5 text-center rounded-full h-[25px]' ><img src={Pencil} className= " w-[25px] h-[25px] rounded-full"/></h3>
            </div>
            <div>
                <HomeImagePost/>
                <HomeCenterPost/>
            </div>
        </div>
    </section>
  )
}

export default CenterContent