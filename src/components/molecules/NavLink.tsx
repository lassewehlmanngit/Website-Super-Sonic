import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link, LinkProps } from '../atoms/Link';
import { cn } from '../../lib/utils';

export interface NavLinkProps extends LinkProps {
  active?: boolean;
  icon?: React.ElementType;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  to, 
  className, 
  active, 
  icon: Icon,
  children,
  ...props 
}) => {
  const location = useLocation();
  const isActive = active ?? (to ? location.pathname === to : false);

  return (
    <Link 
      to={to} 
      variant="nav" 
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300",
        isActive && "text-sonic-orange bg-sonic-orange/5",
        !isActive && "hover:bg-black/5 hover:text-sonic-orange",
        className
      )}
      {...props}
    >
      {Icon && <Icon size={16} />}
      {children}
    </Link>
  );
};
