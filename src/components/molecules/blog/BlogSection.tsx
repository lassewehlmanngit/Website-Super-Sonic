import React from 'react';
import { cn } from '../../../lib/utils';

interface BlogSectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  id?: string;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  children,
  title,
  className,
  id,
}) => {
  return (
    <section id={id} className={cn("py-12 md:py-16 px-4", className)}>
      <div className="max-w-3xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8 tracking-tight">
            {title}
          </h2>
        )}
        <div className="prose prose-lg prose-zinc max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
};
