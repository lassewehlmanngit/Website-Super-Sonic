import React from 'react';
import { Database, Layout, Lock, Zap } from 'lucide-react';

export const TechStackMatrix: React.FC = () => {
  const stack = [
    { category: "Frontend", items: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"], icon: Layout },
    { category: "Backend / CMS", items: ["React Router (SPA)", "Sanity.io", "Supabase", "Cloud Functions"], icon: Database },
    { category: "Performance", items: ["Global CDN", "Client-Side Caching", "Sharp (Image Opt)", "Lazy Loading"], icon: Zap },
    { category: "Security & SEO", items: ["Zod Validation", "JSON-LD Schema", "CSP Headers", "Auth.js"], icon: Lock }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stack.map((group, idx) => (
        <div key={idx} className="bg-white p-10 rounded-[2.5rem] hover:shadow-xl transition-shadow border border-black/5">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-zinc-50 rounded-xl text-sonic-orange">
                <group.icon size={24} />
            </div>
            <h4 className="text-xl font-bold text-black tracking-tight">{group.category}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item, i) => (
              <span key={i} className="px-4 py-2 bg-zinc-50 text-zinc-600 text-sm rounded-full font-medium border border-zinc-100">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};