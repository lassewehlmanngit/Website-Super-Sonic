import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Truck, Scale, ArrowUpRight, ExternalLink } from 'lucide-react';
import { getAllCaseStudies, CaseStudy } from '../../data/caseStudies';

interface ReferenceProjectsProps {
  lang: 'de' | 'en';
}

const iconMap = {
  leaf: Leaf,
  truck: Truck,
  scale: Scale,
  server: Leaf,
  building: Leaf,
  store: Leaf,
};

export const ReferenceProjects: React.FC<ReferenceProjectsProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const caseStudies = getAllCaseStudies(lang);
  const projectPath = isDe ? 'projekte' : 'projects';

  // Additional reference projects (coming soon / placeholders)
  const upcomingProjects = isDe ? [
    {
      icon: Truck,
      title: "Logistik-Held",
      description: "Modernes Design, Fokus auf Mitarbeiter-Recruiting.",
      caption: "Bewerbung in 60 Sekunden möglich.",
      color: "bg-sonic-orange",
      comingSoon: true
    },
    {
      icon: Scale,
      title: "Kanzlei-Digital",
      description: "Seriös, schnell, DSGVO-sicher.",
      caption: "100% Barrierefrei nach BFSG.",
      color: "bg-zinc-800",
      comingSoon: true
    }
  ] : [
    {
      icon: Truck,
      title: "Logistics Hero",
      description: "Modern design, focus on employee recruiting.",
      caption: "Application possible in 60 seconds.",
      color: "bg-sonic-orange",
      comingSoon: true
    },
    {
      icon: Scale,
      title: "Law Firm Digital",
      description: "Professional, fast, GDPR compliant.",
      caption: "100% accessible according to BFSG.",
      color: "bg-zinc-800",
      comingSoon: true
    }
  ];

  return (
    <section id="references" className="fluid-section bg-zinc-50">
      <div className="container-responsive">
        <div className="text-center mb-16 reveal">
          <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
            {isDe ? "Portfolio" : "Portfolio"}
          </p>
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight">
            {isDe ? "Referenz-Projekte" : "Reference Projects"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Real Case Studies with Links */}
          {caseStudies.map((project: CaseStudy) => {
            const IconComponent = iconMap[project.icon];
            return (
              <Link
                key={project.slug}
                to={`/${lang}/${projectPath}/${project.slug}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all reveal delay-100 border border-zinc-100"
              >
                {/* Preview area */}
                <div className="h-44 flex items-center justify-center relative" style={{ backgroundColor: project.color }}>
                  <IconComponent className="text-white/30" size={64} />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-white" size={20} />
                  </div>
                  {/* Industry Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white fluid-xs font-medium">{project.industry}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="fluid-lg font-bold text-zinc-900 mb-2 group-hover:text-sonic-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 mb-4 fluid-sm line-clamp-2">
                    {project.content.intro}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-600 rounded-full fluid-xs font-medium border border-green-100">
                      {project.preview.metric} {project.preview.metricLabel}
                    </span>
                    {project.liveUrl && (
                      <ExternalLink className="text-zinc-400" size={16} />
                    )}
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Upcoming/Placeholder Projects */}
          {upcomingProjects.map((project, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-2xl overflow-hidden transition-all reveal delay-100 border border-zinc-100 opacity-80"
            >
              {/* Preview area */}
              <div className={`h-44 ${project.color} flex items-center justify-center relative`}>
                <project.icon className="text-white/30" size={64} />
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 bg-white/90 text-zinc-700 px-3 py-1 rounded-full fluid-xs font-medium">
                  {isDe ? "Bald verfügbar" : "Coming Soon"}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="fluid-lg font-bold text-zinc-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 mb-4 fluid-sm">{project.description}</p>
                <div className="inline-block px-3 py-1 bg-orange-50 text-sonic-orange rounded-full fluid-xs font-medium border border-orange-100">
                  {project.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
