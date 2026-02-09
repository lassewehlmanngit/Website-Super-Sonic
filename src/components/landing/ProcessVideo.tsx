import React, { useState } from 'react';
import { Play, Clock } from 'lucide-react';

interface ProcessVideoProps {
  lang: 'de' | 'en' | 'ja';
}

export const ProcessVideo: React.FC<ProcessVideoProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="process-video" className="fluid-section bg-paper">
      <div className="container-responsive max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight mb-4">
            {isJa ? "私たちの仕事をご覧ください。" : isDe ? "Schau uns über die Schulter." : "Look over our shoulder."}
          </h2>
          <p className="text-zinc-500 fluid-lg">
            {isJa 
              ? "2分で、無料ウェブサイトの入手方法をご説明します。"
              : isDe 
              ? "In 2 Minuten zeige ich dir, wie du deine gratis Webseite erhältst."
              : "In 2 minutes I'll show you how to get your free website."}
          </p>
        </div>

        {/* Video Container */}
        <div className="relative reveal delay-100">
          <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            {isPlaying ? (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Process Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <button 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-black/20 hover:bg-black/30 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-sonic-orange focus:ring-offset-2 rounded-2xl"
                aria-label={isJa ? "動画を再生" : isDe ? "Video abspielen" : "Play video"}
              >
                <div className="w-20 h-20 bg-sonic-orange rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,77,0,0.4)]">
                  <Play className="text-white ml-1" size={32} fill="white" />
                </div>
                <p className="text-zinc-400 fluid-sm">
                  {isJa ? "動画を再生" : isDe ? "Video abspielen" : "Play video"}
                </p>
                
                {/* Video timestamp badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full pointer-events-none">
                  <Clock size={14} className="text-white" />
                  <span className="text-white fluid-sm font-mono">2:00</span>
                </div>
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 text-center reveal delay-200">
          <p className="text-zinc-600 fluid-lg">
            {isJa ? (
              <>
                <strong className="text-zinc-900">無料です。</strong>気に入っていただけたら、プロジェクトを開始します。
              </>
            ) : isDe ? (
              <>
                <strong className="text-zinc-900">Kostenlos.</strong> Gefällt sie dir, starten wir durch und beginnen dein Projekt.
              </>
            ) : (
              <>
                <strong className="text-zinc-900">Free.</strong> If you like it, we'll start and begin your project.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
