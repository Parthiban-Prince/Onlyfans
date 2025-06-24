import menu from '../../assets/Icons_Images/icons8-menu-vertical-32 (1).png'
import { Link } from 'react-router-dom'
import Poll from '../../assets/Icons_Images/icons8-poll-horizontal-48.png'


function Profilecenter() { 
  return (
    <section className='flex  flex-col relative border-[1px] border-gray-400 w-[600px]' >
            <div className='flex w-[600px]'>
                <img src='https://res.cloudinary.com/dri7edc3h/image/upload/v1749639331/Payaldhare/fenhcq6epckwjyg3hqk1.jpg' className=' h-[180px] w-full object-cover object-top'/>
            </div>
            <div className='flex justify-between items-center p-3  border-gray-300 h-[56px]  absolute w-full'>
                <div className='flex gap-5 text-white'>
                    <img src={menu} alt='Menu-vertical' className='rotate-90'/>
                    <h1 className='text-xl font-bold'>Home</h1>
                </div>
                <img src={menu} alt='Menu-vertical'/>
            </div>
            <div className='relative flex justify-between'>
                <div className='relative left-5 bottom-10 w-[100px] bg-gray-300 rounded-full p-1'>
                    <img src='https://res.cloudinary.com/dri7edc3h/image/upload/v1749639331/Payaldhare/fenhcq6epckwjyg3hqk1.jpg' className=' h-[100px] w-[100px] object-cover object-top rounded-full'/>
                </div>
            </div>
            <div className='flex justify-between border-b py-2 border-gray-300'> 
              <div className='flex'>
                <div className='px-5 flex  flex-col gap-1'>
                <h1>Profile</h1>
                <h3>@u507114711 . </h3>
                </div>
 
                <select>
                  <option>Available</option>
                  <option>Invisible</option>
                </select>
              </div>
              <div>
                    <div className='flex gap-10 justify-end px-5'>
                          <button className='rounded-full bg-[#00Aff0] text-white font-semibold px-10  py-3'>
                                    <img src=''/>
                                    Edit Profile</button>
                                     <button className='rounded-full bg-[#00aff0]' >
                                    <img src={Poll}/>
                                 </button>
                </div>
              </div>
            </div>
            <div className=' my-3 border-t border-gray-300'>
              <div className='grid grid-cols-2 text-center py-3 border-b border-gray-300'>
                              <div className='border-r border-gray-300'>
                    <button>NO POST</button>
                </div>
                <div>
                      <button>NO MEDIA</button>
                  </div>
              </div>

            </div>
    </section>
  )
}

export default Profilecenter