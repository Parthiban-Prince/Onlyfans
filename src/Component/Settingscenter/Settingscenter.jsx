import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import useDeviceType from '../../hooks/useDeviceType';
import { api } from '../../api/api';
import BottomTab from '../BottomTab/Bottom';

export default function Settingscenter() {
  const [user, setUser] = useState(null);
  const isMobile = useDeviceType();

  useEffect(() => {
    const usertoken = localStorage.getItem("token");

    const fetchProfileData = async () => {
      try {
        const response = await fetch(`${api}/api/my/Profile`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${usertoken}`
          }
        });

        const result = await response.json();
        if (result.data) {
          setUser(result.data);
        }
        console.log("setting", result.data);
      } catch (error) {
        console.error("Error fetching profile:", error.message);
      }
    };

    fetchProfileData();
  }, []);

  const username = user?.username || "";

  return (
    <section className="flex relative border border-gray-300 w-full md:w-[362px] bg-white">
      <div className="w-full">

        {/* Header */}
        <div className="flex items-center gap-3 p-3 border-b border-gray-200 sticky top-0 z-10 bg-white h-[56px]">
          <Link to={`/my/${username}`}>
            <IoArrowBackOutline className="w-6 h-6" />
          </Link>
          <h1 className="text-base font-bold">SETTINGS</h1>
        </div>

        {/* Username */}
        <div className="px-4 py-3 border-b border-gray-200">
          <p className="font-semibold text-sm text-gray-900">@{username || "none"}</p>
        </div>

        {/* Settings List */}
        <ul className="text-sm text-gray-900 divide-y divide-gray-200">
          <li>
            <Link to={isMobile ? `/my/${user?.username}/settings/profile/profileSettings` : `/my/${user?.username}/settings/profile`} className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Profile</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </Link>
          </li>
          <li>
            <Link to={isMobile ? `/my/${user?.username}/settings/account/accountSettings` : `/my/${user?.username}/settings/account`} className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Account</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </Link>
          </li>
          <li>
            <Link to={isMobile ? `/my/${user?.username}/settings/privacy/privacySettings` : `/my/${user?.username}/settings/privacy`} className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Privacy and safety</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </Link>
          </li>
          <li>
            <Link to={isMobile ? `/my/${user?.username}/settings/subscription/subscriptionSettings` : `/my/${user?.username}/settings/subscription`} className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Subscription price</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </Link>
          </li>
          <li>
            <Link to={isMobile ? `/my/${user?.username}/settings/notifications/notificationsSettings` : `/my/${user?.username}/settings/notifications`} className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Notifications</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </Link>
          </li>
        </ul>

        {/* General Section */}
        <div className="px-4 py-2 border-t border-gray-200 text-xs font-semibold text-gray-600 uppercase">
          General
        </div>
        <ul className="text-sm text-gray-900 divide-y divide-gray-200">
          <li>
            <Link to={isMobile ? `/my/${user?.username}/settings/display/displaySettings` : `/my/${user?.username}/settings/display`} className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Display</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </Link>
          </li>
        </ul>
      </div>
      <BottomTab />
    </section>
  );
}
