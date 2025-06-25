import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import Settingscenter from '../../Component/Settingscenter/settingscenter';
import Profilesettings from '../../Component/Profilesettings/Profilesettings';
import Accountsettings from '../../Component/AccountRight/Accountright';





export default  function AccountPage() {


  return (
    <div className='justify-center flex  w-full h-[100vh]'>
      <SideNavigation/>
     <Settingscenter/>
     <Accountsettings/>
    </div>

  );
}

