import React, { useEffect, useState } from 'react';
import { Link,NavLink, useLocation } from 'react-router-dom';
import Home from '../../assets/Icons_Images/icons8-home-24.png';
import Notification from '../../assets/Icons_Images/icons8-notification-32.png';
import Message from '../../assets/Icons_Images/icons8-message-48.png';
import Profile from '../../assets/Icons_Images/icons8-profile-50.png';
import CreatePostIcon from '../../assets/Icons_Images/icons8-plus-24.png';
import { IoAddOutline, IoBookmarkOutline, IoCardOutline, IoChatbubbleOutline, IoExitOutline, IoHelpCircleOutline, IoHomeOutline, IoLanguageOutline, IoMoonOutline, IoNotificationsOutline, IoPersonAddOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { api } from '../../api/api';

export default function BottomTab() {
  const [user,setUser] = useState(null);
  const location = useLocation();
  const [showDrawer, setShowDrawer] = useState(false);

  const isActive = (path) => location.pathname.startsWith(path);
  const toggleDrawer = () => setShowDrawer(!showDrawer);



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
        console.log("Profile data fetched:", result.data);
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
    <>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 shadow-md sm:max-w-md sm:mx-auto z-50">
        <div className="flex justify-around items-center px-2 py-3">
          <NavLink to="/dashboard" aria-label="Home" title="Home" className='active:black active:bg-white'>
            <IoHomeOutline
              src={Home}
              alt="Home"
              className={`w-6 h-6 transition-opacity ${isActive('/dashboard') ? 'opacity-100' : 'opacity-60'}`}
            />
          </NavLink>
          <NavLink to="/my/notification" aria-label="Notifications" title="Notifications">
            <IoNotificationsOutline
              src={Notification}
              alt="Notifications"
              className={`w-6 h-6 transition-opacity ${isActive('/my/notification') ? 'opacity-100' : 'opacity-60'}`}
            />
          </NavLink>
          <NavLink to="/posts/create" aria-label="Create Post" title="Create Post" className='border-2 border-gray-500 rounded-sm'>
            <IoAddOutline
              src={CreatePostIcon}
              alt="Create"
              className={`w-6 h-6 transition-opacity ${isActive('/posts/create') ? 'opacity-100' : 'opacity-60'}`}
            />
          </NavLink>
          <NavLink to="/my/chats" aria-label="Messages" title="Messages">
            <IoChatbubbleOutline
              src={Message}
              alt="Messages"
              className={`w-6 h-6 transition-opacity ${isActive('/my/chats') ? 'opacity-100' : 'opacity-60'}`}
            />
          </NavLink>
          <button
            onClick={toggleDrawer}
            aria-label="Profile"
            title="Profile"
            className="focus:outline-none"
          >
            <img src={user?.profilePhoto} alt="Profile" className="w-6 h-6 border rounded-full object-center" />
          </button>
        </div>
      </nav>

      {/* Profile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          showDrawer ? 'translate-x-0 z-[10000]' : 'translate-x-full z-50'
        }`}
      >
        <div className="flex justify-between  p-4 border-b">
          <div className='flex flex-col gap-2'>
            <img src={user?.profilePhoto} alt="Profile" className="w-12 h-12 border rounded-full" />
            <h2 className="text-lg font-bold">{user?.name}</h2>
            <h1>{user?.username}</h1>
            <div className='flex justify-between gap-10 '>
              <div>
                              <h1>@{user?.Fans}Fan</h1>
              </div>
              <div>
                              <h1>{user?.followingCount}Following</h1>
              </div>
            </div>
          </div>
          <div>
             <button onClick={toggleDrawer} className="text-gray-600 hover:text-black text-2xl">&times;</button>
          </div>


        </div>
        <div className="p-4 space-y-4">
          <div className="text-sm  border-b py-5 flex flex-col gap-3">
            <Link to='' className='flex items-center gap-5 font-bold'><IoPersonOutline  className="w-6 h-6" /><h1>My profile</h1></Link>
            <Link to='' className='flex items-center gap-5 font-bold'><IoBookmarkOutline  className="w-6 h-6" /><h1>Collections</h1></Link>
            <Link to='/my/settings' className='flex items-center gap-5 font-bold'><IoSettingsOutline  className="w-6 h-6" /><h1>Settings</h1></Link>
          </div>
           <div className="text-sm text-gray-700 border-b py-5 flex flex-col gap-3">
            <Link to='' className='flex items-center gap-5 font-bold'><IoCardOutline  className="w-6 h-6" /><h1>Your card (to subscribe)</h1></Link>
            <Link to='' className='flex items-center gap-5 font-bold'><IoPersonAddOutline  className="w-6 h-6" /><h1>Become a creator (to earn )</h1></Link>
          </div>
           <div className="text-sm text-gray-700 border-b py-5 flex flex-col gap-3">
            <Link to='' className='flex items-center gap-5 font-bold'><IoHelpCircleOutline className="w-6 h-6" /><h1>Help and Support</h1></Link>
            <Link to='' className='flex items-center gap-5 font-bold'><IoMoonOutline  className="w-6 h-6" /><h1>Dark Mode</h1></Link>
            <Link to='' className='flex items-center gap-5 font-bold'><IoLanguageOutline  className="w-6 h-6" /><h1>English</h1></Link>
          </div>
          <button className="flex font-bold items-center gap-5"><IoExitOutline  className="w-6 h-6 rotate-180" /> Logout</button>
        </div>
      </div>

      {/* Background overlay */}
      {showDrawer && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-transparent bg-opacity-40 "
        />
      )}
    </>
  );
}
