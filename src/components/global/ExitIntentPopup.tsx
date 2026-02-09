import React, { useState, useEffect, useRef, useId } from 'react';
import { useLocation } from 'react-router-dom';
import { X, ArrowUpRight, Truck, Scale, Server, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { Lang } from '../../types';

interface Project {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  url: string;
}

export function ExitIntentPopup() {
  const location = useLocation();
  const currentLang: Lang = location.pathname.startsWith('/de') ? 'de' : location.pathname.startsWith('/ja') ? 'ja' : 'en';
  const isDe = currentLang === 'de';
  const isJa = currentLang === 'ja';

  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentWebsite: ''
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; currentWebsite?: string }>({});
  const [touched, setTouched] = useState({ name: false, email: false, currentWebsite: false });
  
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const formId = useId();

  // Project showcases - external URLs to be replaced when live sites are ready
  const projects: Project[] = isJa ? [
    {
      title: "ロジスティクスヒーロー",
      description: "モダンなデザイン、採用に特化。",
      icon: Truck,
      color: "bg-sonic-orange",
      url: "#"
    },
    {
      title: "法律事務所デジタル",
      description: "プロフェッショナル、高速、個人情報保護法準拠。",
      icon: Scale,
      color: "bg-zinc-800",
      url: "#"
    },
    {
      title: "ITシステムハウス",
      description: "パフォーマンス最適化、0.8秒未満の読み込み時間。",
      icon: Server,
      color: "bg-zinc-900",
      url: "#"
    }
  ] : isDe ? [
    {
      title: "Logistik-Held",
      description: "Modernes Design, Fokus auf Mitarbeiter-Recruiting.",
      icon: Truck,
      color: "bg-sonic-orange",
      url: "#"
    },
    {
      title: "Kanzlei-Digital",
      description: "Seriös, schnell, DSGVO-sicher.",
      icon: Scale,
      color: "bg-zinc-800",
      url: "#"
    },
    {
      title: "IT-Systemhaus",
      description: "Performance-optimiert, unter 0.8s Ladezeit.",
      icon: Server,
      color: "bg-zinc-900",
      url: "#"
    }
  ] : [
    {
      title: "Logistics Hero",
      description: "Modern design, focus on employee recruiting.",
      icon: Truck,
      color: "bg-sonic-orange",
      url: "#"
    },
    {
      title: "Law Firm Digital",
      description: "Professional, fast, GDPR-compliant.",
      icon: Scale,
      color: "bg-zinc-800",
      url: "#"
    },
    {
      title: "IT System House",
      description: "Performance-optimized, under 0.8s load time.",
      icon: Server,
      color: "bg-zinc-900",
      url: "#"
    }
  ];

  // Focus trap management
  useEffect(() => {
    if (!show) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    // Focus first element when dialog opens
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    // Get all focusable elements
    const focusableElements = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [show]);

  useEffect(() => {
    const lastShown = localStorage.getItem('exitPopupShown');
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    
    if (lastShown && parseInt(lastShown) > sevenDaysAgo) {
      setDismissed(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !dismissed) {
        setShow(true);
      }
    };

    const inactivityTimer = setTimeout(() => {
      if (!dismissed) setShow(true);
    }, 60000);

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(inactivityTimer);
    };
  }, [dismissed]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
    localStorage.setItem('exitPopupShown', Date.now().toString());
  };

  const validateField = (name: keyof typeof formData, value: string): string | undefined => {
    if (name === 'name' && !value.trim()) {
      return isJa ? 'お名前を入力してください。' : isDe ? 'Bitte gib deinen Namen ein.' : 'Please enter your name.';
    }
    if (name === 'email') {
      if (!value.trim()) {
        return isJa ? 'メールアドレスを入力してください。' : isDe ? 'Bitte gib deine E-Mail ein.' : 'Please enter your email.';
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) {
        return isJa ? '有効なメールアドレスを入力してください。' : isDe ? 'Bitte gib eine gültige E-Mail ein.' : 'Please enter a valid email.';
      }
    }
    if (name === 'currentWebsite' && value.trim()) {
      const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
      if (!urlRegex.test(value.trim())) {
        return isJa ? '有効なURLを入力してください。' : isDe ? 'Bitte gib eine gültige URL ein.' : 'Please enter a valid URL.';
      }
    }
    return undefined;
  };

  const handleFieldChange = (name: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleFieldBlur = (name: keyof typeof formData) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ name: true, email: true, currentWebsite: true });
    
    // Validate all fields
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const websiteError = validateField('currentWebsite', formData.currentWebsite);
    
    if (nameError || emailError || websiteError) {
      setErrors({ name: nameError, email: emailError, currentWebsite: websiteError });
      // Focus first error field
      if (nameError) {
        firstInputRef.current?.focus();
      } else if (emailError) {
        document.getElementById(`${formId}-email`)?.focus();
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'Exit Intent Popup',
          lang: isDe ? 'de' : isJa ? 'ja' : 'en',
          data: formData
        }),
      });

      if (!response.ok) throw new Error('Failed to send');

      console.log('Exit popup form submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      // Handle error state if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProjectClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (!show) return null;

  return (
    <div 
      className="exit-popup-overlay" 
      onClick={handleClose}
      role="presentation"
      aria-hidden="true"
    >
      <div 
        ref={dialogRef}
        className="exit-popup-content" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${formId}-title`}
      >
        {/* Close button */}
        <button 
          ref={closeButtonRef}
          className="exit-popup-close" 
          onClick={handleClose} 
          aria-label={isJa ? '閉じる' : isDe ? 'Schließen' : 'Close'}
        >
          <X size={24} aria-hidden="true" />
        </button>

        <div className="exit-popup-grid">
          {/* Left: Projects Gallery */}
          <div className="exit-popup-projects">
            <div className="mb-6">
              <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-2">
                {isJa ? '私たちの仕事' : isDe ? 'Unsere Arbeit' : 'Our Work'}
              </p>
              <h3 className="fluid-2xl font-bold text-zinc-900">
                {isJa ? '他のお客様のために作成したもの。' : isDe ? 'Das haben wir für andere gebaut.' : 'What we built for others.'}
              </h3>
            </div>

            <div className="space-y-4">
              {projects.map((project, i) => (
                <div 
                  key={i}
                  onClick={() => handleProjectClick(project.url)}
                  className={`exit-popup-project-card group ${project.url !== '#' ? 'cursor-pointer' : ''}`}
                >
                  {/* Icon area */}
                  <div className={`exit-popup-project-icon ${project.color}`}>
                    <project.icon className="text-white/60" size={32} aria-hidden="true" />
                    {project.url !== '#' && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="text-white" size={14} aria-hidden="true" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-zinc-900 fluid-base group-hover:text-sonic-orange transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-zinc-500 fluid-sm truncate">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-zinc-400 fluid-xs">
              {isJa ? 'プロジェクトをクリックしてライブサイトを見る。' : isDe ? 'Klicke auf ein Projekt, um die Live-Seite zu sehen.' : 'Click a project to see the live site.'}
            </p>
          </div>

          {/* Right: Lead Form */}
          <div className="exit-popup-form-section">
            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <h2 id={`${formId}-title`} className="fluid-3xl font-bold text-zinc-900 mb-2">
                    {isJa ? 'お待ちください！行く前に...' : isDe ? 'Warte! Bevor du gehst...' : 'Wait! Before you go...'}
                  </h2>
                  <p className="text-zinc-600 fluid-base">
                    {isJa ? (
                      <>72時間以内に<strong className="text-sonic-orange">無料デザインコンセプト</strong>を作成します。義務なし。</>
                    ) : isDe ? (
                      <>Wir bauen dir ein <strong className="text-sonic-orange">kostenloses Design-Konzept</strong> in 72h. Ohne Verpflichtung.</>
                    ) : (
                      <>We'll build you a <strong className="text-sonic-orange">free design concept</strong> in 72h. No obligation.</>
                    )}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor={`${formId}-name`} className="block fluid-sm font-medium text-zinc-700 mb-2">
                      {isJa ? 'お名前と会社の事業内容を教えてください' : isDe ? 'Wer bist du und was macht deine Firma?' : 'Who are you and what does your company do?'}
                      <span className="text-sonic-orange ml-1" aria-hidden="true">*</span>
                      <span className="sr-only"> {isJa ? '(必須)' : isDe ? '(Pflichtfeld)' : '(required)'}</span>
                    </label>
                    <input
                      ref={firstInputRef}
                      id={`${formId}-name`}
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      onBlur={() => handleFieldBlur('name')}
                      placeholder={isJa ? 'お名前と事業内容を簡潔に' : isDe ? 'Name & kurzer Satz zum Business' : 'Name & short sentence about your business'}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                      className={`exit-popup-input ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50' : ''}`}
                    />
                    {errors.name && (
                      <p id={`${formId}-name-error`} className="mt-2 flex items-center gap-1 text-red-600 fluid-sm" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor={`${formId}-email`} className="block fluid-sm font-medium text-zinc-700 mb-2">
                      {isJa ? 'ご連絡先を教えてください' : isDe ? 'Wie erreichen wir dich?' : 'How do we reach you?'}
                      <span className="text-sonic-orange ml-1" aria-hidden="true">*</span>
                      <span className="sr-only"> {isJa ? '(必須)' : isDe ? '(Pflichtfeld)' : '(required)'}</span>
                    </label>
                    <input
                      id={`${formId}-email`}
                      type="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      onBlur={() => handleFieldBlur('email')}
                      placeholder={isJa ? 'メールアドレス' : isDe ? 'E-Mail Adresse' : 'Email address'}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                      className={`exit-popup-input ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50' : ''}`}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p id={`${formId}-email-error`} className="mt-2 flex items-center gap-1 text-red-600 fluid-sm" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor={`${formId}-website`} className="block fluid-sm font-medium text-zinc-700 mb-2">
                      {isJa ? '既存のウェブサイトはありますか？' : isDe ? 'Hast du schon eine Website?' : 'Do you already have a website?'} <span className="text-zinc-400 font-normal">({isJa ? '任意' : isDe ? 'optional' : 'optional'})</span>
                    </label>
                    <input
                      id={`${formId}-website`}
                      type="url"
                      inputMode="url"
                      value={formData.currentWebsite}
                      onChange={(e) => handleFieldChange('currentWebsite', e.target.value)}
                      onBlur={() => handleFieldBlur('currentWebsite')}
                      placeholder={isJa ? 'https://your-website.jp' : isDe ? 'https://deine-website.de' : 'https://your-website.com'}
                      aria-invalid={!!errors.currentWebsite}
                      aria-describedby={errors.currentWebsite ? `${formId}-website-error` : undefined}
                      className={`exit-popup-input ${errors.currentWebsite ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50' : ''}`}
                      autoComplete="url"
                    />
                    {errors.currentWebsite && (
                      <p id={`${formId}-website-error`} className="mt-2 flex items-center gap-1 text-red-600 fluid-sm" role="alert">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.currentWebsite}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email}
                    className="exit-popup-submit"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                        {isJa ? '送信中...' : isDe ? 'Wird gesendet...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        {isJa ? '無料デザインをリクエスト' : isDe ? 'Gratis-Entwurf anfordern' : 'Request free design'}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 flex flex-wrap gap-4 text-zinc-400 fluid-xs" aria-label={isJa ? '信頼の証' : isDe ? 'Vertrauensindikatoren' : 'Trust indicators'}>
                  <span className="flex items-center gap-1">
                    <Check size={14} className="text-sonic-orange" aria-hidden="true" />
                    {isJa ? 'クレジットカード不要' : isDe ? 'Keine Kreditkarte' : 'No credit card'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Check size={14} className="text-sonic-orange" aria-hidden="true" />
                    {isJa ? 'スパムなし' : isDe ? 'Kein Spam' : 'No spam'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Check size={14} className="text-sonic-orange" aria-hidden="true" />
                    {isJa ? '72時間以内に返信' : isDe ? 'Antwort in 72h' : 'Response in 72h'}
                  </span>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8" role="status" aria-live="polite">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-orange-100">
                  <Check className="text-sonic-orange" size={32} aria-hidden="true" />
                </div>

                <h3 className="fluid-2xl font-bold text-zinc-900 mb-2">
                  {isJa ? '完了しました！' : isDe ? 'Läuft bei dir!' : "You're all set!"}
                </h3>

                <p className="text-zinc-600 fluid-base mb-4">
                  {isJa ? '情報を受け取りました。' : isDe ? 'Deine Infos sind gelandet.' : 'Your info has landed.'}
                </p>

                <div className="bg-zinc-50 rounded-xl p-4 text-left">
                  <p className="text-zinc-700 fluid-sm leading-relaxed">
                    {isJa ? (
                      <><strong className="text-zinc-900">48〜72時間以内</strong>に、あなた専用のデザイン案をメールでお送りします。</>
                    ) : isDe ? (
                      <>Innerhalb der nächsten <strong className="text-zinc-900">48–72 Stunden</strong> bekommst du von mir eine E-Mail mit deinem persönlichen Design-Entwurf.</>
                    ) : (
                      <>Within the next <strong className="text-zinc-900">48-72 hours</strong> you'll receive an email from me with your personal design draft.</>
                    )}
                  </p>
                </div>

                <p className="mt-6 text-zinc-500 fluid-sm">
                  {isJa ? 'それでは、また！' : isDe ? 'Bis gleich!' : 'Talk soon!'} <br />
                  <strong className="text-zinc-900">Lasse</strong>
                </p>

                <button
                  onClick={handleClose}
                  className="mt-6 text-sonic-orange font-bold fluid-sm hover:underline"
                >
                  {isJa ? 'ウィンドウを閉じる' : isDe ? 'Fenster schließen' : 'Close window'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
