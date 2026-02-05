import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonTableProps {
  lang: 'de' | 'en';
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const rows = isDe ? [
    { feature: "Kosten", agency: "10k € - 20k € (variabel)", sonic: "5.600 € (Festpreis)", sonicBetter: true },
    { feature: "Monatliche Miete", agency: "150 €+", sonic: "0 € - 7 €", sonicBetter: true },
    { feature: "Wartungskosten", agency: "5.000 € pro Jahr", sonic: "0 €", sonicBetter: true },
    { feature: "Dauer", agency: "3-6 Monate", sonic: "14 Tage (Garantiert)", sonicBetter: true },
    { feature: "Eigentum", agency: "An Plattformen gebunden", sonic: "100% dein Code", sonicBetter: true },
  ] : [
    { feature: "Costs", agency: "€10k - €20k (variable)", sonic: "€5,600 (fixed price)", sonicBetter: true },
    { feature: "Monthly rent", agency: "€150+", sonic: "€0 - €7", sonicBetter: true },
    { feature: "Maintenance", agency: "€5,000 per year", sonic: "€0", sonicBetter: true },
    { feature: "Duration", agency: "3-6 months", sonic: "14 days (Guaranteed)", sonicBetter: true },
    { feature: "Ownership", agency: "Platform locked", sonic: "100% your code", sonicBetter: true },
  ];

  return (
    <section id="comparison" className="py-20 md:py-32 bg-white">
      <div className="container-responsive">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter mb-4">
            {isDe ? "Wir vs. \"Oldschool\" Agenturen" : "Us vs. \"Oldschool\" Agencies"}
          </h2>
          <p className="text-zinc-500 text-lg">
            {isDe ? "Ein fairer Vergleich." : "A fair comparison."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal delay-100">
          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {rows.map((row, i) => (
              <div key={i} className="bg-zinc-50 rounded-2xl p-6">
                <h3 className="font-bold text-black mb-4">{row.feature}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-red-100">
                    <span className="text-xs text-red-500 font-medium block mb-1">
                      {isDe ? "Klassische Agentur" : "Traditional Agency"}
                    </span>
                    <span className="text-zinc-700 text-sm">{row.agency}</span>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <span className="text-xs text-green-600 font-medium block mb-1">Super Sonic</span>
                    <span className="text-black font-bold text-sm">{row.sonic}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-50">
                  <th className="text-left p-6 font-bold text-black">Feature</th>
                  <th className="text-left p-6 font-bold text-red-500">
                    {isDe ? "Klassische Agentur" : "Traditional Agency"}
                  </th>
                  <th className="text-left p-6 font-bold text-sonic-orange bg-orange-50">
                    {isDe ? "Deine \"Sonic\" Website" : "Your \"Sonic\" Website"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-t border-zinc-100">
                    <td className="p-6 font-medium text-black">{row.feature}</td>
                    <td className="p-6 text-zinc-600">{row.agency}</td>
                    <td className="p-6 font-bold text-black bg-orange-50/50">
                      <span className="flex items-center gap-2">
                        <Check className="text-green-500" size={18} />
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
            <p className="text-zinc-500 text-sm">
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
