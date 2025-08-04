import React, { Suspense, lazy } from 'react';
import './HomePage.css';

// Lazy load components
const CenterContent = lazy(() => import('../../Component/CenterContent/CenterContent'));
const SuggestionCard = lazy(() => import('../../Component/Suggestioncard/Suggestioncard'));
const BottomTab = lazy(() => import('../../Component/BottomTab/Bottom'));
// Optional: Add SideNavigation if it's used somewhere else

export default function HomePage() {
  return (
    <div className='flex'>
      <Suspense fallback={<div>Loading center...</div>}>
        <CenterContent />
      </Suspense>

      <Suspense fallback={<div>Loading suggestions...</div>}>
        <SuggestionCard />
      </Suspense>

      <div className="block s:hidden fixed bottom-0 left-0 right-0 z-50">
        <Suspense fallback={<div>Loading tab...</div>}>
          <BottomTab />
        </Suspense>
      </div>
    </div>
  );
}
