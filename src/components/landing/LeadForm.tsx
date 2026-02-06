import React, { useState, useEffect, useRef, useId } from 'react';
import { ArrowRight, ArrowLeft, Check, User, Target, Palette, Key, Video, AlertCircle } from 'lucide-react';
import { FormSuccess } from './FormSuccess';

// ============================================
// TYPE DEFINITIONS
// ============================================

interface LeadFormProps {
  lang: 'de' | 'en' | 'ja';
}

// Strict union types for better type safety
type GoalValue = 'image' | 'revenue' | 'recruiting' | 'independence';
type FeatureValue = 'contact' | 'team' | 'portfolio' | 'careers' | 'blog';
type OwnershipValue = 'full' | 'doesnt-matter' | '';
type TestimonialValue = 'yes' | 'discuss' | '';

interface FormData {
  // Step 1: Basis
  name: string;
  email: string;
  currentWebsite: string;
  // Step 2: Plan
  goals: GoalValue[];
  // Step 3: Style
  inspirations: string;
  features: FeatureValue[];
  // Step 4: Eigentum
  ownership: OwnershipValue;
  // Step 5: Testimonial
  testimonial: TestimonialValue;
}

interface FormErrors {
  name?: string;
  email?: string;
  currentWebsite?: string;
  goals?: string;
  ownership?: string;
  testimonial?: string;
}

interface TouchedFields {
  name: boolean;
  email: boolean;
  currentWebsite: boolean;
  goals: boolean;
  ownership: boolean;
  testimonial: boolean;
}

// ============================================
// CONSTANTS
// ============================================

const GOAL_OPTIONS: { value: GoalValue; labelDe: string; labelEn: string; labelJa: string }[] = [
  { value: 'image', labelDe: 'Endlich mal modern aussehen (Image)', labelEn: 'Finally look modern (Image)', labelJa: 'ついにモダンな外観に（イメージ向上）' },
  { value: 'revenue', labelDe: 'Mehr Anfragen/Kunden gewinnen (Umsatz)', labelEn: 'Get more inquiries/customers (Revenue)', labelJa: 'お問い合わせ・顧客を増やす（売上向上）' },
  { value: 'recruiting', labelDe: 'Neue Mitarbeiter anziehen (Recruiting)', labelEn: 'Attract new employees (Recruiting)', labelJa: '新しい従業員を引き付ける（採用）' },
  { value: 'independence', labelDe: 'Meinen alten Agentur-Vertrag kündigen (Unabhängigkeit)', labelEn: 'Cancel my old agency contract (Independence)', labelJa: '古い制作会社との契約を解除（独立）' },
];

const FEATURE_OPTIONS: { value: FeatureValue; labelDe: string; labelEn: string; labelJa: string }[] = [
  { value: 'contact', labelDe: 'Kontaktformular', labelEn: 'Contact form', labelJa: 'お問い合わせフォーム' },
  { value: 'team', labelDe: 'Team-Vorstellung', labelEn: 'Team presentation', labelJa: 'チーム紹介' },
  { value: 'portfolio', labelDe: 'Portfolio/Referenzen', labelEn: 'Portfolio/References', labelJa: 'ポートフォリオ・実績' },
  { value: 'careers', labelDe: 'Karriere-Bereich', labelEn: 'Careers section', labelJa: '採用情報' },
  { value: 'blog', labelDe: 'Blog', labelEn: 'Blog', labelJa: 'ブログ' },
];

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  currentWebsite: '',
  goals: [],
  inspirations: '',
  features: [],
  ownership: '',
  testimonial: '',
};

const INITIAL_TOUCHED: TouchedFields = {
  name: false,
  email: false,
  currentWebsite: false,
  goals: false,
  ownership: false,
  testimonial: false,
};

const TOTAL_STEPS = 5;

// ============================================
// VALIDATION UTILITIES
// ============================================

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;

function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

function validateUrl(url: string): boolean {
  if (!url.trim()) return true; // Optional field
  return URL_REGEX.test(url.trim());
}

// ============================================
// COMPONENT
// ============================================

