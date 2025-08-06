import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  IoHomeOutline,
  IoNotificationsOutline,
  IoChatbubbleEllipsesOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function BottomPublic({ loading = false }) {
  const { pathname } = useLocation();

  const navItems = [
    { path: '/my/:username', icon: IoHomeOutline, label: 'Home' },
    { path: '/profile', icon: IoPersonOutline, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-300 flex justify-around items-center py-3 z-[100] s:hidden" id="Bottom">
      {loading
        ? navItems.map((_, idx) => (
            <Skeleton key={idx} circle width={28} height={28} />
          ))
        // eslint-disable-next-line no-unused-vars
        : navItems.map(({ path, icon: Icon, label }) => (
            <Link key={path} to={path} className="flex flex-col items-center">
              <Icon
                size={24}
                className={`${
                  pathname === path ? 'text-black' : 'text-gray-400'
                } transition-colors`}
              />
              {/* Optional text label below icons */}
              {/* <span className="text-xs mt-1">{label}</span> */}
            </Link>
          ))}
    </div>
  );
}
