import React from 'react'
import Card from './card'


function Suggestioncard() {
  return (
    <section className='hidden lg:block lg:w-[368px] ml-4   py-5  relative z-10' >
            <div className='fixed left-auto flex flex-col gap-3  px-[16px] md:w-[368px]' >
                    <div>
                            <input type='text' placeholder='Search Posts' className='w-full h-[40px] px-3 border border-gray-300 rounded-md' />
                          </div>
                          <div className='flex justify-between items-center'>
                          <h1 className='text-xl font-bold'>Suggestions for you</h1>
                          <p className='text-gray-500'>See all</p>
                          </div>
                            <Card/>
                  </div>

    </section>
  )
}

export default Suggestioncard