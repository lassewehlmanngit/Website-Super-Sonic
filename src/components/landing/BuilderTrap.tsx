import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface BuilderTrapProps {
  lang: 'de' | 'en';
}

export const BuilderTrap: React.FC<BuilderTrapProps> = ({ lang }) => {
  const isDe = lang === 'de';

  return (
    <section id="problem" className="py-20 md:py-32 bg-zinc-900 text-white">
      <div className="container-responsive max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 reveal">
          <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
            <AlertTriangle className="text-red-400" size={24} />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            {isDe ? "Die Website-Baukasten-Falle" : "The Website Builder Trap"}
          </h2>
        </div>

        <div className="space-y-6 text-zinc-300 text-lg md:text-xl leading-relaxed reveal delay-100">
          <p>
            {isDe ? (
              <>
                <strong className="text-white">Hand aufs Herz:</strong> Ein Baukasten verspricht dir Freiheit, aber er schenkt dir Arbeit. Du sitzt abends vor dem Rechner, schiebst Pixel hin und her und am Ende sieht es auf dem Handy trotzdem nicht gut aus.
              </>
            ) : (
              <>
                <strong className="text-white">Let's be honest:</strong> A website builder promises freedom, but it gives you work. You sit at your computer in the evening, pushing pixels around, and in the end it still doesn't look good on mobile.
              </>
            )}
          </p>
          
          <p>
            {isDe ? (
              <>
                Wir liefern dir kein Bastel-Set. Wir liefern dir das <strong className="text-sonic-orange">fertige, polierte Ergebnis</strong>. Wir nehmen das Chaos aus der Gleichung, damit du dich um dein Business kümmern kannst.
              </>
            ) : (
              <>
                We don't deliver a DIY kit. We deliver the <strong className="text-sonic-orange">finished, polished result</strong>. We take the chaos out of the equation so you can focus on your business.
              </>
            )}
          </p>

          <div className="mt-8 p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700">
            <p className="text-white font-bold text-xl md:text-2xl">
              {isDe 
                ? "Du bist CEO, kein Hobby-Webdesigner."
                : "You're a CEO, not a hobby web designer."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
