import React, { Suspense, lazy } from 'react';

// Dynamically import LazyComponent
const LazyComponent = lazy(() => import('./LazyComponent'));

const Page = () => (
  <div>
    <h1>Scroll down to see the lazy-loaded component</h1>
    <div style={{ height: '150vh' }}></div> {/* Just to add scrollable content */}

    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>

    <div style={{ height: '150vh' }}></div> {/* More content for scrolling */}
  </div>
);

export default Page;
