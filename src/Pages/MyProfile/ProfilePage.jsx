import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import ProfileRight from '../../Component/ProfileRight/ProfileRight';
import Profilecenter from '../../Component/Profilecenter/Profilecenter';




export default  function ProfilePage() {


  return (
    <div className='justify-center flex  w-full h-[100vh]'>
    <SideNavigation/>
    <Profilecenter/>
     <ProfileRight/>
    </div>

  );
}
