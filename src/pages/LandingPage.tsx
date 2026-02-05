import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO';
import {
  LandingHero,
  ClientMarquee,
  BuilderTrap,
  AntiBloat,
  ComparisonTable,
  EngineeringStory,
  CEOLetter,
  TeamSection,
  CaseStudies,
  TakeFear,
  ReferenceProjects,
  ProcessVideo,
  DigitalSovereignty,
  FutureProof,
  CMSDemo,
  LeadForm,
  StrategicFAQ,
  FinalCTA,
} from '../components/landing';

interface LandingPageProps {
  lang: 'de' | 'en';
}

export const LandingPage: React.FC<LandingPageProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const observerRef = useRef<IntersectionObserver | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Scroll to form function
  const scrollToForm = () => {
    const formSection = document.getElementById('form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Initialize scroll reveal observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe elements with .reveal class
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [lang]);

  return (
    <div className="bg-paper relative">
      <SEO
        title={
          isDe
            ? 'Super Sonic | Webseiten für den Mittelstand | 14 Tage, Festpreis, 100% Eigentum'
            : 'Super Sonic | Websites for SMBs | 14 Days, Fixed Price, 100% Ownership'
        }
        description={
          isDe
            ? 'Webseiten die funktionieren. Maximal 14 Tage Lieferzeit, 100% Eigentum, fester Preis von 5.600€. Der Mittelstand verdient besseres.'
            : 'Websites that work. Max 14 days delivery, 100% ownership, fixed price of €5,600. SMBs deserve better.'
        }
        lang={lang}
      />

      {/* 1. Hero Section */}
      <LandingHero lang={lang} onScrollToForm={scrollToForm} />

      {/* 2. Social Proof - Client Marquee */}
      <ClientMarquee lang={lang} />

      {/* 3. Die Website-Baukasten-Falle */}
      <BuilderTrap lang={lang} />

      {/* 4. Das "Anti-Bloat" Versprechen */}
      <AntiBloat lang={lang} />

      {/* 5. Vergleich: Wir vs. "Oldschool" Agenturen */}
      <ComparisonTable lang={lang} />

      {/* 6. Der "Sonic Motor" (Engineering Story) */}
      <EngineeringStory lang={lang} />

      {/* 7. CEO Letter */}
      <CEOLetter lang={lang} />

      {/* 8. Das Team */}
      <TeamSection lang={lang} />

      {/* 9. Case Studies */}
      <CaseStudies lang={lang} />

      {/* 10. Take the Fear */}
      <TakeFear lang={lang} />

      {/* 11. Referenz-Projekte */}
      <ReferenceProjects lang={lang} />

      {/* 12. Prozess-Video */}
      <ProcessVideo lang={lang} />

      {/* 13. Digitale Souveränität */}
      <DigitalSovereignty lang={lang} />

      {/* 14. Future-Proof (BFSG & AI-SEO) */}
      <FutureProof lang={lang} />

      {/* 15. CMS Demo */}
      <CMSDemo lang={lang} />

      {/* 16. Lead Form */}
      <div ref={formRef}>
        <LeadForm lang={lang} />
      </div>

      {/* 17. Strategic FAQ */}
      <StrategicFAQ lang={lang} />

      {/* 18. Final CTA */}
      <FinalCTA lang={lang} onScrollToForm={scrollToForm} />
    </div>
  );
};
