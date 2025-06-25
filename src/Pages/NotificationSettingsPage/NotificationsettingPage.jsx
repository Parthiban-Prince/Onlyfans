import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Settingscenter from '../../Component/Settingscenter/settingscenter';
import Notificationsetting from '../../Component/NotificationRight/NotificationRight'






export default  function NotificationsettingPage() {


  return (
    <div className='justify-center flex  w-full h-[100vh]'>
      <SideNavigation/>
     <Settingscenter/>
     <Notificationsetting/>
    </div>

  );
}

