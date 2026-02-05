import React from 'react';
import { Truck, Scale, ArrowUpRight } from 'lucide-react';

interface ReferenceProjectsProps {
  lang: 'de' | 'en';
}

export const ReferenceProjects: React.FC<ReferenceProjectsProps> = ({ lang }) => {
  const isDe = lang === 'de';

  const projects = isDe ? [
    {
      icon: Truck,
      title: "Logistik-Held",
      description: "Modernes Design, Fokus auf Mitarbeiter-Recruiting.",
      caption: "Bewerbung in 60 Sekunden möglich.",
      color: "bg-blue-500"
    },
    {
      icon: Scale,
      title: "Kanzlei-Digital",
      description: "Seriös, schnell, DSGVO-sicher.",
      caption: "100% Barrierefrei nach BFSG.",
      color: "bg-zinc-900"
    }
  ] : [
    {
      icon: Truck,
      title: "Logistics Hero",
      description: "Modern design, focus on employee recruiting.",
      caption: "Application possible in 60 seconds.",
      color: "bg-blue-500"
    },
    {
      icon: Scale,
      title: "Law Firm Digital",
      description: "Professional, fast, GDPR compliant.",
      caption: "100% accessible according to BFSG.",
      color: "bg-zinc-900"
    }
  ];

  return (
    <section id="references" className="py-20 md:py-32 bg-white">
      <div className="container-responsive">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter">
            {isDe ? "Referenz-Projekte" : "Reference Projects"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group bg-zinc-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all reveal delay-100"
            >
              {/* Preview area */}
              <div className={`h-48 ${project.color} flex items-center justify-center relative`}>
                <project.icon className="text-white/50" size={80} />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 mb-4">{project.description}</p>
                <div className="inline-block px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
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
