import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import {
  IoAddOutline,
  IoBookmarkOutline,
  IoCardOutline,
  IoChatbubbleOutline,
  IoExitOutline,
  IoHelpCircleOutline,
  IoHomeOutline,
  IoLanguageOutline,
  IoMoonOutline,
  IoNotificationsOutline,
  IoPersonAddOutline,
  IoPersonOutline,
  IoSettingsOutline
} from "react-icons/io5";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/api';

export default function BottomTab() {
  const location = useLocation();
  const { username } = useParams(); // used in all route paths
  const [showDrawer, setShowDrawer] = React.useState(false);

  const toggleDrawer = () => setShowDrawer(!showDrawer);

  const { data: user, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      const res = await fetch(`${api}/api/my/profile`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      return result.data;
    },
  });

  const isActive = (pathSegment) => location.pathname.includes(pathSegment);

  return (
    <>
      {/* Bottom Nav */}
      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 shadow-md sm:max-w-md s:hidden sm:mx-auto z-50">
        <div className="flex justify-around items-center px-2 py-3">
          <NavLink to={`/my/${user?.username}`} aria-label="Home">
            <IoHomeOutline className={`w-6 h-6 ${isActive(`/my/${username}`) && !isActive('notification') ? 'opacity-100' : 'opacity-60'}`} />
          </NavLink>
          <NavLink to={`/my/${username}/notification`} aria-label="Notifications">
            <IoNotificationsOutline className={`w-6 h-6 ${isActive('notification') ? 'opacity-100' : 'opacity-60'}`} />
          </NavLink>
          <NavLink to={`/my/${username}/posts/create`} aria-label="Create Post" className='border-2 border-gray-500 rounded-sm'>
            <IoAddOutline className={`w-6 h-6 ${isActive('posts/create') ? 'opacity-100' : 'opacity-60'}`} />
          </NavLink>
          <NavLink to={`/my/${username}/chats`} aria-label="Messages">
            <IoChatbubbleOutline className={`w-6 h-6 ${isActive('chats') ? 'opacity-100' : 'opacity-60'}`} />
          </NavLink>
          <button onClick={toggleDrawer} aria-label="Profile" className="focus:outline-none">
            {isLoading ? (
              <Skeleton circle width={24} height={24} />
            ) : (
              <img src={user?.profilePhoto} alt="Profile" className="w-6 h-6 border rounded-full object-cover" />
            )}
          </button>
        </div>
      </nav>

      {/* Profile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          showDrawer ? 'translate-x-0 z-[10000]' : 'translate-x-full z-50'
        }`}
      >
        <div className="flex justify-between p-4 border-b">
          <div className='flex flex-col gap-2'>
            {isLoading ? (
              <>
                <Skeleton circle width={48} height={48} />
                <Skeleton width={100} height={16} />
                <Skeleton width={80} height={14} />
              </>
            ) : (
              <>
                <img src={user?.profilePhoto} alt="Profile" className="w-12 h-12 border rounded-full" />
                <h2 className="text-lg font-bold">{user?.name}</h2>
                <h1>{user?.username}</h1>
                <div className='flex justify-between gap-10'>
                  <h1>@{user?.Fans}Fan</h1>
                  <h1>{user?.followingCount} Following</h1>
                </div>
              </>
            )}
          </div>
          <button onClick={toggleDrawer} className="text-gray-600 hover:text-black text-2xl">&times;</button>
        </div>

        {/* Drawer Links */}
        <div className="p-4 space-y-4">
          <div className="text-sm border-b py-5 flex flex-col gap-3">
            <NavLink to={`/my/${username}/profile`} className="flex items-center gap-5 font-bold"><IoPersonOutline className="w-6 h-6" /> My Profile</NavLink>
            <NavLink to={`/my/${username}/collection/user-lists/subscribers/active`} className="flex items-center gap-5 font-bold"><IoBookmarkOutline className="w-6 h-6" /> Collections</NavLink>
            <NavLink to={`/my/${username}/mobile/settings`} className="flex items-center gap-5 font-bold"><IoSettingsOutline className="w-6 h-6" /> Settings</NavLink>
          </div>

          <div className="text-sm text-gray-700 border-b py-5 flex flex-col gap-3">
            <NavLink to={`/my/${username}/payments/add_card`} className="flex items-center gap-5 font-bold"><IoCardOutline className="w-6 h-6" />Your Card (to subscribe) </NavLink>
            <NavLink to={`/my/${username}/creator/apply`} className="flex items-center gap-5 font-bold"><IoPersonAddOutline className="w-6 h-6" /> Become a Creator (to earn)</NavLink>
          </div>

          <div className="text-sm text-gray-700 border-b py-5 flex flex-col gap-3">
            <NavLink to="/help" className="flex items-center gap-5 font-bold"><IoHelpCircleOutline className="w-6 h-6" /> Help & Support</NavLink>
            <button className='flex items-center gap-5 font-bold'><IoMoonOutline className="w-6 h-6" /> Dark Mode</button>
            <button className='flex items-center gap-5 font-bold'><IoLanguageOutline className="w-6 h-6" /> English</button>
          </div>

          <button className="flex font-bold items-center gap-5"><IoExitOutline className="w-6 h-6 rotate-180" /> Logout</button>
        </div>
      </div>

      {/* Overlay */}
      {showDrawer && (
       <div onClick={toggleDrawer} className="fixed inset-0 bg-transparent z-40" />

      )}
    </>
  );
}
