import React from 'react';
import { Users, MessageCircle, HeartHandshake } from 'lucide-react';

interface TeamSectionProps {
  lang: 'de' | 'en';
}

export const TeamSection: React.FC<TeamSectionProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const features = isDe ? [
    { icon: Users, title: "Festes Team", description: "Entwickler, Marketer und Supporter unter einem Dach." },
    { icon: MessageCircle, title: "Direkte Kommunikation", description: "Auf Augenhöhe. Ohne Reibungsverluste." },
    { icon: HeartHandshake, title: "Langfristiger Support", description: "Auch nach dem Launch sind wir für Fragen da." },
  ] : [
    { icon: Users, title: "Fixed Team", description: "Developers, marketers and support under one roof." },
    { icon: MessageCircle, title: "Direct Communication", description: "Eye to eye. No friction." },
    { icon: HeartHandshake, title: "Long-term Support", description: "We're here for questions even after launch." },
  ];

  return (
    <section id="team" className="fluid-section bg-paper">
      <div className="container-responsive">
        <div className="text-center mb-16 reveal">
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight mb-4">
            {isDe ? "Kein Outsourcing." : "No Outsourcing."}
            <br />
            <span className="text-zinc-400">{isDe ? "Keine Funkstille." : "No Radio Silence."}</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto reveal delay-100">
          <p className="fluid-body text-zinc-600 leading-relaxed text-center mb-12">
            {isDe ? (
              <>
                Hinter Super Sonic steckt ein <strong className="text-zinc-900">festes Team</strong> aus Entwicklern, Marketern und Supportern. Wir kommunizieren auf Augenhöhe und arbeiten ohne Reibungsverluste. Wenn du Fragen hast, erreichst du uns direkt.
              </>
            ) : (
              <>
                Behind Super Sonic is a <strong className="text-zinc-900">fixed team</strong> of developers, marketers and supporters. We communicate at eye level and work without friction. If you have questions, you reach us directly.
              </>
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-sonic-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-sonic-orange" size={28} />
                </div>
                <h3 className="font-bold text-zinc-900 mb-2 fluid-lg">{feature.title}</h3>
                <p className="text-zinc-500 fluid-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
