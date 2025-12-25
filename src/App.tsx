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
import { Legal } from './pages/Legal';
import { StartProject } from './pages/StartProject';
import { CaseStudyWCAG } from './pages/work/CaseStudyWCAG';
import { CaseStudySchema } from './pages/work/CaseStudySchema';

// Seasonal Imports
import { ChristmasLoader } from './components/seasonal/ChristmasLoader';
import { SnowOverlay } from './components/seasonal/SnowOverlay';
import { ChristmasBalls } from './components/seasonal/ChristmasBalls';

import { WinterVillage } from './components/seasonal/WinterVillage';

const Layout = () => {
  const location = useLocation();

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-paper text-void font-sans selection:bg-black selection:text-white relative">
      <ChristmasLoader />
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
          <Route path="impressum" element={<Legal lang="de" type="impressum" />} />
          <Route path="datenschutz" element={<Legal lang="de" type="privacy" />} />
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
          <Route path="impressum" element={<Legal lang="en" type="impressum" />} />
          <Route path="privacy" element={<Legal lang="en" type="privacy" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;