import React from 'react';

export const ChristmasBalls: React.FC = () => {
  // Switched to percentage strings for inline styles to ensure reliability
  const balls = [
    { color: 'bg-sonic-orange', height: 160, delay: '0s', left: '10%' },
    { color: 'bg-white', height: 240, delay: '0.2s', left: '20%' },
    { color: 'bg-zinc-800', height: 120, delay: '0.5s', left: '85%' },
    { color: 'bg-sonic-orange', height: 200, delay: '0.1s', left: '92%' },
  ];

  return (
    // Removed hidden md:block to ensure they are visible on all screen sizes (clipped if needed by parent)
    // Reduced z-index to be below text content
    <div className="absolute top-0 left-0 right-0 h-[400px] pointer-events-none z-10 overflow-visible">
      {balls.map((ball, i) => (
        <div 
            key={i} 
            className="absolute top-0 animate-elastic-drop origin-top"
            style={{ 
                left: ball.left,
                animationDelay: ball.delay 
            }}
        >
            <div className="animate-swing origin-top flex flex-col items-center">
                {/* String */}
                <div className="w-[1px] bg-zinc-600/50" style={{ height: `${ball.height}px` }}></div>
                
                {/* Ornament */}
                <div className={`w-12 h-12 rounded-full ${ball.color} shadow-lg relative flex items-center justify-center`}>
                        {/* Shine Reflection */}
                        <div className="absolute top-3 left-3 w-3 h-3 bg-white/20 rounded-full blur-[1px]"></div>
                        {/* Cap */}
                        <div className="absolute -top-1 w-4 h-2 bg-zinc-400 rounded-sm"></div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};