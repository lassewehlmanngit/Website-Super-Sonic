import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Server, Leaf, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const location = useLocation();
  const isDe = location.pathname.startsWith('/de');

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = isDe ? [
    { label: 'Vergleich', anchor: '#comparison' },
    { label: 'Über Uns', anchor: '#ceo-letter' },
    { label: 'Projekte', anchor: '#case-studies' },
    { label: 'FAQ', anchor: '#faq' },
    { label: 'Kontakt', anchor: '#form' },
  ] : [
    { label: 'Comparison', anchor: '#comparison' },
    { label: 'About Us', anchor: '#ceo-letter' },
    { label: 'Projects', anchor: '#case-studies' },
    { label: 'FAQ', anchor: '#faq' },
    { label: 'Contact', anchor: '#form' },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
             <div className="text-2xl font-bold tracking-tighter mb-4">Super Sonic<span className="text-sonic-orange">.</span></div>
             <div className="text-zinc-500 text-sm max-w-xs leading-relaxed mb-4">
               {isDe 
                 ? "Webseiten für den Mittelstand. 14 Tage Lieferzeit, Festpreis, 100% Eigentum."
                 : "Websites for SMBs. 14 days delivery, fixed price, 100% ownership."}
             </div>
             <a 
               href="mailto:hello@supersonic.design" 
               className="inline-flex items-center gap-2 text-sonic-orange hover:underline text-sm"
             >
               <Mail size={14} />
               hello@supersonic.design
             </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">{isDe ? "Navigation" : "Navigation"}</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.anchor}
                  onClick={(e) => handleAnchorClick(e, link.anchor)}
                  className="text-zinc-400 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">{isDe ? "Rechtliches" : "Legal"}</h4>
            <div className="flex flex-col gap-2">
              <Link to={`/${isDe ? 'de' : 'en'}/impressum`} className="text-zinc-400 hover:text-white transition-colors text-sm">
                  {isDe ? 'Impressum' : 'Imprint'}
              </Link>
              <Link to={`/${isDe ? 'de' : 'en'}/${isDe ? 'datenschutz' : 'privacy'}`} className="text-zinc-400 hover:text-white transition-colors text-sm">
                  {isDe ? 'Datenschutz' : 'Privacy'}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 gap-4">
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Super Sonic Prototypes Pte. Ltd.
          </div>
          <div className="text-zinc-600 text-sm">
            {isDe ? "Einmal zahlen. Für immer besitzen." : "You pay once. You own it forever."}
          </div>
        </div>

        {/* LocalBusiness Schema Helper */}
        <div className="hidden">
          <span itemProp="priceRange">€€€</span>
          <span itemProp="areaServed">DACH / Germany</span>
        </div>
      </div>
    </footer>
  );
};
