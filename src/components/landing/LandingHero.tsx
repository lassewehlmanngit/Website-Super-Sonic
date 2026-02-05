import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface LandingHeroProps {
  lang: 'de' | 'en';
  onScrollToForm: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({ lang, onScrollToForm }) => {
  const isDe = lang === 'de';

  return (
    <section className="min-h-[100dvh] bg-void pt-24 md:pt-32 pb-10 flex flex-col relative overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">
      {/* Background Noise/Grain */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none z-[1] mix-blend-overlay">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Background Glow */}
      <div className="absolute -top-0 right-0 w-[120px] h-[120px] md:w-[620px] md:h-[620px] bg-sonic-orange opacity-[0.03] rounded-full blur-[40px] md:blur-[150px] -translate-y-1/4 translate-x-1/2 pointer-events-none"></div>

      <div className="container-responsive flex-grow flex flex-col relative z-40">
        {/* Eyebrow */}
        <div className="flex justify-between items-center mb-8 md:mb-12 mt-16 md:mt-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="font-mono text-zinc-500 text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-8 h-[1px] bg-sonic-orange/50"></span>
            {isDe ? "Webseiten für den Mittelstand" : "Websites for SMBs"}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col justify-center min-h-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-center py-8 md:py-12">
            
            {/* Headline */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-white text-[clamp(2.2rem,8vw,5.5rem)] leading-[0.9] font-black tracking-tighter uppercase">
                {isDe ? (
                  <>
                    Du brauchst eine Website, <br />
                    <span className="text-zinc-500">die funktioniert.</span><br />
                    <span className="text-sonic-orange">Keinen Raketenplan.</span>
                  </>
                ) : (
                  <>
                    You need a website <br />
                    <span className="text-zinc-500">that works.</span><br />
                    <span className="text-sonic-orange">Not a rocket plan.</span>
                  </>
                )}
              </h1>
            </div>

            {/* Content + CTA */}
            <div className="lg:col-span-5 space-y-8 md:space-y-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-base md:text-xl text-zinc-400 leading-relaxed font-light border-l-2 border-sonic-orange/30 pl-6">
                {isDe ? (
                  <>
                    Viele Baukasten-Tools setzen voraus, dass du seit fünf Jahren Webdesigner bist. Und Agenturen? Die verkaufen dir unnötige Optionen zu unfairen Preisen.
                    <br /><br />
                    <strong className="text-white">Wir machen es anders:</strong> Webseiten die genau das machen, was du brauchst. Maximal 14 Tage Lieferzeit, 100% Eigentum und ein fester Preis.
                  </>
                ) : (
                  <>
                    Many website builders assume you've been a web designer for five years. And agencies? They sell you unnecessary options at unfair prices.
                    <br /><br />
                    <strong className="text-white">We do it differently:</strong> Websites that do exactly what you need. Max 14 days delivery, 100% ownership, fixed price.
                  </>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onScrollToForm}
                  className="inline-flex items-center justify-center font-bold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full tracking-tight bg-white text-black hover:bg-sonic-orange hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,77,0,0.3)] hover:-translate-y-1 text-base px-10 py-5 w-full sm:w-auto group"
                >
                  {isDe ? "Gratisentwurf in 72h" : "Free design in 72h"}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 animate-bounce cursor-default md:flex hidden z-50">
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono font-bold">
            {isDe ? "Mehr erfahren" : "Learn more"}
          </span>
          <ChevronDown size={14} className="text-sonic-orange" />
        </div>
      </div>
    </section>
  );
};
