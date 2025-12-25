import React from 'react';
import { WCAGTool } from '../WCAGTool';
import { SEO } from '../../components/SEO';

interface Props { lang: 'de' | 'en'; }

export const CaseStudyWCAG: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <SEO 
        title={isDe 
          ? "WCAG AI Optimizer | Case Study | Super Sonic Prototypes" 
          : "WCAG AI Optimizer | Case Study | Super Sonic Prototypes"}
        description={isDe
          ? "Manuelle WCAG-Audits sind teuer und langsam. Ein AI-Agent, der nicht nur Fehler findet, sondern React-Code semantisch umschreibt."
          : "Manual WCAG audits are expensive and slow. An AI agent that doesn't just find errors but semantically rewrites React code."}
        lang={lang}
        path={`/${isDe ? 'de' : 'en'}/work/wcag-tool`}
      />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div className="max-w-3xl mb-12">
            <div className="text-emerald-500 font-mono text-xs mb-4">CASE STUDY: INTELLIGENT AGENTS</div>
            <h1 className="text-4xl font-bold text-white mb-6">Automated Accessibility Engineer</h1>
            <p className="text-zinc-400 leading-relaxed text-lg">
                {isDe 
                 ? "Manuelle WCAG-Audits sind teuer und langsam. Ich habe einen Agenten entwickelt, der nicht nur Fehler findet, sondern den React-Code semantisch umschreibt. AI mit Engineering-Leitplanken." 
                 : "Manual WCAG audits are expensive and slow. I engineered an agent that doesn't just find errors but semantically rewrites React code. AI with engineering guardrails."}
            </p>
        </div>

        {/* The Live Tool */}
        <div className="border border-zinc-800 rounded-xl overflow-hidden mb-24">
            <div className="bg-zinc-900 px-6 py-3 border-b border-zinc-800 text-xs text-zinc-500 font-mono">
                LIVE DEMO V1.0 (SIMULATED FOR CLIENT PRIVACY)
            </div>
            <WCAGTool />
        </div>

        {/* The "How I Built It" Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
            <div>
                <h3 className="text-2xl font-bold text-white mb-6">{isDe ? "Die Architekten-Sicht" : "The Architect's View"}</h3>
                <div className="prose prose-invert text-zinc-400">
                    <p>
                        {isDe 
                         ? "AI ist mächtig, aber sie 'halluziniert'. Wenn man ein LLM bittet, Barrierefreiheit zu korrigieren, erfindet es oft ARIA-Attribute, die gar nicht existieren." 
                         : "AI is powerful, but it 'hallucinates'. If you simply ask an LLM to fix accessibility, it often invents ARIA attributes that don't exist, making the site worse for screen readers."}
                    </p>
                    <p>
                        {isDe
                         ? "Deshalb verlasse ich mich nicht auf reine Textgenerierung. Ich baue hybride Systeme: Der Architekt (Ich) definiert die Regeln, die Maschine führt sie aus."
                         : "That is why I don't rely on pure text generation. I build hybrid systems: The Architect (Me) defines the strict constraints, and the Machine executes them."}
                    </p>
                </div>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-white mb-6">{isDe ? "Technische Ausführung" : "Technical Execution"}</h3>
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg space-y-6">
                    <div>
                        <h4 className="text-white font-bold text-sm mb-2">1. AST Parsing Strategy</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                            {isDe 
                             ? "Anstatt rohen Text zu senden, parst mein Tool den Code in einen Abstract Syntax Tree (AST). So versteht die AI die Struktur, nicht nur die Worte." 
                             : "Instead of sending raw text, my tool parses the code into an Abstract Syntax Tree (AST). This ensures the AI understands the DOM structure, not just the string characters."}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm mb-2">2. Context Injection</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                            {isDe 
                             ? "Wir injizieren den relevanten WCAG 2.1 Standard direkt in den System Prompt. Das reduziert die Fehlerrate um 85%." 
                             : "We inject the relevant WCAG 2.1 subsection directly into the system prompt context window. This reduces hallucination rates by 85%."}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm mb-2">3. Deterministic Output</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                            {isDe 
                             ? "Output im JSON-Format, validiert durch Zod Schemas, bevor der Code in die UI zurückfließt." 
                             : "Output is forced into strict JSON schema, validated by Zod before the code is ever allowed back into the production UI."}
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};