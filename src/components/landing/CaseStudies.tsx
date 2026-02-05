import React from 'react';

interface CaseStudiesProps {
  lang: 'de' | 'en';
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const cases = isDe ? [
    {
      title: "Der ausgebuchte Handwerksbetrieb",
      problem: "Website von 2005, nicht mobilfähig.",
      solution: "Sonic-Blueprint in 14 Tagen.",
      result: "45% mehr qualifizierte Anfragen über das neue Kontaktformular im ersten Monat.",
      metric: "+45%",
      metricLabel: "Mehr Anfragen"
    },
    {
      title: "Das IT-Systemhaus",
      problem: "Wordpress-Chaos, 8 Sekunden Ladezeit.",
      solution: "Umstellung auf unseren Sonic-Stack (Code-Sovereignty).",
      result: "Ladezeit unter 0,8s. Top-Rankings bei Google für lokale Keywords.",
      metric: "<0.8s",
      metricLabel: "Ladezeit"
    }
  ] : [
    {
      title: "The Fully Booked Craftsman",
      problem: "Website from 2005, not mobile-friendly.",
      solution: "Sonic Blueprint in 14 days.",
      result: "45% more qualified inquiries through the new contact form in the first month.",
      metric: "+45%",
      metricLabel: "More inquiries"
    },
    {
      title: "The IT System House",
      problem: "WordPress chaos, 8 second load time.",
      solution: "Switch to our Sonic Stack (Code Sovereignty).",
      result: "Load time under 0.8s. Top rankings on Google for local keywords.",
      metric: "<0.8s",
      metricLabel: "Load time"
    }
  ];

  return (
    <section id="case-studies" className="fluid-section bg-white">
      <div className="container-responsive">
        <div className="text-center mb-16 reveal">
          <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
            {isDe ? "Fallstudien" : "Case Studies"}
          </p>
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight mb-4">
            {isDe 
              ? "6 erfolgreiche Projekte," 
              : "6 successful projects,"}
            <br />
            <span className="text-zinc-400">
              {isDe 
                ? "bevor wir überhaupt Geld genommen haben." 
                : "before we even took money."}
            </span>
          </h2>
          <p className="text-zinc-500 fluid-lg max-w-2xl mx-auto">
            {isDe 
              ? "Wir wollten keinen Service anbieten, dem du nicht vertrauen kannst."
              : "We didn't want to offer a service you couldn't trust."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((caseStudy, i) => (
            <div key={i} className="bg-zinc-50 rounded-2xl p-8 md:p-10 border border-zinc-100 hover:border-zinc-200 transition-colors reveal delay-100">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <h3 className="fluid-xl font-bold text-zinc-900">
                  {caseStudy.title}
                </h3>
                <div className="bg-orange-50 text-sonic-orange px-3 py-1 rounded-full fluid-sm font-bold border border-orange-100">
                  {caseStudy.metric}
                </div>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <span className="fluid-xs font-bold text-zinc-500 uppercase tracking-wider">
                  {isDe ? "Problem" : "Problem"}
                </span>
                <p className="text-zinc-600 mt-1 fluid-base">{caseStudy.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <span className="fluid-xs font-bold text-sonic-orange uppercase tracking-wider">
                  {isDe ? "Lösung" : "Solution"}
                </span>
                <p className="text-zinc-600 mt-1 fluid-base">{caseStudy.solution}</p>
              </div>

              {/* Result */}
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                <span className="fluid-xs font-bold text-sonic-orange uppercase tracking-wider">
                  {isDe ? "Ergebnis" : "Result"}
                </span>
                <p className="text-zinc-900 font-medium mt-1 fluid-base">{caseStudy.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
