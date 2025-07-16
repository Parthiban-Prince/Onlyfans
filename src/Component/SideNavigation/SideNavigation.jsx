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
import './SideNavigation.css';

function SideNavigation() {
  const navigate = useNavigate();
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

  const darkMode = () => alert("This feature is under development.");

  const handleLogut = async () => {
    await localStorage.removeItem("token");
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchProfileData = async () => {
      try {
        const res = await fetch('https://onlyfans.up.railway.app/api/my/profile', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await res.json();
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
    <section id="Side">
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999]" onClick={handleClose}></div>
          <div className="fixed right-auto top-5 h-fit s:w-[270px] bg-white shadow-lg z-[10000] transition-all rounded-md">
            <div className="flex flex-col px-5 py-4 h-full overflow-y-auto">
              <div className="flex justify-between items-center">
                <button className="border-2 border-blue-500 rounded-full overflow-hidden w-12 h-12">
                  <img
                    src={user?.profilePhoto || 'https://img.icons8.com/?size=100&id=bjHuxcHTNosO&format=png'}
                    alt="Profile"
                    className="w-full h-full object-cover object-center"
                  />
                </button>
                <button className="text-xl font-bold hover:text-red-500" onClick={handleClose}>×</button>
              </div>

              <div className="border-b pb-3">
                <h1 className="text-lg font-semibold">{user?.name || 'Username'}</h1>
                <h2 className="text-sm text-gray-500">@{user?.username || 'username'}</h2>
                <div className="flex gap-6 text-sm text-gray-700 mt-2">
                  <span>0 Fans</span>
                  <span>0 Following</span>
                </div>
              </div>

              <nav className="flex flex-col gap-4 text-sm">
                <div className="border-b pb-4">
                  <Link to={`/${user?.username}`} className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <img src="https://img.icons8.com/ios-filled/50/user.png" className="w-6 h-6" />
                    <span className="hidden s:inline">My Profile</span>
                  </Link>
                  <Link to="/my/collection/user-lists/subscribers/active" className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <img src="https://img.icons8.com/ios-filled/50/opened-folder.png" className="w-6 h-6" />
                    <span className="hidden s:inline">Collection</span>
                  </Link>
                  <Link to="/my/settings/profile" className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <img src="https://img.icons8.com/ios-filled/50/settings.png" className="w-6 h-6" />
                    <span className="hidden s:inline">Settings</span>
                  </Link>
                </div>

                <div className="border-b pb-4">
                  <Link to="/my/payments/add_card" className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <img src="https://img.icons8.com/ios-filled/50/bank-card-back-side.png" className="w-6 h-6" />
                    <span className="hidden s:inline">Your Card (to subscribe)</span>
                  </Link>
                  <Link className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <img src="https://img.icons8.com/ios-filled/50/add-user-group-man-man.png" className="w-6 h-6" />
                    <span className="hidden s:inline">Become a Creator (to earn)</span>
                  </Link>
                </div>

                <div className="border-b pb-4">
                  <Link onClick={darkMode} className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <img src="https://img.icons8.com/ios-filled/50/help.png" className="w-6 h-6" />
                    <span className="hidden s:inline">Help and Support</span>
                  </Link>
                  <Link onClick={darkMode} className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <img src="https://img.icons8.com/ios-filled/50/moon-symbol.png" className="w-6 h-6" />
                    <span className="hidden s:inline">Dark Mode</span>
                  </Link>
                  <Link onClick={darkMode} className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <img src="https://img.icons8.com/ios-filled/50/language.png" className="w-6 h-6" />
                    <span className="hidden s:inline">English</span>
                  </Link>
                </div>

                <div>
                  <Link onClick={handleLogut} className="flex items-center gap-4 p-2 hover:bg-red-50 text-red-500 rounded-lg">
                    <img src="https://img.icons8.com/ios-filled/50/logout-rounded.png" className="w-6 h-6" />
                    <span className="hidden s:inline">Logout</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}

      <nav className="fixed left-auto flex flex-col gap-5 mt-5 ml-2 z-[50]">
        <button className="border rounded-full overflow-hidden w-fit h-fit">
          <img src={user?.profilePhoto || 'https://img.icons8.com/?size=100&id=bjHuxcHTNosO&format=png'} className="w-9 h-9 object-cover" />
        </button>
        <Link to={`/${user?.username}`} className="flex items-center gap-3">
          <img src={Home} alt="Home" className="w-8 h-8" />
          <span className="hidden lg:inline">Home</span>
        </Link>
        <Link to="/my/notification" className="flex items-center gap-3">
          <img src={Notification} alt="Notification" className="w-8 h-8" />
          <span className="hidden lg:inline">Notifications</span>
        </Link>
        <Link to="/my/chats" className="flex items-center gap-3">
          <img src={Message} alt="Message" className="w-8 h-8" />
          <span className="hidden lg:inline">Message</span>
        </Link>
        <Link to="/my/collection/user-lists/subscribers/active" className="flex items-center gap-3">
          <img src={Collection} alt="Collection" className="w-8 h-8" />
          <span className="hidden lg:inline">Collection</span>
        </Link>
        <Link to="/my/collections/user-lists/subscriptions" className="flex items-center gap-3">
          <img src={Subscriptions} alt="Subscriptions" className="w-8 h-8" />
          <span className="hidden lg:inline">Subscriptions</span>
        </Link>
        <Link to="/my/payments/add_card" className="flex items-center gap-3">
          <img src={AddCard} alt="AddCard" className="w-8 h-8" />
          <span className="hidden lg:inline">Add Card</span>
        </Link>
        <Link to='/Profile' className="flex items-center gap-3">
          <img src={Account} alt="Account" className="w-8 h-8" />
          <span className="hidden lg:inline">My Profile</span>
        </Link>
        <button onClick={handleClick} className="flex items-center gap-3">
          <img src={More} alt="More" className="w-8 h-8 rotate-90" />
          <span className="hidden lg:inline font-medium">More</span>
        </button>
        <Link to="/posts/create" className="flex items-center gap-3 bg-[#00aff0] text-white rounded-full h-[50px] px-4 justify-center">
          <img src={plus} alt="New Post" className="w-6 h-6" />
          <span className="hidden lg:inline">NEW POST</span>
        </Link>
      </nav>
    </section>
  );
}

export default SideNavigation;
