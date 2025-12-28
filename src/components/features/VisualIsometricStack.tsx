import React from 'react';
import { Database, Cpu, Layout, Server } from 'lucide-react';

export const VisualIsometricStack: React.FC = () => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950/50 border border-zinc-800 rounded-xl relative group">
      {/* Background Grid */}
      <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
      }}></div>

      <div className="relative w-64 h-64 transition-transform duration-500 ease-out" 
           style={{ 
             transform: 'perspective(1000px) rotateX(60deg) rotateZ(-45deg)',
             transformStyle: 'preserve-3d'
           }}>
        
        {/* Layer 1: Database (Bottom) */}
        <div className="absolute inset-0 bg-zinc-900 border border-zinc-700 shadow-xl flex items-center justify-center transition-all duration-500 group-hover:-translate-z-12"
             style={{ transform: 'translateZ(-40px)' }}>
          <div className="text-zinc-600 flex flex-col items-center rotate-45 transform -rotate-x-0">
             <Database size={32} />
             <span className="text-xs font-mono mt-2">CMS / DATA</span>
          </div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Layer 2: Logic (Middle) */}
        <div className="absolute inset-0 bg-orange-900/20 border border-sonic-orange/30 shadow-xl flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover:translate-z-0"
             style={{ transform: 'translateZ(20px)' }}>
           <div className="text-sonic-orange flex flex-col items-center">
             <Cpu size={32} />
             <span className="text-xs font-mono mt-2">REACT LOGIC</span>
          </div>
        </div>

        {/* Layer 3: UI (Top) */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black border border-white/20 shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:translate-z-12"
             style={{ transform: 'translateZ(80px)' }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-sonic-orange/10 to-purple-500/10"></div>
          
          <div className="relative text-white flex flex-col items-center bg-black/50 p-4 rounded-lg border border-white/10 backdrop-blur-md">
             <Layout size={32} className="text-purple-400" />
             <div className="h-2 w-16 bg-zinc-700 rounded mt-3"></div>
             <div className="h-2 w-10 bg-zinc-700 rounded mt-2"></div>
             <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Connecting Lines (Visual Only) */}
          <div className="absolute -bottom-8 -right-8 text-xs text-zinc-500 font-mono">
            UI INTERFACE
          </div>
        </div>
        
      </div>
      
      <div className="absolute bottom-6 text-center w-full">
         <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Full Stack Architecture</p>
      </div>
    </div>
  );
};