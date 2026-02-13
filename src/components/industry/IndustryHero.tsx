import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IndustryHeroProps {
    data: {
        kicker: string;
        headline: string;
        subheadline: string;
        primaryCta: string;
        secondaryCta: string;
        trustText: string;
        image?: string;
        imageAlt?: string;
    };
    onScrollToForm: () => void;
}

export const IndustryHero: React.FC<IndustryHeroProps> = ({ data, onScrollToForm }) => {
    return (
        <section className="min-h-[85vh] bg-void pt-32 pb-20 flex flex-col relative overflow-hidden text-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-void via-void to-zinc-900 pointer-events-none" />

            <div className="container-responsive flex-grow flex flex-col justify-center items-center relative z-10">

                {/* Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Kicker */}
                    <p className="text-sonic-orange font-mono fluid-sm tracking-wide mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        {data.kicker}
                    </p>

                    {/* Headline */}
                    <h1 className="text-white fluid-hero font-bold tracking-tight mb-8 whitespace-pre-line opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {data.headline}
                    </h1>

                    {/* Subheadline - Grey */}
                    <p className="text-zinc-400 fluid-body leading-relaxed mb-10 whitespace-pre-line opacity-0 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
                        {data.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <button
                            onClick={onScrollToForm}
                            className="inline-flex items-center justify-center gap-2 bg-sonic-orange text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E64500] transition-colors group fluid-base"
                        >
                            {data.primaryCta}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="https://website-ivangs-bedachungen.onrender.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-300 font-semibold px-8 py-4 rounded-full hover:border-zinc-500 hover:text-white transition-colors fluid-base"
                        >
                            {data.secondaryCta}
                        </a>
                    </div>

                    {/* Trust Text */}
                    <p className="text-zinc-500 text-sm font-medium opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        {data.trustText}
                    </p>
                </div>

            </div>
        </section>
    );
};
