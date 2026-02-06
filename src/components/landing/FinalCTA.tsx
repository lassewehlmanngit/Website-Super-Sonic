import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface FinalCTAProps {
  lang: 'de' | 'en' | 'ja';
  onScrollToForm: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ lang, onScrollToForm }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  const handleBookCall = () => {
    window.open('https://calendar.google.com/', '_blank');
  };

  return (
    <section id="final-cta" className="fluid-section bg-void text-white">
      <div className="container-responsive max-w-4xl mx-auto text-center">
        <div className="reveal">
          {/* Scarcity badge */}
          <div className="inline-flex items-center gap-2 bg-sonic-orange/20 border border-sonic-orange/30 px-4 py-2 rounded-full mb-8">
            <Clock className="text-sonic-orange" size={18} />
            <span className="text-sonic-orange font-bold fluid-sm">
              {isJa ? "週3プロジェクト限定" : isDe ? "Nur 3 Projekte pro Woche" : "Only 3 projects per week"}
            </span>
          </div>

          <h2 className="fluid-section-title font-bold mb-6 tracking-tight">
            {isJa ? (
              <>
                週に{' '}
                <span className="text-sonic-orange">3プロジェクト</span>のみ受け付けています。
              </>
            ) : isDe ? (
              <>
                Wir nehmen nur{' '}
                <span className="text-sonic-orange">3 Projekte</span> pro Woche an.
              </>
            ) : (
              <>
                We only take{' '}
                <span className="text-sonic-orange">3 projects</span> per week.
              </>
            )}
          </h2>

          <p className="fluid-body text-zinc-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            {isJa 
              ? "14日間の納期を守るため、キャパシティを制限しています。"
              : isDe 
              ? "Damit wir die 14 Tage halten können, ist unsere Kapazität begrenzt."
              : "To keep our 14-day promise, our capacity is limited."}
          </p>

          {/* Testimonial request note */}
          <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700 mb-12 max-w-2xl mx-auto text-left">
            <p className="text-zinc-300 fluid-base leading-relaxed">
              {isJa ? (
                <>
                  <strong className="text-white">もう一つお願いがあります：</strong>このような素晴らしいウェブサイトを提供する代わりに、公開後に正直なビデオ推薦をいただけないでしょうか。より多くの中小企業の方々に、新しいウェブサイトが大変な作業である必要はないことを知っていただくために。
                </>
              ) : isDe ? (
                <>
                  <strong className="text-white">Eine Sache noch:</strong> Dafür, dass du solch eine hammer Webseite bekommst, wollen wir dich fragen, ob wir dafür dein ehrliches Video-Testimonial nach dem Launch bekommen. Damit mehr Mittelständler sehen können, dass eine neue Webseite kein Pain-in-the-Ass sein muss.
                </>
              ) : (
                <>
                  <strong className="text-white">One more thing:</strong> In exchange for getting such an awesome website, we'd like to ask if we can get your honest video testimonial after launch. So more SMBs can see that a new website doesn't have to be a pain.
                </>
              )}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onScrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-sonic-orange text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E64500] transition-colors group fluid-base"
            >
              {isJa 
                ? "無料ウェブサイトを入手"
                : isDe 
                ? "Hol dir deine gratis Webseite"
                : "Get your free website"}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>

            <button
              onClick={handleBookCall}
              className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-300 font-semibold px-8 py-4 rounded-full hover:border-zinc-500 hover:text-white transition-colors fluid-base"
            >
              <Calendar size={18} />
              {isJa 
                ? "15分の通話を予約"
                : isDe 
                ? "15-Min Call buchen"
                : "Book 15-min call"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
