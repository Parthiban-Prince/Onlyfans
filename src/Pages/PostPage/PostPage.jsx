import React from 'react'
import SideNavigation from '../../Component/SideNavigation/SideNavigation'
import SuggectionCard from '../../Component/Suggestioncard/Suggestioncard'
import TestCard from '../../Component/Tetsing/TestCard'

function PostPage() {
  return (
        <div className='justify-center flex  w-full h-full'>
    <SideNavigation/>
     <TestCard/>
     <SuggectionCard/>
    </div>
  )
}

export default PostPage