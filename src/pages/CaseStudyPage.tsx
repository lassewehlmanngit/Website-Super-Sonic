import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Leaf, Truck, Scale, Server, Building, Store, Check, Zap } from 'lucide-react';
import { getCaseStudyBySlug, CaseStudy } from '../data/caseStudies';
import { SEO } from '../components/SEO';

interface CaseStudyPageProps {
  lang: 'de' | 'en';
}

const iconMap = {
  leaf: Leaf,
  truck: Truck,
  scale: Scale,
  server: Server,
  building: Building,
  store: Store,
};

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const isDe = lang === 'de';

  const caseStudy = slug ? getCaseStudyBySlug(slug, lang) : undefined;
  const baseUrl = 'https://supersonic.design';
  const projectPath = isDe ? 'projekte' : 'projects';

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [slug]);

  // Inject structured data schemas
  useEffect(() => {
    if (!caseStudy) return;

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

    // TechArticle Schema for case study
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
      "dateModified": "2026-02-05",
      "author": {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        "name": "Super Sonic Prototypes"
      },
      "publisher": {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        "name": "Super Sonic Prototypes",
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
      "proficiencyLevel": "Expert",
      "dependencies": caseStudy.content.techStack.join(", "),
      "keywords": [caseStudy.industry, "Case Study", "Web Development", ...caseStudy.content.techStack].join(", "),
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".fluid-lg", "blockquote"]
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
            className="inline-flex items-center gap-2 bg-sonic-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            <ArrowLeft size={20} />
            {isDe ? 'Zurück zur Startseite' : 'Back to homepage'}
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[caseStudy.icon];

  return (
    <>
      <SEO 
        title={caseStudy.seo.title}
        description={caseStudy.seo.description}
      />

      {/* Hero Section */}
      <section className={`relative ${caseStudy.color} text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="container-responsive relative z-10">
          {/* Back Link */}
          <Link
            to={`/${lang}#case-studies`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 fluid-sm"
          >
            <ArrowLeft size={16} />
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
              <h1 className="fluid-hero font-bold mb-6 tracking-tight">
                {caseStudy.title}
              </h1>

              {/* Intro */}
              <p className="fluid-lg text-white/80 mb-8 leading-relaxed">
                {caseStudy.content.intro}
              </p>

              {/* CTA */}
              {caseStudy.liveUrl && (
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  {isDe ? 'Live-Projekt ansehen' : 'View Live Project'}
                  <ExternalLink size={18} />
                </a>
              )}
            </div>

            {/* Key Metric Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 text-center">
                <IconComponent className="mx-auto mb-6 text-white/60" size={48} />
                <div className="fluid-hero font-bold mb-2">
                  {caseStudy.preview.metric}
                </div>
                <div className="fluid-base text-white/70">
                  {caseStudy.preview.metricLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="fluid-section bg-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                {isDe ? 'Die Herausforderung' : 'The Challenge'}
              </p>
              <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight">
                {isDe ? 'Was war das Problem?' : 'What was the problem?'}
              </h2>
            </div>

            <div className="grid gap-4 reveal">
              {caseStudy.content.challenge.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 bg-zinc-50 rounded-xl p-6 border border-zinc-100"
                >
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold fluid-sm">{i + 1}</span>
                  </div>
                  <p className="text-zinc-700 fluid-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="fluid-section bg-zinc-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                {isDe ? 'Unser Ansatz' : 'Our Approach'}
              </p>
              <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight">
                {isDe ? 'Wie haben wir es gelöst?' : 'How did we solve it?'}
              </h2>
            </div>

            <div className="grid gap-4 reveal">
              {caseStudy.content.approach.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 bg-white rounded-xl p-6 border border-zinc-100"
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-sonic-orange" size={18} />
                  </div>
                  <p className="text-zinc-700 fluid-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="fluid-section bg-white">
        <div className="container-responsive">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 reveal">
              <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                {isDe ? 'Key Features' : 'Key Features'}
              </p>
              <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight">
                {isDe ? 'Was macht die Seite besonders?' : 'What makes the site special?'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 reveal">
              {caseStudy.content.features.map((feature, i) => (
                <div 
                  key={i} 
                  className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:border-zinc-200 transition-colors"
                >
                  <div className="w-12 h-12 bg-sonic-orange/10 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="text-sonic-orange" size={24} />
                  </div>
                  <h3 className="fluid-xl font-bold text-zinc-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 fluid-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="fluid-section bg-zinc-900 text-white">
        <div className="container-responsive">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 reveal">
              <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                {isDe ? 'Die Zahlen' : 'The Numbers'}
              </p>
              <h2 className="fluid-section-title font-bold tracking-tight">
                {isDe ? 'Messbare Ergebnisse' : 'Measurable Results'}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
              {caseStudy.content.metrics.map((metric, i) => (
                <div 
                  key={i} 
                  className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center"
                >
                  <div className="fluid-2xl font-bold text-sonic-orange mb-2">
                    {metric.value}
                  </div>
                  <div className="fluid-sm text-white/90 font-medium mb-1">
                    {metric.label}
                  </div>
                  {metric.comparison && (
                    <div className="fluid-xs text-white/50">
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
      <section className="fluid-section bg-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                {isDe ? 'Ergebnisse' : 'Results'}
              </p>
              <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight">
                {isDe ? 'Was haben wir erreicht?' : 'What did we achieve?'}
              </h2>
            </div>

            <div className="grid gap-4 reveal">
              {caseStudy.content.results.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 bg-green-50 rounded-xl p-6 border border-green-100"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-green-600" size={18} />
                  </div>
                  <p className="text-zinc-700 fluid-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="fluid-section bg-zinc-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 reveal">
              <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
                {isDe ? 'Tech Stack' : 'Tech Stack'}
              </p>
              <h2 className="fluid-xl font-bold text-zinc-900 tracking-tight">
                {isDe ? 'Verwendete Technologien' : 'Technologies Used'}
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 reveal">
              {caseStudy.content.techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="bg-white px-4 py-2 rounded-full fluid-sm font-medium text-zinc-700 border border-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="fluid-section bg-white">
        <div className="container-responsive">
          <div className="max-w-3xl mx-auto text-center reveal">
            <blockquote className="fluid-lg text-zinc-700 leading-relaxed italic mb-8">
              "{caseStudy.content.conclusion}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fluid-section bg-sonic-orange text-white">
        <div className="container-responsive">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="fluid-section-title font-bold mb-6 tracking-tight">
              {isDe 
                ? 'Bereit für dein eigenes Projekt?' 
                : 'Ready for your own project?'}
            </h2>
            <p className="fluid-lg text-white/80 mb-8">
              {isDe 
                ? 'Lass uns gemeinsam herausfinden, wie wir auch dein Business digital voranbringen können.'
                : 'Let\'s find out together how we can advance your business digitally.'}
            </p>
            <Link
              to={`/${lang}#form`}
              className="inline-flex items-center gap-2 bg-white text-sonic-orange px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors fluid-base"
            >
              {isDe ? 'Gratis-Entwurf anfordern' : 'Request Free Design'}
              <ArrowLeft size={20} className="rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyPage;
