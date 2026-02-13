
import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface IndustryAboutProps {
    data: {
        headline: string;
        body: any;
        credentials: string;
        image?: string;
        imageAlt?: string;
    };
}

export const IndustryAbout: React.FC<IndustryAboutProps> = ({ data }) => {
    return (
        <section className="fluid-section bg-zinc-50">
            <div className="container-responsive max-w-5xl">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Image */}
                    <div className="order-1 md:order-1 w-full md:w-1/3">
                        <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg bg-zinc-200">
                            {data.image ? (
                                <img
                                    src={data.image}
                                    alt={data.imageAlt || "Lasse - Gründer von Norddorf"}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-zinc-500">Portrait Lasse</div>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-2 md:order-2 w-full md:w-2/3">
                        <h2 className="fluid-2xl font-bold text-zinc-900 mb-6">
                            {data.headline}
                        </h2>
                        <div className="prose prose-lg prose-zinc mb-8 text-zinc-600">
                            {data.body ? (
                                <TinaMarkdown content={data.body} />
                            ) : (
                                <p>About text...</p>
                            )}
                        </div>
                        <div className="inline-block px-4 py-2 bg-white rounded-lg border border-zinc-200 text-zinc-500 text-sm font-medium">
                            {data.credentials}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
