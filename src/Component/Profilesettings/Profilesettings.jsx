import React from 'react'
import { Link } from 'react-router-dom'

export default function Profilesettings() {
  return (




    <section className='flex relative border-[1px] border-gray-400 ' >
        <div  className='w-[632px]'>
            <div className='flex justify-between items-center p-3  border-b-[1px] border-gray-300 h-[56px]  sticky w-full  z-10 bg-white top-0 '>
                <h1 className='text-xl font-bold'>EDIT PROFILE</h1>
                <button className='bg-gray-400 text-white rounded-full px-5 py-1 font-semibold'>SAVE</button>
            </div>
            <div className='w-full z-10 '>
                            <div className='flex w-full'>
                                <img src='https://res.cloudinary.com/dri7edc3h/image/upload/v1749639331/Payaldhare/fenhcq6epckwjyg3hqk1.jpg' className=' h-[180px] w-full object-cover object-top'/>
                            </div>
                            <div className='relative flex justify-between'>
                                <div className='relative left-5 bottom-10 w-[100px] bg-gray-300 rounded-full p-1'>
                                    <img src='https://res.cloudinary.com/dri7edc3h/image/upload/v1749639331/Payaldhare/fenhcq6epckwjyg3hqk1.jpg' className=' h-[100px] w-[100px] object-cover object-top rounded-full'/>
                                </div>
                            </div>
                            <div>
                                <form className='flex flex-col gap-2'>
                                    <input type='text' placeholder="Username" className='border-[1px] w-[590px] px-3 py-2 mx-5 rounded-sm border-gray-300 ' value="@u507114711" />
                                    <input type='text' placeholder="Display name" className='border-[1px] w-[590px] px-3 py-2 mx-5 rounded-sm border-gray-300 ' value="Parthiban" />
                                    <textarea className='border-[1px] resize-none w-[590px] px-3 py-2 mx-5 rounded-sm border-gray-300' placeholder='Bio'></textarea>
                                    <input type='text' placeholder="Location" className='border-[1px] w-[590px] px-3 py-2 mx-5 rounded-sm border-gray-300 '/>
                                    <input type='text' placeholder="Website URl" className='border-[1px] w-[590px] px-3 py-2 mx-5 rounded-sm border-gray-300 ' />
                                    <input type='text' placeholder="Amazon Wishlist" className='border-[1px] w-[590px] px-3 py-2 mx-5 rounded-sm border-gray-300 ' />
                                </form>
                            </div>
                            <div className='flex gap-1 flex-col my-5'>
                                <div className='px-5'>
                                    <h1 className='font-semibold border-b'  >Subscription</h1>
                                    <h3 className='border-b py-1'>Subscription price</h3>
                                </div>
                                 <div className='px-5' >
                                    <h1 className='font-semibold border-b'  >Additional info</h1>
                                    <h3 className='border-b py-1' >Spotify account</h3>
                                    <h3 className='border-b py-1' >Things I Like</h3>
                                </div>
                                 <div className='px-5' >
                                    <h1 className='font-semibold'  >Web3</h1>
                                    <h3 className='border-b py-1' >Web3 avatar</h3>
                                    <h3 className='border-b py-1' >NFTs</h3>
                                </div>
                                 <div className='px-5'>
                                    <h1 className='font-semibold' >Related settings</h1>
                                    <h3 className='border-t py-1' >Privacy and safety</h3>
                                </div>
                            </div>
            </div>
        </div>
    </section>
  )
}


