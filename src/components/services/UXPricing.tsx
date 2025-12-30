import React from 'react';
import { Link } from 'react-router-dom';

export function UXPricing() {
  const packages = [
    {
      name: "Quick Audit",
      price: "2.500",
      duration: "1 Woche",
      includes: [
        "Problem-Report",
        "Empfehlungen",
        "Prioritäten-Liste"
      ],
      notIncludes: [
        "Keine Implementierung"
      ]
    },
    {
      name: "Full Rescue",
      price: "8.500",
      duration: "4 Wochen",
      includes: [
        "2 Wochen Analyse",
        "Problem-Report",
        "Design-Lösungen",
        "Implementierung inklusive",
        "4 Wochen Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "Nach Bedarf",
      includes: [
        "Mehrere Sites/Pages",
        "A/B Testing",
        "Ongoing Optimization",
        "Dediziertes Team"
      ]
    }
  ];

  return (
    <section className="pricing-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-headline text-center mb-12">Was kostet UX Rescue?</h2>
        
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <div key={i} className={`pricing-card relative flex flex-col p-8 rounded-2xl border ${pkg.popular ? 'border-sonic-orange shadow-xl scale-105 z-10' : 'border-zinc-200 shadow-sm'} bg-white`}>
              {pkg.popular && (
                  <div className="badge absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sonic-orange text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                      Empfohlen
                  </div>
              )}
              
              <h3 className="text-xl font-bold mb-2 text-center">{pkg.name}</h3>
              <div className="price text-4xl font-bold text-center mb-2">
                 {pkg.price === "Custom" ? <span className="text-3xl">{pkg.price}</span> : <>€{pkg.price}</>}
              </div>
              <div className="duration text-center text-zinc-500 text-sm mb-8">{pkg.duration}</div>
              
              <div className="includes flex-grow mb-8">
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-zinc-400">Enthalten:</h4>
                <ul className="space-y-3">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-zinc-700">
                        <span className="text-green-500 font-bold mt-1">✓</span>
                        <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {pkg.notIncludes && (
                <div className="not-includes mb-8 pt-4 border-t border-zinc-100">
                  {pkg.notIncludes.map((item, j) => (
                    <p key={j} className="note text-xs text-zinc-400 italic">* {item}</p>
                  ))}
                </div>
              )}
              
              <Link to="/start" className={`cta-button block w-full text-center py-3 rounded-lg font-bold transition-colors ${pkg.popular ? 'bg-sonic-orange text-white hover:bg-orange-600' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}>
                Wählen
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

