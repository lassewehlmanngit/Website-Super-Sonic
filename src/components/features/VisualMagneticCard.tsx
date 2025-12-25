import React, { useRef, useState } from 'react';
import { MousePointerClick, TrendingUp, DollarSign } from 'lucide-react';

export const VisualMagneticCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 10 degrees - softer)
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;

    // Calculate glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setRotation({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="w-full h-[400px] flex items-center justify-center perspective-1000 bg-transparent"
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}>
      
      <div 
        ref={cardRef}
        className="relative w-80 h-48 rounded-[2rem] shadow-2xl transition-transform duration-100 ease-linear transform-style-3d cursor-default bg-white border border-black/5"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Card Content */}
        <div className="h-full w-full p-8 flex flex-col justify-between relative overflow-hidden rounded-[2rem]">
             {/* Dynamic Glare - lighter/softer */}
            <div 
                className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-30 z-20 bg-gradient-to-tr from-transparent to-white"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,1) 0%, transparent 60%)`
                }}
            />

            <div className="flex justify-between items-start z-10">
                <div>
                    <div className="text-zinc-400 text-xs uppercase font-mono mb-1 font-bold tracking-widest">Total Revenue</div>
                    <div className="text-3xl font-bold text-black tracking-tight flex items-center">
                        $124k <span className="text-sonic-orange text-sm ml-2 flex items-center bg-orange-50 px-2 py-0.5 rounded-full"><TrendingUp size={12} className="mr-1"/> +12%</span>
                    </div>
                </div>
                <div className="bg-zinc-50 p-3 rounded-full text-black border border-zinc-100 shadow-sm">
                    <DollarSign size={20} />
                </div>
            </div>

            <div className="space-y-3 z-10">
                <div className="flex justify-between text-xs text-zinc-400 font-medium">
                    <span>Quarterly Target</span>
                    <span className="text-black font-mono">85%</span>
                </div>
                <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-sonic-orange w-[85%] rounded-full"></div>
                </div>
            </div>
        </div>
        
        {/* Thickness layer for 3D feel */}
        <div className="absolute inset-0 rounded-[2rem] border-2 border-black/5 pointer-events-none translate-z-4"></div>
      </div>

      <div className="absolute bottom-8 flex items-center gap-2 text-zinc-400 text-xs font-medium">
         <MousePointerClick size={14} /> Hover to interact
      </div>
    </div>
  );
};