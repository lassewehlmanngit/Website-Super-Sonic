import React from 'react';
import { Play, Edit3, CheckCircle } from 'lucide-react';

interface CMSDemoProps {
  lang: 'de' | 'en';
}

export const CMSDemo: React.FC<CMSDemoProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const features = isDe ? [
    "Texte selbst ändern",
    "Bilder austauschen",
    "Keine Programmierkenntnisse nötig",
    "Keine Abhängigkeit an uns"
  ] : [
    "Edit text yourself",
    "Replace images",
    "No programming skills needed",
    "No dependency on us"
  ];

  return (
    <section id="cms-demo" className="py-20 md:py-32 bg-zinc-50">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Video */}
          <div className="reveal">
            <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
              {/* Placeholder - replace with actual video embed */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform shadow-lg">
                  <Play className="text-zinc-900 ml-1" size={28} fill="currentColor" />
                </div>
                <p className="text-zinc-400 text-sm">
                  {isDe ? "CMS Demo ansehen" : "Watch CMS Demo"}
                </p>
              </div>

              {/* CMS UI Preview overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Edit3 size={16} className="text-sonic-orange" />
                <span className="text-zinc-900 text-xs font-medium">TinaCMS</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal delay-100">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tighter">
              {isDe 
                ? "Du kannst deine Webseitentexte selbst bearbeiten."
                : "You can edit your website text yourself."}
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-8">
              {isDe 
                ? "Keine Abhängigkeit an uns nachdem deine Webseite Live ist. Wir zeigen dir wie."
                : "No dependency on us after your website goes live. We'll show you how."}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-500" size={16} />
                  </div>
                  <span className="text-black font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CMS Logo */}
            <div className="inline-flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-zinc-200">
              <div className="w-8 h-8 bg-sonic-orange/10 rounded-lg flex items-center justify-center">
                <Edit3 className="text-sonic-orange" size={18} />
              </div>
              <div>
                <span className="text-black font-bold text-sm block">TinaCMS</span>
                <span className="text-zinc-500 text-xs">{isDe ? "Integriert" : "Integrated"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
