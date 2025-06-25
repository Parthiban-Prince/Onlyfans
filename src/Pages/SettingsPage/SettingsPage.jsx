import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Settingscenter from '../../Component/Settingscenter/settingscenter';
import Profilesettings from '../../Component/Profilesettings/Profilesettings';





export default  function SettingsPage() {


  return (
    <div className='justify-center flex  w-full h-[100vh]'>
      <SideNavigation/>
     <Settingscenter/>
     <Profilesettings/>
    </div>

  );
}

