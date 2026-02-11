import React, { useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Leaf, Truck, Scale, Server, Building, Store, X, ExternalLink, Check, Clock, Package } from 'lucide-react';
import { getAllCaseStudies, CaseStudy } from '../../data/caseStudies';
import { Lang } from '../../types';

interface ProjectShowcaseProps {
  lang: Lang;
}

const iconMap: Record<string, React.ElementType> = {
  leaf: Leaf,
  truck: Truck,
  scale: Scale,
  server: Server,
  building: Building,
  store: Store,
};

type ProjectStatus = 'live' | 'in_progress' | 'delivered';

interface ShowcaseProject {
  id: string;
  icon: React.ElementType;
  title: string;
  industry: string;
  tagline: string;
  description: string;
  color: string;
  status: ProjectStatus;
  metric?: string;
  metricLabel?: string;
  techStack?: string[];
  liveUrl?: string;
  caseStudySlug?: string; // If has full case study page
  image?: string;
}

// Modal Component
interface ProjectModalProps {
  project: ShowcaseProject | null;
  onClose: () => void;
  lang: Lang;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';
  const projectPath = isDe ? 'projekte' : isJa ? 'プロジェクト' : 'projects';
  
  // Add mounted state for safe Portal usage
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project || !mounted) return null;

  const IconComponent = project.icon;

  const statusConfig = {
    live: {
      label: 'Live',
      color: 'bg-green-500',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      icon: Check,
    },
    in_progress: {
      label: isJa ? '進行中' : 'In Progress',
      color: 'bg-yellow-500',
      textColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      icon: Clock,
    },
    delivered: {
      label: isJa ? '納品済み' : isDe ? 'Übergeben' : 'Delivered',
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: Package,
    },
  };

  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  // Use createPortal to render outside the overflow-hidden parent
  return createPortal(
    <>
      {/* Backdrop - Increased Z-Index to 2000 */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container - Handles centering via flexbox */}
      <div className="fixed inset-0 z-[2001] flex items-center justify-center p-4 pointer-events-none">
        {/* Modal Content - Visible, clickable */}
        <div
          className="w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl overflow-hidden flex flex-col modal-content shadow-2xl pointer-events-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header with brand color */}
          <div
            className="relative p-8 pb-12 overflow-hidden"
            style={{ 
              backgroundColor: project.color,
            }}
          >
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )}

            {/* Overlay if image exists */}
            {project.image && (
              <div className="absolute inset-0 bg-black/40" />
            )}

            {/* Close button - Added z-10 */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-10 backdrop-blur-md"
              aria-label={isJa ? '閉じる' : isDe ? 'Schließen' : 'Close'}
            >
              <X size={20} aria-hidden="true" />
            </button>

            {/* Background icon */}
            {!project.image && (
              <IconComponent
                className="absolute bottom-4 right-8 text-white/10"
                size={100}
                aria-hidden="true"
              />
            )}

            {/* Status badge - Added z-10 */}
            <div className={`inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full mb-4 relative z-10 shadow-sm`}>
              <StatusIcon size={14} className={status.textColor} aria-hidden="true" />
              <span className={`${status.textColor} fluid-xs font-bold`}>{status.label}</span>
            </div>

            {/* Title - Added z-10 */}
            <h2 id="modal-title" className="text-white fluid-2xl font-bold tracking-tight mb-2 relative z-10 drop-shadow-md">
              {project.title}
            </h2>
            <p className="text-white/90 fluid-sm relative z-10 font-medium drop-shadow-sm">{project.industry}</p>
          </div>

          {/* Content - Added overscroll-contain */}
          <div className="flex-1 overflow-y-auto p-8 overscroll-contain bg-white">

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-zinc-900 font-semibold fluid-base mb-2">
                {isJa ? 'プロジェクトについて' : isDe ? 'Über das Projekt' : 'About the project'}
              </h3>
              <p className="text-zinc-600 fluid-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Features / Tech stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="mb-6">
                <h3 className="text-zinc-900 font-semibold fluid-base mb-3">
                  {isJa ? '主な機能' : isDe ? 'Features' : 'Key Features'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-full fluid-xs border border-zinc-200 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Status-specific info */}
            {project.status === 'in_progress' && (
              <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 mb-6">
                <p className="text-yellow-700 fluid-sm">
                  {isJa
                    ? 'このプロジェクトは現在開発中です。完了後に事例紹介を公開します。'
                    : isDe
                    ? 'Dieses Projekt befindet sich aktuell in der Entwicklung. Case Study folgt nach Abschluss.'
                    : 'This project is currently in development. Case study will follow upon completion.'}
                </p>
              </div>
            )}

            {project.status === 'delivered' && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                <p className="text-blue-700 fluid-sm">
                  {isJa
                    ? 'このプロジェクトはクライアントに正常に納品され、外部で運用されています。'
                    : isDe
                    ? 'Dieses Projekt wurde erfolgreich an den Kunden übergeben und wird extern betrieben.'
                    : 'This project has been successfully delivered to the client and is operated externally.'}
                </p>
              </div>
            )}
          </div>

          {/* Footer actions - Added z-20 */}
          <div className="p-6 border-t border-zinc-100 flex flex-col sm:flex-row gap-3 bg-zinc-50 z-20">
            {project.caseStudySlug && (
              <Link
                to={`/${lang}/${projectPath}/${project.caseStudySlug}`}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-sonic-orange hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                onClick={onClose}
              >
                {isJa ? '詳細な事例紹介' : isDe ? 'Vollständige Case Study' : 'Full Case Study'}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${project.caseStudySlug ? '' : 'flex-1'} inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 px-6 py-3 rounded-xl font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white shadow-sm`}
              >
                {isJa ? 'ライブで見る' : isDe ? 'Live ansehen' : 'View Live'}
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            )}
            {!project.caseStudySlug && !project.liveUrl && (
              <button
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 px-6 py-3 rounded-xl font-semibold transition-colors shadow-sm"
              >
                {isJa ? '閉じる' : isDe ? 'Schließen' : 'Close'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes modal-backdrop-in {
          from { 
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to { 
            opacity: 1;
            backdrop-filter: blur(8px);
          }
        }
        
        @keyframes modal-content-in {
          0% { 
            opacity: 0;
            transform: scale(0.96) translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .modal-backdrop {
          animation: modal-backdrop-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .modal-content {
          animation: modal-content-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .modal-backdrop,
          .modal-content {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </>,
    document.body
  );
};

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  const caseStudies = getAllCaseStudies(lang);

  // Transform case studies to ShowcaseProject format
  const liveProjects: ShowcaseProject[] = caseStudies.map((cs: CaseStudy) => ({
    id: cs.slug,
    icon: iconMap[cs.icon] || Leaf,
    title: cs.title,
    industry: cs.industry,
    tagline: cs.preview.result,
    description: cs.content.intro,
    color: cs.color,
    status: 'live' as ProjectStatus,
    metric: cs.preview.metric,
    metricLabel: cs.preview.metricLabel,
    // Use features instead of techStack
    techStack: cs.content.features.map(f => f.title),
    liveUrl: cs.liveUrl,
    caseStudySlug: cs.slug,
    image: cs.heroImage,
  }));

  // In Progress projects
  const inProgressProjects: ShowcaseProject[] = [];

  // Delivered projects (handed off to clients)
  const deliveredProjects: ShowcaseProject[] = [];

  const allProjects = [...liveProjects, ...inProgressProjects, ...deliveredProjects];
  const totalSlides = allProjects.length;

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 24
      : 0;
    if (cardWidth > 0) {
      setActiveIndex(Math.round(scrollLeft / cardWidth));
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();

    return () => container.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  const scrollTo = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 24
      : 400;

    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 24
      : 400;

    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  const statusConfig = {
    live: {
      label: 'Live',
      dotColor: 'bg-green-500',
      badgeBg: 'bg-green-100',
      badgeText: 'text-green-700',
      animate: true,
    },
    in_progress: {
      label: isJa ? '進行中' : 'In Progress',
      dotColor: 'bg-yellow-500',
      badgeBg: 'bg-yellow-100',
      badgeText: 'text-yellow-700',
      animate: false,
    },
    delivered: {
      label: isJa ? '納品済み' : isDe ? 'Übergeben' : 'Delivered',
      dotColor: 'bg-blue-500',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-700',
      animate: false,
    },
  };

  return (
    <section className="py-16 md:py-24 bg-zinc-50 overflow-hidden" aria-labelledby="showcase-heading">
      <div className="w-full max-w-[80rem] mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest">
                {isJa ? '私たちの仕事' : isDe ? 'Unsere Arbeit' : 'Our Work'}
              </p>
            </div>
            <h2 id="showcase-heading" className="fluid-section-title font-bold text-zinc-900 tracking-tight">
              {isJa ? '成果を出すプロジェクト。' : isDe ? 'Projekte, die liefern.' : 'Projects that deliver.'}
            </h2>
          </div>

          {/* Desktop navigation arrows */}
          <div className="hidden md:flex items-center gap-3" role="group" aria-label={isJa ? 'カルーセルナビゲーション' : isDe ? 'Karussell-Navigation' : 'Carousel navigation'}>
            <button
              onClick={() => scrollTo('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 hover:bg-zinc-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange bg-white shadow-sm"
              aria-label={isJa ? '前のプロジェクト' : isDe ? 'Vorheriges Projekt' : 'Previous project'}
            >
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button
              onClick={() => scrollTo('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 hover:bg-zinc-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange bg-white shadow-sm"
              aria-label={isJa ? '次のプロジェクト' : isDe ? 'Nächstes Projekt' : 'Next project'}
            >
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-8 no-scrollbar"
        role="region"
        aria-roledescription="carousel"
        aria-label={isJa ? 'プロジェクトカルーセル' : isDe ? 'Projekt-Karussell' : 'Project carousel'}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {allProjects.map((project, index) => {
          const IconComponent = project.icon;
          const status = statusConfig[project.status];

          return (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[38vw] xl:w-[32vw] snap-start rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] text-left flex flex-col shadow-sm hover:shadow-xl ${
                project.status !== 'live' ? 'opacity-75 hover:opacity-100' : ''
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} ${isJa ? '/' : isDe ? 'von' : 'of'} ${totalSlides}: ${project.title} (${status.label})`}
            >
              {/* Hero area with brand color */}
              <div
                className="relative h-64 sm:h-72 overflow-hidden"
                style={{ 
                  backgroundColor: project.color,
                }}
              >
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                {/* Background icon - Only show if no image */}
                {!project.image && (
                  <IconComponent
                    className="absolute top-8 right-8 text-white/10"
                    size={120}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Content area */}
              <div className="bg-white p-8 border-t border-zinc-100 flex flex-col flex-1">
                {/* Meta row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zinc-500 fluid-xs font-medium uppercase tracking-wider">
                    {project.industry}
                  </span>
                  <div className={`flex items-center gap-2 ${status.badgeBg} px-2.5 py-1 rounded-full`}>
                    <span className={`w-1.5 h-1.5 ${status.dotColor} rounded-full ${status.animate ? 'animate-pulse' : ''}`} aria-hidden="true" />
                    <span className={`${status.badgeText} text-[10px] font-medium uppercase tracking-wider`}>{status.label}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-zinc-900 fluid-xl font-bold mb-2 tracking-tight">
                  {project.title}
                </h3>

                {/* CTA */}
                <div className="mt-auto pt-2 flex items-center gap-2 text-sonic-orange font-semibold fluid-sm group-hover:gap-3 transition-all">
                  {isJa ? '詳細を見る' : isDe ? 'Details ansehen' : 'View details'}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="w-full max-w-[80rem] mx-auto px-6">
        <div className="flex items-center justify-center gap-2 reveal" role="tablist" aria-label={isJa ? 'プロジェクトを選択' : isDe ? 'Projekt auswählen' : 'Select project'}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange ${
                activeIndex === index
                  ? 'w-8 bg-sonic-orange'
                  : 'w-2 bg-zinc-200 hover:bg-zinc-300'
              }`}
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`${isJa ? 'プロジェクト' : isDe ? 'Projekt' : 'Project'} ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />

      {/* Hide scrollbar globally for this component */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
