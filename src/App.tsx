import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { ExitIntentModal } from './components/features/ExitIntentModal';
import { Home } from './pages/Home';
import { ServiceAppDesign } from './pages/ServiceAppDesign';
import { ServiceWebDesign } from './pages/ServiceWebDesign';
import { ServiceUX } from './pages/ServiceUX';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Impressum } from './pages/Impressum';
import { Privacy } from './pages/Privacy';
import { BusinessFacts } from './pages/BusinessFacts';
import { StartProject } from './pages/StartProject';
import { CaseStudyWCAG } from './pages/work/CaseStudyWCAG';
import { CaseStudySchema } from './pages/work/CaseStudySchema';
import KeystaticAdmin from './pages/KeystaticAdmin';

// Seasonal Imports
import { SnowOverlay } from './components/seasonal/SnowOverlay';
import { WinterVillage } from './components/seasonal/WinterVillage';

const Layout = () => {
  const location = useLocation();

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-paper text-void font-sans selection:bg-black selection:text-white relative">
      <SnowOverlay />
      <Navigation />
      <MobileNav />
      <main>
        <Outlet />
      </main>
      <div className="bg-void relative overflow-hidden">
        <WinterVillage />
        <Footer />
      </div>
      <ExitIntentModal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/de" replace />} />

        {/* Keystatic Admin */}
        <Route path="/keystatic/*" element={<KeystaticAdmin />} />

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
