import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { StepBasics } from './StepBasics';
import { StepScope } from './StepScope';
import { StepDetails } from './StepDetails';
import { StepContact } from './StepContact';

export function ProjectConfigurator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleSubmit = (finalData: any) => {
    // In a real app, this would send data to an API
    console.log("Form Submitted:", finalData);
    alert("Anfrage gesendet! Wir melden uns in Kürze.");
  };

  return (
    <div className="configurator bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-black/5 max-w-3xl mx-auto">
      <ProgressBar current={step} total={4} />
      
      {step === 1 && (
        <StepBasics 
          data={formData} 
          onNext={(data) => {
            setFormData({...formData, ...data});
            setStep(2);
          }}
        />
      )}
      
      {step === 2 && (
        <StepScope 
          data={formData}
          onNext={(data) => {
            setFormData({...formData, ...data});
            setStep(3);
          }}
          onBack={() => setStep(1)}
        />
      )}
      
      {step === 3 && (
        <StepDetails 
          data={formData}
          onNext={(data) => {
            setFormData({...formData, ...data});
            setStep(4);
          }}
          onBack={() => setStep(2)}
        />
      )}
      
      {step === 4 && (
        <StepContact 
          data={formData}
          onBack={() => setStep(3)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

