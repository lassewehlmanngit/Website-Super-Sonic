import React from 'react';
import { Trash2, Zap, Target } from 'lucide-react';

interface AntiBloatProps {
  lang: 'de' | 'en';
}

export const AntiBloat: React.FC<AntiBloatProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const problems = isDe ? [
    "Agenturen wollen dir mehr verkaufen als du brauchst.",
    "Webseiten-Baukästen sind verwirrend und erfordern Entwicklerkenntnisse.",
    "Beide geben dir monatliche Kosten, die du gar nicht willst."
  ] : [
    "Agencies want to sell you more than you need.",
    "Website builders are confusing and require developer skills.",
    "Both give you monthly costs you don't want."
  ];

  return (
    <section id="anti-bloat" className="py-20 md:py-32 bg-paper">
      <div className="container-responsive">
        {/* Pre-headline problems */}
        <div className="max-w-3xl mx-auto mb-12 reveal">
          <div className="flex flex-wrap gap-3 justify-center">
            {problems.map((problem, i) => (
              <span key={i} className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                {problem}
              </span>
            ))}
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center mb-16 reveal delay-100">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-tighter mb-6">
            {isDe ? "Wir bauen nur," : "We only build"}
            <br />
            <span className="text-sonic-orange">{isDe ? "was du brauchst." : "what you need."}</span>
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto reveal delay-200">
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-12">
            {isDe ? (
              <>
                Ein toter Blog, den seit 2022 keiner mehr gelesen hat? <strong className="text-black">Weg damit.</strong> Animationen, die nur deine Ladezeit fressen? <strong className="text-black">Brauchst du nicht.</strong> Wir reduzieren deine Website auf das, was zählt: <strong className="text-sonic-orange">Anfragen und Vertrauen.</strong>
              </>
            ) : (
              <>
                A dead blog that no one has read since 2022? <strong className="text-black">Gone.</strong> Animations that just eat your loading time? <strong className="text-black">You don't need them.</strong> We reduce your website to what matters: <strong className="text-sonic-orange">inquiries and trust.</strong>
              </>
            )}
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <Trash2 className="text-red-500" size={24} />
              </div>
              <h3 className="font-bold text-black mb-2">
                {isDe ? "Kein Bloat" : "No Bloat"}
              </h3>
              <p className="text-zinc-500 text-sm">
                {isDe ? "Jedes Feature hat einen Job." : "Every feature has a job."}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-green-500" size={24} />
              </div>
              <h3 className="font-bold text-black mb-2">
                {isDe ? "Schnell" : "Fast"}
              </h3>
              <p className="text-zinc-500 text-sm">
                {isDe ? "Keine unnötige Komplexität." : "No unnecessary complexity."}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-blue-500" size={24} />
              </div>
              <h3 className="font-bold text-black mb-2">
                {isDe ? "Fokussiert" : "Focused"}
              </h3>
              <p className="text-zinc-500 text-sm">
                {isDe ? "Nur was Ergebnisse bringt." : "Only what brings results."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
