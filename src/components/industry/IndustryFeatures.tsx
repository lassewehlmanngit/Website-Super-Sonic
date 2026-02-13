import React from 'react';
import { Check, Star, Zap, Search, Layout, Smartphone, ShieldCheck, UserPlus, FileText } from 'lucide-react';

interface IndustryFeaturesProps {
    data: {
        headline: string;
        items: Array<{
            title: string;
            description: string;
            icon?: string;
        }>;
    };
}

// Simple icon mapper
const getIcon = (name: string | undefined) => {
    switch (name) {
        case 'Check': return Check;
        case 'Zap': return Zap;
        case 'Search': return Search;
        case 'Layout': return Layout;
        case 'Smartphone': return Smartphone;
        case 'ShieldCheck': return ShieldCheck;
        case 'UserPlus': return UserPlus;
        case 'FileText': return FileText;
        default: return Check;
    }
};

export const IndustryFeatures: React.FC<IndustryFeaturesProps> = ({ data }) => {
    return (
        <section className="fluid-section bg-white">
            <div className="container-responsive">
                <div className="text-center mb-16">
                    <h2 className="fluid-section-title font-bold text-zinc-900">
                        {data.headline}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.items && data.items.map((item, i) => {
                        const Icon = getIcon(item.icon);
                        return (
                            <div key={i} className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-sonic-orange/20 hover:bg-orange-50/10 transition-colors flex flex-col h-full">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-sonic-orange shrink-0">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3 break-words hyphens-auto">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-600 leading-relaxed flex-grow">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
