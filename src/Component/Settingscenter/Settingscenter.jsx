import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import useDeviceType from '../../hooks/useDeviceType'; 
import { api } from '../../api/api';

export default function Settingscenter() {


  
    const [user,setUser] = useState(null)
    const isMobile = useDeviceType();
  
  
  
      useEffect(() => {
        const usertoken = localStorage.getItem("token")
    
        const fetchProfileData = async () => {
          try {
            const response = await fetch(`${api}/api/api/my/Profile`, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${usertoken}`
              }
            });
    
            const result = await response.json();
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
    <section className="flex relative border border-gray-300 w-full   md:w-[632px] bg-white">
      <div className="w-full">
        
        {/* Header */}
        <div className="flex items-center gap-3 p-3 border-b border-gray-200 sticky top-0 z-10 bg-white h-[56px]">
          <Link to="/dashboard">
            <span className="text-xl font-bold cursor-pointer">&larr;</span>
          </Link>
          <h1 className="text-base font-bold">SETTINGS</h1>
        </div>

        {/* Username */}
        <div className="px-4 py-3 border-b border-gray-200">
          <p className="font-semibold text-sm text-gray-900">@{user?.username || "none"}</p>
        </div>

        {/* Settings List */}
        <ul className="text-sm text-gray-900 divide-y divide-gray-200">
          <Link to={isMobile ?  '/my/settings/profile/profileSettings': '/my/settings/profile' }>
            <li className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Profile</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </li>
          </Link>

          <Link to={isMobile ? '/my/settings/account/accountSettings':"/my/settings/account"}>
            <li className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Account</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </li>
          </Link>

          <Link to={isMobile ? '/my/settings/privacy/privacySettings':"/my/settings/privacy"}>
            <li className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Privacy and safety</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </li>
          </Link>

          <Link to={isMobile ? '/my/settings/subscription/subscriptionSettings':"/my/settings/subscription"}>
            <li className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Subscription price</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </li>
          </Link>

          <Link to={isMobile ? "/my/settings/notifications/notificationsSettings":"/my/settings/notifications"}>
            <li className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Notifications</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </li>
          </Link>
        </ul>

        {/* General Section */}
        <div className="px-4 py-2 border-t border-gray-200 text-xs font-semibold text-gray-600 uppercase">
          General
        </div>
        <ul className="text-sm text-gray-900 divide-y divide-gray-200">
          <Link to={isMobile ?  '/my/settings/display/displaySettings':"/my/settings/display"}>
            <li className="flex justify-between items-center px-4 py-3 hover:bg-gray-50">
              <span>Display</span>
              <span className="text-gray-400 text-base">&rsaquo;</span>
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
}
