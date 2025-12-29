import React, { useState, useMemo, useCallback } from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Check, X, Clock, Zap, Hammer } from 'lucide-react';

interface Props {
  lang: 'de' | 'en';
}

export const TCOCalculator: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';

  const [years, setYears] = useState(5);
  const [traffic, setTraffic] = useState<'low' | 'medium' | 'high'>('medium');
  
  // Memoize calculations to prevent recalculation on every render
  const calculations = useMemo(() => {
    // Fixed hourly rate assumption for calculation consistency
    const hourlyRate = 100; 

    // Estimated Development Hours (The "Manual Labor" Factor)
    const agencyHours = 80;    // WordPress: Setup + Config + Plugins
    const webflowHours = 120;  // Webflow: Manual pixel pushing + Interactions
    const supersonicHours = 40; // Super Sonic: Code Reuse + Efficiency

    // Costs
    const agencyMaintenance = 150; // Monthly
    const agencyPlugins = 100; // Yearly
    
    const webflowMonthly = traffic === 'high' ? 200 : 49; // Business vs Enterprise assumption
    
    const supersonicMonthly = 19; // Render Team
    
    // Setup Cost Calculation (Hours * Rate)
    const agencySetup = agencyHours * hourlyRate;
    const webflowSetup = webflowHours * hourlyRate;
    const supersonicSetup = supersonicHours * hourlyRate; 

    // Calculations
    const agencyTotal = agencySetup + (agencyMaintenance * 12 * years) + (agencyPlugins * years);
    const webflowTotal = webflowSetup + (webflowMonthly * 12 * years);
    const supersonicTotal = supersonicSetup + (supersonicMonthly * 12 * years);

    const savings = agencyTotal - supersonicTotal;

    return {
      agencyHours,
      webflowHours,
      supersonicHours,
      agencySetup,
      webflowSetup,
      supersonicSetup,
      agencyMaintenance,
      agencyPlugins,
      webflowMonthly,
      supersonicMonthly,
      agencyTotal,
      webflowTotal,
      supersonicTotal,
      savings
    };
  }, [years, traffic]);

  // Memoize event handlers to prevent re-renders
  const handleYearsChange = useCallback((y: number) => {
    setYears(y);
  }, []);

  const handleTrafficChange = useCallback((t: 'low' | 'medium' | 'high') => {
    setTraffic(t);
  }, []);

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-black/5 shadow-xl max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-black mb-4 tracking-tight">
          {isDe ? "The Platform Cost Calculator" : "The Platform Cost Calculator"}
        </h3>
        <p className="text-zinc-500 text-lg">
          {isDe
           ? "Entwicklungskosten basierend auf Arbeitsstunden. Manuell vs. Effizient."
           : "Development costs based on hours. Manual labor vs. Efficiency."}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12 justify-center items-center flex-wrap">
        <div className="flex items-center gap-4">
            <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                {isDe ? "Laufzeit" : "Lifespan"}
            </label>
            <div className="flex gap-2">
                {[1, 3, 5, 10].map(y => (
                    <button
                        key={y}
                        onClick={() => handleYearsChange(y)}
                        className={`w-10 h-10 rounded-full font-bold transition-all ${years === y ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-400 hover:bg-zinc-200'}`}
                    >
                        {y}
                    </button>
                ))}
            </div>
        </div>

        <div className="h-8 w-px bg-zinc-200 hidden md:block"></div>

        <div className="flex items-center gap-4">
            <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                Traffic
            </label>
            <div className="flex gap-2 bg-zinc-100 p-1 rounded-full">
                {(['low', 'medium', 'high'] as const).map(t => (
                    <button
                        key={t}
                        onClick={() => handleTrafficChange(t)}
                        className={`px-4 py-1 rounded-full text-sm font-bold transition-all uppercase ${traffic === t ? 'bg-white text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* 1. WordPress Agency */}
          <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <h4 className="font-bold text-xl text-zinc-600 mb-2">WordPress Agency</h4>
              <div className="text-3xl font-bold text-zinc-400 mb-6">€{calculations.agencyTotal.toLocaleString()}</div>

              <ul className="space-y-3 text-sm text-zinc-500 mb-8">
                  <li className="flex justify-between">
                      <span>Setup ({calculations.agencyHours}h)</span>
                      <span className="font-mono">€{calculations.agencySetup.toLocaleString()}</span>
                  </li>
                  <li className="flex justify-between text-red-400">
                      <span>Maintenance ({years}y)</span>
                      <span className="font-mono">€{(calculations.agencyMaintenance * 12 * years).toLocaleString()}</span>
                  </li>
                   <li className="flex justify-between text-red-400">
                      <span>Plugins ({years}y)</span>
                      <span className="font-mono">€{(calculations.agencyPlugins * years).toLocaleString()}</span>
                  </li>
              </ul>
              <div className="flex items-center gap-2 text-red-500 text-sm font-bold bg-red-50 px-3 py-2 rounded-lg">
                  <Hammer size={16} /> Labor Intensive ({calculations.agencyHours}h)
              </div>
          </div>

          {/* 2. Webflow */}
           <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 opacity-80 hover:opacity-100 transition-all duration-500">
              <h4 className="font-bold text-xl text-zinc-600 mb-2">Webflow Agency</h4>
              <div className="text-3xl font-bold text-zinc-400 mb-6">€{calculations.webflowTotal.toLocaleString()}</div>

              <ul className="space-y-3 text-sm text-zinc-500 mb-8">
                  <li className="flex justify-between">
                      <span>Setup ({calculations.webflowHours}h)</span>
                      <span className="font-mono">€{calculations.webflowSetup.toLocaleString()}</span>
                  </li>
                  <li className="flex justify-between text-red-400">
                      <span>Subscription ({years}y)</span>
                      <span className="font-mono">€{(calculations.webflowMonthly * 12 * years).toLocaleString()}</span>
                  </li>
                   <li className="flex justify-between text-zinc-300">
                      <span>Maintenance</span>
                      <span className="font-mono">€0</span>
                  </li>
              </ul>
               <div className="flex items-center gap-2 text-orange-500 text-sm font-bold bg-orange-50 px-3 py-2 rounded-lg">
                  <Hammer size={16} /> Very High Labor ({calculations.webflowHours}h)
              </div>
          </div>

          {/* 3. Super Sonic (Winner) */}
          <div className="p-8 rounded-3xl bg-black text-white border border-zinc-800 shadow-2xl scale-105 relative z-10">
              <div className="absolute top-0 right-0 bg-sonic-orange text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                  RECOMMENDED
              </div>
              <h4 className="font-bold text-xl text-white mb-2">Super Sonic Asset</h4>
              <div className="text-4xl font-bold text-white mb-6">€{calculations.supersonicTotal.toLocaleString()}</div>

              <ul className="space-y-3 text-sm text-zinc-400 mb-8">
                  <li className="flex justify-between text-white">
                      <span>Setup ({calculations.supersonicHours}h)</span>
                      <span className="font-mono">€{calculations.supersonicSetup.toLocaleString()}</span>
                  </li>
                  <li className="flex justify-between text-green-400">
                      <span>Hosting ({years}y)</span>
                      <span className="font-mono">€{(calculations.supersonicMonthly * 12 * years).toLocaleString()}</span>
                  </li>
                   <li className="flex justify-between text-green-400">
                      <span>Maintenance</span>
                      <span className="font-mono">€0</span>
                  </li>
              </ul>

              <div className="flex items-center gap-2 text-green-400 text-sm font-bold bg-green-900/30 px-3 py-2 rounded-lg border border-green-500/20 mb-4">
                  <Zap size={16} /> Efficient Code ({calculations.supersonicHours}h)
              </div>

              <div className="text-center">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">Total Savings</span>
                  <div className="text-2xl font-bold text-sonic-orange">€{calculations.savings.toLocaleString()}</div>
              </div>
          </div>

      </div>
    </div>
  );
};
