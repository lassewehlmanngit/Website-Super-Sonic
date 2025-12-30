import React, { useState } from 'react';

interface StepProps {
  data: any;
  onNext: (data: any) => void;
  onBack?: () => void;
}

export function StepDetails({ data, onNext, onBack }: StepProps) {
  const [requirements, setRequirements] = useState('');
  const [timeline, setTimeline] = useState('');

  return (
    <div className="step-content animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6">Noch ein paar Details...</h2>
      
      <div className="form-group mb-6">
        <label className="block text-sm font-bold mb-2">Besondere Anforderungen?</label>
        <textarea 
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Optional: Besondere Features, Integrationen, etc."
          rows={4}
          className="w-full p-3 border border-zinc-200 rounded-lg focus:outline-none focus:border-sonic-orange"
        />
      </div>
      
      <div className="form-group mb-8">
        <label className="block text-sm font-bold mb-3">Wann brauchst du das?</label>
        <div className="radio-group space-y-3">
          <label className="radio-inline flex items-center gap-3 cursor-pointer">
            <input 
              type="radio" 
              name="timeline" 
              value="rush"
              onChange={(e) => setTimeline(e.target.value)}
              className="text-sonic-orange focus:ring-sonic-orange"
            />
            <span>ASAP (72h Rush)</span>
          </label>
          <label className="radio-inline flex items-center gap-3 cursor-pointer">
            <input 
              type="radio" 
              name="timeline" 
              value="standard"
              onChange={(e) => setTimeline(e.target.value)}
              className="text-sonic-orange focus:ring-sonic-orange"
            />
            <span>2-4 Wochen (Standard)</span>
          </label>
          <label className="radio-inline flex items-center gap-3 cursor-pointer">
            <input 
              type="radio" 
              name="timeline" 
              value="flexible"
              onChange={(e) => setTimeline(e.target.value)}
              className="text-sonic-orange focus:ring-sonic-orange"
            />
            <span>Flexibel (Qualität zuerst)</span>
          </label>
        </div>
      </div>
      
      <div className="step-actions flex gap-4">
        <button className="back-button px-6 py-3 border border-zinc-200 rounded-lg font-medium hover:bg-zinc-50" onClick={onBack}>
          ← Zurück
        </button>
        <button 
          className="next-button flex-1 bg-black text-white font-bold py-3 rounded-lg hover:bg-zinc-800 transition-colors" 
          onClick={() => onNext({ requirements, timeline })}
        >
          Weiter →
        </button>
      </div>
    </div>
  );
}

