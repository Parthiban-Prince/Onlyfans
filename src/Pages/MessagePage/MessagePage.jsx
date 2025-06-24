import React from 'react';
import LeftSidebar from '../../Component/Tetsing/left';
import RightSidebar from '../../Component/Tetsing/right'
import MessageCenter from '../../Component/Messagecenter/Messagecenter';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import MessageRight from '../../Component/MessageRight/MessageRight';





export default  function MessagePage() {


  return (
    <div className='justify-center flex  w-full h-[100vh]'>
    <SideNavigation/>
     <MessageCenter/>
     <MessageRight/>
    </div>

  );
}

