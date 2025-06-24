import React from 'react';
import Poll from '../../assets/Icons_Images/icons8-poll-horizontal-48.png'
import UploadImage from '../../assets/Icons_Images/icons8-image-24.png'
import Text from '../../assets/Icons_Images/icons8-font-size-16.png'
import Quiz from '../../assets/Icons_Images/icons8-ask-question-16.png'
import { Link } from 'react-router-dom';

function Postcenter() {
  return (


    <section className='flex relative border-l-[1px] border-r-[1px]  border-gray-400' >
        <div  className='w-[632px] relative h-full overflow-y-auto'>
            <div className='flex justify-between items-center p-3  border-b-[1px] border-gray-300 h-[56px]  sticky w-full  z-10 bg-white top-0 '>
              <div className='flex items-center gap-3'>
                <Link to='/Dashboard'>
                          <h1 className='text-[40px]'> &larr;</h1>
                </Link>
                <h1 className='text-xl font-bold'>NEW POST</h1>
              </div>
              <div className='flex items-center gap-3 bg-gray-400 p-2 rounded-full w-30 h-10 justify-center'>
                <h1 className='font-bold text-white'>Post</h1>
              </div>
            </div>

<div className='w-full z-10 '>
                <form className='flex justify-center items-center'>
                    <input type='textarea' placeholder='Compose New Post...' className=' w-full h-[76px] px-3'/> 
                </form>
              <div className='flex border-b-[1px] border-gray-300 p-2 object-contain gap-5' >
                    <img src={UploadImage}  className="w-[30px] h-[30px] object-contain" />
                    <img src={Poll} className="w-[30px] h-[30px] "  />
                    <img src={Quiz} className="w-[30px] h-[30px]"  />
                    <img src={Text} className="w-[30px] h-[30px] object-contain "  />
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Postcenter;