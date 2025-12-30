import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectExample {
  title: string;
  client: string;
  thumbnail: string;
  metrics: {
    label: string;
    value: string;
  }[];
  link: string;
}

export function ExamplesSection({ examples }: { examples: ProjectExample[] }) {
  return (
    <section className="examples-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-headline text-center mb-12">Beispiele unserer Arbeit</h2>
        
        <div className="examples-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {examples.map((ex, i) => (
            <div key={i} className="example-card bg-white rounded-2xl overflow-hidden shadow-lg border border-zinc-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="thumbnail h-48 overflow-hidden bg-zinc-200 relative">
                 {ex.thumbnail ? (
                    <img src={ex.thumbnail} alt={ex.title} className="w-full h-full object-cover" />
                 ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 font-bold">Project Image</div>
                 )}
              </div>
              <div className="content p-6">
                <h3 className="text-xl font-bold mb-1">{ex.title}</h3>
                <p className="client text-sm text-zinc-500 mb-4 uppercase tracking-wider">{ex.client}</p>
                
                <div className="metrics grid grid-cols-3 gap-2 mb-6 bg-zinc-50 p-3 rounded-lg">
                  {ex.metrics.map((m, j) => (
                    <div key={j} className="metric text-center">
                      <span className="value block font-bold text-sonic-orange text-sm md:text-base">{m.value}</span>
                      <span className="label block text-xs text-zinc-500">{m.label}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={ex.link} className="view-case text-sonic-orange font-bold text-sm hover:underline flex items-center gap-1">
                  Case Study ansehen <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
            <Link to="/work" className="view-all inline-block px-8 py-3 border border-zinc-300 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
            Alle Projekte →
            </Link>
        </div>
      </div>
    </section>
  );
}

