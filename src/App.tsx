import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

// Lazy load layout components to reduce initial bundle size
const Navigation = lazy(() => import('./components/layout/Navigation').then(module => ({ default: module.Navigation })));
const MobileNav = lazy(() => import('./components/layout/MobileNav').then(module => ({ default: module.MobileNav })));
const Footer = lazy(() => import('./components/layout/Footer').then(module => ({ default: module.Footer })));
const ExitIntentPopup = lazy(() => import('./components/global/ExitIntentPopup').then(module => ({ default: module.ExitIntentPopup })));

// Lazy load page components
const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(module => ({ default: module.CaseStudyPage })));
const Impressum = lazy(() => import('./pages/Impressum').then(module => ({ default: module.Impressum })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));
const BusinessFacts = lazy(() => import('./pages/BusinessFacts').then(module => ({ default: module.BusinessFacts })));

// TinaCMS Dynamic Page (for CMS-managed content)
// Uncomment when ready to migrate pages to CMS:
// const DynamicPage = lazy(() => import('./pages/DynamicPage').then(module => ({ default: module.DynamicPage })));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sonic-orange"></div>
  </div>
);

const Layout = () => {
  const location = useLocation();
  const isDe = location.pathname.startsWith('/de');
  const isJa = location.pathname.startsWith('/ja');

  // Update html lang attribute dynamically
  useEffect(() => {
    document.documentElement.lang = isJa ? 'ja' : isDe ? 'de' : 'en';
  }, [isDe, isJa]);

  // Reset scroll on route change (but respect hash navigation)
  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      // If there's a hash, let the browser handle it after a small delay
      // to ensure the element exists in the DOM
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-paper text-void font-sans selection:bg-black selection:text-white relative">
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sonic-orange focus:text-white focus:rounded-lg focus:font-semibold focus:outline-none focus:ring-2 focus:ring-sonic-orange focus:ring-offset-2"
      >
        {isJa ? 'メインコンテンツへスキップ' : isDe ? 'Zum Hauptinhalt springen' : 'Skip to main content'}
      </a>
      <Suspense fallback={null}>
        <Navigation />
      </Suspense>
      <Suspense fallback={null}>
        <MobileNav />
      </Suspense>
      <main id="main-content" tabIndex={-1}>
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

        {/* TinaCMS Admin - Served automatically at /admin by tinacms dev */}
        {/* No route needed here - Tina handles it */}

        {/* Global Pages */}
        <Route path="/business-facts" element={<Layout />}>
           <Route index element={<BusinessFacts />} />
        </Route>

        {/* German Routes */}
        <Route path="/de" element={<Layout />}>
          <Route index element={<LandingPage lang="de" />} />
          <Route path="projekte/:slug" element={<CaseStudyPage lang="de" />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Privacy />} />
        </Route>

        {/* English Routes */}
        <Route path="/en" element={<Layout />}>
          <Route index element={<LandingPage lang="en" />} />
          <Route path="projects/:slug" element={<CaseStudyPage lang="en" />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>

        {/* Japanese Routes */}
        <Route path="/ja" element={<Layout />}>
          <Route index element={<LandingPage lang="ja" />} />
          <Route path="projects/:slug" element={<CaseStudyPage lang="ja" />} />
          <Route path="tokushoho" element={<Impressum />} />
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
        <Route path="/ja/web-design" element={<Navigate to="/ja#comparison" replace />} />
        <Route path="/ja/app-design" element={<Navigate to="/ja#comparison" replace />} />
        <Route path="/ja/ux-design" element={<Navigate to="/ja#comparison" replace />} />
        <Route path="/ja/work" element={<Navigate to="/ja#case-studies" replace />} />
        <Route path="/ja/about" element={<Navigate to="/ja#ceo-letter" replace />} />
        <Route path="/ja/start" element={<Navigate to="/ja#form" replace />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/de" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
