import React from 'react'
import Logoloading from '../../assets/images/Text_with_Bluelogo.png'

export default function ImageLoading() {
  return (
   <section className="h-dvh bg-white">
  <div className="flex justify-center items-center h-full">
    <img
      src={Logoloading}
      alt="Loading..."
      className="w-1/2    bounce-fade"
    />
  </div>
</section>

    
  )
}