export const LeadForm: React.FC<LeadFormProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';
  const formId = useId();
  
  // Refs for focus management
  const stepContainerRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const announcerRef = useRef<HTMLDivElement>(null);
  
  // State
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>(INITIAL_TOUCHED);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Step configuration
  const stepIcons = [User, Target, Palette, Key, Video];
  const stepLabels = isJa 
    ? ['基本情報', 'プラン', 'スタイル', '所有権', '推薦']
    : isDe 
    ? ['Basis', 'Plan', 'Style', 'Eigentum', 'Testimonial']
    : ['Basics', 'Plan', 'Style', 'Ownership', 'Testimonial'];

  // ============================================
  // VALIDATION
  // ============================================

  const validateStep = (stepNumber: number): FormErrors => {
    const newErrors: FormErrors = {};

    switch (stepNumber) {
      case 1:
        if (!formData.name.trim()) {
          newErrors.name = isJa ? 'お名前を入力してください。' : isDe ? 'Bitte gib deinen Namen ein.' : 'Please enter your name.';
        }
        if (!formData.email.trim()) {
          newErrors.email = isJa ? 'メールアドレスを入力してください。' : isDe ? 'Bitte gib deine E-Mail ein.' : 'Please enter your email.';
        } else if (!validateEmail(formData.email)) {
          newErrors.email = isJa ? '有効なメールアドレスを入力してください。' : isDe ? 'Bitte gib eine gültige E-Mail ein.' : 'Please enter a valid email.';
        }
        if (formData.currentWebsite && !validateUrl(formData.currentWebsite)) {
          newErrors.currentWebsite = isJa ? '有効なURLを入力してください。' : isDe ? 'Bitte gib eine gültige URL ein.' : 'Please enter a valid URL.';
        }
        break;
      case 2:
        if (formData.goals.length === 0) {
          newErrors.goals = isJa ? '少なくとも1つの目標を選択してください。' : isDe ? 'Bitte wähle mindestens ein Ziel.' : 'Please select at least one goal.';
        }
        break;
      case 4:
        if (!formData.ownership) {
          newErrors.ownership = isJa ? 'オプションを選択してください。' : isDe ? 'Bitte wähle eine Option.' : 'Please select an option.';
        }
        break;
      case 5:
        if (!formData.testimonial) {
          newErrors.testimonial = isJa ? 'オプションを選択してください。' : isDe ? 'Bitte wähle eine Option.' : 'Please select an option.';
        }
        break;
    }

    return newErrors;
  };

  const isStepValid = (): boolean => {
    const stepErrors = validateStep(step);
    return Object.keys(stepErrors).length === 0;
  };

  // ============================================
  // EVENT HANDLERS
  // ============================================

  const handleFieldChange = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFieldBlur = (field: keyof TouchedFields) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Validate on blur
    const stepErrors = validateStep(step);
    if (stepErrors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: stepErrors[field as keyof FormErrors] }));
    }
  };

  const handleCheckboxChange = (field: 'goals' | 'features', value: GoalValue | FeatureValue) => {
    setFormData(prev => {
      const current = prev[field] as (GoalValue | FeatureValue)[];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
    
    // Clear error when user makes a selection
    if (field === 'goals' && errors.goals) {
      setErrors(prev => ({ ...prev, goals: undefined }));
    }
  };

  const handleNext = () => {
    // Mark all fields in current step as touched
    const touchedUpdate = { ...touched };
    if (step === 1) {
      touchedUpdate.name = true;
      touchedUpdate.email = true;
      touchedUpdate.currentWebsite = true;
    } else if (step === 2) {
      touchedUpdate.goals = true;
    } else if (step === 4) {
      touchedUpdate.ownership = true;
    }
    setTouched(touchedUpdate);

    // Validate
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      // Focus first error field
      const firstErrorField = document.querySelector('[aria-invalid="true"]') as HTMLElement;
      firstErrorField?.focus();
      return;
    }

    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      announceStepChange(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      announceStepChange(step - 1);
    }
  };

  const handleSubmit = async () => {
    // Final validation
    setTouched(prev => ({ ...prev, testimonial: true }));
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Announce success to screen readers
      if (announcerRef.current) {
        announcerRef.current.textContent = isJa 
          ? 'フォームが正常に送信されました！' 
          : isDe 
          ? 'Formular erfolgreich gesendet!' 
          : 'Form submitted successfully!';
      }
    } catch (error) {
      setSubmitError(isJa 
        ? '問題が発生しました。もう一度お試しください。' 
        : isDe 
        ? 'Etwas ist schiefgelaufen. Bitte versuche es erneut.' 
        : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Prevent form submission on Enter in text fields
    if (e.key === 'Enter' && e.target instanceof HTMLInputElement && e.target.type !== 'submit') {
      e.preventDefault();
      if (isStepValid()) {
        handleNext();
      }
    }
  };

  // ============================================
  // ACCESSIBILITY HELPERS
  // ============================================

  const announceStepChange = (newStep: number) => {
    if (announcerRef.current) {
      announcerRef.current.textContent = isJa 
        ? `ステップ ${newStep} / ${TOTAL_STEPS}: ${stepLabels[newStep - 1]}`
        : isDe 
        ? `Schritt ${newStep} von ${TOTAL_STEPS}: ${stepLabels[newStep - 1]}`
        : `Step ${newStep} of ${TOTAL_STEPS}: ${stepLabels[newStep - 1]}`;
    }
  };

  // Focus first field when step changes (but only after user interaction, not on mount)
  const hasInteracted = useRef(false);
  
  useEffect(() => {
    // Skip focus on initial mount to prevent auto-scroll
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      return;
    }
    
    const timer = setTimeout(() => {
      if (stepContainerRef.current) {
        const firstInput = stepContainerRef.current.querySelector<HTMLElement>(
          'input:not([type="hidden"]), textarea, button[role="radio"], input[type="checkbox"]'
        );
        // Use preventScroll to avoid scrolling the page when focusing
        firstInput?.focus({ preventScroll: true });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [step]);

  // ============================================
  // RENDER HELPERS
  // ============================================

  const getFieldError = (field: keyof FormErrors): string | undefined => {
    return touched[field as keyof TouchedFields] ? errors[field] : undefined;
  };

  const inputClassName = (field: keyof FormErrors) => {
    const hasError = getFieldError(field);
    return `w-full p-4 border rounded-xl focus:outline-none focus:ring-2 transition-colors fluid-base ${
      hasError 
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50' 
        : 'border-zinc-200 focus:border-sonic-orange focus:ring-sonic-orange/20'
    }`;
  };

  // ============================================
  // RENDER
  // ============================================

  if (isSubmitted) {
    return (
      <section id="form" className="fluid-section bg-white" aria-label={isJa ? "フォーム送信完了" : isDe ? "Formular gesendet" : "Form submitted"}>
        <div className="container-responsive max-w-2xl mx-auto">
          <FormSuccess lang={lang} />
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="fluid-section bg-white" aria-labelledby={`${formId}-title`}>
      {/* Screen reader announcer for live updates */}
      <div 
        ref={announcerRef}
        className="sr-only" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
      />

      <div className="container-responsive max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <h2 id={`${formId}-title`} className="fluid-section-title font-bold text-zinc-900 tracking-tight mb-4">
            {isJa ? "ご予約前にお試しください。" : isDe ? "Teste uns, bevor du uns buchst." : "Test us before you book us."}
          </h2>
          <p className="text-zinc-500 fluid-lg">
            {isJa 
              ? "2分で無料デザイン案を入手。"
              : isDe 
              ? "In 2 Minuten zu deinem kostenlosen Design-Entwurf."
              : "Get your free design draft in 2 minutes."}
          </p>
        </div>

        {/* Intro text */}
        <div className="bg-zinc-50 rounded-2xl p-6 mb-8 reveal delay-100">
          <p className="text-zinc-600 fluid-sm leading-relaxed">
            {isJa 
              ? "何が得られるかわからないまま92万円を支払う？私たちはそうしません。ご不安な場合は、無料のコンセプトをリクエストして、私たちが本当に実力があるかどうかをご確認いただけます。"
              : isDe 
              ? "5600€ ausgeben ohne zu wissen was du bekommst? Nicht mit uns. Wenn du unsicher bist, kannst du ein gratis Konzept anfragen um zu schauen, ob wir nur Mist erzählen, oder es wirklich drauf haben."
              : "Spend €5,600 without knowing what you'll get? Not with us. If you're unsure, you can request a free concept to see if we're just talking or actually know our stuff."}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 reveal delay-200" role="navigation" aria-label={isJa ? "フォームの進捗" : isDe ? "Formular Fortschritt" : "Form progress"}>
          <div className="flex justify-between mb-4">
            {stepLabels.map((label, i) => {
              const StepIcon = stepIcons[i];
              const stepNum = i + 1;
              const isActive = stepNum === step;
              const isComplete = stepNum < step;
              
              return (
                <div 
                  key={i} 
                  className={`flex flex-col items-center gap-2 ${
                    isActive ? 'text-sonic-orange' : isComplete ? 'text-sonic-orange' : 'text-zinc-300'
                  }`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      isActive ? 'border-sonic-orange bg-sonic-orange/10' : 
                      isComplete ? 'border-sonic-orange bg-orange-50' : 'border-zinc-200 bg-white'
                    }`}
                    aria-hidden="true"
                  >
                    {isComplete ? (
                      <Check size={18} />
                    ) : (
                      <StepIcon size={18} />
                    )}
                  </div>
                  {/* Mobile: show step number, Desktop: show full label */}
                  <span className="fluid-xs font-medium md:hidden">
                    {stepNum}
                  </span>
                  <span className="fluid-xs font-medium hidden md:block">
                    <span className="sr-only">
                      {isJa ? `ステップ ${stepNum}: ` : isDe ? `Schritt ${stepNum}: ` : `Step ${stepNum}: `}
                      {isComplete ? (isJa ? '(完了) ' : isDe ? '(Abgeschlossen) ' : '(Completed) ') : ''}
                      {isActive ? (isJa ? '(現在) ' : isDe ? '(Aktuell) ' : '(Current) ') : ''}
                    </span>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
          <div 
            className="h-2 bg-zinc-100 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={TOTAL_STEPS}
            aria-label={isJa ? `ステップ ${step} / ${TOTAL_STEPS}` : isDe ? `Schritt ${step} von ${TOTAL_STEPS}` : `Step ${step} of ${TOTAL_STEPS}`}
          >
            <div 
              className="h-full bg-sonic-orange transition-all duration-500"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <form 
          onKeyDown={handleKeyDown}
          onSubmit={(e) => e.preventDefault()}
          className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 shadow-sm"
          noValidate
        >
          <div ref={stepContainerRef}>
            {/* Step 1: Basis */}
            {step === 1 && (
              <fieldset className="space-y-6 animate-fade-in-up" aria-labelledby={`${formId}-step1-title`}>
                <legend id={`${formId}-step1-title`} className="fluid-xl font-bold text-zinc-900">
                  {isJa ? "基本情報" : isDe ? "Die Basis" : "The Basics"}
                </legend>
                
                {/* Name Field */}
                <div>
                  <label htmlFor={`${formId}-name`} className="block fluid-sm font-medium text-zinc-700 mb-2">
                    {isJa ? "お名前と会社の事業内容を教えてください" : isDe ? "Wer bist du und was macht deine Firma?" : "Who are you and what does your company do?"}
                    <span className="text-sonic-orange ml-1" aria-hidden="true">*</span>
                    <span className="sr-only">{isJa ? " (必須)" : isDe ? " (Pflichtfeld)" : " (required)"}</span>
                  </label>
                  <input
                    ref={firstFieldRef}
                    id={`${formId}-name`}
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    onBlur={() => handleFieldBlur('name')}
                    placeholder={isJa ? "お名前と事業内容を簡潔に" : isDe ? "Name & kurzer Satz zum Business" : "Name & short sentence about your business"}
                    className={inputClassName('name')}
                    aria-required="true"
                    aria-invalid={!!getFieldError('name')}
                    aria-describedby={getFieldError('name') ? `${formId}-name-error` : undefined}
                    autoComplete="organization"
                  />
                  {getFieldError('name') && (
                    <p id={`${formId}-name-error`} className="mt-2 flex items-center gap-1 text-red-600 fluid-sm" role="alert">
                      <AlertCircle size={14} aria-hidden="true" />
                      {getFieldError('name')}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor={`${formId}-email`} className="block fluid-sm font-medium text-zinc-700 mb-2">
                    {isJa ? "ご連絡先を教えてください" : isDe ? "Wie erreichen wir dich?" : "How do we reach you?"}
                    <span className="text-sonic-orange ml-1" aria-hidden="true">*</span>
                    <span className="sr-only">{isJa ? " (必須)" : isDe ? " (Pflichtfeld)" : " (required)"}</span>
                  </label>
                  <input
                    id={`${formId}-email`}
                    type="email"
                    inputMode="email"
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    onBlur={() => handleFieldBlur('email')}
                    placeholder={isJa ? "メールアドレス" : isDe ? "E-Mail Adresse" : "Email address"}
                    className={inputClassName('email')}
                    aria-required="true"
                    aria-invalid={!!getFieldError('email')}
                    aria-describedby={getFieldError('email') ? `${formId}-email-error` : undefined}
                    autoComplete="email"
                  />
                  {getFieldError('email') && (
                    <p id={`${formId}-email-error`} className="mt-2 flex items-center gap-1 text-red-600 fluid-sm" role="alert">
                      <AlertCircle size={14} aria-hidden="true" />
                      {getFieldError('email')}
                    </p>
                  )}
                </div>

                {/* Website Field */}
                <div>
                  <label htmlFor={`${formId}-website`} className="block fluid-sm font-medium text-zinc-700 mb-2">
                    {isJa ? "既存のウェブサイトはありますか？" : isDe ? "Hast du schon eine Website?" : "Do you already have a website?"}
                    <span className="text-zinc-400 ml-1 font-normal">({isJa ? "任意" : isDe ? "optional" : "optional"})</span>
                  </label>
                  <input
                    id={`${formId}-website`}
                    type="url"
                    inputMode="url"
                    value={formData.currentWebsite}
                    onChange={(e) => handleFieldChange('currentWebsite', e.target.value)}
                    onBlur={() => handleFieldBlur('currentWebsite')}
                    placeholder={isJa ? "https://your-website.jp" : isDe ? "https://deine-website.de" : "https://your-website.com"}
                    className={inputClassName('currentWebsite')}
                    aria-invalid={!!getFieldError('currentWebsite')}
                    aria-describedby={getFieldError('currentWebsite') ? `${formId}-website-error` : undefined}
                    autoComplete="url"
                  />
                  {getFieldError('currentWebsite') && (
                    <p id={`${formId}-website-error`} className="mt-2 flex items-center gap-1 text-red-600 fluid-sm" role="alert">
                      <AlertCircle size={14} aria-hidden="true" />
                      {getFieldError('currentWebsite')}
                    </p>
                  )}
                </div>
              </fieldset>
            )}

            {/* Step 2: Plan */}
            {step === 2 && (
              <fieldset className="space-y-6 animate-fade-in-up" aria-labelledby={`${formId}-step2-title`}>
                <legend id={`${formId}-step2-title`} className="fluid-xl font-bold text-zinc-900">
                  {isJa ? "プラン" : isDe ? "Der Plan" : "The Plan"}
                </legend>
                <p id={`${formId}-goals-desc`} className="text-zinc-500 fluid-base">
                  {isJa ? "新しいサイトの主な目標は何ですか？" : isDe ? "Was ist dein Hauptziel mit der neuen Seite?" : "What's your main goal with the new site?"}
                  <span className="text-zinc-400 ml-1">({isJa ? "複数選択可" : isDe ? "Mehrere möglich" : "Multiple possible"})</span>
                  <span className="text-sonic-orange ml-1" aria-hidden="true">*</span>
                </p>
                
                <div 
                  className="space-y-3" 
                  role="group" 
                  aria-labelledby={`${formId}-step2-title`}
                  aria-describedby={`${formId}-goals-desc ${getFieldError('goals') ? `${formId}-goals-error` : ''}`}
                >
                  {GOAL_OPTIONS.map((option) => {
                    const isChecked = formData.goals.includes(option.value);
                    return (
                      <label
                        key={option.value}
                        className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${
                          isChecked
                            ? 'border-sonic-orange bg-orange-50'
                            : 'border-zinc-200 hover:border-zinc-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange('goals', option.value)}
                          className="w-5 h-5 text-sonic-orange rounded border-zinc-300 focus:ring-sonic-orange focus:ring-2"
                          aria-describedby={`${formId}-goals-desc`}
                        />
                        <span className="text-zinc-700 fluid-base">{isDe ? option.labelDe : option.labelEn}</span>
                      </label>
                    );
                  })}
                </div>
                {getFieldError('goals') && (
                  <p id={`${formId}-goals-error`} className="flex items-center gap-1 text-red-600 fluid-sm" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {getFieldError('goals')}
                  </p>
                )}
              </fieldset>
            )}

            {/* Step 3: Style */}
            {step === 3 && (
              <fieldset className="space-y-6 animate-fade-in-up" aria-labelledby={`${formId}-step3-title`}>
                <legend id={`${formId}-step3-title`} className="fluid-xl font-bold text-zinc-900">
                  {isJa ? "スタイルチェック" : isDe ? "Der Style-Check" : "The Style Check"}
                </legend>
                <p className="text-zinc-400 fluid-sm">
                  {isJa ? "(すべて任意)" : isDe ? "(Alle Felder optional)" : "(All fields optional)"}
                </p>
                
                {/* Inspirations */}
                <div>
                  <label htmlFor={`${formId}-inspirations`} className="block fluid-sm font-medium text-zinc-700 mb-2">
                    {isJa ? "参考にしたいサイトはありますか？" : isDe ? "Gibt es Vorbilder?" : "Any inspirations?"}
                  </label>
                  <textarea
                    id={`${formId}-inspirations`}
                    value={formData.inspirations}
                    onChange={(e) => handleFieldChange('inspirations', e.target.value)}
                    placeholder={isJa 
                      ? "好きなウェブサイトのリンク、またはデジタルで追い越したい競合他社のリンク。"
                      : isDe 
                      ? "Links von Websites die du feierst – oder von Konkurrenten, die du digital überholen willst."
                      : "Links to websites you love – or competitors you want to outperform digitally."}
                    rows={3}
                    className="w-full p-4 border border-zinc-200 rounded-xl focus:outline-none focus:border-sonic-orange focus:ring-2 focus:ring-sonic-orange/20 fluid-base resize-none"
                  />
                </div>

                {/* Features */}
                <div>
                  <p id={`${formId}-features-label`} className="block fluid-sm font-medium text-zinc-700 mb-3">
                    {isJa ? "必ず含めたい機能は？" : isDe ? "Was muss unbedingt rein?" : "What must be included?"}
                  </p>
                  <div 
                    className="space-y-3" 
                    role="group" 
                    aria-labelledby={`${formId}-features-label`}
                  >
                    {FEATURE_OPTIONS.map((option) => {
                      const isChecked = formData.features.includes(option.value);
                      return (
                        <label
                          key={option.value}
                          className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${
                            isChecked
                              ? 'border-sonic-orange bg-orange-50'
                              : 'border-zinc-200 hover:border-zinc-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxChange('features', option.value)}
                            className="w-5 h-5 text-sonic-orange rounded border-zinc-300 focus:ring-sonic-orange focus:ring-2"
                          />
                          <span className="text-zinc-700 fluid-base">{isJa ? option.labelJa : isDe ? option.labelDe : option.labelEn}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </fieldset>
            )}

            {/* Step 4: Eigentum */}
            {step === 4 && (
              <fieldset className="space-y-6 animate-fade-in-up" aria-labelledby={`${formId}-step4-title`}>
                <legend id={`${formId}-step4-title`} className="fluid-xl font-bold text-zinc-900">
                  {isJa ? "「所有権」について" : isDe ? "Die \"Eigentums-Frage\"" : "The \"Ownership Question\""}
                </legend>
                <p id={`${formId}-ownership-desc`} className="text-zinc-500 fluid-base">
                  {isJa 
                    ? "サイトを本当に所有したいですか？それとも、所有していないシステムに毎月「家賃」を払い続けますか？"
                    : isDe 
                    ? "Willst du die Seite am Ende wirklich besitzen oder weiter monatlich \"Miete\" für ein System zahlen, das dir nicht gehört?"
                    : "Do you want to truly own the site at the end or keep paying monthly \"rent\" for a system that doesn't belong to you?"}
                  <span className="text-sonic-orange ml-1" aria-hidden="true">*</span>
                </p>
                
                <div 
                  className="space-y-3" 
                  role="radiogroup" 
                  aria-labelledby={`${formId}-step4-title`}
                  aria-describedby={`${formId}-ownership-desc ${getFieldError('ownership') ? `${formId}-ownership-error` : ''}`}
                  aria-required="true"
                >
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
                      value="full"
                      checked={formData.ownership === 'full'}
                      onChange={() => handleFieldChange('ownership', 'full')}
                      className="w-5 h-5 text-sonic-orange border-zinc-300 focus:ring-sonic-orange focus:ring-2"
                    />
                    <span className="text-zinc-700 font-medium fluid-base">
                      {isJa ? "完全なコントロールと100%の所有権が欲しいです。" : isDe ? "Ich will die volle Kontrolle und 100% Eigentum." : "I want full control and 100% ownership."}
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
                      value="doesnt-matter"
                      checked={formData.ownership === 'doesnt-matter'}
                      onChange={() => handleFieldChange('ownership', 'doesnt-matter')}
                      className="w-5 h-5 text-sonic-orange border-zinc-300 focus:ring-sonic-orange focus:ring-2"
                    />
                    <span className="text-zinc-700 fluid-base">
                      {isJa ? "機能すれば、特にこだわりません。" : isDe ? "Ist mir eigentlich egal, solange es funktioniert." : "I don't really care, as long as it works."}
                    </span>
                  </label>
                </div>
                {getFieldError('ownership') && (
                  <p id={`${formId}-ownership-error`} className="flex items-center gap-1 text-red-600 fluid-sm" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {getFieldError('ownership')}
                  </p>
                )}
              </fieldset>
            )}

            {/* Step 5: Testimonial */}
            {step === 5 && (
              <fieldset className="space-y-6 animate-fade-in-up" aria-labelledby={`${formId}-step5-title`}>
                <legend id={`${formId}-step5-title`} className="fluid-xl font-bold text-zinc-900">
                  {isJa ? "「推薦」について" : isDe ? "Der \"Testimonial-Deal\"" : "The \"Testimonial Deal\""}
                </legend>
                <p id={`${formId}-testimonial-desc`} className="text-zinc-500 fluid-base">
                  {isJa 
                    ? "正直に申し上げます：92万円という価格は、従来のマーケティングを省略しているからこそ実現できています。仕事に満足いただけた場合、公開後に短いビデオ推薦をいただけますか？"
                    : isDe 
                    ? "Hand aufs Herz: Unser Preis von 5.600 € ist nur machbar, weil wir auf klassisches Marketing verzichten. Bist du bereit, uns nach dem Launch ein kurzes Video-Testimonial zu geben, wenn du mit der Arbeit zufrieden bist?"
                    : "Honestly: Our price of €5,600 is only possible because we skip traditional marketing. Are you willing to give us a short video testimonial after launch if you're happy with the work?"}
                  <span className="text-sonic-orange ml-1" aria-hidden="true">*</span>
                </p>
                
                <div 
                  className="space-y-3" 
                  role="radiogroup" 
                  aria-labelledby={`${formId}-step5-title`}
                  aria-describedby={`${formId}-testimonial-desc ${getFieldError('testimonial') ? `${formId}-testimonial-error` : ''}`}
                  aria-required="true"
                >
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
                      value="yes"
                      checked={formData.testimonial === 'yes'}
                      onChange={() => handleFieldChange('testimonial', 'yes')}
                      className="w-5 h-5 text-sonic-orange border-zinc-300 focus:ring-sonic-orange focus:ring-2"
                    />
                    <span className="text-zinc-700 font-medium fluid-base">
                      {isJa ? "もちろん、喜んで！" : isDe ? "Klar, Ehrensache!" : "Sure, of course!"}
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
                      value="discuss"
                      checked={formData.testimonial === 'discuss'}
                      onChange={() => handleFieldChange('testimonial', 'discuss')}
                      className="w-5 h-5 text-sonic-orange border-zinc-300 focus:ring-sonic-orange focus:ring-2"
                    />
                    <span className="text-zinc-700 fluid-base">
                      {isJa ? "まずは相談させてください。" : isDe ? "Lass uns da erst nochmal drüber quatschen." : "Let's talk about that first."}
                    </span>
                  </label>
                </div>
                {getFieldError('testimonial') && (
                  <p id={`${formId}-testimonial-error`} className="flex items-center gap-1 text-red-600 fluid-sm" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {getFieldError('testimonial')}
                  </p>
                )}
              </fieldset>
            )}
          </div>

          {/* Submit Error */}
          {submitError && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-700" role="alert">
              <AlertCircle size={18} aria-hidden="true" />
              <span className="fluid-sm">{submitError}</span>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-zinc-100">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors fluid-base focus:outline-none focus:ring-2 focus:ring-sonic-orange/50 rounded-lg px-2 py-1"
                aria-label={isJa ? `ステップ ${step - 1} に戻る` : isDe ? `Zurück zu Schritt ${step - 1}` : `Back to step ${step - 1}`}
              >
                <ArrowLeft size={18} aria-hidden="true" />
                {isJa ? "戻る" : isDe ? "Zurück" : "Back"}
              </button>
            ) : (
              <div />
            )}

            {step < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
                className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-800 transition-colors fluid-base focus:outline-none focus:ring-2 focus:ring-sonic-orange focus:ring-offset-2"
                aria-label={isJa ? `ステップ ${step + 1} へ進む` : isDe ? `Weiter zu Schritt ${step + 1}` : `Continue to step ${step + 1}`}
              >
                {isJa ? "次へ" : isDe ? "Weiter" : "Next"}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className="flex items-center gap-2 bg-sonic-orange text-white px-6 py-3 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#E64500] transition-colors fluid-base focus:outline-none focus:ring-2 focus:ring-sonic-orange focus:ring-offset-2"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                    {isJa ? "送信中..." : isDe ? "Wird gesendet..." : "Sending..."}
                  </>
                ) : (
                  <>
                    {/* Short text on mobile, full text on desktop */}
                    <span className="sm:hidden">
                      {isJa ? "無料デザイン！" : isDe ? "Gratis-Entwurf!" : "Get free design!"}
                    </span>
                    <span className="hidden sm:inline">
                      {isJa ? "はい、無料デザインを送ってください！" : isDe ? "Ja, schickt mir den Gratis-Entwurf!" : "Yes, send me the free design!"}
                    </span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        {/* Trust indicators */}
        <div className="flex justify-center gap-6 mt-8 text-zinc-400 fluid-sm flex-wrap" aria-label={isJa ? "信頼の証" : isDe ? "Vertrauensindikatoren" : "Trust indicators"}>
          <span className="flex items-center gap-1">
            <Check size={14} className="text-sonic-orange" aria-hidden="true" />
            {isJa ? "クレジットカード不要" : isDe ? "Keine Kreditkarte nötig" : "No credit card needed"}
          </span>
          <span className="flex items-center gap-1">
            <Check size={14} className="text-sonic-orange" aria-hidden="true" />
            {isJa ? "プレッシャーなし" : isDe ? "Kein Druck" : "No pressure"}
          </span>
          <span className="flex items-center gap-1">
            <Check size={14} className="text-sonic-orange" aria-hidden="true" />
            {isJa ? "48〜72時間以内に返信" : isDe ? "Antwort in 48-72h" : "Response in 48-72h"}
          </span>
        </div>
      </div>
    </section>
  );
};
