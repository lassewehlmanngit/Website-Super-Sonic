import React from 'react';
import { Check, X } from 'lucide-react';

interface Props {
  lang?: 'de' | 'en';
}

export const ComparisonTable: React.FC<Props> = ({ lang = 'de' }) => {
  const isDe = lang === 'de';

  const renderCell = (content: string | boolean, isHighlight: boolean = false) => {
    if (content === true) {
        if (isHighlight) {
            return <div className="flex justify-center"><div className="w-8 h-8 rounded-full bg-sonic-orange flex items-center justify-center"><Check className="text-white" size={16} /></div></div>;
        }
        return <div className="flex justify-center"><Check className="text-black" size={20} /></div>;
    }
    if (content === false) return <div className="flex justify-center"><X className="text-zinc-300" size={20} /></div>;
    return <span className={`text-sm font-medium ${isHighlight ? 'text-black font-bold' : 'text-zinc-600'}`}>{content}</span>;
  };

  const sections = [
    {
      title: isDe ? "Architektur & Eigentum" : "Core Architecture & Ownership",
      rows: [
        { 
            feature: isDe ? "Architektur" : "Architecture", 
            supersonic: "React / Vite", 
            webflow: "Proprietary", 
            wordpress: "Legacy PHP", 
            framer: "Locked" 
        },
        { 
            feature: isDe ? "Code Eigentum" : "Code Ownership", 
            supersonic: isDe ? "100% (Git Repo)" : "100% Yours", 
            webflow: "Locked", 
            wordpress: "Yours", 
            framer: "Locked" 
        },
        { 
            feature: "Google Speed Score", 
            supersonic: "99-100", 
            webflow: "Variable", 
            wordpress: "Slow", 
            framer: "Variable" 
        },
      ]
    },
    {
      title: isDe ? "Conversion & Wachstum" : "Lead Generation & Conversion",
      rows: [
        { 
            feature: isDe ? "Interaktive Rechner" : "Interactive Calculators", 
            supersonic: true, 
            webflow: false, 
            wordpress: "Plugins", 
            framer: false 
        },
        { 
            feature: isDe ? "PDF Generierung" : "Dynamic PDF Reports", 
            supersonic: true, 
            webflow: false, 
            wordpress: false, 
            framer: false 
        },
      ]
    }
  ];

  return (
    <div className="w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-black/5">
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="grid grid-cols-5 gap-4 mb-8 border-b border-zinc-100 pb-6">
            <div className="col-span-1"></div>
            
            {/* Super Sonic Column */}
            <div className="col-span-1 text-center">
                <div className="inline-block bg-zinc-100 text-zinc-500 text-[10px] font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-widest">Recommended</div>
                <h4 className="font-bold text-xl tracking-tight text-sonic-orange">Super Sonic.</h4>
            </div>

            <div className="col-span-1 text-center pt-8 opacity-50">
              <h4 className="font-bold text-lg">Webflow</h4>
            </div>
            <div className="col-span-1 text-center pt-8 opacity-50">
              <h4 className="font-bold text-lg">WordPress</h4>
            </div>
            <div className="col-span-1 text-center pt-8 opacity-50">
              <h4 className="font-bold text-lg">Framer</h4>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-6 pl-4">
                    {section.title}
                </h3>
                <div className="space-y-2">
                  {section.rows.map((row, rIdx) => (
                    <div key={rIdx} className="grid grid-cols-5 gap-4 items-center py-4 px-4 rounded-2xl hover:bg-zinc-50 transition-colors group">
                      <div className="col-span-1 text-sm font-bold text-black">
                        {row.feature}
                      </div>
                      
                      {/* Super Sonic Cell */}
                      <div className="col-span-1 text-center bg-zinc-50 py-4 rounded-xl shadow-sm border border-zinc-100 transform group-hover:scale-105 transition-transform">
                        {renderCell(row.supersonic, true)}
                      </div>

                      <div className="col-span-1 text-center">
                        {renderCell(row.webflow)}
                      </div>
                      <div className="col-span-1 text-center">
                        {renderCell(row.wordpress)}
                      </div>
                      <div className="col-span-1 text-center">
                        {renderCell(row.framer)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};