import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface FinalCTAProps {
  lang: 'de' | 'en';
  onScrollToForm: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ lang, onScrollToForm }) => {
  const isDe = lang === 'de';

  const handleBookCall = () => {
    window.open('https://calendar.google.com/', '_blank');
  };

  return (
    <section id="final-cta" className="py-20 md:py-32 bg-void text-white rounded-t-[2rem] md:rounded-t-[3rem] -mt-4 md:-mt-8 relative z-10">
      <div className="container-responsive max-w-4xl mx-auto text-center">
        <div className="reveal">
          {/* Scarcity badge */}
          <div className="inline-flex items-center gap-2 bg-sonic-orange/20 border border-sonic-orange/30 px-4 py-2 rounded-full mb-8">
            <Clock className="text-sonic-orange" size={18} />
            <span className="text-sonic-orange font-bold text-sm">
              {isDe ? "Nur 3 Projekte pro Woche" : "Only 3 projects per week"}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter">
            {isDe ? (
              <>
                Wir nehmen nur <br />
                <span className="text-sonic-orange">3 Projekte</span> pro Woche an.
              </>
            ) : (
              <>
                We only take <br />
                <span className="text-sonic-orange">3 projects</span> per week.
              </>
            )}
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            {isDe 
              ? "Damit wir die 14 Tage halten können, ist unsere Kapazität begrenzt."
              : "To keep our 14-day promise, our capacity is limited."}
          </p>

          {/* Testimonial request note */}
          <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700 mb-12 max-w-2xl mx-auto text-left">
            <p className="text-zinc-300 text-base leading-relaxed">
              {isDe ? (
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
              className="inline-flex items-center justify-center font-bold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full tracking-tight bg-white text-black hover:bg-sonic-orange hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,77,0,0.3)] hover:-translate-y-1 text-base px-8 py-5 group"
            >
              {isDe 
                ? "Hol dir deine gratis Webseite"
                : "Get your free website"}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={handleBookCall}
              className="inline-flex items-center justify-center font-bold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full tracking-tight border border-white/20 text-white hover:bg-white/10 text-base px-8 py-5"
            >
              <Calendar className="mr-2" size={20} />
              {isDe 
                ? "15-Min Call buchen"
                : "Book 15-min call"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
