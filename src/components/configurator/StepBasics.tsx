import React, { useState } from 'react';

interface StepProps {
  data: any;
  onNext: (data: any) => void;
  onBack?: () => void;
  onSubmit?: (data: any) => void;
}

export function StepBasics({ data, onNext }: StepProps) {
  const [serviceType, setServiceType] = useState(data.serviceType || '');
  const [industry, setIndustry] = useState(data.industry || '');

  return (
    <div className="step-content animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6">Zuerst, was brauchst du?</h2>
      
      <div className="radio-group space-y-4 mb-8">
        <label className={`radio-card flex items-center p-4 border rounded-xl cursor-pointer transition-all ${serviceType === 'website' ? 'border-sonic-orange bg-orange-50' : 'border-zinc-200 hover:border-zinc-300'}`}>
          <input 
            type="radio" 
            name="serviceType" 
            value="website"
            checked={serviceType === 'website'}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-5 h-5 text-sonic-orange focus:ring-sonic-orange"
          />
          <span className="radio-label ml-3 font-medium">Website</span>
        </label>
        
        <label className={`radio-card flex items-center p-4 border rounded-xl cursor-pointer transition-all ${serviceType === 'mvp' ? 'border-sonic-orange bg-orange-50' : 'border-zinc-200 hover:border-zinc-300'}`}>
          <input 
            type="radio" 
            name="serviceType" 
            value="mvp"
            checked={serviceType === 'mvp'}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-5 h-5 text-sonic-orange focus:ring-sonic-orange"
          />
          <span className="radio-label ml-3 font-medium">Software/MVP</span>
        </label>
        
        <label className={`radio-card flex items-center p-4 border rounded-xl cursor-pointer transition-all ${serviceType === 'ux' ? 'border-sonic-orange bg-orange-50' : 'border-zinc-200 hover:border-zinc-300'}`}>
          <input 
            type="radio" 
            name="serviceType" 
            value="ux"
            checked={serviceType === 'ux'}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-5 h-5 text-sonic-orange focus:ring-sonic-orange"
          />
          <span className="radio-label ml-3 font-medium">UX Audit</span>
        </label>
      </div>
      
      <div className="form-group mb-8">
        <label className="block text-sm font-bold mb-2">Was ist dein Business?</label>
        <select 
          value={industry} 
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full p-3 border border-zinc-200 rounded-lg focus:outline-none focus:border-sonic-orange"
        >
          <option value="">Wähle...</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="saas">SaaS</option>
          <option value="consulting">Beratung</option>
          <option value="agency">Agentur</option>
          <option value="other">Andere</option>
        </select>
      </div>
      
      <button 
        className="next-button w-full bg-black text-white font-bold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-800 transition-colors"
        onClick={() => onNext({ serviceType, industry })}
        disabled={!serviceType || !industry}
      >
        Weiter →
      </button>
    </div>
  );
}

