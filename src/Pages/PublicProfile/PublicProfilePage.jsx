import React, { useState, useEffect } from 'react';
import PublicSidenav from '../../Component/PublicSideNav/PublicSidenav';
import PublicCard from '../../Component/Suggestioncard/PublicCard';
import PublicProfile from '../../Component/ProfilePublic/ProfilePublic';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';

export default function PublicProfilePage() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuth(true);
    }
  }, []);

  return (
    <div className='flex justify-center'>
      {auth ? <PublicSidenav /> : <SideNavigation />}
      <PublicProfile />
      <PublicCard />
    </div>
  );
}
