import React from 'react';
import { MousePointerClick, TrendingUp, Lock, CheckCircle2, ArrowUpRight, Search, Layout, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SAMCalculator } from '../components/features/SAMCalculator';
import { Link } from 'react-router-dom';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';

interface Props { lang: 'de' | 'en'; }

export const ServiceUX: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={isDe 
          ? "UX Design | Conversion-Optimierung & User Research | Super Sonic Prototypes" 
          : "UX Design | Conversion Optimization & User Research | Super Sonic Prototypes"}
        description={isDe
          ? "Hübsch reicht nicht. Wir optimieren Ihre Nutzerführung datenbasiert, damit aus Besuchern Kunden werden. Keine Annahmen, nur Strategie."
          : "Pretty isn't enough. We optimize your user flows based on data to turn visitors into customers. No assumptions, just strategy."}
        lang={lang}
        path={`/${isDe ? 'de' : 'en'}/ux-design`}
      />
      
      {/* 1. HERO (Void) */}
      <section className="bg-void pt-40 pb-20 px-4 md:px-12 rounded-b-[3rem] text-white relative overflow-hidden">
          <ChristmasBalls />
          <div className="max-w-[90rem] mx-auto relative z-10">
             <div className="font-mono text-zinc-500 text-xs uppercase tracking-[0.2em] mb-8">
                  Super Sonic UX Engineering
             </div>
             <h1 className="text-[10vw] leading-[0.85] font-bold tracking-tighter mb-12">
                STOP<br/>
                <span className="text-zinc-600">LOSING LEADS.</span>
             </h1>
             <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light mb-12">
                {isDe 
                 ? "Hübsch reicht nicht. Ich optimiere Ihre Nutzerführung datenbasiert, damit aus Besuchern Kunden werden. Keine Annahmen, nur Strategie."
                 : "Pretty isn't enough. I optimize your user flows based on data to turn visitors into customers. No assumptions, just strategy."}
             </p>
             <Link to={isDe ? "/de/start" : "/en/start"}>
                <Button size="lg" variant="white">
                    {isDe ? "Audit anfragen" : "Request Audit"}
                </Button>
             </Link>
          </div>
      </section>

      {/* 2. LEAD MAGNET SECTION */}
      <section className="py-32 px-4 md:px-12 max-w-[90rem] mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-6xl font-bold text-black mb-8 tracking-tighter leading-[0.9]">
                    {isDe ? "BIETEN SIE" : "GIVE VALUE"} <br />
                    <span className="text-zinc-400">{isDe ? "MEHRWERT." : "FIRST."}</span>
                </h2>
                <p className="text-xl text-zinc-500 leading-relaxed mb-8">
                    {isDe
                     ? "Niemand will ein 'Kontaktformular' ausfüllen. Nutzer wollen Antworten. Wir bauen Tools, die Antworten liefern und E-Mails einsammeln."
                     : "Nobody wants to 'Contact Us'. They want answers. We build tools that give answers and capture emails."}
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-black/5">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">1</div>
                        <span className="font-medium">{isDe ? "Echte Mathematik (ROI Rechner)" : "Real Math (ROI Calculators)"}</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-black/5">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">2</div>
                        <span className="font-medium">{isDe ? "Sofortiges visuelles Feedback" : "Instant Visual Feedback"}</span>
                    </div>
                </div>
             </div>
             <div>
                 <SAMCalculator />
             </div>
         </div>
      </section>

      {/* 3. DEEP DIVE FEATURES */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black p-12 rounded-[2.5rem] text-white">
                <Layout className="text-white mb-6" size={32} />
                <h3 className="text-2xl font-bold text-white mb-4">{isDe ? "Doppelte Navigation" : "Double Navigation"}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    {isDe ? "Immersive transparente Nav für den 'Wow'-Faktor, wechselt zu Sticky-Utility-Bar beim Scrollen." : "Immersive transparent nav for the 'Wow' factor, switching to a sticky utility bar for easy access when scrolling."}
                </p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] border border-black/5">
                <Search className="text-black mb-6" size={32} />
                <h3 className="text-2xl font-bold text-black mb-4">{isDe ? "Deep-Dive Analytics" : "Deep-Dive Analytics"}</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                    {isDe ? "Wir tracken 'Attention' (Zeit auf Meilensteinen), nicht nur Klicks. Unterscheiden Sie zwischen Bouncern und zögernden Interessenten." : "Tracking 'Attention' (time on page milestones) not just clicks. Distinguish between bounced users and hesitant prospects."}
                </p>
            </div>
         </div>
      </section>

      {/* 4. RETENTION SECTION */}
      <section className="px-4 md:px-12 pb-32 max-w-[90rem] mx-auto">
        <div className="bg-white p-12 md:p-20 rounded-[3rem] border border-black/5">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                     <h2 className="text-5xl font-bold text-black mb-6 tracking-tight">
                        {isDe ? "Intelligente Retention" : "Smart Retention"}
                    </h2>
                    <p className="text-xl text-zinc-500 leading-relaxed mb-8">
                        {isDe
                         ? "Wir nerven Nutzer nicht mit Popups. Wir erkennen, wenn ein Nutzer zögert oder den Tab schließen will. Dann – und nur dann – bieten wir Hilfe an."
                         : "We don't annoy users with popups. We detect when a user hesitates or intends to close the tab. Then—and only then—do we offer help."}
                    </p>
                    <div className="flex gap-4">
                         <div className="px-4 py-2 bg-zinc-50 rounded-full text-sm font-bold text-black border border-zinc-200">Session-Smart</div>
                         <div className="px-4 py-2 bg-zinc-50 rounded-full text-sm font-bold text-black border border-zinc-200">Context-Aware</div>
                    </div>
                </div>
                <div className="flex-1 w-full">
                     <div className="bg-black text-white p-8 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                         <div className="flex items-start gap-4 mb-4">
                             <div className="bg-zinc-800 p-2 rounded-lg"><Lock size={20}/></div>
                             <div>
                                 <h4 className="font-bold">Exit Intent Detected</h4>
                                 <p className="text-zinc-400 text-sm">Mouse velocity {'>'} 800px/s</p>
                             </div>
                         </div>
                         <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                             <div className="h-full bg-white w-[85%]"></div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};