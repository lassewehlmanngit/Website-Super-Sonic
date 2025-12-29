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
            <h1 className="text-white text-[6vw] leading-[0.9] font-bold tracking-tighter mb-6">
                {isDe ? "Hallo. Ich bin die Person, die deine Website baut." : "Hi. I'm the person who will build your website."}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light mb-12">
                {isDe ? "Kein Team von 10 Leuten. Keine Agentur. Nur ich. Und ich mache das seit 10 Jahren." : "Not a team of 10. Not an agency. Just me. And I've been doing this for 10 years."}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light space-y-8">
                    <p className="whitespace-pre-wrap">
                        {isDe 
                        ? "Ich fing an, Websites zu bauen, als ich 23 war. Habe mir alles selbst beigebracht.\n\nDann wurde ich CEO. Führte eine Online-Teefirma in Japan. Lernte, wie es ist, sich um Geld zu sorgen. Etwas schnell gebaut zu brauchen. Keine Million Euro für eine Agentur zu haben.\n\nDanach arbeitete ich für die Großen. Banken. Autofirmen. Pharma. Lernte, wie sie Software bauen, die nicht kaputtgeht.\n\nJetzt helfe ich kleinen und mittleren Firmen, die gleiche Qualität zu bekommen wie die Großen. Aber ohne die Preise der Großen."
                        : "I started building websites when I was 23. Taught myself everything.\n\nThen I became a CEO. Ran an online tea company in Japan. Learned what it's like to worry about money. To need something built fast. To not have a million euros for an agency.\n\nAfter that, I worked for the big guys. Banks. Car companies. Pharma. Learned how they build software that doesn't break.\n\nNow I help small and medium companies get the same quality the big guys get. But without the big guy prices."}
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                        <h3 className="text-white font-bold text-lg mb-4">
                            {isDe ? "So arbeite ich:" : "How I work:"}
                        </h3>
                        <p className="text-zinc-300 text-base">
                            {isDe
                            ? "1. Ich entwerfe die Struktur der Website oder Anwendung basierend auf Ihren Anforderungen."
                            : "1. I design the structure of the website or application based on your requirements."}
                        </p>
                        <p className="text-zinc-300 text-base">
                            {isDe
                            ? "2. Ich finde den besten Tech-Stack für Ihre Situation."
                            : "2. I find the best tech stack for your situation."}
                        </p>
                        <p className="text-zinc-300 text-base">
                            {isDe
                            ? "3. Ich baue das Fundament textlich auf."
                            : "3. I build out the foundation textually."}
                        </p>
                        <p className="text-zinc-300 text-base">
                            {isDe
                            ? "4. Ich nutze meine Prompts und Coding-Tools, um einen Prototypen zu erstellen."
                            : "4. I use my prompts and coding tools to build a prototype."}
                        </p>
                        <p className="text-zinc-300 text-base">
                            {isDe
                            ? "5. Ich prüfe den Code auf Qualität, Korrektheit und ob er den Anforderungen entspricht."
                            : "5. I review the code for quality, correctness, and alignment with requirements."}
                        </p>
                        <p className="text-zinc-300 text-base">
                            {isDe
                            ? "6. Sie prüfen den Prototypen. Nach Ihrer Zustimmung baue ich die Launch-Version."
                            : "6. You review the prototype. After approval, I build the launch version."}
                        </p>
                        <p className="text-zinc-300 text-base">
                            {isDe
                            ? "7. Qualitätskontrolle und Dokumentation. Dann übergebe ich das Projekt."
                            : "7. Quality control and documentation. Then I hand over the project."}
                        </p>
                    </div>
                    <p className="text-white font-medium">
                        {isDe 
                        ? "Sie bekommen schnelle Ergebnisse durch KI. Aber ein Mensch mit 10 Jahren Erfahrung prüft alles. Das ist der Unterschied."
                        : "You get fast results through AI. But a human with 10 years of experience reviews everything. That's the difference."}
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