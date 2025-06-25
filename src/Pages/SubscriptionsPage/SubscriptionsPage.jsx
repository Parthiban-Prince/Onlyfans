import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import CollectionCenter from '../../Component/Collectioncenter/Collectioncenter';
import SubscriptionsRight from '../../Component/SubscriptionsRight/SubscriptionsRight';





export default  function SubscriptionsPage() {


  return (
    <div className='justify-center flex  w-full h-[100vh]'>
    <SideNavigation/>
     <CollectionCenter/>
     <SubscriptionsRight/>
    </div>

  );
}
