import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { cn } from '../../lib/utils';

export interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  href?: string;
  to?: string;
  external?: boolean;
  variant?: 'default' | 'subtle' | 'nav' | 'footer';
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ 
  children, 
  className, 
  href, 
  to, 
  external, 
  variant = 'default',
  ...props 
}, ref) => {
  const isExternal = external || (href && (href.startsWith('http') || href.startsWith('mailto')));
  const target = isExternal ? '_blank' : undefined;
  const rel = isExternal ? 'noopener noreferrer' : undefined;

  const variants = {
    default: "text-sonic-orange hover:underline font-medium transition-colors",
    subtle: "text-zinc-500 hover:text-black transition-colors",
    nav: "text-sm font-medium text-black hover:text-sonic-orange transition-colors",
    footer: "text-zinc-400 hover:text-white transition-colors text-sm"
  };

  if (isExternal && href) {
    return (
      <a 
        ref={ref}
        href={href} 
        target={target} 
        rel={rel} 
        className={cn(variants[variant], className)} 
        {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <RouterLink 
        ref={ref}
        to={to} 
        className={cn(variants[variant], className)} 
        {...props}
      >
        {children}
      </RouterLink>
    );
  }

  // Fallback for anchor links or button-like links
  return (
    <a 
      ref={ref}
      href={href || '#'} 
      className={cn(variants[variant], className)} 
      {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
    >
      {children}
    </a>
  );
});

Link.displayName = "Link";
