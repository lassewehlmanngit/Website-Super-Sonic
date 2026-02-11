import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LandingHeroProps {
  lang: 'de' | 'en' | 'ja';
  onScrollToForm: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({ lang, onScrollToForm }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  return (
    <section className="min-h-[100dvh] bg-void pt-32 pb-20 flex flex-col relative overflow-hidden">
      {/* Single subtle gradient - clean, no noise */}
      <div className="absolute inset-0 bg-gradient-to-br from-void via-void to-zinc-900 pointer-events-none" />
      
      <div className="container-responsive flex-grow flex flex-col justify-center relative z-10">
        {/* Centered layout - cleaner, more confident */}
        <div className="max-w-4xl">
          {/* Eyebrow - subtle */}
          <p className="text-sonic-orange font-mono fluid-sm tracking-wide mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {isJa ? "中小企業のためのウェブサイト制作" : isDe ? "Webseiten für den Mittelstand" : "Websites for SMBs"}
          </p>

          {/* Headline - fluid hero size */}
          <h1 className="text-white fluid-hero font-bold tracking-tight mb-8">
            {isJa ? (
              <>
                成果を出すウェブサイトが{' '}
                <span className="text-zinc-300">必要です。</span>
                <br />
                <span className="text-sonic-orange">複雑な見積もりは、もう必要ありません。</span>
              </>
            ) : isDe ? (
              <>
                Du brauchst eine Website,{' '}
                <span className="text-zinc-300">die funktioniert.</span>
                <br />
                <span className="text-sonic-orange">Keinen Raketenplan.</span>
              </>
            ) : (
              <>
                You need a website{' '}
                <span className="text-zinc-300">that works.</span>
                <br />
                <span className="text-sonic-orange">Not a rocket plan.</span>
              </>
            )}
          </h1>

          {/* Subtext - fluid body */}
          <p className="text-zinc-300 fluid-body leading-relaxed max-w-2xl mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {isJa 
              ? "最短14日。固定価格。100%お客様のもの。御社に本当に必要な機能だけを備えたウェブサイトをお届けします。"
              : isDe 
              ? "Maximal 14 Tage. Festpreis. 100% dein Eigentum. Wir bauen Webseiten die genau das machen, was du brauchst."
              : "Max 14 days. Fixed price. 100% yours. We build websites that do exactly what you need."}
          </p>

          {/* CTA - fluid base text */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={onScrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-sonic-orange text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E64500] transition-colors group fluid-base"
            >
              {isJa ? "無料デザイン案を72時間以内に" : isDe ? "Gratisentwurf in 72h" : "Free design in 72h"}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onScrollToForm}
              className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-300 font-semibold px-8 py-4 rounded-full hover:border-zinc-500 hover:text-white transition-colors fluid-base"
            >
              {isJa ? "92万円 固定価格" : isDe ? "5.600 € Festpreis" : "€5,600 Fixed Price"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
