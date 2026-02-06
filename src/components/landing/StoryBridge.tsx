import React from 'react';

interface StoryBridgeProps {
  lang: 'de' | 'en' | 'ja';
}

export const StoryBridge: React.FC<StoryBridgeProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  return (
    <section className="fluid-section-sm bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 to-transparent pointer-events-none" />
      
      <div className="container-responsive max-w-3xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className="text-center mb-8 reveal">
          <span className="inline-block px-4 py-2 bg-zinc-100 rounded-full text-zinc-500 font-mono fluid-xs uppercase tracking-widest">
            {isJa ? "正直に申し上げます" : isDe ? "Hand aufs Herz" : "Let's be honest"}
          </span>
        </div>

        {/* Story content - broken into beats */}
        <div className="text-center space-y-8 reveal delay-100">
          {/* Beat 1: The Problem with Builders */}
          <p className="fluid-xl text-zinc-600 leading-relaxed">
            {isJa ? (
              <>
                多くのウェブサイト作成ツールは、{' '}
                <span className="text-zinc-900 font-semibold">5年以上の経験を持つウェブデザイナー</span>を前提に設計されています。
              </>
            ) : isDe ? (
              <>
                Viele Baukasten-Tools setzen voraus, dass du{' '}
                <span className="text-zinc-900 font-semibold">seit fünf Jahren Webdesigner bist</span>.
              </>
            ) : (
              <>
                Many website builders assume you've{' '}
                <span className="text-zinc-900 font-semibold">been a web designer for five years</span>.
              </>
            )}
          </p>

          {/* Beat 2: The Problem with Agencies */}
          <p className="fluid-xl text-zinc-600 leading-relaxed">
            {isJa ? (
              <>
                制作会社はどうでしょうか？{' '}
                <span className="text-zinc-900 font-semibold">不要なオプションを高額で販売</span>し、
                毎月の契約に縛り付けようとします。
              </>
            ) : isDe ? (
              <>
                Und Agenturen? Die verkaufen dir{' '}
                <span className="text-zinc-900 font-semibold">unnötige Optionen zu unfairen Preisen</span>, 
                nur um dich in teure Abos zu zwingen.
              </>
            ) : (
              <>
                And agencies? They sell you{' '}
                <span className="text-zinc-900 font-semibold">unnecessary options at unfair prices</span>, 
                just to lock you into expensive subscriptions.
              </>
            )}
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="w-12 h-px bg-zinc-200" />
            <span className="text-sonic-orange font-bold fluid-lg">
              {isJa ? "私たちは違います。" : isDe ? "Wir machen es anders." : "We do it differently."}
            </span>
            <div className="w-12 h-px bg-zinc-200" />
          </div>

          {/* Beat 3: The Promise */}
          <p className="fluid-xl text-zinc-700 leading-relaxed">
            {isJa ? (
              <>
                御社に本当に必要な機能だけを備えたウェブサイト。{' '}
                <span className="text-sonic-orange font-semibold">最短14日で納品</span>、{' '}
                <span className="text-zinc-900 font-semibold">100%所有権</span>、{' '}
                <span className="text-zinc-900 font-semibold">固定価格</span>でご提供します。
              </>
            ) : isDe ? (
              <>
                Webseiten die genau das machen, was du brauchst.{' '}
                <span className="text-sonic-orange font-semibold">Maximal 14 Tage Lieferzeit</span>,{' '}
                <span className="text-zinc-900 font-semibold">100% Eigentum</span> und{' '}
                <span className="text-zinc-900 font-semibold">ein fester Preis</span>.
              </>
            ) : (
              <>
                Websites that do exactly what you need.{' '}
                <span className="text-sonic-orange font-semibold">Max 14 days delivery</span>,{' '}
                <span className="text-zinc-900 font-semibold">100% ownership</span> and{' '}
                <span className="text-zinc-900 font-semibold">a fixed price</span>.
              </>
            )}
          </p>

          {/* Beat 4: The Closing Statement - emphasized */}
          <div className="pt-4 reveal delay-200">
            <p className="fluid-2xl font-bold text-zinc-900 tracking-tight">
              {isJa 
                ? "中小企業には、もっと良い選択肢があるべきです。"
                : isDe 
                ? "Weil der Mittelstand Besseres verdient."
                : "Because SMBs deserve better."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
