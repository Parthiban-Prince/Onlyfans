import React from 'react'
import { Link } from 'react-router-dom'

export default function Subscriptionsettings() {
  return (




    <section className='flex relative border-[1px] border-gray-400 ' >
        <div  className='w-[632px]'>
            <div className='flex justify-between items-center p-3  border-b-[1px] border-gray-300 h-[56px]  sticky w-full  z-10 bg-white top-0 '>
                <h1 className='text-xl font-bold'>PRIVACY AND SAFETY</h1>

            </div>
                            <div className='flex gap-1 flex-col my-5'>
                                <label placeholder='Price per Month'>
                                     <input type='number' placeholder='$ Free'/>
                                </label>
                                <p>
                                    Minimum $0 USD or free
                                </p>
                                <p>You must <span> Add a Account or Payment Information before you can set your price or accept tips</span></p>
                                <div className='flex justify-end gap-10'>
                                    <button>cancel</button>
                                    <button>Save</button>
                                </div>
                                <div className='uppercase font-semibold' >
                                    <button>Profile Promotions</button>
                                    <button>Free trails Links</button>
                                    <button>Tracking Links</button>
                                </div>
                            </div>
                            <div>
                                <h1>Profile promotion campaign</h1>
                                <p>Offer a free trial or a discounted subscription on your profile for a limited number of new or already expired subscribers.</p>
                                <button>Start Promotion campaign</button>
                            </div>
                            <div>
                                <h1>Subscription bundles</h1>
                                <p>Offer several months of subscription as a discounted bundle.</p>
                                <button>ADD BUNDLE</button>
                            </div>
            </div>
    </section>
  )
}


