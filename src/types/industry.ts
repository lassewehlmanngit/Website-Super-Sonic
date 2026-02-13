
export interface IndustryPageData {
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustText: string;
    image?: string;
    imageAlt?: string; // Added
  };
  caseStudy: {
    kicker: string;
    headline: string;
    body: any; // rich-text
    stats: Array<{
      label: string;
      value: string;
    }>;
    ctaText: string;
    quote?: string;
    image?: string;
    imageAlt?: string; // Added
  };
  problem: {
    headline: string;
    body: any; // rich-text
    callout: string;
  };
  features: {
    headline: string;
    items: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };
  comparison: {
    headline: string;
    subline: string;
    rows: Array<{
      feature: string;
      competitor: string;
      us: string;
    }>;
    cta: {
      text: string;
      primaryBtn: string;
      secondaryBtn: string;
    };
  };
  process: {
    headline: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  about: {
    headline: string;
    body: any; // rich-text
    credentials: string;
    image?: string;
    imageAlt?: string; // Added
  };
  faq: {
    items: Array<{
      question: string;
      answer: any; // rich-text
    }>;
  };
  form: {
    headline: string;
    subline: string;
    fields: {
      namePlaceholder: string;
      emailPlaceholder: string;
      websitePlaceholder: string;
      servicePlaceholder: string;
    };
    trustText: string;
  };
  finalCta: {
    headline: string;
    body: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
}
