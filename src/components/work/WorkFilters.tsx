import React, { useState } from 'react';

export function WorkFilters() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filters = [
    { id: 'all', label: 'Alle' },
    { id: 'web', label: 'Websites' },
    { id: 'mvp', label: 'MVPs' },
    { id: 'ux', label: 'UX Fixes' }
  ];

  return (
    <div className="work-filters flex gap-4 overflow-x-auto pb-4 mb-12">
      {filters.map(f => (
        <button
          key={f.id}
          className={`filter-button px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
            activeFilter === f.id 
              ? 'bg-black text-white' 
              : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
          }`}
          onClick={() => setActiveFilter(f.id)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

