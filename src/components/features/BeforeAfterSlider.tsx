import React, { useState, useRef } from 'react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden cursor-col-resize select-none border border-black/5 shadow-2xl group bg-white"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* "Before" Layer (Wireframe) */}
      <div className="absolute inset-0 bg-[#F3F3F3] flex flex-col p-12">
        <div className="uppercase text-xs font-mono text-zinc-400 mb-8 tracking-widest font-bold">Raw Prototype</div>
        <div className="w-3/4 h-12 bg-zinc-200 rounded-lg mb-6 border-2 border-zinc-300 border-dashed"></div>
        <div className="w-1/2 h-6 bg-zinc-200 rounded-lg mb-12 border-2 border-zinc-300 border-dashed"></div>
        <div className="grid grid-cols-2 gap-6">
            <div className="h-48 bg-zinc-200 rounded-2xl border-2 border-zinc-300 border-dashed"></div>
            <div className="h-48 bg-zinc-200 rounded-2xl border-2 border-zinc-300 border-dashed"></div>
        </div>
      </div>

      {/* "After" Layer (Polished) */}
      <div 
        className="absolute inset-0 bg-white flex flex-col p-12 overflow-hidden border-l border-white/20"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="uppercase text-xs font-mono text-sonic-orange mb-8 tracking-widest font-bold">Production Build</div>
        <h2 className="text-5xl font-bold text-black mb-6 leading-tight tracking-tight">Functional <br/> Excellence.</h2>
        <p className="text-zinc-500 mb-12 text-lg">Deploy production-ready code in record time.</p>
        <div className="grid grid-cols-2 gap-6">
            <div className="h-48 bg-zinc-50 rounded-2xl border border-zinc-100 relative overflow-hidden group-hover:border-sonic-orange/20 transition-colors shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-50"></div>
            </div>
            <div className="h-48 bg-zinc-50 rounded-2xl border border-zinc-100 relative overflow-hidden group-hover:border-sonic-orange/20 transition-colors shadow-inner">
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-50"></div>
            </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] cursor-col-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border border-zinc-100">
            <div className="w-2 h-2 rounded-full bg-sonic-orange shadow-lg shadow-sonic-orange/50"></div>
        </div>
      </div>
    </div>
  );
};