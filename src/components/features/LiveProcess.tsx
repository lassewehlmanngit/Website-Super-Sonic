import React from 'react';
import { Search, Zap, Code, Rocket } from 'lucide-react';

interface LiveProcessProps {
    isDe?: boolean;
}

export const LiveProcess: React.FC<LiveProcessProps> = ({ isDe = true }) => {
  const steps = [
    {
      icon: Search,
      title: isDe ? "1. Ziel & Start" : "1. Goal & Kickoff",
      desc: isDe ? "Was wir tun: Du sagst uns, was du brauchst. Wir stellen Fragen, bis wir dein Geschäft verstehen.\n\nWas du bekommst: Ein einfaches Dokument, das genau sagt, was wir bauen werden. Keine Überraschungen später." : "What we do: You tell us what you need. We ask questions until we understand your business.\n\nWhat you get: A simple document that says exactly what we'll build. No surprises later.",
      time: isDe ? "Tag 1" : "Day 1"
    },
    {
      icon: Zap,
      title: isDe ? "2. Der Entwurf" : "2. The Draft",
      desc: isDe ? "Was wir tun: Wir bauen eine funktionierende Version. Du kannst durchklicken. Auf deinem Handy testen.\n\nWas du bekommst: Eine echte Website, die du deinem Team zeigen kannst. Nicht nur Bilder in einem PDF." : "What we do: We build a working version. You can click through it. Test it on your phone.\n\nWhat you get: A real website you can show to your team. Not just pictures in a PDF.",
      time: isDe ? "Tag 3" : "Day 3"
    },
    {
      icon: Code,
      title: isDe ? "3. Veredelung" : "3. Refinement",
      desc: isDe ? "In 48h setze ich Feedback um. WCAG, SEO und Animationen." : "In 48h I implement feedback. WCAG, SEO, and animations.",
      time: isDe ? "Tag 5" : "Day 5"
    },
    {
      icon: Rocket,
      title: isDe ? "4. Launch" : "4. Launch",
      desc: isDe ? "Handoff des Git-Repos. Die Seite gehört Ihnen." : "Handoff of the Git Repo. The site is yours.",
      time: isDe ? "Woche 2" : "Week 2"
    }
  ];

  return (
    <div className="relative py-12 md:py-24">
      {/* Central Line */}
      <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-zinc-800/80 md:-translate-x-1/2"></div>
      
      <div className="space-y-12 md:space-y-24">
        {steps.map((step, idx) => {
          // Even items (0, 2) -> Right side on Desktop
          // Odd items (1, 3) -> Left side on Desktop
          const isEven = idx % 2 === 0;
          
          return (
            <div key={idx} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Desktop Spacer (Takes up 50% of width) */}
              <div className="hidden md:block flex-1"></div>

              {/* Central Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 -ml-[28px] md:ml-0 flex items-center justify-center bg-zinc-950 border border-zinc-800 rounded-full z-10 shadow-lg shadow-black/40">
                <step.icon size={20} className="text-white" />
              </div>

              {/* The Card */}
              <div className={`flex-1 w-full pl-20 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                <div 
                  className={`p-6 md:p-10 bg-zinc-950/70 border border-zinc-800 rounded-[2rem] hover:bg-zinc-950 transition-colors group
                    ${isEven ? 'text-left' : 'text-left md:text-right'}
                  `}
                >
                  <div className={`inline-block mb-4 ${isEven ? '' : 'md:ml-auto'}`}>
                      <div className="text-[11px] font-mono font-bold text-sonic-orange uppercase tracking-[0.2em] px-3 py-1 border border-sonic-orange/20 rounded-full bg-sonic-orange/5">
                        {step.time}
                      </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-sonic-orange transition-colors">{step.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-md ml-0 whitespace-pre-wrap">{step.desc}</p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};