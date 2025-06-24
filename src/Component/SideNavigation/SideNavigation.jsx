import React from 'react'
import Home from '../../assets/Icons_Images/icons8-home-24.png'
import Notification from '../../assets/Icons_Images/icons8-notification-32.png'
import Message from '../../assets/Icons_Images/icons8-message-48.png'
import Subscriptions from '../../assets/Icons_Images/steptodown.com291011.jpg'
import AddCard from '../../assets/Icons_Images/icons8-card-24.png'
import Account from '../../assets/Icons_Images/icons8-profile-50.png'
import More from '../../assets/Icons_Images/icons8-menu-vertical-32.png'
import plus from '../../assets/Icons_Images/icons8-plus-24.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'



function SideNavigation() {

  const [isOpen, setIsOpen] = useState(false);

  const handleclick = () => {

    if (isOpen) {
      document.getElementById('blackout').style.overflow = 'hidden';
    }
    else {  
    setIsOpen(true);
   }
  }

  return (
    <section className='w-[280px] ml-4 basis-[280px]  py-5  relative z-10'>


      {
        isOpen && (
          <div className='absolute inset-0 h-[700px] w-[300px] bg-white shadow-2xl shadow-dark-300  z-20 justify-center' onClick={() => setIsOpen(false)}>
            <div className='flex  items-center justify-between px-5 py-3 border-b'>
            <nav className='sticky top-5 left-0 flex flex-col gap-5 px-[16px] overflow-y-hidden' >
            <button className='border rounded-full w-fit h-fit object-container overflow-hidden'><img src='https://res.cloudinary.com/dri7edc3h/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1750312122/kayadu/jz20kkexqy0yp6emxlpi.jpg' alt='Profile' className='w-[36px] h-[36px] object-cover'/></button>
            
            
            <div>
                                <Link  className='flex items-center gap-5'><img src={Account} alt='Account' className='w-[33px] h-[33px] object-contain'/><span>My profile</span></Link>
                                <Link className='flex items-center gap-5'><img src={Message} alt='Message' className='w-[33px] h-[33px] object-contain'/><span>Collection</span></Link>
                                <Link className='flex items-center gap-5'><img src={Message} alt='Message' className='w-[33px] h-[33px] object-contain'/><span>Settings</span></Link>
            </div>
            <div>
                                        
                                <Link  className='flex items-center gap-5'><img src={AddCard} alt='AddCard' className='w-[33px] h-[33px] object-contain'/><span>Your card<span>to subsrcribe</span></span></Link>
                                <Link  className='flex items-center gap-5'><img src={Subscriptions} alt='Subscriptions' className='w-[33px] h-[33px] object-contain'/><span>Become a creator</span></Link>

                                    </div>

                                      <div>
                                <Link  className='flex items-center gap-5'><img src={Account} alt='Account' className='w-[33px] h-[33px] object-contain'/><span>Help and support</span></Link>
                  <Link className='flex items-center gap-5'><img src={Message} alt='Message' className='w-[33px] h-[33px] object-contain'/><span>Dark Mode</span></Link>
                                    <Link className='flex items-center gap-5'><img src={Message} alt='Message' className='w-[33px] h-[33px] object-contain'/><span>English</span></Link>
            </div>

              <div>
                                    <Link className='flex items-center gap-5'><img src={Message} alt='Message' className='w-[33px] h-[33px] object-contain'/><span>Logout</span></Link>
            </div>

                </nav>
            </div>
          </div>)
      }
        <nav className='sticky top-5 left-0 flex flex-col gap-5 px-[16px] overflow-y-hidden' id='blackout' >
            <button className='border rounded-full w-fit h-fit object-container overflow-hidden'>
              <img src='https://res.cloudinary.com/dri7edc3h/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1750312122/kayadu/jz20kkexqy0yp6emxlpi.jpg' alt='Profile' className='w-[36px] h-[36px] object-cover'/>
            </button>
            <Link to='/dashboard' className='flex items-center gap-5'><img src={Home} alt='Profile' className='w-[33px] h-[33px] object-contain'/>
            <span>Home</span>
            </Link>
            <Link  to='/my/notification' className='flex items-center gap-5'><img src={Notification} alt='Notification' className='w-[33px] h-[33px] object-contain'/>
            <span>Notifications</span>
            </Link>
            <Link className='flex items-center gap-5'><img src={Message} alt='Message' className='w-[33px] h-[33px] object-contain'/>
            <span>Message</span>
            </Link>
            <Link className='flex items-center gap-5'><img src={Message} alt='Message' className='w-[33px] h-[33px] object-contain'/>
            <span>Collection</span>
            </Link>
            <Link  className='flex items-center gap-5'><img src={Subscriptions} alt='Subscriptions' className='w-[33px] h-[33px] object-contain'/>
            <span>Subscriptions</span>
            </Link>
            <Link  to='/my/payments/addcard'  className='flex items-center gap-5'><img src={AddCard} alt='AddCard' className='w-[33px] h-[33px] object-contain'/>
            <span>Add card</span>
            </Link>
            <Link  className='flex items-center gap-5'><img src={Account} alt='Account' className='w-[33px] h-[33px] object-contain'/>
            <span>My profile</span>
            </Link>
            <Link onClick={handleclick} className='flex items-center gap-5 '><img src={More} alt='More' className='w-[33px] h-[33px] object-contain rotate-90'/>
            <span>More</span>
            </Link>
            <Link  to="/posts/create"  className='flex items-center gap-5 bg-[#00aff0] rounded-full  justify-evenly h-[50px] px-10 text-white box-content  focus:bg-gray-400 transition scroll-smooth'>
            <img src={plus} alt='Profile' className='w-[33px] h-[33px]' />
            <button className='text-center '>NEW POST</button>
            </Link>
        </nav>
    </section>
  )
}

export default SideNavigation