import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const isDe = currentPath.startsWith('/de');

  // Routes whose hero sections use a dark/void background,
  // so the nav should render in its \"on dark\" style when not scrolled.
  const darkHeroRoutes = [
    '/de',
    '/en',
    '/de/web-design',
    '/en/web-design',
    '/de/app-design',
    '/en/app-design',
    '/de/ux-design',
    '/en/ux-design',
    '/de/work',
    '/en/work',
    '/de/about',
    '/en/about',
  ];

  // Treat routes and their sub-paths as "dark" hero sections,
  // so logo + links render in white on initial load (before scroll),
  // even if the URL has a trailing slash or extra segments.
  const isDarkSection = darkHeroRoutes.some((route) => {
    return currentPath === route || currentPath.startsWith(`${route}/`);
  });

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLang = (lang: string) => {
    const path = location.pathname;
    return lang === 'en' ? path.replace('/de', '/en') : path.replace('/en', '/de');
  };

  const links = [
    { de: 'Web Design', en: 'Web Design', path: 'web-design' },
    { de: 'Software Design', en: 'Software Design', path: 'app-design' },
    { de: 'UX Design', en: 'UX Design', path: 'ux-design' },
    { de: 'Arbeiten', en: 'Work', path: 'work' },
    { de: 'Über Mich', en: 'About', path: 'about' },
  ];

  const textColor = isScrolled ? 'text-black' : (isDarkSection ? 'text-white' : 'text-black');
  
  const navBg = isScrolled 
    ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm py-3' 
    : 'bg-transparent border-transparent py-6';
    
  const logoColor = isScrolled ? 'text-black' : (isDarkSection ? 'text-white' : 'text-black');
  const buttonVariant = isScrolled ? 'primary' : (isDarkSection ? 'white' : 'primary');

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navBg}`} aria-label="Main navigation">
      <div className="max-w-[95%] mx-auto flex items-center justify-between">
        
        <Link to={isDe ? "/de" : "/en"} className={`text-xl font-bold tracking-tighter uppercase transition-colors duration-500 ${logoColor}`}>
          Super Sonic<span className="text-sonic-orange">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2 bg-transparent">
            <div className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500 mr-4 ${isScrolled ? 'bg-transparent' : 'bg-white/5 backdrop-blur-sm border border-white/10'}`}>
              {links.map(link => {
                const targetPath = `/${isDe ? 'de' : 'en'}/${link.path}`;
                const isActive = currentPath === targetPath;
                return (
                  <Link 
                      key={link.path} 
                      to={targetPath} 
                      aria-current={isActive ? 'page' : undefined}
                      className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 ${textColor} hover:bg-black/5 hover:text-sonic-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
                  >
                      {isDe ? link.de : link.en}
                  </Link>
                );
              })}
            </div>
            
            <div className={`flex gap-4 text-xs font-mono font-bold mr-6 transition-colors duration-500 ${textColor}`}>
                <Link to={switchLang('de')} className={isDe ? 'underline decoration-2 underline-offset-4 decoration-sonic-orange' : 'opacity-50 hover:opacity-100'}>DE</Link>
                <Link to={switchLang('en')} className={!isDe ? 'underline decoration-2 underline-offset-4 decoration-sonic-orange' : 'opacity-50 hover:opacity-100'}>EN</Link>
            </div>

            <Link to={isDe ? "/de/start" : "/en/start"}>
                <Button size="sm" variant={buttonVariant} className="transition-all duration-500">
                  {isDe ? 'Start Project' : 'Start Project'}
                </Button>
            </Link>
        </div>
      </div>
    </nav>
  );
};