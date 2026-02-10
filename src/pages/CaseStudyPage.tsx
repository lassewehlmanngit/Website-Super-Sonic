import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react';
import { getCaseStudyBySlug, getAllCaseStudies, CaseStudy } from '../data/caseStudies';
import { BlogLayout } from '../components/templates/BlogLayout';
import { BlogHeader } from '../components/molecules/blog/BlogHeader';
import { BlogSection } from '../components/molecules/blog/BlogSection';
import { BlogImage } from '../components/molecules/blog/BlogImage';
import { BlogList } from '../components/molecules/blog/BlogList';
import { FAQSection } from '../components/features/FAQSection';

interface CaseStudyPageProps {
  lang: 'de' | 'en' | 'ja';
}

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
    <section className="py-20 bg-zinc-50 border-t border-zinc-200">
      <div className="container-responsive max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
            {isDe ? 'Das könnte dich auch interessieren' : 'You might also like'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {relatedProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/${lang}/${projectPath}/${project.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-200 hover:shadow-md transition-all"
            >
              {project.heroImage && (
                <div className="aspect-video overflow-hidden bg-zinc-100">
                  <img 
                    src={project.heroImage} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-zinc-500">
                  <span>{project.industry}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-sonic-orange transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 line-clamp-2">
                  {project.content.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const isDe = lang === 'de';

  const caseStudy = slug ? getCaseStudyBySlug(slug, lang) : undefined;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-4">
            {isDe ? 'Projekt nicht gefunden' : 'Project not found'}
          </h1>
          <button
            onClick={() => navigate(isDe ? '/de' : '/en')}
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-zinc-800 transition-colors"
          >
            <ArrowLeft size={20} />
            {isDe ? 'Zurück zur Startseite' : 'Back to homepage'}
          </button>
        </div>
      </div>
    );
  }

  const images = caseStudy.images || {};
  const faqs = caseStudy.faqs || [];

  return (
    <BlogLayout
      seo={{
        title: caseStudy.seo?.title || caseStudy.title,
        description: caseStudy.seo?.description || caseStudy.content.intro,
        image: caseStudy.heroImage,
      }}
      lang={lang}
    >
      <BlogHeader
        title={caseStudy.title}
        client={caseStudy.client}
        industry={caseStudy.industry}
        year={caseStudy.year}
        image={caseStudy.heroImage}
        backLink={`/${lang}#case-studies`}
        backLabel={isDe ? 'Alle Projekte' : 'All Projects'}
      />

      {/* Intro */}
      <BlogSection>
        <p className="lead text-xl md:text-2xl leading-relaxed font-medium text-zinc-900 mb-8">
          {caseStudy.content.intro}
        </p>
        
        {caseStudy.liveUrl && (
          <div className="not-prose mb-12">
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors"
            >
              {isDe ? 'Live-Projekt ansehen' : 'View Live Project'}
              <ExternalLink size={18} />
            </a>
          </div>
        )}
      </BlogSection>

      {/* Story / Problem */}
      {caseStudy.content.story && (
        <BlogSection title={isDe ? 'Die Ausgangslage' : 'The Challenge'}>
          <p>{caseStudy.content.story.hook}</p>
          {images.hero && (
            <BlogImage 
              src={images.hero} 
              alt="Hero Section" 
              caption={isDe ? "Die neue Hero-Section." : "The new Hero Section."}
              fullWidth
            />
          )}
        </BlogSection>
      )}

      {/* Challenge & Approach */}
      <BlogSection title={isDe ? 'Herausforderung & Lösungsansatz' : 'Challenge & Approach'}>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">{isDe ? 'Die Herausforderung' : 'The Challenge'}</h3>
            <ul className="space-y-3">
              {caseStudy.content.challenge.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span className="text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{isDe ? 'Unser Ansatz' : 'Our Approach'}</h3>
            <ul className="space-y-3">
              {caseStudy.content.approach.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  <span className="text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BlogSection>

      {/* Key Features */}
      {caseStudy.content.features.length > 0 && (
        <BlogSection title={isDe ? 'Hauptfunktionen' : 'Key Features'}>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.content.features.map((feature, i) => (
              <div key={i} className="bg-zinc-50 p-6 rounded-xl border border-zinc-100">
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-zinc-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          {images.features && (
            <BlogImage 
              src={images.features} 
              alt="Features" 
              caption={isDe ? "Funktionsübersicht" : "Feature Overview"}
            />
          )}
        </BlogSection>
      )}

      {/* Results */}
      {caseStudy.content.results.length > 0 && (
        <BlogSection title={isDe ? 'Ergebnisse' : 'Results'}>
          <ul className="space-y-4">
            {caseStudy.content.results.map((result, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 text-sonic-orange">
                  <Check size={20} />
                </div>
                <span className="text-lg text-zinc-800 font-medium">{result}</span>
              </li>
            ))}
          </ul>
        </BlogSection>
      )}

      {/* Tech Stack */}
      <BlogSection title={isDe ? 'Technologie' : 'Technology'}>
        <div className="flex flex-wrap gap-2 not-prose">
          {caseStudy.content.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm font-medium border border-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </BlogSection>

      {/* Conclusion */}
      <BlogSection>
        <div className="bg-zinc-50 border-l-4 border-sonic-orange p-6 md:p-8 rounded-r-xl my-8 not-prose">
          <h3 className="text-xl font-bold mb-4">{isDe ? 'Fazit' : 'Conclusion'}</h3>
          <p className="text-lg text-zinc-700 italic leading-relaxed">
            "{caseStudy.content.conclusion}"
          </p>
        </div>
      </BlogSection>

      {/* FAQ Section - Moved to bottom */}
      {faqs.length > 0 && (
        <div className="bg-zinc-50 border-y border-zinc-200 my-12 py-12">
          <div className="container-responsive max-w-3xl mx-auto px-4">
            <FAQSection 
              title={isDe ? 'Häufige Fragen zum Projekt' : 'Project FAQs'} 
              faqs={faqs} 
              id="case-study-faq" 
            />
          </div>
        </div>
      )}

      {/* Global CTA */}
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="container-responsive max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {isDe ? 'Willst du wissen, wie wir deinen Webauftritt effizienter machen können?' : 'Want to know how we can make your web presence more efficient?'}
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            {isDe ? 'Lass uns sprechen.' : 'Let\'s talk.'}
          </p>
          <Link
            to={`/${lang}#form`}
            className="inline-flex items-center gap-2 bg-sonic-orange text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors text-lg"
          >
            {isDe ? 'Jetzt Analyse anfragen' : 'Request Analysis Now'}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      <RelatedProjects currentSlug={caseStudy.slug} lang={lang} isDe={isDe} />

    </BlogLayout>
  );
};

export default CaseStudyPage;
