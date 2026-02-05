import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

// Lazy load layout components to reduce initial bundle size
const Navigation = lazy(() => import('./components/layout/Navigation').then(module => ({ default: module.Navigation })));
const MobileNav = lazy(() => import('./components/layout/MobileNav').then(module => ({ default: module.MobileNav })));
const Footer = lazy(() => import('./components/layout/Footer').then(module => ({ default: module.Footer })));
const ExitIntentPopup = lazy(() => import('./components/global/ExitIntentPopup').then(module => ({ default: module.ExitIntentPopup })));

// Lazy load page components
const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const Impressum = lazy(() => import('./pages/Impressum').then(module => ({ default: module.Impressum })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));
const BusinessFacts = lazy(() => import('./pages/BusinessFacts').then(module => ({ default: module.BusinessFacts })));
const KeystaticAdmin = lazy(() => import('./pages/KeystaticAdmin'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sonic-orange"></div>
  </div>
);

const Layout = () => {
  const location = useLocation();

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-paper text-void font-sans selection:bg-black selection:text-white relative">
      <Suspense fallback={null}>
        <Navigation />
      </Suspense>
      <Suspense fallback={null}>
        <MobileNav />
      </Suspense>
      <main>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <div className="bg-void relative overflow-hidden">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <ExitIntentPopup />
      </Suspense>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/de" replace />} />

        {/* Keystatic Admin */}
        <Route path="/keystatic/*" element={
          <Suspense fallback={<PageLoader />}>
            <KeystaticAdmin />
          </Suspense>
        } />

        {/* Global Pages */}
        <Route path="/business-facts" element={<Layout />}>
           <Route index element={<BusinessFacts />} />
        </Route>

        {/* German Routes */}
        <Route path="/de" element={<Layout />}>
          <Route index element={<LandingPage lang="de" />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Privacy />} />
        </Route>

        {/* English Routes */}
        <Route path="/en" element={<Layout />}>
          <Route index element={<LandingPage lang="en" />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>

        {/* Redirects for old routes */}
        <Route path="/de/web-design" element={<Navigate to="/de#comparison" replace />} />
        <Route path="/de/app-design" element={<Navigate to="/de#comparison" replace />} />
        <Route path="/de/ux-design" element={<Navigate to="/de#comparison" replace />} />
        <Route path="/de/work" element={<Navigate to="/de#case-studies" replace />} />
        <Route path="/de/about" element={<Navigate to="/de#ceo-letter" replace />} />
        <Route path="/de/start" element={<Navigate to="/de#form" replace />} />
        <Route path="/en/web-design" element={<Navigate to="/en#comparison" replace />} />
        <Route path="/en/app-design" element={<Navigate to="/en#comparison" replace />} />
        <Route path="/en/ux-design" element={<Navigate to="/en#comparison" replace />} />
        <Route path="/en/work" element={<Navigate to="/en#case-studies" replace />} />
        <Route path="/en/about" element={<Navigate to="/en#ceo-letter" replace />} />
        <Route path="/en/start" element={<Navigate to="/en#form" replace />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/de" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
