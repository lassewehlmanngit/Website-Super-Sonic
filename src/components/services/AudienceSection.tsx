import React from 'react';

interface AudienceProps {
  perfectFor: string[];
  notFor: string[];
}

export function AudienceSection({ perfectFor, notFor }: AudienceProps) {
  return (
    <section className="audience-section py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="audience-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Perfect For Column */}
          <div className="audience-column perfect bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-500">
            <h3 className="text-xl font-bold mb-6 text-green-700 flex items-center gap-2">
                Perfekt, wenn:
            </h3>
            <ul className="space-y-4">
              {perfectFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="icon text-green-500 font-bold mt-1">✓</span>
                  <span className="text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Not For Column */}
          <div className="audience-column not-for bg-white p-8 rounded-2xl shadow-sm border-t-4 border-red-500">
            <h3 className="text-xl font-bold mb-6 text-red-700 flex items-center gap-2">
                Nicht für dich, wenn:
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="icon text-red-500 font-bold mt-1">✗</span>
                  <span className="text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

