import React from 'react';

interface BuilderTrapProps {
  lang: 'de' | 'en' | 'ja';
}

export const BuilderTrap: React.FC<BuilderTrapProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  return (
    <section id="problem" className="fluid-section bg-paper">
      <div className="container-responsive max-w-3xl mx-auto">
        {/* Clean text-focused design */}
        <div className="text-center mb-10 reveal">
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight">
            {isJa ? "ウェブサイトビルダーの落とし穴" : isDe ? "Die Website-Baukasten-Falle" : "The Website Builder Trap"}
          </h2>
        </div>

        <div className="space-y-6 text-zinc-600 fluid-body leading-relaxed reveal delay-100">
          <p>
            {isJa ? (
              <>
                <strong className="text-zinc-900">正直に申し上げます：</strong>ウェブサイトビルダーは「自由」を約束しますが、実際には「作業」を与えます。夜遅くまでパソコンに向かい、ピクセルを調整し続けても、結局スマートフォンでは見栄えが悪い——そんな経験はありませんか？
              </>
            ) : isDe ? (
              <>
                <strong className="text-zinc-900">Hand aufs Herz:</strong> Ein Baukasten verspricht dir Freiheit, aber er schenkt dir Arbeit. Du sitzt abends vor dem Rechner, schiebst Pixel hin und her und am Ende sieht es auf dem Handy trotzdem nicht gut aus.
              </>
            ) : (
              <>
                <strong className="text-zinc-900">Let's be honest:</strong> A website builder promises freedom, but it gives you work. You sit at your computer in the evening, pushing pixels around, and in the end it still doesn't look good on mobile.
              </>
            )}
          </p>
          
          <p>
            {isJa ? (
              <>
                私たちはDIYキットをお届けするのではありません。<strong className="text-sonic-orange">完成された、洗練された成果物</strong>をお届けします。混乱を取り除き、お客様が本業に集中できるようにいたします。
              </>
            ) : isDe ? (
              <>
                Wir liefern dir kein Bastel-Set. Wir liefern dir das <strong className="text-sonic-orange">fertige, polierte Ergebnis</strong>. Wir nehmen das Chaos aus der Gleichung, damit du dich um dein Business kümmern kannst.
              </>
            ) : (
              <>
                We don't deliver a DIY kit. We deliver the <strong className="text-sonic-orange">finished, polished result</strong>. We take the chaos out of the equation so you can focus on your business.
              </>
            )}
          </p>

          <div className="mt-10 p-6 md:p-8 bg-white rounded-2xl border border-zinc-200 text-center">
            <p className="text-zinc-900 font-bold fluid-xl">
              {isJa 
                ? "お客様は経営者です。趣味のウェブデザイナーではありません。"
                : isDe 
                ? "Du bist CEO, kein Hobby-Webdesigner."
                : "You're a CEO, not a hobby web designer."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
