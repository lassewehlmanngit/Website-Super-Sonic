import React from 'react';
import { Check, X, Minus } from 'lucide-react';

interface Props {
  lang?: 'de' | 'en';
}

const ComparisonTableComponent: React.FC<Props> = ({ lang = 'de' }) => {
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
      title: isDe ? "Architektur & Kontrolle" : "Architecture & Control",
      rows: [
        { 
            feature: isDe ? "Technologie Stack" : "Tech Stack", 
            supersonic: "React 18 + Vite", 
            webflow: "Proprietary", 
            wordpress: "Legacy PHP", 
            squarespace: "Proprietary" 
        },
        { 
            feature: isDe ? "Code Eigentum" : "Code Ownership", 
            supersonic: isDe ? "100% (Git Repo)" : "100% (Git Repo)", 
            webflow: isDe ? "Limitiert (Export)" : "Limited (Export)", 
            wordpress: isDe ? "100% (Datenbank)" : "100% (Database)", 
            squarespace: isDe ? "Keines (Miete)" : "None (Leased)" 
        },
        { 
            feature: isDe ? "Vendor Lock-in" : "Vendor Lock-in", 
            supersonic: isDe ? "Nein (Open Std.)" : "No (Open Std.)", 
            webflow: isDe ? "Hoch (CMS)" : "High (CMS)", 
            wordpress: isDe ? "Mittel (Hosting)" : "Medium (Hosting)", 
            squarespace: isDe ? "Total" : "Total" 
        },
        { 
            feature: isDe ? "CMS Typ" : "CMS Type", 
            supersonic: isDe ? "Headless (API-First)" : "Headless (API-First)", 
            webflow: isDe ? "Proprietär (Lock-in)" : "Proprietary (Lock-in)", 
            wordpress: "Traditional", 
            squarespace: isDe ? "Proprietär (Lock-in)" : "Proprietary (Lock-in)" 
        },
        { 
            feature: isDe ? "Hosting Flexibilität" : "Hosting Flexibility", 
            supersonic: isDe ? "Jeder Provider" : "Any Provider", 
            webflow: isDe ? "Nur Webflow" : "Webflow Only", 
            wordpress: isDe ? "PHP-Hosting" : "PHP Hosting", 
            squarespace: isDe ? "Nur Squarespace" : "Squarespace Only" 
        },
        { 
            feature: isDe ? "Mobile First Design" : "Mobile First Design", 
            supersonic: true, 
            webflow: true, 
            wordpress: isDe ? "Theme-abhängig" : "Theme Dependent", 
            squarespace: true 
        },
      ]
    },
    {
      title: isDe ? "Performance & Sicherheit" : "Performance & Security",
      rows: [
        { 
            feature: "Core Web Vitals", 
            supersonic: "100/100 (Static)", 
            webflow: "Variable", 
            wordpress: "Poor (Plugins)", 
            squarespace: "Low (JS Bloat)" 
        },
        { 
            feature: isDe ? "LCP (Largest Contentful Paint)" : "LCP (Largest Contentful Paint)", 
            supersonic: "< 1.2s", 
            webflow: "Variable", 
            wordpress: "> 2.5s", 
            squarespace: "> 3.0s" 
        },
        { 
            feature: isDe ? "CLS (Cumulative Layout Shift)" : "CLS (Cumulative Layout Shift)", 
            supersonic: "0.0", 
            webflow: "Variable", 
            wordpress: "High", 
            squarespace: "Medium" 
        },
        { 
            feature: isDe ? "Sicherheit" : "Security", 
            supersonic: isDe ? "Maximal (Statisch)" : "Max (Static)", 
            webflow: "Managed", 
            wordpress: isDe ? "Risiko (Plugins)" : "Risk (Plugins)", 
            squarespace: "Managed" 
        },
        { 
            feature: isDe ? "Wartungsaufwand" : "Maintenance", 
            supersonic: isDe ? "Null (Auto-Deploy)" : "Zero (Auto-Deploy)", 
            webflow: isDe ? "Null" : "Zero", 
            wordpress: isDe ? "Hoch (Updates)" : "High (Updates)", 
            squarespace: isDe ? "Null" : "Zero" 
        },
        { 
            feature: isDe ? "Cookie-freie Analytics" : "Cookie-free Analytics", 
            supersonic: true, 
            webflow: false, 
            wordpress: isDe ? "Plugin nötig" : "Needs Plugin", 
            squarespace: false 
        },
      ]
    },
    {
      title: isDe ? "SEO & Marketing" : "SEO & Marketing",
      rows: [
        { 
            feature: isDe ? "Technical SEO (JSON-LD)" : "Technical SEO (JSON-LD)", 
            supersonic: true, 
            webflow: isDe ? "Limitiert" : "Limited", 
            wordpress: isDe ? "Plugin nötig" : "Needs Plugin", 
            squarespace: false 
        },
        { 
            feature: isDe ? "Schema Markup" : "Schema Markup", 
            supersonic: isDe ? "Vollständig" : "Full", 
            webflow: isDe ? "Basis" : "Basic", 
            wordpress: isDe ? "Plugin nötig" : "Needs Plugin", 
            squarespace: isDe ? "Basis" : "Basic" 
        },
        { 
            feature: isDe ? "Programmatic SEO" : "Programmatic SEO", 
            supersonic: true, 
            webflow: isDe ? "Limitiert" : "Limited", 
            wordpress: true, 
            squarespace: false 
        },
        { 
            feature: isDe ? "Exit Intent Popups" : "Exit Intent Popups", 
            supersonic: true, 
            webflow: isDe ? "Limitiert" : "Limited", 
            wordpress: isDe ? "Plugin nötig" : "Needs Plugin", 
            squarespace: false 
        },
        { 
            feature: isDe ? "Lead Magnets (Kalkulatoren)" : "Lead Magnets (Calculators)", 
            supersonic: true, 
            webflow: false, 
            wordpress: isDe ? "Plugin nötig" : "Needs Plugin", 
            squarespace: false 
        },
        { 
            feature: isDe ? "A/B Testing" : "A/B Testing", 
            supersonic: isDe ? "Custom (Flexibel)" : "Custom (Flexible)", 
            webflow: isDe ? "Limitiert" : "Limited", 
            wordpress: isDe ? "Plugin nötig" : "Needs Plugin", 
            squarespace: false 
        },
      ]
    },
    {
      title: isDe ? "Wachstum & Logik" : "Growth & Logic",
      rows: [
        { 
            feature: isDe ? "Custom Logik (Apps)" : "Custom Logic (Apps)", 
            supersonic: isDe ? "Unbegrenzt" : "Unlimited", 
            webflow: isDe ? "Limitiert (No-Code)" : "Limited (No-Code)", 
            wordpress: isDe ? "Plugin Chaos" : "Plugin Chaos", 
            squarespace: isDe ? "Nein" : "No" 
        },
        { 
            feature: isDe ? "E-Commerce Integration" : "E-commerce Integration", 
            supersonic: isDe ? "Custom (Stripe/Shopify)" : "Custom (Stripe/Shopify)", 
            webflow: isDe ? "E-Commerce Plan" : "E-commerce Plan", 
            wordpress: "WooCommerce", 
            squarespace: isDe ? "E-Commerce Plan" : "E-commerce Plan" 
        },
        { 
            feature: isDe ? "API Integrationen" : "API Integrations", 
            supersonic: isDe ? "Unbegrenzt" : "Unlimited", 
            webflow: isDe ? "Limitiert" : "Limited", 
            wordpress: isDe ? "Plugin-abhängig" : "Plugin Dependent", 
            squarespace: isDe ? "Sehr limitiert" : "Very Limited" 
        },
        { 
            feature: isDe ? "Internationalisierung (i18n)" : "Internationalization (i18n)", 
            supersonic: true, 
            webflow: isDe ? "Limitiert" : "Limited", 
            wordpress: isDe ? "Plugin nötig" : "Needs Plugin", 
            squarespace: isDe ? "Limitiert" : "Limited" 
        },
        { 
            feature: isDe ? "Erweiterbarkeit" : "Extensibility", 
            supersonic: isDe ? "Unbegrenzt (React)" : "Unlimited (React)", 
            webflow: isDe ? "No-Code Limits" : "No-Code Limits", 
            wordpress: isDe ? "Plugin-abhängig" : "Plugin Dependent", 
            squarespace: isDe ? "Sehr limitiert" : "Very Limited" 
        },
      ]
    },
    {
      title: isDe ? "Compliance & Datenschutz" : "Compliance & Privacy",
      rows: [
        { 
            feature: isDe ? "DSGVO / GDPR" : "GDPR Compliance", 
            supersonic: isDe ? "Privacy-First" : "Privacy-First", 
            webflow: "Managed", 
            wordpress: isDe ? "Plugin nötig" : "Needs Plugin", 
            squarespace: "Managed" 
        },
        { 
            feature: isDe ? "Cookie-Banner" : "Cookie Banner", 
            supersonic: isDe ? "Optional (Minimal)" : "Optional (Minimal)", 
            webflow: isDe ? "Erforderlich" : "Required", 
            wordpress: isDe ? "Plugin nötig" : "Needs Plugin", 
            squarespace: isDe ? "Erforderlich" : "Required" 
        },
        { 
            feature: isDe ? "Privacy-First Analytics" : "Privacy-First Analytics", 
            supersonic: true, 
            webflow: false, 
            wordpress: isDe ? "Plugin nötig" : "Needs Plugin", 
            squarespace: false 
        },
        { 
            feature: isDe ? "Daten-Eigentum" : "Data Ownership", 
            supersonic: isDe ? "100% (Ihr Server)" : "100% (Your Server)", 
            webflow: isDe ? "Geteilt" : "Shared", 
            wordpress: isDe ? "100% (Ihr Server)" : "100% (Your Server)", 
            squarespace: isDe ? "Geteilt" : "Shared" 
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
                <div className="inline-block bg-zinc-100 text-zinc-500 text-[10px] font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-widest">
                    {isDe ? "Empfohlen" : "Recommended"}
                </div>
                <h4 className="font-bold text-xl tracking-tight text-sonic-orange">Super Sonic.</h4>
            </div>

            <div className="col-span-1 text-center pt-8 opacity-50">
              <h4 className="font-bold text-lg">Webflow</h4>
            </div>
            <div className="col-span-1 text-center pt-8 opacity-50">
              <h4 className="font-bold text-lg">WordPress</h4>
            </div>
            <div className="col-span-1 text-center pt-8 opacity-50">
              <h4 className="font-bold text-lg">Squarespace</h4>
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
                        {renderCell(row.squarespace)}
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

// Memoize to prevent unnecessary re-renders
export const ComparisonTable = React.memo(ComparisonTableComponent);
