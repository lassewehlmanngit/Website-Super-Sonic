import React from 'react';

interface CostData {
  rental: {
    month1: number;
    month6: number;
    year1: number;
    year5: number;
  };
  ownership: {
    oneTime: number;
    hosting5Years: number;
  };
}

export function ProblemSection() {
  const costs: CostData = {
    rental: {
      month1: 200,
      month6: 1200,
      year1: 2400,
      year5: 12000
    },
    ownership: {
      oneTime: 5800,
      hosting5Years: 1140
    }
  };

  const savings = costs.rental.year5 - (costs.ownership.oneTime + costs.ownership.hosting5Years);

  return (
    <section className="problem-section bg-zinc-50 py-20 px-4 md:px-12">
      <div className="container mx-auto">
        <h2 className="section-headline text-center mb-12">Das €2.400/Jahr Problem</h2>
        
        <div className="cost-comparison grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Left Column: Rental */}
          <div className="comparison-column rental bg-white p-8 rounded-2xl shadow-sm border border-red-100">
            <h3 className="text-xl font-bold mb-6 text-red-600">WordPress / Webflow</h3>
            <div className="cost-breakdown space-y-4">
              <div className="cost-row flex justify-between">
                <span>Monat 1:</span>
                <span className="amount font-mono">€{costs.rental.month1}</span>
              </div>
              <div className="cost-row flex justify-between">
                <span>Monat 6:</span>
                <span className="amount font-mono">€{costs.rental.month6.toLocaleString()}</span>
              </div>
              <div className="cost-row flex justify-between">
                <span>Jahr 1:</span>
                <span className="amount font-mono">€{costs.rental.year1.toLocaleString()}</span>
              </div>
              <div className="cost-row total flex justify-between pt-4 border-t border-red-100 font-bold text-red-600">
                <span>5 Jahre:</span>
                <span className="amount font-mono">€{costs.rental.year5.toLocaleString()}</span>
              </div>
            </div>
            <div className="ownership-badge negative mt-6 text-center bg-red-50 text-red-700 py-2 rounded-lg text-sm">
              <strong>Was dir gehört:</strong> NICHTS
            </div>
          </div>

          <div className="vs-divider text-2xl font-bold text-zinc-300">vs</div>

          {/* Right Column: Ownership */}
          <div className="comparison-column ownership bg-white p-8 rounded-2xl shadow-xl border-2 border-green-500 scale-105 relative z-10">
            <h3 className="text-xl font-bold mb-6 text-green-600">Du</h3>
            <div className="cost-breakdown space-y-4">
              <div className="cost-row flex justify-between">
                <span>Einmalig:</span>
                <span className="amount font-mono">€{costs.ownership.oneTime.toLocaleString()}</span>
              </div>
              <div className="cost-row flex justify-between">
                <span>5 Jahre Hosting:</span>
                <span className="amount font-mono">€{costs.ownership.hosting5Years.toLocaleString()}</span>
              </div>
              <div className="cost-row total flex justify-between pt-4 border-t border-green-100 font-bold text-green-600">
                <span>Total:</span>
                <span className="amount font-mono">€{(costs.ownership.oneTime + costs.ownership.hosting5Years).toLocaleString()}</span>
              </div>
            </div>
            <div className="ownership-badge positive mt-6 text-center bg-green-50 text-green-700 py-2 rounded-lg text-sm">
              <strong>Was dir gehört:</strong> ALLES
            </div>
          </div>
        </div>

        <div className="savings-callout text-center mt-12">
          <p className="savings-amount text-2xl font-bold text-green-600 mb-2">Du sparst €{savings.toLocaleString()} über 5 Jahre.</p>
          <p className="savings-benefit text-zinc-600 mb-6">Und du besitzt deine Website.</p>
          <a href="/start" className="cta-button inline-block bg-sonic-orange text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
            Schluss mit Mieten →
          </a>
        </div>
      </div>
    </section>
  );
}

