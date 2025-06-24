import React from 'react';
import { Link } from 'react-router-dom';

function MessageRight() {
  return (


    <section className='flex relative border-l-[1px] border-r-[1px]  border-gray-400' >
        <div  className='w-[604px] relative h-full overflow-y-auto flex items-center justify-center'>

            <h1 className='text-3xl font-semibold'>Please subscribe to a creator to access this <span className='text-center block'>feature</span></h1>

        </div>
    </section>
  )
}

export default MessageRight;
