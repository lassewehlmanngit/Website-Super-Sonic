import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed rounded-full tracking-tight";
  
  const variants = {
    // Primary is now Sonic Orange (Brand Color)
    primary: "bg-sonic-orange text-white hover:bg-[#E64500] border border-transparent shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    // White is for dark backgrounds
    white: "bg-white text-black hover:bg-zinc-200 border border-transparent shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    secondary: "bg-zinc-200 text-black hover:bg-zinc-300 border border-transparent",
    outline: "bg-transparent text-current border border-zinc-300 hover:border-black",
    ghost: "bg-transparent text-zinc-500 hover:text-black hover:bg-zinc-100"
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};