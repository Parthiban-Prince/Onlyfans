import React from 'react'
import { Link } from 'react-router-dom'

export default function Notificationsettings() {
  return (




    <section className='flex relative border-[1px] border-gray-400 ' >
        <div  className='w-[632px]'>
            <div className='flex justify-between items-center p-3  border-b-[1px] border-gray-300 h-[56px]  sticky w-full  z-10 bg-white top-0 '>
                <h1 className='text-xl font-bold'>NOTIFICATIONS</h1>

            </div>
                            <div className='flex gap-1 flex-col my-5'>
                         
                                <div className='px-5' >
                                    <h1 className='font-semibold border-b'  >Push notifactions</h1>
                                    <h3 className='border-b py-1'>Email notifications</h3>
                                    <h3 className='border-b py-1' >Site notificaitons<span classname='inline'>English</span></h3>
                                    
                                    <h3 className='border-b py-1' >Toast notifications</h3>
                                </div>
                                <div className='px-5' >
                                    <h1 className='font-semibold border-b'  >Other</h1>

                                </div>
                            </div>
            </div>
    </section>
  )
}


