import React from 'react';

// Web Design Problem Component
export function WebDesignProblem() {
  const problems = [
    {
      icon: "🐌",
      title: "LANGSAM",
      description: "3-5 Sekunden Ladezeit",
      impact: "50% Besucher gehen"
    },
    {
      icon: "💸",
      title: "GEMIETET",
      description: "€200/Monat für immer",
      impact: "€12.000 über 5 Jahre"
    },
    {
      icon: "🔒",
      title: "GEFANGEN",
      description: "Agentur für jede Änderung nötig",
      impact: "Wochen Wartezeit"
    }
  ];

  return (
    <section className="service-problem py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <h2 className="section-headline text-center mb-12">Die meisten Business-Websites haben drei Probleme:</h2>
        <div className="problems-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="problem-card bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="problem-icon text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="description text-zinc-600 mb-4">{p.description}</p>
              <p className="impact text-red-600 font-bold">{p.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// MVP Problem Component
export function MVPProblem() {
  return (
    <section className="service-problem py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <h2 className="section-headline text-center mb-12">So läuft es normalerweise:</h2>
        
        <div className="timeline-fail flex flex-col md:flex-row justify-center gap-4 mb-12">
          <div className="timeline-step bg-white p-6 rounded-xl shadow-sm border border-zinc-200 flex-1 text-center">
            <span className="month block text-sm font-mono text-zinc-400 mb-2">Monat 1-3</span>
            <p className="font-medium">Entwickler einstellen</p>
          </div>
          <div className="timeline-step bg-white p-6 rounded-xl shadow-sm border border-zinc-200 flex-1 text-center">
            <span className="month block text-sm font-mono text-zinc-400 mb-2">Monat 4-9</span>
            <p className="font-medium">Features bauen</p>
          </div>
          <div className="timeline-step bg-white p-6 rounded-xl shadow-sm border border-zinc-200 flex-1 text-center">
            <span className="month block text-sm font-mono text-zinc-400 mb-2">Monat 10-12</span>
            <p className="font-medium">Testen & Fixes</p>
          </div>
          <div className="timeline-step fail bg-red-50 p-6 rounded-xl shadow-sm border border-red-200 flex-1 text-center">
            <span className="month block text-sm font-mono text-red-400 mb-2">Monat 13</span>
            <p className="font-bold text-red-600">Launch... niemand will es</p>
          </div>
        </div>
        
        <div className="fail-stats flex justify-center gap-12 mb-8">
          <div className="stat text-center">
            <span className="value block text-3xl font-bold text-red-600">€100.000+</span>
            <span className="label text-zinc-500">Ausgegeben</span>
          </div>
          <div className="stat text-center">
            <span className="value block text-3xl font-bold text-red-600">0</span>
            <span className="label text-zinc-500">User</span>
          </div>
        </div>
        
        <p className="cta-text text-center text-xl font-medium text-sonic-orange">Es gibt einen besseren Weg →</p>
      </div>
    </section>
  );
}

// UX Problem Component
export function UXProblem() {
  return (
    <section className="service-problem py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <h2 className="section-headline text-center mb-12">Lass mich raten:</h2>
        
        <div className="problem-scenario max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 mb-8">
          <p className="scenario-line mb-4 text-lg">
            Deine Website bekommt <strong className="text-zinc-900">10.000 Besucher</strong> pro Monat.
          </p>
          <p className="scenario-line mb-4 text-lg">
            Aber nur <strong className="text-red-600">50</strong> kaufen.
          </p>
          <p className="scenario-line text-lg">
            Du weißt nicht, warum die anderen <strong className="text-zinc-900">9.950</strong> gehen.
          </p>
        </div>
        
        <div className="problem-explanation max-w-2xl mx-auto text-center">
          <p className="mb-6 text-lg text-zinc-700">
            Dein Marketing-Team bringt Leute auf deine Website. 
            Aber etwas auf der Website lässt sie gehen.
          </p>
          <ul className="text-left bg-red-50 p-6 rounded-xl inline-block mx-auto mb-6 space-y-2">
            <li className="flex items-center gap-2"><span className="text-red-500">✗</span> Vielleicht ist der Checkout verwirrend.</li>
            <li className="flex items-center gap-2"><span className="text-red-500">✗</span> Vielleicht ist das Pricing nicht klar.</li>
            <li className="flex items-center gap-2"><span className="text-red-500">✗</span> Vielleicht erklärt die Homepage nicht, was du tust.</li>
          </ul>
          <p className="emphasis block text-xl font-bold text-red-600">Das kostet dich echtes Geld. Jeden Tag.</p>
        </div>
      </div>
    </section>
  );
}

