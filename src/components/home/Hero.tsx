import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChristmasBalls } from '../seasonal/ChristmasBalls';

// Reusing button styles to keep <Link> semantic
const buttonBaseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed rounded-full tracking-tight";
const buttonVariantStyles = "bg-white text-black hover:bg-zinc-200 border border-transparent shadow-lg hover:shadow-xl hover:-translate-y-0.5";
const buttonSizeStyles = "text-base px-8 py-4";

interface HeroProps {
  lang: 'de' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const clients = ["VOLKSWAGEN", "ALLIANZ", "SIEMENS", "TELEKOM", "NOVARTIS", "SPARKASSE", "BMW GROUP", "LUFTHANSA"];

  return (
    <section className="min-h-[100dvh] bg-void pt-24 md:pt-32 pb-10 flex flex-col relative overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">
      
      {/* <ChristmasBalls /> */}

      {/* Abstract Background Element - Reduced Motion safe */}
      <div className="absolute -top-0 right-0 w-[120px] h-[120px] md:w-[620px] md:h-[620px] bg-white opacity-[0.001] md:opacity-[0.002] rounded-full blur-[40px] md:blur-[150px] -translate-y-1/4 translate-x-1/2 pointer-events-none motion-safe:animate-fade-in-up duration-1000"></div>

      <div className="container-responsive flex-grow flex flex-col relative z-40">
          {/* Top Bar - Increased top margin to clear navigation */}
          <div className="flex justify-between items-center mb-12 md:mb-16 mt-20 md:mt-24 reveal delay-100">
             <div className="font-mono text-zinc-400 text-xs uppercase tracking-[0.2em]">
                {isDe ? "Verfügbar für Q1 2025" : "Available for Q1 2025"}
             </div>
             <div className="text-right hidden md:block">
                <div className="text-white font-mono text-xs">Super Sonic Prototypes™</div>
                <div className="text-zinc-500 font-mono text-xs">Est. 2024</div>
             </div>
          </div>

          {/* Main Content - Better vertical centering */}
          <div className="flex-grow flex flex-col justify-center min-h-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center reveal delay-200 py-8 md:py-12">
                
                {/* Headline - Using clamp for better scaling */}
                <div className="lg:col-span-7 space-y-4 md:space-y-6">
                    <h1 className="text-white text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-bold tracking-tighter uppercase">
                      {isDe
                       ? <>Deine Website. <br/><span className="text-zinc-400">Dein Code.</span><br/><span className="text-sonic-orange">Dein Eigentum.</span></>
                       : <>Your website. <br/><span className="text-zinc-400">Your code.</span><br/><span className="text-sonic-orange">Your property.</span></>
                      }
                    </h1>
                </div>

                {/* Content + CTA */}
                <div className="lg:col-span-5 space-y-6 md:space-y-8 reveal delay-300">
                    <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed font-light">
                        {isDe 
                        ? "Einmal zahlen. Für immer besitzen. Keine monatlichen Gebühren. Kein Lock-in."
                        : "Pay once. Own forever. No monthly fees. No lock-in."}
                    </p>

                    <div>
                        {/* Accessible Link Button */}
                        <Link 
                          to={isDe ? "/de/start" : "/en/start"}
                          className={`${buttonBaseStyles} ${buttonVariantStyles} ${buttonSizeStyles} w-full md:w-auto group`}
                        >
                            {isDe ? "Projekt kalkulieren" : "Calculate Project"} 
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                    </div>
                </div>
              </div>
          </div>

          {/* Trust Badge - Better spacing */}
          <div className="mt-16 md:mt-20 flex justify-center reveal delay-400">
              <div className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 bg-green-500/20 rounded-xl text-green-400 shrink-0">
                      <ShieldCheck size={24} />
                  </div>
                  <div>
                      <h4 className="text-white font-bold text-base mb-2">
                          {isDe ? "Unabhängigkeits-Garantie" : "Independence Guarantee"}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                          {isDe
                           ? "Wir geben dir alles. Der Code liegt in deinem GitHub-Account. Wenn wir dir morgen nicht mehr gefallen, gehst du mit deiner Website."
                           : "We give you everything. The code lives in your GitHub account. If you don't like us tomorrow, walk away with your website."}
                      </p>
                  </div>
              </div>
          </div>
      </div>

      {/* Infinite Marquee - Motion Safe */}
      <div className="mt-auto pt-8 border-t border-white/10 overflow-hidden w-full reveal delay-500">
           <div className="flex whitespace-nowrap motion-safe:animate-marquee">
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex gap-16 md:gap-32 items-center mx-8 md:mx-16">
                    {clients.map((client, i) => (
                        <span key={`${loopIndex}-${i}`} className="text-white/40 font-bold text-xl md:text-2xl tracking-tighter hover:text-white transition-colors duration-300 cursor-default">
                            {client}
                        </span>
                    ))}
                </div>
              ))}
           </div>
      </div>
    </section>
  );
};

