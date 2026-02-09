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
  title?: string; // For accessibility
  closeLabel?: string;
}

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  children,
  className,
  title = "Menu",
  closeLabel = "Close menu"
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
      const timer = setTimeout(() => setVisible(false), 300); // Match transition duration
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) return null;

  // Don't render anything if not visible and not open (after animation)
  if (!visible && !isOpen) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet Content */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "fixed bottom-0 left-0 right-0 bg-[#F3F3F3] z-[101] rounded-t-[2rem] flex flex-col overflow-hidden shadow-2xl",
          "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          "max-h-[90dvh] h-[90dvh]", // Default height, can be overridden by className
          isOpen ? "translate-y-0" : "translate-y-full",
          className
        )}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {/* Handle for visual affordance */}
        <div className="flex-none pt-4 pb-2 relative w-full flex justify-center" onClick={onClose}>
           <div className="w-12 h-1 bg-zinc-300 rounded-full cursor-pointer"></div>
        </div>

        {/* Close Button - Absolute positioning for flexibility */}
        <div className="absolute top-4 right-4 z-10">
           <Button
             variant="ghost"
             size="icon"
             onClick={onClose}
             aria-label={closeLabel}
             className="bg-white hover:bg-zinc-100 rounded-full shadow-sm h-10 w-10"
           >
             <X size={20} className="text-black" />
           </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto min-h-0 w-full">
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};
