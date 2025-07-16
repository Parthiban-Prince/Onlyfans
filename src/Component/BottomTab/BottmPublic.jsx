// BottomTab.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../assets/Icons_Images/icons8-home-24.png'
import Notification from '../../assets/Icons_Images/icons8-notification-32.png'
import Message from '../../assets/Icons_Images/icons8-message-48.png'
import Profile from '../../assets/Icons_Images/icons8-profile-50.png'
import './Bottom.css'

export default function BottomPublic() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-300  justify-between px-10 items-center py-2  z-100 flex" id='Bottom'>
      <Link to="/dashboard">
        <img src={Home} alt="Home" className="w-6 h-6" />
      </Link>
      <Link>
        <img src={Profile} alt="Profile" className="w-6 h-6" />
      </Link>
    </div>
  )
}

