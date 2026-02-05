import React from 'react';
import { Shield, Wrench, MessageSquare } from 'lucide-react';

interface TakeFearProps {
  lang: 'de' | 'en';
}

export const TakeFear: React.FC<TakeFearProps> = ({ lang }) => {
  const isDe = lang === 'de';

  return (
    <section id="guarantee" className="fluid-section bg-zinc-900 text-white">
      <div className="container-responsive max-w-4xl mx-auto text-center">
        <div className="reveal">
          <div className="w-20 h-20 bg-sonic-orange/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="text-sonic-orange" size={40} />
          </div>

          <h2 className="fluid-section-title font-bold mb-6 tracking-tight">
            {isDe ? "Was, wenn doch etwas schief läuft?" : "What if something goes wrong?"}
          </h2>

          <p className="fluid-body text-zinc-400 leading-relaxed mb-10">
            {isDe ? (
              <>
                Probleme und Fehler gehören zum Alltag (und wir alle kennen das). Wir stehen zu unserem Wort und bauen dir eine Webseite die funktioniert. <strong className="text-white">Tauchen Fehler und Probleme auf, lösen wir diese gemeinsam.</strong>
              </>
            ) : (
              <>
                Problems and errors are part of everyday life (and we all know it). We stand by our word and build you a website that works. <strong className="text-white">If errors and problems occur, we solve them together.</strong>
              </>
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700 flex items-center gap-4">
              <Wrench className="text-sonic-orange" size={24} />
              <span className="text-white font-medium fluid-base">
                {isDe ? "Kostenlose Bug-Fixes" : "Free Bug Fixes"}
              </span>
            </div>
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700 flex items-center gap-4">
              <MessageSquare className="text-sonic-orange" size={24} />
              <span className="text-white font-medium fluid-base">
                {isDe ? "Direkte Kommunikation" : "Direct Communication"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
