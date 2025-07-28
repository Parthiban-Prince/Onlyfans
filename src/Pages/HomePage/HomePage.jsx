import React from 'react';
import CenterContent from '../../Component/CenterContent/CenterContent';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import SuggestionCard from '../../Component/Suggestioncard/Suggestioncard';
import BottomTab from '../../Component/BottomTab/Bottom';
import './HomePage.css'

export default function HomePage() {
  return (
    <div className='flex'>

        <CenterContent />
        <SuggestionCard />
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>
      
    </div>  
  );
}
