import React from "react";
import { Outlet } from "react-router-dom";
import SideNavigation from "../Component/SideNavigation/SideNavigation";

export default function MainLayout() {


  return (
    <div className="md:flex  md:justify-center h-dvh w-full">
      <SideNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
