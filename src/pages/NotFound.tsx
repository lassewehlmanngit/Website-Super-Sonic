
import React from 'react';
import { Container } from '../components/atoms/Container';
import { ProjectShowcase } from '../components/landing/ProjectShowcase';
import { ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NotFoundProps {
    lang?: 'de' | 'en' | 'ja';
}

export const NotFound: React.FC<NotFoundProps> = ({ lang = 'de' }) => {

    return (
        <div className="min-h-screen bg-paper pt-[var(--nav-height-desktop)]">
            {/* 404 Hero Section */}
            <section className="py-20 md:py-32 border-b border-zinc-200">
                <Container>
                    <div className="max-w-2xl">
                        <p className="text-sonic-orange font-mono fluid-sm mb-4">404 ERROR</p>
                        <h1 className="fluid-heading font-bold text-[var(--color-void)] mb-6">
                            Hoppla. Diese Seite hat sich verflogen.
                        </h1>
                        <p className="fluid-lg text-zinc-600 mb-8 leading-relaxed">
                            Die angeforderte Seite konnte nicht gefunden werden. Vielleicht wurde sie verschoben,
                            gelöscht oder existiert gar nicht.
                        </p>

                        <Link
                            to="/de"
                            className="inline-flex items-center gap-2 bg-[var(--color-void)] text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-colors"
                        >
                            <Home size={20} />
                            Zur Startseite
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Case Studies Suggestion */}
            <section className="bg-zinc-50 border-t border-zinc-200">
                <div className="py-12 pb-0">
                    <Container>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-sonic-orange"></span>
                            <p className="text-zinc-500 font-medium">Stattdessen ansehen</p>
                        </div>
                    </Container>
                </div>
                <ProjectShowcase lang={lang} />
            </section>
        </div>
    );
};
