import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ImageLoading from '../Component/ImageLoading/ImageLoading';
import { useState } from 'react';

export default function LoginLayout() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  },[])


  return (
    <div>
      {loading ? <ImageLoading /> : <Outlet />}
    </div>
  )
}