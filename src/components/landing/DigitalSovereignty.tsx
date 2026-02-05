import React from 'react';
import { Server, Shield, Lock, Leaf } from 'lucide-react';

interface DigitalSovereigntyProps {
  lang: 'de' | 'en';
}

export const DigitalSovereignty: React.FC<DigitalSovereigntyProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const features = isDe ? [
    { icon: Server, text: "Hosted in Frankfurt 🇩🇪" },
    { icon: Shield, text: "100% DSGVO-konform" },
    { icon: Lock, text: "Open-Source Power" },
    { icon: Leaf, text: "Monatliche Kosten → 0€" },
  ] : [
    { icon: Server, text: "Hosted in Frankfurt 🇩🇪" },
    { icon: Shield, text: "100% GDPR compliant" },
    { icon: Lock, text: "Open-Source Power" },
    { icon: Leaf, text: "Monthly costs → €0" },
  ];

  return (
    <section id="sovereignty" className="py-20 md:py-32 bg-void text-white">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Visual */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative">
              {/* Server visualization */}
              <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-zinc-400 font-mono text-sm">server.frankfurt.de</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div key={i} className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700 flex items-center gap-3">
                      <feature.icon className="text-green-400" size={20} />
                      <span className="text-zinc-300 text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                <Lock size={16} />
                {isDe ? "100% Sicher" : "100% Secure"}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal delay-100 order-1 lg:order-2">
            <div className="inline-block px-4 py-1 rounded-full border border-green-500/30 bg-green-950/50 text-green-400 font-mono text-xs uppercase tracking-widest mb-6">
              {isDe ? "Digitale Souveränität" : "Digital Sovereignty"}
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter">
              {isDe ? (
                <>
                  Es wird Zeit, deine Webseite <br />
                  <span className="text-sonic-orange">DEIN EIGENTUM</span> zu nennen.
                </>
              ) : (
                <>
                  It's time to call your website <br />
                  <span className="text-sonic-orange">YOUR PROPERTY</span>.
                </>
              )}
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
              {isDe ? (
                <>
                  Deine Website liegt nicht in irgendeiner geschlossenen US-Cloud. Wir nutzen <strong className="text-white">Open-Source-Power</strong> und modernes Hosting. Das heißt: Maximale Sicherheit, volle DSGVO-Konformität und monatliche Kosten, die gegen Null gehen.
                </>
              ) : (
                <>
                  Your website doesn't sit in some closed US cloud. We use <strong className="text-white">Open-Source power</strong> and modern hosting. That means: Maximum security, full GDPR compliance, and monthly costs approaching zero.
                </>
              )}
            </p>

            <p className="text-zinc-500 border-l-2 border-sonic-orange/30 pl-6">
              {isDe 
                ? "Der Mittelstand hat es satt, tausende monatliche Kosten zu haben. Wir sehen das genauso."
                : "SMBs are tired of having thousands in monthly costs. We see it the same way."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
