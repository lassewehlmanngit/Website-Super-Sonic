import React from 'react';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';
import { CaseStudyCard } from '../components/work/CaseStudyCard';

interface Props { lang: 'de' | 'en'; }

export const Work: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  const cases = [
    {
      title: "Neobank Ventures",
      category: "Fintech MVP",
      description: isDe
        ? "Ein High-Frequency Trading Interface für Gen Z. Entwicklung eines voll funktionsfähigen React-Prototypen in 72 Stunden für das Seed-Funding Pitch Deck."
        : "A High-Frequency Trading Interface for Gen Z. Development of a fully functional React prototype in 72 hours for the Seed Funding Pitch Deck.",
      tags: ["React", "Tailwind", "Real-Time Data", "MVP"],
      link: isDe ? "/de/work" : "/en/work",
      stats: [
        { label: "Funding Raised", value: "$4.2M" },
        { label: "Time to Build", value: "3 Weeks" }
      ]
    },
    {
      title: "Logistics Dashboard",
      category: "SaaS Platform",
      description: isDe
        ? "Redesign einer komplexen Logistik-Software. Fokus auf Informationsdichte und Reduzierung der Klickwege für Disponenten."
        : "Redesign of a complex logistics software. Focus on information density and reduction of click paths for dispatchers.",
      tags: ["UX Audit", "Design System", "Dashboard"],
      link: isDe ? "/de/work" : "/en/work",
      stats: [
        { label: "Efficiency Gain", value: "+35%" },
        { label: "User Satisfaction", value: "4.8/5" }
      ]
    },
    {
        title: "Architecture Portfolio",
        category: "Marketing Asset",
        description: isDe
          ? "Minimalistische Portfolio-Website für ein Architekturbüro. Fokus auf Ladezeit (LCP < 0.8s) und visuelle Hierarchie."
          : "Minimalist portfolio website for an architecture firm. Focus on load time (LCP < 0.8s) and visual hierarchy.",
        tags: ["Astro", "CMS", "SEO"],
        link: isDe ? "/de/work" : "/en/work",
        stats: [
          { label: "PageSpeed Score", value: "100" },
          { label: "SEO Visibility", value: "+200%" }
        ]
    }
  ];

  return (
    <div className="bg-paper min-h-screen pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
      <SEO 
        title={isDe 
          ? "Selected Work | Case Studies | Super Sonic Prototypes"
          : "Selected Work | Case Studies | Super Sonic Prototypes"}
        description={isDe
          ? "Ausgewählte Arbeiten. Von Fintech MVPs bis zu High-Performance Marketing Assets."
          : "Selected work. From Fintech MVPs to High-Performance Marketing Assets."}
        lang={lang}
        path={`/${isDe ? 'de' : 'en'}/work`}
      />

      <ChristmasBalls />

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="mb-24">
            <h1 className="text-6xl md:text-9xl font-bold text-black mb-12 tracking-tighter leading-[0.85]">
                {isDe ? "AUSGEWÄHLTE" : "SELECTED"} <br />
                <span className="text-zinc-300">{isDe ? "ARBEITEN." : "WORK."}</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
                {isDe
                 ? "Software und Webseiten, die Business-Probleme lösen. Keine Platzhalter, echte Ergebnisse."
                 : "Software and websites that solve business problems. No placeholders, real results."}
            </p>
        </div>

        <div className="space-y-12">
            {cases.map((project, index) => (
                <CaseStudyCard key={index} {...project} />
            ))}
        </div>

        <div className="mt-32 text-center">
            <h3 className="text-2xl font-bold text-black mb-6">
                {isDe ? "Mehr Projekte auf Anfrage." : "More projects upon request."}
            </h3>
            <p className="text-zinc-500 mb-8">
                {isDe ? "Viele unserer Arbeiten unterliegen NDAs." : "Many of our works are under NDA."}
            </p>
        </div>

      </div>
    </div>
  );
};
