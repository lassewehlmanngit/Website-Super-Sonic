import React from 'react';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';
import { CaseStudyCard } from '../components/work/CaseStudyCard';

interface Props { lang: 'de' | 'en'; }

export const Work: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  const cases = [
    {
      title: isDe ? "Neobank für 20-Jährige" : "Neobank for 20-Somethings",
      category: "Fintech MVP",
      description: isDe
        ? "Das Problem: Dieses Startup wollte eine Banking-App für junge Leute bauen. Sie hatten €4M bei Investoren zu sammeln. Aber Investoren wollten etwas Echtes sehen. Nicht nur Folien.\n\nWas wir gebaut haben: Einen funktionierenden Prototypen in 72 Stunden. Man konnte ein Konto erstellen. Eine Kreditkarte verknüpfen. Ausgaben verfolgen. Alle Kernfunktionen. Nicht poliert. Nicht perfekt. Aber echt.\n\nDas Ergebnis: Sie zeigten es Investoren am Montag. Bis Freitag hatten sie €4,2M zugesagt."
        : "The Problem: This startup wanted to build a banking app for young people. They had €4M to raise from investors. But investors wanted to see something real. Not just slides.\n\nWhat We Built: A working prototype in 72 hours. You could create an account. Link a credit card. Track spending. All the core features. Not polished. Not perfect. But real.\n\nThe Result: They showed it to investors on Monday. By Friday, they had €4.2M committed.",
      tags: ["React", "Tailwind", "Real-Time Data", "MVP"],
      link: isDe ? "/de/work" : "/en/work",
      stats: [
        { label: isDe ? "Baukosten" : "Cost to build", value: "€12,000" },
        { label: isDe ? "Eingesammeltes Geld" : "Money raised", value: "€4.2M" },
        { label: "ROI", value: "35,000%" }
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
