import React from 'react';
import { Mail } from 'lucide-react';

interface IndividualRequestProps {
  lang: 'de' | 'en' | 'ja';
}

export const IndividualRequest: React.FC<IndividualRequestProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  const content = {
    title: isJa 
      ? "個別のご要望がございますか？" 
      : isDe 
      ? "Du hast eine individuelle Anfrage?" 
      : "You have an individual request?",
    text: isJa
      ? "hey@norddorf.com までご連絡ください。数時間以内に返信いたします。"
      : isDe
      ? "Schreib uns an hey@norddorf.com und wir melden uns innerhalb weniger Stunden."
      : "Write us at hey@norddorf.com and we will get back to you within a few hours."
  };

  return (
    <section className="bg-zinc-50 py-12 md:py-16 border-t border-zinc-200">
      <div className="container-responsive max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-zinc-200 mb-6 shadow-sm">
          <Mail className="text-sonic-orange" size={24} />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 tracking-tight">
          {content.title}
        </h2>
        
        <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {isDe ? (
            <>
              Schreib uns an <a href="mailto:hey@norddorf.com" className="text-zinc-900 font-semibold hover:text-sonic-orange transition-colors">hey@norddorf.com</a> und wir melden uns innerhalb weniger Stunden.
            </>
          ) : isJa ? (
            <>
              <a href="mailto:hey@norddorf.com" className="text-zinc-900 font-semibold hover:text-sonic-orange transition-colors">hey@norddorf.com</a> までご連絡ください。数時間以内に返信いたします。
            </>
          ) : (
            <>
              Write us at <a href="mailto:hey@norddorf.com" className="text-zinc-900 font-semibold hover:text-sonic-orange transition-colors">hey@norddorf.com</a> and we will get back to you within a few hours.
            </>
          )}
        </p>
      </div>
    </section>
  );
};
