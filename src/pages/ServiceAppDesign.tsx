import React from 'react';
import { Zap, Code2, Layers, Smartphone, PenTool, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MagicToggle } from '../components/features/MagicToggle';
import { Link } from 'react-router-dom';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';

interface Props { lang: 'de' | 'en'; }

export const ServiceAppDesign: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={isDe 
          ? "Software Design | Enterprise Software & SaaS | Super Sonic Prototypes" 
          : "Software Design | Enterprise Software & SaaS | Super Sonic Prototypes"}
        description={isDe
          ? "Bauen Sie keine Slide-Decks. Bauen Sie echte Software. Wir verwandeln komplexe Datenmodelle in intuitive Interfaces, die Ihre Teams lieben werden."
          : "Don't build slide decks. Build software. We transform complex data models into intuitive interfaces your teams will love."}
        lang={lang}
        path={`/${isDe ? 'de' : 'en'}/app-design`}
      />
      
      {/* 1. HERO (Void) */}
      <section className="bg-void pt-40 pb-20 px-4 md:px-12 rounded-b-[3rem] text-white relative overflow-hidden">
          <ChristmasBalls />
          <div className="max-w-[90rem] mx-auto relative z-10">
             <div className="font-mono text-zinc-500 text-xs uppercase tracking-[0.2em] mb-8">
                  Super Sonic Software Design
             </div>
             <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter mb-12">
                SOFTWARE THAT<br/>
                <span className="text-zinc-600">WORKS.</span>
             </h1>
             <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light mb-12">
                {isDe 
                 ? "Bauen Sie keine Slide-Decks. Bauen Sie echte Software. Investoren und Nutzer wollen Funktionalität sehen, keine Bilder."
                 : "Don't build slide decks. Build software. Investors and users want to see functionality, not pictures."}
             </p>
             <Link to={isDe ? "/de/start" : "/en/start"}>
                <Button size="lg" variant="white">
                    {isDe ? "Software planen" : "Plan Software"}
                </Button>
             </Link>
          </div>
      </section>

      {/* 2. MAGIC TOGGLE SECTION (Idea vs Reality) */}
      <section className="py-32 px-4 md:px-12 max-w-[90rem] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
                <h2 className="text-6xl font-bold text-black mb-8 tracking-tighter leading-[0.9]">
                    {isDe ? "KOMPLEXITÄT" : "COMPLEXITY"} <br />
                    <span className="text-zinc-400">{isDe ? "VEREINFACHT." : "SIMPLIFIED."}</span>
                </h2>
                <p className="text-xl text-zinc-500 leading-relaxed mb-8">
                    {isDe 
                     ? "Enterprise Software muss nicht kompliziert sein. Wir verwandeln komplexe Datenmodelle in intuitive Interfaces, die Ihre Teams lieben werden."
                     : "Enterprise software doesn't have to be complicated. We transform complex data models into intuitive interfaces your teams will love."}
                </p>
                <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium border border-zinc-200">
                     {isDe ? "← Schalter umlegen" : "← Flip the switch"}
                </div>
            </div>
            <div>
                <MagicToggle lang={lang} />
            </div>
         </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-10 rounded-[2.5rem] border border-black/5">
                <Layers className="text-black mb-6" size={32} />
                <h3 className="text-2xl font-bold text-black mb-4">{isDe ? "System Architektur" : "System Architecture"}</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                    {isDe ? "Wir designen nicht nur Screens, sondern Systeme. Skalierbare Komponenten, die über hunderte von Views hinweg konsistent bleiben." : "We don't just design screens, we design systems. Scalable components that remain consistent across hundreds of views."}
                </p>
            </div>
            <div className="bg-black p-10 rounded-[2.5rem] text-white">
                <Smartphone className="text-white mb-6" size={32} />
                <h3 className="text-2xl font-bold text-white mb-4">{isDe ? "Consumer Grade UX" : "Consumer Grade UX"}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    {isDe ? "B2B-Software muss sich nicht wie Arbeit anfühlen. Wir bringen den Polish von Top-Tier Consumer Apps in Ihre internen Tools." : "B2B software shouldn't feel like work. We bring the polish of top-tier consumer apps to your internal tools."}
                </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-black/5">
                <Code2 className="text-black mb-6" size={32} />
                <h3 className="text-2xl font-bold text-black mb-4">{isDe ? "Echte Daten-Logik" : "Real Data Logic"}</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                    {isDe ? "Kein Lorem Ipsum. Wir arbeiten mit Ihren echten Datenstrukturen, um Edge Cases frühzeitig zu erkennen und zu lösen." : "No Lorem Ipsum. We work with your real data structures to identify and solve edge cases early."}
                </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-black/5">
                <PenTool className="text-black mb-6" size={32} />
                <h3 className="text-2xl font-bold text-black mb-4">{isDe ? "Design Systems" : "Design Systems"}</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                    {isDe ? "Eine Single Source of Truth für Ihr Produkt. Tokens, Komponenten und Patterns, die Entwicklungsteams sofort nutzen können." : "A single source of truth for your product. Tokens, components, and patterns that development teams can use immediately."}
                </p>
            </div>
         </div>
      </section>

      {/* 4. CASE STUDY */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
        <div className="bg-white p-12 rounded-[2.5rem] border border-black/5 relative overflow-hidden">
             <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
                 <div className="max-w-2xl">
                    <div className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-4">Case Study</div>
                    <h3 className="text-4xl font-bold text-black mb-6">Neobank Ventures MVP</h3>
                    <p className="text-xl text-zinc-500 leading-relaxed mb-8">
                        {isDe 
                        ? "Validierung eines High-Frequency Trading Interfaces für Gen Z. 45 Screens in 72 Stunden generiert und getestet. Das Ergebnis: $4M Seed Funding."
                        : "Validating a high-frequency trading interface for Gen Z users. Generated 45 screens in 72 hours using text-to-UI models. Result: Raised $4M Seed."}
                    </p>
                    <div className="flex items-center gap-2 text-black font-bold">
                        <CheckCircle2 size={20} className="text-green-600" />
                        Outcome: Raised $4M Seed
                    </div>
                 </div>
                 <Link to={isDe ? "/de/work" : "/en/work"}>
                    <Button variant="secondary">
                        {isDe ? "Ganze Story" : "Read Story"} <ArrowUpRight className="ml-2" size={18} />
                    </Button>
                 </Link>
             </div>
        </div>
      </section>

    </div>
  );
};