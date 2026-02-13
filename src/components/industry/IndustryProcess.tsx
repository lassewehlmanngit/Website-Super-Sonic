import React from 'react';

interface IndustryProcessProps {
    data: {
        headline: string;
        steps: Array<{
            title: string;
            description: string;
        }>;
    };
}

export const IndustryProcess: React.FC<IndustryProcessProps> = ({ data }) => {
    return (
        <section className="fluid-section bg-white">
            <div className="container-responsive">
                <div className="text-center mb-20">
                    <h2 className="fluid-section-title font-bold text-zinc-900">
                        {data.headline}
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Continuous Vertical Line */}
                    <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-zinc-200 -z-10" />

                    <div className="space-y-16">
                        {data.steps && data.steps.map((step, i) => (
                            <div key={i} className="relative flex gap-8 items-start group">
                                {/* Number Bubble */}
                                <div className="w-14 h-14 rounded-full bg-white border-2 border-zinc-200 group-hover:border-sonic-orange group-hover:text-sonic-orange transition-colors flex items-center justify-center font-bold text-zinc-400 text-lg shadow-sm shrink-0 z-10">
                                    {i + 1}
                                </div>

                                {/* Content */}
                                <div className="pt-2">
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-600 text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final Dot */}
                    <div className="absolute left-[23px] bottom-0 w-3 h-3 rounded-full bg-zinc-300 transform translate-y-1/2" />
                </div>
            </div>
        </section>
    );
};
