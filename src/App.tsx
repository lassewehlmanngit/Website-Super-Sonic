import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

// Lazy load layout components to reduce initial bundle size
const Navigation = lazy(() => import('./components/layout/Navigation').then(module => ({ default: module.Navigation })));
const MobileNav = lazy(() => import('./components/layout/MobileNav').then(module => ({ default: module.MobileNav })));
const Footer = lazy(() => import('./components/layout/Footer').then(module => ({ default: module.Footer })));
const ExitIntentPopup = lazy(() => import('./components/global/ExitIntentPopup').then(module => ({ default: module.ExitIntentPopup })));

// Lazy load all page components
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const ServiceAppDesign = lazy(() => import('./pages/ServiceAppDesign').then(module => ({ default: module.ServiceAppDesign })));
const ServiceWebDesign = lazy(() => import('./pages/ServiceWebDesign').then(module => ({ default: module.ServiceWebDesign })));
const ServiceUX = lazy(() => import('./pages/ServiceUX').then(module => ({ default: module.ServiceUX })));
const Work = lazy(() => import('./pages/Work').then(module => ({ default: module.Work })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Impressum = lazy(() => import('./pages/Impressum').then(module => ({ default: module.Impressum })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));
const BusinessFacts = lazy(() => import('./pages/BusinessFacts').then(module => ({ default: module.BusinessFacts })));
const StartProject = lazy(() => import('./pages/StartProject').then(module => ({ default: module.StartProject })));
const CaseStudyWCAG = lazy(() => import('./pages/work/CaseStudyWCAG').then(module => ({ default: module.CaseStudyWCAG })));
const CaseStudySchema = lazy(() => import('./pages/work/CaseStudySchema').then(module => ({ default: module.CaseStudySchema })));
const KeystaticAdmin = lazy(() => import('./pages/KeystaticAdmin'));

// Conditional seasonal imports
const SnowOverlay = lazy(() => import('./components/seasonal/SnowOverlay').then(module => ({ default: module.SnowOverlay })));
const WinterVillage = lazy(() => import('./components/seasonal/WinterVillage').then(module => ({ default: module.WinterVillage })));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sonic-orange"></div>
  </div>
);

const Layout = () => {
  const location = useLocation();
  const [showSeasonal, setShowSeasonal] = React.useState(false);

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Only load seasonal components during winter months
  // Temporarily disabled all Christmas decorations
  useEffect(() => {
    // const month = new Date().getMonth();
    // setShowSeasonal(month === 11 || month === 0 || month === 1); // Dec, Jan, Feb
    setShowSeasonal(false); // All Christmas decorations deactivated
  }, []);

  return (
    <div className="min-h-screen bg-paper text-void font-sans selection:bg-black selection:text-white relative">
      {showSeasonal && (
        <Suspense fallback={null}>
          <SnowOverlay />
        </Suspense>
      )}
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
        {showSeasonal && (
          <Suspense fallback={null}>
            <WinterVillage />
          </Suspense>
        )}
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
          <Route index element={<Home lang="de" />} />
          <Route path="web-design" element={<ServiceWebDesign lang="de" />} />
          <Route path="app-design" element={<ServiceAppDesign lang="de" />} />
          <Route path="ux-design" element={<ServiceUX lang="de" />} />
          <Route path="work" element={<Work lang="de" />} />
          <Route path="work/wcag-tool" element={<CaseStudyWCAG lang="de" />} />
          <Route path="work/schema-generator" element={<CaseStudySchema lang="de" />} />
          <Route path="about" element={<About lang="de" />} />
          <Route path="start" element={<StartProject lang="de" />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<Privacy />} />
        </Route>

        {/* English Routes */}
        <Route path="/en" element={<Layout />}>
          <Route index element={<Home lang="en" />} />
          <Route path="web-design" element={<ServiceWebDesign lang="en" />} />
          <Route path="app-design" element={<ServiceAppDesign lang="en" />} />
          <Route path="ux-design" element={<ServiceUX lang="en" />} />
          <Route path="work" element={<Work lang="en" />} />
          <Route path="work/wcag-tool" element={<CaseStudyWCAG lang="en" />} />
          <Route path="work/schema-generator" element={<CaseStudySchema lang="en" />} />
          <Route path="about" element={<About lang="en" />} />
          <Route path="start" element={<StartProject lang="en" />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
