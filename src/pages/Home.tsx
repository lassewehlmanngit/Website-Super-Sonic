import React, { useEffect, useRef } from 'react';
import { Database, Zap, Globe, Smartphone, MousePointerClick, ArrowUpRight, ArrowRight, Layout, Code, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { LiveProcess } from '../components/features/LiveProcess';
import { VisualVelocityTimeline } from '../components/features/VisualVelocityTimeline';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';
import { FAQSection } from '../components/features/FAQSection';
import { useCMSContent } from '../lib/cms';

interface HomeProps {
  lang: 'de' | 'en';
}

export const Home: React.FC<HomeProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Example of CMS Usage - Fetching FAQs
  // In production, this would fetch from the generated content files
  const { data: cmsFaqs, loading } = useCMSContent('faqs', 'home');

  // SEO-optimized FAQs - will be loaded from Keystatic CMS
  // Fallback if loading or error, otherwise use CMS data
  const faqs = (cmsFaqs && isDe) ? cmsFaqs : [
      {
          question: isDe ? "Wer besitzt den Quellcode nach der Entwicklung?" : "Who owns the source code after development?",
          answer: isDe
            ? "Sie besitzen den Quellcode zu 100%. Sie erhalten Zugriff auf das GitHub Repository. Keine versteckten Klauseln. Sie können den Code jederzeit an einen anderen Entwickler geben oder selbst weiterentwickeln."
            : "You own the source code 100%. You get full access to the GitHub repository. No hidden clauses. You can give the code to any developer anytime or develop it further yourself."
      },
      {
          question: isDe ? "Kann ich meine Website selbst bearbeiten ohne Programmierkenntnisse?" : "Can I edit my website myself without programming skills?",
          answer: isDe
            ? "Ja. Wir integrieren ein Headless CMS wie Keystatic oder Sanity. Sie können Texte und Bilder ändern, ohne den Code zu berühren. So einfach wie WordPress, aber schneller und sicherer."
            : "Yes. We integrate a Headless CMS like Keystatic or Sanity. You can edit text and images without touching the code. As easy as WordPress, but faster and safer."
      },
      {
          question: isDe ? "Was ist der Unterschied zwischen einer Custom Website und WordPress?" : "What's the difference between a custom website and WordPress?",
          answer: isDe
            ? "WordPress ist langsam, unsicher und schwer zu warten. Unsere Custom Websites sind schnell (100/100 Core Web Vitals), sicher und wartungsarm. Sie besitzen den Code. Keine monatlichen Plugin-Kosten. Keine Sicherheits-Updates nötig."
            : "WordPress is slow, insecure, and hard to maintain. Our custom websites are fast (100/100 Core Web Vitals), secure, and low maintenance. You own the code. No monthly plugin costs. No security updates needed."
      },
      {
          question: isDe ? "Wie lange dauert es eine neue Website zu entwickeln?" : "How long does it take to develop a new website?",
          answer: isDe
            ? "Eine Marketing-Website dauert 2-4 Wochen. Unser Starter-Paket ist in 72 Stunden fertig. Wir nutzen KI für Geschwindigkeit, aber ein Mensch mit 10 Jahren Erfahrung prüft alles."
            : "A marketing website takes 2-4 weeks. Our Starter package is ready in 72 hours. We use AI for speed, but a human with 10 years of experience reviews everything."
      },
      {
          question: isDe ? "Was kostet eine professionelle Website in Deutschland?" : "What does a professional website cost in Germany?",
          answer: isDe
            ? "Ab €5.800 für eine komplette Website (Starter-Paket, fertig in 72 Stunden). Festpreis. Keine monatlichen Gebühren. Sie zahlen einmal und besitzen die Website für immer. Größere Projekte auf Anfrage."
            : "Starting at €5,800 for a complete website (Starter package, ready in 72 hours). Fixed price. No monthly fees. You pay once and own the website forever. Larger projects on request."
      },
      {
          question: isDe ? "Ist Code der mit KI geschrieben wurde sicher?" : "Is code written with AI secure?",
          answer: isDe
            ? "Ja. Jede Zeile KI-generierten Codes wird von mir geprüft. Ich habe 10 Jahre Erfahrung mit Enterprise-Sicherheit (Allianz, Volkswagen, Novartis). Keine Halluzinationen. Keine unsicheren Codezeilen. Sie bekommen KI-Geschwindigkeit mit menschlicher Expertise."
            : "Yes. Every line of AI-generated code is reviewed by me. I have 10 years of enterprise security experience (Allianz, Volkswagen, Novartis). No hallucinations. No insecure code lines. You get AI speed with human expertise."
      },
      {
          question: isDe ? "Kann ich meine Website später erweitern oder ändern?" : "Can I extend or change my website later?",
          answer: isDe
            ? "Ja. Da Sie den vollen Zugriff auf den Quellcode haben, kann jeder Entwickler die Website erweitern. Sie sind nicht an mich gebunden. Der Code ist sauber und modular aufgebaut."
            : "Yes. Since you have full access to the source code, any developer can extend the website. You're not tied to me. The code is clean and modular."
      },
      {
          question: isDe ? "Brauche ich monatliche Wartungskosten für meine Website?" : "Do I need monthly maintenance costs for my website?",
          answer: isDe
            ? "Nein. Unsere Websites sind statisch und sicher. Sie brauchen keine monatlichen Wartungskosten. Nur Hosting (ca. €19/Monat bei Render). Keine Plugin-Updates. Keine Sicherheits-Patches."
            : "No. Our websites are static and secure. You don't need monthly maintenance costs. Only hosting (approx. €19/month on Render). No plugin updates. No security patches."
      }
  ];

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
      <SEO 
        title={isDe ? "Super Sonic Prototypes | Webseiten & MVPs als Firmeneigentum" : "Super Sonic Prototypes | Websites & MVPs as Company Assets"}
        description={isDe 
          ? "Schluss mit Baukasten-Abos. Ich entwickle blitzschnelle Software-Assets, die Ihnen gehören. React, Next.js, AI-Accelerated."
          : "Stop renting your tech stack. I build fast, custom software assets that you own. React, Next.js, AI-Accelerated."}
        lang={lang}
      />
      
      {/* 1. HERO SECTION (Dark Void) */}
      <section className="min-h-screen bg-void pt-40 pb-20 px-4 md:px-12 flex flex-col justify-between relative overflow-hidden rounded-b-[3rem]">
        
        <ChristmasBalls />

        {/* Abstract Background Element */}
        <div className="absolute -top-0 right-0 w-[120px] h-[120px] md:w-[620px] md:h-[620px] bg-white opacity-[0.002] md:opacity-[0.006] rounded-full blur-[40px] md:blur-[150px] -translate-y-1/4 translate-x-1/2 pointer-events-none animate-fade-in-up duration-1000"></div>

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

            <h1 className="text-white text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] font-bold tracking-tighter mb-12 reveal delay-200 uppercase">
              {isDe
               ? <>WEBSEITEN & MVPS <br/><span className="text-zinc-600">ALS ECHTES</span><br/><span className="text-sonic-orange">FIRMENEIGENTUM.</span></>
               : <>WEBSITES & MVPS <br/><span className="text-zinc-600">AS REAL</span><br/><span className="text-sonic-orange">COMPANY ASSETS.</span></>
              }
            </h1>

            <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-start reveal delay-300">
               <div className="max-w-xl">
                  <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light mb-8">
                      {isDe 
                      ? "Schluss mit WordPress-Updates und Baukasten-Abos. Ich entwickle blitzschnelle, maßgeschneiderte Software-Assets, die Ihnen gehören. 100% Quellcode-Übergabe."
                      : "Stop renting your tech stack. I build fast, custom software assets that you own. 100% Source Code Handover. Engineered with AI Speed, secured by human expertise."}
                  </p>

                  {/* TRUST SECTION: No Lock In */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
                      <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                          <ShieldCheck size={24} />
                      </div>
                      <div>
                          <h4 className="text-white font-bold text-sm mb-1">
                              {isDe ? "Unabhängigkeits-Garantie" : "Independence Guarantee"}
                          </h4>
                          <p className="text-zinc-500 text-sm">
                              {isDe
                               ? "Sie erhalten das volle Urheberrecht und den Source Code (GitHub). Sie sind an keine Agentur gebunden."
                               : "You receive full copyright and source code (GitHub). You are not tied to any agency."}
                          </p>
                      </div>
                  </div>

               </div>
               <div className="flex gap-4">
                  <Link to={isDe ? "/de/start" : "/en/start"}>
                      <Button size="lg" variant="white" className="hover:scale-105 transition-transform duration-300">
                          {isDe ? "Projekt kalkulieren" : "Calculate Project"} <ArrowRight className="ml-2" size={20} />
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
                  <span className="text-zinc-400">{isDe ? "PRODUKTE" : "PRODUCTS"}.</span>
              </h2>
              <div className="max-w-sm mt-8 md:mt-0">
                  <p className="text-zinc-500 text-lg leading-relaxed">
                     {isDe ? "Kein Stundenlohn. Festpreise für echte Assets." : "No hourly billing. Fixed prices for real assets."}
                  </p>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Web Architecture (The Marketing Asset) */}
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
                      <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">
                        {isDe ? "The Marketing Asset" : "The Marketing Asset"}
                      </h3>
                      <div className="h-px w-12 bg-zinc-200 my-6 group-hover:w-full transition-all duration-700"></div>
                      <p className="text-zinc-500 leading-relaxed text-lg">
                          {isDe ? "High-Performance Website. Un-hackbar. Ihr Eigentum." : "High-Performance Website. Un-hackable. Yours."}
                      </p>
                  </div>
              </Link>

              {/* Card 2: App Prototyping (The Validation MVP) */}
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
                      <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                         {isDe ? "The Validation MVP" : "The Validation MVP"}
                      </h3>
                      <div className="h-px w-12 bg-white/20 my-6 group-hover:w-full transition-all duration-700"></div>
                      <p className="text-white font-medium leading-relaxed text-lg">
                          {isDe ? "Software Prototyp in 2-4 Wochen. Testen, bevor das Geld ausgeht." : "Software prototype in 2-4 weeks. Test before cash runs out."}
                      </p>
                  </div>
              </Link>

              {/* Card 3: UX Engineering (UX Audit & Rescue) */}
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
                      <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">
                         {isDe ? "UX Audit & Rescue" : "UX Audit & Rescue"}
                      </h3>
                      <div className="h-px w-12 bg-zinc-200 my-6 group-hover:w-full transition-all duration-700"></div>
                      <p className="text-zinc-500 leading-relaxed text-lg">
                          {isDe ? "Wir finden die Löcher im System, wo Sie Umsatz verlieren." : "We find the leaks where you lose revenue."}
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

      {/* 5. FAQ Section */}
      <FAQSection faqs={faqs} title={isDe ? "Häufige Fragen" : "FAQ"} />

      {/* 6. FINAL CTA */}
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
