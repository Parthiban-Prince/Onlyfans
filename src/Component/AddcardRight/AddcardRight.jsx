import React from 'react'
import Paymentbag from '../../assets/Icons_Images/icons8-shopping-bag-50.png'

function AddcardRight() {
  return (
    <section className=' ml-4 py-5 my-5 relative z-10' >
      <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-5  w-[400px]  border-gray-300 border-1 rounded-sm'  >
               <div className='border-b border-gray-300 px-5'>
                      <h1 className='text-3xl font-semibold'>$0</h1>
                      <h3>Wallet credits</h3>
              </div>
              <div className='flex flex-col px-5 gap-5'>
                <h1 className='font-bold text-gray-500'>ADD FUNDS TO YOUR WALLET</h1>
                <button className='bg-[#0aaff0] text-white rounded-full h-[40px] font-medium'>ADD A PAYAMENT CARD</button>
                <div className='flex justify-between gap-5'>
                  <p>Make wallet primary method for rebills</p>
                  <label className='w-[60px] h-[34px]'>
                      <input type="checkbox" className='w-5 h-5' />
                  </label>
                </div>
              </div>
            </div>
                <div className='flex flex-col gap-20  w-[400px] h-[300px] py-5 border-gray-300 border-1 rounded-sm'  >
               <div className='px-5'>
                      <h1 className='text-xl font-semibold text-gray-500'>LATEST TRANSACTIONS</h1>
              </div>
              <div className='flex justify-center gap-5 items-center text-gray-300 flex-col'>
                <img src={Paymentbag} className='w-[30px] h-[30px]'/>
                <h1>No Payments done yet</h1>
              </div>
            </div>
      </div>
    </section>
  )
}

export default AddcardRight