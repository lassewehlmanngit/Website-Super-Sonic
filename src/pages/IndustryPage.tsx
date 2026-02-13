
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTina } from "tinacms/dist/react";
import { SEO } from '../components/SEO';
import { IndustryHero } from '../components/industry/IndustryHero';
import { IndustryCaseStudy } from '../components/industry/IndustryCaseStudy';
import { IndustryProblem } from '../components/industry/IndustryProblem';
import { IndustryFeatures } from '../components/industry/IndustryFeatures';
import { IndustryComparison } from '../components/industry/IndustryComparison';
import { IndustryProcess } from '../components/industry/IndustryProcess';
import { IndustryAbout } from '../components/industry/IndustryAbout';
import { IndustryFAQ } from '../components/industry/IndustryFAQ';
import { IndustryForm } from '../components/industry/IndustryForm';
import { IndustryFinalCTA } from '../components/industry/IndustryFinalCTA';
import type { IndustryPageData } from '../types/industry';

// Fallback data for development if CMS fetch fails
const fallbackData: IndustryPageData = {
    seo: { title: 'Norddorf Handwerk', description: 'Websites für Handwerk' },
    hero: { kicker: 'Loading...', headline: 'Loading...', subheadline: '', primaryCta: '...', secondaryCta: '...', trustText: '' },
    caseStudy: { kicker: '', headline: '', body: '', stats: [], ctaText: '' },
    problem: { headline: '', body: '', callout: '' },
    features: { headline: '', items: [] },
    comparison: { headline: '', subline: '', rows: [], cta: { text: '', primaryBtn: '', secondaryBtn: '' } },
    process: { headline: '', steps: [] },
    about: { headline: '', body: '', credentials: '' },
    faq: { items: [] },
    form: { headline: '', subline: '', fields: { namePlaceholder: '', emailPlaceholder: '', websitePlaceholder: '', servicePlaceholder: '' }, trustText: '' },
    finalCta: { headline: '', body: '', primaryBtn: '', secondaryBtn: '' }
};

export const IndustryPage: React.FC = () => {
    const { slug } = useParams();
    const relativePath = `${slug}-de.json`; // Assuming German for now as per plan

    // Scroll handling
    const formRef = useRef<HTMLDivElement>(null);
    const scrollToForm = () => {
        const formSection = document.getElementById('form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const [hasError, setHasError] = useState(false);

    // Initial fetch for useTina
    const [initialData, setInitialData] = useState<any>(null);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await fetch(`/content/industry/${relativePath}`);
                if (!response.ok) throw new Error('Not found');
                const data = await response.json();
                setInitialData({ industry: data });
            } catch (err) {
                console.error(err);
                setHasError(true);
            }
        };
        fetchPage();
    }, [relativePath]);

    const { data } = useTina({
        query: `
          query Industry($relativePath: String!) {
            industry(relativePath: $relativePath) {
              seo { title description ogImage }
              hero { kicker headline subheadline primaryCta secondaryCta trustText image imageAlt }
              caseStudy { kicker headline body stats { label value } ctaText quote image imageAlt }
              problem { headline body callout }
              features { headline items { title description icon } }
              comparison { headline subline rows { feature competitor us } cta { text primaryBtn secondaryBtn } }
              process { headline steps { title description } }
              about { headline body credentials image imageAlt }
              faq { items { question answer } }
              form { headline subline fields { namePlaceholder emailPlaceholder websitePlaceholder servicePlaceholder } trustText }
              finalCta { headline body primaryBtn secondaryBtn }
            }
          }
        `,
        variables: { relativePath },
        data: initialData || { industry: fallbackData },
    });

    const page = data.industry as IndustryPageData;

    // Schema.org for Industry Page (Service + FAQ)
    const industrySchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": page.seo.title,
        "description": page.seo.description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Norddorf"
        },
        "areaServed": "DACH"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": page.faq.items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": typeof item.answer === 'string' ? item.answer : "Check website for details" // Simplified as rich text is complex to parse back to text here without helpers
            }
        }))
    };

    if (hasError) return <Navigate to="/de" replace />;
    if (!initialData) return <div className="min-h-screen bg-void flex items-center justify-center text-white">Loading...</div>;

    return (
        <div className="bg-paper relative">
            {/* Inject Industry Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <SEO
                title={page.seo?.title}
                description={page.seo?.description}
                lang="de"
            />

            <IndustryHero data={page.hero} onScrollToForm={scrollToForm} />
            <IndustryCaseStudy data={page.caseStudy} />
            <IndustryProblem data={page.problem} />
            <IndustryFeatures data={page.features} />
            <IndustryComparison data={page.comparison} onScrollToForm={scrollToForm} />
            <IndustryProcess data={page.process} />
            <IndustryAbout data={page.about} />
            <IndustryFAQ data={page.faq} />
            <IndustryForm data={page.form} />
            <IndustryFinalCTA data={page.finalCta} onScrollToForm={scrollToForm} />
        </div>
    );
};
