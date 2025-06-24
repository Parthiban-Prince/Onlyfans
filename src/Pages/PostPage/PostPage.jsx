import React from 'react'
import SideNavigation from '../../Component/SideNavigation/SideNavigation'
import SuggectionCard from '../../Component/Suggestioncard/Suggestioncard'
import Postcenter from '../../Component/Postcenter/Postcenter'

function PostPage() {
  return (
        <div className='justify-center flex  w-full h-full'>
    <SideNavigation/>
     <Postcenter/>
     <SuggectionCard/>
    </div>
  )
}

export default PostPage