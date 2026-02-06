import React, { useRef, useState, useEffect, useCallback } from 'react';
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

  if (!project) return null;

  const IconComponent = project.icon;

  const statusConfig = {
    live: {
      label: 'Live',
      color: 'bg-green-500',
      textColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      icon: Check,
    },
    in_progress: {
      label: isJa ? '進行中' : 'In Progress',
      color: 'bg-yellow-500',
      textColor: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      icon: Clock,
    },
    delivered: {
      label: isJa ? '納品済み' : isDe ? 'Übergeben' : 'Delivered',
      color: 'bg-blue-500',
      textColor: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      icon: Package,
    },
  };

  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[85vh] bg-zinc-900 rounded-3xl z-50 overflow-hidden flex flex-col modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header with brand color */}
        <div
          className="relative p-8 pb-12"
          style={{ backgroundColor: project.color }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={isJa ? '閉じる' : isDe ? 'Schließen' : 'Close'}
          >
            <X size={20} aria-hidden="true" />
          </button>

          {/* Background icon */}
          <IconComponent
            className="absolute bottom-4 right-8 text-white/10"
            size={100}
            aria-hidden="true"
          />

          {/* Status badge */}
          <div className={`inline-flex items-center gap-2 ${status.bgColor} ${status.borderColor} border px-3 py-1.5 rounded-full mb-4`}>
            <StatusIcon size={14} className={status.textColor} aria-hidden="true" />
            <span className={`${status.textColor} fluid-xs font-bold`}>{status.label}</span>
          </div>

          {/* Title */}
          <h2 id="modal-title" className="text-white fluid-2xl font-bold tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-white/70 fluid-sm">{project.industry}</p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Metric highlight */}
          {project.metric && (
            <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="text-sonic-orange fluid-2xl font-bold">{project.metric}</div>
                <div className="text-zinc-400 fluid-sm">{project.metricLabel}</div>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-white font-semibold fluid-base mb-2">
              {isJa ? 'プロジェクトについて' : isDe ? 'Über das Projekt' : 'About the project'}
            </h3>
            <p className="text-zinc-400 fluid-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="mb-6">
              <h3 className="text-white font-semibold fluid-base mb-3">
                {isJa ? '使用技術' : isDe ? 'Technologien' : 'Technologies'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-white/5 text-zinc-400 px-3 py-1.5 rounded-full fluid-xs border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Status-specific info */}
          {project.status === 'in_progress' && (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
              <p className="text-yellow-400 fluid-sm">
                {isJa
                  ? 'このプロジェクトは現在開発中です。完了後に事例紹介を公開します。'
                  : isDe
                  ? 'Dieses Projekt befindet sich aktuell in der Entwicklung. Case Study folgt nach Abschluss.'
                  : 'This project is currently in development. Case study will follow upon completion.'}
              </p>
            </div>
          )}

          {project.status === 'delivered' && (
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
              <p className="text-blue-400 fluid-sm">
                {isJa
                  ? 'このプロジェクトはクライアントに正常に納品され、外部で運用されています。'
                  : isDe
                  ? 'Dieses Projekt wurde erfolgreich an den Kunden übergeben und wird extern betrieben.'
                  : 'This project has been successfully delivered to the client and is operated externally.'}
              </p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
          {project.caseStudySlug && (
            <Link
              to={`/${lang}/${projectPath}/${project.caseStudySlug}`}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-sonic-orange hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
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
              className={`${project.caseStudySlug ? '' : 'flex-1'} inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900`}
            >
              {isJa ? 'ライブで見る' : isDe ? 'Live ansehen' : 'View Live'}
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          )}
          {!project.caseStudySlug && !project.liveUrl && (
            <button
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              {isJa ? '閉じる' : isDe ? 'Schließen' : 'Close'}
            </button>
          )}
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
            transform: translate(-50%, -48%) scale(0.96);
          }
          100% { 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        .modal-backdrop {
          animation: modal-backdrop-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .modal-content {
          animation: modal-content-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        @media (max-width: 768px) {
          @keyframes modal-content-in {
            0% { 
              opacity: 0;
              transform: translateY(20px) scale(0.96);
            }
            100% { 
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          .modal-content {
            animation: modal-content-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .modal-backdrop,
          .modal-content {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </>
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
    techStack: cs.content.techStack,
    liveUrl: cs.liveUrl,
    caseStudySlug: cs.slug,
  }));

  // In Progress projects
  const inProgressProjects: ShowcaseProject[] = isJa ? [
    {
      id: 'logistics-hero',
      icon: Truck,
      title: 'ロジスティクスヒーロー',
      industry: '物流・採用',
      tagline: '物流業界向けの最新採用ポータル。',
      description: '応募プロセスを60秒に短縮する採用ポータル。トラックドライバーや倉庫作業員がスマートフォンから直接応募できるよう、モバイルファーストで設計。',
      color: '#FF5500',
      status: 'in_progress',
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'Supabase'],
    },
    {
      id: 'law-firm-digital',
      icon: Scale,
      title: '法律事務所デジタル',
      industry: '法律サービス',
      tagline: 'プロフェッショナル、高速、個人情報保護法準拠。',
      description: 'BFSGに基づき100%アクセシブルでありながら、信頼を構築する法律事務所のウェブサイト。迅速な連絡と専門分野の明確な提示に焦点を当てています。',
      color: '#27272a',
      status: 'in_progress',
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'Accessibility'],
    },
  ] : isDe ? [
    {
      id: 'logistik-held',
      icon: Truck,
      title: 'Logistik-Held',
      industry: 'Logistik & Recruiting',
      tagline: 'Modernes Recruiting-Portal für die Logistikbranche.',
      description: 'Ein Recruiting-Portal, das den Bewerbungsprozess auf 60 Sekunden reduziert. Mobile-first Design, optimiert für LKW-Fahrer und Lagerarbeiter, die sich direkt vom Smartphone bewerben.',
      color: '#FF5500',
      status: 'in_progress',
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'Supabase'],
    },
    {
      id: 'kanzlei-digital',
      icon: Scale,
      title: 'Kanzlei-Digital',
      industry: 'Rechtsberatung',
      tagline: 'Seriös, schnell, DSGVO-sicher.',
      description: 'Eine Kanzlei-Website, die Vertrauen aufbaut und gleichzeitig 100% barrierefrei nach BFSG ist. Fokus auf schnelle Kontaktaufnahme und klare Darstellung der Fachgebiete.',
      color: '#27272a',
      status: 'in_progress',
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'Accessibility'],
    },
  ] : [
    {
      id: 'logistics-hero',
      icon: Truck,
      title: 'Logistics Hero',
      industry: 'Logistics & Recruiting',
      tagline: 'Modern recruiting portal for the logistics industry.',
      description: 'A recruiting portal that reduces the application process to 60 seconds. Mobile-first design, optimized for truck drivers and warehouse workers applying directly from their smartphones.',
      color: '#FF5500',
      status: 'in_progress',
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'Supabase'],
    },
    {
      id: 'law-firm-digital',
      icon: Scale,
      title: 'Law Firm Digital',
      industry: 'Legal Services',
      tagline: 'Professional, fast, GDPR-compliant.',
      description: 'A law firm website that builds trust while being 100% accessible according to BFSG. Focus on quick contact and clear presentation of practice areas.',
      color: '#27272a',
      status: 'in_progress',
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'Accessibility'],
    },
  ];

  // Delivered projects (handed off to clients)
  const deliveredProjects: ShowcaseProject[] = isJa ? [
    {
      id: 'startup-mvp',
      icon: Server,
      title: 'フィンテックMVP',
      industry: 'フィンテック',
      tagline: 'ベルリンのスタートアップ向けMVP。',
      description: 'フィンテックスタートアップ向けの機能的なMVP。3週間以内に開発され、社内開発チームに引き渡されました。スタートアップはこれをシリーズA資金調達の基盤として使用しています。',
      color: '#6366f1',
      status: 'delivered',
      metric: '3',
      metricLabel: 'MVP完成まで週間',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    },
  ] : isDe ? [
    {
      id: 'startup-mvp',
      icon: Server,
      title: 'FinTech MVP',
      industry: 'FinTech',
      tagline: 'MVP für ein Berliner Startup.',
      description: 'Ein funktionsfähiges MVP für ein FinTech-Startup, das innerhalb von 3 Wochen entwickelt und an das interne Entwicklerteam übergeben wurde. Das Startup nutzt es als Basis für ihre Series-A-Finanzierung.',
      color: '#6366f1',
      status: 'delivered',
      metric: '3',
      metricLabel: 'Wochen bis MVP',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    },
  ] : [
    {
      id: 'startup-mvp',
      icon: Server,
      title: 'FinTech MVP',
      industry: 'FinTech',
      tagline: 'MVP for a Berlin startup.',
      description: 'A functional MVP for a FinTech startup, developed within 3 weeks and handed off to the internal development team. The startup uses it as the foundation for their Series A funding.',
      color: '#6366f1',
      status: 'delivered',
      metric: '3',
      metricLabel: 'Weeks to MVP',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    },
  ];

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
      dotColor: 'bg-green-400',
      badgeBg: 'bg-green-500/20',
      badgeText: 'text-green-400',
      animate: true,
    },
    in_progress: {
      label: isJa ? '進行中' : 'In Progress',
      dotColor: 'bg-yellow-400',
      badgeBg: 'bg-yellow-500/20',
      badgeText: 'text-yellow-400',
      animate: false,
    },
    delivered: {
      label: isJa ? '納品済み' : isDe ? 'Übergeben' : 'Delivered',
      dotColor: 'bg-blue-400',
      badgeBg: 'bg-blue-500/20',
      badgeText: 'text-blue-400',
      animate: false,
    },
  };

  return (
    <section className="py-16 md:py-24 bg-void overflow-hidden" aria-labelledby="showcase-heading">
      <div className="container-responsive">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest">
                {isJa ? '私たちの仕事' : isDe ? 'Unsere Arbeit' : 'Our Work'}
              </p>
            </div>
            <h2 id="showcase-heading" className="fluid-section-title font-bold text-white tracking-tight">
              {isJa ? '成果を出すプロジェクト。' : isDe ? 'Projekte, die liefern.' : 'Projects that deliver.'}
            </h2>
          </div>

          {/* Desktop navigation arrows */}
          <div className="hidden md:flex items-center gap-3" role="group" aria-label={isJa ? 'カルーセルナビゲーション' : isDe ? 'Karussell-Navigation' : 'Carousel navigation'}>
            <button
              onClick={() => scrollTo('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange"
              aria-label={isJa ? '前のプロジェクト' : isDe ? 'Vorheriges Projekt' : 'Previous project'}
            >
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button
              onClick={() => scrollTo('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange"
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
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4 no-scrollbar"
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
              className={`group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[38vw] xl:w-[32vw] snap-start rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] text-left ${
                project.status !== 'live' ? 'opacity-75 hover:opacity-100' : ''
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} ${isJa ? '/' : isDe ? 'von' : 'of'} ${totalSlides}: ${project.title} (${status.label})`}
            >
              {/* Hero area with brand color */}
              <div
                className="relative h-64 sm:h-72 flex flex-col justify-end p-8"
                style={{ backgroundColor: project.color }}
              >
                {/* Background icon */}
                <IconComponent
                  className="absolute top-8 right-8 text-white/10"
                  size={120}
                  aria-hidden="true"
                />

                {/* Industry badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full fluid-xs font-medium">
                    {project.industry}
                  </span>
                </div>

                {/* Status badge */}
                <div className={`absolute top-6 right-6 flex items-center gap-2 ${status.badgeBg} backdrop-blur-sm px-3 py-1.5 rounded-full`}>
                  <span className={`w-2 h-2 ${status.dotColor} rounded-full ${status.animate ? 'animate-pulse' : ''}`} aria-hidden="true" />
                  <span className={`${status.badgeText} fluid-xs font-medium`}>{status.label}</span>
                </div>

                {/* Title + metric */}
                <div className="relative z-10">
                  <h3 className="text-white fluid-2xl font-bold mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  {project.metric && (
                    <div className="flex items-center gap-2 text-white/80">
                      <span className="font-bold text-sonic-orange fluid-lg">{project.metric}</span>
                      <span className="fluid-sm">{project.metricLabel}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content area */}
              <div className="bg-zinc-900 p-8 border-t border-white/5">
                <p className="text-zinc-400 fluid-base leading-relaxed mb-6 line-clamp-2">
                  {project.tagline}
                </p>

                {/* Tech stack pills */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="bg-white/5 text-zinc-500 px-3 py-1 rounded-full fluid-xs">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="bg-white/5 text-zinc-500 px-3 py-1 rounded-full fluid-xs">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* CTA */}
                <div className="flex items-center gap-2 text-sonic-orange font-semibold fluid-sm group-hover:gap-3 transition-all">
                  {isJa ? '詳細を見る' : isDe ? 'Details ansehen' : 'View details'}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="container-responsive mt-8">
        <div className="flex items-center justify-center gap-2 reveal" role="tablist" aria-label={isJa ? 'プロジェクトを選択' : isDe ? 'Projekt auswählen' : 'Select project'}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-orange ${
                activeIndex === index
                  ? 'w-8 bg-sonic-orange'
                  : 'w-2 bg-white/20 hover:bg-white/40'
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
