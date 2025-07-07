import React from 'react';
import SideNavigation from '../../Component/SideNavigation/SideNavigation';
import SuggestionCard from '../../Component/Suggestioncard/Suggestioncard';
import Postcenter from '../../Component/Postcenter/Postcenter';
import BottomTab from '../../Component/BottomTab/Bottom';

function PostPage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-center">

      {/* Left Sidebar - visible on 426px+ */}
      <div className="hidden s:block">
        <SideNavigation />
      </div>

      {/* Main Post Content - always visible */}

        <Postcenter />
 

      {/* Right Suggestions - visible on 426px+ */}
      <div className="hidden s:block">
        <SuggestionCard />
      </div>

      {/* BottomTab - only visible on small screens (<426px) */}
      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomTab />
      </div>
    </div>
  );
}

export default PostPage;
