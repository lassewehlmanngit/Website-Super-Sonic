import React from 'react';

interface TrustBarProps {
  items: {
    icon: string;
    text: string;
  }[];
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="trust-bar bg-zinc-50 border-b border-zinc-100 py-3 overflow-x-auto">
      <div className="container mx-auto flex justify-around md:justify-center gap-8 md:gap-16 px-4 min-w-max md:min-w-0">
        {items.map((item, i) => (
          <div key={i} className="trust-item flex items-center gap-2 text-zinc-600 whitespace-nowrap">
            <span className="icon text-lg">{item.icon}</span>
            <span className="text text-sm font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

