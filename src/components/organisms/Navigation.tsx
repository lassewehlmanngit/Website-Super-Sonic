import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { cn } from '../../lib/utils';
import { useNavigationConfig } from '../../hooks/useNavigationConfig';
import { LanguageSwitcher } from '../molecules/LanguageSwitcher';

export const Navigation: React.FC = () => {
  const { 
    links, 
    lang, 
    labels, 
    isScrolled, 
    isDarkSection, 
    switchLang, 
    homeLink 
  } = useNavigationConfig();

  const textColor = isScrolled ? 'text-black' : (isDarkSection ? 'text-white' : 'text-black');
  
  const navBg = isScrolled 
    ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm py-3' 
    : 'bg-transparent border-transparent py-6';
    
  const logoColor = isScrolled ? 'text-black' : (isDarkSection ? 'text-white' : 'text-black');
  const buttonVariant = isScrolled ? 'primary' : (isDarkSection ? 'primary' : 'primary');

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
        <div className="hidden xl:flex items-center gap-2">
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
            
            <div className={cn("mr-6 transition-colors duration-500", textColor)}>
               <LanguageSwitcher 
                 currentLang={lang} 
                 switchLang={switchLang} 
                 variant="desktop"
                 className={textColor} // Pass text color to ensure visibility on dark backgrounds
               />
            </div>

            <Button 
              size="sm" 
              variant={buttonVariant} 
              className="transition-all duration-500"
              onClick={scrollToForm}
            >
              {labels.cta}
            </Button>
        </div>
      </Container>
    </nav>
  );
};
