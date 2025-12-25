import React, { useEffect, useRef } from 'react';
import { Database, Zap, Globe, Smartphone, MousePointerClick, ArrowUpRight, ArrowRight, Layout, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { LiveProcess } from '../components/features/LiveProcess';
import { VisualVelocityTimeline } from '../components/features/VisualVelocityTimeline';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';

interface HomeProps {
  lang: 'de' | 'en';
}

export const Home: React.FC<HomeProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize Scroll Observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observerRef.current?.unobserve(entry.target); // Trigger once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    // Observe elements with .reveal class
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [lang]);

  const clients = ["VOLKSWAGEN", "ALLIANZ", "SIEMENS", "TELEKOM", "NOVARTIS", "SPARKASSE", "BMW GROUP", "LUFTHANSA"];

  return (
    <div className="bg-paper relative">
      
      {/* 1. HERO SECTION (Dark Void) */}
      <section className="min-h-screen bg-void pt-40 pb-20 px-4 md:px-12 flex flex-col justify-between relative overflow-hidden rounded-b-[3rem]">
        
        {/* Christmas Decorations */}
        <ChristmasBalls />

        {/* Abstract Background Element (extra subtle glow for accessibility) */}
        <div className="absolute -top-0 right-0 w-[620px] h-[620px] bg-white opacity-[0.006] rounded-full blur-[150px] -translate-y-1/4 translate-x-1/2 pointer-events-none animate-fade-in-up duration-1000"></div>

        <div className="max-w-[90rem] mx-auto w-full relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-12 reveal delay-100">
               <div className="font-mono text-zinc-500 text-xs uppercase tracking-[0.2em] mb-4 md:mb-0">
                  {isDe ? "Verfügbar für Q1 2025" : "Available for Q1 2025"}
               </div>
               <div className="text-right hidden md:block">
                  <div className="text-white font-mono text-xs">Super Sonic Prototypes™</div>
                  <div className="text-zinc-500 font-mono text-xs">Est. 2024</div>
               </div>
            </div>

            <h1 className="text-white text-[12vw] md:text-[9vw] lg:text-[7vw] leading-[0.8] font-bold tracking-tighter mb-12 reveal delay-200">
              <span className="block">WEBSITES</span>
              <span className="block text-zinc-600">ARE DEAD.</span>
              <span className="block text-sonic-orange">BUILD ASSETS.</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-start reveal delay-300">
               <div className="max-w-xl">
                  <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light">
                      {isDe 
                      ? "Keine Templates mehr. Ich baue digitale Assets, die Ihr Geschäft voranbringen. Schnell, sicher und Ihr Eigentum."
                      : "Stop buying templates. I build digital assets that grow your business. Fast, safe, and yours forever."}
                  </p>
               </div>
               <div className="flex gap-4">
                  <Link to={isDe ? "/de/start" : "/en/start"}>
                      <Button size="lg" variant="white" className="hover:scale-105 transition-transform duration-300">
                          {isDe ? "Projekt Starten" : "Start Project"} <ArrowRight className="ml-2" size={20} />
                      </Button>
                  </Link>
               </div>
            </div>
        </div>

        {/* Infinite Marquee */}
        <div className="mt-24 pt-8 border-t border-white/10 overflow-hidden w-full reveal delay-500">
             <div className="flex whitespace-nowrap animate-marquee">
                {/* Loop 1 */}
                <div className="flex gap-16 md:gap-32 items-center mx-8 md:mx-16">
                    {clients.map((client, i) => (
                        <span key={i} className="text-white/40 font-bold text-xl md:text-2xl tracking-tighter hover:text-white transition-colors duration-300 cursor-default">
                            {client}
                        </span>
                    ))}
                </div>
                {/* Loop 2 (Duplicate for Seamless) */}
                <div className="flex gap-16 md:gap-32 items-center mx-8 md:mx-16">
                    {clients.map((client, i) => (
                        <span key={`dup-${i}`} className="text-white/40 font-bold text-xl md:text-2xl tracking-tighter hover:text-white transition-colors duration-300 cursor-default">
                            {client}
                        </span>
                    ))}
                </div>
             </div>
        </div>
      </section>


      {/* 2. SERVICES BENTO GRID (Paper Background) */}
      <section className="py-32 px-4 md:px-12 max-w-[95rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
              <h2 className="text-6xl md:text-8xl font-bold text-black tracking-tighter leading-[0.9]">
                  {isDe ? "MEINE" : "MY"} <br />
                  <span className="text-zinc-400">{isDe ? "LEISTUNGEN" : "SERVICES"}.</span>
              </h2>
              <div className="max-w-sm mt-8 md:mt-0">
                  <p className="text-zinc-500 text-lg leading-relaxed">
                     {isDe ? "Wählen Sie Ihren Pfad. Spezialisiert auf Geschwindigkeit und Qualität." : "Specialized in speed and quality. Choose your path."}
                  </p>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Web Architecture (Neutral) */}
              <Link to={isDe ? "/de/web-design" : "/en/web-design"} className="group bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between h-[500px] border border-black/5 reveal delay-100">
                  <div className="flex justify-between items-start">
                      <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center text-sonic-orange group-hover:scale-110 transition-transform duration-500">
                          <Globe size={32} />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                          <ArrowUpRight size={20} />
                      </div>
                  </div>
                  
                  <div>
                      <h3 className="text-4xl font-bold text-black mb-4 tracking-tight">
                        {isDe ? "Webseiten, die verkaufen." : "Websites that Sell."}
                      </h3>
                      <div className="h-px w-12 bg-zinc-200 my-6 group-hover:w-full transition-all duration-700"></div>
                      <p className="text-zinc-500 leading-relaxed text-lg">
                          {isDe ? "Google liebt schnelle Seiten. Wir bauen die schnellsten." : "Google loves fast sites. We build the fastest."}
                      </p>
                  </div>
              </Link>

              {/* Card 2: App Prototyping (HIGHLIGHT - Sonic Orange) */}
              <Link to={isDe ? "/de/app-design" : "/en/app-design"} className="group bg-sonic-orange rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between h-[500px] reveal delay-200">
                  <div className="flex justify-between items-start">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-sonic-orange group-hover:scale-110 transition-transform duration-500">
                          <Smartphone size={32} />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center group-hover:bg-white group-hover:text-sonic-orange transition-colors duration-300">
                          <ArrowUpRight size={20} />
                      </div>
                  </div>
                  
                  <div>
                      <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">
                         {isDe ? "Apps in Tagen." : "Apps in Days."}
                      </h3>
                      <div className="h-px w-12 bg-white/20 my-6 group-hover:w-full transition-all duration-700"></div>
                      <p className="text-white font-medium leading-relaxed text-lg">
                          {isDe ? "Testen Sie Ihre Idee, bevor das Geld ausgeht." : "Test your idea before you run out of cash."}
                      </p>
                  </div>
              </Link>

              {/* Card 3: UX Engineering (Neutral) */}
              <Link to={isDe ? "/de/ux-design" : "/en/ux-design"} className="group bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between h-[500px] border border-black/5 reveal delay-300">
                  <div className="flex justify-between items-start">
                      <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center text-sonic-orange group-hover:scale-110 transition-transform duration-500">
                          <MousePointerClick size={32} />
                      </div>
                      <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                          <ArrowUpRight size={20} />
                      </div>
                  </div>
                  
                  <div>
                      <h3 className="text-4xl font-bold text-black mb-4 tracking-tight">
                         {isDe ? "Design für Umsatz." : "Design for Money."}
                      </h3>
                      <div className="h-px w-12 bg-zinc-200 my-6 group-hover:w-full transition-all duration-700"></div>
                      <p className="text-zinc-500 leading-relaxed text-lg">
                          {isDe ? "Wir finden die Löcher, wo Sie Kunden verlieren." : "We fix the leaks where you lose customers."}
                      </p>
                  </div>
              </Link>
          </div>
      </section>

      {/* 3. VELOCITY SECTION (Visual Break) */}
      <section className="py-20 px-4 md:px-12 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 reveal">
                  <div className="inline-block px-4 py-1 rounded-full border border-sonic-orange/30 bg-orange-50 text-sonic-orange font-mono text-xs uppercase tracking-widest mb-6">
                      Velocity Matters
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
                      {isDe ? "Wochen? Nein. Tage." : "Weeks? No. Days."}
                  </h2>
                  <p className="text-xl text-zinc-500 leading-relaxed mb-8">
                      {isDe 
                      ? "Die alte Agentur-Welt ist langsam. Ich nutze KI-Beschleunigung für den Code, damit wir uns auf die Architektur konzentrieren können." 
                      : "The old agency world is slow. I use AI acceleration for the code, so we can focus on the architecture and strategy."}
                  </p>
                  <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-4 text-black font-medium">
                          <Zap size={20} className="text-sonic-orange" />
                          {isDe ? "Schneller Code (React)." : "Fast Code (React)."}
                      </li>
                      <li className="flex items-center gap-4 text-black font-medium">
                          <Code size={20} className="text-sonic-orange" />
                          {isDe ? "Ihr Eigentum (Git)." : "You Own It (Git)."}
                      </li>
                      <li className="flex items-center gap-4 text-black font-medium">
                          <Database size={20} className="text-sonic-orange" />
                          {isDe ? "Einfache Updates (Kein Lock-in)." : "Easy Updates (No Lock-in)."}
                      </li>
                  </ul>
              </div>
              <div className="flex-1 w-full reveal delay-200">
                  <VisualVelocityTimeline />
              </div>
          </div>
      </section>

      {/* 4. PROCESS SECTION (Dark Mode Contrast) */}
      <section className="py-32 px-4 md:px-12 bg-void text-white rounded-t-[3rem] -mt-8 relative z-10 reveal">
         <div className="max-w-7xl mx-auto">
             <div className="mb-20 text-center">
                 <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">THE PROCESS.</h2>
                 <p className="text-zinc-500 text-xl">Transparency by default.</p>
             </div>
             <LiveProcess isDe={isDe} />
         </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-40 px-4 md:px-12 bg-paper text-center">
         <div className="max-w-4xl mx-auto reveal">
             <h2 className="text-7xl md:text-9xl font-bold text-black mb-12 tracking-tighter leading-[0.85]">
                READY TO <br /><span className="text-zinc-300">LAUNCH?</span>
             </h2>
             <Link to={isDe ? "/de/start" : "/en/start"}>
                <Button size="lg" className="h-16 px-12 text-lg hover:scale-105 transition-transform duration-300">
                    {isDe ? "Konfiguration starten" : "Start Configuration"}
                </Button>
             </Link>
         </div>
      </section>

    </div>
  );
};