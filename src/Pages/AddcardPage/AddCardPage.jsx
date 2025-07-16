import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import AddcardCenter from '../../Component/AddCardCenter/AddcardCenter';
import AddcardRight from '../../Component/AddcardRight/AddcardRight';
import BottomTab from '../../Component/BottomTab/Bottom';

export default function AddcardPage() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center">

      {/* Side Navigation - visible from 426px and up */}
     <div className="hidden  h-auto s:block md:w-[100px] lg:w-auto">
        <SideNavigation />
      </div>

      {/* Center content - always visible */}
        <AddcardCenter />
    

      {/* Right section - visible from 426px and up */}
      <div className="hidden s:block">
        <AddcardRight />
      </div>

      {/* Bottom tab - visible only on mobile (below 426px) */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>

    </div>
  );
}
