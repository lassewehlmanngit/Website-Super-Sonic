import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogHeaderProps {
  title: string;
  client: string;
  industry: string;
  year: string;
  image?: string;
  backLink: string;
  backLabel: string;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  client,
  industry,
  year,
  image,
  backLink,
  backLabel,
}) => {
  return (
    <header className="relative w-full bg-zinc-900 text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Image/Overlay */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
        </div>
      )}

      <div className="container-responsive relative z-10 max-w-4xl mx-auto px-4 md:px-0">
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={16} />
          {backLabel}
        </Link>

        <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium text-white/70">
          <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
            {client}
          </span>
          <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
            {industry}
          </span>
          <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
            {year}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          {title}
        </h1>
      </div>
    </header>
  );
};
