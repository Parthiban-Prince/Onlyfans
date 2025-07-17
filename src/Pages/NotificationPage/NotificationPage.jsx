import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import SuggestionCard from '../../Component/Suggestioncard/Suggestioncard';
import NotificationCentre from '../../Component/NotifcationCentre/NotificationCentre';
import BottomTab from '../../Component/BottomTab/Bottom';

function NotificationPage() {
  return (
    <div className="flex flex-col md:flex-row w-full  justify-center">

      {/* Sidebar - visible on 426px+ */}
  <div className="hidden  h-auto s:block md:w-[100px] lg:w-auto">
        <SideNavigation />
      </div>

      {/* Notification Center - always visible */}
      <div className="m-auto s:ml-[75px] md:m-0">
        <NotificationCentre />
      </div>
  

      {/* Suggestion Card - visible on 426px+ */}
      
        <SuggestionCard />
  

      {/* Bottom Tab - mobile only (<426px) */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>

    </div>
  );
}

export default NotificationPage;
