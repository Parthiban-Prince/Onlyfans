import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import CollectionCenter from '../../Component/Collectioncenter/Collectioncenter';
import SubscriptionsRight from '../../Component/SubscriptionsRight/SubscriptionsRight';
import BottomTab from '../../Component/BottomTab/Bottom';

export default function SubscriptionsPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-center">

      {/* Sidebar - visible only on 426px and up */}
      <div className="hidden s:block">
        <SideNavigation />
      </div>

      {/* Center content - always visible */}
    
        <CollectionCenter />

      {/* Right subscription panel - visible only on 426px and up */}
      <div className="hidden s:block">
        <SubscriptionsRight />
      </div>

      {/* Bottom tab - mobile only (<426px) */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>

    </div>
  );
}
