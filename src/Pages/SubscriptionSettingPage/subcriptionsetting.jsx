import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Settingscenter from '../../Component/Settingscenter/Settingscenter';
import Subscriptionsettings from '../../Component/Subcriptionsright/Subscriptionsettingsright';
import BottomTab from '../../Component/BottomTab/Bottom';

export default function SubscriptionsettingPage() {
  return (
    <div className="flex flex-col md:flex-row w-full  justify-center">


      {/* Settings center - always visible */}

        <Settingscenter />


      {/* Right settings panel - visible from 426px and up */}
      <div className="hidden s:block">
        <Subscriptionsettings />
      </div>

      {/* Bottom navigation - visible only on small screens (<426px) */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>

    </div>
  );
}
