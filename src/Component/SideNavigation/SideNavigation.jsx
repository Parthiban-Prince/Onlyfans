import React from 'react'
import Home from '../../assets/Icons_Images/icons8-home-24.png'
import Notification from '../../assets/Icons_Images/icons8-notification-32.png'
import Message from '../../assets/Icons_Images/icons8-message-48.png'
import Subscriptions from '../../assets/Icons_Images/steptodown.com291011.jpg'
import AddCard from '../../assets/Icons_Images/icons8-card-24.png'
import Account from '../../assets/Icons_Images/icons8-profile-50.png'
import More from '../../assets/Icons_Images/icons8-menu-vertical-32.png'
import plus from '../../assets/Icons_Images/icons8-plus-24.png'
import Collection from '../../assets/Icons_Images/icons8-bookmark-24.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'



function SideNavigation() {

  const [isOpen, setIsOpen] = useState(false);

  const handleclick = () => {

    setIsOpen(true)
  } 

  const darkMode = ()=>{
    alert("This features is  Under Developed")
  }

  return (
    <section className='w-[280px] ml-4 basis-[280px]  py-5  relative z-10'>


      {
        isOpen && (
         <div className='absolute right-1 h-[680px] w-[300px] bg-white shadow-lg ring-1 ring-blue-400 rounded-xl z-50'>
  <div className='flex flex-col px-5 py-4 gap-5'>

    {/* Header */}
    <div className='flex justify-between items-center'>
      <button className='border-2 border-blue-500 rounded-full overflow-hidden w-[48px] h-[48px]'>
        <img
          src='https://res.cloudinary.com/dri7edc3h/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max/v1750312122/kayadu/jz20kkexqy0yp6emxlpi.jpg'
          alt='Profile'
          className='w-full h-full object-cover'
        />
      </button>
      <button className='text-xl font-bold hover:text-red-500' onClick={() => setIsOpen(false)}>×</button>
    </div>

    {/* User Info */}
    <div className='flex flex-col gap-1 border-b border-gray-300 pb-3'>
      <h1 className='text-lg font-semibold'>Username</h1>
      <h2 className='text-sm text-gray-500'>@ud032932</h2>
      <div className='flex gap-6 text-sm text-gray-700 mt-2'>
        <h1>0 Fans</h1>
        <h1>0 Following</h1>
      </div>
    </div>

    {/* Nav Links */}
    <nav className='flex flex-col gap-4 text-sm'>

      <div className='border-b pb-4'>
        <Link to='/_idu507114711' className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
          <img src='https://img.icons8.com/ios-filled/50/user.png' alt='Account' className='w-[24px] h-[24px]' />
          <span>My Profile</span>
        </Link>
        <Link to='/my/collection/user-lists/subscribers/active' className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
          <img src='https://img.icons8.com/ios-filled/50/opened-folder.png' alt='Collection' className='w-[24px] h-[24px]' />
          <span>Collection</span>
        </Link>
        <Link  to='/my/settings/profile' className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
          <img src='https://img.icons8.com/ios-filled/50/settings.png' alt='Settings' className='w-[24px] h-[24px]' />
          <span>Settings</span>
        </Link>
      </div>

      <div className='border-b pb-4'>
        <Link to='/my/payments/add_card'  className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
          <img src='https://img.icons8.com/ios-filled/50/bank-card-back-side.png' alt='Card' className='w-[24px] h-[24px]' />
          <span>Your Card <span>(to subscribe)</span></span>
        </Link>
        <Link className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
          <img src='https://img.icons8.com/ios-filled/50/add-user-group-man-man.png' alt='Subscriptions' className='w-[24px] h-[24px]' />
          <span>Become a Creator <span>(to earn)</span></span>
        </Link>
      </div>

      <div className='border-b pb-4'>
        <Link onClick={darkMode} className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
          <img src='https://img.icons8.com/ios-filled/50/help.png' alt='Help' className='w-[24px] h-[24px]' />
          <span>Help and Support</span>
        </Link>
        <Link onClick={darkMode}  className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
          <img src='https://img.icons8.com/ios-filled/50/moon-symbol.png
' alt='Dark Mode' className='w-[24px] h-[24px]' />
          <span>Dark Mode</span>
        </Link>
        <Link  onClick={darkMode}  className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
          <img src='https://img.icons8.com/ios-filled/50/language.png' alt='Language' className='w-[24px] h-[24px]' />
          <span>English</span>
        </Link>
      </div>

      <div>
        <Link className='flex items-center gap-4 p-2 hover:bg-red-50 text-red-500 rounded-lg'>
          <img src='https://img.icons8.com/ios-filled/50/logout-rounded.png' alt='Logout' className='w-[24px] h-[24px]' />
          <span>Logout</span>
        </Link>
      </div>

    </nav>
  </div>
</div>
)
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
            <Link  to="/my/chats" className='flex items-center gap-5'><img src={Message} alt='Message' className='w-[33px] h-[33px] object-contain'/>
            <span>Message</span>
            </Link>
            <Link to='/my/collection/user-lists/subscribers/active'  className='flex items-center gap-5'><img src={Collection} alt='Message' className='w-[33px] h-[33px] object-contain'/>
            <span>Collection</span>
            </Link>
            <Link  to='/my/collections/user-lists/subscriptions' className='flex items-center gap-5'><img src={Subscriptions} alt='Subscriptions' className='w-[33px] h-[33px] object-contain'/>
            <span>Subscriptions</span>
            </Link>
            <Link  to='/my/payments/add_card'  className='flex items-center gap-5'><img src={AddCard} alt='AddCard' className='w-[33px] h-[33px] object-contain'/>
            <span>Add card</span>
            </Link>
            <Link   to='/_idu507114711' className='flex items-center gap-5'><img src={Account} alt='Account' className='w-[33px] h-[33px] object-contain'/>
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