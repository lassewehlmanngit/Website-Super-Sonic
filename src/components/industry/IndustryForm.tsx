
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

interface IndustryFormProps {
    data: {
        headline: string;
        subline: string;
        fields: {
            namePlaceholder: string;
            emailPlaceholder: string;
            websitePlaceholder: string;
            servicePlaceholder: string;
        };
        trustText: string;
    };
}

export const IndustryForm: React.FC<IndustryFormProps> = ({ data }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <section id="form" className="fluid-section bg-zinc-900 text-white flex items-center justify-center min-h-[500px]">
                <div className="text-center p-8 bg-zinc-800 rounded-2xl border border-zinc-700 max-w-lg">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Anfrage erhalten!</h3>
                    <p className="text-zinc-400">Danke für dein Interesse. Ich werde mir deine Angaben ansehen und mich in Kürze bei dir melden.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="form" className="fluid-section bg-zinc-900 text-white">
            <div className="container-responsive max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="fluid-section-title font-bold mb-4">
                        {data.headline}
                    </h2>
                    <p className="text-zinc-400 fluid-lg">
                        {data.subline}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-zinc-800 p-8 md:p-12 rounded-3xl border border-zinc-700 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-300">Dein Name & Betrieb *</label>
                            <input
                                required
                                type="text"
                                placeholder={data.fields.namePlaceholder}
                                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-sonic-orange focus:border-transparent outline-none transition-all placeholder:text-zinc-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-300">Deine E-Mail *</label>
                            <input
                                required
                                type="email"
                                placeholder={data.fields.emailPlaceholder}
                                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-sonic-orange focus:border-transparent outline-none transition-all placeholder:text-zinc-600"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 mb-6">
                        <label className="text-sm font-semibold text-zinc-300">Hast du schon eine Website? (optional)</label>
                        <input
                            type="url"
                            placeholder={data.fields.websitePlaceholder}
                            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-sonic-orange focus:border-transparent outline-none transition-all placeholder:text-zinc-600"
                        />
                    </div>

                    <div className="space-y-2 mb-8">
                        <label className="text-sm font-semibold text-zinc-300">Welche Leistungen bietet ihr an? (optional)</label>
                        <textarea
                            rows={3}
                            placeholder={data.fields.servicePlaceholder}
                            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-sonic-orange focus:border-transparent outline-none transition-all placeholder:text-zinc-600"
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-auto min-w-[300px] bg-sonic-orange text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#E64500] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" /> Sende...
                                </>
                            ) : (
                                <>
                                    Gratis-Entwurf anfordern <ArrowRight />
                                </>
                            )}
                        </button>
                        <p className="mt-6 text-zinc-500 text-sm font-medium">
                            {data.trustText}
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};
