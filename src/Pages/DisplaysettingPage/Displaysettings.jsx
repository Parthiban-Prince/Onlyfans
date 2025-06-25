import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Settingscenter from '../../Component/Settingscenter/settingscenter';
import Displaysettings from '../../Component/DisplaySettingsRight/DisplaySettingsRight'





export default  function DisplaysettingsPage() {


  return (
    <div className='justify-center flex  w-full h-[100vh]'>
      <SideNavigation/>
     <Settingscenter/>
     <Displaysettings/>
    </div>

  );
}

