import React from 'react'
import SideNavigation from '../../Component/SideNavigation/SideNavigation'
import SuggectionCard from '../../Component/Suggestioncard/Suggestioncard'
import NotificationCentre from '../../Component/NotifcationCentre/NotificationCentre'

function NotificationPage() {
  return (
        <div className='justify-center flex  w-full h-[100vh]'>
    <SideNavigation/>
     <NotificationCentre/>
     <SuggectionCard/>
    </div>
  )
}

export default NotificationPage