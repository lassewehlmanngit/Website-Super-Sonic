import React from 'react';
import { Quote } from 'lucide-react';

interface CEOLetterProps {
  lang: 'de' | 'en' | 'ja';
}

export const CEOLetter: React.FC<CEOLetterProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  return (
    <section id="ceo-letter" className="fluid-section bg-white">
      <div className="container-responsive max-w-4xl mx-auto">
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-sonic-orange/20 bg-zinc-200">
              <img 
                src="/images/founder-photo.jpg" 
                alt="Lasse"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Lasse&background=FF4D00&color=fff&size=200";
                }}
              />
            </div>
            <div>
              <h2 className="fluid-2xl font-bold text-zinc-900">
                {isJa ? "代表 Lasse より" : isDe ? "Ein Wort von Lasse" : "A Word from Lasse"}
              </h2>
              <p className="text-zinc-500 fluid-base">
                {isJa ? "Norddorfを始めた理由" : isDe ? "Warum wir Norddorf gestartet haben" : "Why we started Norddorf"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-50 rounded-2xl p-8 md:p-12 border border-zinc-100 reveal delay-100">
          <Quote className="text-sonic-orange/20 mb-6" size={48} />
          
          <div className="space-y-6 fluid-body text-zinc-700 leading-relaxed">
            <p>
              {isJa ? "はじめまして、Lasseと申します。" : isDe ? "Hey, ich bin Lasse." : "Hey, I'm Lasse."}
            </p>
            
            <p>
              {isJa ? (
                <>
                  ソフトウェア開発、マーケティング、ウェブデザインの分野で10年間、<strong className="text-zinc-900">VW、Allianz、Novartum</strong>などの企業様と仕事をしてきました。その中で、非効率なプロセスと、価値を提供せずに高額な請求書だけを送ってくる制作会社に疑問を感じるようになりました。
                </>
              ) : isDe ? (
                <>
                  Nach 10 Jahren Software-Entwicklung, Marketing, und Webseitendesign für Marken wie <strong className="text-zinc-900">VW, Allianz, Novartum</strong>, und co., hatte ich genug von zähen Prozessen und überteuerten Agentur-Rechnungen die einfach nur Geld wollen, ohne etwas zurückzugeben.
                </>
              ) : (
                <>
                  After 10 years of software development, marketing, and web design for brands like <strong className="text-zinc-900">VW, Allianz, Novartum</strong>, and more, I had enough of slow processes and overpriced agency bills that just want money without giving anything back.
                </>
              )}
            </p>

            <p>
              {isJa ? (
                <>
                  <strong className="text-sonic-orange">誠実なサービス</strong>を作りたいと思いました。
                </>
              ) : isDe ? (
                <>
                  Ich wollte etwas bauen, das <strong className="text-sonic-orange">ehrlich</strong> ist.
                </>
              ) : (
                <>
                  I wanted to build something that is <strong className="text-sonic-orange">honest</strong>.
                </>
              )}
            </p>

            <p>
              {isJa ? (
                <>
                  Norddorfは、中小企業の皆様に<strong className="text-zinc-900">真のデジタル主権</strong>をお届けするために設立しました。中小企業がデジタルで発見され、モダンになる時代が来ています。
                </>
              ) : isDe ? (
                <>
                  Wir haben Norddorf gegründet, um dem Mittelstand <strong className="text-zinc-900">echte digitale Souveränität</strong> zu geben. Es wird Zeit, dass der Mittelstand digital auffindbar und modern wird.
                </>
              ) : (
                <>
                  We founded Norddorf to give SMBs <strong className="text-zinc-900">real digital sovereignty</strong>. It's time for small and medium businesses to become digitally discoverable and modern.
                </>
              )}
            </p>

            <p className="text-zinc-900 font-medium border-l-4 border-sonic-orange pl-6">
              {isJa 
                ? "お客様のものとなる、高速で、見栄えの良いウェブサイトをお届けします。業界用語の羅列ではなく、実際の成果を。"
                : isDe 
                ? "Wir liefern dir eine Website, die dir gehört, die schnell ist und verdammt gut aussieht. Ohne Bullshit-Bingo."
                : "We deliver a website that belongs to you, that's fast and looks damn good. No buzzword bingo."}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-200">
            <div className="flex items-center gap-4">
              <div className="font-bold text-zinc-900 fluid-base">Lasse</div>
              <div className="text-zinc-400">|</div>
              <div className="text-zinc-500 fluid-sm">{isJa ? "代表、Norddorf" : "Founder, Norddorf"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
