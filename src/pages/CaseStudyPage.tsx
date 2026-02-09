import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUp, ExternalLink, Leaf, Truck, Scale, Server, Building, Store, Check, Zap, Share2, Linkedin, Twitter, Link2, X, Quote, Lightbulb, Sparkles } from 'lucide-react';
import { getCaseStudyBySlug, getAllCaseStudies, CaseStudy } from '../data/caseStudies';
import { SEO } from '../components/SEO';

interface CaseStudyPageProps {
  lang: 'de' | 'en' | 'ja';
}

const iconMap = {
  leaf: Leaf,
  truck: Truck,
  scale: Scale,
  server: Server,
  building: Building,
  store: Store,
};

// Custom hook for reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};

// Reading progress hook
const useReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
};

// Back to top visibility hook
const useShowBackToTop = (threshold = 400) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return show;
};

// Share buttons component
interface ShareButtonsProps {
  title: string;
  url: string;
  isDe: boolean;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url, isDe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [url]);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isDe ? 'Teilen-Menü öffnen' : 'Open share menu'}
      >
        <Share2 size={18} aria-hidden="true" />
        <span>{isDe ? 'Teilen' : 'Share'}</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown */}
          <div 
            className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-zinc-200 py-2 z-50"
            role="menu"
            aria-orientation="vertical"
          >
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 text-zinc-700 hover:bg-zinc-50 transition-colors focus:outline-none focus-visible:bg-zinc-100"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              <Linkedin size={18} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 text-zinc-700 hover:bg-zinc-50 transition-colors focus:outline-none focus-visible:bg-zinc-100"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              <Twitter size={18} aria-hidden="true" />
              <span>Twitter / X</span>
            </a>
            <button
              onClick={() => {
                handleCopyLink();
                setIsOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-2 text-zinc-700 hover:bg-zinc-50 transition-colors w-full text-left focus:outline-none focus-visible:bg-zinc-100"
              role="menuitem"
            >
              <Link2 size={18} aria-hidden="true" />
              <span>{copied ? (isDe ? 'Kopiert!' : 'Copied!') : (isDe ? 'Link kopieren' : 'Copy link')}</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Related projects component
interface RelatedProjectsProps {
  currentSlug: string;
  lang: 'de' | 'en' | 'ja';
  isDe: boolean;
}

const RelatedProjects: React.FC<RelatedProjectsProps> = ({ currentSlug, lang, isDe }) => {
  const allProjects = getAllCaseStudies(lang);
  const relatedProjects = allProjects.filter(p => p.slug !== currentSlug).slice(0, 2);

  if (relatedProjects.length === 0) return null;

  const projectPath = isDe ? 'projekte' : 'projects';

  return (
    <section 
      className="fluid-section bg-zinc-50"
      aria-labelledby="related-projects-heading"
    >
      <div className="container-responsive">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
              {isDe ? 'Weitere Projekte' : 'More Projects'}
            </p>
            <h2 
              id="related-projects-heading"
              className="fluid-section-title font-bold text-zinc-900 tracking-tight"
            >
              {isDe ? 'Das könnte dich auch interessieren' : 'You might also like'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {relatedProjects.map((project) => {
              const ProjectIcon = iconMap[project.icon];
              return (
                <Link
                  key={project.slug}
                  to={`/${lang}/${projectPath}/${project.slug}`}
                  className="group bg-white rounded-2xl p-8 border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    >
                      <ProjectIcon className="text-white" size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="fluid-xl font-bold text-zinc-900 group-hover:text-sonic-orange transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-500 fluid-sm">{project.industry}</p>
                    </div>
                  </div>
                  <p className="text-zinc-600 fluid-base line-clamp-2">
                    {project.content.intro}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Back to top button component
interface BackToTopProps {
  show: boolean;
  prefersReducedMotion: boolean;
  isDe: boolean;
}

const BackToTop: React.FC<BackToTopProps> = ({ show, prefersReducedMotion, isDe }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-zinc-900 text-white rounded-full shadow-lg hover:bg-zinc-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 ${
        prefersReducedMotion ? '' : 'animate-fade-in'
      }`}
      aria-label={isDe ? 'Nach oben scrollen' : 'Scroll to top'}
    >
      <ArrowUp size={20} className="mx-auto" aria-hidden="true" />
    </button>
  );
};

// Reading progress bar component
interface ProgressBarProps {
  progress: number;
  prefersReducedMotion: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, prefersReducedMotion }) => {
  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 bg-zinc-200 z-50"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div 
        className={`h-full bg-sonic-orange ${prefersReducedMotion ? '' : 'transition-all duration-150'}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const isDe = lang === 'de';
  const prefersReducedMotion = useReducedMotion();
  const readingProgress = useReadingProgress();
  const showBackToTop = useShowBackToTop();

  const caseStudy = slug ? getCaseStudyBySlug(slug, lang) : undefined;
  const baseUrl = 'https://norddorf.com';
  const projectPath = isDe ? 'projekte' : 'projects';
  const currentUrl = `${baseUrl}/${lang}/${projectPath}/${slug}`;

  // Calculate word count for schema
  const getWordCount = (cs: CaseStudy): number => {
    const textContent = [
      cs.content.intro,
      ...cs.content.challenge,
      ...cs.content.approach,
      ...cs.content.features.map(f => f.title + ' ' + f.description),
      ...cs.content.results,
      cs.content.conclusion
    ].join(' ');
    return textContent.split(/\s+/).filter(Boolean).length;
  };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [slug]);

  // Initialize scroll reveal observer
  useEffect(() => {
    if (prefersReducedMotion || !caseStudy) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe elements with .reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [prefersReducedMotion, caseStudy]);

  // Inject structured data schemas
  useEffect(() => {
    if (!caseStudy) return;

    const wordCount = getWordCount(caseStudy);

    // BreadcrumbList Schema
    const breadcrumbSchemaId = 'breadcrumb-schema';
    const existingBreadcrumb = document.getElementById(breadcrumbSchemaId);
    if (existingBreadcrumb) existingBreadcrumb.remove();

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": isDe ? "Startseite" : "Home",
          "item": `${baseUrl}/${lang}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": isDe ? "Projekte" : "Projects",
          "item": `${baseUrl}/${lang}#case-studies`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": caseStudy.title
        }
      ]
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.id = breadcrumbSchemaId;
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    // TechArticle Schema for case study (enhanced)
    const articleSchemaId = 'article-schema';
    const existingArticle = document.getElementById(articleSchemaId);
    if (existingArticle) existingArticle.remove();

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": caseStudy.seo.title,
      "description": caseStudy.seo.description,
      "image": `${baseUrl}/og-image.jpg`,
      "datePublished": `${caseStudy.year}-01-01`,
      "dateModified": new Date().toISOString().split('T')[0],
      "wordCount": wordCount,
      "articleSection": isDe ? "Case Study" : "Case Study",
      "inLanguage": lang === 'de' ? 'de-DE' : 'en-US',
      "author": {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        "name": "Norddorf"
      },
      "publisher": {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        "name": "Norddorf",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}/${lang}/${projectPath}/${caseStudy.slug}`
      },
      "about": {
        "@type": "WebApplication",
        "name": caseStudy.title,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser"
      },
      "mentions": caseStudy.content.techStack.map(tech => ({
        "@type": "SoftwareApplication",
        "name": tech,
        "applicationCategory": "DeveloperApplication"
      })),
      "proficiencyLevel": "Expert",
      "dependencies": caseStudy.content.techStack.join(", "),
      "keywords": [caseStudy.industry, "Case Study", "Web Development", ...caseStudy.content.techStack].join(", "),
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".intro-text", "blockquote"]
      }
    };

    const articleScript = document.createElement('script');
    articleScript.id = articleSchemaId;
    articleScript.type = 'application/ld+json';
    articleScript.text = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);

    return () => {
      const breadcrumbToRemove = document.getElementById(breadcrumbSchemaId);
      if (breadcrumbToRemove) breadcrumbToRemove.remove();
      const articleToRemove = document.getElementById(articleSchemaId);
      if (articleToRemove) articleToRemove.remove();
    };
  }, [caseStudy, lang, isDe, baseUrl, projectPath]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="fluid-section-title font-bold text-zinc-900 mb-4">
            {isDe ? 'Projekt nicht gefunden' : 'Project not found'}
          </h1>
          <p className="text-zinc-500 mb-8">
            {isDe 
              ? 'Das gesuchte Projekt existiert nicht.' 
              : 'The project you\'re looking for doesn\'t exist.'}
          </p>
          <button
            onClick={() => navigate(isDe ? '/de' : '/en')}
            className="inline-flex items-center gap-2 bg-sonic-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            {isDe ? 'Zurück zur Startseite' : 'Back to homepage'}
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[caseStudy.icon];
  const animationClass = prefersReducedMotion ? '' : 'reveal';

  return (
    <>
      <SEO 
        title={caseStudy.seo.title}
        description={caseStudy.seo.description}
      />

      {/* Reading Progress Bar */}
      <ProgressBar progress={readingProgress} prefersReducedMotion={prefersReducedMotion} />

      {/* Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-zinc-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange"
      >
        {isDe ? 'Zum Hauptinhalt springen' : 'Skip to main content'}
      </a>

      <main id="main-content" role="main">
        {/* Hero Section */}
        <section 
          className="relative text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
          style={{ backgroundColor: caseStudy.color }}
          aria-labelledby="hero-heading"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>

          <div className="container-responsive relative z-10">
            {/* Back Link */}
            <Link
              to={`/${lang}#case-studies`}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-8 fluid-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg px-2 py-1 -mx-2"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              {isDe ? 'Alle Projekte' : 'All Projects'}
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-white/20 px-3 py-1 rounded-full fluid-xs font-medium">
                    {caseStudy.industry}
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full fluid-xs font-medium">
                    {caseStudy.year}
                  </span>
                </div>

                {/* Title */}
                <h1 id="hero-heading" className="fluid-hero font-bold mb-6 tracking-tight">
                  {caseStudy.title}
                </h1>

                {/* Intro */}
                <p className="intro-text fluid-lg text-white/90 mb-8 leading-relaxed">
                  {caseStudy.content.intro}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  {caseStudy.liveUrl && (
                    <a
                      href={caseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                      aria-label={`${isDe ? 'Live-Projekt ansehen' : 'View Live Project'}: ${caseStudy.title} (${isDe ? 'öffnet in neuem Tab' : 'opens in new tab'})`}
                    >
                      {isDe ? 'Live-Projekt ansehen' : 'View Live Project'}
                      <ExternalLink size={18} aria-hidden="true" />
                    </a>
                  )}
                  <ShareButtons title={caseStudy.seo.title} url={currentUrl} isDe={isDe} />
                </div>
              </div>

              {/* Key Metric Card */}
              <div className="flex justify-center lg:justify-end">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30 text-center">
                  <IconComponent className="mx-auto mb-6 text-white/70" size={48} aria-hidden="true" />
                  <div className="fluid-hero font-bold mb-2">
                    {caseStudy.preview.metric}
                  </div>
                  <div className="fluid-base text-white/90">
                    {caseStudy.preview.metricLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Hook Section */}
        {caseStudy.content.story && (
          <section 
            className="fluid-section bg-zinc-900 text-white"
            aria-labelledby="story-hook-heading"
          >
            <div className="container-responsive">
              <div className={`max-w-4xl mx-auto ${animationClass}`}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-sonic-orange/20 rounded-2xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Quote className="text-sonic-orange" size={32} />
                  </div>
                  <div>
                    <h2 id="story-hook-heading" className="sr-only">
                      {isDe ? 'Die Geschichte' : 'The Story'}
                    </h2>
                    <p className="fluid-xl text-white leading-relaxed font-medium">
                      {caseStudy.content.story.hook}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Challenge Section */}
        <section 
          className="fluid-section bg-white"
          aria-labelledby="challenge-heading"
        >
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto">
              <div className={`mb-12 ${animationClass}`}>
                <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                  {isDe ? 'Die Herausforderung' : 'The Challenge'}
                </p>
                <h2 id="challenge-heading" className="fluid-section-title font-bold text-zinc-900 tracking-tight">
                  {isDe ? 'Was war das Problem?' : 'What was the problem?'}
                </h2>
              </div>

              <ol className={`grid gap-4 ${animationClass}`} role="list">
                {caseStudy.content.challenge.map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-4 bg-zinc-50 rounded-xl p-6 border border-zinc-100"
                  >
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <span className="text-red-600 font-bold fluid-sm">{i + 1}</span>
                    </div>
                    <p className="text-zinc-700 fluid-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section 
          className="fluid-section bg-zinc-50"
          aria-labelledby="approach-heading"
        >
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto">
              <div className={`mb-12 ${animationClass}`}>
                <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                  {isDe ? 'Unser Ansatz' : 'Our Approach'}
                </p>
                <h2 id="approach-heading" className="fluid-section-title font-bold text-zinc-900 tracking-tight">
                  {isDe ? 'Wie haben wir es gelöst?' : 'How did we solve it?'}
                </h2>
              </div>

              <ul className={`grid gap-4 ${animationClass}`} role="list">
                {caseStudy.content.approach.map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-4 bg-white rounded-xl p-6 border border-zinc-100"
                  >
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Check className="text-sonic-orange" size={18} aria-hidden="true" />
                    </div>
                    <p className="text-zinc-700 fluid-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Turning Point Section */}
        {caseStudy.content.story && (
          <section 
            className="fluid-section bg-sonic-orange text-white"
            aria-labelledby="turning-point-heading"
          >
            <div className="container-responsive">
              <div className={`max-w-4xl mx-auto ${animationClass}`}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Lightbulb className="text-white" size={32} />
                  </div>
                  <div>
                    <p className="font-mono fluid-xs uppercase tracking-widest mb-4 text-white/80">
                      {isDe ? 'Der Wendepunkt' : 'The Turning Point'}
                    </p>
                    <h2 id="turning-point-heading" className="fluid-xl text-white leading-relaxed font-medium">
                      {caseStudy.content.story.turningPoint}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features Grid */}
        <section 
          className="fluid-section bg-white"
          aria-labelledby="features-heading"
        >
          <div className="container-responsive">
            <div className="max-w-5xl mx-auto">
              <div className={`text-center mb-12 ${animationClass}`}>
                <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                  {isDe ? 'Key Features' : 'Key Features'}
                </p>
                <h2 id="features-heading" className="fluid-section-title font-bold text-zinc-900 tracking-tight">
                  {isDe ? 'Was macht die Seite besonders?' : 'What makes the site special?'}
                </h2>
              </div>

              <div className={`grid md:grid-cols-2 gap-6 ${animationClass}`}>
                {caseStudy.content.features.map((feature, i) => (
                  <article 
                    key={i} 
                    className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:border-zinc-200 transition-colors"
                  >
                    <div className="w-12 h-12 bg-sonic-orange/10 rounded-xl flex items-center justify-center mb-4" aria-hidden="true">
                      <Zap className="text-sonic-orange" size={24} aria-hidden="true" />
                    </div>
                    <h3 className="fluid-xl font-bold text-zinc-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600 fluid-base leading-relaxed">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        {caseStudy.content.story && (
          <section 
            className="fluid-section bg-gradient-to-br from-zinc-50 to-green-50"
            aria-labelledby="transformation-heading"
          >
            <div className="container-responsive">
              <div className={`max-w-4xl mx-auto ${animationClass}`}>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-green-100">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Sparkles className="text-green-600" size={32} />
                    </div>
                    <div>
                      <p className="font-mono fluid-xs uppercase tracking-widest mb-4 text-green-600">
                        {isDe ? 'Die Transformation' : 'The Transformation'}
                      </p>
                      <h2 id="transformation-heading" className="fluid-xl text-zinc-900 leading-relaxed font-medium">
                        {caseStudy.content.story.transformation}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Metrics Section */}
        <section 
          className="fluid-section bg-zinc-900 text-white"
          aria-labelledby="metrics-heading"
        >
          <div className="container-responsive">
            <div className="max-w-5xl mx-auto">
              <div className={`text-center mb-12 ${animationClass}`}>
                <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                  {isDe ? 'Die Zahlen' : 'The Numbers'}
                </p>
                <h2 id="metrics-heading" className="fluid-section-title font-bold tracking-tight">
                  {isDe ? 'Messbare Ergebnisse' : 'Measurable Results'}
                </h2>
              </div>

              <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${animationClass}`}>
                {caseStudy.content.metrics.map((metric, i) => (
                  <div 
                    key={i} 
                    className="bg-white/5 rounded-2xl p-6 border border-white/20 text-center"
                  >
                    <div className="fluid-2xl font-bold text-sonic-orange mb-2">
                      {metric.value}
                    </div>
                    <div className="fluid-sm text-white font-medium mb-1">
                      {metric.label}
                    </div>
                    {metric.comparison && (
                      <div className="fluid-xs text-white/70">
                        ({metric.comparison})
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section 
          className="fluid-section bg-white"
          aria-labelledby="results-heading"
        >
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto">
              <div className={`mb-12 ${animationClass}`}>
                <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                  {isDe ? 'Ergebnisse' : 'Results'}
                </p>
                <h2 id="results-heading" className="fluid-section-title font-bold text-zinc-900 tracking-tight">
                  {isDe ? 'Was haben wir erreicht?' : 'What did we achieve?'}
                </h2>
              </div>

              <ul className={`grid gap-4 ${animationClass}`} role="list">
                {caseStudy.content.results.map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-4 bg-green-50 rounded-xl p-6 border border-green-100"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Check className="text-green-600" size={18} aria-hidden="true" />
                    </div>
                    <p className="text-zinc-700 fluid-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section 
          className="fluid-section bg-zinc-50"
          aria-labelledby="tech-stack-heading"
        >
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`mb-8 ${animationClass}`}>
                <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                  {isDe ? 'Tech Stack' : 'Tech Stack'}
                </p>
                <h2 id="tech-stack-heading" className="fluid-xl font-bold text-zinc-900 tracking-tight">
                  {isDe ? 'Verwendete Technologien' : 'Technologies Used'}
                </h2>
              </div>

              <ul className={`flex flex-wrap justify-center gap-3 ${animationClass}`} role="list">
                {caseStudy.content.techStack.map((tech, i) => (
                  <li 
                    key={i} 
                    className="bg-white px-4 py-2 rounded-full fluid-sm font-medium text-zinc-700 border border-zinc-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section 
          className="fluid-section bg-white"
          aria-labelledby="conclusion-heading"
        >
          <div className="container-responsive">
            <div className={`max-w-3xl mx-auto text-center ${animationClass}`}>
              <h2 id="conclusion-heading" className="sr-only">
                {isDe ? 'Fazit' : 'Conclusion'}
              </h2>
              <blockquote className="fluid-lg text-zinc-700 leading-relaxed italic mb-8">
                "{caseStudy.content.conclusion}"
              </blockquote>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <RelatedProjects 
          currentSlug={caseStudy.slug} 
          lang={lang} 
          isDe={isDe} 
        />

        {/* CTA Section */}
        <section 
          className="fluid-section bg-sonic-orange text-white"
          aria-labelledby="cta-heading"
        >
          <div className="container-responsive">
            <div className={`max-w-3xl mx-auto text-center ${animationClass}`}>
              <h2 id="cta-heading" className="fluid-section-title font-bold mb-6 tracking-tight">
                {isDe 
                  ? 'Bereit für dein eigenes Projekt?' 
                  : 'Ready for your own project?'}
              </h2>
              <p className="fluid-lg text-white/90 mb-8">
                {isDe 
                  ? 'Lass uns gemeinsam herausfinden, wie wir auch dein Business digital voranbringen können.'
                  : 'Let\'s find out together how we can advance your business digitally.'}
              </p>
              <Link
                to={`/${lang}#form`}
                className="inline-flex items-center gap-2 bg-white text-sonic-orange px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors fluid-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sonic-orange"
              >
                {isDe ? 'Gratis-Entwurf anfordern' : 'Request Free Design'}
                <ArrowLeft size={20} className="rotate-180" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      <BackToTop show={showBackToTop} prefersReducedMotion={prefersReducedMotion} isDe={isDe} />
    </>
  );
};

export default CaseStudyPage;
