import React, { useState, useEffect } from 'react';

export const ChristmasLoader: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const times = [0, 800, 1600, 2800, 3800]; // Stage timings

    const t1 = setTimeout(() => setStage(1), times[1]);
    const t2 = setTimeout(() => setStage(2), times[2]);
    const t3 = setTimeout(() => setStage(3), times[3]); // Start exit
    const t4 = setTimeout(() => setIsVisible(false), times[4]); // Remove from DOM

    return () => {
        clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-void flex items-center justify-center transition-opacity duration-1000 ${stage === 3 ? 'animate-curtain-up pointer-events-none' : ''}`}>
      <div className="text-center">
        {stage === 0 && (
            <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tighter animate-fade-in-up">
                Ho-ho-ho.
            </h1>
        )}
        {stage === 1 && (
            <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tighter animate-fade-in-up">
                Christmas...
            </h1>
        )}
        {stage >= 2 && (
             <div className="animate-fade-in-up">
                <h1 className="text-sonic-orange text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                    Merry Christmas!
                </h1>
                <p className="text-zinc-500 text-xl font-mono uppercase tracking-widest">
                    Norddorf Edition
                </p>
             </div>
        )}
      </div>
    </div>
  );
};