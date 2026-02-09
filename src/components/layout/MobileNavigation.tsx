import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';
import { useNavigationConfig } from '../../hooks/useNavigationConfig';
import { LanguageSwitcher } from '../molecules/LanguageSwitcher';
import { Button } from '../atoms/Button';
import { cn } from '../../lib/utils';

export const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    links, 
    lang, 
    labels, 
    switchLang, 
    homeLink 
  } = useNavigationConfig();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
      {/* Floating Bottom Bar (Thumb Zone) - Visible only when menu is CLOSED */}
      <div 
        className={cn(
          "fixed bottom-[var(--mobile-bar-bottom,2rem)] left-1/2 -translate-x-1/2 z-[90]",
          "w-[calc(100%-var(--space-md)*2)] max-w-[24rem]",
          "xl:hidden transition-all duration-300 ease-out",
          isOpen ? "translate-y-24 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        )}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="bg-void/90 backdrop-blur-xl text-white rounded-full p-2 pl-6 shadow-2xl flex items-center justify-between border border-white/10">
          
          {/* 1. Home Link */}
          <Link 
            to={homeLink} 
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white" 
            onClick={close} 
            aria-label={labels.home}
          >
             <Home size={20} aria-hidden="true" />
          </Link>

          {/* 2. Menu Toggle */}
          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-full transition-colors font-medium text-sm text-white"
            aria-expanded={false}
            aria-controls="mobile-nav-menu"
            aria-label={labels.openMenu}
          >
            <Menu size={18} aria-hidden="true" />
            <span>{labels.menu}</span>
          </button>

          {/* 3. Primary CTA */}
          <Button 
            onClick={scrollToForm}
            size="sm"
            className="bg-white text-black hover:bg-zinc-200 hover:text-black border-none rounded-full text-xs font-bold px-4 py-2 h-auto"
          >
            {labels.cta}
          </Button>

        </div>
      </div>

      {/* Full Screen Overlay Menu */}
      <div 
        id="mobile-nav-menu"
        role="dialog"
        aria-modal="true"
        aria-label={labels.navTitle}
        className={cn(
          "fixed inset-0 bg-[#F3F3F3] z-[2000] flex flex-col transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        style={{ height: '100dvh' }}
      >
         {/* Header: Close Button & Language */}
         <div className="flex-none flex items-center justify-between px-[var(--container-padding)] py-6 bg-[#F3F3F3] z-10">
            <div className="text-xl font-bold tracking-tighter uppercase">
               Norddorf<span className="text-sonic-orange">.</span>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={close}
              aria-label={labels.closeMenu}
              className="bg-white hover:bg-zinc-100 rounded-full shadow-sm h-12 w-12 flex-shrink-0"
            >
              <X size={24} className="text-black" />
            </Button>
         </div>

         {/* Scrollable Content */}
         <div 
            className="flex-1 overflow-y-auto px-[var(--container-padding)] w-full"
            style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 4rem)' }}
         >
            <div className="flex flex-col gap-8 pb-12 w-full">
              
              {/* Navigation Links */}
              <nav aria-label={labels.nav} className="flex flex-col gap-3 w-full">
                {links.map((link, index) => {
                   const Icon = link.icon;
                   return (
                     <button 
                       key={index}
                       onClick={() => handleAnchorClick(link.anchor)}
                       className="group flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-zinc-100 transition-all active:scale-[0.98] w-full text-left"
                     >
                        <div className="p-2 bg-zinc-50 rounded-full text-zinc-400 group-hover:text-sonic-orange transition-colors flex-shrink-0">
                          {Icon && <Icon size={20} aria-hidden="true" />}
                        </div>
                        <span className="text-xl font-medium text-[var(--color-void)]">
                            {link.label}
                        </span>
                     </button>
                   );
                })}
              </nav>

              {/* Actions Area */}
              <div className="flex flex-col gap-6 w-full">
                  {/* Big CTA */}
                  <Button 
                    onClick={scrollToForm}
                    className="w-full py-6 text-lg shadow-xl shadow-sonic-orange/20"
                    size="lg"
                  >
                    {labels.ctaLong}
                  </Button>

                  {/* Language Switcher */}
                  <div className="flex justify-center py-4 w-full">
                    <LanguageSwitcher 
                      currentLang={lang} 
                      switchLang={switchLang} 
                      variant="mobile" 
                      onLinkClick={close}
                    />
                  </div>
              </div>

              {/* Trust Indicator */}
              <div className="p-6 bg-void text-white rounded-3xl w-full">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="flex -space-x-2 flex-shrink-0">
                         <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-void"></div>
                         <div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-void"></div>
                         <div className="w-8 h-8 rounded-full bg-zinc-500 border-2 border-void"></div>
                     </div>
                     <span className="text-sm text-zinc-400 font-medium">
                       {labels.trusted}
                     </span>
                  </div>
                  <div className="text-lg font-medium leading-snug">
                     {labels.quote}
                  </div>
              </div>

            </div>
         </div>
      </div>
    </>
  );
};
