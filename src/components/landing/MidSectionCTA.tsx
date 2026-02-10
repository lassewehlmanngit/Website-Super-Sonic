import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MidSectionCTAProps {
  lang: 'de' | 'en' | 'ja';
  onScrollToForm: () => void;
}

export const MidSectionCTA: React.FC<MidSectionCTAProps> = ({ lang, onScrollToForm }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  return (
    <section className="fluid-section bg-zinc-900 text-center">
      <div className="container-responsive max-w-3xl">
        <h3 className="fluid-section-title font-bold text-white mb-6 reveal">
          {isJa ? "もう比較は十分ですか？" : isDe ? "Genug verglichen?" : "Seen enough?"}
        </h3>
        <p className="text-zinc-400 mb-10 fluid-lg leading-relaxed reveal delay-100">
          {isJa 
            ? "ウェブサイトビルダーは時間を奪い、従来の制作会社はお金を奪います。私たちは、あなたがデザインを気に入るまで1円もいただきません。"
            : isDe 
            ? "Du weißt jetzt: Der Baukasten kostet Zeit. Die Agentur kostet Geld. Wir kosten dich nichts – bis du das Design zu 100% liebst."
            : "You know now: The builder costs time. The agency costs money. We cost nothing – until you love the design 100%."}
        </p>
        <div className="reveal delay-200">
          <button 
            onClick={onScrollToForm} 
            className="inline-flex items-center justify-center gap-2 bg-sonic-orange text-white px-8 py-4 rounded-full font-bold hover:bg-[#E64500] transition-colors group fluid-base"
          >
            {isJa ? "無料デザイン案をリクエスト" : isDe ? "Gratis Design anfordern" : "Get Free Design"}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
