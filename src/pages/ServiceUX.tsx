import React, { useEffect } from 'react';
import { MousePointerClick, TrendingUp, Lock, CheckCircle2, ArrowUpRight, Search, Layout, Zap, Eye, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SAMCalculator } from '../components/features/SAMCalculator';
import { Link } from 'react-router-dom';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/features/FAQSection';

interface Props { lang: 'de' | 'en'; }

export const ServiceUX: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  // Inject Schema.org JSON-LD
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "UX Design & Audit",
      "provider": { "@type": "ProfessionalService", "name": "Super Sonic Prototypes" },
      "description": "User Experience optimization based on data and strategy to increase conversion rates.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Consulting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UX Audit & Rescue",
              "description": "Comprehensive analysis of usability flaws and conversion blockers."
            },
            "priceCurrency": "EUR"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const faqs = [
      {
          question: isDe ? "Brauche ich einen kompletten Relaunch?" : "Do I need a complete relaunch?",
          answer: isDe
            ? "Oft nicht. Ein gezielter Audit identifiziert oft 'Low Hanging Fruits' – kleine Änderungen mit großer Wirkung (z.B. CTA-Platzierung, Formular-Optimierung)."
            : "Often not. A targeted audit often identifies 'low hanging fruits'—small changes with big impact (e.g., CTA placement, form optimization)."
      },
      {
          question: isDe ? "Wie messen Sie Erfolg?" : "How do you measure success?",
          answer: isDe
            ? "Daten, nicht Meinungen. Wir definieren KPIs (Conversion Rate, Time on Task) und messen vorher/nachher."
            : "Data, not opinions. We define KPIs (Conversion Rate, Time on Task) and measure before/after."
      },
      {
          question: isDe ? "Können Sie das Design auch umsetzen?" : "Can you implement the design?",
          answer: isDe
            ? "Ja. Wir sind spezialisiert auf die technische Umsetzung in React/Tailwind, um sicherzustellen, dass das Design pixel-perfect live geht."
            : "Yes. We specialize in technical implementation in React/Tailwind to ensure the design goes live pixel-perfect."
      }
  ];

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={isDe 
          ? "UX Audit & Rescue | Conversion Optimierung | Super Sonic Prototypes"
          : "UX Audit & Rescue | Conversion Optimization | Super Sonic Prototypes"}
        description={isDe
          ? "Verlieren Sie Leads? Wir finden heraus, warum. UX Audit & Rescue für Unternehmen, die ihre Conversion Rate steigern wollen."
          : "Losing leads? We find out why. UX Audit & Rescue for companies that want to increase their conversion rate."}
        lang={lang}
        path={`/${isDe ? 'de' : 'en'}/ux-design`}
      />
      
      {/* 1. HERO (Void) */}
      <section className="bg-void pt-40 pb-20 px-4 md:px-12 rounded-b-[3rem] text-white relative overflow-hidden">
          <ChristmasBalls />
          <div className="max-w-[90rem] mx-auto relative z-10">
             <div className="font-mono text-zinc-500 text-xs uppercase tracking-[0.2em] mb-8">
                  Super Sonic Analysis
             </div>
             <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter mb-12">
                UX AUDIT <br/>
                <span className="text-sonic-orange">& RESCUE.</span>
             </h1>
             <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light mb-12">
                {isDe 
                 ? "Wir finden die Löcher in Ihrem System, wo Sie Umsatz verlieren. Datenbasierte Optimierung statt Bauchgefühl."
                 : "We find the leaks in your system where you lose revenue. Data-driven optimization instead of gut feeling."}
             </p>
             <Link to={isDe ? "/de/start" : "/en/start"}>
                <Button size="lg" variant="white">
                    {isDe ? "Audit anfragen" : "Request Audit"}
                </Button>
             </Link>
          </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-32 px-4 md:px-12 max-w-[90rem] mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="col-span-1 md:col-span-2">
                <h2 className="text-6xl font-bold text-black mb-8 tracking-tighter leading-[0.9]">
                    {isDe ? "DAS UNSICHTBARE" : "THE INVISIBLE"} <br />
                    <span className="text-zinc-400">{isDe ? "PROBLEM." : "PROBLEM."}</span>
                </h2>
                <p className="text-xl text-zinc-500 leading-relaxed mb-8">
                    {isDe
                     ? "95% der Besucher kaufen nicht. Warum? Oft sind es kleine Reibungspunkte – unklare Buttons, zu viele Formularfelder oder fehlendes Vertrauen. Wir machen diese Probleme sichtbar."
                     : "95% of visitors don't buy. Why? Often it's small friction points—unclear buttons, too many form fields, or lack of trust. We make these problems visible."}
                </p>
             </div>

             {/* Stat Card */}
             <div className="bg-zinc-100 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center">
                 <AlertCircle size={48} className="text-red-500 mb-4" />
                 <div className="text-5xl font-bold text-black mb-2">68%</div>
                 <p className="text-zinc-500 text-sm">Average Cart Abandonment Rate</p>
             </div>
         </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black p-12 rounded-[2.5rem] text-white">
                <Eye className="text-white mb-6" size={32} />
                <h3 className="text-2xl font-bold text-white mb-4">{isDe ? "Eye Tracking Analyse" : "Eye Tracking Analysis"}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    {isDe ? "Wo schauen Ihre Nutzer wirklich hin? Wir simulieren Attention Maps, um die visuelle Hierarchie zu prüfen." : "Where do your users really look? We simulate attention maps to check visual hierarchy."}
                </p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] border border-black/5">
                <Layout className="text-black mb-6" size={32} />
                <h3 className="text-2xl font-bold text-black mb-4">{isDe ? "Heuristische Analyse" : "Heuristic Analysis"}</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                    {isDe ? "Wir prüfen Ihre Seite gegen die 10 Usability Heuristiken von Nielsen Norman. Systematisch und fundiert." : "We audit your site against the 10 Nielsen Norman usability heuristics. Systematic and grounded."}
                </p>
            </div>
         </div>
      </section>

      {/* 4. ROI CALCULATOR (Lead Magnet) */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
          <div className="bg-zinc-50 rounded-[3rem] p-12 md:p-20 border border-zinc-200">
             <div className="text-center mb-12">
                 <h2 className="text-4xl font-bold text-black mb-4">{isDe ? "Was kostet schlechte UX?" : "The Cost of Bad UX"}</h2>
                 <p className="text-zinc-500">{isDe ? "Rechnen Sie es selbst aus." : "Calculate it yourself."}</p>
             </div>
             <SAMCalculator />
          </div>
      </section>

      {/* 5. FAQ */}
      <FAQSection faqs={faqs} title="FAQ: UX Audit" />

      {/* 6. CTA */}
      <section className="py-20 px-4 md:px-12 bg-white border-t border-zinc-100 text-center">
         <h2 className="text-4xl font-bold text-black mb-8 tracking-tight">
             {isDe ? "Verlieren Sie kein Geld mehr." : "Stop losing money."}
         </h2>
         <Link to={isDe ? "/de/start" : "/en/start"}>
            <Button size="lg">{isDe ? "Audit Starten" : "Start Audit"}</Button>
         </Link>
      </section>

    </div>
  );
};
