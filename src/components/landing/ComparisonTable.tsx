import React from 'react';
import { Check } from 'lucide-react';

interface ComparisonTableProps {
  lang: 'de' | 'en';
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const rows = isDe ? [
    { feature: "Gratis Design-Concept", agency: "Erst nach Anzahlung", sonic: "In 72h – ohne Verpflichtung" },
    { feature: "Kosten", agency: "10k € - 20k € (variabel)", sonic: "5.600 € (Festpreis)" },
    { feature: "Monatliche Miete", agency: "150 €+", sonic: "0 € - 7 €" },
    { feature: "Wartungskosten", agency: "5.000 € pro Jahr", sonic: "0 €" },
    { feature: "Dauer", agency: "3-6 Monate", sonic: "14 Tage (Garantiert)" },
    { feature: "Eigentum", agency: "An Plattformen gebunden", sonic: "100% dein Code" },
  ] : [
    { feature: "Free Design Concept", agency: "Only after deposit", sonic: "In 72h – no obligation" },
    { feature: "Costs", agency: "€10k - €20k (variable)", sonic: "€5,600 (fixed price)" },
    { feature: "Monthly rent", agency: "€150+", sonic: "€0 - €7" },
    { feature: "Maintenance", agency: "€5,000 per year", sonic: "€0" },
    { feature: "Duration", agency: "3-6 months", sonic: "14 days (Guaranteed)" },
    { feature: "Ownership", agency: "Platform locked", sonic: "100% your code" },
  ];

  return (
    <section id="comparison" className="fluid-section bg-paper">
      <div className="container-responsive">
        <div className="text-center mb-16 reveal">
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight mb-4">
            {isDe ? "Wir vs. \"Oldschool\" Agenturen" : "Us vs. \"Oldschool\" Agencies"}
          </h2>
          <p className="text-zinc-500 fluid-lg">
            {isDe ? "Ein fairer Vergleich." : "A fair comparison."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal delay-100">
          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {rows.map((row, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 border ${i === 0 ? 'border-sonic-orange/30' : 'border-zinc-200'}`}>
                <h3 className={`font-bold mb-4 fluid-lg ${i === 0 ? 'text-sonic-orange' : 'text-zinc-900'}`}>{row.feature}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-50">
                    <span className="fluid-xs text-zinc-500 font-medium block mb-1">
                      {isDe ? "Klassische Agentur" : "Traditional Agency"}
                    </span>
                    <span className="text-zinc-700 fluid-sm">{row.agency}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
                    <span className="fluid-xs text-sonic-orange font-medium block mb-1">Super Sonic</span>
                    <span className="text-zinc-900 font-bold fluid-sm">{row.sonic}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-50">
                  <th className="text-left p-6 font-bold text-zinc-900 fluid-base">Feature</th>
                  <th className="text-left p-6 font-bold text-zinc-500 fluid-base">
                    {isDe ? "Klassische Agentur" : "Traditional Agency"}
                  </th>
                  <th className="text-left p-6 font-bold text-sonic-orange bg-orange-50 fluid-base">
                    {isDe ? "Deine \"Sonic\" Website" : "Your \"Sonic\" Website"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className={`border-t ${i === 0 ? 'border-sonic-orange/20 bg-orange-50/30' : 'border-zinc-100'}`}>
                    <td className={`p-6 font-medium fluid-base ${i === 0 ? 'text-sonic-orange' : 'text-zinc-900'}`}>{row.feature}</td>
                    <td className="p-6 text-zinc-600 fluid-base">{row.agency}</td>
                    <td className={`p-6 font-bold text-zinc-900 fluid-base ${i === 0 ? 'bg-orange-100/50' : 'bg-orange-50/50'}`}>
                      <span className="flex items-center gap-2">
                        <Check className="text-sonic-orange" size={18} />
                        {row.sonic}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom note */}
          <div className="mt-8 text-center reveal delay-200">
            <p className="text-zinc-500 fluid-sm">
              {isDe 
                ? "* Die Website gehört dir, keine Wartung benötigt, kein Agentur lock-in."
                : "* The website is yours, no maintenance needed, no agency lock-in."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
