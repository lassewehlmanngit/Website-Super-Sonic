import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../atoms/Button';

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
  closeLabel?: string;
  variant?: 'bottom' | 'full'; // Added variant prop
}

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  children,
  className,
  title = "Menu",
  closeLabel = "Close menu",
  variant = 'bottom' // Default to bottom for backward compatibility
}) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setVisible(false), 300);
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) return null;
  if (!visible && !isOpen) return null;

  // Define styles based on variant
  const variantStyles = variant === 'full' 
    ? "fixed inset-0 h-[100dvh] w-screen rounded-none border-none" // Full screen: No rounding, full height
    : "fixed bottom-0 left-0 right-0 max-h-[90dvh] h-[90dvh] rounded-t-[2rem]"; // Bottom sheet

  return createPortal(
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] transition-opacity duration-300", // Z-Index bumped to 2000
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet Container */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "bg-[#F3F3F3] z-[2001] flex flex-col overflow-hidden shadow-2xl", // Z-Index bumped to 2001
          "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          variantStyles,
          isOpen ? "translate-y-0" : "translate-y-full",
          className
        )}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {/* Drag Handle (Only for bottom sheet) */}
        {variant === 'bottom' && (
          <div className="flex-none pt-4 pb-2 relative w-full flex justify-center" onClick={onClose}>
             <div className="w-12 h-1 bg-zinc-300 rounded-full cursor-pointer"></div>
          </div>
        )}

        {/* Close Button (Top Right) */}
        <div className="absolute top-6 right-6 z-50">
           <Button
             variant="ghost"
             size="icon"
             onClick={onClose}
             aria-label={closeLabel}
             className="bg-white hover:bg-zinc-100 rounded-full shadow-md h-12 w-12 border border-zinc-100"
           >
             <X size={24} className="text-black" />
           </Button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto min-h-0 w-full">
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};
