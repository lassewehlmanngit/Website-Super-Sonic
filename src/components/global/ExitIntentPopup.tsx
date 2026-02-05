import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, Truck, Scale, Server, ArrowRight, Check } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  url: string;
}

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentWebsite: ''
  });

  // Project showcases - external URLs to be replaced when live sites are ready
  const projects: Project[] = [
    {
      title: "Logistik-Held",
      description: "Modernes Design, Fokus auf Mitarbeiter-Recruiting.",
      icon: Truck,
      color: "bg-sonic-orange",
      url: "#" // Replace with live URL
    },
    {
      title: "Kanzlei-Digital",
      description: "Seriös, schnell, DSGVO-sicher.",
      icon: Scale,
      color: "bg-zinc-800",
      url: "#" // Replace with live URL
    },
    {
      title: "IT-Systemhaus",
      description: "Performance-optimiert, unter 0.8s Ladezeit.",
      icon: Server,
      color: "bg-zinc-900",
      url: "#" // Replace with live URL
    }
  ];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Exit popup form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleProjectClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (!show) return null;

  return (
    <div className="exit-popup-overlay" onClick={handleClose}>
      <div className="exit-popup-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="exit-popup-close" onClick={handleClose} aria-label="Schließen">
          <X size={24} />
        </button>

        <div className="exit-popup-grid">
          {/* Left: Projects Gallery */}
          <div className="exit-popup-projects">
            <div className="mb-6">
              <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-2">
                Unsere Arbeit
              </p>
              <h3 className="fluid-2xl font-bold text-zinc-900">
                Das haben wir für andere gebaut.
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
                    <project.icon className="text-white/60" size={32} />
                    {project.url !== '#' && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="text-white" size={14} />
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
              Klicke auf ein Projekt, um die Live-Seite zu sehen.
            </p>
          </div>

          {/* Right: Lead Form */}
          <div className="exit-popup-form-section">
            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <h2 className="fluid-3xl font-bold text-zinc-900 mb-2">
                    Warte! Bevor du gehst...
                  </h2>
                  <p className="text-zinc-600 fluid-base">
                    Wir bauen dir ein <strong className="text-sonic-orange">kostenloses Design-Konzept</strong> in 72h. Ohne Verpflichtung.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block fluid-sm font-medium text-zinc-700 mb-2">
                      Wer bist du und was macht deine Firma?
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Name & kurzer Satz zum Business"
                      required
                      className="exit-popup-input"
                    />
                  </div>

                  <div>
                    <label className="block fluid-sm font-medium text-zinc-700 mb-2">
                      Wie erreichen wir dich?
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="E-Mail Adresse"
                      required
                      className="exit-popup-input"
                    />
                  </div>

                  <div>
                    <label className="block fluid-sm font-medium text-zinc-700 mb-2">
                      Hast du schon eine Website? <span className="text-zinc-400">(optional)</span>
                    </label>
                    <input
                      type="url"
                      value={formData.currentWebsite}
                      onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                      placeholder="https://deine-website.de"
                      className="exit-popup-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email}
                    className="exit-popup-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Gratis-Entwurf anfordern
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 flex flex-wrap gap-4 text-zinc-400 fluid-xs">
                  <span className="flex items-center gap-1">
                    <Check size={14} className="text-sonic-orange" />
                    Keine Kreditkarte
                  </span>
                  <span className="flex items-center gap-1">
                    <Check size={14} className="text-sonic-orange" />
                    Kein Spam
                  </span>
                  <span className="flex items-center gap-1">
                    <Check size={14} className="text-sonic-orange" />
                    Antwort in 72h
                  </span>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-orange-100">
                  <Check className="text-sonic-orange" size={32} />
                </div>

                <h3 className="fluid-2xl font-bold text-zinc-900 mb-2">
                  Läuft bei dir!
                </h3>

                <p className="text-zinc-600 fluid-base mb-4">
                  Deine Infos sind gelandet.
                </p>

                <div className="bg-zinc-50 rounded-xl p-4 text-left">
                  <p className="text-zinc-700 fluid-sm leading-relaxed">
                    Innerhalb der nächsten <strong className="text-zinc-900">48–72 Stunden</strong> bekommst du von mir eine E-Mail mit deinem persönlichen Design-Entwurf.
                  </p>
                </div>

                <p className="mt-6 text-zinc-500 fluid-sm">
                  Bis gleich! <br />
                  <strong className="text-zinc-900">Lasse</strong>
                </p>

                <button
                  onClick={handleClose}
                  className="mt-6 text-sonic-orange font-bold fluid-sm hover:underline"
                >
                  Fenster schließen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
