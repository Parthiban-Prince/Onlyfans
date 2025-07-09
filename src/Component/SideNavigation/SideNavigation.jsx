import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Home from '../../assets/Icons_Images/icons8-home-24.png';
import Notification from '../../assets/Icons_Images/icons8-notification-32.png';
import Message from '../../assets/Icons_Images/icons8-message-48.png';
import Subscriptions from '../../assets/Icons_Images/steptodown.com291011.jpg';
import AddCard from '../../assets/Icons_Images/icons8-card-24.png';
import Account from '../../assets/Icons_Images/icons8-profile-50.png';
import More from '../../assets/Icons_Images/icons8-menu-vertical-32.png';
import plus from '../../assets/Icons_Images/icons8-plus-24.png';
import Collection from '../../assets/Icons_Images/icons8-bookmark-24.png';
import Logut from '../../utils/logout';
import './SideNavigation.css';

function SideNavigation() {


  const navigate  =useNavigate()

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleClick = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = '';
    setIsOpen(false);
  };

  const darkMode = () => {
    alert("This feature is under development.");
  };


  async function handleLogut(){
  await localStorage.removeItem("token")
  navigate('/')
  }


  useEffect(() => {
    const usertoken = localStorage.getItem("token")



    //https://onlyfans-backend-production.up.railway.app

    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://onlyfans-backend-production.up.railway.app/api/my/:Profile', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${usertoken}`
          }
        });

        const result = await response.json();
        if (result.data) {
          setUser(result.data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error.message);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <section className='w-[280px] ml-4 basis-[280px] py-5 z-10' id="Side">
      {isOpen && (
        <div className='fixed right-auto h-[680px] w-[270px] bg-white shadow-lg shadow-black/20 rounded-xl z-10'>
          <div className='flex flex-col px-5 py-4 gap-5'>
            <div className='flex justify-between items-center'>
              <button className='border-2 border-blue-500 rounded-full overflow-hidden w-[48px] h-[48px]'>
                <img
                  src={user?.profilePhoto || 'https://img.icons8.com/?size=100&id=bjHuxcHTNosO&format=png&color=000000'}
                  alt='Profile'
                  className='w-full h-full object-cover object-top'
                />
              </button>
              <button className='text-xl font-bold hover:text-red-500' onClick={handleClose}>×</button>
            </div>

            <div className='flex flex-col gap-1 border-b border-gray-300 pb-3'>
              <h1 className='text-lg font-semibold'>{user?.name || 'Username'}</h1>
              <h2 className='text-sm text-gray-500'>@{user?.username || 'username'}</h2>
              <div className='flex gap-6 text-sm text-gray-700 mt-2'>
                <h1>0 Fans</h1>
                <h1>0 Following</h1>
              </div>
            </div>

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
                <Link to='/my/settings/profile' className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
                  <img src='https://img.icons8.com/ios-filled/50/settings.png' alt='Settings' className='w-[24px] h-[24px]' />
                  <span>Settings</span>
                </Link>
              </div>

              <div className='border-b pb-4'>
                <Link to='/my/payments/add_card' className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
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
                <Link onClick={darkMode} className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
                  <img src='https://img.icons8.com/ios-filled/50/moon-symbol.png' alt='Dark Mode' className='w-[24px] h-[24px]' />
                  <span>Dark Mode</span>
                </Link>
                <Link onClick={darkMode} className='flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg'>
                  <img src='https://img.icons8.com/ios-filled/50/language.png' alt='Language' className='w-[24px] h-[24px]' />
                  <span>English</span>
                </Link>
              </div>

              <div>
                <Link className='flex items-center gap-4 p-2 hover:bg-red-50 text-red-500 rounded-lg' onClick={handleLogut}>
                  <img src='https://img.icons8.com/ios-filled/50/logout-rounded.png' alt='Logout' className='w-[24px] h-[24px]' />
                  <span>Logout</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      <nav className='fixed left-auto flex flex-col gap-5 overflow-y-hidden' id='blackout'>
        <button className='border rounded-full w-fit h-fit object-container overflow-hidden'>
          <img src={user?.profilePhoto || "https://img.icons8.com/?size=100&id=bjHuxcHTNosO&format=png&color=000000"} alt='Profile' className='w-[36px] h-[36px] object-cover' />
        </button>
        <Link to='/dashboard' className='flex items-center gap-5'><img src={Home} alt='Home' className='w-[33px] h-[33px] object-contain' /><span>Home</span></Link>
        <Link to='/my/notification' className='flex items-center gap-5'><img src={Notification} alt='Notification' className='w-[33px] h-[33px] object-contain' /><span>Notifications</span></Link>
        <Link to="/my/chats" className='flex items-center gap-5'><img src={Message} alt='Message' className='w-[33px] h-[33px] object-contain' /><span>Message</span></Link>
        <Link to='/my/collection/user-lists/subscribers/active' className='flex items-center gap-5'><img src={Collection} alt='Collection' className='w-[33px] h-[33px] object-contain' /><span>Collection</span></Link>
        <Link to='/my/collections/user-lists/subscriptions' className='flex items-center gap-5'><img src={Subscriptions} alt='Subscriptions' className='w-[33px] h-[33px] object-contain' /><span>Subscriptions</span></Link>
        <Link to='/my/payments/add_card' className='flex items-center gap-5'><img src={AddCard} alt='AddCard' className='w-[33px] h-[33px] object-contain' /><span>Add card</span></Link>
        <Link to='/_idu507114711' className='flex items-center gap-5'><img src={Account} alt='Account' className='w-[33px] h-[33px] object-contain' /><span>My profile</span></Link>
        <Link onClick={handleClick} className='flex items-center gap-5'><img src={More} alt='More' className='w-[33px] h-[33px] object-contain rotate-90' /><span>More</span></Link>
        <Link to="/posts/create" className="flex items-center gap-3 bg-[#00aff0] rounded-full justify-center h-[50px] text-white focus:bg-[#0095cc] transition-colors duration-200">
          <img src={plus} alt="Create Post" className="w-[28px] h-[28px]" />
          <span className="font-medium">NEW POST</span>
        </Link>
      </nav>
    </section>
  );
}

export default SideNavigation;
