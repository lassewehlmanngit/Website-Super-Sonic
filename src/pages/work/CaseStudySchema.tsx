import React from 'react';
import { SchemaGenerator } from '../SchemaGenerator';
import { SEO } from '../../components/SEO';

interface Props { lang: 'de' | 'en'; }

export const CaseStudySchema: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <SEO 
        title={isDe 
          ? "Schema Generator | Case Study | Super Sonic Prototypes" 
          : "Schema Generator | Case Study | Super Sonic Prototypes"}
        description={isDe
          ? "Rich Snippets erhöhen die Klickrate drastisch. Ein Tool, das valides JSON-LD Schema basierend auf unstrukturiertem Input generiert."
          : "Rich Snippets increase CTR dramatically. A tool that generates valid JSON-LD schema based on unstructured input."}
        lang={lang}
        path={`/${isDe ? 'de' : 'en'}/work/schema-generator`}
      />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div className="max-w-3xl mb-12">
            <div className="text-sonic-orange font-mono text-xs mb-4">CASE STUDY: INTERNAL TOOL</div>
            <h1 className="text-4xl font-bold text-white mb-6">Programmatic SEO Engine</h1>
            <p className="text-zinc-400 leading-relaxed text-lg">
                {isDe 
                 ? "Rich Snippets erhöhen die Klickrate drastisch. Dieses Tool generiert valides JSON-LD Schema basierend auf unstrukturiertem Input." 
                 : "Rich Snippets increase CTR dramatically. This tool generates valid JSON-LD schema based on unstructured input."}
            </p>
        </div>

        {/* The Live Tool */}
        <div className="border border-zinc-800 rounded-xl overflow-hidden mb-24">
            <div className="bg-zinc-900 px-6 py-3 border-b border-zinc-800 text-xs text-zinc-500 font-mono">
                LIVE DEMO V1.0
            </div>
            <SchemaGenerator />
        </div>

        {/* Technical Breakdown */}
        <div className="max-w-3xl">
             <h3 className="text-2xl font-bold text-white mb-4">{isDe ? "Die Strategie" : "The Strategy"}</h3>
             <p className="text-zinc-400 mb-6">
                {isDe 
                 ? "Die meisten Agenturen nutzen statische Plugins. Ich baue dynamische Generatoren, die den Kontext verstehen. Das erlaubt präziseres Targeting in der Google Suche." 
                 : "Most agencies use static plugins. I build dynamic generators that understand context. This allows for more precise targeting in Google Search."}
             </p>
        </div>

      </div>
    </div>
  );
};