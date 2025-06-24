import React from 'react';
import LeftSidebar from '../../Component/Tetsing/left';
import RightSidebar from '../../Component/Tetsing/right'
import CenterContent from '../../Component/CenterContent/CenterContent';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import SuggectionCard from '../../Component/Suggestioncard/Suggestioncard';





export default  function addCardPage() {


  return (
    <div className='justify-center flex  w-full h-full'>
      <SideNavigation/>
     <CenterContent/>
     <SuggectionCard/>
    </div>

  );
}

