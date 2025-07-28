import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Settingscenter from '../../Component/Settingscenter/Settingscenter';
import Privacysettings from '../../Component/PrivacyRight/Privacyright';
import BottomTab from '../../Component/BottomTab/Bottom';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col md:flex-row w-full  justify-center">

      {/* Sidebar - 426px and up */}
   

      {/* Main Settings - always visible */}

        <Settingscenter />


      {/* Right Panel - 426px and up */}
      <div className="hidden s:block">
        <Privacysettings />
      </div>

      {/* BottomTab - only visible below 426px */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>
    </div>
  );
}
