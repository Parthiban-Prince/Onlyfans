import React from 'react';
import { Link } from 'react-router-dom';

function AddcardCenter() {
  return (


    <section className='flex flex-col   border-l-[1px] border-r-[1px]  border-gray-400 ' >
        <div  className='w-[632px] relative'>
            <div className='flex justify-between items-center p-3  border-b-[1px] border-gray-300 h-[56px]  sticky w-full  z-10 bg-white top-0 '>
              <div className='flex items-center gap-3'>
                <Link to='/Dashboard'>
                          <h1 className='text-[40px]'> &larr;</h1>
                </Link>
                <h1 className='text-xl font-bold'>ADD CARD</h1>
              </div>
              <div className='flex items-center gap-3 p-2 rounded-full w-30 h-10 justify-center'>
                <h1 className=' text-[#00Aff0]'>VERIFY</h1>
              </div>
            </div>
            </div>
            <div className='flex flex-col gap-5 px-5 py-3 w-fit items-center justify-center'>
              <form className='flex flex-col gap-5 w-fit'>
                  <div className='flex flex-col gap-5'>
                    <h1 className='font-bold'>BILLING DETAILS</h1>
                    <p>We are fully compliant with Payment card industry Data Security Standards.</p>
                    <div className='flex flex-col gap-2 '>
                      <div className='flex gap-5 justify-between my-5'>
                          <input  type='text' placeholder='Country' className='w-1/2 h-10 border-[1px] border-gray-300 rounded-md p-2 mt-2' />
                          <input  type='text' placeholder='State/Province' className='w-1/2 h-10 border-[1px] border-gray-300 rounded-md p-2 mt-2' />
                      </div>
                      <input  type='text' placeholder='Address' className='w-2/2 h-10 border-[1px] border-gray-300 rounded-md p-2 mt-2' />
                      <input  type='text' placeholder='City' className='w-2/2 h-10 border-[1px] border-gray-300 rounded-md p-2 mt-2' />
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1 className='font-bold'>CARD DETAILS</h1>
                      <div className='my-5'>
                         <div className='flex justify-between gap-2'>
                              <input  type='email' placeholder='Email' className='w-1/2 h-10 border-[1px] border-gray-300 rounded-md p-2 mt-2' />
                              <input  type='text' placeholder='Name of Card' className='w-1/2 h-10 border-[1px] border-gray-300 rounded-md p-2 mt-2' />
                         </div>

                        <input  type='text' placeholder='Card Number' className='w-2/2 h-10 border-[1px] border-gray-300 rounded-md p-2 mt-2 my-2' />
                        <h6 className='text-[#00aff0] px-1'>My card number is longer</h6>
                        <div className='flex gap-5 my-5'>
                                                    <input  type='text' placeholder='Expiry Date (MM/YY)' className='w-1/2 h-10 border-[1px] border-gray-300 rounded-md p-2 mt-2' />
                          <input  type='text' placeholder='CVV' className='w-1/2 h-10 border-[1px] border-gray-300 rounded-md p-2 mt-2' />
                        </div>
                      </div>
                      <div className='flex px-1 gap-1 my-5'>
                        <input type='checkbox' className='w-fit h-4 mt-2' />
                        <label className='ml-2'>
                          Tick here to confirm that you are at least 18 years old and the age 
                          <span className='block'>of majority in your place of residence</span>
                        </label>
                      </div>
                      <div className='flex justify-end items-center my-10'>
                        <button className='bg-[#00aff0] text-white w-40 text-center rounded-md h-13 ' >Submit</button>
                      </div>
                    </div>
                  </div>
              </form>
            </div>
    </section>
  )
}

export default AddcardCenter;
