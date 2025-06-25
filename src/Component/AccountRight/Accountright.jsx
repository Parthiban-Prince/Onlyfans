import React from 'react'
import { Link } from 'react-router-dom'

export default function Accountsettings() {
  return (




    <section className='flex relative border-[1px] border-gray-400 ' >
        <div  className='w-[632px]'>
            <div className='flex justify-between items-center p-3  border-b-[1px] border-gray-300 h-[56px]  sticky w-full  z-10 bg-white top-0 '>
                <h1 className='text-xl font-bold'>ACCOUNT</h1>

            </div>
                            <div className='flex gap-1 flex-col my-5'>
                                 <div className='px-5' >
                                    <h1 className='font-semibold border-b'  >Account info</h1>
                                    <h3 className='border-b py-1' >UserName<span className='block'>English</span></h3>
                                    <h3 className='border-b py-1' >Email<span className='block'>Parthiban@gmail.com</span></h3>
                                    <h3 className='border-b py-1' >Phone number<span className='block'></span></h3>
                                </div>
                                <div className='px-5' >
                                    <h1 className='font-semibold border-b'  >Account info</h1>
                                    <h3 className='border-b py-1' >X account<span classname='inline'>English</span></h3>
                                    <h3 className='border-b py-1' >Google account<span classname='block'>Parthiban@gmail.com</span></h3>
                                   
                                </div>
                                <div className='px-5' >
                                    <h1 className='font-semibold border-b'  >Connected accounts</h1>
                                    <h3 className='border-b py-1' >Connect another Onlyfans account<span classname='inline'>English</span></h3>
                         
                                </div>
                                <div className='px-5' >
                                    <h1 className='font-semibold border-b'  >Security</h1>
                                    <h3 className='border-b py-1'>Password</h3>
                                    <h3 className='border-b py-1' >Login sessions<span classname='inline'>English</span></h3>
                                    
                                    <h3 className='border-b py-1' >Two step Authentications<span classname='inline'>Parthiban@gmail.com</span></h3>
                                    <h3 className='border-b py-1' >Passwordless sign in<span classname='inline'></span></h3>
                                </div>
                                <div className='px-5' >
                                    <h1 className='font-semibold border-b'  >Account management</h1>
                                    <h3 className='border-b py-1' >Delete account<span classname='inline'>English</span></h3>
                                </div>
                            </div>
            </div>
    </section>
  )
}


