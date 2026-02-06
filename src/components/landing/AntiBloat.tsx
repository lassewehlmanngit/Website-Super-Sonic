import React from 'react';
import { CheckCircle } from 'lucide-react';

interface AntiBloatProps {
  lang: 'de' | 'en' | 'ja';
}

export const AntiBloat: React.FC<AntiBloatProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  const checklistItems = isJa ? [
    "すべての機能に明確な目的があります",
    "使わない機能への月額料金は発生しません",
    "スピードとコンバージョンに最適化",
    "お客様は経営者です。趣味のウェブデザイナーではありません"
  ] : isDe ? [
    "Jedes Feature hat einen klaren Zweck",
    "Keine monatlichen Kosten für Funktionen die du nicht nutzt",
    "Optimiert für Geschwindigkeit und Konversionen",
    "Du bist CEO, kein Hobby-Webdesigner"
  ] : [
    "Every feature has a clear purpose",
    "No monthly fees for features you don't use",
    "Optimized for speed and conversions",
    "You're a CEO, not a hobby web designer"
  ];

  return (
    <section id="anti-bloat" className="fluid-section bg-white">
      <div className="container-responsive max-w-3xl mx-auto">
        {/* Clean headline */}
        <div className="text-center mb-12 reveal">
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight mb-6">
            {isJa ? "本当に必要なものだけを" : isDe ? "Wir bauen nur," : "We only build"}
            <br />
            <span className="text-sonic-orange">{isJa ? "構築します。" : isDe ? "was du brauchst." : "what you need."}</span>
          </h2>
          
          <p className="text-zinc-600 fluid-body leading-relaxed">
            {isJa 
              ? "更新されていないブログは不要です。無駄なアニメーションも不要です。お客様のウェブサイトを本質に絞り込みます：お問い合わせと信頼の獲得。"
              : isDe 
              ? "Keine toten Blogs. Keine unnötigen Animationen. Wir reduzieren deine Website auf das, was zählt: Anfragen und Vertrauen."
              : "No dead blogs. No unnecessary animations. We reduce your website to what matters: inquiries and trust."}
          </p>
        </div>

        {/* Simple checklist instead of cards */}
        <div className="bg-zinc-50 rounded-2xl p-8 md:p-10 reveal delay-100">
          <ul className="space-y-4">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-sonic-orange mt-0.5 flex-shrink-0" size={20} />
                <span className="text-zinc-700 fluid-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
