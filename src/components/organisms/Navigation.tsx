import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../atoms/Container';
import { Link } from '../atoms/Link';
import { Button } from '../atoms/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { cn } from '../../lib/utils';

export const Navigation: React.FC = () => {
  const { isScrolled } = useScrollPosition(20);
  const location = useLocation();
  const currentPath = location.pathname;
  const isDe = currentPath.startsWith('/de');
  const isJa = currentPath.startsWith('/ja');
  const isEn = !isDe && !isJa;

  // Pages with dark/colored hero backgrounds
  const isLandingPage = currentPath === '/de' || currentPath === '/en' || currentPath === '/ja' || currentPath === '/';
  const isCaseStudyPage = currentPath.includes('/projekte/') || currentPath.includes('/projects/');
  const isDarkSection = isLandingPage || isCaseStudyPage;

  const textColor = isScrolled ? 'text-black' : (isDarkSection ? 'text-white' : 'text-black');
  
  const navBg = isScrolled 
    ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm py-3' 
    : 'bg-transparent border-transparent py-6';
    
  const logoColor = isScrolled ? 'text-black' : (isDarkSection ? 'text-white' : 'text-black');
  const buttonVariant = isScrolled ? 'primary' : (isDarkSection ? 'primary' : 'primary'); // Always primary unless overridden

  const switchLang = (targetLang: string) => {
    // Basic logic to replace prefix
    // Assuming simple structure /lang/...
    const path = location.pathname;
    const pathWithoutLang = path.replace(/^\/(de|en|ja)/, '');
    // If no lang prefix (root), add it
    return `/${targetLang}${pathWithoutLang}`;
  };

  const links = isJa ? [
    { label: '比較', anchor: '#comparison' },
    { label: 'プロセス', anchor: '#engineering' },
    { label: 'プロジェクト', anchor: '#case-studies' },
    { label: '会社概要', anchor: '#ceo-letter' },
    { label: 'FAQ', anchor: '#faq' },
  ] : isDe ? [
    { label: 'Vergleich', anchor: '#comparison' },
    { label: 'Prozess', anchor: '#engineering' },
    { label: 'Projekte', anchor: '#case-studies' },
    { label: 'Über Uns', anchor: '#ceo-letter' },
    { label: 'FAQ', anchor: '#faq' },
  ] : [
    { label: 'Comparison', anchor: '#comparison' },
    { label: 'Process', anchor: '#engineering' },
    { label: 'Projects', anchor: '#case-studies' },
    { label: 'About Us', anchor: '#ceo-letter' },
    { label: 'FAQ', anchor: '#faq' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToForm = () => {
    const element = document.querySelector('#form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const homeLink = isJa ? '/ja' : isDe ? '/de' : '/en';

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out", navBg)} aria-label="Main navigation">
      <Container className="flex items-center justify-between">
        
        <Link 
          to={homeLink} 
          className={cn("text-xl font-bold tracking-tighter uppercase transition-colors duration-500 hover:no-underline", logoColor)}
        >
          Norddorf<span className="text-sonic-orange">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
            <div className={cn(
              "flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500 mr-4",
              isScrolled ? 'bg-transparent' : 'bg-white/5 backdrop-blur-sm border border-white/10'
            )}>
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.anchor}
                  onClick={(e) => handleAnchorClick(e, link.anchor)}
                  className={cn(
                    "text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange",
                    textColor,
                    "hover:bg-black/5 hover:text-sonic-orange"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className={cn("flex gap-3 text-xs font-mono font-bold mr-6 transition-colors duration-500", textColor)}>
                <Link to={switchLang('de')} className={cn("hover:no-underline", isDe ? 'underline decoration-2 underline-offset-4 decoration-sonic-orange' : 'opacity-50 hover:opacity-100')}>DE</Link>
                <Link to={switchLang('en')} className={cn("hover:no-underline", isEn ? 'underline decoration-2 underline-offset-4 decoration-sonic-orange' : 'opacity-50 hover:opacity-100')}>EN</Link>
                <Link to={switchLang('ja')} className={cn("hover:no-underline", isJa ? 'underline decoration-2 underline-offset-4 decoration-sonic-orange' : 'opacity-50 hover:opacity-100')}>JP</Link>
            </div>

            <Button 
              size="sm" 
              variant={buttonVariant} 
              className="transition-all duration-500"
              onClick={scrollToForm}
            >
              {isJa ? '無料デザイン' : isDe ? 'Gratis-Entwurf' : 'Free Design'}
            </Button>
        </div>
      </Container>
    </nav>
  );
};
