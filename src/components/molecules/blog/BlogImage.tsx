import React from 'react';
import { cn } from '../../../lib/utils';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  fullWidth?: boolean;
}

export const BlogImage: React.FC<BlogImageProps> = ({
  src,
  alt,
  caption,
  className,
  fullWidth = false,
}) => {
  return (
    <figure className={cn("my-12", fullWidth ? "w-full max-w-5xl mx-auto" : "w-full", className)}>
      <div className="rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm text-zinc-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
