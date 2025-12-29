import React from 'react';
import { ArrowUpRight, Lock, Github, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

interface CaseStudyProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  link: string;
  stats?: { label: string; value: string }[];
  isLocked?: boolean;
}

const CaseStudyCardComponent: React.FC<CaseStudyProps> = ({
  title,
  category,
  description,
  image,
  tags,
  link,
  stats,
  isLocked = false
}) => {
  return (
    <Link
        to={link}
        className="group block bg-white rounded-[2.5rem] border border-black/5 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[500px]">

          {/* Content Side */}
          <div className="p-10 md:p-14 flex flex-col justify-between">
              <div>
                  <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-zinc-100 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-500">
                          {category}
                      </span>
                      {isLocked && (
                          <span className="flex items-center gap-1 text-xs font-bold text-zinc-400">
                              <Lock size={12} /> NDA Protected
                          </span>
                      )}
                  </div>

                  <h3 className="text-4xl font-bold text-black mb-6 group-hover:underline decoration-sonic-orange decoration-2 underline-offset-8 transition-all">
                      {title}
                  </h3>

                  <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                      {description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                      {tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-xs font-mono text-zinc-400">
                              {tag}
                          </span>
                      ))}
                  </div>
              </div>

              {stats && (
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-zinc-100">
                      {stats.map((stat, i) => (
                          <div key={i}>
                              <div className="text-2xl font-bold text-black">{stat.value}</div>
                              <div className="text-xs uppercase tracking-wider text-zinc-400">{stat.label}</div>
                          </div>
                      ))}
                  </div>
              )}
          </div>

          {/* Image Side (Abstract/Placeholder) */}
          <div className={`relative bg-zinc-900 overflow-hidden ${image ? '' : 'flex items-center justify-center'}`}>
              {image ? (
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    fetchPriority="low"
                    width={500}
                    height={500}
                  />
              ) : (
                  // Abstract Generative Pattern Placeholder
                  <div className="w-full h-full relative p-12 flex flex-col items-center justify-center text-zinc-700 group-hover:text-zinc-600 transition-colors">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                      <Globe size={120} strokeWidth={0.5} className="mb-4 opacity-50" />
                      <div className="font-mono text-sm tracking-widest uppercase opacity-50">Visual Asset</div>
                  </div>
              )}

              <div className="absolute bottom-10 right-10 bg-white text-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:bg-sonic-orange group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight size={24} />
              </div>
          </div>
      </div>
    </Link>
  );
};

// Memoize to prevent unnecessary re-renders
export const CaseStudyCard = React.memo(CaseStudyCardComponent);
