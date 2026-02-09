import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface LanguageSwitcherProps {
  currentLang: 'de' | 'en' | 'ja';
  switchLang: (lang: string) => string;
  variant?: 'desktop' | 'mobile';
  className?: string;
  onLinkClick?: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  currentLang, 
  switchLang, 
  variant = 'desktop',
  className,
  onLinkClick 
}) => {
  const isDe = currentLang === 'de';
  const isEn = currentLang === 'en';
  const isJa = currentLang === 'ja';

  return (
    <div className={cn(
      "flex items-center gap-3 font-mono font-bold transition-colors", 
      variant === 'mobile' ? "text-sm" : "text-xs",
      className
    )}>
      <Link 
        to={switchLang('de')} 
        onClick={onLinkClick}
        className={cn(
          "hover:no-underline transition-colors", 
          isDe ? 'underline decoration-2 underline-offset-4 decoration-sonic-orange text-black' : 'opacity-50 hover:opacity-100 hover:text-black'
        )}
      >
        DE
      </Link>
      {variant === 'mobile' && <div className="w-px h-4 bg-zinc-300"></div>}
      <Link 
        to={switchLang('en')} 
        onClick={onLinkClick}
        className={cn(
          "hover:no-underline transition-colors", 
          isEn ? 'underline decoration-2 underline-offset-4 decoration-sonic-orange text-black' : 'opacity-50 hover:opacity-100 hover:text-black'
        )}
      >
        EN
      </Link>
      {variant === 'mobile' && <div className="w-px h-4 bg-zinc-300"></div>}
      <Link 
        to={switchLang('ja')} 
        onClick={onLinkClick}
        className={cn(
          "hover:no-underline transition-colors", 
          isJa ? 'underline decoration-2 underline-offset-4 decoration-sonic-orange text-black' : 'opacity-50 hover:opacity-100 hover:text-black'
        )}
      >
        JP
      </Link>
    </div>
  );
};
