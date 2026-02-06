import React from "react";
import { tinaField } from "tinacms/dist/react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Truck, Scale, Server, Building2, Store } from "lucide-react";

// Type will be generated after first `tinacms build`
interface CaseStudyPreview {
  problem?: string | null;
  solution?: string | null;
  result?: string | null;
  metric?: string | null;
  metricLabel?: string | null;
}

interface CaseStudy {
  slug?: string | null;
  title?: string | null;
  client?: string | null;
  industry?: string | null;
  year?: string | null;
  heroImage?: string | null;
  color?: string | null;
  icon?: string | null;
  preview?: CaseStudyPreview | null;
  liveUrl?: string | null;
}

interface CaseStudiesData {
  headline?: string | null;
  subheadline?: string | null;
  studies?: (CaseStudy | null)[] | null;
  variant?: string | null;
}

interface CaseStudiesProps {
  data: CaseStudiesData;
  lang?: 'de' | 'en';
}

// Icon mapping
const iconMap = {
  leaf: Leaf,
  truck: Truck,
  scale: Scale,
  server: Server,
  building: Building2,
  store: Store,
};

/**
 * Case Studies Block Component
 * 
 * Displays project case studies in various layouts.
 * Links to individual case study detail pages.
 */
export const CaseStudies: React.FC<CaseStudiesProps> = ({ data, lang = 'de' }) => {
  const isGrid = data.variant === "grid" || !data.variant;
  const isFeatured = data.variant === "featured";
  const isList = data.variant === "list";

  const getDetailUrl = (slug: string | null | undefined) => {
    if (!slug) return "#";
    return lang === 'de' ? `/de/projekte/${slug}` : `/en/projects/${slug}`;
  };

  return (
    <section id="case-studies" className="py-20 bg-[var(--color-bg,#0a0a0a)]">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-16">
          {data.headline && (
            <h2 
              data-tina-field={tinaField(data, "headline")}
              className="text-3xl md:text-5xl font-bold mb-4 text-white"
            >
              {data.headline}
            </h2>
          )}
          {data.subheadline && (
            <p 
              data-tina-field={tinaField(data, "subheadline")}
              className="text-lg text-zinc-400 max-w-2xl mx-auto"
            >
              {data.subheadline}
            </p>
          )}
        </div>

        {/* Studies Grid */}
        <div className={`${
          isGrid ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : 
          isFeatured ? "space-y-8" : 
          "space-y-4"
        }`}>
          {data.studies?.map((study, index) => {
            if (!study) return null;
            
            const IconComponent = study.icon ? iconMap[study.icon as keyof typeof iconMap] : null;
            
            if (isFeatured) {
              // Featured card layout
              return (
                <div 
                  key={index}
                  className="relative rounded-2xl overflow-hidden"
                  style={{ backgroundColor: study.color || '#1a1a1a' }}
                >
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        {IconComponent && (
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <IconComponent size={20} className="text-white" />
                          </div>
                        )}
                        <span className="text-white/60 text-sm">{study.industry}</span>
                      </div>
                      
                      <h3 
                        data-tina-field={tinaField(study, "title")}
                        className="text-2xl md:text-3xl font-bold text-white mb-2"
                      >
                        {study.title}
                      </h3>
                      <p className="text-white/60 mb-6">{study.client}</p>
                      
                      {study.preview && (
                        <div className="space-y-3 mb-6">
                          <p className="text-white/80">{study.preview.problem}</p>
                          <p className="text-white font-medium">{study.preview.result}</p>
                        </div>
                      )}
                      
                      {study.preview?.metric && (
                        <div className="inline-flex items-baseline gap-2 mb-6">
                          <span className="text-4xl font-bold text-white">{study.preview.metric}</span>
                          <span className="text-white/60">{study.preview.metricLabel}</span>
                        </div>
                      )}
                      
                      <Link 
                        to={getDetailUrl(study.slug)}
                        className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                      >
                        {lang === 'de' ? 'Case Study lesen' : 'Read case study'}
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                    
                    {/* Image */}
                    {study.heroImage && (
                      <div className="relative aspect-video md:aspect-auto rounded-lg overflow-hidden">
                        <img 
                          src={study.heroImage} 
                          alt={study.title || ''}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            }
            
            // Grid/List card layout
            return (
              <Link 
                key={index}
                to={getDetailUrl(study.slug)}
                className={`group block rounded-xl overflow-hidden transition-all hover:scale-[1.02] ${
                  isList ? "flex items-center gap-6 p-4 bg-zinc-900" : "bg-zinc-900"
                }`}
              >
                {/* Image */}
                {study.heroImage && !isList && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={study.heroImage} 
                      alt={study.title || ''}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className={isList ? "flex-1" : "p-6"}>
                  <div className="flex items-center gap-2 mb-2">
                    {IconComponent && (
                      <IconComponent size={16} className="text-zinc-500" />
                    )}
                    <span className="text-zinc-500 text-sm">{study.industry} • {study.year}</span>
                  </div>
                  
                  <h3 
                    data-tina-field={tinaField(study, "title")}
                    className="text-xl font-bold text-white mb-1 group-hover:text-[var(--color-primary,#FF5500)] transition-colors"
                  >
                    {study.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-3">{study.client}</p>
                  
                  {study.preview?.metric && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[var(--color-primary,#FF5500)]">
                        {study.preview.metric}
                      </span>
                      <span className="text-zinc-500 text-sm">{study.preview.metricLabel}</span>
                    </div>
                  )}
                </div>
                
                {isList && (
                  <ArrowRight size={20} className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
