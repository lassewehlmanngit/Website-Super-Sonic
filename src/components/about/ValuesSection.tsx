import React from 'react';

export function ValuesSection() {
  const values = [
    {
      title: "Geschwindigkeit ohne Abstriche",
      description: "KI hilft, aber ich überprüfe jede Zeile Code."
    },
    {
      title: "Eigentum statt Miete",
      description: "Du solltest besitzen, wofür du zahlst."
    },
    {
      title: "Ehrlichkeit statt Hype",
      description: "Ich sage dir, wenn WordPress tatsächlich besser für dich ist."
    }
  ];

  return (
    <section className="values-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-headline text-center mb-12">Wofür ich stehe</h2>
        <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <div key={i} className="value-card p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:shadow-lg transition-all text-center">
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

