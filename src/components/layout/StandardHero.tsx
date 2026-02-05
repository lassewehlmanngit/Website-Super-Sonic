import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StandardHeroProps {
  variant?: 'split' | 'centered';
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryCTA?: {
    text: string;
    to: string;
  };
  secondaryCTA?: {
    text: string;
    to: string;
  };
  visual?: React.ReactNode;
  footer?: React.ReactNode;
  backgroundElement?: React.ReactNode;
  showScrollHint?: boolean;
  withGrid?: boolean;
}

export const StandardHero: React.FC<StandardHeroProps> = ({
  variant = 'split',
  eyebrow,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  visual,
  footer,
  backgroundElement,
  showScrollHint = true,
  withGrid = true,
}) => {
  return (
    <section className="min-h-[100dvh] bg-void pt-24 md:pt-32 pb-10 flex flex-col relative overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">
      {/* Background Noise/Grain (SVG filter based) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none z-[1] mix-blend-overlay">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Background Grid */}
      {withGrid && (
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      )}

      {/* Background Element */}
      {backgroundElement || (
        <div className="absolute -top-0 right-0 w-[120px] h-[120px] md:w-[620px] md:h-[620px] bg-sonic-orange opacity-[0.03] rounded-full blur-[40px] md:blur-[150px] -translate-y-1/4 translate-x-1/2 pointer-events-none"></div>
      )}

      <div className="container-responsive flex-grow flex flex-col relative z-40">
        {/* Top Bar / Eyebrow */}
        {eyebrow && (
          <div className="flex justify-between items-center mb-8 md:mb-12 mt-16 md:mt-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="font-mono text-zinc-500 text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-sonic-orange/50"></span>
              {eyebrow}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className={`flex-grow flex flex-col justify-center min-h-0 ${variant === 'centered' ? 'items-center text-center' : ''}`}>
          <div className={`grid grid-cols-1 ${variant === 'split' ? 'lg:grid-cols-12' : ''} gap-8 lg:gap-24 items-center py-8 md:py-12`}>
            
            {/* Headline */}
            <div className={`${variant === 'split' ? 'lg:col-span-7' : 'max-w-5xl mx-auto'} space-y-6 md:space-y-8 opacity-0 animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
              <h1 className="text-white text-[clamp(2.8rem,10vw,7.5rem)] leading-[0.82] font-black tracking-tighter uppercase italic">
                {title}
              </h1>
              
              {variant === 'centered' && (
                <div className="max-w-2xl mx-auto text-lg md:text-2xl text-zinc-400 leading-relaxed font-light mt-8">
                  {description}
                </div>
              )}
            </div>

            {/* Content + CTA (for Split) */}
            {variant === 'split' && (
              <div className="lg:col-span-5 space-y-8 md:space-y-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-lg md:text-2xl text-zinc-400 leading-relaxed font-light border-l-2 border-sonic-orange/30 pl-6">
                  {description}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {primaryCTA && (
                    <Link 
                      to={primaryCTA.to}
                      className="inline-flex items-center justify-center font-bold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full tracking-tight bg-white text-black hover:bg-sonic-orange hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,77,0,0.3)] hover:-translate-y-1 text-base px-10 py-5 w-full sm:w-auto group"
                    >
                      {primaryCTA.text}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                  )}
                  {secondaryCTA && (
                    <Link 
                      to={secondaryCTA.to}
                      className="inline-flex items-center justify-center font-bold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full tracking-tight border border-white/10 text-white hover:bg-white/5 hover:border-white/20 text-base px-10 py-5 w-full sm:w-auto"
                    >
                      {secondaryCTA.text}
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* CTA (for Centered) */}
            {variant === 'centered' && (primaryCTA || secondaryCTA) && (
              <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {primaryCTA && (
                  <Link 
                    to={primaryCTA.to}
                    className="inline-flex items-center justify-center font-bold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full tracking-tight bg-white text-black hover:bg-sonic-orange hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,77,0,0.3)] hover:-translate-y-1 text-base px-10 py-5 w-full sm:w-auto group"
                  >
                    {primaryCTA.text}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                )}
                {secondaryCTA && (
                  <Link 
                    to={secondaryCTA.to}
                    className="inline-flex items-center justify-center font-bold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full tracking-tight border border-white/10 text-white hover:bg-white/5 hover:border-white/20 text-base px-10 py-5 w-full sm:w-auto"
                  >
                    {secondaryCTA.text}
                  </Link>
                )}
              </div>
            )}
          </div>
          
          {/* Optional Visual Element */}
          {visual && (
            <div className="w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {visual}
            </div>
          )}
        </div>

        {/* Footer Content */}
        {footer && (
          <div className="mt-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {footer}
          </div>
        )}

        {/* Scroll Hint */}
        {showScrollHint && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 animate-bounce cursor-default md:flex hidden z-50">
            <span className="text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Explore</span>
            <ChevronDown size={14} className="text-sonic-orange" />
          </div>
        )}
      </div>
    </section>
  );
};

