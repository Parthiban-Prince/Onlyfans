import React from 'react'
import X from '../../assets/Icons_Images/x.png'
import Google from '../../assets/Icons_Images/google.png'
 
function footer() {

    let date = new Date()
    let year = date.getFullYear()

  return (
    <footer className='flex border-[1px] border-gray-300 bg-white shadow-xs shadow-black justify-evenly p-5 text-[#8A96A3]'>
        <div className='flex flex-col  items-center gap-3'>
            <h6>©{year} OnlyFans</h6>
            <h6>Contact</h6>
            <div className='flex justify-evenly'>
                <img src={X} className='bg-black w-8 h-8'/>
                <img src={Google} className='w-8 h-8'/>
                <div></div>
            </div>
            <h1>English</h1>
        </div>
        <div className='flex flex-col  items-center gap-3' >
                <ul>
                <li>Help</li>
                <li>Store</li>
                <li>Cookie Notice</li>
                <li>Help</li>
                <li>
                    OnlyFans Safety & Transparency Center
                </li>
                </ul>

        </div>
                <div className='flex flex-col  items-center gap-3' >
                    <ul>
                                        <li>Blog</li>
                <li>Privacy</li>
                <li>USC 2257</li>
                <li>Acceptable Use Policy</li>
                    </ul>
         

          
        </div>
                <div className='flex flex-col  items-center gap-3' >
                    <ul>
                                   
                <li>Branding</li>
                <li>Complaints</li>
                <li>Policy</li>
                    </ul>
  
        </div>
    </footer>
  )
}

export default footer