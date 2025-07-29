import React from 'react'
import BottomPublic from '../Component/BottomTab/BottmPublic'
import { Outlet } from 'react-router-dom'

export default function PublicProfileLayout() {
  return (
    <div>
        <BottomPublic/>
        <Outlet/>
    </div>
  )
}
