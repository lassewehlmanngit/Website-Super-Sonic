import React, { useState } from 'react';
import { ProjectScopeTool } from '../components/features/ProjectScopeTool';
import { Calendar, Cpu, ArrowRight, ArrowLeft, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';

interface Props { lang: 'de' | 'en'; }

export const StartProject: React.FC<Props> = ({ lang }) => {
  const isDe = lang === 'de';
  const [view, setView] = useState<'selection' | 'configurator'>('selection');

  // Placeholder for the Google Calendar / Calendly link
  const handleBooking = () => {
    window.open('https://calendar.google.com/', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:hello@supersonic.design';
  };

  return (
    <div className="bg-paper min-h-screen pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
      <ChristmasBalls />
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Changes based on view */}
        <div className="text-center mb-12">
            {view === 'configurator' && (
                <button 
                    onClick={() => setView('selection')}
                    className="mb-8 inline-flex items-center text-sm font-mono text-zinc-500 hover:text-black transition-colors"
                >
                    <ArrowLeft size={16} className="mr-2" /> {isDe ? "Zurück zur Auswahl" : "Back to Selection"}
                </button>
            )}
            
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tighter animate-fade-in-up">
                {view === 'selection' 
                    ? (isDe ? "LET'S BUILD." : "LET'S BUILD.") 
                    : (isDe ? "ARCHITECT." : "ARCHITECT.")}
            </h1>
            
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
                {view === 'selection' ? (
                    isDe 
                    ? "Wählen Sie Ihren Weg. Starten Sie direkt mit dem Konfigurator oder lassen Sie uns persönlich sprechen."
                    : "Choose your path. Start directly with the engine or lets talk strategy first."
                ) : (
                    isDe
                    ? "Definieren Sie Ihre Anforderungen. Unser System erstellt eine erste Schätzung."
                    : "Define your requirements. Our system generates a preliminary architectural blueprint."
                )}
            </p>
        </div>

        {/* VIEW: SELECTION SPLIT */}
        {view === 'selection' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in-up delay-200">
                
                {/* Option 1: Human / Booking */}
                <div className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group h-[500px]">
                    <div>
                        <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-sonic-orange mb-8 group-hover:scale-110 transition-transform">
                            <Calendar size={28} />
                        </div>
                        <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">
                            {isDe ? "Consulting Call" : "Strategy Call"}
                        </h2>
                        <p className="text-zinc-500 text-lg leading-relaxed mb-6">
                            {isDe 
                             ? "Unsicher über den Tech-Stack? Lassen Sie uns in 15 Minuten klären, ob wir zueinander passen."
                             : "Unsure about the tech stack? Let's figure out if we are a match in a focused 15-minute session."}
                        </p>
                        <div className="flex items-center gap-4 text-sm font-medium text-zinc-600 bg-zinc-50 p-4 rounded-xl">
                            <Clock size={18} className="text-sonic-orange"/>
                            {isDe ? "15 Min / Google Meet" : "15 Min / Google Meet"}
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <Button onClick={handleBooking} size="lg" className="w-full justify-between group-hover:bg-[#E64500]">
                            {isDe ? "Termin buchen" : "Book Appointment"} <ArrowRight size={20} />
                        </Button>
                        <button onClick={handleEmail} className="w-full text-center text-sm font-medium text-zinc-400 hover:text-black transition-colors flex items-center justify-center gap-2">
                            <Mail size={14} /> {isDe ? "oder per Email" : "or via Email"}
                        </button>
                    </div>
                </div>

                {/* Option 2: Machine / Configurator */}
                <div className="bg-black p-10 rounded-[2.5rem] border border-zinc-800 shadow-xl hover:shadow-2xl hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between group h-[500px]">
                    <div>
                        <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform border border-zinc-800">
                            <Cpu size={28} />
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                            {isDe ? "Projekt Engine" : "Project Engine"}
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            {isDe 
                             ? "Sie wissen, was Sie wollen? Generieren Sie eine technische Blaupause und eine Kostenschätzung sofort."
                             : "Know what you need? Generate a technical blueprint and investment estimate instantly."}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {isDe ? "System Online" : "System Online"}
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
                <ProjectScopeTool />
            </div>
        )}

      </div>
    </div>
  );
};