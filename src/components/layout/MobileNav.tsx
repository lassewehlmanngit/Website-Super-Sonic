import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X, Scale, Users, HelpCircle, Zap, GitCompare } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const isDe = currentPath.startsWith('/de');

  // Anchor-based navigation links for single landing page
  const links = isDe ? [
    { label: 'Vergleich', anchor: '#comparison', icon: GitCompare },
    { label: 'Prozess', anchor: '#engineering', icon: Zap },
    { label: 'Projekte', anchor: '#case-studies', icon: Scale },
    { label: 'Über Uns', anchor: '#ceo-letter', icon: Users },
    { label: 'FAQ', anchor: '#faq', icon: HelpCircle },
  ] : [
    { label: 'Comparison', anchor: '#comparison', icon: GitCompare },
    { label: 'Process', anchor: '#engineering', icon: Zap },
    { label: 'Projects', anchor: '#case-studies', icon: Scale },
    { label: 'About Us', anchor: '#ceo-letter', icon: Users },
    { label: 'FAQ', anchor: '#faq', icon: HelpCircle },
  ];

  // Helper to close menu
  const close = () => setIsOpen(false);

  // Language switcher helper
  const switchLang = (lang: string) => {
    const path = location.pathname;
    return lang === 'en' ? path.replace('/de', '/en') : path.replace('/en', '/de');
  };

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
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:hidden">
        <div className="bg-black/90 backdrop-blur-xl text-white rounded-full p-2 pl-6 shadow-2xl flex items-center justify-between border border-white/10">
          
          {/* 1. Home Link */}
          <Link to={isDe ? "/de" : "/en"} className="p-2 hover:bg-white/10 rounded-full transition-colors" onClick={close}>
             <Home size={20} />
          </Link>

          {/* 2. Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-full transition-colors font-medium text-sm"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
            <span>{isDe ? "Menü" : "Menu"}</span>
          </button>

          {/* 3. Primary CTA */}
          <button onClick={scrollToForm}>
            <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform">
                {isDe ? "Gratis-Entwurf" : "Free Design"}
            </div>
          </button>

        </div>
      </div>

      {/* The Action Sheet (Overlay) */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={close}
      />

      {/* Sheet Content */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-paper z-40 rounded-t-[2rem] p-6 pb-32 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
         <div className="w-12 h-1 bg-zinc-300 rounded-full mx-auto mb-8"></div>
         
         {/* Language Switcher */}
         <div className="flex items-center justify-center gap-6 mb-6 pb-6 border-b border-zinc-200">
            <Link 
              to={switchLang('de')} 
              onClick={close}
              className={`text-sm font-mono font-bold transition-colors ${isDe ? 'text-black underline decoration-2 underline-offset-4 decoration-sonic-orange' : 'text-zinc-400 hover:text-black'}`}
            >
              DE
            </Link>
            <div className="w-px h-4 bg-zinc-300"></div>
            <Link 
              to={switchLang('en')} 
              onClick={close}
              className={`text-sm font-mono font-bold transition-colors ${!isDe ? 'text-black underline decoration-2 underline-offset-4 decoration-sonic-orange' : 'text-zinc-400 hover:text-black'}`}
            >
              EN
            </Link>
         </div>
         
         <div className="grid gap-2">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4 ml-2">Navigation</div>
            
            {links.map((link, index) => {
               const Icon = link.icon;

               return (
                 <button 
                   key={index}
                   onClick={() => handleAnchorClick(link.anchor)}
                   className="flex items-center gap-4 p-4 rounded-2xl transition-all active:scale-[0.98] hover:bg-black/5 text-left w-full"
                 >
                    {Icon && <Icon size={20} className="text-zinc-400" />}
                    <span className="text-lg font-medium text-zinc-600">
                        {link.label}
                    </span>
                 </button>
               );
            })}
         </div>

         {/* CTA Button */}
         <button 
           onClick={scrollToForm}
           className="w-full mt-6 bg-sonic-orange text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#E64500] transition-colors"
         >
           {isDe ? "Gratis-Entwurf anfordern" : "Request free design"}
         </button>

         {/* Social Proof / Trust Indicator */}
         <div className="mt-6 p-4 bg-void text-white rounded-2xl">
             <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-700 border border-void"></div>
                    <div className="w-6 h-6 rounded-full bg-zinc-600 border border-void"></div>
                    <div className="w-6 h-6 rounded-full bg-zinc-500 border border-void"></div>
                </div>
                <span className="text-xs text-zinc-400">
                  {isDe ? "Vertraut von Gründern" : "Trusted by founders"}
                </span>
             </div>
             <div className="text-sm font-medium">
                {isDe ? "\"Die beste Investition, die wir gemacht haben.\"" : "\"Best investment we made.\""}
             </div>
         </div>

      </div>
    </>
  );
};
