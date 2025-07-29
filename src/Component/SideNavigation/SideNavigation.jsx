import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import {
  IoAddOutline, IoBookmarkOutline, IoCardOutline, IoChatbubbleEllipsesOutline, IoCloseCircleOutline,
  IoEllipsisHorizontalCircleOutline, IoExitOutline, IoHelpCircleOutline, IoHomeOutline,
  IoLanguageOutline, IoMoonOutline, IoNotificationsOutline, IoPeopleOutline, IoPersonAddOutline,
  IoPersonCircleOutline, IoPersonOutline, IoSettingsOutline
} from "react-icons/io5";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './SideNavigation.css';
import { useQuery } from '@tanstack/react-query';

export default function SideNavigation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = '';
    setIsOpen(false);
  };

  const darkMode = () => alert("This feature is under development.");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const { data: user, isLoading } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const res = await fetch(`${api}/api/my/profile`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      return result.data;
    },
    enabled: !!localStorage.getItem("token")
  });

  return (
    <section id="Side" className="relative">
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999]" onClick={handleClose}></div>
          <div className="fixed top-5 h-fit lg:w-[270px] bg-white shadow-lg z-[10000] transition-all rounded-md">
            <div className="flex flex-col px-5 py-4 h-full overflow-y-auto">
              <div className="flex justify-between items-center">
                {isLoading ? (
                  <Skeleton circle width={48} height={48} />
                ) : (
                  <button className=" rounded-full overflow-hidden w-12 h-12">
                    <img src={user?.profilePhoto} alt="Profile" className="w-full h-full object-cover object-center" />
                  </button>
                )}
                <button className="font-bold hover:text-red-500" onClick={handleClose}>
                  <IoCloseCircleOutline className="w-6 h-6" />
                </button>
              </div>

              <div className="border-b pb-3">
                <h1 className="text-lg font-semibold">{isLoading ? <Skeleton width={80} /> : user?.name}</h1>
                <h2 className="text-sm text-gray-500">@{isLoading ? <Skeleton width={60} /> : user?.username}</h2>
                <div className="flex gap-6 text-sm text-gray-700 mt-2">
                  <span>0 Fans</span>
                  <span>0 Following</span>
                </div>
              </div>

              <nav className="flex flex-col gap-4 text-sm">
                <div className="border-b pb-4">
                  <Link to={`/my/${user?.username}/profile`} className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <IoPersonOutline className="w-6 h-6" />
                    <span className="hidden s:inline">My Profile</span>
                  </Link>
                  <Link to={`/my/${user?.username}/collection/user-lists/subscribers/active`} className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <IoBookmarkOutline className="w-6 h-6" />
                    <span className="hidden s:inline">Collection</span>
                  </Link>
                  <Link to={`/my/${user?.username}/settings/profile`} className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
                    <IoSettingsOutline className="w-6 h-6" />
                    <span className="hidden s:inline">Settings</span>
                  </Link>
                </div>

                <div className="border-b pb-4">
                  <Link to={`/my/${user?.username}/payments/add_card`} className="flex items-center gap-4 p-2 hover:bg-blue-50 rounded-lg">
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
                  <Link onClick={handleLogout} className="flex items-center gap-4 p-2 hover:bg-red-50 rounded-lg">
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
        <button className=" rounded-full overflow-hidden w-fit h-fit">
          {isLoading ? (
            <Skeleton circle width={36} height={36} />
          ) : (
            <img src={user?.profilePhoto} className="w-9 h-9 object-cover" />
          )}
        </button>
        <NavLink to={`/my/${user?.username}`} className="flex items-center gap-3 hover:rounded-sm hover:text-white">
          <IoHomeOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Home</span>
        </NavLink>
        <NavLink to={`/my/${user?.username}/notification`} className="flex items-center gap-3 hover:rounded-sm">
          <IoNotificationsOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Notifications</span>
        </NavLink>
        <NavLink to={`/my/${user?.username}/chats`} className="flex items-center gap-3 hover:rounded-sm">
          <IoChatbubbleEllipsesOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Message</span>
        </NavLink>
        <NavLink to={`/my/${user?.username}/collection/user-lists/subscribers/active`} className="flex items-center gap-3 hover:rounded-sm">
          <IoBookmarkOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Collection</span>
        </NavLink>
        <NavLink to={`/my/${user?.username}/collections/user-lists/subscriptions`} className="flex items-center gap-3 hover:rounded-sm">
          <IoPeopleOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Subscriptions</span>
        </NavLink>
        <NavLink to={`/my/${user?.username}/payments/add_card`} className="flex items-center gap-3 hover:rounded-sm">
          <IoCardOutline className="w-8 h-8" />
          <span className="hidden lg:inline">Add Card</span>
        </NavLink>
        <NavLink to={`/my/${user?.username}/profile`} className="flex items-center gap-3 hover:rounded-sm">
          <IoPersonCircleOutline className="w-8 h-8" />
          <span className="hidden lg:inline">My Profile</span>
        </NavLink>
        <button onClick={handleClick} className="flex items-center gap-3 hover:rounded-sm more">
          <IoEllipsisHorizontalCircleOutline className="w-8 h-8 text-gray-500" />
          <span className="hidden lg:inline font-medium text-gray-500">More</span>
        </button>
        <NavLink to={`/my/${user?.username}/posts/create`} className="flex items-center gap-3 bg-[#00aff0] text-white rounded-full h-[50px] px-4 justify-center">
          <IoAddOutline className="w-6 h-6 text-white" />
          <span className="hidden lg:inline text-white">NEW POST</span>
        </NavLink>
      </nav>
    </section>
  );
}
