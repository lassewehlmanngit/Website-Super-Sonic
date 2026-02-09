import React, { useEffect, useState } from 'react';
import { Zap, Check, Clock, Pause, Flag, Loader2 } from 'lucide-react';

export const VisualVelocityTimeline: React.FC = () => {
  const [cycle, setCycle] = useState(0);
  
  // Traditional State
  const [tradProgress, setTradProgress] = useState(0);
  const [tradStatus, setTradStatus] = useState("Discovery");
  
  // Norddorf State
  const [superProgress, setSuperProgress] = useState(0);
  const [superStatus, setSuperStatus] = useState("Discovery");

  useEffect(() => {
    // 1. Reset
    setTradProgress(5);
    setSuperProgress(5);
    setTradStatus("Email Tag");
    setSuperStatus("Setup");

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    // 2. Initial Move (T+0.5s)
    timeouts.push(setTimeout(() => {
        setTradProgress(15);
        setSuperProgress(15);
        setTradStatus("Meeting...");
        setSuperStatus("Architecture");
    }, 500));

    // 3. divergence (T+1.5s)
    timeouts.push(setTimeout(() => {
        setTradStatus("Waiting for Quote");
        // Traditional stalls here
        
        setSuperStatus("Coding...");
        setSuperProgress(60);
    }, 1500));

    // 4. The Finish (T+2.2s)
    timeouts.push(setTimeout(() => {
        setSuperStatus("DEPLOYED");
        setSuperProgress(100);
    }, 2200));

    // 5. Traditional slight inch forward (T+3.5s) - still way behind
    timeouts.push(setTimeout(() => {
         setTradProgress(22);
         setTradStatus("Contracting...");
    }, 3500));

    // 6. Loop Reset (T+7s)
    timeouts.push(setTimeout(() => {
        setCycle(c => c + 1);
    }, 7000));

    return () => timeouts.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="w-full h-[380px] bg-white border border-zinc-100 rounded-[2.5rem] shadow-xl shadow-black/5 p-8 md:p-12 flex flex-col justify-center gap-12 relative overflow-hidden">
        
        {/* Background Grid Lines (Time) */}
        <div className="absolute inset-0 px-12 flex justify-between pointer-events-none">
            <div className="h-full w-px bg-zinc-100 dashed"></div> {/* Day 1 */}
            <div className="h-full w-px bg-zinc-100 dashed"></div> {/* Week 2 */}
            <div className="h-full w-px bg-zinc-100 dashed"></div> {/* Month 1 */}
        </div>
        
        {/* Bottom Labels */}
        <div className="absolute bottom-6 inset-x-12 flex justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300 font-bold">
            <span>Day 1</span>
            <span>Week 2</span>
            <span>Month 1</span>
        </div>

        {/* --- Track 1: Traditional Agency (The Villain) --- */}
        <div className="relative z-10">
            <div className="flex justify-between items-end mb-3">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-zinc-100 rounded-md text-zinc-400">
                        <Clock size={14} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">Traditional Agency</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">
                    {tradProgress < 30 ? <Loader2 size={12} className="animate-spin" /> : <Pause size={12} />}
                    {tradStatus}
                </div>
            </div>
            
            <div className="h-3 w-full bg-zinc-100 rounded-full overflow-hidden relative">
                <div 
                    className="h-full bg-zinc-300 transition-all duration-1000 ease-out rounded-full relative"
                    style={{ width: `${tradProgress}%` }}
                >
                    {/* Stall Indicator */}
                    {tradProgress > 10 && tradProgress < 30 && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border-2 border-zinc-300 rounded-full flex items-center justify-center">
                            <Pause size={8} className="fill-zinc-400 text-zinc-400" />
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* --- Track 2: Norddorf (The Hero) --- */}
        <div className="relative z-10">
            <div className="flex justify-between items-end mb-3">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-orange-50 rounded-md text-sonic-orange">
                        <Zap size={14} className="fill-sonic-orange" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-black font-bold">Norddorf</span>
                </div>
                <div className={`flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full border transition-all duration-300 ${superProgress === 100 ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-orange-50 text-sonic-orange border-orange-100'}`}>
                    {superProgress === 100 ? <Check size={12} /> : <Zap size={12} />}
                    {superStatus}
                </div>
            </div>
            
            <div className="h-4 w-full bg-zinc-100 rounded-full overflow-hidden relative shadow-inner">
                <div 
                    className="h-full bg-sonic-orange transition-all duration-[800ms] cubic-bezier(0.34, 1.56, 0.64, 1) rounded-full relative"
                    style={{ 
                        width: `${superProgress}%`,
                        boxShadow: superProgress === 100 ? '0 0 20px rgba(255, 77, 0, 0.4)' : 'none'
                    }}
                >
                    {/* Leading Edge Glow */}
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/40 to-transparent"></div>
                </div>
            </div>
        </div>

    </div>
  );
};