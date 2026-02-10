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
        title: caseStudy.seo.title,
        description: caseStudy.seo.description,
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
              alt="Hero Section der neuen Website" 
              caption="Die neue Hero-Section mit klarer Trennung der Zielgruppen."
              fullWidth
            />
          )}
        </BlogSection>
      )}

      {/* Services */}
      <BlogSection title={isDe ? 'Leistungen visuell erklärt' : 'Visualizing Services'}>
        <p>
          {isDe 
            ? 'Niemand liest gerne lange Textblöcke, um herauszufinden, ob eine Firma die gewünschte Leistung anbietet. Wir haben das visuell gelöst.' 
            : 'No one likes reading long text blocks to find out if a company offers a service. We solved this visually.'}
        </p>
        <p>
          {isDe
            ? 'Jeder Fachbereich wird als eigene Kachel mit passendem Bild dargestellt. Das wirkt aufgeräumt und modern. Klickt der Nutzer darauf, erhält er alle relevanten Informationen. Das schafft Übersicht und Vertrauen in die Fachkompetenz.'
            : 'Each area of expertise is presented as a tile with a matching image. This looks clean and modern. Clicking provides all relevant info, building trust.'}
        </p>
        {images.services && (
          <BlogImage 
            src={images.services} 
            alt="Dienstleistungen als Kacheln" 
            caption="Visuelle Navigation zu den Dienstleistungen."
          />
        )}
      </BlogSection>

      {/* USP / Material */}
      <BlogSection title={isDe ? 'Den echten Wettbewerbsvorteil zeigen' : 'Showcasing the USP'}>
        <p>
          {isDe
            ? 'Viele Handwerksbetriebe haben Probleme mit Lieferzeiten. Ivangs nicht. Sie haben ein großes Materiallager vor Ort. Das ist ein massives Verkaufsargument für Kunden, die nicht warten wollen.'
            : 'Many craft businesses struggle with delivery times. Not Ivangs. They have a large material stock on site. A massive selling point.'}
        </p>
        <p>
          {isDe
            ? 'Wir haben diesen Fakt nicht im Text versteckt, sondern prominent bebildert. Das Foto beweist: "Wir haben das Material da. Wir können sofort loslegen." Das überzeugt Kunden oft mehr als jeder Werbetext.'
            : 'We didn\'t hide this fact in text but visualized it prominently. The photo proves: "We have the material. We can start immediately."'}
        </p>
        {images.material && (
          <BlogImage 
            src={images.material} 
            alt="Großes Materiallager" 
            caption="Ein Blick ins gut gefüllte Materiallager schafft Vertrauen in die Lieferfähigkeit."
          />
        )}
      </BlogSection>

      {/* Trust / CEO */}
      <BlogSection title={isDe ? 'Vertrauen durch Persönlichkeit' : 'Trust through Personality'}>
        <p>
          {isDe
            ? 'Dachdecker arbeiten im privaten Bereich der Kunden. Da möchte man wissen, wem man den Auftrag gibt.'
            : 'Roofers work in customers\' private spaces. You want to know who you are hiring.'}
        </p>
        <p>
          {isDe
            ? 'Wir stellen die Geschäftsführung und das Team mit echten Fotos vor. Keine Stockfotos, sondern echte Menschen. Das macht den Betrieb nahbar und senkt die Hemmschwelle, zum Hörer zu greifen.'
            : 'We introduce the management and team with real photos. No stock photos. This makes the business approachable.'}
        </p>
        {images.ceo && (
          <BlogImage 
            src={images.ceo} 
            alt="Geschäftsführung" 
            caption="Echte Fotos der Ansprechpartner schaffen Nähe."
          />
        )}
      </BlogSection>

      {/* FAQ Context */}
      <BlogSection title={isDe ? 'Fragen vorab klären' : 'Answering Questions Upfront'}>
        <p>
          {isDe
            ? 'Im Handwerk kommen oft dieselben Fragen: "Was kostet das?", "Wie lange dauert das?", "Gibt es Förderungen?".'
            : 'In crafts, the same questions often arise: "How much?", "How long?", "Is there funding?".'}
        </p>
        <p>
          {isDe
            ? 'Wir haben einen FAQ-Bereich integriert, der diese Fragen direkt beantwortet. Für den Kunden bedeutet das sofortige Beratung, für Google besseres Ranking.'
            : 'We integrated an FAQ section answering these directly. Instant advice for the customer, better ranking for Google.'}
        </p>
        {images.faq && (
          <BlogImage 
            src={images.faq} 
            alt="FAQ Bereich" 
            caption="Häufige Fragen werden direkt auf der Seite beantwortet."
          />
        )}
      </BlogSection>

      {/* FAQ Interactive Section */}
      {faqs.length > 0 && (
        <div className="bg-zinc-50 border-y border-zinc-200 my-12">
          <FAQSection 
            title={isDe ? 'Häufige Fragen zum Projekt' : 'Project FAQs'} 
            faqs={faqs} 
            id="case-study-faq" 
          />
        </div>
      )}

      {/* Contact / CTA */}
      <BlogSection title={isDe ? 'Einfache Kontaktaufnahme' : 'Easy Contact'}>
        <p>
          {isDe
            ? 'Eine schöne Seite bringt nichts, wenn der Kunde nicht anruft. Wir haben verschiedene Wege geschaffen, um Kontakt aufzunehmen.'
            : 'A beautiful site is useless if the customer doesn\'t call. We created various ways to get in touch.'}
        </p>
        <p>
          {isDe
            ? 'Die Buttons sind groß und deutlich – besonders wichtig für Handynutzer. Man kann direkt die Nummer antippen oder das Kontaktformular nutzen.'
            : 'Buttons are large and clear – especially important for mobile users. Tap to call or use the form.'}
        </p>
        {images.cta && (
          <BlogImage 
            src={images.cta} 
            alt="Call to Action Buttons" 
            caption="Prominente Buttons erleichtern die Kontaktaufnahme."
          />
        )}
        {images.contact && (
          <BlogImage 
            src={images.contact} 
            alt="Kontaktseite" 
            caption="Alle Kontaktinfos auf einen Blick."
          />
        )}
      </BlogSection>

      {/* Tech / Why */}
      <BlogSection title={isDe ? 'Die Technik dahinter' : 'The Tech Behind It'}>
        <p>
          {isDe
            ? 'Wir haben die Seite nicht nur optisch modernisiert, sondern Funktionen eingebaut, die dem Betrieb im Alltag Zeit sparen.'
            : 'We didn\'t just modernize the look, but built in functions that save the business time.'}
        </p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">1. Unabhängigkeit durch TinaCMS</h3>
        <p>
          {isDe
            ? 'Wir haben ein System integriert, mit dem Ivangs Texte, Bilder und Stellenanzeigen direkt auf der Webseite selbst ändern kann. Sie müssen für einfache Änderungen wie neue Öffnungszeiten keine Agentur beauftragen.'
            : 'We integrated a system allowing Ivangs to change texts, images, and job ads directly. No agency needed for simple changes.'}
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">2. Bewerbung leicht gemacht (Career Wizard)</h3>
        <p>
          {isDe
            ? 'Statt von Bewerbern ein kompliziertes Anschreiben per E-Mail zu verlangen, haben wir einen interaktiven Bewerbungs-Assistenten gebaut. Bewerber klicken sich durch einfache Fragen. Das senkt die Hürde enorm.'
            : 'Instead of complex cover letters, we built an interactive career wizard. Applicants click through simple questions. Lowers the barrier significantly.'}
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">3. Geschwindigkeit</h3>
        <p>
          {isDe
            ? 'Die Seite ist technisch so aufgebaut, dass sie extrem schnell lädt. Das ist wichtig für Google, aber noch wichtiger für Kunden, die unterwegs mit dem Smartphone nach einem Dachdecker suchen.'
            : 'The site is built to load extremely fast. Important for Google, but even more for customers searching on mobile.'}
        </p>

        <div className="mt-8">
          <h4 className="text-lg font-bold mb-4">{isDe ? 'Tech Stack' : 'Tech Stack'}</h4>
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
