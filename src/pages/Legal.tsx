import React from 'react';

interface Props { lang: 'de' | 'en'; type: 'impressum' | 'privacy'; }

export const Legal: React.FC<Props> = ({ lang, type }) => {
  return (
    <div className="bg-paper min-h-screen pt-40 md:pt-48 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8 capitalize tracking-tight">
            {type === 'impressum' ? 'Impressum' : (lang === 'de' ? 'Datenschutz' : 'Privacy')}
        </h1>
        <div className="p-12 bg-white border border-zinc-200 rounded-[2rem] shadow-sm">
            <p className="text-sm text-zinc-600 leading-relaxed">
                [Hier folgt der gesetzlich vorgeschriebene Text für {type === 'impressum' ? 'das Impressum' : 'die Datenschutzerklärung'}.]
            </p>
        </div>
      </div>
    </div>
  );
};