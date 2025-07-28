import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import CollectionCenter from '../../Component/Collectioncenter/Collectioncenter';
import CollectionRight from '../../Component/CollectionRight/CollectionRigth';
import BottomTab from '../../Component/BottomTab/Bottom';

export default function CollectionPage() {
  return (
    <div className="flex flex-col md:flex-row w-full  justify-center">

      {/* Left Sidebar: show only on 426px+ */}


      {/* Center: always visible */}
        <CollectionCenter />


      {/* Right Sidebar: show only on 426px+ */}
      <div className="hidden s:block">
        <CollectionRight />
      </div>

      {/* Bottom Navigation: show only below 426px */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>
      
    </div>
  );
}
