import React from 'react';
import { CheckCircle, Calendar, Mail } from 'lucide-react';

interface FormSuccessProps {
  lang: 'de' | 'en';
}

export const FormSuccess: React.FC<FormSuccessProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const handleBookCall = () => {
    window.open('https://calendar.google.com/', '_blank');
  };

  return (
    <div className="text-center py-12">
      <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-orange-100">
        <CheckCircle className="text-sonic-orange" size={48} />
      </div>

      <h3 className="fluid-3xl font-bold text-zinc-900 mb-4">
        {isDe ? "Läuft bei dir!" : "You're all set!"}
      </h3>

      <p className="fluid-lg text-zinc-600 mb-2">
        {isDe ? "Deine Infos sind gelandet." : "Your info has landed."}
      </p>

      <div className="max-w-xl mx-auto bg-zinc-50 rounded-2xl p-6 md:p-8 mt-8 text-left">
        <p className="text-zinc-700 leading-relaxed mb-6 fluid-base">
          {isDe ? (
            <>
              Ich setze mich jetzt direkt an deinen Entwurf. Innerhalb der nächsten <strong className="text-zinc-900">48 bis 72 Stunden</strong> kriegst du von mir eine E-Mail mit einem Link zu deinem persönlichen Blueprint und einem Video, in dem ich dir erkläre, warum wir das Design so gebaut haben.
            </>
          ) : (
            <>
              I'm getting started on your design right away. Within the next <strong className="text-zinc-900">48 to 72 hours</strong> you'll receive an email from me with a link to your personal blueprint and a video explaining why we built the design this way.
            </>
          )}
        </p>

        <div className="flex items-center gap-3 text-zinc-600 mb-6">
          <Mail className="text-sonic-orange" size={20} />
          <span className="fluid-sm">
            {isDe 
              ? "Check deine Inbox (und Spam-Ordner)"
              : "Check your inbox (and spam folder)"}
          </span>
        </div>

        <div className="border-t border-zinc-200 pt-6">
          <p className="fluid-sm text-zinc-500 mb-4">
            {isDe 
              ? "Wenn du zwischendurch brennende Fragen hast:"
              : "If you have burning questions in the meantime:"}
          </p>
          <button
            onClick={handleBookCall}
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full font-bold fluid-sm hover:bg-zinc-800 transition-colors"
          >
            <Calendar size={18} />
            {isDe ? "15-Minuten-Call buchen" : "Book 15-minute call"}
          </button>
        </div>
      </div>

      <p className="mt-8 text-zinc-500 fluid-base">
        {isDe ? "Bis gleich!" : "Talk soon!"} <br />
        <strong className="text-zinc-900">Lasse</strong>
      </p>
    </div>
  );
};
