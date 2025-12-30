import React from 'react';

interface StepProps {
  data: any;
  onNext: (data: any) => void;
  onBack?: () => void;
}

export function StepScope({ data, onNext, onBack }: StepProps) {
  return (
    <div className="step-content animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6">Scope-Fragen</h2>
      <p className="text-zinc-500 mb-8">
          Wir passen diese Fragen basierend auf Ihrer Auswahl ({data.serviceType}) an. (Placeholder content)
      </p>
      
      <div className="step-actions flex gap-4">
        <button className="back-button px-6 py-3 border border-zinc-200 rounded-lg font-medium hover:bg-zinc-50" onClick={onBack}>
          ← Zurück
        </button>
        <button className="next-button flex-1 bg-black text-white font-bold py-3 rounded-lg hover:bg-zinc-800 transition-colors" onClick={() => onNext({})}>
          Weiter →
        </button>
      </div>
    </div>
  );
}

