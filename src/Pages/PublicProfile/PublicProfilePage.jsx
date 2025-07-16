import React from 'react'
import Loading from '../../Component/Loading/Loading'
import Suggestioncard from '../../Component/Suggestioncard/Suggestioncard'
import PublicSidenav from '../../Component/PublicSideNav/PublicSidenav'
import PublicCard from '../../Component/Suggestioncard/PublicCard'

export default function PublicProfilePage() {
  return (
    <div className='flex justify-center'>
    <PublicSidenav/>
    <Loading/>
    <PublicCard/>
    </div>
  )
}
