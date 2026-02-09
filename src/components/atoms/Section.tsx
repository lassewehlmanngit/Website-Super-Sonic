import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: 'default' | 'sm' | 'lg' | 'none';
  background?: 'default' | 'paper' | 'void' | 'transparent';
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(({ 
  className, 
  spacing = 'default', 
  background = 'default',
  children, 
  ...props 
}, ref) => {
  
  const spacings = {
    default: "py-20 md:py-24",
    sm: "py-12 md:py-16",
    lg: "py-24 md:py-32",
    none: "py-0"
  };

  const backgrounds = {
    default: "bg-white",
    paper: "bg-paper",
    void: "bg-void text-white",
    transparent: "bg-transparent"
  };

  return (
    <section 
      ref={ref}
      className={cn(spacings[spacing], backgrounds[background], className)} 
      {...props}
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";
