// ============================================
// CASE STUDY DATA TYPES
// ============================================

export interface CaseStudyMetric {
  label: string;
  value: string;
  comparison?: string;
}

export interface CaseStudyPreview {
  problem: string;
  solution: string;
  result: string;
  metric: string;
  metricLabel: string;
}

export interface CaseStudyContent {
  intro: string;
  challenge: string[];
  approach: string[];
  features: { title: string; description: string }[];
  results: string[];
  techStack: string[];
  metrics: CaseStudyMetric[];
  conclusion: string;
}

export interface CaseStudySEO {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  heroImage?: string;
  color: string;
  icon: 'leaf' | 'truck' | 'scale' | 'server' | 'building' | 'store';
  liveUrl?: string;
  preview: CaseStudyPreview;
  content: CaseStudyContent;
  seo: CaseStudySEO;
}

export interface LocalizedCaseStudies {
  de: CaseStudy[];
  en: CaseStudy[];
}

// ============================================
// CASE STUDY DATA
// ============================================

export const caseStudies: LocalizedCaseStudies = {
  de: [
    {
      slug: 'matcha-partners',
      title: 'Matcha Partners',
      client: 'Matcha Partners GmbH',
      industry: 'B2B Food & Beverage',
      year: '2024',
      color: 'bg-[#1B3C1D]',
      icon: 'leaf',
      liveUrl: 'https://matcha-partners.com',
      preview: {
        problem: 'B2B-Portal brauchte Lead-Qualifizierung und Markenautorität.',
        solution: 'Custom React-Stack mit Intent-basierter Navigation.',
        result: '3-4x höhere Conversion-Rate bei qualifiziertem Traffic.',
        metric: '97%',
        metricLabel: 'Besser als Templates',
      },
      content: {
        intro: 'Wie wir ein B2B-Portal gebaut haben, das besser konvertiert als 97% der Template-basierten Websites.',
        challenge: [
          'Diverse Buyer Personas ansprechen – von Café-Besitzern bis Enterprise-Einkaufsteams',
          'Leads qualifizieren bevor sie das Sales-Team erreichen',
          'Autorität in einem Markt voller Commodity-Verkäufer etablieren',
          'Conversion-Raten erreichen, die typische Website-Builder nicht schaffen',
        ],
        approach: [
          'Template-Builder von Anfang an abgelehnt – sie optimieren für das Geschäftsmodell des Builders, nicht deins',
          'Moderner React-Stack mit einem Leitprinzip: Jede technische Entscheidung muss einem Business-Ergebnis dienen',
          'Intent-basierte Navigation, die Besucher sofort segmentiert',
          'ProcessForm für Pre-Qualifizierung: Drei Felder, dreißig Sekunden, vollständige Qualifizierung',
        ],
        features: [
          {
            title: 'Intent-Selector',
            description: 'Segmentiert Besucher beim ersten Klick – Cafés sehen andere Inhalte als Enterprise-Käufer.',
          },
          {
            title: 'ProcessForm',
            description: 'B2B-Sales-Teams verschwenden 40% ihrer Zeit mit unqualifizierten Leads. Dieses Formular löst das.',
          },
          {
            title: 'Visual Editing ohne Lock-In',
            description: 'TinaCMS mit Git-Backend – alle Inhalte als JSON, für immer portabel.',
          },
          {
            title: 'SEO in der Architektur',
            description: 'Canonical URLs, hreflang Tags, Structured Data, Open Graph – alles automatisch generiert.',
          },
        ],
        results: [
          'Conversion-Raten bei qualifiziertem Traffic 3-4x höher als bei generischen Formularen',
          'First Contentful Paint: 0.8s (Template-Sites: 2.4s)',
          'JavaScript Bundle: 89KB (Template-Sites: 340KB+)',
          'Volle DSGVO-Konformität ohne zusätzliche Kosten',
        ],
        techStack: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'TinaCMS', 'React Router'],
        metrics: [
          { label: 'First Contentful Paint', value: '0.8s', comparison: '2.4s bei Templates' },
          { label: 'JavaScript Bundle', value: '89KB', comparison: '340KB+ bei Templates' },
          { label: 'Lighthouse Score', value: '90+', comparison: 'Durchgehend' },
          { label: 'Conversion-Steigerung', value: '3-4x', comparison: 'vs. generische Formulare' },
        ],
        conclusion: 'Das Matcha Partners Portal ist nicht nur eine Website. Es ist ein Lead-Qualifizierungs-System, eine Content-Plattform, ein Sales-Enablement-Tool und ein Brand-Authority-Builder – alles in einer Codebase, vollständig im Besitz des Kunden.',
      },
      seo: {
        title: 'Case Study: Matcha Partners B2B-Portal | Super Sonic',
        description: 'Wie wir ein B2B-Portal gebaut haben, das 97% besser konvertiert als Template-Websites. React, TypeScript, TinaCMS.',
      },
    },
  ],
  en: [
    {
      slug: 'matcha-partners',
      title: 'Matcha Partners',
      client: 'Matcha Partners GmbH',
      industry: 'B2B Food & Beverage',
      year: '2024',
      color: 'bg-[#1B3C1D]',
      icon: 'leaf',
      liveUrl: 'https://matcha-partners.com',
      preview: {
        problem: 'B2B portal needed lead qualification and brand authority.',
        solution: 'Custom React stack with intent-based navigation.',
        result: '3-4x higher conversion rates on qualified traffic.',
        metric: '97%',
        metricLabel: 'Better than templates',
      },
      content: {
        intro: 'How we built a B2B portal that converts better than 97% of template-based websites.',
        challenge: [
          'Engage diverse buyer personas—from café owners to enterprise procurement teams',
          'Qualify leads before they reach the sales team',
          'Establish authority in a market full of commodity sellers',
          'Achieve conversion rates that typical website builders cannot',
        ],
        approach: [
          'Rejected template builders from the start—they optimize for the builder\'s business model, not yours',
          'Modern React stack with one guiding principle: every technical choice must serve a business outcome',
          'Intent-based navigation that segments visitors immediately',
          'ProcessForm for pre-qualification: Three fields, thirty seconds, complete qualification',
        ],
        features: [
          {
            title: 'Intent Selector',
            description: 'Segments visitors at first click—cafés see different content than enterprise buyers.',
          },
          {
            title: 'ProcessForm',
            description: 'B2B sales teams waste 40% of their time on unqualified leads. This form solves that.',
          },
          {
            title: 'Visual Editing without Lock-In',
            description: 'TinaCMS with Git backend—all content as JSON, portable forever.',
          },
          {
            title: 'SEO Built Into Architecture',
            description: 'Canonical URLs, hreflang tags, Structured Data, Open Graph—all auto-generated.',
          },
        ],
        results: [
          'Conversion rates on qualified traffic 3-4x higher than generic form submissions',
          'First Contentful Paint: 0.8s (Template sites: 2.4s)',
          'JavaScript Bundle: 89KB (Template sites: 340KB+)',
          'Full GDPR compliance at no extra cost',
        ],
        techStack: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'TinaCMS', 'React Router'],
        metrics: [
          { label: 'First Contentful Paint', value: '0.8s', comparison: '2.4s on templates' },
          { label: 'JavaScript Bundle', value: '89KB', comparison: '340KB+ on templates' },
          { label: 'Lighthouse Score', value: '90+', comparison: 'Across the board' },
          { label: 'Conversion Increase', value: '3-4x', comparison: 'vs. generic forms' },
        ],
        conclusion: 'The Matcha Partners portal isn\'t just a website. It\'s a lead qualification system, a content platform, a sales enablement tool, and a brand authority builder—all in one codebase, fully owned by the client.',
      },
      seo: {
        title: 'Case Study: Matcha Partners B2B Portal | Super Sonic',
        description: 'How we built a B2B portal that converts 97% better than template websites. React, TypeScript, TinaCMS.',
      },
    },
  ],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getCaseStudyBySlug(slug: string, lang: 'de' | 'en'): CaseStudy | undefined {
  return caseStudies[lang].find((cs) => cs.slug === slug);
}

export function getAllCaseStudies(lang: 'de' | 'en'): CaseStudy[] {
  return caseStudies[lang];
}

export function getCaseStudySlugs(): string[] {
  // Slugs are the same for both languages
  return caseStudies.de.map((cs) => cs.slug);
}
