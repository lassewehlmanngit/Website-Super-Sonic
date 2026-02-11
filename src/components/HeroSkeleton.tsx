import React from 'react';

/**
 * Hero skeleton shown as Suspense fallback.
 * Matches the static HTML hero shell so there's no jarring flash when React mounts.
 * Keeps LCP stable during the brief moment between static HTML and LandingPage load.
 */
export const HeroSkeleton: React.FC = () => (
  <section className="min-h-[100dvh] bg-void pt-32 pb-20 flex flex-col relative overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-br from-void via-void to-zinc-900 pointer-events-none" />
    <div className="container-responsive flex-grow flex flex-col justify-center relative z-10">
      <div className="max-w-4xl">
        <p className="text-sonic-orange font-mono fluid-sm tracking-wide mb-6">
          Webseiten für den Mittelstand
        </p>
        <h1 className="text-white fluid-hero font-bold tracking-tight mb-8">
          Du brauchst eine Website, <span className="text-zinc-300">die funktioniert.</span>
          <br />
          <span className="text-sonic-orange">Keinen Raketenplan.</span>
        </h1>
      </div>
    </div>
  </section>
);
