import React, { useState, useEffect } from 'react';
import { ArrowRight, Monitor, Smartphone, Tablet, Maximize2, X } from 'lucide-react';
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface IndustryCaseStudyProps {
    data: {
        kicker: string;
        headline: string;
        body: any; // visual editing rich-text
        stats: Array<{ label: string; value: string }>;
        ctaText: string;
        quote?: string;
        image?: string;
        imageAlt?: string;
    };
}

export const IndustryCaseStudy: React.FC<IndustryCaseStudyProps> = ({ data }) => {
    const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
    const [isMaximized, setIsMaximized] = useState(false);

    // Lock scroll when maximized
    useEffect(() => {
        if (isMaximized) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMaximized]);

    return (
        <section className="fluid-section bg-white">
            <div className="container-responsive">
                <div className="flex flex-col gap-16">

                    {/* Top: Content */}
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sonic-orange font-bold tracking-wider uppercase text-sm mb-4">
                            {data.kicker}
                        </p>

                        <h2 className="fluid-3xl font-bold text-zinc-900 mb-6">
                            {data.headline}
                        </h2>

                        {/* Rich Text Body */}
                        <div className="prose prose-zinc mx-auto mb-10 text-zinc-600">
                            {data.body ? (
                                <TinaMarkdown content={data.body} />
                            ) : (
                                <p>Case study description...</p>
                            )}
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-left md:text-center">
                            {data.stats && data.stats.map((stat, i) => (
                                <div key={i} className="border-l-2 md:border-l-0 md:border-t-2 border-sonic-orange pl-4 md:pl-0 md:pt-4">
                                    <p className="text-sm text-zinc-500 font-medium mb-1">{stat.label}</p>
                                    <p className="text-xl font-bold text-zinc-900">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom: Live Preview */}
                    <div className="w-full">
                        {/* Device Controls */}
                        <div className="flex justify-center gap-4 mb-6">
                            <button
                                onClick={() => setActiveDevice('desktop')}
                                className={`p-2 rounded-lg transition-colors ${activeDevice === 'desktop' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'}`}
                                aria-label="Desktop View"
                            >
                                <Monitor size={20} />
                            </button>
                            <button
                                onClick={() => setActiveDevice('tablet')}
                                className={`p-2 rounded-lg transition-colors ${activeDevice === 'tablet' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'}`}
                                aria-label="Tablet View"
                            >
                                <Tablet size={20} />
                            </button>
                            <button
                                onClick={() => setActiveDevice('mobile')}
                                className={`p-2 rounded-lg transition-colors ${activeDevice === 'mobile' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'}`}
                                aria-label="Mobile View"
                            >
                                <Smartphone size={20} />
                            </button>
                        </div>

                        {/* Preview Container */}
                        <div className={`mx-auto transition-all duration-500 ease-in-out bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-zinc-800 relative group
                            ${activeDevice === 'desktop' ? 'max-w-full aspect-[16/10]' : ''}
                            ${activeDevice === 'tablet' ? 'max-w-[768px] aspect-[3/4]' : ''}
                            ${activeDevice === 'mobile' ? 'max-w-[375px] aspect-[9/19]' : ''}
                        `}>
                            {/* Browser Bar */}
                            <div className="h-8 bg-zinc-800 flex items-center px-4 gap-2 justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                                </div>
                                <div className="text-xs text-zinc-500 font-mono truncate px-4">website-ivangs-bedachungen.onrender.com</div>
                                <button
                                    onClick={() => setIsMaximized(true)}
                                    className="text-zinc-500 hover:text-white transition-colors"
                                    title="Maximieren"
                                >
                                    <Maximize2 size={14} />
                                </button>
                            </div>

                            {/* iFrame */}
                            <iframe
                                src="https://website-ivangs-bedachungen.onrender.com"
                                className="w-full h-full bg-white"
                                title="Ivangs Bedachungen Live Preview"
                                loading="lazy"
                            />

                            {/* Hover Overlay Guide */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                <div className="bg-white/90 backdrop-blur text-void px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2">
                                    <Maximize2 size={18} />
                                    Klicken zum Maximieren
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMaximized(true)}
                                className="absolute inset-x-0 bottom-0 top-8 z-10 w-full"
                                aria-label="Preview maximieren"
                            />
                        </div>

                        <div className="text-center mt-8">
                            <a
                                href="https://website-ivangs-bedachungen.onrender.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sonic-orange font-bold hover:text-[#E64500] transition-colors text-lg group"
                            >
                                {data.ctaText}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Maximized Overlay */}
            {isMaximized && (
                <div className="fixed inset-0 z-[100] bg-void flex flex-col animate-in fade-in zoom-in duration-300">
                    {/* Header */}
                    <div className="h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-6 shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="text-white font-bold hidden sm:block">Ivangs Bedachungen — Live Preview</div>
                            <div className="bg-zinc-800 text-zinc-400 px-3 py-1 rounded text-xs font-mono hidden md:block">
                                website-ivangs-bedachungen.onrender.com
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <span className="text-zinc-500 text-sm hidden lg:block">Benutze die Seite wie eine echte Website</span>
                            <button
                                onClick={() => setIsMaximized(false)}
                                className="flex items-center gap-2 bg-white text-void font-bold px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors"
                            >
                                <X size={20} />
                                <span>Schließen</span>
                            </button>
                        </div>
                    </div>

                    {/* Full Screen iFrame */}
                    <div className="flex-grow bg-white">
                        <iframe
                            src="https://website-ivangs-bedachungen.onrender.com"
                            className="w-full h-full"
                            title="Ivangs Bedachungen Full Preview"
                        />
                    </div>

                    {/* Mobile Close Button (Floating) */}
                    <button
                        onClick={() => setIsMaximized(false)}
                        className="fixed bottom-6 right-6 sm:hidden w-14 h-14 bg-sonic-orange text-white rounded-full shadow-2xl flex items-center justify-center z-[110]"
                        aria-label="Schließen"
                    >
                        <X size={28} />
                    </button>
                </div>
            )}
        </section>
    );
};
