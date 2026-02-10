import React from 'react';
import { cn } from '../../../lib/utils';
import { Check } from 'lucide-react';

interface BlogListProps {
  items: string[];
  type?: 'ul' | 'ol';
  className?: string;
  icon?: React.ReactNode;
}

export const BlogList: React.FC<BlogListProps> = ({
  items,
  type = 'ul',
  className,
  icon = <Check size={18} className="text-green-600" />,
}) => {
  const ListTag = type;

  return (
    <ListTag className={cn("space-y-4 my-8 not-prose", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center">
            {type === 'ol' ? (
              <span className="text-sm font-bold text-zinc-600">{index + 1}</span>
            ) : (
              icon
            )}
          </div>
          <span className="text-lg text-zinc-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ListTag>
  );
};
