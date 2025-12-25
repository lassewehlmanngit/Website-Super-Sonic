import React, { useEffect } from 'react';
import { CheckCircle2, Globe, Server, Database, ShieldCheck, ArrowUpRight, Layout, Search, Zap, Lock, Languages, MousePointerClick } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ComparisonTable } from '../components/features/ComparisonTable';
import { TechStackMatrix } from '../components/features/TechStackMatrix';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { Link } from 'react-router-dom';

interface Props { lang: 'de' | 'en'; }

export const ServiceWebDesign: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  // Inject Schema.org JSON-LD
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "High-Performance Web Design",
      "provider": { "@type": "ProfessionalService", "name": "Super Sonic Prototypes" },
      "description": "High-End web architecture focusing on Core Web Vitals and Conversion Optimization using modern reactive frameworks.",
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const features = [
    {
        icon: Layout,
        title: isDe ? "Responsive & Mobile First" : "Responsive & Mobile First",
        desc: isDe ? "Perfekte Darstellung auf jedem Device. Von iPhone SE bis 4K Monitor." : "Perfect rendering on every device. From iPhone SE to 4K monitors."
    },
    {
        icon: Database,
        title: isDe ? "API-First CMS (Sanity)" : "API-First CMS (Sanity)",
        desc: isDe ? "Visuelles Editing für Ihr Marketing-Team. Strukturierte Daten für die App." : "Visual editing for your marketing team. Structured data for the application."
    },
    {
        icon: Search,
        title: isDe ? "Technical SEO (JSON-LD)" : "Technical SEO (JSON-LD)",
        desc: isDe ? "Wir sprechen die Sprache von Google. Schema Markup ist Standard." : "We speak Google's language. Schema Markup is standard."
    },
    {
        icon: Zap,
        title: isDe ? "Core Web Vitals: 100" : "Core Web Vitals: 100",
        desc: isDe ? "Kein Cumulative Layout Shift. LCP unter 1.2s." : "No Cumulative Layout Shift. LCP under 1.2s."
    },
    {
        icon: Lock,
        title: isDe ? "DSGVO / Privacy" : "GDPR / Privacy",
        desc: isDe ? "Keine Cookies, wenn möglich. Privacy-First Analytics integration." : "No cookies where possible. Privacy-first analytics integration."
    },
    {
        icon: Languages,
        title: isDe ? "Internationalisierung (i18n)" : "Internationalization (i18n)",
        desc: isDe ? "Bereit für globale Märkte. Sub-directories (/de, /en) Routing." : "Ready for global markets. Sub-directory routing (/de, /en)."
    }
  ];

  return (
    <div className="bg-paper min-h-screen">
      
      {/* 1. HERO (Void) */}
      <section className="bg-void pt-40 pb-20 px-4 md:px-12 rounded-b-[3rem] text-white relative overflow-hidden">
          <ChristmasBalls />
          <div className="max-w-[90rem] mx-auto relative z-10">
             <div className="font-mono text-zinc-500 text-xs uppercase tracking-[0.2em] mb-8">
                  Super Sonic Web Architecture
             </div>
             <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter mb-12">
                WEB DESIGN<br/>
                <span className="text-sonic-orange">THAT SELLS.</span>
             </h1>
             <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light mb-12">
                {isDe 
                 ? "Ihr Marketing-Team muss schnell sein. Ihre Webseite bremst sie aus. Lassen Sie uns das ändern."
                 : "Your marketing team needs to move fast. Your website is slowing them down. Let's fix it."}
             </p>
             <Link to={isDe ? "/de/start" : "/en/start"}>
                <Button size="lg" variant="white">
                    {isDe ? "Webseite anfragen" : "Request Website"}
                </Button>
             </Link>
          </div>
      </section>

      {/* 2. PROBLEM / SOLUTION GRID */}
      <section className="py-32 px-4 md:px-12 max-w-[90rem] mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-12 rounded-[2.5rem] border border-black/5">
                <div className="inline-block px-3 py-1 bg-zinc-100 text-zinc-500 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                     {isDe ? "Das Problem" : "The Problem"}
                </div>
                <h3 className="text-3xl font-bold text-black mb-6 leading-tight">
                    {isDe ? "Das Warten hat ein Ende." : "The Wait is Over."}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-lg">
                    {isDe 
                     ? "Warten Sie nicht tagelang auf einen Entwickler für eine Überschrift. Wir geben Ihnen die Kontrolle."
                     : "Stop waiting days for a developer to change a headline. We give you control."}
                </p>
            </div>
            <div className="bg-black p-12 rounded-[2.5rem] text-white">
                <div className="inline-block px-3 py-1 bg-sonic-orange/20 text-sonic-orange rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                     {isDe ? "Die Lösung" : "The Solution"}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                    {isDe ? "Visuelles Editieren." : "Edit Visually."}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-lg">
                    {isDe 
                     ? "Klicken und tippen. So einfach ist das. Wir kümmern uns um den Code, Sie um den Inhalt."
                     : "Click and type. It's that simple. We handle the code; you handle the content."}
                </p>
            </div>
         </div>
      </section>

      {/* 3. BENTO GRID FEATURES */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
          <h2 className="text-6xl font-bold text-black mb-16 tracking-tighter">
              {isDe ? "FEATURES." : "FEATURES."}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <div key={i} className="p-10 bg-white rounded-[2.5rem] hover:shadow-xl transition-all duration-300 group border border-black/5">
                        <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-sonic-orange mb-6 group-hover:scale-110 transition-transform">
                            <f.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-4">{f.title}</h3>
                        <p className="text-zinc-500 leading-relaxed">{f.desc}</p>
                    </div>
                ))}
          </div>
      </section>

      {/* 4. TECH STACK */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
        <h2 className="text-6xl font-bold text-black mb-16 tracking-tighter">
              {isDe ? "DER MOTOR." : "THE ENGINE."}
        </h2>
        <TechStackMatrix />
      </section>

      {/* 5. COMPARISON */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
         <h2 className="text-6xl font-bold text-black mb-16 tracking-tighter">
              {isDe ? "VERGLEICH." : "COMPARE."}
        </h2>
        <ComparisonTable lang={lang} />
      </section>
      
      {/* 6. CTA */}
      <section className="py-20 px-4 md:px-12 bg-white border-t border-zinc-100 text-center">
         <h2 className="text-4xl font-bold text-black mb-8 tracking-tight">
             {isDe ? "Bereit für das Upgrade?" : "Ready to upgrade?"}
         </h2>
         <Link to={isDe ? "/de/start" : "/en/start"}>
            <Button size="lg">{isDe ? "Projekt Starten" : "Start Project"}</Button>
         </Link>
      </section>

    </div>
  );
};