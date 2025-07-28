import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Notificationsetting from '../../Component/NotificationRight/NotificationRight';
import BottomTab from '../../Component/BottomTab/Bottom';
import Settingscenter from '../../Component/Settingscenter/Settingscenter';

export default function NotificationsettingPage() {
  return (
    <div className="flex flex-col md:flex-row w-full  justify-center">

      {/* Sidebar - 426px and up */}


      {/* Main Settings Center - always visible */}

        <Settingscenter/>
  

      {/* Notification Settings - 426px and up */}
      <div className="hidden s:block">
        <Notificationsetting />
      </div>

      {/* BottomTab - only visible below 426px */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>

    </div>
  );
}
