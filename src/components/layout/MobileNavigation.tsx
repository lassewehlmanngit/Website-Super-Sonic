import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, ArrowRight } from 'lucide-react';
import { useNavigationConfig } from '../../hooks/useNavigationConfig';
import { LanguageSwitcher } from '../molecules/LanguageSwitcher';
import { Button } from '../atoms/Button';
import { Sheet } from '../molecules/Sheet'; 
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
      {/* 1. Closed State: Floating Thumb Zone */}
      {!isOpen && (
        <div 
          className={cn(
            "fixed bottom-[var(--mobile-bar-bottom,2rem)] left-1/2 -translate-x-1/2 z-[90]",
            "w-[calc(100%-var(--space-md)*2)] max-w-[24rem]",
            "xl:hidden transition-all duration-300 ease-out animate-fade-in-up"
          )}
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="bg-void/90 backdrop-blur-xl text-white rounded-full p-2 pl-6 shadow-2xl flex items-center justify-between border border-white/10">
            <Link 
              to={homeLink} 
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white" 
              onClick={close} 
              aria-label={labels.home}
            >
               <Home size={20} />
            </Link>

            <button 
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-full transition-colors font-medium text-sm text-white"
            >
              <Menu size={18} />
              <span>{labels.menu}</span>
            </button>

            <Button 
              onClick={scrollToForm} 
              size="sm"
              className="bg-white text-black hover:bg-zinc-200 hover:text-black border-none rounded-full text-xs font-bold px-4 py-2 h-auto"
            >
              {labels.cta}
            </Button>
          </div>
        </div>
      )}

      {/* 2. Open State: Full Screen Sheet */}
      <Sheet 
        isOpen={isOpen} 
        onClose={close}
        variant="full" // FORCE FULL SCREEN
        title={labels.navTitle}
        className="bg-[#F3F3F3]"
      >
         <div className="flex flex-col min-h-full">
            
            {/* Header: Logo */}
            <div className="flex-none flex items-center justify-between px-6 py-8">
               <div className="text-xl font-bold tracking-tighter uppercase">
                  Norddorf<span className="text-sonic-orange">.</span>
               </div>
               {/* Close button is handled by Sheet component */}
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 px-6 pb-12">
               <div className="flex flex-col gap-10">
                  
                  {/* Block 1: Navigation Links */}
                  <nav className="static flex flex-col gap-3 w-full z-10">
                    {links.map((link, index) => {
                       const Icon = link.icon;
                       return (
                         <button 
                           key={index}
                           onClick={() => handleAnchorClick(link.anchor)}
                           className="relative flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm border border-zinc-100 transition-all active:scale-[0.98] text-left w-full group overflow-hidden"
                         >
                            <div className="p-2.5 bg-zinc-50 rounded-full text-zinc-400 group-hover:text-sonic-orange group-hover:bg-sonic-orange/10 transition-colors shrink-0">
                              {Icon && <Icon size={22} />}
                            </div>
                            <span className="text-xl font-semibold text-void">
                                {link.label}
                            </span>
                         </button>
                       );
                    })}
                  </nav>

                  {/* Block 2: CTA & Language */}
                  <div className="flex flex-col gap-6 relative w-full z-10">
                      <Button 
                        onClick={scrollToForm}
                        className="w-full py-6 text-lg shadow-xl shadow-sonic-orange/20 flex items-center justify-center gap-2"
                        size="lg"
                      >
                        {labels.ctaLong}
                        <ArrowRight size={20} />
                      </Button>

                      <div className="flex justify-center w-full">
                        <LanguageSwitcher 
                          currentLang={lang} 
                          switchLang={switchLang} 
                          variant="mobile" 
                          onLinkClick={close}
                          className="py-2.5 px-8 bg-white rounded-full border border-zinc-200 shadow-sm"
                        />
                      </div>
                  </div>

                  {/* Block 3: Trust Indicator */}
                  <div className="p-6 bg-void text-white rounded-3xl mt-4 w-full">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="flex -space-x-3">
                             <div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-void"></div>
                             <div className="w-8 h-8 rounded-full bg-zinc-500 border-2 border-void"></div>
                             <div className="w-8 h-8 rounded-full bg-zinc-400 border-2 border-void"></div>
                         </div>
                         <span className="text-sm text-zinc-400 font-medium">
                           {labels.trusted}
                         </span>
                      </div>
                      <p className="text-lg font-medium leading-snug opacity-90">
                         {labels.quote}
                      </p>
                  </div>

               </div>
            </div>
         </div>
      </Sheet>
    </>
  );
};
