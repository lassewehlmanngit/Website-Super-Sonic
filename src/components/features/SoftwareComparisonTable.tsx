import React from 'react';
import { Check, X, Minus } from 'lucide-react';

interface Props {
  lang?: 'de' | 'en';
}

export const SoftwareComparisonTable: React.FC<Props> = ({ lang = 'de' }) => {
  const isDe = lang === 'de';

  const renderCell = (content: string | boolean | null, isHighlight: boolean = false) => {
    if (content === true) {
        if (isHighlight) {
            return <div className="flex justify-center"><div className="w-8 h-8 rounded-full bg-sonic-orange flex items-center justify-center"><Check className="text-white" size={16} /></div></div>;
        }
        return <div className="flex justify-center"><Check className="text-black" size={20} /></div>;
    }
    if (content === false) return <div className="flex justify-center"><X className="text-zinc-300" size={20} /></div>;
    if (content === null) return <div className="flex justify-center"><Minus className="text-zinc-200" size={20} /></div>;
    return <span className={`text-sm font-medium ${isHighlight ? 'text-black font-bold' : 'text-zinc-600'}`}>{content}</span>;
  };

  const sections = [
    {
      title: isDe ? "Geschwindigkeit & Kosten" : "Speed & Cost",
      rows: [
        { 
            feature: isDe ? "Time-to-Market" : "Time-to-Market", 
            supersonic: "2-4 Weeks", 
            agency: "3-6 Months", 
            nocode: "2-4 Weeks" 
        },
        { 
            feature: isDe ? "Kostenstruktur" : "Cost Structure", 
            supersonic: isDe ? "Fixpreis" : "Fixed Price", 
            agency: isDe ? "Teuer per Std." : "Expensive / Hr", 
            nocode: isDe ? "Monatlich" : "Monthly Sub" 
        },
        { 
            feature: isDe ? "Monatliche Gebühren" : "Monthly Fees", 
            supersonic: isDe ? "Keine (Hosting)" : "None (Hosting)", 
            agency: isDe ? "Wartungsvertrag" : "Retainer", 
            nocode: isDe ? "Steigend" : "Increasing" 
        }
      ]
    },
    {
      title: isDe ? "Eigentum & Kontrolle" : "Ownership & Control",
      rows: [
        { 
            feature: isDe ? "Source Code Ownership" : "Source Code Ownership", 
            supersonic: true, 
            agency: isDe ? "Oft Verhandlung" : "Often Negotiated", 
            nocode: false 
        },
        { 
            feature: isDe ? "Vendor Lock-in" : "Vendor Lock-in", 
            supersonic: false, 
            agency: isDe ? "Mittel" : "Medium", 
            nocode: isDe ? "Total (100%)" : "Total (100%)" 
        },
        { 
            feature: isDe ? "Hosting Freiheit" : "Hosting Freedom", 
            supersonic: true, 
            agency: true, 
            nocode: false 
        }
      ]
    },
    {
      title: isDe ? "Qualität & Zukunft" : "Quality & Future",
      rows: [
        { 
            feature: isDe ? "Technologie" : "Technology", 
            supersonic: "Modern React", 
            agency: "Variable", 
            nocode: "Proprietary" 
        },
        { 
            feature: isDe ? "Skalierbarkeit" : "Scalability", 
            supersonic: isDe ? "Unbegrenzt" : "Unlimited", 
            agency: isDe ? "Unbegrenzt" : "Unlimited", 
            nocode: isDe ? "Limitiert" : "Limited" 
        },
        { 
            feature: isDe ? "Performance" : "Performance", 
            supersonic: "High (Custom)", 
            agency: "Variable", 
            nocode: "Low (Generic)" 
        }
      ]
    }
  ];

  return (
    <div className="w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-black/5">
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 mb-8 border-b border-zinc-100 pb-6">
            <div className="col-span-1"></div>
            
            {/* Norddorf Column */}
            <div className="col-span-1 text-center">
                <div className="inline-block bg-zinc-100 text-zinc-500 text-[10px] font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-widest">
                    {isDe ? "Empfohlen" : "Recommended"}
                </div>
                <h4 className="font-bold text-xl tracking-tight text-sonic-orange">Norddorf.</h4>
            </div>

            <div className="col-span-1 text-center pt-8 opacity-50">
              <h4 className="font-bold text-lg">{isDe ? "Agentur" : "Agency"}</h4>
            </div>
            <div className="col-span-1 text-center pt-8 opacity-50">
              <h4 className="font-bold text-lg">No-Code / SaaS</h4>
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
                    <div key={rIdx} className="grid grid-cols-4 gap-4 items-center py-4 px-4 rounded-2xl hover:bg-zinc-50 transition-colors group">
                      <div className="col-span-1 text-sm font-bold text-black">
                        {row.feature}
                      </div>
                      
                      {/* Norddorf Cell */}
                      <div className="col-span-1 text-center bg-zinc-50 py-4 rounded-xl shadow-sm border border-zinc-100 transform group-hover:scale-105 transition-transform">
                        {renderCell(row.supersonic, true)}
                      </div>

                      <div className="col-span-1 text-center">
                        {renderCell(row.agency)}
                      </div>
                      <div className="col-span-1 text-center">
                        {renderCell(row.nocode)}
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

