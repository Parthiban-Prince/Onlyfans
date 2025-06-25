import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Settingscenter from '../../Component/Settingscenter/settingscenter';
import Privavcysettings from '../../Component/PrivacyRight/Privacyright'





export default  function PrivacyPage() {


  return (
    <div className='justify-center flex  w-full h-[100vh]'>
      <SideNavigation/>
     <Settingscenter/>
     <Privavcysettings/>
    </div>

  );
}

