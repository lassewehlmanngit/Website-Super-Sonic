import React from 'react';
import { Link, LinkProps } from '../atoms/Link';
import { cn } from '../../lib/utils';

interface SocialIconProps extends Omit<LinkProps, 'variant' | 'children'> {
  icon: React.ElementType;
  label: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ 
  icon: Icon, 
  label, 
  className,
  ...props 
}) => {
  return (
    <Link
      variant="subtle"
      className={cn(
        "inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
        "bg-zinc-100 hover:bg-sonic-orange hover:text-white",
        className
      )}
      aria-label={label}
      {...props}
    >
      <Icon size={20} />
    </Link>
  );
};
