import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import SuggestionCard from '../../Component/Suggestioncard/Suggestioncard';
import NotificationCentre from '../../Component/NotifcationCentre/NotificationCentre';
import BottomTab from '../../Component/BottomTab/Bottom';

function NotificationPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-center">

      {/* Sidebar - visible on 426px+ */}
      <div className="hidden s:block">
        <SideNavigation />
      </div>

      {/* Notification Center - always visible */}
    
        <NotificationCentre />
  

      {/* Suggestion Card - visible on 426px+ */}
      <div className="hidden s:block">
        <SuggestionCard />
      </div>

      {/* Bottom Tab - mobile only (<426px) */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>

    </div>
  );
}

export default NotificationPage;
