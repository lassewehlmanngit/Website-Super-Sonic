import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';
import { useNavigationConfig } from '../../hooks/useNavigationConfig';
import { LanguageSwitcher } from '../molecules/LanguageSwitcher';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    links, 
    lang, 
    labels, 
    switchLang, 
    homeLink 
  } = useNavigationConfig();

  // Helper to close menu
  const close = () => setIsOpen(false);

  const handleAnchorClick = (anchor: string) => {
    close();
    setTimeout(() => {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const scrollToForm = () => {
    close();
    setTimeout(() => {
      const element = document.querySelector('#form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <>
      {/* Floating Bottom Bar (Thumb Zone) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[2001] w-[90%] max-w-sm xl:hidden">
        <div className="bg-black/90 backdrop-blur-xl text-white rounded-full p-2 pl-6 shadow-2xl flex items-center justify-between border border-white/10">
          
          {/* 1. Home Link */}
          <Link to={homeLink} className="p-2 hover:bg-white/10 rounded-full transition-colors" onClick={close} aria-label={labels.home}>
             <Home size={20} aria-hidden="true" />
          </Link>

          {/* 2. Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-full transition-colors font-medium text-sm"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isOpen ? labels.closeMenu : labels.openMenu}
          >
            {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span>{labels.menu}</span>
          </button>

          {/* 3. Primary CTA */}
          <button onClick={scrollToForm}>
            <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform">
                {labels.cta}
            </div>
          </button>

        </div>
      </div>

      {/* The Action Sheet (Overlay) */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[1999] transition-opacity duration-300 xl:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={close}
      />

      {/* Sheet Content */}
      <div 
        id="mobile-nav-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-nav-title"
        className={`fixed bottom-0 left-0 right-0 bg-[#F3F3F3] z-[2000] rounded-t-[2rem] p-6 pb-32 max-h-[90dvh] overflow-y-auto flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] xl:hidden ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
         <div className="w-12 h-1 bg-zinc-300 rounded-full mx-auto mb-8 shrink-0"></div>
         
         {/* Language Switcher */}
         <div className="flex items-center justify-center gap-4 mb-6 pb-6 border-b border-zinc-200 shrink-0">
            <LanguageSwitcher 
              currentLang={lang} 
              switchLang={switchLang} 
              variant="mobile" 
              onLinkClick={close}
            />
         </div>
         
         <h2 id="mobile-nav-title" className="sr-only">{labels.navTitle}</h2>
         <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4 ml-2 shrink-0" aria-hidden="true">
           {labels.navTitle}
         </div>
         
         <nav aria-label={labels.nav} className="flex flex-col gap-2 w-full shrink-0">
           {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <button 
                  key={index}
                  onClick={() => handleAnchorClick(link.anchor)}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all active:scale-[0.98] hover:bg-black/5 text-left w-full"
                >
                   {Icon && <Icon size={20} className="text-zinc-400" aria-hidden="true" />}
                   <span className="text-lg font-medium text-zinc-600">
                       {link.label}
                   </span>
                </button>
              );
           })}
         </nav>

         {/* CTA Button */}
         <div className="mt-8 w-full shrink-0">
             <button 
               onClick={scrollToForm}
               className="w-full bg-sonic-orange text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#E64500] transition-colors shadow-lg"
             >
               {labels.ctaLong}
             </button>
         </div>

         {/* Social Proof / Trust Indicator */}
         <div className="mt-8 p-4 bg-void text-white rounded-2xl shrink-0">
             <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-700 border border-void"></div>
                    <div className="w-6 h-6 rounded-full bg-zinc-600 border border-void"></div>
                    <div className="w-6 h-6 rounded-full bg-zinc-500 border border-void"></div>
                </div>
                <span className="text-xs text-zinc-400">
                  {labels.trusted}
                </span>
             </div>
             <div className="text-sm font-medium">
                {labels.quote}
             </div>
         </div>

      </div>
    </>
  );
};
