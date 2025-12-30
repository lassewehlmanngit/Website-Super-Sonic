import React from 'react';
import { Link } from 'react-router-dom';

export function MVPPricing() {
  const packages = [
    {
      name: "Starter MVP",
      price: "12.000",
      features: [
        "1 Kern-Feature",
        "2 Wochen Lieferung",
        "100% Code-Eigentum",
        "Basis-Design",
        "Mobile-optimiert"
      ]
    },
    {
      name: "Standard MVP",
      price: "25.000",
      features: [
        "3 Kern-Features",
        "4 Wochen Lieferung",
        "100% Code-Eigentum",
        "User Testing inklusive",
        "Premium Design"
      ],
      popular: true
    },
    {
      name: "Custom MVP",
      price: "Auf Anfrage",
      features: [
        "Unbegrenzte Features",
        "Timeline nach Bedarf",
        "100% Code-Eigentum",
        "Dedizierter Support",
        "Priority Development"
      ]
    }
  ];

  return (
    <section className="pricing-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-headline text-center mb-12">Was kostet ein MVP?</h2>
        
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <div key={i} className={`pricing-card relative flex flex-col p-8 rounded-2xl border ${pkg.popular ? 'border-sonic-orange shadow-xl scale-105 z-10' : 'border-zinc-200 shadow-sm'} bg-white`}>
              {pkg.popular && (
                  <div className="badge absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sonic-orange text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                      Beliebt
                  </div>
              )}
              
              <h3 className="text-xl font-bold mb-4 text-center">{pkg.name}</h3>
              <div className="price text-4xl font-bold text-center mb-8">
                  {pkg.price === "Auf Anfrage" ? <span className="text-3xl">{pkg.price}</span> : <>€{pkg.price}</>}
              </div>
              
              <ul className="features space-y-4 mb-8 flex-grow">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-zinc-600">
                      <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              
              <Link to="/start" className={`cta-button block w-full text-center py-3 rounded-lg font-bold transition-colors ${pkg.popular ? 'bg-sonic-orange text-white hover:bg-orange-600' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}>
                Angebot erhalten
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

