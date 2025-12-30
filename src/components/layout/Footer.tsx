import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Server, Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isDe = location.pathname.startsWith('/de');

  return (
    <footer className="bg-void text-white pb-20 pt-10 border-t border-zinc-800 relative z-20">
      <div className="container-responsive">
        
        {/* Trust Badges Row */}
        <div className="flex flex-wrap gap-4 md:gap-8 mb-12 border-b border-zinc-800 pb-12">
            <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 text-xs md:text-sm text-zinc-400">
                <Server size={14} className="text-green-500" />
                <span>Hosted in Frankfurt 🇩🇪</span>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 text-xs md:text-sm text-zinc-400">
                <Leaf size={14} className="text-green-500" />
                <span>100% Green Energy</span>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 text-xs md:text-sm text-zinc-400">
                <ShieldCheck size={14} className="text-blue-500" />
                <span>100% DSGVO / GDPR</span>
            </div>
             <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 text-xs md:text-sm text-zinc-400">
                <span>No Tracking Cookies</span>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

          <div>
             <div className="text-2xl font-bold tracking-tighter mb-4">Super Sonic.</div>
             <div className="text-zinc-500 text-sm max-w-xs leading-relaxed">
               © {new Date().getFullYear()} Super Sonic Prototypes Pte. Ltd.<br />
               {isDe ? "Einmal zahlen. Für immer besitzen." : "You pay once. You own it forever."}
             </div>
             {/* LocalBusiness Schema Helper */}
             <div className="hidden">
                <span itemProp="priceRange">€€€</span>
                <span itemProp="areaServed">DACH / Germany</span>
             </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 text-sm font-medium text-zinc-400">
              <Link to={`/${isDe ? 'de' : 'en'}/impressum`} className="hover:text-white transition-colors">
                  {isDe ? 'Impressum' : 'Imprint'}
              </Link>
              <Link to={`/${isDe ? 'de' : 'en'}/datenschutz`} className="hover:text-white transition-colors">
                  {isDe ? 'Datenschutz' : 'Privacy'}
              </Link>
               <Link to="/business-facts" className="hover:text-white transition-colors">
                  Facts
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
