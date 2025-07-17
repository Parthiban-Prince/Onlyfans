import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SideNavigation.css';
import { api } from '../../api/api';
import { IoAddOutline, IoBookmarkOutline, IoCardOutline, IoChatbubbleEllipsesOutline, IoCloseCircleOutline, IoEllipsisHorizontalOutline, IoExitOutline, IoHelpCircleOutline, IoHomeOutline,IoLanguageOutline,IoMoonOutline,IoNotificationsOutline, IoPeopleOutline, IoPersonAddOutline, IoPersonCircleOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";

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
        const res = await fetch(`${api}/api/my/profile`, {
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
          <div className="fixed right-auto top-5 h-fit lg:w-[270px] bg-white shadow-lg z-[10000] transition-all rounded-md">
            <div className="flex flex-col px-5 py-4 h-full overflow-y-auto">
              <div className="flex justify-between items-center">
                <button className="border-2 border-blue-500 rounded-full overflow-hidden w-12 h-12">
                  <img
                    src={user?.profilePhoto || 'https://img.icons8.com/?size=100&id=bjHuxcHTNosO&format=png'}
                    alt="Profile"
                    className="w-full h-full object-cover object-center"
                  />
                </button>
                <button className="font-bold hover:text-red-500" onClick={handleClose}><IoCloseCircleOutline className='w-6 h-6' /></button>
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
                    <IoPersonOutline className="w-6 h-6" />
                    <span className="hidden s:inline">My Profile</span>
                  </Link>
                  <Link to="/my/collection/user-lists/subscribers/active" className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <IoBookmarkOutline className="w-6 h-6" />
                    <span className="hidden s:inline">Collection</span>
                  </Link>
                  <Link to="/my/settings/profile" className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <IoSettingsOutline className="w-6 h-6" />
                    <span className="hidden s:inline">Settings</span>
                  </Link>
                </div>

                <div className="border-b pb-4">
                  <Link to="/my/payments/add_card" className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <IoCardOutline className="w-6 h-6" />
                    <span className="hidden s:inline">Your Card (to subscribe)</span>
                  </Link>
                  <Link className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <IoPersonAddOutline className="w-6 h-6" />
                    <span className="hidden s:inline">Become a Creator (to earn)</span>
                  </Link>
                </div>

                <div className="border-b pb-4">
                  <Link onClick={darkMode} className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <IoHelpCircleOutline className="w-6 h-6" />
                    <span className="hidden s:inline">Help and Support</span>
                  </Link>
                  <Link onClick={darkMode} className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <IoMoonOutline className="w-6 h-6" />
                    <span className="hidden s:inline">Dark Mode</span>
                  </Link>
                  <Link onClick={darkMode} className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <IoLanguageOutline className="w-6 h-6" />
                    <span className="hidden s:inline">English</span>
                  </Link>
                </div>

                <div>
                  <Link onClick={handleLogut} className="flex items-center gap-4 p-2 hover:bg-red-50  rounded-lg">
                    <IoExitOutline className="w-6 h-6 rotate-180" />
                    <span className="hidden s:inline text-red-500">Logout</span>
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
          <IoHomeOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Home</span>
        </Link>
        <Link to="/my/notification" className="flex items-center gap-3">
          <IoNotificationsOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Notifications</span>
        </Link>
        <Link to="/my/chats" className="flex items-center gap-3">
          <IoChatbubbleEllipsesOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Message</span>
        </Link>
        <Link to="/my/collection/user-lists/subscribers/active" className="flex items-center gap-3">
          <IoBookmarkOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Collection</span>
        </Link>
        <Link to="/my/collections/user-lists/subscriptions" className="flex items-center gap-3">
          <IoPeopleOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Subscriptions</span>
        </Link>
        <Link to="/my/payments/add_card" className="flex items-center gap-3">
          <IoCardOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Add Card</span>
        </Link>
        <Link to='/Profile' className="flex items-center gap-3">
          <IoPersonCircleOutline className="w-8 h-8" />
          <span className="hidden lg:inline">My Profile</span>
        </Link>
        <button onClick={handleClick} className="flex items-center gap-3">
          <IoEllipsisHorizontalOutline className="w-8 h-8" />
          <span className="hidden lg:inline font-medium">More</span>
        </button>
        <Link to="/posts/create" className="flex items-center gap-3 bg-[#00aff0] text-white rounded-full h-[50px] px-4 justify-center">
          <IoAddOutline className="w-6 h-6" />
          <span className="hidden lg:inline">NEW POST</span>
        </Link>
      </nav>
    </section>
  );
}

export default SideNavigation;
