import React from 'react';
import { Sparkles, Search, Accessibility, Mail } from 'lucide-react';

interface FutureProofProps {
  lang: 'de' | 'en' | 'ja';
}

export const FutureProof: React.FC<FutureProofProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  const techFeatures = [
    "Schema Markup",
    "Lazy-Loading",
    "Aria-Labels",
    "Semantic HTML",
    "Core Web Vitals"
  ];

  return (
    <section id="future-proof" className="fluid-section bg-white">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="reveal">
            <div className="inline-block px-4 py-1 rounded-full border border-sonic-orange/30 bg-orange-50 text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-6">
              {isJa ? "2026年対応" : isDe ? "Bereit für 2026" : "Ready for 2026"}
            </div>
            
            <h2 className="fluid-section-title font-bold text-zinc-900 mb-6 tracking-tight">
              {isJa ? (
                <>
                  GoogleとAIが{' '}
                  <span className="text-zinc-400">ウェブサイトを読む時代。</span>
                </>
              ) : isDe ? (
                <>
                  Wenn Google und KI{' '}
                  <span className="text-zinc-400">deine Website liest.</span>
                </>
              ) : (
                <>
                  When Google and AI{' '}
                  <span className="text-zinc-400">read your website.</span>
                </>
              )}
            </h2>
            
            <p className="fluid-body text-zinc-600 leading-relaxed mb-8">
              {isJa ? (
                <>
                  Googleだけでなく、<strong className="text-zinc-900">ChatGPTなどのAIシステム</strong>もお客様の情報を見つけられるようにコードを最適化します。さらに：新しいアクセシビリティ法に準拠した<strong className="text-sonic-orange">100%バリアフリー</strong>で構築します。
                </>
              ) : isDe ? (
                <>
                  Wir optimieren deinen Code so, dass nicht nur Google dich liebt, sondern auch <strong className="text-zinc-900">KI-Systeme wie ChatGPT</strong> deine Infos finden. Außerdem: Wir bauen <strong className="text-sonic-orange">100% barrierefrei</strong> nach dem neuen BFSG-Gesetz.
                </>
              ) : (
                <>
                  We optimize your code so that not only Google loves you, but also <strong className="text-zinc-900">AI systems like ChatGPT</strong> find your info. Plus: We build <strong className="text-sonic-orange">100% accessible</strong> according to the new BFSG law.
                </>
              )}
            </p>

            {/* Feature badges - neutral colors with icons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-zinc-100 text-zinc-700 px-4 py-2 rounded-full fluid-sm font-medium">
                <Search size={16} />
                SEO
              </div>
              <div className="flex items-center gap-2 bg-zinc-100 text-zinc-700 px-4 py-2 rounded-full fluid-sm font-medium">
                <Sparkles size={16} />
                AI-Ready
              </div>
              <div className="flex items-center gap-2 bg-zinc-100 text-zinc-700 px-4 py-2 rounded-full fluid-sm font-medium">
                <Accessibility size={16} />
                {isJa ? "アクセシビリティ" : "BFSG"}
              </div>
            </div>
          </div>

          {/* Right: Tech features */}
          <div className="reveal delay-100">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
              <h3 className="fluid-xl font-bold text-zinc-900 mb-6">
                {isJa 
                  ? "Schema、Lazy-Loading、Aria-Labelをご存知ですか？"
                  : isDe 
                  ? "Schon einmal etwas von Schema, Lazy-Loading und Aria-Label gehört?"
                  : "Ever heard of Schema, Lazy-Loading and Aria-Label?"}
              </h3>
              
              <p className="text-zinc-600 mb-6 fluid-base">
                {isJa 
                  ? "知らなくても大丈夫です。これらは私たちが実装します。モダンなウェブサイトは、テキスト、色、フォント以上のもので構成されています。"
                  : isDe 
                  ? "Brauchst du auch nicht. Denn diese implementieren wir für dich. Eine moderne Webseite besteht aus mehr als Text, Farbe, und Schrift."
                  : "You don't need to. We implement these for you. A modern website consists of more than text, color, and font."}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {techFeatures.map((feature, i) => (
                  <span key={i} className="bg-zinc-200 text-zinc-700 px-3 py-1 rounded-lg fluid-sm font-mono">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="bg-white rounded-xl p-4 border border-zinc-200">
                <p className="fluid-sm text-zinc-600 mb-3">
                  {isJa 
                    ? "使用または統合できる技術についてご質問がありますか？"
                    : isDe 
                    ? "Fragen zu Technologien die wir verwenden oder integrieren können?"
                    : "Questions about technologies we use or can integrate?"}
                </p>
                <a 
                  href="mailto:hello@supersonic.design" 
                  className="inline-flex items-center gap-2 text-sonic-orange font-bold fluid-sm hover:underline"
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
