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
import { IoArrowBackOutline, IoEllipsisHorizontal, IoEllipsisVertical, IoHomeOutline, IoPersonCircle, IoPersonCircleOutline, IoPersonOutline } from 'react-icons/io5';


function PublicSidenav() {

  return (
    <section id="Side">

      <nav className='fixed left-auto flex flex-col gap-5 overflow-y-hidden mt-[20px]' id='blackout'>
        <button className=' rounded-full w-fit h-fit object-container overflow-hidden'>
          <IoPersonCircleOutline className='w-[36px] h-[36px]' />
        </button>
        <Link  className='flex items-center gap-5'><IoHomeOutline alt='Home' className='w-[33px] h-[33px] object-contain' /><span>Home</span></Link>
        <Link  className='flex items-center gap-5'><IoEllipsisHorizontal alt='More' className='w-[33px] h-[33px] object-contain ' /><span>More</span></Link>
      </nav>
    </section>
  );
}

export default PublicSidenav;
