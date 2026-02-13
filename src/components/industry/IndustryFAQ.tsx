
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface IndustryFAQProps {
    data: {
        items: Array<{
            question: string;
            answer: any;
        }>;
    };
}

export const IndustryFAQ: React.FC<IndustryFAQProps> = ({ data }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="fluid-section bg-white" id="faq">
            <div className="container-responsive max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="fluid-section-title font-bold text-zinc-900">Häufige Fragen (FAQ)</h2>
                </div>

                <div className="space-y-4">
                    {data.items && data.items.map((item, i) => (
                        <div key={i} className="border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white"
                                aria-expanded={openIndex === i}
                                aria-controls={`faq-answer-${i}`}
                            >
                                <span className="font-bold text-zinc-900 text-lg">{item.question}</span>
                                {openIndex === i ? <ChevronUp className="text-zinc-400" /> : <ChevronDown className="text-zinc-400" />}
                            </button>

                            {openIndex === i && (
                                <div id={`faq-answer-${i}`} className="px-6 pb-6 bg-white text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4 prose prose-zinc max-w-none">
                                    {item.answer ? (
                                        <TinaMarkdown content={item.answer} />
                                    ) : (
                                        <p>Answer...</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
