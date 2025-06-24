import React from 'react'
import Card from './card'


function Suggestioncard() {
  return (
    <section className='w-[368px] ml-4 basis-[280px]  py-5  relative z-10' >
            <div className='sticky top-5 left-0 flex flex-col gap-5 px-[16px] w-[368px] h-[128px]' >
                    <div>
                            <input type='text' placeholder='Search Posts' className='w-full h-[40px] px-3 border border-gray-300 rounded-md' />
                          </div>
                          <div className='flex justify-between items-center'>
                          <h1 className='text-xl font-bold'>Suggestions for you</h1>
                          <p className='text-gray-500'>See all</p>
                          </div>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                  </div>

    </section>
  )
}

export default Suggestioncard