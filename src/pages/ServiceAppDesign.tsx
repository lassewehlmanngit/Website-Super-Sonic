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
      "@type": ["Service", "SoftwareDevelopment"],
      "name": "Software & MVP Development",
      "provider": { 
        "@type": "ProfessionalService", 
        "name": "Super Sonic Prototypes",
        "@id": "https://supersonic.design#organization"
      },
      "description": "Rapid prototyping and MVP development for startups to validate ideas in weeks, not months. Real React code, not throwaway prototypes.",
      "serviceType": "SoftwareDevelopment",
      "areaServed": {
        "@type": "Country",
        "name": "Germany"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Validation Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": ["Service", "SoftwareDevelopment"],
              "name": "The Validation MVP",
              "description": "Functional Clickable Prototype in 2-4 weeks. Real React code. 100% Source Code Ownership."
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
          question: isDe ? "Was ist der Unterschied zwischen einem MVP und einem Prototyp?" : "What's the difference between an MVP and a prototype?",
          answer: isDe
            ? "Ein Prototyp ist oft nur ein Design. Ein MVP ist echter Code, den Sie in die Produktion übernehmen können. Wir liefern React-Code auf GitHub. Kein Wegwerf-Prototyp. Sie können damit weiterarbeiten."
            : "A prototype is often just a design. An MVP is real code you can take to production. We deliver React code on GitHub. No throwaway prototype. You can continue working with it."
      },
      {
          question: isDe ? "Wie lange dauert es ein MVP zu entwickeln?" : "How long does it take to develop an MVP?",
          answer: isDe
            ? "2 bis 4 Wochen. Wir nutzen KI für Geschwindigkeit, aber ein Mensch mit 10 Jahren Erfahrung prüft alles. Sie erhalten einen funktionierenden Prototypen, nicht nur ein Design."
            : "2 to 4 weeks. We use AI for speed, but a human with 10 years of experience reviews everything. You get a working prototype, not just a design."
      },
      {
          question: isDe ? "Kann ich mein MVP später skalieren oder erweitern?" : "Can I scale or extend my MVP later?",
          answer: isDe
            ? "Ja. Der Code ist sauber und modular (React/Tailwind). Er ist bereit für die Übergabe an ein internes Team oder für die weitere Skalierung. Sie besitzen den Code. Sie können jederzeit erweitern."
            : "Yes. The code is clean and modular (React/Tailwind). It is ready for handover to an internal team or for further scaling. You own the code. You can extend it anytime."
      },
      {
          question: isDe ? "Was kostet die Entwicklung eines MVPs?" : "What does MVP development cost?",
          answer: isDe
            ? "Auf Anfrage. Der Preis hängt von der Komplexität ab. Wir besprechen Ihre Anforderungen in einem kostenlosen 15-Minuten-Call und erstellen Ihnen ein Angebot."
            : "On request. The price depends on complexity. We discuss your requirements in a free 15-minute call and create a quote for you."
      },
      {
          question: isDe ? "Ist Code der mit KI geschrieben wurde sicher für Produktion?" : "Is code written with AI secure for production?",
          answer: isDe
            ? "Ja. Jede Zeile KI-generierten Codes wird von mir geprüft. Ich habe 10 Jahre Erfahrung mit Enterprise-Sicherheit (Allianz, Volkswagen, Novartis). Keine unsicheren Codezeilen. Sie bekommen KI-Geschwindigkeit mit menschlicher Expertise."
            : "Yes. Every line of AI-generated code is reviewed by me. I have 10 years of enterprise security experience (Allianz, Volkswagen, Novartis). No insecure code lines. You get AI speed with human expertise."
      },
      {
          question: isDe ? "Kann ich den Code später an ein anderes Team übergeben?" : "Can I hand over the code to another team later?",
          answer: isDe
            ? "Ja. Sie haben den vollen Zugriff auf den Source Code auf GitHub. Jeder Entwickler kann damit arbeiten. Sie sind nicht an mich gebunden. Der Code ist sauber dokumentiert."
            : "Yes. You have full access to the source code on GitHub. Any developer can work with it. You're not tied to me. The code is cleanly documented."
      },
      {
          question: isDe ? "Was passiert wenn mein MVP erfolgreich ist und ich skalieren muss?" : "What happens if my MVP is successful and I need to scale?",
          answer: isDe
            ? "Der Code ist von Anfang an skalierbar aufgebaut. Sie können ihn an ein größeres Team übergeben oder selbst weiterentwickeln. Sie besitzen den Code. Kein Lock-in."
            : "The code is built scalable from the start. You can hand it over to a larger team or develop it further yourself. You own the code. No lock-in."
      },
      {
          question: isDe ? "Bekomme ich auch die Dokumentation für mein MVP?" : "Do I also get documentation for my MVP?",
          answer: isDe
            ? "Ja. Sie erhalten vollständige Dokumentation. Code-Kommentare, README-Dateien und eine Anleitung für die Weiterentwicklung. Alles was Sie brauchen, um selbst weiterzuarbeiten."
            : "Yes. You get complete documentation. Code comments, README files and a guide for further development. Everything you need to continue working yourself."
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
                 ? "Validieren Sie Ihre Idee in 2-4 Wochen (Vorteil) mit echtem React-Code statt Prototypen (Mechanismus). Sie erhalten den Source Code für die Produktion (Risiko-Reversal)."
                 : "Validate your idea in 2-4 weeks (Benefit) with real React code instead of prototypes (Mechanism). You get the source code for production (Risk Reversal)."}
             </p>
             <Link to={isDe ? "/de/start" : "/en/start"}>
                <Button size="lg" variant="white">
                    {isDe ? "MVP Starten" : "Start MVP"}
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
                 <h3 className="text-2xl font-bold text-black mb-4">{isDe ? "Individuelles MVP" : "Custom MVP"}</h3>
                 <div className="text-4xl font-bold text-sonic-orange mb-8">{isDe ? "Auf Anfrage" : "On Request"}</div>
                 <p className="text-zinc-600 mb-8">
                     {isDe 
                      ? "Jedes MVP ist anders. Wir besprechen Ihre Anforderungen in einem kostenlosen 15-Minuten-Call und erstellen Ihnen ein individuelles Angebot."
                      : "Every MVP is different. We discuss your requirements in a free 15-minute call and create a custom quote for you."}
                 </p>
                 <ul className="space-y-4 mb-8 text-zinc-600 text-left">
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Echter React-Code" : "Real React code"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "2-4 Wochen Entwicklung" : "2-4 weeks development"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "100% Source Code Ownership" : "100% Source Code Ownership"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Vollständige Dokumentation" : "Complete documentation"}</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> {isDe ? "Jederzeit erweiterbar" : "Extendable anytime"}</li>
                 </ul>
                 <Link to={isDe ? "/de/start" : "/en/start"} className="block w-full">
                    <Button className="w-full">{isDe ? "Angebot anfragen" : "Request Quote"}</Button>
                 </Link>
             </div>
         </div>
      </section>

      {/* 3. VELOCITY PROMISE */}
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

      {/* 4. CAPABILITIES GRID */}
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

      {/* 5. FAQ */}
      <FAQSection faqs={faqs} title="FAQ: MVP Development" />

      {/* 6. CTA */}
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
