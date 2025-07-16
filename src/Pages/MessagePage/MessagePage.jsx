import React from 'react';
import MessageCenter from '../../Component/Messagecenter/Messagecenter';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import MessageRight from '../../Component/MessageRight/MessageRight';
import BottomTab from '../../Component/BottomTab/Bottom';

export default function MessagePage() {
  return (
    <div className="flex flex-col md:flex-row w-full  justify-center">

      {/* Left Sidebar (426px and up) */}
    <div className="hidden  h-auto s:block md:w-[100px] lg:w-auto">
        <SideNavigation />
      </div>

      {/* Message Center: Always visible */}

      <div className="m-auto s:ml-[75px] md:m-0">
        <MessageCenter/>
      </div>
      {/* Right Chat/User Info: 426px and up */}
      <div className="hidden s:block">
        <MessageRight />
      </div>

      {/* Mobile Bottom Navigation (only <426px) */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>

    </div>
  );
}
