import React from 'react';
import { Sparkles, Search, Accessibility, Code2, Mail } from 'lucide-react';

interface FutureProofProps {
  lang: 'de' | 'en';
}

export const FutureProof: React.FC<FutureProofProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const techFeatures = isDe ? [
    "Schema Markup",
    "Lazy-Loading",
    "Aria-Labels",
    "Semantic HTML",
    "Core Web Vitals"
  ] : [
    "Schema Markup",
    "Lazy-Loading",
    "Aria-Labels",
    "Semantic HTML",
    "Core Web Vitals"
  ];

  return (
    <section id="future-proof" className="py-20 md:py-32 bg-white">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="reveal">
            <div className="inline-block px-4 py-1 rounded-full border border-sonic-orange/30 bg-orange-50 text-sonic-orange font-mono text-xs uppercase tracking-widest mb-6">
              {isDe ? "Bereit für 2026" : "Ready for 2026"}
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tighter">
              {isDe ? (
                <>
                  Wenn Google und KI <br />
                  <span className="text-zinc-400">deine Website liest.</span>
                </>
              ) : (
                <>
                  When Google and AI <br />
                  <span className="text-zinc-400">read your website.</span>
                </>
              )}
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-8">
              {isDe ? (
                <>
                  Wir optimieren deinen Code so, dass nicht nur Google dich liebt, sondern auch <strong className="text-black">KI-Systeme wie ChatGPT</strong> deine Infos finden. Außerdem: Wir bauen <strong className="text-sonic-orange">100% barrierefrei</strong> nach dem neuen BFSG-Gesetz.
                </>
              ) : (
                <>
                  We optimize your code so that not only Google loves you, but also <strong className="text-black">AI systems like ChatGPT</strong> find your info. Plus: We build <strong className="text-sonic-orange">100% accessible</strong> according to the new BFSG law.
                </>
              )}
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                <Search size={16} />
                SEO
              </div>
              <div className="flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles size={16} />
                AI-Ready
              </div>
              <div className="flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                <Accessibility size={16} />
                BFSG
              </div>
            </div>
          </div>

          {/* Right: Tech features */}
          <div className="reveal delay-100">
            <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100">
              <h3 className="text-xl font-bold text-black mb-6">
                {isDe 
                  ? "Schon einmal etwas von Schema, Lazy-Loading und Aria-Label gehört?"
                  : "Ever heard of Schema, Lazy-Loading and Aria-Label?"}
              </h3>
              
              <p className="text-zinc-600 mb-6">
                {isDe 
                  ? "Brauchst du auch nicht. Denn diese implementieren wir für dich. Eine moderne Webseite besteht aus mehr als Text, Farbe, und Schrift."
                  : "You don't need to. We implement these for you. A modern website consists of more than text, color, and font."}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {techFeatures.map((feature, i) => (
                  <span key={i} className="bg-zinc-200 text-zinc-700 px-3 py-1 rounded-lg text-sm font-mono">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="bg-white rounded-xl p-4 border border-zinc-200">
                <p className="text-sm text-zinc-600 mb-3">
                  {isDe 
                    ? "Fragen zu Technologien die wir verwenden oder integrieren können?"
                    : "Questions about technologies we use or can integrate?"}
                </p>
                <a 
                  href="mailto:hello@supersonic.design" 
                  className="inline-flex items-center gap-2 text-sonic-orange font-bold text-sm hover:underline"
                >
                  <Mail size={16} />
                  hello@supersonic.design
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
