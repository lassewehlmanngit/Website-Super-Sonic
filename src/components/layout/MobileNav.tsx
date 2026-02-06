import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X, Scale, Users, HelpCircle, Zap, GitCompare } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const isDe = currentPath.startsWith('/de');
  const isJa = currentPath.startsWith('/ja');
  const isEn = !isDe && !isJa;

  // Anchor-based navigation links for single landing page
  const links = isJa ? [
    { label: '比較', anchor: '#comparison', icon: GitCompare },
    { label: 'プロセス', anchor: '#engineering', icon: Zap },
    { label: 'プロジェクト', anchor: '#case-studies', icon: Scale },
    { label: '会社概要', anchor: '#ceo-letter', icon: Users },
    { label: 'FAQ', anchor: '#faq', icon: HelpCircle },
  ] : isDe ? [
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
  const switchLang = (targetLang: string) => {
    const path = location.pathname;
    // Remove current language prefix and add new one
    const pathWithoutLang = path.replace(/^\/(de|en|ja)/, '');
    return `/${targetLang}${pathWithoutLang}`;
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

  // Get home link based on current language
  const homeLink = isJa ? '/ja' : isDe ? '/de' : '/en';

  // Get localized labels
  const menuLabel = isJa ? 'メニュー' : isDe ? 'Menü' : 'Menu';
  const openMenuLabel = isJa ? 'メニューを開く' : isDe ? 'Menü öffnen' : 'Open menu';
  const closeMenuLabel = isJa ? 'メニューを閉じる' : isDe ? 'Menü schließen' : 'Close menu';
  const homeLabel = isJa ? 'ホームへ' : isDe ? 'Zur Startseite' : 'Go to homepage';
  const ctaLabel = isJa ? '無料デザイン' : isDe ? 'Gratis-Entwurf' : 'Free Design';
  const ctaLongLabel = isJa ? '無料デザインをリクエスト' : isDe ? 'Gratis-Entwurf anfordern' : 'Request free design';
  const navLabel = isJa ? 'メインナビゲーション' : isDe ? 'Hauptnavigation' : 'Main navigation';
  const trustedLabel = isJa ? '創業者から信頼されています' : isDe ? 'Vertraut von Gründern' : 'Trusted by founders';
  const quoteLabel = isJa ? '「私たちが行った最高の投資です。」' : isDe ? '"Die beste Investition, die wir gemacht haben."' : '"Best investment we made."';

  return (
    <>
      {/* Floating Bottom Bar (Thumb Zone) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:hidden">
        <div className="bg-black/90 backdrop-blur-xl text-white rounded-full p-2 pl-6 shadow-2xl flex items-center justify-between border border-white/10">
          
          {/* 1. Home Link */}
          <Link to={homeLink} className="p-2 hover:bg-white/10 rounded-full transition-colors" onClick={close} aria-label={homeLabel}>
             <Home size={20} aria-hidden="true" />
          </Link>

          {/* 2. Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-full transition-colors font-medium text-sm"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isOpen ? closeMenuLabel : openMenuLabel}
          >
            {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span>{menuLabel}</span>
          </button>

          {/* 3. Primary CTA */}
          <button onClick={scrollToForm}>
            <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform">
                {ctaLabel}
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
        id="mobile-nav-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-nav-title"
        className={`fixed bottom-0 left-0 right-0 bg-paper z-40 rounded-t-[2rem] p-6 pb-32 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
         <div className="w-12 h-1 bg-zinc-300 rounded-full mx-auto mb-8"></div>
         
         {/* Language Switcher */}
         <div className="flex items-center justify-center gap-4 mb-6 pb-6 border-b border-zinc-200">
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
              className={`text-sm font-mono font-bold transition-colors ${isEn ? 'text-black underline decoration-2 underline-offset-4 decoration-sonic-orange' : 'text-zinc-400 hover:text-black'}`}
            >
              EN
            </Link>
            <div className="w-px h-4 bg-zinc-300"></div>
            <Link 
              to={switchLang('ja')} 
              onClick={close}
              className={`text-sm font-mono font-bold transition-colors ${isJa ? 'text-black underline decoration-2 underline-offset-4 decoration-sonic-orange' : 'text-zinc-400 hover:text-black'}`}
            >
              JP
            </Link>
         </div>
         
         <div className="grid gap-2">
            <h2 id="mobile-nav-title" className="sr-only">{isJa ? 'ナビゲーション' : isDe ? 'Navigation' : 'Navigation'}</h2>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4 ml-2" aria-hidden="true">
              {isJa ? 'ナビゲーション' : 'Navigation'}
            </div>
            
            <nav aria-label={navLabel}>
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
         </div>

         {/* CTA Button */}
         <button 
           onClick={scrollToForm}
           className="w-full mt-6 bg-sonic-orange text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#E64500] transition-colors"
         >
           {ctaLongLabel}
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
                  {trustedLabel}
                </span>
             </div>
             <div className="text-sm font-medium">
                {quoteLabel}
             </div>
         </div>

      </div>
    </>
  );
};
