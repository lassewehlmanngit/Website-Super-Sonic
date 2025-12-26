import React, { useEffect } from 'react';
import { CheckCircle2, Globe, Server, Database, ShieldCheck, ArrowUpRight, Layout, Search, Zap, Lock, Languages, MousePointerClick } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ComparisonTable } from '../components/features/ComparisonTable';
import { TechStackMatrix } from '../components/features/TechStackMatrix';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { TCOCalculator } from '../components/features/TCOCalculator';
import { FAQSection } from '../components/features/FAQSection';

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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Sovereign Asset Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "The Marketing Asset",
              "description": "Custom Next.js/Astro Website with Headless CMS"
            },
            "price": "7000",
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

  const faqs = [
      {
          question: isDe ? "Wie lange dauert die Entwicklung?" : "How long does development take?",
          answer: isDe
            ? "In der Regel 2-4 Wochen für eine komplette Marketing-Website inklusive CMS-Integration."
            : "Typically 2-4 weeks for a complete marketing website including CMS integration."
      },
      {
          question: isDe ? "Kann ich die Webseite später erweitern?" : "Can I extend the website later?",
          answer: isDe
            ? "Ja. Da Sie den vollen Zugriff auf den Quellcode (React/Next.js) haben, kann jeder Entwickler die Seite erweitern. Kein Lock-in."
            : "Yes. Since you have full access to the source code (React/Next.js), any developer can extend the site. No lock-in."
      },
      {
          question: isDe ? "Sind Hosting-Kosten enthalten?" : "Are hosting costs included?",
          answer: isDe
            ? "Wir richten das Hosting bei Render für Sie ein. Die monatlichen Kosten (ca. €19) laufen direkt über Sie, damit Sie die volle Kontrolle haben."
            : "We set up hosting on Render for you. The monthly costs (approx. €19) are paid directly by you, so you have full control."
      }
  ];

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={isDe 
          ? "The Marketing Asset | High-Performance Websites | Super Sonic Prototypes"
          : "The Marketing Asset | High-Performance Websites | Super Sonic Prototypes"}
        description={isDe
          ? "Ihr Marketing-Team muss schnell sein. Wir bauen die schnellsten Websites mit Core Web Vitals 100 und visuellem CMS. Festpreis ab €7.000."
          : "Your marketing team needs to move fast. We build the fastest websites with Core Web Vitals 100 and visual CMS. Fixed price starting at €7,000."}
        lang={lang}
        path={`/${isDe ? 'de' : 'en'}/web-design`}
      />
      
      {/* 1. HERO (Void) */}
      <section className="bg-void pt-40 pb-20 px-4 md:px-12 rounded-b-[3rem] text-white relative overflow-hidden">
          <ChristmasBalls />
          <div className="max-w-[90rem] mx-auto relative z-10">
             <div className="font-mono text-zinc-500 text-xs uppercase tracking-[0.2em] mb-8">
                  Super Sonic Web Architecture
             </div>
             <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter mb-12">
                THE MARKETING <br/>
                <span className="text-sonic-orange">ASSET.</span>
             </h1>
             <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light mb-12">
                {isDe 
                 ? "Webseiten, die verkaufen. Un-hackbar. Wartungsarm. Ihr Eigentum."
                 : "Websites that sell. Un-hackable. Low Maintenance. Fully Flexible. All yours."}
             </p>
             <Link to={isDe ? "/de/start" : "/en/start"}>
                <Button size="lg" variant="white">
                    {isDe ? "Konfiguration starten" : "Start Configuration"}
                </Button>
             </Link>
          </div>
      </section>

      {/* 2. PACKAGES (Pricing) */}
      <section className="py-32 px-4 md:px-12 max-w-[90rem] mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-black mb-6 tracking-tighter">
                {isDe ? "INVESTMENT." : "INVESTMENT."}
            </h2>
             <p className="text-zinc-500 text-xl">
                 {isDe ? "Einmal zahlen. Für immer besitzen." : "Pay once. Own forever."}
             </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Tier 1 */}
             <div className="p-10 rounded-[2.5rem] bg-white border border-black/5 hover:shadow-xl transition-shadow">
                 <h3 className="text-2xl font-bold text-black mb-2">The Sovereign Asset</h3>
                 <div className="text-4xl font-bold text-sonic-orange mb-8">€7.000+</div>
                 <ul className="space-y-4 mb-8 text-zinc-600">
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> Custom Next.js / Astro</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> Headless CMS (Keystatic)</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> Render Hosting Setup</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> Privacy Analytics (Umami)</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> 100% Source Code Ownership</li>
                 </ul>
                 <Link to={isDe ? "/de/start" : "/en/start"} className="block w-full">
                    <Button className="w-full" variant="outline">Select Plan</Button>
                 </Link>
             </div>

             {/* Comparison Highlight */}
             <div className="col-span-1 md:col-span-2">
                 <TCOCalculator lang={lang} />
             </div>
         </div>
      </section>

      {/* 3. BENTO GRID FEATURES */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
          <h2 className="text-6xl font-bold text-black mb-16 tracking-tighter">
              {isDe ? "SPECS." : "SPECS."}
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
      
      {/* 5. FAQ */}
      <FAQSection faqs={faqs} title="FAQ: Web Design" />

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
