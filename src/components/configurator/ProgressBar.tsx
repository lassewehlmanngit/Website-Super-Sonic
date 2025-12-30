import React from 'react';

export function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="progress-bar mb-8">
      <div className="progress-text text-sm text-zinc-500 mb-2">Schritt {current} von {total}</div>
      <div className="progress-track w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
        <div 
          className="progress-fill h-full bg-sonic-orange transition-all duration-500 ease-out" 
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}

