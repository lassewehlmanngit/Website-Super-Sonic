import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';
import { OriginStory } from '../components/about/OriginStory';
import { ValuesSection } from '../components/about/ValuesSection';

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
      
      {/* 1. HERO */}
      <section className="bg-void pt-40 pb-24 px-4 md:px-12 rounded-b-[3rem] relative overflow-hidden text-center">
          <ChristmasBalls />
          <div className="max-w-4xl mx-auto relative z-10">
            {/* Founder Photo */}
            <div className="mb-8 relative inline-block">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 mx-auto bg-zinc-800">
                    {/* Placeholder for photo */}
                    <img src="/images/founder-photo.jpg" alt="Founder" className="w-full h-full object-cover" 
                         onError={(e) => {
                             e.currentTarget.src = "https://ui-avatars.com/api/?name=Lasse&background=random&size=200"; // Fallback
                         }}
                    />
                </div>
            </div>

            <h1 className="text-white text-[6vw] leading-[0.9] font-bold tracking-tighter mb-6">
                {isDe ? "Hallo. Ich bin die Person, die deine Website baut." : "Hi. I'm the person who will build your website."}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
                {isDe ? "Kein Team von 10 Leuten. Keine Agentur. Nur ich. Und ich mache das seit 10 Jahren." : "Not a team of 10. Not an agency. Just me. And I've been doing this for 10 years."}
            </p>
          </div>
      </section>

      {/* 2. ORIGIN STORY */}
      <OriginStory />

      {/* 3. PROCESS & BIO */}
      <section className="py-20 px-4 md:px-12 bg-white">
          <div className="max-w-[90rem] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="text-lg text-zinc-600 leading-relaxed space-y-8">
                    <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-8 space-y-6">
                        <h3 className="text-black font-bold text-2xl mb-4">
                            {isDe ? "So arbeite ich:" : "How I work:"}
                        </h3>
                        <div className="space-y-4">
                            <p><strong>1.</strong> {isDe ? "Ich entwerfe die Struktur der Website oder Anwendung basierend auf Ihren Anforderungen." : "I design the structure of the website or application based on your requirements."}</p>
                            <p><strong>2.</strong> {isDe ? "Ich finde den besten Tech-Stack für Ihre Situation." : "I find the best tech stack for your situation."}</p>
                            <p><strong>3.</strong> {isDe ? "Ich baue das Fundament textlich auf." : "I build out the foundation textually."}</p>
                            <p><strong>4.</strong> {isDe ? "Ich nutze meine Prompts und Coding-Tools, um einen Prototypen zu erstellen." : "I use my prompts and coding tools to build a prototype."}</p>
                            <p><strong>5.</strong> {isDe ? "Ich prüfe den Code auf Qualität, Korrektheit und ob er den Anforderungen entspricht." : "I review the code for quality, correctness, and alignment with requirements."}</p>
                            <p><strong>6.</strong> {isDe ? "Sie prüfen den Prototypen. Nach Ihrer Zustimmung baue ich die Launch-Version." : "You review the prototype. After approval, I build the launch version."}</p>
                            <p><strong>7.</strong> {isDe ? "Qualitätskontrolle und Dokumentation. Dann übergebe ich das Projekt." : "Quality control and documentation. Then I hand over the project."}</p>
                        </div>
                    </div>
                    <p className="text-black font-medium text-xl px-4 border-l-4 border-sonic-orange">
                        {isDe 
                        ? "Sie bekommen schnelle Ergebnisse durch KI. Aber ein Mensch mit 10 Jahren Erfahrung prüft alles. Das ist der Unterschied."
                        : "You get fast results through AI. But a human with 10 years of experience reviews everything. That's the difference."}
                    </p>
                </div>
                
                <div className="bg-zinc-900 rounded-[2rem] p-8 md:p-12 border border-white/10 text-white sticky top-24">
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

      {/* 4. VALUES */}
      <ValuesSection />

    </div>
  );
};
