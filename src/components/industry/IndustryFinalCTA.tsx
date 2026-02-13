
import React from 'react';

interface IndustryFinalCTAProps {
    data: {
        headline: string;
        body: string;
        primaryBtn: string;
        secondaryBtn: string;
    };
    onScrollToForm: () => void;
}

export const IndustryFinalCTA: React.FC<IndustryFinalCTAProps> = ({ data, onScrollToForm }) => {
    return (
        <section className="fluid-section bg-zinc-900 border-t border-zinc-800">
            <div className="container-responsive max-w-4xl text-center">
                <h2 className="fluid-2xl font-bold text-white mb-6">
                    {data.headline}
                </h2>
                <p className="text-zinc-400 text-xl mb-10 max-w-2xl mx-auto">
                    {data.body}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={onScrollToForm}
                        className="bg-sonic-orange text-white font-bold px-8 py-4 rounded-full hover:bg-[#E64500] transition-colors text-lg"
                    >
                        {data.primaryBtn}
                    </button>
                    <button
                        className="border border-zinc-700 text-zinc-300 font-bold px-8 py-4 rounded-full hover:border-zinc-500 hover:text-white transition-colors text-lg"
                    >
                        {data.secondaryBtn}
                    </button>
                </div>
            </div>
        </section>
    );
};
