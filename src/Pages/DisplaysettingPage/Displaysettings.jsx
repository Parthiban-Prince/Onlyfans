import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Settingscenter from '../../Component/Settingscenter/settingscenter';
import Displaysettings from '../../Component/DisplaySettingsRight/DisplaySettingsRight';
import BottomTab from '../../Component/BottomTab/Bottom';

export default function DisplaysettingsPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-center">

      {/* Sidebar visible on 426px+ */}
      <div className="hidden s:block">
        <SideNavigation />
      </div>

      {/* Center Settings - always visible */}
   
        <Settingscenter />

      {/* Right Display Settings - visible on 426px+ */}
      <div className="hidden s:block">
        <Displaysettings />
      </div>

      {/* BottomTab - mobile only (<426px) */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>
      
    </div>
  );
}
