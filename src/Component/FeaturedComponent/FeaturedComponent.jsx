import React from 'react'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
function FeaturedComponent() {
  return (
    <section className=' pt-8'>
        <div className='flex mb-10 justify-center text-center'>
            <h1 className='text-5xl text-center'>Latest Featured Posts</h1>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <FeaturedCard/>
          <FeaturedCard/>
          <FeaturedCard/>
          <FeaturedCard/>
          <FeaturedCard/>
          <FeaturedCard/>
        </div>


                            

    </section>
  )
}

export default FeaturedComponent