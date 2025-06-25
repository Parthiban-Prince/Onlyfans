import React from 'react';
import CenterContent from '../../Component/CenterContent/CenterContent';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import SuggectionCard from '../../Component/Suggestioncard/Suggestioncard';





export default  function HomePage() {


  return (
    <div className='justify-center flex  w-full h-[100vh]'>
      <SideNavigation/>
     <CenterContent/>
     <SuggectionCard/>
    </div>

  );
}

