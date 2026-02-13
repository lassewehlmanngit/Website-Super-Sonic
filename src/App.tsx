import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, Outlet, useLocation, useParams } from 'react-router-dom';

// Lazy load layout components to reduce initial bundle size
const Navigation = lazy(() => import('./components/organisms/Navigation').then(module => ({ default: module.Navigation })));
const MobileNavigation = lazy(() => import('./components/layout/MobileNavigation').then(module => ({ default: module.MobileNavigation })));
const Footer = lazy(() => import('./components/organisms/Footer').then(module => ({ default: module.Footer })));

// Lazy load page components
const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(module => ({ default: module.ProjectsPage })));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(module => ({ default: module.CaseStudyPage })));
const Impressum = lazy(() => import('./pages/Impressum').then(module => ({ default: module.Impressum })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));
const AGB = lazy(() => import('./pages/AGB').then(module => ({ default: module.AGB })));
const BusinessFacts = lazy(() => import('./pages/BusinessFacts').then(module => ({ default: module.BusinessFacts })));
const IndustryPage = lazy(() => import('./pages/IndustryPage').then(module => ({ default: module.IndustryPage })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

import { CookieBanner } from './components/molecules/CookieBanner';

// TinaCMS Dynamic Page (for CMS-managed content)
// Uncomment when ready to migrate pages to CMS:
const DynamicPage = lazy(() => import('./pages/DynamicPage').then(module => ({ default: module.DynamicPage })));

// Hero skeleton - matches static HTML shell for smooth FCP→LCP (no spinner flash)
import { HeroSkeleton } from './components/HeroSkeleton';

const Layout = () => {
  const location = useLocation();
  const isDe = location.pathname.startsWith('/de');
  const isJa = location.pathname.startsWith('/ja');

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
        <MobileNavigation />
      </Suspense>
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<HeroSkeleton />}>
          <Outlet />
        </Suspense>
      </main>
      <div className="bg-void relative overflow-hidden">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
      <CookieBanner lang={isJa ? 'ja' : isDe ? 'de' : 'en'} />
    </div>
  );
};

const ProjectRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/de/projekte/${slug}`} replace />;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/de" replace />} />

      {/* Redirects for crawler fixes */}
      <Route path="/de/business-facts" element={<Navigate to="/business-facts" replace />} />
      <Route path="/de/privacy" element={<Navigate to="/de/datenschutz" replace />} />
      <Route path="/de/terms" element={<Navigate to="/de/agb" replace />} />
      <Route path="/de/projects/:slug" element={<ProjectRedirect />} />

      {/* TinaCMS Admin - Served automatically at /admin by tinacms dev */}
      {/* No route needed here - Tina handles it */}

      {/* Global Pages */}
      <Route path="/business-facts" element={<Layout />}>
        <Route index element={<BusinessFacts />} />
      </Route>

      {/* German Routes */}
      <Route path="/de" element={<Layout />}>
        <Route index element={<LandingPage lang="de" />} />
        <Route path="projekte" element={<ProjectsPage lang="de" />} />
        <Route path="projekte/:slug" element={<CaseStudyPage lang="de" />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Privacy />} />
        <Route path="agb" element={<AGB />} />
        {/* Industry Pages */}
        <Route path="handwerk/:slug" element={<IndustryPage />} />
        {/* CMS Pages */}
        <Route path=":slug" element={<DynamicPage lang="de" />} />
        {/* 404 for /de/* */}
        <Route path="*" element={<NotFound lang="de" />} />
      </Route>

      {/* English Routes */}
      <Route path="/en" element={<Layout />}>
        <Route index element={<LandingPage lang="en" />} />
        <Route path="projects" element={<ProjectsPage lang="en" />} />
        <Route path="projects/:slug" element={<CaseStudyPage lang="en" />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<AGB />} />
        {/* CMS Pages */}
        <Route path=":slug" element={<DynamicPage lang="en" />} />
        {/* 404 for /en/* */}
        <Route path="*" element={<NotFound lang="en" />} />
      </Route>

      {/* Japanese Routes */}
      <Route path="/ja" element={<Layout />}>
        <Route index element={<LandingPage lang="ja" />} />
        <Route path="projects" element={<ProjectsPage lang="ja" />} />
        <Route path="projects/:slug" element={<CaseStudyPage lang="ja" />} />
        <Route path="tokushoho" element={<Impressum />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<AGB />} />
        {/* CMS Pages */}
        <Route path=":slug" element={<DynamicPage lang="ja" />} />
        {/* 404 for /ja/* */}
        <Route path="*" element={<NotFound lang="ja" />} />
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
      {/* Catch-all redirect to 404 page (wrapped in layout for consistency) */}
      <Route path="*" element={<Layout><NotFound lang="de" /></Layout>} />
    </Routes>
  );
};

export default App;
