import React from 'react';
import { Quote } from 'lucide-react';

interface CEOLetterProps {
  lang: 'de' | 'en';
}

export const CEOLetter: React.FC<CEOLetterProps> = ({ lang }) => {
  const isDe = lang === 'de';

  return (
    <section id="ceo-letter" className="py-20 md:py-32 bg-paper">
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
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                {isDe ? "Ein Wort von Lasse" : "A Word from Lasse"}
              </h2>
              <p className="text-zinc-500">
                {isDe ? "Warum wir Super Sonic gestartet haben" : "Why we started Super Sonic"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 reveal delay-100">
          <Quote className="text-sonic-orange/20 mb-6" size={48} />
          
          <div className="space-y-6 text-lg md:text-xl text-zinc-700 leading-relaxed">
            <p>
              {isDe ? "Hey, ich bin Lasse." : "Hey, I'm Lasse."}
            </p>
            
            <p>
              {isDe ? (
                <>
                  Nach 10 Jahren Software-Entwicklung, Marketing, und Webseitendesign für Marken wie <strong className="text-black">VW, Allianz, Novartum</strong>, und co., hatte ich genug von zähen Prozessen und überteuerten Agentur-Rechnungen die einfach nur Geld wollen, ohne etwas zurückzugeben.
                </>
              ) : (
                <>
                  After 10 years of software development, marketing, and web design for brands like <strong className="text-black">VW, Allianz, Novartum</strong>, and more, I had enough of slow processes and overpriced agency bills that just want money without giving anything back.
                </>
              )}
            </p>

            <p>
              {isDe ? (
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
              {isDe ? (
                <>
                  Wir haben Super Sonic gegründet, um dem Mittelstand <strong className="text-black">echte digitale Souveränität</strong> zu geben. Es wird Zeit, dass der Mittelstand digital auffindbar und modern wird.
                </>
              ) : (
                <>
                  We founded Super Sonic to give SMBs <strong className="text-black">real digital sovereignty</strong>. It's time for small and medium businesses to become digitally discoverable and modern.
                </>
              )}
            </p>

            <p className="text-black font-medium border-l-4 border-sonic-orange pl-6">
              {isDe 
                ? "Wir liefern dir eine Website, die dir gehört, die schnell ist und verdammt gut aussieht. Ohne Bullshit-Bingo."
                : "We deliver a website that belongs to you, that's fast and looks damn good. No buzzword bingo."}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-100">
            <div className="flex items-center gap-4">
              <div className="font-bold text-black">Lasse</div>
              <div className="text-zinc-400">|</div>
              <div className="text-zinc-500 text-sm">Founder, Super Sonic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
