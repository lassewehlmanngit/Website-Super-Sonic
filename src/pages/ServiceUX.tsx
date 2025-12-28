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
      "@type": ["Service", "ProfessionalService"],
      "name": "UX Design & Audit",
      "provider": { 
        "@type": "ProfessionalService", 
        "name": "Super Sonic Prototypes",
        "@id": "https://supersonic.design#organization"
      },
      "description": "User Experience optimization based on data and strategy to increase conversion rates. Data-driven, not opinions.",
      "serviceType": "Consulting",
      "areaServed": {
        "@type": "Country",
        "name": "Germany"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Consulting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UX Audit & Rescue",
              "description": "Comprehensive analysis of usability flaws and conversion blockers. Implementation included."
            },
            "priceCurrency": "EUR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "EUR",
              "valueAddedTaxIncluded": true
            },
            "availability": "https://schema.org/InStock",
            "seller": {
              "@id": "https://supersonic.design#organization"
            }
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
          question: isDe ? "Brauche ich einen kompletten Website-Relaunch für bessere Conversion?" : "Do I need a complete website relaunch for better conversion?",
          answer: isDe
            ? "Oft nicht. Ein gezielter UX Audit findet oft 'Low Hanging Fruits' – kleine Änderungen mit großer Wirkung. Zum Beispiel: CTA-Platzierung, Formular-Optimierung, Vertrauenssignale. Oft reichen kleine Anpassungen für 20-40% mehr Conversion."
            : "Often not. A targeted UX audit often finds 'low hanging fruits'—small changes with big impact. For example: CTA placement, form optimization, trust signals. Often small adjustments are enough for 20-40% more conversion."
      },
      {
          question: isDe ? "Wie wird der Erfolg eines UX Audits gemessen?" : "How is the success of a UX audit measured?",
          answer: isDe
            ? "Daten, nicht Meinungen. Wir definieren KPIs (Conversion Rate, Time on Task, Bounce Rate) und messen vorher/nachher. Sie sehen die konkreten Zahlen. Keine Vermutungen."
            : "Data, not opinions. We define KPIs (Conversion Rate, Time on Task, Bounce Rate) and measure before/after. You see the concrete numbers. No guesses."
      },
      {
          question: isDe ? "Können Sie die gefundenen Probleme auch direkt beheben?" : "Can you also fix the found problems directly?",
          answer: isDe
            ? "Ja. Wir sind spezialisiert auf die technische Umsetzung in React/Tailwind. Das Design geht pixel-perfect live. Sie erhalten den Code. Sie müssen nicht noch einen anderen Entwickler suchen."
            : "Yes. We specialize in technical implementation in React/Tailwind. The design goes live pixel-perfect. You get the code. You don't have to find another developer."
      },
      {
          question: isDe ? "Was kostet ein UX Audit für meine Website?" : "What does a UX audit cost for my website?",
          answer: isDe
            ? "Auf Anfrage. Der Preis hängt von der Größe Ihrer Website und dem Umfang ab. Wir besprechen Ihre Anforderungen in einem kostenlosen 15-Minuten-Call und erstellen Ihnen ein Angebot."
            : "On request. The price depends on the size of your website and scope. We discuss your requirements in a free 15-minute call and create a quote for you."
      },
      {
          question: isDe ? "Wie lange dauert ein UX Audit bis zur Umsetzung?" : "How long does a UX audit take until implementation?",
          answer: isDe
            ? "Ein Quick Audit: 1 Woche. Ein Full Audit: 2-3 Wochen. Die Implementierung der Lösungen dauert zusätzlich 2-4 Wochen, je nach Umfang. Wir besprechen den Zeitplan vorher."
            : "A Quick Audit: 1 week. A Full Audit: 2-3 weeks. Implementation of solutions takes an additional 2-4 weeks, depending on scope. We discuss the timeline beforehand."
      },
      {
          question: isDe ? "Was bekomme ich genau bei einem UX Audit?" : "What exactly do I get with a UX audit?",
          answer: isDe
            ? "Ein detaillierter Bericht mit Problemen und konkreten Lösungen. Wenn Sie möchten, implementieren wir die Lösungen auch direkt. Sie erhalten den Code. Alles dokumentiert."
            : "A detailed report with problems and concrete solutions. If you want, we also implement the solutions directly. You get the code. Everything documented."
      },
      {
          question: isDe ? "Kann ein UX Audit auch bei bestehenden Websites helfen?" : "Can a UX audit also help with existing websites?",
          answer: isDe
            ? "Ja. Gerade bei bestehenden Websites finden wir oft schnell umsetzbare Verbesserungen. Sie müssen nicht alles neu machen. Oft reichen gezielte Anpassungen für deutlich bessere Ergebnisse."
            : "Yes. Especially with existing websites, we often find quickly implementable improvements. You don't have to rebuild everything. Often targeted adjustments are enough for significantly better results."
      },
      {
          question: isDe ? "Was ist der Unterschied zwischen einem Quick Audit und einem Full Audit?" : "What's the difference between a Quick Audit and a Full Audit?",
          answer: isDe
            ? "Ein Quick Audit fokussiert auf die wichtigsten Conversion-Blocker. Ein Full Audit analysiert die komplette User Journey, alle Seiten und alle Interaktionen. Wir besprechen, was für Sie am besten ist."
            : "A Quick Audit focuses on the most important conversion blockers. A Full Audit analyzes the complete user journey, all pages and all interactions. We discuss what's best for you."
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
                 ? "Steigern Sie Ihre Conversion Rate um 20-40% (Vorteil) durch datenbasierte UX-Optimierung (Mechanismus). Wir implementieren die Lösungen, nicht nur Berichte (Risiko-Reversal)."
                 : "Increase your conversion rate by 20-40% (Benefit) through data-driven UX optimization (Mechanism). We implement solutions, not just reports (Risk Reversal)."}
             </p>
             <Link to={isDe ? "/de/start" : "/en/start"}>
                <Button size="lg" variant="white">
                    {isDe ? "Audit anfragen" : "Request Audit"}
                </Button>
             </Link>
          </div>
      </section>

      {/* 2. PRICING */}
      <section className="py-32 px-4 md:px-12 max-w-[90rem] mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-black mb-6 tracking-tighter">
                {isDe ? "INVESTMENT." : "INVESTMENT."}
            </h2>
             <p className="text-zinc-500 text-xl">
                 {isDe ? "Auf Anfrage. Wir besprechen Ihre Anforderungen." : "On request. We discuss your requirements."}
             </p>
         </div>

         <div className="max-w-2xl mx-auto">
             <div className="p-10 rounded-[2.5rem] bg-white border border-black/5 hover:shadow-xl transition-shadow text-center">
                 <h3 className="text-2xl font-bold text-black mb-4">{isDe ? "UX Audit & Rescue" : "UX Audit & Rescue"}</h3>
                 <div className="text-4xl font-bold text-sonic-orange mb-8">{isDe ? "Auf Anfrage" : "On Request"}</div>
                 <p className="text-zinc-600 mb-8">
                     {isDe 
                      ? "Jedes Projekt ist anders. Wir besprechen Ihre Anforderungen in einem kostenlosen 15-Minuten-Call und erstellen Ihnen ein individuelles Angebot."
                      : "Every project is different. We discuss your requirements in a free 15-minute call and create a custom quote for you."}
                 </p>
                 <ul className="space-y-4 mb-8 text-zinc-600 text-left">
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Datenbasierte Analyse" : "Data-driven analysis"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Konkrete Lösungsvorschläge" : "Concrete solution proposals"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Optional: Direkte Umsetzung" : "Optional: Direct implementation"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "100% Source Code Ownership" : "100% Source Code Ownership"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Messbare Ergebnisse" : "Measurable results"}</li>
                 </ul>
                 <Link to={isDe ? "/de/start" : "/en/start"} className="block w-full">
                    <Button className="w-full">{isDe ? "Angebot anfragen" : "Request Quote"}</Button>
                 </Link>
             </div>
         </div>
      </section>

      {/* 3. THE PROBLEM */}
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

      {/* 4. CAPABILITIES GRID */}
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

      {/* 5. ROI CALCULATOR (Lead Magnet) */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
          <div className="bg-zinc-50 rounded-[3rem] p-12 md:p-20 border border-zinc-200">
             <div className="text-center mb-12">
                 <h2 className="text-4xl font-bold text-black mb-4">{isDe ? "Was kostet schlechte UX?" : "The Cost of Bad UX"}</h2>
                 <p className="text-zinc-500">{isDe ? "Rechnen Sie es selbst aus." : "Calculate it yourself."}</p>
             </div>
             <SAMCalculator />
          </div>
      </section>

      {/* 6. FAQ */}
      <FAQSection faqs={faqs} title="FAQ: UX Audit" />

      {/* 7. CTA */}
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
