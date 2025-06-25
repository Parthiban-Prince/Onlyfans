import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import CollectionCenter from '../../Component/Collectioncenter/Collectioncenter';
import CollectionRight from '../../Component//CollectionRight/CollectionRigth';





export default  function CollectionPage() {


  return (
    <div className='justify-center flex  w-full h-[100vh]'>
    <SideNavigation/>
     <CollectionCenter/>
     <CollectionRight/>
    </div>

  );
}
