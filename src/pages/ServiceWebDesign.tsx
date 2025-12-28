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
      "@type": ["Service", "SoftwareDevelopment", "WebSite"],
      "name": "High-Performance Web Design",
      "provider": { 
        "@type": "ProfessionalService", 
        "name": "Super Sonic Prototypes",
        "@id": "https://supersonic.design#organization"
      },
      "description": "High-End web architecture focusing on Core Web Vitals and Conversion Optimization using modern reactive frameworks.",
      "serviceType": ["WebSite", "SoftwareDevelopment"],
      "areaServed": {
        "@type": "Country",
        "name": "Germany"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Sovereign Asset Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": ["Service", "WebSite"],
              "name": "The Marketing Asset",
              "description": "Custom Next.js/Astro Website with Headless CMS. 100% Source Code Ownership. No monthly maintenance fees."
            },
            "price": "5800",
            "priceCurrency": "EUR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "5800",
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
          question: isDe ? "Wie schnell kann ich eine neue Website bekommen?" : "How fast can I get a new website?",
          answer: isDe
            ? "Unser Starter-Paket ist in 72 Stunden fertig. Größere Websites dauern 2-4 Wochen. Wir nutzen KI für Geschwindigkeit, aber ein Mensch mit 10 Jahren Erfahrung prüft alles."
            : "Our Starter package is ready in 72 hours. Larger websites take 2-4 weeks. We use AI for speed, but a human with 10 years of experience reviews everything."
      },
      {
          question: isDe ? "Was ist im Starter-Paket für €5.800 enthalten?" : "What's included in the Starter package for €5,800?",
          answer: isDe
            ? "Homepage, eine Service-Seite, eine Über-uns-Seite, rechtliche Seiten (Impressum, Datenschutz), Exit-Popup für Conversion, FAQ-Sektion, CMS-optimiert (Sie können Texte selbst ändern), statische Website, 100% Source Code Ownership, jederzeit erweiterbar."
            : "Homepage, one service page, one about page, legal pages (Imprint, Privacy), exit popup for conversion, FAQ section, CMS optimized (you can edit text yourself), static website, 100% Source Code Ownership, extendable anytime."
      },
      {
          question: isDe ? "Kann ich meine Website später selbst erweitern?" : "Can I extend my website later myself?",
          answer: isDe
            ? "Ja. Da Sie den vollen Zugriff auf den Quellcode (React/Next.js) haben, kann jeder Entwickler die Website erweitern. Kein Lock-in. Sie sind nicht an mich gebunden. Der Code ist sauber und modular."
            : "Yes. Since you have full access to the source code (React/Next.js), any developer can extend the website. No lock-in. You're not tied to me. The code is clean and modular."
      },
      {
          question: isDe ? "Was kostet das Hosting für meine Website?" : "What does hosting cost for my website?",
          answer: isDe
            ? "Wir richten das Hosting bei Render (Frankfurt) für Sie ein. Die monatlichen Kosten (ca. €19) laufen direkt über Sie, damit Sie die volle Kontrolle haben. Keine versteckten Gebühren. 100% Green Energy."
            : "We set up hosting on Render (Frankfurt) for you. The monthly costs (approx. €19) are paid directly by you, so you have full control. No hidden fees. 100% Green Energy."
      },
      {
          question: isDe ? "Kann ich Texte und Bilder selbst ändern ohne Programmierkenntnisse?" : "Can I edit text and images myself without programming skills?",
          answer: isDe
            ? "Ja. Wir integrieren ein Headless CMS (Keystatic oder Sanity). Sie können Texte und Bilder ändern, ohne den Code zu berühren. So einfach wie WordPress, aber schneller und sicherer."
            : "Yes. We integrate a Headless CMS (Keystatic or Sanity). You can edit text and images without touching the code. As easy as WordPress, but faster and safer."
      },
      {
          question: isDe ? "Warum sollte ich eine Custom Website statt WordPress wählen?" : "Why should I choose a custom website instead of WordPress?",
          answer: isDe
            ? "WordPress ist langsam (schlechte Core Web Vitals), unsicher (ständige Updates nötig) und teuer (monatliche Plugin-Kosten). Unsere Custom Websites sind schnell (100/100 Core Web Vitals), sicher (statisch, keine Updates nötig) und günstig (einmal zahlen, für immer besitzen)."
            : "WordPress is slow (bad Core Web Vitals), insecure (constant updates needed) and expensive (monthly plugin costs). Our custom websites are fast (100/100 Core Web Vitals), secure (static, no updates needed) and affordable (pay once, own forever)."
      },
      {
          question: isDe ? "Brauche ich monatliche Wartungskosten?" : "Do I need monthly maintenance costs?",
          answer: isDe
            ? "Nein. Unsere Websites sind statisch und sicher. Sie brauchen keine monatlichen Wartungskosten. Nur Hosting (ca. €19/Monat). Keine Plugin-Updates. Keine Sicherheits-Patches. Sie zahlen einmal und besitzen die Website für immer."
            : "No. Our websites are static and secure. You don't need monthly maintenance costs. Only hosting (approx. €19/month). No plugin updates. No security patches. You pay once and own the website forever."
      },
      {
          question: isDe ? "Was passiert wenn ich später Hilfe brauche?" : "What happens if I need help later?",
          answer: isDe
            ? "Sie haben den Code. Jeder Entwickler kann Ihnen helfen. Sie sind nicht an mich gebunden. Aber ich biete auch Support-Pakete an, wenn Sie möchten. Die Wahl liegt bei Ihnen."
            : "You have the code. Any developer can help you. You're not tied to me. But I also offer support packages if you want. The choice is yours."
      }
  ];

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={isDe 
          ? "The Marketing Asset | High-Performance Websites | Super Sonic Prototypes"
          : "The Marketing Asset | High-Performance Websites | Super Sonic Prototypes"}
        description={isDe
          ? "Ihr Marketing-Team muss schnell sein. Wir bauen die schnellsten Websites mit Core Web Vitals 100 und visuellem CMS. Starter-Paket ab €5.800, fertig in 72 Stunden."
          : "Your marketing team needs to move fast. We build the fastest websites with Core Web Vitals 100 and visual CMS. Starter package starting at €5,800, ready in 72 hours."}
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
                OWN YOUR WEBSITE. <br/>
                <span className="text-sonic-orange">100% FUTURE PROOF.</span>
             </h1>
             <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light mb-12">
                {isDe 
                 ? "Steigern Sie Ihre Conversion Rate (Vorteil) mit einer Website, die 100/100 bei Core Web Vitals erreicht (Mechanismus). Sie besitzen den Code, keine monatlichen Gebühren (Risiko-Reversal)."
                 : "Increase your conversion rate (Benefit) with a website that scores 100/100 on Core Web Vitals (Mechanism). You own the code, no monthly fees (Risk Reversal)."}
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

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
             {/* Starter Package */}
             <div className="p-10 rounded-[2.5rem] bg-white border border-black/5 hover:shadow-xl transition-shadow relative">
                 <div className="absolute top-0 right-0 bg-sonic-orange text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                     {isDe ? "72 STUNDEN" : "72 HOURS"}
                 </div>
                 <h3 className="text-2xl font-bold text-black mb-2">{isDe ? "Starter" : "Starter"}</h3>
                 <div className="text-4xl font-bold text-sonic-orange mb-2">€5.800</div>
                 <p className="text-sm text-zinc-500 mb-8">{isDe ? "Festpreis. Keine monatlichen Gebühren. Sie besitzen alles." : "Fixed price. No monthly fees. You own everything."}</p>
                 <ul className="space-y-4 mb-8 text-zinc-600">
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Homepage" : "Homepage"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Eine Service-Seite" : "One service page"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Eine Über-uns-Seite" : "One about page"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Rechtliche Seiten (Impressum, Datenschutz)" : "Legal pages (Imprint, Privacy)"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Exit-Popup für Conversion" : "Exit popup for conversion"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "FAQ-Sektion" : "FAQ section"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "CMS-optimiert (Sie können Texte selbst ändern)" : "CMS optimized (you can edit text yourself)"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Statische Website (schnell und sicher)" : "Static website (fast and secure)"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "100% Source Code Ownership" : "100% Source Code Ownership"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Jederzeit erweiterbar" : "Extendable anytime"}</li>
                 </ul>
                 <Link to={isDe ? "/de/start" : "/en/start"} className="block w-full">
                    <Button className="w-full" variant="outline">{isDe ? "Plan wählen" : "Select Plan"}</Button>
                 </Link>
             </div>

             {/* Custom Package */}
             <div className="p-10 rounded-[2.5rem] bg-black text-white border border-zinc-800 hover:shadow-xl transition-shadow">
                 <h3 className="text-2xl font-bold text-white mb-2">{isDe ? "Individuell" : "Custom"}</h3>
                 <div className="text-4xl font-bold text-white mb-2">{isDe ? "Auf Anfrage" : "On Request"}</div>
                 <p className="text-sm text-zinc-400 mb-8">{isDe ? "Maßgeschneidert für Ihre Anforderungen." : "Tailored to your requirements."}</p>
                 <ul className="space-y-4 mb-8 text-zinc-300">
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> {isDe ? "Unbegrenzte Seiten" : "Unlimited pages"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> {isDe ? "E-Commerce Integration" : "E-commerce integration"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> {isDe ? "Custom Features" : "Custom features"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> {isDe ? "Multi-Language Support" : "Multi-language support"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> {isDe ? "Enterprise CMS" : "Enterprise CMS"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> {isDe ? "Priority Support" : "Priority support"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-400"/> {isDe ? "100% Source Code Ownership" : "100% Source Code Ownership"}</li>
                 </ul>
                 <Link to={isDe ? "/de/start" : "/en/start"} className="block w-full">
                    <Button className="w-full" variant="white">{isDe ? "Kontaktieren" : "Contact"}</Button>
                 </Link>
             </div>
         </div>

         {/* Comparison Highlight */}
         <div className="mt-12 space-y-12">
             <TCOCalculator lang={lang} />
             <ComparisonTable lang={lang} />
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
