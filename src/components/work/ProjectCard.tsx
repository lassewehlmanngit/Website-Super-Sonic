import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCard {
  title: string;
  client: string;
  serviceType: 'web' | 'mvp' | 'ux';
  thumbnail: string;
  metrics: {
    label: string;
    value: string;
  }[];
  link: string;
}

export function ProjectCard({ data }: { data: ProjectCard }) {
  const serviceBadges = {
    web: { icon: '🌐', label: 'Website' },
    mvp: { icon: '⚡', label: 'MVP' },
    ux: { icon: '🎨', label: 'UX Audit' }
  };

  return (
    <Link href={data.link} className="project-card group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-zinc-100">
      <div className="thumbnail relative aspect-video bg-zinc-200 overflow-hidden">
        {data.thumbnail ? (
            <img src={data.thumbnail} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-400 font-bold">Project Preview</div>
        )}
        
        <div className="service-badge absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-black flex items-center gap-2 shadow-sm">
          <span className="icon">{serviceBadges[data.serviceType].icon}</span>
          <span className="label">{serviceBadges[data.serviceType].label}</span>
        </div>
        
        <div className="metrics-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {data.metrics.map((m, i) => (
            <div key={i} className="metric text-white">
              <span className="value block font-bold text-lg">{m.value}</span>
              <span className="label block text-xs opacity-80">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="content p-6">
        <h3 className="text-xl font-bold text-black mb-1 group-hover:text-sonic-orange transition-colors">{data.title}</h3>
        <p className="client text-sm text-zinc-500">{data.client}</p>
      </div>
    </Link>
  );
}

