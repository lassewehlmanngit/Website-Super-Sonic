import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';

interface Props { lang: 'de' | 'en'; }

export const About: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={isDe 
          ? "Über Mich | 10 Jahre Erfahrung + AI Power | Super Sonic Prototypes" 
          : "About | 10 Years Experience + AI Power | Super Sonic Prototypes"}
        description={isDe
          ? "Ich habe Systeme für VW und Allianz gebaut. Ich nutze KI für Geschwindigkeit und meine Erfahrung für Sicherheit. Sie bekommen das Beste aus beiden Welten."
          : "I built systems for VW and Allianz. I use AI for speed, and my experience for safety. You get the best of both worlds."}
        lang={lang}
        path={`/${isDe ? 'de' : 'en'}/about`}
      />
      <section className="bg-void pt-40 pb-24 px-4 md:px-12 rounded-b-[3rem] relative overflow-hidden">
          <ChristmasBalls />
          <div className="max-w-[90rem] mx-auto relative z-10">
            <h1 className="text-white text-[8vw] leading-[0.9] font-bold tracking-tighter mb-12">
                10 YEARS.<br/>
                <span className="text-sonic-orange">{isDe ? "KEIN BULLSHIT." : "NO FLUFF."}</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light space-y-8">
                    <p>
                        {isDe 
                        ? "Ich habe Systeme für VW und Allianz gebaut. Ich habe eine Sache gelernt: Komplexität tötet."
                        : "I built systems for VW and Allianz. I learned one thing: Complexity kills."}
                    </p>
                    <p>
                        {isDe
                        ? "KI schreibt schnell Code. Aber sie macht Fehler. Ich nutze KI für Geschwindigkeit und meine Erfahrung für Sicherheit."
                        : "AI writes code fast. But it makes mistakes. I use AI for speed, and my experience for safety."}
                    </p>
                    <p className="text-white font-medium">
                        {isDe 
                        ? "Sie bekommen das Beste aus beiden Welten."
                        : "You get the best of both worlds."}
                    </p>
                </div>
                
                <div className="bg-zinc-900 rounded-[2rem] p-8 md:p-12 border border-white/10">
                    <h3 className="text-white font-bold text-2xl mb-8">Core Stack</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-zinc-300 text-lg border-b border-white/5 pb-4"><CheckCircle2 size={24} className="text-sonic-orange" /> React Architecture</div>
                        <div className="flex items-center gap-4 text-zinc-300 text-lg border-b border-white/5 pb-4"><CheckCircle2 size={24} className="text-sonic-orange" /> TypeScript Strict</div>
                        <div className="flex items-center gap-4 text-zinc-300 text-lg border-b border-white/5 pb-4"><CheckCircle2 size={24} className="text-sonic-orange" /> Enterprise UX</div>
                        <div className="flex items-center gap-4 text-zinc-300 text-lg"><CheckCircle2 size={24} className="text-sonic-orange" /> AI Integration</div>
                    </div>
                </div>
            </div>
          </div>
      </section>
    </div>
  );
};