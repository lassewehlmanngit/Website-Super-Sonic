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
import { ProblemSection } from '../components/home/ProblemSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

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
          question: isDe ? "Wem gehört meine Website, nachdem ihr sie gebaut habt?" : "Who owns my website after you build it?",
          answer: isDe
            ? "Dir. 100%.\n\nDenk daran wie beim Hauskauf. Nachdem du uns bezahlt hast, geben wir dir die Schlüssel. Die Website gehört dir.\n\nWir legen den ganzen Code in einen sicheren Ordner online (genannt GitHub). Nur du kannst darauf zugreifen. Du kannst jeden Entwickler beauftragen, es zu ändern. Oder deine Firma mit der Website verkaufen.\n\nWir haben null Anspruch auf deine Website, nachdem wir sie übergeben haben."
            : "You do. 100%.\n\nThink of it like buying a house. After you pay us, we give you the keys. The website is yours.\n\nWe put all the code in a secure folder online (called GitHub). Only you can access it. You can hire any developer to change it. Or sell your company with the website included.\n\nWe have zero claim on your website after we hand it over."
      },
      {
          question: isDe ? "Was kostet eine professionelle Website in Deutschland?" : "What does a professional website cost in Germany?",
          answer: isDe
            ? "Ab €5.800 für eine komplette Website (Starter-Paket, fertig in 72 Stunden). Festpreis. Keine monatlichen Gebühren. Sie zahlen einmal und besitzen die Website für immer. Größere Projekte auf Anfrage."
            : "Starting at €5,800 for a complete website (Starter package, ready in 72 hours). Fixed price. No monthly fees. You pay once and own the website forever. Larger projects on request."
      },
      {
          question: isDe ? "Wie lange dauert es eine neue Website zu entwickeln?" : "How long does it take to develop a new website?",
          answer: isDe
            ? "Eine Marketing-Website dauert 2-4 Wochen. Unser Starter-Paket ist in 72 Stunden fertig. Wir nutzen KI für Geschwindigkeit, aber ein Mensch mit 10 Jahren Erfahrung prüft alles."
            : "A marketing website takes 2-4 weeks. Our Starter package is ready in 72 hours. We use AI for speed, but a human with 10 years of experience reviews everything."
      },
      {
          question: isDe ? "Kann ich meine Website selbst bearbeiten ohne Programmierkenntnisse?" : "Can I edit my website myself without programming skills?",
          answer: isDe
            ? "Ja. Wir integrieren ein Headless CMS wie Keystatic oder Sanity. Sie können Texte und Bilder ändern, ohne den Code zu berühren. So einfach wie WordPress, aber schneller und sicherer."
            : "Yes. We integrate a Headless CMS like Keystatic or Sanity. You can edit text and images without touching the code. As easy as WordPress, but faster and safer."
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
          ? "Die meisten Firmen mieten ihre Website von WordPress oder Webflow. Wir bauen deine. Sie gehört dir für immer. Keine monatlichen Kosten. Ab €5.800."
          : "Most companies rent their website from WordPress or Webflow. We build yours. You own it forever. No monthly fees. Starting at €5,800."}
        lang={lang}
      />
      
      {/* 1. HERO SECTION (Dark Void) */}
      <section className="min-h-screen bg-void pt-32 pb-20 px-4 md:px-12 flex flex-col justify-center relative overflow-hidden rounded-b-[3rem]">
        
        <ChristmasBalls />

        {/* Abstract Background Element */}
        <div className="absolute -top-0 right-0 w-[120px] h-[120px] md:w-[620px] md:h-[620px] bg-white opacity-[0.001] md:opacity-[0.002] rounded-full blur-[40px] md:blur-[150px] -translate-y-1/4 translate-x-1/2 pointer-events-none animate-fade-in-up duration-1000"></div>

        <div className="max-w-[90rem] mx-auto w-full relative z-10">
            {/* Top Bar - Minimal */}
            <div className="flex justify-between items-center mb-16 md:mb-24 reveal delay-100">
               <div className="font-mono text-zinc-500 text-xs uppercase tracking-[0.2em]">
                  {isDe ? "Verfügbar für Q1 2025" : "Available for Q1 2025"}
               </div>
               <div className="text-right hidden md:block">
                  <div className="text-white font-mono text-xs">Super Sonic Prototypes™</div>
                  <div className="text-zinc-500 font-mono text-xs">Est. 2024</div>
               </div>
            </div>

            {/* Main Hero Grid - Asymmetric */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center reveal delay-200">
              
              {/* Left: Headline (Takes 7 columns) */}
              <div className="lg:col-span-7 space-y-8">
                  <h1 className="text-white text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] font-bold tracking-tighter mb-12 uppercase">
                    {isDe
                     ? <>Deine Website. <br/><span className="text-zinc-600">Dein Code.</span><br/><span className="text-sonic-orange">Dein Eigentum.</span></>
                     : <>Your website. <br/><span className="text-zinc-600">Your code.</span><br/><span className="text-sonic-orange">Your property.</span></>
                    }
                  </h1>
              </div>

              {/* Right: Content + CTA (Takes 5 columns) */}
              <div className="lg:col-span-5 space-y-8 reveal delay-300">
                  {/* Subheadline - Compact */}
                  <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
                      {isDe 
                      ? "Einmal zahlen. Für immer besitzen. Keine monatlichen Gebühren. Kein Lock-in."
                      : "Pay once. Own forever. No monthly fees. No lock-in."}
                  </p>

                  {/* CTA - Prominent */}
                  <div>
                      <Link to={isDe ? "/de/start" : "/en/start"}>
                          <Button size="lg" variant="white" className="w-full md:w-auto group hover:scale-105 transition-transform duration-300">
                              {isDe ? "Projekt kalkulieren" : "Calculate Project"} 
                              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                          </Button>
                      </Link>
                  </div>
              </div>
            </div>

            {/* Trust Badge - Floating Below */}
            <div className="mt-16 md:mt-24 flex justify-center reveal delay-400">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="p-3 bg-green-500/20 rounded-xl text-green-400 shrink-0">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-base mb-2">
                            {isDe ? "Unabhängigkeits-Garantie" : "Independence Guarantee"}
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {isDe
                             ? "Wir geben dir alles. Der Code liegt in deinem GitHub-Account. Wenn wir dir morgen nicht mehr gefallen, gehst du mit deiner Website. Keine Fragen."
                             : "We give you everything. The code lives in your GitHub account. If you don't like us tomorrow, walk away with your website. No questions asked."}
                        </p>
                    </div>
                </div>
            </div>

        </div>

        {/* Infinite Marquee */}
        <div className="mt-32 pt-8 border-t border-white/10 overflow-hidden w-full reveal delay-600">
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

      {/* 1.1 PROBLEM SECTION (Replaces Cost Explainer) */}
      <ProblemSection />

      {/* 2. SERVICES BENTO GRID (Paper Background) */}
      <section className="py-32 px-4 md:px-12 max-w-[95rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
              <h2 className="text-6xl md:text-8xl font-bold text-black tracking-tighter leading-[0.9]">
                  {isDe ? "Drei Wege, wie" : "Three Ways"} <br />
                  <span className="text-zinc-400">{isDe ? "wir dir helfen." : "We Help You."}</span>
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
                        {isDe ? "Mehr Kunden gewinnen" : "Get More Customers"}
                      </h3>
                      <div className="h-px w-12 bg-zinc-200 my-6 group-hover:w-full transition-all duration-700"></div>
                      <p className="text-zinc-500 leading-relaxed text-lg">
                          {isDe ? "Eine schnelle Website, der die Leute vertrauen. Erscheint bei Google. Verwandelt Besucher in Käufer. Ab €5.800." : "A fast website that people trust. Shows up in Google. Turns visitors into buyers. Starting at €5,800."}
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
                         {isDe ? "Teste deine Idee schnell" : "Test Your Idea Fast"}
                      </h3>
                      <div className="h-px w-12 bg-white/20 my-6 group-hover:w-full transition-all duration-700"></div>
                      <p className="text-white font-medium leading-relaxed text-lg">
                          {isDe ? "Eine funktionierende Version deiner Software in 2 Wochen. Zeige sie echten Kunden. Finde heraus, ob die Leute sie wollen, bevor du €100k ausgibst." : "A working version of your software in 2 weeks. Show it to real customers. Find out if people want it before you spend €100k."}
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
                         {isDe ? "Reparieren, warum Leute gehen" : "Fix Why People Leave"}
                      </h3>
                      <div className="h-px w-12 bg-zinc-200 my-6 group-hover:w-full transition-all duration-700"></div>
                      <p className="text-zinc-500 leading-relaxed text-lg">
                          {isDe ? "Deine Website bekommt Besucher. Aber sie kaufen nicht. Wir finden genau, wo sie aufgeben. Dann reparieren wir es. Die meisten Kunden sehen 20-40% mehr Verkäufe." : "Your website gets visitors. But they don't buy. We find exactly where they give up. Then we fix it. Most clients see 20-40% more sales."}
                      </p>
                  </div>
              </Link>
          </div>
      </section>

      {/* 2.5 Testimonials Section */}
      <TestimonialsSection />

      {/* 3. VELOCITY SECTION (Visual Break) */}
      <section className="py-20 px-4 md:px-12 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 reveal">
                  <div className="inline-block px-4 py-1 rounded-full border border-sonic-orange/30 bg-orange-50 text-sonic-orange font-mono text-xs uppercase tracking-widest mb-6">
                      Velocity Matters
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
                      {isDe ? "Warum wir schneller sind als Agenturen." : "Why we're faster than agencies."}
                  </h2>
                  <p className="text-xl text-zinc-500 leading-relaxed mb-8 whitespace-pre-wrap">
                      {isDe 
                      ? "Normale Agenturen haben 5 Leute in jedem Meeting. Sie rechnen €150 pro Stunde ab. Alles dauert Monate.\n\nWir nutzen KI für die langweiligen Teile. Repetitiven Code schreiben. Formatieren. Testen. Das bedeutet, du bekommst eine echte Person, die sich darauf konzentriert, dein Geschäft besser zu machen. Nicht aufs Tippen."
                      : "Normal agencies have 5 people in every meeting. They bill €150 per hour. Everything takes months.\n\nWe use AI for the boring parts. Writing repetitive code. Formatting. Testing. That means you get a real person focused on making your business better. Not on typing."}
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
      <div className="text-center pb-20 -mt-10">
          <Link to={isDe ? "/de/faq" : "/en/faq"} className="view-all-faq text-sonic-orange font-bold hover:underline">
             {isDe ? "Alle FAQs ansehen →" : "View all FAQs →"}
          </Link>
      </div>

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
