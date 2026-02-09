import React from 'react';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { Link } from '../atoms/Link';
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
  
  // Scrolled state vs Transparent state
  const navClasses = isScrolled 
    ? 'backdrop-blur-[var(--nav-glass-blur)] bg-[var(--nav-glass-bg)] border-b border-[var(--nav-glass-border)] shadow-sm' 
    : 'bg-transparent border-transparent';
    
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
    <header 
      className={cn(
        "fixed top-0 w-full z-[var(--nav-z-index)] h-[var(--nav-height-desktop)] transition-all duration-500 ease-in-out hidden xl:flex items-center", 
        navClasses
      )} 
      aria-label="Main navigation"
    >
      <Container className="flex items-center justify-between h-full">
        
        <Link 
          to={homeLink} 
          className={cn("text-xl font-bold tracking-tighter uppercase transition-colors duration-500 hover:no-underline", logoColor)}
          variant="default"
        >
          Norddorf<span className="text-sonic-orange">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="flex items-center gap-8">
            <nav className="flex items-center gap-1">
              {links.map((link, index) => (
                <Link 
                  key={index}
                  href={link.anchor}
                  onClick={(e) => handleAnchorClick(e, link.anchor)}
                  className={cn(
                    "px-[var(--space-sm)] py-[var(--space-xs)] rounded-full transition-all duration-300",
                    textColor,
                    "hover:bg-black/5 hover:text-sonic-orange"
                  )}
                  variant="nav"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className={cn("transition-colors duration-500", textColor)}>
               <LanguageSwitcher 
                 currentLang={lang} 
                 switchLang={switchLang} 
                 variant="desktop"
                 className={textColor}
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
    </header>
  );
};
