import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, User, Target, Palette, Key, Video } from 'lucide-react';
import { FormSuccess } from './FormSuccess';

interface LeadFormProps {
  lang: 'de' | 'en';
}

interface FormData {
  // Step 1: Basis
  name: string;
  email: string;
  currentWebsite: string;
  // Step 2: Plan
  goals: string[];
  // Step 3: Style
  inspirations: string;
  features: string[];
  // Step 4: Eigentum
  ownership: string;
  // Step 5: Testimonial
  testimonial: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  currentWebsite: '',
  goals: [],
  inspirations: '',
  features: [],
  ownership: '',
  testimonial: '',
};

export const LeadForm: React.FC<LeadFormProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;

  const stepIcons = [User, Target, Palette, Key, Video];
  const stepLabels = isDe 
    ? ['Basis', 'Plan', 'Style', 'Eigentum', 'Testimonial']
    : ['Basics', 'Plan', 'Style', 'Ownership', 'Testimonial'];

  const goalOptions = isDe ? [
    { value: 'image', label: 'Endlich mal modern aussehen (Image)' },
    { value: 'revenue', label: 'Mehr Anfragen/Kunden gewinnen (Umsatz)' },
    { value: 'recruiting', label: 'Neue Mitarbeiter anziehen (Recruiting)' },
    { value: 'independence', label: 'Meinen alten Agentur-Vertrag kündigen (Unabhängigkeit)' },
  ] : [
    { value: 'image', label: 'Finally look modern (Image)' },
    { value: 'revenue', label: 'Get more inquiries/customers (Revenue)' },
    { value: 'recruiting', label: 'Attract new employees (Recruiting)' },
    { value: 'independence', label: 'Cancel my old agency contract (Independence)' },
  ];

  const featureOptions = isDe ? [
    { value: 'contact', label: 'Kontaktformular' },
    { value: 'team', label: 'Team-Vorstellung' },
    { value: 'portfolio', label: 'Portfolio/Referenzen' },
    { value: 'careers', label: 'Karriere-Bereich' },
    { value: 'blog', label: 'Blog' },
  ] : [
    { value: 'contact', label: 'Contact form' },
    { value: 'team', label: 'Team presentation' },
    { value: 'portfolio', label: 'Portfolio/References' },
    { value: 'careers', label: 'Careers section' },
    { value: 'blog', label: 'Blog' },
  ];

  const handleCheckboxChange = (field: 'goals' | 'features', value: string) => {
    setFormData(prev => {
      const current = prev[field];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== '' && formData.email.trim() !== '';
      case 2:
        return formData.goals.length > 0;
      case 3:
        return true; // Optional step
      case 4:
        return formData.ownership !== '';
      case 5:
        return formData.testimonial !== '';
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <section id="form" className="fluid-section bg-white">
        <div className="container-responsive max-w-2xl mx-auto">
          <FormSuccess lang={lang} />
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="fluid-section bg-white">
      <div className="container-responsive max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight mb-4">
            {isDe ? "Teste uns, bevor du uns buchst." : "Test us before you book us."}
          </h2>
          <p className="text-zinc-500 fluid-lg">
            {isDe 
              ? "In 2 Minuten zu deinem kostenlosen Design-Entwurf."
              : "Get your free design draft in 2 minutes."}
          </p>
        </div>

        {/* Intro text */}
        <div className="bg-zinc-50 rounded-2xl p-6 mb-8 reveal delay-100">
          <p className="text-zinc-600 fluid-sm leading-relaxed">
            {isDe 
              ? "5600€ ausgeben ohne zu wissen was du bekommst? Nicht mit uns. Wenn du unsicher bist, kannst du ein gratis Konzept anfragen um zu schauen, ob wir nur Mist erzählen, oder es wirklich drauf haben."
              : "Spend €5,600 without knowing what you'll get? Not with us. If you're unsure, you can request a free concept to see if we're just talking or actually know our stuff."}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 reveal delay-200">
          <div className="flex justify-between mb-4">
            {stepLabels.map((label, i) => {
              const StepIcon = stepIcons[i];
              const isActive = i + 1 === step;
              const isComplete = i + 1 < step;
              
              return (
                <div 
                  key={i} 
                  className={`flex flex-col items-center gap-2 ${
                    isActive ? 'text-sonic-orange' : isComplete ? 'text-sonic-orange' : 'text-zinc-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    isActive ? 'border-sonic-orange bg-sonic-orange/10' : 
                    isComplete ? 'border-sonic-orange bg-orange-50' : 'border-zinc-200 bg-white'
                  }`}>
                    {isComplete ? (
                      <Check size={18} />
                    ) : (
                      <StepIcon size={18} />
                    )}
                  </div>
                  <span className="fluid-xs font-medium hidden md:block">{label}</span>
                </div>
              );
            })}
          </div>
          <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-sonic-orange transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 shadow-sm">
          
          {/* Step 1: Basis */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="fluid-xl font-bold text-zinc-900">
                {isDe ? "Die Basis" : "The Basics"}
              </h3>
              
              <div>
                <label className="block fluid-sm font-medium text-zinc-700 mb-2">
                  {isDe ? "Wer bist du und was macht deine Firma?" : "Who are you and what does your company do?"}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={isDe ? "Name & kurzer Satz zum Business" : "Name & short sentence about your business"}
                  className="w-full p-4 border border-zinc-200 rounded-xl focus:outline-none focus:border-sonic-orange focus:ring-2 focus:ring-sonic-orange/20 fluid-base"
                />
              </div>

              <div>
                <label className="block fluid-sm font-medium text-zinc-700 mb-2">
                  {isDe ? "Wie erreichen wir dich?" : "How do we reach you?"}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={isDe ? "E-Mail Adresse" : "Email address"}
                  className="w-full p-4 border border-zinc-200 rounded-xl focus:outline-none focus:border-sonic-orange focus:ring-2 focus:ring-sonic-orange/20 fluid-base"
                />
              </div>

              <div>
                <label className="block fluid-sm font-medium text-zinc-700 mb-2">
                  {isDe ? "Hast du schon eine Website?" : "Do you already have a website?"}
                </label>
                <input
                  type="url"
                  value={formData.currentWebsite}
                  onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                  placeholder={isDe ? "Her mit dem Link (optional)" : "Share the link (optional)"}
                  className="w-full p-4 border border-zinc-200 rounded-xl focus:outline-none focus:border-sonic-orange focus:ring-2 focus:ring-sonic-orange/20 fluid-base"
                />
              </div>
            </div>
          )}

          {/* Step 2: Plan */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="fluid-xl font-bold text-zinc-900">
                {isDe ? "Der Plan" : "The Plan"}
              </h3>
              <p className="text-zinc-500 fluid-base">
                {isDe ? "Was ist dein Hauptziel mit der neuen Seite? (Mehrere Antworten möglich)" : "What's your main goal with the new site? (Multiple answers possible)"}
              </p>
              
              <div className="space-y-3">
                {goalOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${
                      formData.goals.includes(option.value)
                        ? 'border-sonic-orange bg-orange-50'
                        : 'border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.goals.includes(option.value)}
                      onChange={() => handleCheckboxChange('goals', option.value)}
                      className="w-5 h-5 text-sonic-orange rounded focus:ring-sonic-orange"
                    />
                    <span className="text-zinc-700 fluid-base">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Style */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="fluid-xl font-bold text-zinc-900">
                {isDe ? "Der Style-Check" : "The Style Check"}
              </h3>
              
              <div>
                <label className="block fluid-sm font-medium text-zinc-700 mb-2">
                  {isDe ? "Gibt es Vorbilder?" : "Any inspirations?"}
                </label>
                <textarea
                  value={formData.inspirations}
                  onChange={(e) => setFormData({ ...formData, inspirations: e.target.value })}
                  placeholder={isDe 
                    ? "Links von Websites die du feierst – oder von Konkurrenten, die du digital überholen willst."
                    : "Links to websites you love – or competitors you want to outperform digitally."}
                  rows={3}
                  className="w-full p-4 border border-zinc-200 rounded-xl focus:outline-none focus:border-sonic-orange focus:ring-2 focus:ring-sonic-orange/20 fluid-base"
                />
              </div>

              <div>
                <label className="block fluid-sm font-medium text-zinc-700 mb-2">
                  {isDe ? "Was muss unbedingt rein?" : "What must be included?"}
                </label>
                <div className="space-y-3">
                  {featureOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${
                        formData.features.includes(option.value)
                          ? 'border-sonic-orange bg-orange-50'
                          : 'border-zinc-200 hover:border-zinc-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.features.includes(option.value)}
                        onChange={() => handleCheckboxChange('features', option.value)}
                        className="w-5 h-5 text-sonic-orange rounded focus:ring-sonic-orange"
                      />
                      <span className="text-zinc-700 fluid-base">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Eigentum */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="fluid-xl font-bold text-zinc-900">
                {isDe ? "Die \"Eigentums-Frage\"" : "The \"Ownership Question\""}
              </h3>
              <p className="text-zinc-500 fluid-base">
                {isDe 
                  ? "Willst du die Seite am Ende wirklich besitzen oder weiter monatlich \"Miete\" für ein System zahlen, das dir nicht gehört?"
                  : "Do you want to truly own the site at the end or keep paying monthly \"rent\" for a system that doesn't belong to you?"}
              </p>
              
              <div className="space-y-3">
                <label
                  className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${
                    formData.ownership === 'full'
                      ? 'border-sonic-orange bg-orange-50'
                      : 'border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="ownership"
                    checked={formData.ownership === 'full'}
                    onChange={() => setFormData({ ...formData, ownership: 'full' })}
                    className="w-5 h-5 text-sonic-orange focus:ring-sonic-orange"
                  />
                  <span className="text-zinc-700 font-medium fluid-base">
                    {isDe ? "Ich will die volle Kontrolle und 100% Eigentum." : "I want full control and 100% ownership."}
                  </span>
                </label>

                <label
                  className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${
                    formData.ownership === 'doesnt-matter'
                      ? 'border-sonic-orange bg-orange-50'
                      : 'border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="ownership"
                    checked={formData.ownership === 'doesnt-matter'}
                    onChange={() => setFormData({ ...formData, ownership: 'doesnt-matter' })}
                    className="w-5 h-5 text-sonic-orange focus:ring-sonic-orange"
                  />
                  <span className="text-zinc-700 fluid-base">
                    {isDe ? "Ist mir eigentlich egal, solange es funktioniert." : "I don't really care, as long as it works."}
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Step 5: Testimonial */}
          {step === 5 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="fluid-xl font-bold text-zinc-900">
                {isDe ? "Der \"Testimonial-Deal\"" : "The \"Testimonial Deal\""}
              </h3>
              <p className="text-zinc-500 fluid-base">
                {isDe 
                  ? "Hand aufs Herz: Unser Preis von 5.600 € ist nur machbar, weil wir auf klassisches Marketing verzichten. Bist du bereit, uns nach dem Launch ein kurzes Video-Testimonial zu geben, wenn du mit der Arbeit zufrieden bist?"
                  : "Honestly: Our price of €5,600 is only possible because we skip traditional marketing. Are you willing to give us a short video testimonial after launch if you're happy with the work?"}
              </p>
              
              <div className="space-y-3">
                <label
                  className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${
                    formData.testimonial === 'yes'
                      ? 'border-sonic-orange bg-orange-50'
                      : 'border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="testimonial"
                    checked={formData.testimonial === 'yes'}
                    onChange={() => setFormData({ ...formData, testimonial: 'yes' })}
                    className="w-5 h-5 text-sonic-orange focus:ring-sonic-orange"
                  />
                  <span className="text-zinc-700 font-medium fluid-base">
                    {isDe ? "Klar, Ehrensache!" : "Sure, of course!"}
                  </span>
                </label>

                <label
                  className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${
                    formData.testimonial === 'discuss'
                      ? 'border-sonic-orange bg-orange-50'
                      : 'border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="testimonial"
                    checked={formData.testimonial === 'discuss'}
                    onChange={() => setFormData({ ...formData, testimonial: 'discuss' })}
                    className="w-5 h-5 text-sonic-orange focus:ring-sonic-orange"
                  />
                  <span className="text-zinc-700 fluid-base">
                    {isDe ? "Lass uns da erst nochmal drüber quatschen." : "Let's talk about that first."}
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-zinc-100">
            {step > 1 ? (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors fluid-base"
              >
                <ArrowLeft size={18} />
                {isDe ? "Zurück" : "Back"}
              </button>
            ) : (
              <div />
            )}

            {step < totalSteps ? (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-800 transition-colors fluid-base"
              >
                {isDe ? "Weiter" : "Next"}
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className="flex items-center gap-2 bg-sonic-orange text-white px-6 py-3 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#E64500] transition-colors fluid-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {isDe ? "Wird gesendet..." : "Sending..."}
                  </>
                ) : (
                  <>
                    {isDe ? "Ja, schickt mir den Gratis-Entwurf!" : "Yes, send me the free design!"}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center gap-6 mt-8 text-zinc-400 fluid-sm flex-wrap">
          <span className="flex items-center gap-1">
            <Check size={14} className="text-sonic-orange" />
            {isDe ? "Keine Kreditkarte nötig" : "No credit card needed"}
          </span>
          <span className="flex items-center gap-1">
            <Check size={14} className="text-sonic-orange" />
            {isDe ? "Kein Druck" : "No pressure"}
          </span>
          <span className="flex items-center gap-1">
            <Check size={14} className="text-sonic-orange" />
            {isDe ? "Antwort in 48-72h" : "Response in 48-72h"}
          </span>
        </div>
      </div>
    </section>
  );
};
