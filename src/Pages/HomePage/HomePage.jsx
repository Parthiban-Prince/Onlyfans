import React from 'react';
import CenterContent from '../../Component/CenterContent/CenterContent';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import SuggestionCard from '../../Component/Suggestioncard/Suggestioncard';
import BottomTab from '../../Component/BottomTab/Bottom';
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row w-full  justify-center">

      {/* Show SideNavigation from 426px and up */}
      <div className="hidden  h-auto s:block md:w-[100px] lg:w-auto">
        <SideNavigation />
      </div>

      {/* Center Content should always be visible and fill space */}
      <div className="m-auto s:ml-[75px] md:m-0">
        <CenterContent />
      </div>

      {/* Suggestion Card visible only 426px and up */}
      <div id='Suggest'>
        <SuggestionCard />
      </div>

      {/* Bottom Tab: Only on small (mobile) screens <426px */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>
      
    </div>
  );
}
