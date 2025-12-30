import React, { useEffect } from 'react';
import { Zap, Code2, Layers, Smartphone, CheckCircle2, ArrowUpRight, Clock, Rocket, ShieldCheck, Database, Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MagicToggle } from '../components/features/MagicToggle';
import { Link } from 'react-router-dom';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/features/FAQSection';
import { SoftwareComparisonTable } from '../components/features/SoftwareComparisonTable';
import { TechStackMatrix } from '../components/features/TechStackMatrix';
import { MVPProblem } from '../components/services/ProblemSection';
import { ExamplesSection } from '../components/services/ExamplesSection';
import { AudienceSection } from '../components/services/AudienceSection';
import { MVPPricing } from '../components/services/MVPPricing';

interface Props { lang: 'de' | 'en'; }

export const ServiceAppDesign: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  // Inject Schema.org JSON-LD
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": ["Service", "SoftwareDevelopment"],
      "name": "Software Design & Development",
      "provider": { 
        "@type": "ProfessionalService", 
        "name": "Super Sonic Prototypes",
        "@id": "https://supersonic.design#organization"
      },
      "description": "Rapid software development and MVP design. We build your software, you get the source code.",
      "serviceType": "SoftwareDevelopment",
      "areaServed": {
        "@type": "Country",
        "name": "Germany"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": ["Service", "SoftwareDevelopment"],
              "name": "The Validation MVP",
              "description": "Functional Software in 2-4 weeks. Real React code. 100% Source Code Ownership."
            },
            "priceCurrency": "EUR",
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
          question: isDe ? "Was ist der Unterschied zwischen MVP und fertiger Software?" : "What's the difference between an MVP and finished software?",
          answer: isDe
            ? "Ein MVP (Minimum Viable Product) ist die erste Version Ihrer Software, die echten Wert liefert. Es ist kein 'Wegwerf-Produkt', sondern das Fundament. Wir bauen es so, dass Sie es skalieren können."
            : "An MVP (Minimum Viable Product) is the first version of your software that delivers real value. It is not a 'throwaway product', but the foundation. We build it so you can scale it."
      },
      {
          question: isDe ? "Wie lange dauert die Entwicklung?" : "How long does development take?",
          answer: isDe
            ? "In der Regel 2 bis 4 Wochen für ein MVP. Wir nutzen moderne Tools und AI-Support, um extrem schnell zu sein, ohne Qualität zu opfern."
            : "Typically 2 to 4 weeks for an MVP. We use modern tools and AI support to be extremely fast without sacrificing quality."
      },
      {
          question: isDe ? "Gehört der Code wirklich mir?" : "Do I really own the code?",
          answer: isDe
            ? "Ja. Zu 100%. Sie erhalten Zugriff auf das GitHub Repository. Es gibt keinen Vendor Lock-in. Sie können den Code jederzeit nehmen und woanders weiterentwickeln."
            : "Yes. 100%. You get access to the GitHub repository. There is no vendor lock-in. You can take the code anytime and develop it elsewhere."
      },
      {
          question: isDe ? "Welche Technologie nutzt ihr?" : "Which technology do you use?",
          answer: isDe
            ? "Wir setzen auf den modernen Standard: React (Next.js/Remix), TypeScript, Tailwind CSS und Supabase/Sanity für das Backend. Das ist zukunftssicher und performant."
            : "We rely on the modern standard: React (Next.js/Remix), TypeScript, Tailwind CSS and Supabase/Sanity for the backend. This is future-proof and performant."
      },
      {
          question: isDe ? "Was kostet das?" : "What does it cost?",
          answer: isDe
            ? "Wir arbeiten meist mit Festpreisen für definierte Pakete, damit Sie Planungssicherheit haben. Kontaktieren Sie uns für ein Angebot."
            : "We usually work with fixed prices for defined packages so you have planning security. Contact us for a quote."
      }
  ];

  const processSteps = [
      {
          step: "01",
          title: isDe ? "Planen" : "Plan",
          desc: isDe ? "Wir definieren den Kern Ihrer Software. Kein unnötiges Fett." : "We define the core of your software. No fluff."
      },
      {
          step: "02",
          title: isDe ? "Bauen" : "Build",
          desc: isDe ? "Wir entwickeln mit React & KI. Schnell, sauber, sicher." : "We develop with React & AI. Fast, clean, secure."
      },
      {
          step: "03",
          title: isDe ? "Besitzen" : "Own",
          desc: isDe ? "Übergabe des Codes. Sie sind der Eigentümer. Für immer." : "Handover of the code. You are the owner. Forever."
      }
  ];

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={isDe 
          ? "Software Design | MVP Development | Super Sonic Prototypes"
          : "Software Design | MVP Development | Super Sonic Prototypes"}
        description={isDe
          ? "Wir bauen Ihre Software. Sie bekommen den Code. Er gehört Ihnen. Schnell und einfach. Starten Sie Ihr Projekt nächste Woche."
          : "We build your software. You get the code. You own it forever. Fast and simple. Get your software next week."}
        lang={lang}
        path={`/${isDe ? 'de' : 'en'}/app-design`}
      />
      
      {/* 1. HERO (Void) */}
      <section className="bg-void pt-40 md:pt-48 pb-16 md:pb-20 rounded-b-[2rem] md:rounded-b-[3rem] text-white relative overflow-hidden">
          {/* <ChristmasBalls /> */}
          <div className="container-responsive relative z-10">
             <div className="font-mono text-zinc-500 text-xs uppercase tracking-[0.2em] mb-6 md:mb-8">
                  Super Sonic Engineering
             </div>
             <h1 className="text-[clamp(2rem,6vw,4.5rem)] leading-[0.9] font-bold tracking-tighter mb-6 md:mb-8">
                {isDe 
                 ? "Teste deine Software-Idee, bevor du €100k ausgibst"
                 : "Test Your Software Idea Before Spending €100k"}
             </h1>
             <p className="text-base md:text-xl lg:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-light mb-8 md:mb-12 whitespace-pre-wrap">
                {isDe 
                 ? "Hier ist das Problem:\n\nDu hast eine Idee für Software. Vielleicht eine App. Vielleicht eine Web-Plattform.\n\nDu könntest Entwickler einstellen. €100.000 ausgeben. 12 Monate warten.\n\nDann herausfinden, dass niemand es will.\n\nOder du könntest das tun:\n\nWir bauen eine einfache Version in 2 Wochen. Nur die Kernfunktion. Das Ding, das deine Idee einzigartig macht.\n\nDu zeigst es echten potenziellen Kunden. Die lieben es entweder oder hassen es.\n\nWenn sie es lieben: Großartig. Jetzt weißt du, dass es sich lohnt, es richtig zu bauen.\n\nWenn sie es hassen: Auch großartig. Du hast gerade €100.000 gespart.\n\nDas nennt man ein MVP. Minimum Viable Product. So testen kluge Firmen Ideen."
                 : "Here's the problem:\n\nYou have an idea for software. Maybe an app. Maybe a web platform.\n\nYou could hire developers. Spend €100,000. Wait 12 months.\n\nThen find out nobody wants it.\n\nOr you could do this:\n\nWe build a simple version in 2 weeks. Just the core feature. The thing that makes your idea unique.\n\nYou show it to real potential customers. They either love it or hate it.\n\nIf they love it: Great. Now you know it's worth building properly.\n\nIf they hate it: Also great. You just saved €100,000.\n\nThis is called an MVP. Minimum Viable Product. It's how smart companies test ideas."}
             </p>
             
             {/* Trust Badges */}
             <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                    <Code2 size={16} className="text-sonic-orange" />
                    <span className="text-sm font-bold">React 19</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-sm font-bold">{isDe ? "100% Code Eigentum" : "100% Source Code Ownership"}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                    <Lock size={16} className="text-blue-400" />
                    <span className="text-sm font-bold">{isDe ? "Sicher & Skalierbar" : "Secure & Scalable"}</span>
                </div>
             </div>

             <Link to={isDe ? "/de/start" : "/en/start"}>
                <Button size="lg" variant="white">
                    {isDe ? "Projekt Starten" : "Start Project"}
                </Button>
             </Link>
          </div>
      </section>

      <MVPProblem />

      {/* 2. PROCESS (Simple 3 Steps) */}
      <section className="py-12 md:py-20 lg:py-24">
          <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {processSteps.map((s, i) => (
                  <div key={i} className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-black/5 hover:shadow-lg transition-shadow">
                      <div className="text-4xl md:text-6xl font-bold text-black/5 mb-3 md:mb-4">{s.step}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-3">{s.title}</h3>
                      <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
                          {s.desc}
                      </p>
                  </div>
              ))}
          </div>
          </div>
      </section>

      <MVPPricing />
      <ExamplesSection examples={mvpExamples} />
      <AudienceSection perfectFor={audience.perfectFor} notFor={audience.notFor} />

      {/* 3. COMPARISON */}
      <section className="py-8 md:py-12">
         <div className="container-responsive">
         <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 tracking-tighter">
                {isDe ? "WARUM SUPER SONIC?" : "WHY SUPER SONIC?"}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto">
                {isDe ? "Der süße Punkt zwischen teurer Agentur und begrenztem Baukasten." : "The sweet spot between expensive agency and limited site builder."}
            </p>
         </div>
         <SoftwareComparisonTable lang={lang} />
         </div>
      </section>

      {/* 4. TECH STACK */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container-responsive">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 md:mb-16 tracking-tighter">
              {isDe ? "MODERN STACK." : "MODERN STACK."}
        </h2>
        <TechStackMatrix />
        </div>
      </section>

      {/* 5. PRICING / OFFER */}
      <section className="py-12 md:py-16 lg:py-20 bg-black text-white rounded-[2rem] md:rounded-[3rem] mb-16 md:mb-24 lg:mb-32 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50 pointer-events-none"></div>
         <div className="container-responsive max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tighter">
                {isDe ? "BEREIT ZU STARTEN?" : "READY TO LAUNCH?"}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-zinc-400 mb-8 md:mb-12 max-w-2xl mx-auto">
                {isDe 
                 ? "Holen Sie sich Ihre Software nächste Woche. Kein Risiko. Volle Kontrolle."
                 : "Get your software next week. No risk. Full control."}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link to={isDe ? "/de/start" : "/en/start"}>
                    <Button size="lg" variant="white">{isDe ? "Jetzt Konfigurieren" : "Configure Now"}</Button>
                </Link>
                <Link to={isDe ? "/de/start" : "/en/start"}>
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                        {isDe ? "Kontakt Aufnehmen" : "Get in Touch"}
                    </Button>
                </Link>
            </div>
         </div>
      </section>
      
      {/* 6. FAQ */}
      <FAQSection faqs={faqs} title="FAQ: Software Design" />

    </div>
  );
};
