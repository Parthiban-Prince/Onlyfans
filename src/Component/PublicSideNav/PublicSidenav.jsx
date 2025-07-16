import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../assets/Icons_Images/icons8-home-24.png';
import Notification from '../../assets/Icons_Images/icons8-notification-32.png';
import Message from '../../assets/Icons_Images/icons8-message-48.png';
import Subscriptions from '../../assets/Icons_Images/steptodown.com291011.jpg';
import AddCard from '../../assets/Icons_Images/icons8-card-24.png';
import Account from '../../assets/Icons_Images/icons8-profile-50.png';
import More from '../../assets/Icons_Images/icons8-menu-vertical-32.png';
import Collection from '../../assets/Icons_Images/icons8-bookmark-24.png';
import Logut from '../../utils/logout';


function PublicSidenav() {

  return (
    <section id="Side">

      <nav className='fixed left-auto flex flex-col gap-5 overflow-y-hidden mt-[20px]' id='blackout'>
        <button className='border rounded-full w-fit h-fit object-container overflow-hidden'>
          <img src={"https://img.icons8.com/?size=100&id=bjHuxcHTNosO&format=png&color=000000"} alt='Profile' className='w-[36px] h-[36px] object-cover' />
        </button>
        <Link  className='flex items-center gap-5'><img src={Home} alt='Home' className='w-[33px] h-[33px] object-contain' /><span>Home</span></Link>
        <Link  className='flex items-center gap-5'><img src={More} alt='More' className='w-[33px] h-[33px] object-contain rotate-90' /><span>More</span></Link>
      </nav>
    </section>
  );
}

export default PublicSidenav;
