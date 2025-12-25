import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isDe = location.pathname.startsWith('/de');

  return (
    <footer className="bg-void text-white pb-20 pt-10 px-6 border-t border-zinc-800 relative z-20">
      <div className="max-w-[95%] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
           <div className="text-2xl font-bold tracking-tighter mb-4">Super Sonic.</div>
           <div className="text-zinc-500 text-sm max-w-xs leading-relaxed">
             © {new Date().getFullYear()} Super Sonic Prototypes. <br />
             Building digital assets for the AI age.
           </div>
        </div>

        <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <Link to={`/${isDe ? 'de' : 'en'}/${isDe ? 'impressum' : 'impressum'}`} className="hover:text-white transition-colors">
                {isDe ? 'Impressum' : 'Imprint'}
            </Link>
            <Link to={`/${isDe ? 'de' : 'en'}/${isDe ? 'datenschutz' : 'privacy'}`} className="hover:text-white transition-colors">
                {isDe ? 'Datenschutz' : 'Privacy'}
            </Link>
        </div>
      </div>
    </footer>
  );
};