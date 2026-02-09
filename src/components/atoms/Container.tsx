import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(({ 
  className, 
  size = 'default', 
  children, 
  ...props 
}, ref) => {
  
  const sizes = {
    default: "container-responsive",
    narrow: "container-responsive max-w-[var(--container-narrow)]",
    wide: "container-responsive max-w-[var(--container-wide)]",
    full: "w-full px-[var(--container-padding)]"
  };

  return (
    <div 
      ref={ref}
      className={cn(sizes[size], className)} 
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";
