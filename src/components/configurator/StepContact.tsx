import React, { useState } from 'react';

interface StepProps {
  data: any;
  onBack?: () => void;
  onSubmit?: (data: any) => void;
}

// Quote calculation helper
function calculateQuote(data: any): { min: number; max: number } {
  if (data.serviceType === 'website') {
    return { min: 5800, max: 12000 };
  } else if (data.serviceType === 'mvp') {
    return { min: 12000, max: 35000 };
  } else if (data.serviceType === 'ux') {
    return { min: 2500, max: 8500 };
  }
  
  return { min: 5000, max: 15000 };
}

export function StepContact({ data, onBack, onSubmit }: StepProps) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const estimatedQuote = calculateQuote(data);

  return (
    <div className="step-content animate-fade-in-up">
      <div className="quote-display bg-zinc-50 p-6 rounded-xl text-center mb-8 border border-zinc-200">
        <h3 className="text-zinc-500 font-bold text-sm uppercase tracking-wider mb-2">Dein geschätztes Angebot:</h3>
        <div className="quote-range text-3xl font-bold text-black mb-2">
          €{estimatedQuote.min.toLocaleString()} - €{estimatedQuote.max.toLocaleString()}
        </div>
        <p className="quote-note text-xs text-zinc-400">
          (Finaler Preis hängt von deinen spezifischen Anforderungen ab)
        </p>
      </div>
      
      <h3 className="text-xl font-bold mb-6">Hol dein detailliertes Angebot:</h3>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        if(onSubmit) onSubmit({ ...data, ...contact });
      }} className="space-y-4">
        <div className="form-group">
          <label className="block text-sm font-bold mb-1">Name *</label>
          <input 
            type="text" 
            required
            value={contact.name}
            onChange={(e) => setContact({...contact, name: e.target.value})}
            className="w-full p-3 border border-zinc-200 rounded-lg"
          />
        </div>
        
        <div className="form-group">
          <label className="block text-sm font-bold mb-1">Email *</label>
          <input 
            type="email" 
            required
            value={contact.email}
            onChange={(e) => setContact({...contact, email: e.target.value})}
            className="w-full p-3 border border-zinc-200 rounded-lg"
          />
        </div>
        
        <div className="form-group">
          <label className="block text-sm font-bold mb-1">Firma (optional)</label>
          <input 
            type="text"
            value={contact.company}
            onChange={(e) => setContact({...contact, company: e.target.value})}
            className="w-full p-3 border border-zinc-200 rounded-lg"
          />
        </div>
        
        <div className="form-group">
          <label className="block text-sm font-bold mb-1">Telefon (optional)</label>
          <input 
            type="tel"
            value={contact.phone}
            onChange={(e) => setContact({...contact, phone: e.target.value})}
            className="w-full p-3 border border-zinc-200 rounded-lg"
          />
        </div>
        
        <div className="form-group checkbox flex items-start gap-3 mt-4">
          <input type="checkbox" name="newsletter" className="mt-1" />
          <span className="text-sm text-zinc-600">Sende mir kostenlose Resources: "7 Moderne Web-Gesetze"</span>
        </div>
        
        <div className="what-happens-next bg-blue-50 p-4 rounded-lg mt-6 text-sm text-blue-800">
          <h4 className="font-bold mb-2">Was passiert als Nächstes:</h4>
          <ol className="list-decimal pl-4 space-y-1">
            <li>Du erhältst ein Angebot per Email</li>
            <li>Wir vereinbaren einen 15min Call</li>
            <li>Du entscheidest, ob du starten willst</li>
          </ol>
          <p className="no-pressure mt-2 font-medium">Kein Druck. Keine Verpflichtung.</p>
        </div>
        
        <div className="step-actions flex gap-4 mt-8">
          <button type="button" className="back-button px-6 py-3 border border-zinc-200 rounded-lg font-medium hover:bg-zinc-50" onClick={onBack}>
            ← Zurück
          </button>
          <button type="submit" className="submit-button flex-1 bg-sonic-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Angebot erhalten →
          </button>
        </div>
      </form>
    </div>
  );
}

