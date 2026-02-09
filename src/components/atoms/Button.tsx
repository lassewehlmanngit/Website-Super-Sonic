import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children,
  ...props 
}, ref) => {
  
  const variants = {
    primary: "bg-sonic-orange text-white hover:bg-[#E64500] border border-transparent shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary: "bg-zinc-200 text-black hover:bg-zinc-300 border border-transparent",
    outline: "bg-transparent text-current border border-zinc-300 hover:border-black",
    ghost: "bg-transparent text-zinc-500 hover:text-black hover:bg-zinc-100",
    link: "text-sonic-orange hover:underline bg-transparent p-0 h-auto"
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4"
  };

  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed rounded-full tracking-tight";

  // Override sizes for link variant
  const sizeStyles = variant === 'link' ? '' : sizes[size];

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizeStyles, className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
