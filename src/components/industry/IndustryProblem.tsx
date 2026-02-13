import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface IndustryProblemProps {
    data: {
        headline: string;
        body: any;
        callout: string;
    };
}

export const IndustryProblem: React.FC<IndustryProblemProps> = ({ data }) => {
    return (
        <section className="fluid-section bg-zinc-50">
            <div className="container-responsive">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left: Headline */}
                    <div className="lg:col-span-4">
                        <h2 className="fluid-2xl font-bold text-zinc-900 sticky top-32">
                            {data.headline}
                        </h2>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg prose-zinc mb-12 text-zinc-600 leading-relaxed max-w-none">
                            {data.body ? (
                                <TinaMarkdown content={data.body} />
                            ) : (
                                <p>Problem description...</p>
                            )}
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 border-l-4 border-l-sonic-orange">
                            <p className="text-lg font-medium text-zinc-900 italic">
                                "{data.callout}"
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
