import React, { useEffect, useRef } from 'react';
import { SEO } from '../components/SEO';
import {
  LandingHero,
  ClientMarquee,
  ProjectShowcase,
  ComparisonTable,
  EngineeringStory,
  CEOLetter,
  Testimonials,
  TakeFear,
  ProcessSteps,
  DigitalSovereignty,
  FutureProof,
  CMSDemo,
  LeadForm,
  IndividualRequest,
  StrategicFAQ,
  FinalCTA,
} from '../components/landing';

interface LandingPageProps {
  lang: 'de' | 'en' | 'ja';
}

export const LandingPage: React.FC<LandingPageProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';
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
          isJa
            ? 'Norddorf | 中小企業向けウェブサイト制作 | 14日納品・固定価格・100%所有権'
            : isDe
            ? 'Norddorf | Webseiten für den Mittelstand | 14 Tage, Festpreis, 100% Eigentum'
            : 'Norddorf | Websites for SMBs | 14 Days, Fixed Price, 100% Ownership'
        }
        description={
          isJa
            ? '成果を出すウェブサイトを。最短14日で納品、92万円の固定価格、100%お客様の所有物に。中小企業にふさわしいウェブサイトを。'
            : isDe
            ? 'Webseiten die funktionieren. Maximal 14 Tage Lieferzeit, 100% Eigentum, fester Preis von 5.600€. Der Mittelstand verdient besseres.'
            : 'Websites that work. Max 14 days delivery, 100% ownership, fixed price of €5,600. SMBs deserve better.'
        }
        lang={lang}
      />

      {/* 1. Hero Section */}
      <LandingHero lang={lang} onScrollToForm={scrollToForm} />

      {/* 2. Social Proof - Client Marquee */}
      <ClientMarquee lang={lang} />

      {/* 2.5. Project Showcase Carousel */}
      <ProjectShowcase lang={lang} />

      {/* 5. Vergleich: Wir vs. "Oldschool" Agenturen */}
      <ComparisonTable lang={lang} />

      {/* 6. Der "Sonic Motor" (Engineering Story) */}
      <EngineeringStory lang={lang} />

      {/* 7. CEO Letter */}
      <CEOLetter lang={lang} />

      {/* 9. Testimonials */}
      <Testimonials lang={lang} />

      {/* 10. Take the Fear */}
      <TakeFear lang={lang} />

      {/* 12. Process Steps */}
      <ProcessSteps lang={lang} />

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

      {/* 16.5 Individual Request */}
      <IndividualRequest lang={lang} />

      {/* 17. Strategic FAQ */}
      <StrategicFAQ lang={lang} />

      {/* 18. Final CTA */}
      <FinalCTA lang={lang} onScrollToForm={scrollToForm} />
    </div>
  );
};
