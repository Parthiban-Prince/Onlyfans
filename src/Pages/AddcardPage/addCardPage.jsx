import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import AddcardCenter from '../../Component/AddCardCenter/AddcardCenter'
import AddcardRight from '../../Component/AddcardRight/AddcardRight';






export default  function AddcardPage() {


  return (
    <div className='justify-center flex h-[100vh]'>
      <SideNavigation/>
      <AddcardCenter/>
      <AddcardRight/>
    </div>

  );
}

