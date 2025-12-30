import React, { useState } from 'react';
import { Calendar, Cpu, ArrowRight, ArrowLeft, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';
import { SEO } from '../components/SEO';
import { ProjectConfigurator } from '../components/configurator/ProjectConfigurator';

interface Props { lang: 'de' | 'en'; }

export const StartProject: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';
  const [view, setView] = useState<'selection' | 'configurator'>('selection');

  const handleBooking = () => {
    window.open('https://calendar.google.com/', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:hello@supersonic.design';
  };

  return (
    <div className="bg-paper min-h-screen pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
      <SEO 
        title={isDe 
          ? "Projekt Starten | Konfigurator & Beratung | Super Sonic Prototypes" 
          : "Start Project | Configurator & Consulting | Super Sonic Prototypes"}
        description={isDe
          ? "Wählen Sie Ihren Weg. Starten Sie direkt mit dem Konfigurator oder lassen Sie uns persönlich sprechen. 15 Minuten kostenlose Strategieberatung."
          : "Choose your path. Start directly with the engine or let's talk strategy first. 15 minutes free strategy consultation."}
        lang={lang}
        path={`/${isDe ? 'de' : 'en'}/start`}
      />
      {/* <ChristmasBalls /> */}
      <div className="container-responsive max-w-7xl mx-auto relative z-10">
        
        {/* Header - Changes based on view */}
        <div className="text-center mb-8 md:mb-12">
            {view === 'configurator' && (
                <button 
                    onClick={() => setView('selection')}
                    className="mb-6 md:mb-8 inline-flex items-center text-sm font-mono text-zinc-500 hover:text-black transition-colors"
                >
                    <ArrowLeft size={16} className="mr-2" /> {isDe ? "Zurück zur Auswahl" : "Back to Selection"}
                </button>
            )}
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black mb-4 md:mb-6 tracking-tighter animate-fade-in-up">
                {view === 'selection' 
                    ? (isDe ? "Lass uns bauen." : "Let's build.") 
                    : (isDe ? "Konfiguration." : "Configuration.")}
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
                {view === 'selection' ? (
                    isDe 
                    ? "Wählen Sie, wie Sie starten möchten:"
                    : "Choose how you want to start:"
                ) : (
                    isDe
                    ? "Schritt für Schritt zum Angebot."
                    : "Step by step to your quote."
                )}
            </p>
        </div>

        {/* VIEW: SELECTION SPLIT */}
        {view === 'selection' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in-up delay-200">
                
                {/* Option 1: Human / Booking */}
                <div className="bg-white p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group h-auto min-h-[400px] md:min-h-[450px] lg:min-h-[500px]">
                    <div>
                        <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-sonic-orange mb-8 group-hover:scale-110 transition-transform">
                            <Calendar size={28} />
                        </div>
                        <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">
                            {isDe ? "Strategy Call" : "Strategy Call"}
                        </h2>
                        
                        <div className="path-details mb-6">
                          <h3 className="font-bold text-sm uppercase text-zinc-400 mb-2">Perfekt, wenn:</h3>
                          <ul className="space-y-2 text-zinc-600">
                            <li>• Nicht sicher, was du brauchst</li>
                            <li>• Erst Rat willst</li>
                            <li>• Komplexes Projekt</li>
                          </ul>
                        </div>

                        <div className="flex flex-col gap-3 text-sm font-medium text-zinc-600 bg-zinc-50 p-4 rounded-xl mb-6">
                            <div className="flex items-center gap-3"><Clock size={16} className="text-sonic-orange"/> 15 Minuten</div>
                            <div className="flex items-center gap-3"><Mail size={16} className="text-sonic-orange"/> Google Meet</div>
                            <div className="flex items-center gap-3"><span className="text-green-500">✓</span> Keine Verpflichtung</div>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <Button onClick={handleBooking} size="lg" className="w-full justify-between group-hover:bg-[#E64500]">
                            {isDe ? "Call buchen" : "Book Call"} <ArrowRight size={20} />
                        </Button>
                    </div>
                </div>

                {/* Option 2: Machine / Configurator */}
                <div className="bg-black p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-zinc-800 shadow-xl hover:shadow-2xl hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between group h-auto min-h-[400px] md:min-h-[450px] lg:min-h-[500px]">
                    <div>
                        <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform border border-zinc-800">
                            <Cpu size={28} />
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                            {isDe ? "Projekt Engine" : "Project Engine"}
                        </h2>
                        
                        <div className="path-details mb-6">
                          <h3 className="font-bold text-sm uppercase text-zinc-500 mb-2">Perfekt, wenn:</h3>
                          <ul className="space-y-2 text-zinc-400">
                            <li>• Du weißt, was du brauchst</li>
                            <li>• Sofort-Angebot willst</li>
                            <li>• Bereit zum Starten</li>
                          </ul>
                        </div>

                        <div className="flex flex-col gap-3 text-sm font-medium text-zinc-400 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 mb-6">
                            <div className="flex items-center gap-3"><Clock size={16} className="text-white"/> 5 Minuten</div>
                            <div className="flex items-center gap-3"><span className="text-white">💰</span> Sofort-Angebot</div>
                            <div className="flex items-center gap-3"><span className="text-green-500">✓</span> Keine Verpflichtung</div>
                        </div>
                    </div>
                    
                    <Button onClick={() => setView('configurator')} variant="white" size="lg" className="w-full justify-between">
                        {isDe ? "Konfiguration starten" : "Start Configuration"} <ArrowRight size={20} />
                    </Button>
                </div>

            </div>
        )}

        {/* VIEW: TOOL */}
        {view === 'configurator' && (
            <div className="animate-fade-in-up">
                <ProjectConfigurator />
            </div>
        )}
        
        <div className="trust-indicators text-center mt-12 text-zinc-400 text-sm flex justify-center gap-8 flex-wrap">
          <span>✓ Keine Kreditkarte nötig</span>
          <span>✓ Kein Druck</span>
          <span>✓ Antwort in 24h</span>
        </div>

      </div>
    </div>
  );
};
