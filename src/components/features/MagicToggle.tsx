import React, { useState } from 'react';
import { Switch } from 'lucide-react';

interface Props {
  lang: 'de' | 'en';
}

export const MagicToggle: React.FC<Props> = ({ lang }) => {
  const [isReality, setIsReality] = useState(false);
  const isDe = lang === 'de';

  return (
    <div className="w-full relative min-h-[600px] flex items-center justify-center bg-zinc-100 rounded-[2.5rem] overflow-hidden border border-zinc-200">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-4xl p-8">
        
        {/* The Toggle Switch */}
        <div 
          onClick={() => setIsReality(!isReality)}
          className="cursor-pointer group relative bg-white rounded-full p-2 pr-6 shadow-sm border border-zinc-200 flex items-center gap-4 transition-all hover:shadow-md hover:scale-[1.02]"
        >
          <div className={`
             w-14 h-8 rounded-full transition-colors duration-500 ease-in-out relative
             ${isReality ? 'bg-black' : 'bg-zinc-200'}
          `}>
             <div className={`
                absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-500 ease-in-out
                ${isReality ? 'translate-x-6' : 'translate-x-0'}
             `}></div>
          </div>
          <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase select-none">
            {isReality ? (isDe ? 'REALITÄT AN' : 'REALITY ON') : (isDe ? 'IDEE' : 'IDEA')}
          </span>
        </div>

        {/* The Content Container */}
        <div className="relative w-[320px] h-[580px] perspective-1000">
             
             {/* MODE A: THE NAPKIN SKETCH (Absolute to overlap) */}
             <div 
               className={`
                 absolute inset-0 bg-[#fdfbf7] shadow-xl rounded-sm p-8 transition-all duration-700 ease-in-out transform origin-center border border-zinc-200
                 ${isReality ? 'opacity-0 scale-90 rotate-12 pointer-events-none translate-x-[200px]' : 'opacity-100 scale-100 rotate-[-2deg]'}
               `}
               style={{ 
                 fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", sans-serif',
                 boxShadow: '2px 4px 12px rgba(0,0,0,0.08)'
               }}
             >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500/10 backdrop-blur-sm border border-red-500/20"></div> {/* Tape */}
                
                <h3 className="text-2xl text-zinc-800 mb-8 font-bold leading-tight" style={{ letterSpacing: '-0.5px' }}>
                  {isDe ? "CRM Konzept" : "CRM Concept"}
                </h3>
                
                <div className="border-2 border-zinc-800 rounded-lg h-32 mb-4 flex items-center justify-center text-zinc-400 text-sm italic">
                  {isDe ? "[ Daten Tabelle ]" : "[ Data Table ]"}
                </div>

                <div className="space-y-3 mb-8">
                   <div className="h-4 bg-zinc-100 rounded w-3/4"></div>
                   <div className="h-4 bg-zinc-100 rounded w-1/2"></div>
                </div>

                <div className="mt-auto pt-8">
                   <div className="border-2 border-zinc-800 rounded-full py-3 text-center text-lg font-bold">
                     {isDe ? "Dashboard" : "Dashboard"}
                   </div>
                </div>
                
                <div className="absolute bottom-4 right-4 text-xs text-zinc-400 rotate-[-10deg]">
                   {isDe ? "(ca. so?)" : "(something like this?)"}
                </div>
             </div>


             {/* MODE B: THE REAL APP */}
             <div 
               className={`
                 absolute inset-0 bg-white shadow-2xl rounded-[3rem] border-[6px] border-zinc-900 overflow-hidden transition-all duration-700 ease-in-out transform origin-center
                 ${isReality ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-12 translate-x-[-200px] pointer-events-none'}
               `}
             >
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20"></div>

                {/* Dashboard Background */}
                <div className="h-full bg-zinc-50 relative p-6 pt-12">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h4 className="text-xl font-bold text-zinc-900">{isDe ? "Umsatz" : "Revenue"}</h4>
                            <p className="text-zinc-500 text-sm">{isDe ? "Letzte 30 Tage" : "Last 30 Days"}</p>
                        </div>
                        <div className="w-10 h-10 bg-white shadow-sm border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900">
                           <span className="text-lg">👤</span>
                        </div>
                    </div>

                    {/* Chart Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 mb-6">
                        <div className="flex items-end gap-2 h-32 mb-4">
                            <div className="w-1/5 bg-zinc-100 rounded-t-lg h-[40%]"></div>
                            <div className="w-1/5 bg-zinc-100 rounded-t-lg h-[60%]"></div>
                            <div className="w-1/5 bg-zinc-900 rounded-t-lg h-[85%] relative">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded">
                                    +24%
                                </div>
                            </div>
                            <div className="w-1/5 bg-zinc-100 rounded-t-lg h-[55%]"></div>
                            <div className="w-1/5 bg-zinc-100 rounded-t-lg h-[70%]"></div>
                        </div>
                        <div className="flex justify-between text-xs text-zinc-400 font-mono">
                            <span>MON</span>
                            <span>TUE</span>
                            <span>WED</span>
                            <span>THU</span>
                            <span>FRI</span>
                        </div>
                    </div>

                    {/* List Items */}
                    <div className="space-y-3">
                         <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">$</div>
                                <div className="text-sm font-medium">Stripe Payout</div>
                            </div>
                            <div className="text-sm font-bold text-zinc-900">+$1,240</div>
                         </div>
                         <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">S</div>
                                <div className="text-sm font-medium">SaaS Sub</div>
                            </div>
                            <div className="text-sm font-bold text-zinc-900">+$299</div>
                         </div>
                    </div>

                </div>

             </div>

        </div>

        <div className="text-center max-w-md">
            <p className="text-zinc-400 text-sm font-mono">
                {isDe 
                 ? "Vom Konzept zum Enterprise Tool in 72h." 
                 : "From concept to enterprise tool in 72h."}
            </p>
        </div>

      </div>
    </div>
  );
};

