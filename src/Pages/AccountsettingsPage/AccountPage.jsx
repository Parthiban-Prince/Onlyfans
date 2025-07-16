import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Settingscenter from '../../Component/Settingscenter/Settingscenter';
import Accountsettings from '../../Component/AccountRight/Accountright';
import BottomTab from '../../Component/BottomTab/Bottom';

export default function AccountPage() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center">

      {/* SideNavigation: Show on 426px+ */}
      <div className="hidden  h-auto s:block md:w-[100px] lg:w-auto">
        <SideNavigation />
      </div>

      {/* Center Settings: Always visible */}
        <Settingscenter />
      

      {/* Right Panel Account Settings: Show on 426px+ */}
      <div className="hidden s:block">
        <Accountsettings />
      </div>

      {/* BottomTab: Only on mobile (<426px) */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>

    </div>
  );
}
