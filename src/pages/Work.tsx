import React from 'react';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';
import { WorkFilters } from '../components/work/WorkFilters';
import { FeaturedCase } from '../components/work/FeaturedCase';
import { ProjectCard } from '../components/work/ProjectCard';
import { ResultsSummary } from '../components/work/ResultsSummary';

interface Props { lang: 'de' | 'en'; }

export const Work: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  const featuredCaseData = {
    title: "Neobank für Gen Z",
    client: "FinTech Startup",
    industry: "Banking",
    thumbnail: "", 
    challenge: "Brauchten €4M von Investoren. Investoren wollten Proof of Concept, nicht nur Folien.",
    solution: "Funktionierender Prototyp in 72 Stunden. Kernfunktionen: Account-Erstellung, Kartenverknüpfung, Ausgaben-Tracking.",
    results: [
      { label: "In 4 Tagen gesammelt", value: "€4,2M" },
      { label: "ROI", value: "35.000%" },
      { label: "Beta Launch", value: "2 Monate" }
    ],
    quote: "Ohne diesen Prototypen würden wir immer noch Folien präsentieren.",
    quoteAuthor: "CEO",
    quoteTitle: "NeoBank",
    link: "/work"
  };

  const projects: any[] = [
    {
      title: "Logistics Dashboard",
      client: "SaaS Platform",
      serviceType: "ux",
      thumbnail: "",
      metrics: [
        { label: "Efficiency", value: "+35%" },
        { label: "Satisfaction", value: "4.8/5" }
      ],
      link: "/work"
    },
    {
        title: "Architecture Portfolio",
        client: "Architekturbüro",
        serviceType: "web",
        thumbnail: "",
        metrics: [
          { label: "PageSpeed", value: "100" },
          { label: "SEO", value: "+200%" }
        ],
        link: "/work"
    },
    {
        title: "E-Commerce Replatforming",
        client: "Fashion Brand",
        serviceType: "web",
        thumbnail: "",
        metrics: [
          { label: "Revenue", value: "+45%" },
          { label: "Conversion", value: "3.2%" }
        ],
        link: "/work"
    },
    {
        title: "HealthTech MVP",
        client: "MedTech Startup",
        serviceType: "mvp",
        thumbnail: "",
        metrics: [
          { label: "Compliance", value: "100%" },
          { label: "Pilot Users", value: "500+" }
        ],
        link: "/work"
    }
  ];

  return (
    <div className="bg-paper min-h-screen pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
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

      {/* <ChristmasBalls /> */}

      <div className="container-responsive relative z-10">
        <div className="mb-8 md:mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-black mb-8 md:mb-12 tracking-tighter leading-[0.85]">
                {isDe ? "AUSGEWÄHLTE" : "SELECTED"} <br />
                <span className="text-zinc-300">{isDe ? "ARBEITEN." : "WORK."}</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl leading-relaxed mb-8 md:mb-12">
                {isDe
                 ? "Software und Webseiten, die Business-Probleme lösen. Keine Platzhalter, echte Ergebnisse."
                 : "Software and websites that solve business problems. No placeholders, real results."}
            </p>
            
            <WorkFilters />
        </div>

        <FeaturedCase data={featuredCaseData} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
            {projects.map((project, index) => (
                <ProjectCard key={index} data={project} />
            ))}
        </div>

        <ResultsSummary />

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
