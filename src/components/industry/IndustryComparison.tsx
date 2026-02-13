
import React from 'react';
import { Check, X, Minus } from 'lucide-react';

interface IndustryComparisonProps {
    data: {
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
    onScrollToForm: () => void;
}

export const IndustryComparison: React.FC<IndustryComparisonProps> = ({ data, onScrollToForm }) => {
    return (
        <section className="fluid-section bg-zinc-50">
            <div className="container-responsive max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="fluid-section-title font-bold text-zinc-900 mb-4">{data.headline}</h2>
                    <p className="text-zinc-500 fluid-lg">{data.subline}</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden mb-12">
                    <div className="grid grid-cols-12 bg-zinc-100 border-b border-zinc-200">
                        <div className="col-span-12 md:col-span-5 p-6 font-bold text-zinc-900">Was du vergleichst</div>
                        <div className="col-span-6 md:col-span-4 p-6 font-bold text-zinc-500 border-l border-zinc-200">Klassische Agentur</div>
                        <div className="col-span-6 md:col-span-3 p-6 font-bold text-sonic-orange bg-orange-50 border-l border-zinc-200">Norddorf</div>
                    </div>

                    {data.rows && data.rows.map((row, i) => (
                        <div key={i} className="grid grid-cols-12 border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50">
                            <div className="col-span-12 md:col-span-5 p-4 md:p-6 font-medium text-zinc-800 flex items-center">
                                {row.feature}
                            </div>
                            <div className="col-span-6 md:col-span-4 p-4 md:p-6 text-zinc-600 border-l border-zinc-100 flex items-center">
                                {row.competitor}
                            </div>
                            <div className="col-span-6 md:col-span-3 p-4 md:p-6 font-bold text-zinc-900 bg-orange-50/30 border-l border-zinc-100 flex items-center gap-2">
                                <Check size={16} className="text-sonic-orange shrink-0" />
                                {row.us}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="mb-8 text-zinc-600 whitespace-pre-line text-lg font-medium">
                        {data.cta.text}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={onScrollToForm}
                            className="bg-sonic-orange text-white font-bold px-8 py-3 rounded-full hover:bg-[#E64500] transition-colors"
                        >
                            {data.cta.primaryBtn}
                        </button>
                        <button
                            className="border border-zinc-300 text-zinc-700 font-bold px-8 py-3 rounded-full hover:bg-zinc-50 transition-colors"
                        >
                            {data.cta.secondaryBtn}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
