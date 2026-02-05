import React from 'react';
import { Play, Clock } from 'lucide-react';

interface ProcessVideoProps {
  lang: 'de' | 'en';
}

export const ProcessVideo: React.FC<ProcessVideoProps> = ({ lang }) => {
  const isDe = lang === 'de';

  return (
    <section id="process-video" className="fluid-section bg-paper">
      <div className="container-responsive max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight mb-4">
            {isDe ? "Schau uns über die Schulter." : "Look over our shoulder."}
          </h2>
          <p className="text-zinc-500 fluid-lg">
            {isDe 
              ? "In 2 Minuten zeige ich dir, wie du deine gratis Webseite erhältst."
              : "In 2 minutes I'll show you how to get your free website."}
          </p>
        </div>

        {/* Video Container */}
        <div className="relative reveal delay-100">
          <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            {/* Placeholder - replace with actual video embed */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-sonic-orange rounded-full flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,77,0,0.4)]">
                <Play className="text-white ml-1" size={32} fill="white" />
              </div>
              <p className="text-zinc-400 fluid-sm">
                {isDe ? "Video abspielen" : "Play video"}
              </p>
            </div>

            {/* Video timestamp badge */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
              <Clock size={14} className="text-white" />
              <span className="text-white fluid-sm font-mono">2:00</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center reveal delay-200">
          <p className="text-zinc-600 fluid-lg">
            {isDe ? (
              <>
                <strong className="text-zinc-900">Kostenlos.</strong> Gefällt sie dir, starten wir durch und beginnen dein Projekt.
              </>
            ) : (
              <>
                <strong className="text-zinc-900">Free.</strong> If you like it, we'll start and begin your project.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
