import React from 'react';
import { cn } from '../../lib/utils';

type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6' 
  | 'body' 
  | 'body-sm' 
  | 'label' 
  | 'caption';

interface TypographyProps<T extends React.ElementType> {
  as?: T;
  variant?: TypographyVariant;
  className?: string;
  children: React.ReactNode;
}

export const Typography = <T extends React.ElementType = 'p'>({ 
  as, 
  variant = 'body', 
  className, 
  children, 
  ...props 
}: TypographyProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) => {
  
  const Component = as || getDefaultElement(variant);

  const styles = {
    h1: 'fluid-hero font-bold tracking-tight',
    h2: 'fluid-section-title font-bold tracking-tight',
    h3: 'fluid-subsection-title font-semibold',
    h4: 'fluid-card-title font-semibold',
    h5: 'fluid-card-title font-semibold',
    h6: 'fluid-card-title font-semibold',
    body: 'fluid-body',
    'body-sm': 'fluid-body-sm',
    label: 'fluid-label font-medium',
    caption: 'fluid-caption text-zinc-500'
  };

  return (
    <Component 
      className={cn(styles[variant], className)} 
      {...props}
    >
      {children}
    </Component>
  );
};

function getDefaultElement(variant: TypographyVariant): React.ElementType {
  switch (variant) {
    case 'h1': return 'h1';
    case 'h2': return 'h2';
    case 'h3': return 'h3';
    case 'h4': return 'h4';
    case 'h5': return 'h5';
    case 'h6': return 'h6';
    case 'label': return 'label';
    case 'caption': return 'span';
    default: return 'p';
  }
}
