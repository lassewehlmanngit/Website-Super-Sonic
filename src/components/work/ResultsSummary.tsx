import React from 'react';

export function ResultsSummary() {
  const stats = [
    { value: "50+", label: "Projekte geliefert" },
    { value: "€12M+", label: "Umsatz generiert" },
    { value: "8.5/10", label: "Durchschnittliche Bewertung" },
    { value: "72h", label: "Durchschnitt: Erster Entwurf" }
  ];

  return (
    <section className="results-summary py-20 border-t border-zinc-100 mt-20">
      <div className="container mx-auto px-4">
        <h2 className="section-headline text-center mb-12">Nach Zahlen:</h2>
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="stat-item text-center">
              <div className="stat-value text-4xl md:text-5xl font-bold text-black mb-2">{s.value}</div>
              <div className="stat-label text-zinc-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

