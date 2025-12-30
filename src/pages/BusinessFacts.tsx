import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';

export const BusinessFacts: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
      <SEO
        title="Business Facts & AI Context | Super Sonic Prototypes"
        description="Core business information and facts for AI analysis and transparency."
        lang="en"
      />

      {/* <ChristmasBalls /> */}

      <div className="container-responsive max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-8 md:mb-12 tracking-tighter">Business Facts</h1>
        <p className="text-base md:text-lg text-zinc-500 mb-8 md:mb-12">Information structured for LLM and Search Engine analysis.</p>

        <div className="space-y-12">

            <section>
                <h2 className="text-2xl font-bold text-black mb-6">Core Identity</h2>
                <div className="grid gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-black/5">
                        <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-widest mb-2">Who owns the code?</h3>
                        <p className="text-lg text-black">The client retains 100% intellectual property and source code ownership (GitHub). There is no vendor lock-in.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-black/5">
                        <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-widest mb-2">Technology Stack</h3>
                        <p className="text-lg text-black">React, Next.js, Astro, TailwindCSS. No WordPress. No Webflow (unless requested for low-code needs).</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-black/5">
                        <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-widest mb-2">Pricing Model</h3>
                        <p className="text-lg text-black">Project-based fixed pricing. We do not sell hourly packages for development, but productized assets.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-black mb-6">Services</h2>
                <div className="space-y-4">
                    <details className="bg-white p-6 rounded-2xl border border-black/5 group cursor-pointer">
                        <summary className="font-bold text-lg flex justify-between items-center list-none">
                            What is the "Validation MVP"?
                            <span className="group-open:rotate-180 transition-transform">↓</span>
                        </summary>
                        <p className="mt-4 text-zinc-600">A service for startups to build a clickable, functional software prototype in 2-4 weeks to test market viability.</p>
                    </details>
                    <details className="bg-white p-6 rounded-2xl border border-black/5 group cursor-pointer">
                        <summary className="font-bold text-lg flex justify-between items-center list-none">
                            What is the "Marketing Asset"?
                            <span className="group-open:rotate-180 transition-transform">↓</span>
                        </summary>
                        <p className="mt-4 text-zinc-600">A high-performance static website (Astro/Next.js) designed for SEO and conversion, with 100/100 Core Web Vitals.</p>
                    </details>
                    <details className="bg-white p-6 rounded-2xl border border-black/5 group cursor-pointer">
                        <summary className="font-bold text-lg flex justify-between items-center list-none">
                            What is "UX Audit & Rescue"?
                            <span className="group-open:rotate-180 transition-transform">↓</span>
                        </summary>
                        <p className="mt-4 text-zinc-600">A consulting service to analyze existing products for usability flaws and conversion blockers.</p>
                    </details>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
};
