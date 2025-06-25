import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Settingscenter from '../../Component/Settingscenter/settingscenter';
import Profilesettings from '../../Component/Profilesettings/Profilesettings';
import Subscriptionsettings from '../../Component/Subcriptionsright/Subscriptionsettingsright';






export default  function SubscriptionsettingPage() {


  return (
    <div className='justify-center flex  w-full h-[100vh]'>
      <SideNavigation/>
     <Settingscenter/>
     <Subscriptionsettings/>
    </div>

  );
}

