import React, { useState, useMemo, useCallback } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export const SAMCalculator: React.FC = () => {
  const [traffic, setTraffic] = useState<number>(5000);
  const [conversionRate, setConversionRate] = useState<number>(1.5);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(150);

  // Memoize calculations to prevent recalculation on every render
  const result = useMemo(() => {
    const current = traffic * (conversionRate / 100) * avgOrderValue;
    const optimizedCR = conversionRate * 1.35; 
    const potential = traffic * (optimizedCR / 100) * avgOrderValue;
    
    return {
      current: Math.round(current),
      potential: Math.round(potential),
      lift: Math.round(potential - current)
    };
  }, [traffic, conversionRate, avgOrderValue]);

  // Memoize event handlers to prevent re-renders
  const handleTrafficChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTraffic(Number(e.target.value));
  }, []);

  const handleConversionRateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setConversionRate(Number(e.target.value));
  }, []);

  const handleAvgOrderValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAvgOrderValue(Number(e.target.value));
  }, []);

  return (
    <div className="w-full bg-white border border-black/5 p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
      
      <div className="flex items-center justify-between mb-12">
        <div>
          <h3 className="text-2xl font-bold text-black flex items-center gap-2 tracking-tight">
            Revenue Simulator
          </h3>
          <p className="text-zinc-500 text-sm mt-1">Estimate the impact of UX Engineering</p>
        </div>
        <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-sonic-orange">
             <Calculator size={24} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div className="space-y-4">
          <div className="flex justify-between">
             <label className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Monthly Traffic</label>
             <div className="font-mono text-black font-bold">{traffic.toLocaleString()}</div>
          </div>
          <input 
            type="range" 
            min="1000" 
            max="100000" 
            step="1000" 
            value={traffic}
            onChange={handleTrafficChange}
            className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-sonic-orange"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
            <label className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Conv. Rate (%)</label>
            <input 
                type="number" 
                value={conversionRate}
                onChange={handleConversionRateChange}
                className="w-full bg-zinc-50 border border-zinc-200 text-black px-4 py-3 rounded-xl focus:ring-2 focus:ring-sonic-orange outline-none font-mono"
            />
            </div>

            <div className="space-y-2">
            <label className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Deal Value (€)</label>
            <input 
                type="number" 
                value={avgOrderValue}
                onChange={handleAvgOrderValueChange}
                className="w-full bg-zinc-50 border border-zinc-200 text-black px-4 py-3 rounded-xl focus:ring-2 focus:ring-sonic-orange outline-none font-mono"
            />
            </div>
        </div>
      </div>

      <div className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100">
        <div className="grid grid-cols-2 gap-8 relative z-10">
          <div>
            <span className="text-zinc-400 text-xs block mb-2 font-mono uppercase">Current Revenue</span>
            <span className="text-3xl font-bold tracking-tighter text-zinc-300">€{result.current.toLocaleString()}</span>
          </div>
          <div>
            <span className="text-black text-xs block mb-2 font-mono uppercase">Projected Revenue</span>
            <span className="text-3xl font-bold tracking-tighter text-black">€{result.potential.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sonic-orange">
                <TrendingUp size={20} />
                <span className="text-lg font-bold">+€{result.lift.toLocaleString()} <span className="text-zinc-400 text-sm font-normal">/ mo</span></span>
            </div>
        </div>
      </div>
    </div>
  );
};