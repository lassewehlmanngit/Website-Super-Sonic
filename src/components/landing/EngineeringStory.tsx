import React from 'react';
import { Cpu, Shield, Search, Sparkles } from 'lucide-react';

interface EngineeringStoryProps {
  lang: 'de' | 'en';
}

export const EngineeringStory: React.FC<EngineeringStoryProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const features = isDe ? [
    { icon: Cpu, text: "Geschwindigkeit optimiert" },
    { icon: Shield, text: "Sicherheit eingebaut" },
    { icon: Search, text: "SEO ready" },
    { icon: Sparkles, text: "AI-Search optimiert" },
  ] : [
    { icon: Cpu, text: "Speed optimized" },
    { icon: Shield, text: "Security built-in" },
    { icon: Search, text: "SEO ready" },
    { icon: Sparkles, text: "AI-Search optimized" },
  ];

  return (
    <section id="engineering" className="fluid-section bg-void text-white">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="reveal">
            <div className="inline-block px-4 py-1 rounded-full border border-sonic-orange/30 bg-orange-950/50 text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-6">
              {isDe ? "Der Sonic Motor" : "The Sonic Engine"}
            </div>
            
            <h2 className="fluid-section-title font-bold mb-6 tracking-tight">
              4 {isDe ? "Jahre" : "Years"}. <br />
              <span className="text-zinc-500">56 {isDe ? "Iterationen" : "Iterations"}.</span>
            </h2>
            
            <p className="fluid-body text-zinc-400 leading-relaxed mb-8">
              {isDe ? (
                <>
                  Wir fangen nicht bei Null an. Deine Website basiert auf einem Framework, das wir über vier Jahre lang 56 Mal optimiert haben. <strong className="text-white">Jede Zeile Code</strong> ist auf Geschwindigkeit, Sicherheit und SEO, sowie AI-Search getrimmt.
                </>
              ) : (
                <>
                  We don't start from zero. Your website is based on a framework we've optimized 56 times over four years. <strong className="text-white">Every line of code</strong> is tuned for speed, security, SEO, and AI-Search.
                </>
              )}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                    <feature.icon size={20} className="text-sonic-orange" />
                  </div>
                  <span className="fluid-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="reveal delay-200">
            <div className="relative">
              {/* Code block visualization */}
              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 font-mono fluid-sm overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  <span className="ml-2 text-zinc-500 fluid-xs">sonic-framework.ts</span>
                </div>
                <pre className="text-zinc-400 overflow-x-auto">
                  <code>
{`// Version 56 - Production Ready
const sonicConfig = {
  performance: {
    lighthouse: 100,
    fcp: "<1s",
    lcp: "<2.5s"
  },
  seo: {
    schema: true,
    sitemap: true,
    aiOptimized: true
  },
  security: {
    gdpr: true,
    ssl: "A+",
    headers: "strict"
  }
}`}
                  </code>
                </pre>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-sonic-orange text-white px-4 py-2 rounded-full font-bold fluid-sm shadow-lg">
                v56.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
