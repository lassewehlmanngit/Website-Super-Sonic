import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X, ArrowRight, LayoutGrid, Smartphone, Monitor } from 'lucide-react';
import { Button } from '../ui/Button';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const isDe = currentPath.startsWith('/de');

  const links = [
    { de: 'Web Design', en: 'Web Design', path: 'web-design', icon: Monitor },
    { de: 'Software Design', en: 'Software Design', path: 'app-design', icon: LayoutGrid }, // Updated label based on previous context
    { de: 'UX Design', en: 'UX Design', path: 'ux-design', icon: Smartphone },
    { de: 'Arbeiten', en: 'Work', path: 'work', icon: null },
    { de: 'Über Mich', en: 'About', path: 'about', icon: null },
  ];

  // Helper to close menu
  const close = () => setIsOpen(false);

  // Language switcher helper
  const switchLang = (lang: string) => {
    const path = location.pathname;
    return lang === 'en' ? path.replace('/de', '/en') : path.replace('/en', '/de');
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
          <Link to={isDe ? "/de/start" : "/en/start"} onClick={close}>
            <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform">
                {isDe ? "Projekt Starten" : "Start Project"}
            </div>
          </Link>

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
            
            {links.map(link => {
               const targetPath = `/${isDe ? 'de' : 'en'}/${link.path}`;
               const isActive = currentPath === targetPath;
               const Icon = link.icon;

               return (
                 <Link 
                   key={link.path}
                   to={targetPath}
                   onClick={close}
                   className={`
                      flex items-center gap-4 p-4 rounded-2xl transition-all active:scale-[0.98]
                      ${isActive ? 'bg-white shadow-sm border border-black/5' : 'hover:bg-black/5'}
                   `}
                 >
                    {Icon && <Icon size={20} className={isActive ? 'text-sonic-orange' : 'text-zinc-400'} />}
                    <span className={`text-lg font-medium ${isActive ? 'text-black' : 'text-zinc-600'}`}>
                        {isDe ? link.de : link.en}
                    </span>
                    {isActive && <div className="ml-auto w-2 h-2 rounded-full bg-sonic-orange"></div>}
                 </Link>
               );
            })}
         </div>

         {/* Social Proof / Trust Indicator */}
         <div className="mt-8 p-4 bg-void text-white rounded-2xl">
             <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-700 border border-void"></div>
                    <div className="w-6 h-6 rounded-full bg-zinc-600 border border-void"></div>
                    <div className="w-6 h-6 rounded-full bg-zinc-500 border border-void"></div>
                </div>
                <span className="text-xs text-zinc-400">Trusted by founders</span>
             </div>
             <div className="text-sm font-medium">
                "Best investment we made."
             </div>
         </div>

      </div>
    </>
  );
};

