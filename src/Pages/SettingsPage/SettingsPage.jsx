import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Settingscenter from '../../Component/Settingscenter/settingscenter';
import Profilesettings from '../../Component/Profilesettings/Profilesettings';
import BottomTab from '../../Component/BottomTab/Bottom';

export default function SettingsPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-center">

      {/* Sidebar - visible on 426px and up */}
      <div className="hidden s:block">
        <SideNavigation />
      </div>

      {/* Settings Center - always visible */}
  
        <Settingscenter />
   

      {/* Profile Settings - visible on 426px and up */}
      <div className="hidden s:block">
        <Profilesettings />
      </div>

      {/* BottomTab - visible only below 426px */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>
      
    </div>
  );
}
