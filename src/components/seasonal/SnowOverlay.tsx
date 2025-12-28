import React, { useMemo } from 'react';

export const SnowOverlay: React.FC = () => {
  // Generate random snowflakes
  const snowflakes = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      left: Math.random() * 100,
      animationDuration: 15 + Math.random() * 20, // 15-35s duration (slower/gentler)
      animationDelay: -(Math.random() * 20), // Start at random positions in the cycle
      opacity: 0.1 + Math.random() * 0.4, // 0.1 - 0.5 opacity (very subtle)
      size: 2 + Math.random() * 4 // 2px - 6px size
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden" style={{ contain: 'layout style paint' }}>
      {/* Snowflakes */}
      {snowflakes.map((flake, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-snow blur-[0.5px]" 
          style={{
            left: `${flake.left}%`,
            top: `-20px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`
          }}
        />
      ))}
      
      {/* Snow Hills at bottom - Fixed to screen for parallax effect over content */}
      {/* Reduced opacity to 0.2/0.3 to ensure it doesn't block footer content readability */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-50 opacity-20">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full preserve-3d" preserveAspectRatio="none">
             <path fill="#ffffff" fillOpacity="0.5" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             <path fill="#ffffff" fillOpacity="0.8" d="M0,256L60,240C120,224,240,192,360,192C480,192,600,224,720,240C840,256,960,256,1080,240C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};