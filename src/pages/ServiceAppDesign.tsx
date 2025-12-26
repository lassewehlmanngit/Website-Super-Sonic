import React, { useEffect } from 'react';
import { Zap, Code2, Layers, Smartphone, PenTool, CheckCircle2, ArrowUpRight, Clock, Rocket } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MagicToggle } from '../components/features/MagicToggle';
import { Link } from 'react-router-dom';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/features/FAQSection';

interface Props { lang: 'de' | 'en'; }

export const ServiceAppDesign: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  // Inject Schema.org JSON-LD
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Software & MVP Development",
      "provider": { "@type": "ProfessionalService", "name": "Super Sonic Prototypes" },
      "description": "Rapid prototyping and MVP development for startups to validate ideas in weeks, not months.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Validation Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "The Validation MVP",
              "description": "Functional Clickable Prototype in 2-4 weeks"
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
          question: isDe ? "Ist das ein echter Code oder nur Design?" : "Is this real code or just design?",
          answer: isDe
            ? "Wir liefern beides. Einen interaktiven Prototypen, der auf echtem React-Code basiert. Sie können diesen Code später für das Produktionsprodukt weiterverwenden."
            : "We deliver both. An interactive prototype based on real React code. You can reuse this code later for the production product."
      },
      {
          question: isDe ? "Wie lange dauert ein MVP?" : "How long does an MVP take?",
          answer: isDe
            ? "2 bis 4 Wochen. Wir nutzen KI-Beschleunigung für das Boilerplate-Setup, damit wir uns auf die Geschäftslogik konzentrieren können."
            : "2 to 4 weeks. We use AI acceleration for the boilerplate setup so we can focus on business logic."
      },
      {
          question: isDe ? "Was, wenn ich skalieren muss?" : "What if I need to scale?",
          answer: isDe
            ? "Der Code ist sauber und modular (React/Tailwind). Er ist bereit für die Übergabe an ein internes Team oder für die weitere Skalierung."
            : "The code is clean and modular (React/Tailwind). It is ready for handover to an internal team or for further scaling."
      }
  ];

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={isDe 
          ? "The Validation MVP | Software Prototyping | Super Sonic Prototypes"
          : "The Validation MVP | Software Prototyping | Super Sonic Prototypes"}
        description={isDe
          ? "Testen Sie Ihre Idee, bevor das Geld ausgeht. Wir bauen funktionale Software-Prototypen in 2-4 Wochen. Echter Code, kein Wegwerf-Design."
          : "Test your idea before the money runs out. We build functional software prototypes in 2-4 weeks. Real code, no throwaway design."}
        lang={lang}
        path={`/${isDe ? 'de' : 'en'}/app-design`}
      />
      
      {/* 1. HERO (Void) */}
      <section className="bg-void pt-40 pb-20 px-4 md:px-12 rounded-b-[3rem] text-white relative overflow-hidden">
          <ChristmasBalls />
          <div className="max-w-[90rem] mx-auto relative z-10">
             <div className="font-mono text-zinc-500 text-xs uppercase tracking-[0.2em] mb-8">
                  Super Sonic Engineering
             </div>
             <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter mb-12">
                THE VALIDATION <br/>
                <span className="text-sonic-orange">MVP.</span>
             </h1>
             <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light mb-12">
                {isDe 
                 ? "Testen Sie Ihre Idee, bevor das Geld ausgeht. Wir bauen funktionale Software-Prototypen in 2-4 Wochen."
                 : "Test your idea before you run out of cash. We build functional software prototypes in 2-4 weeks."}
             </p>
             <Link to={isDe ? "/de/start" : "/en/start"}>
                <Button size="lg" variant="white">
                    {isDe ? "MVP Starten" : "Start MVP"}
                </Button>
             </Link>
          </div>
      </section>

      {/* 2. VELOCITY PROMISE */}
      <section className="py-32 px-4 md:px-12 max-w-[90rem] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
                <h2 className="text-6xl font-bold text-black mb-8 tracking-tighter leading-[0.9]">
                    {isDe ? "FAIL FAST." : "FAIL FAST."} <br />
                    <span className="text-zinc-400">{isDe ? "SUCCEED FASTER." : "SUCCEED FASTER."}</span>
                </h2>
                <p className="text-xl text-zinc-500 leading-relaxed mb-8">
                    {isDe 
                     ? "Die meisten Startups scheitern, weil sie zu lange bauen. Wir geben Ihnen in Tagen etwas in die Hand, wofür andere Monate brauchen."
                     : "Most startups fail because they build too long. We give you something in days that takes others months."}
                </p>

                <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-black font-bold">
                        <Clock size={24} className="text-sonic-orange" />
                        {isDe ? "2-4 Wochen Turnaround" : "2-4 Week Turnaround"}
                    </li>
                    <li className="flex items-center gap-4 text-black font-bold">
                        <Rocket size={24} className="text-sonic-orange" />
                        {isDe ? "Marktbereit (Vercel/Render)" : "Market Ready (Vercel/Render)"}
                    </li>
                </ul>
            </div>
            <div>
                {/* Visual Placeholder for Speed */}
                <MagicToggle lang={lang} />
            </div>
         </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-10 rounded-[2.5rem] border border-black/5">
                <Code2 className="text-black mb-6" size={32} />
                <h3 className="text-2xl font-bold text-black mb-4">{isDe ? "Real Code Assets" : "Real Code Assets"}</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                    {isDe ? "Wir bauen keine Wegwerf-Prototypen. Wir bauen das Fundament Ihrer zukünftigen Plattform." : "We don't build throwaway prototypes. We build the foundation of your future platform."}
                </p>
            </div>
            <div className="bg-black p-10 rounded-[2.5rem] text-white">
                <Smartphone className="text-white mb-6" size={32} />
                <h3 className="text-2xl font-bold text-white mb-4">{isDe ? "Mobile & Web" : "Mobile & Web"}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    {isDe ? "Responsive PWA (Progressive Web App). Funktioniert überall. Kein App Store Approval nötig für erste Tests." : "Responsive PWA. Works everywhere. No App Store approval needed for initial testing."}
                </p>
            </div>
         </div>
      </section>

      {/* 4. FAQ */}
      <FAQSection faqs={faqs} title="FAQ: MVP Development" />

      {/* 5. CTA */}
      <section className="py-20 px-4 md:px-12 bg-white border-t border-zinc-100 text-center">
         <h2 className="text-4xl font-bold text-black mb-8 tracking-tight">
             {isDe ? "Haben Sie eine Idee?" : "Have an idea?"}
         </h2>
         <Link to={isDe ? "/de/start" : "/en/start"}>
            <Button size="lg">{isDe ? "MVP Kalkulieren" : "Calculate MVP"}</Button>
         </Link>
      </section>

    </div>
  );
};
