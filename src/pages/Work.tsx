import React, { useState } from 'react';
import { ArrowUpRight, Wrench, Briefcase, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';

interface Props { lang: 'de' | 'en'; }

export const Work: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "WCAG AI Optimizer",
      type: isDe ? "Internes Tool" : "Internal Tool",
      shortDesc: isDe ? "KI-Agent für automatische Code-Reparatur." : "AI Agent for automated code repair.",
      fullDesc: isDe 
        ? "Ein experimentelles Tool, das den DOM-Tree analysiert und Accessibility-Probleme nicht nur findet, sondern den Code direkt umschreibt. Nutzt Gemini 1.5 Pro für semantisches Verständnis." 
        : "An experimental tool that parses the DOM tree and identifies accessibility issues. Unlike standard linters, it uses Gemini 1.5 Pro to semantically understand the UI and rewrite the code automatically.",
      link: isDe ? "/de/work/wcag-tool" : "/en/work/wcag-tool",
      icon: Wrench,
      tech: ["Gemini 1.5 Pro", "React AST", "TypeScript", "Tailwind"]
    },
    {
      title: "Schema Generator",
      type: isDe ? "Internes Tool" : "Internal Tool",
      shortDesc: isDe ? "JSON-LD Generator für SEO Dominanz." : "JSON-LD Generator for SEO dominance.",
      fullDesc: isDe 
        ? "Strukturierten Daten sind der Schlüssel für Rich Snippets. Dieses Tool generiert valides JSON-LD für Local Businesses und eliminiert Syntax-Fehler bei der manuellen Erstellung." 
        : "Structured data is key for Rich Snippets. This tool generates valid JSON-LD for Local Businesses, eliminating syntax errors common in manual creation and boosting Click-Through-Rates.",
      link: isDe ? "/de/work/schema-generator" : "/en/work/schema-generator",
      icon: Wrench,
      tech: ["JSON-LD", "React", "Regex", "SEO API"]
    },
    {
      title: "Volkswagen Service UI",
      type: isDe ? "Kundenprojekt" : "Client Project",
      shortDesc: isDe ? "Service-Portal Redesign für Global Player." : "Service Portal Redesign for Global Player.",
      fullDesc: isDe
        ? "Konsolidierung von 3 Legacy-Systemen in eine einheitliche Next.js Oberfläche. Fokus auf Performance (Core Web Vitals) und barrierefreie Nutzung für Millionen von Kunden."
        : "Consolidating 3 legacy systems into a unified Next.js interface. Focus on performance (Core Web Vitals) and accessibility for millions of customers. Reduced load times by 40%.",
      link: "#", // Placeholder
      icon: Briefcase,
      tech: ["Next.js", "Enterprise UX", "Framer Motion", "Jest"]
    }
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-paper min-h-screen">
      {/* Hero */}
      <section className="bg-void pt-40 pb-20 px-4 md:px-12 rounded-b-[3rem] mb-12 relative overflow-hidden">
          <ChristmasBalls />
          <div className="max-w-[90rem] mx-auto relative z-10">
              <h1 className="text-white text-[12vw] leading-[0.8] font-bold tracking-tighter mb-8">
                  {isDe ? "PRAXIS." : "PRACTICE."}
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl font-light">
                  {isDe ? "Echte Kundenprojekte, interne Tools und KI-Experimente." : "Real client projects, internal tools, and AI experiments."}
              </p>
          </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 md:px-12 pb-24 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
                <div 
                    key={i} 
                    onClick={() => handleToggle(i)}
                    className={`
                        group bg-white rounded-[2rem] p-8 cursor-pointer transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-xl border border-black/5
                        ${expandedIndex === i ? 'ring-2 ring-black' : ''}
                    `}
                >
                    {/* Header Part */}
                    <div className="flex justify-between items-start mb-12">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 border border-zinc-100 px-3 py-1 rounded-full">
                            <p.icon size={12} /> {p.type}
                        </div>
                        <div className={`w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center transition-transform duration-300 text-black group-hover:bg-black group-hover:text-white ${expandedIndex === i ? 'rotate-180 bg-black text-white' : ''}`}>
                             <ChevronDown size={20} />
                        </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">{p.title}</h3>
                    <p className="text-zinc-500 text-lg leading-relaxed mb-6">{p.shortDesc}</p>

                    {/* Expanded Content */}
                    <div className={`grid transition-[grid-template-rows,opacity,padding] duration-500 ease-in-out ${expandedIndex === i ? 'grid-rows-[1fr] opacity-100 pt-8 border-t border-zinc-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <p className="text-zinc-600 text-base leading-relaxed mb-8">
                                {p.fullDesc}
                            </p>
                            
                            <div className="mb-8">
                                <span className="text-xs font-mono text-zinc-400 uppercase block mb-3">Technologies</span>
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map((t, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-full text-xs text-zinc-600 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto">
                                <Link to={p.link} onClick={(e) => e.stopPropagation()} className="block w-full">
                                    <Button size="md" variant="primary" className="w-full group">
                                        {isDe ? "Case Study ansehen" : "View Case Study"} 
                                        <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};