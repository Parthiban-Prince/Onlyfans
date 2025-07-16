import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import ProfileRight from '../../Component/ProfileRight/ProfileRight';
import Profilecenter from '../../Component/Profilecenter/Profilecenter';
import BottomTab from '../../Component/BottomTab/Bottom';

export default function ProfilePage() {
  return (
    <div className="flex flex-col md:flex-row w-full  justify-center">

      {/* Sidebar - visible only on 426px+ */}
      <div className="hidden  h-auto s:block md:w-[100px] lg:w-auto">
        <SideNavigation />
      </div>

      {/* Profile Center - always visible */}
        <Profilecenter />


      {/* Profile Right - visible only on 426px+ */}
      <div className="hidden s:block">
        <ProfileRight />
      </div>

      {/* Bottom Tab - visible only on mobile (<426px) */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>

    </div>
  );
}
