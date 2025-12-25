import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, CheckCircle2, Rocket, Calculator, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

export const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Unique key for this version ensures it works again for you (clears previous session block)
    const STORAGE_KEY = 'supersonic_exit_intent_v2';
    
    // Check if already triggered in this session
    if (sessionStorage.getItem(STORAGE_KEY) === 'true') return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Primary Trigger: Mouse leaves the window at the top (intent to switch tabs/close)
      // We use <= 0 to detect crossing the top boundary
      if (e.clientY <= 0) {
        setIsVisible(true);
        sessionStorage.setItem(STORAGE_KEY, 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const getModalContent = () => {
    const path = location.pathname;

    if (path.includes('app-design')) {
        return {
            icon: Rocket,
            headline: "Don't burn budget on a bad MVP.",
            subtext: "Most apps fail because they build too much, too soon. Get the checklist used by YC founders.",
            list: [
                "The 72-Hour MVP Feature Limit",
                "Technical Debt vs. Velocity Tradeoff",
                "Investor Pitch Deck Template"
            ],
            cta: "Send MVP Checklist"
        };
    }

    if (path.includes('web-design')) {
        return {
            icon: Calculator,
            headline: "Unsure about the investment?",
            subtext: "High-performance design is an asset, not a cost. See the math behind the pricing.",
            list: [
                "Transparent Pricing Breakdown",
                "ROI Calculator (Excel Sheet)",
                "Freelance vs. Agency Comparison"
            ],
            cta: "Get Pricing Guide"
        };
    }

    // Default / Home
    return {
        icon: Zap,
        headline: "STOP LOSING MONEY.",
        subtext: "Your website has holes. We found 7 things modern sites use to win. Read the simple guide.",
        list: [
            "Smart Popups: Don't annoy people. Help them before they leave.",
            "Calculators: Let users answer 'How much?' instantly.",
            "Service Tags: Hidden code that tells Google what you sell.",
            "Free Tools: Give a free gift. People will trust you.",
            "Fast Speed: Load in 1 second. Slow sites lose buyers.",
            "Visual Edits: Change text yourself. No coding needed.",
            "Ownership: Don't rent. Own your code forever."
        ],
        cta: "Send Me the Guide"
    };
  };

  const content = getModalContent();

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
        onClick={() => setIsVisible(false)}
      ></div>

      {/* Modal - Neo-Swiss Style */}
      <div className="relative bg-white border border-zinc-200 w-full max-w-lg shadow-2xl animate-fade-in-up rounded-[2.5rem] overflow-hidden">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-10">
            <div className="flex items-start gap-5 mb-8">
                <div className="p-4 bg-sonic-orange/10 text-sonic-orange rounded-2xl shadow-sm shrink-0">
                    <content.icon size={28} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-black mb-2 leading-none tracking-tight">{content.headline}</h2>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                        {content.subtext}
                    </p>
                </div>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 mb-8 max-h-[240px] overflow-y-auto pr-2">
                <div className="space-y-3">
                    {content.list.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs text-zinc-600 font-medium">
                            <CheckCircle2 size={14} className="text-sonic-orange shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-3">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-white border border-zinc-200 text-black px-4 py-3 rounded-full focus:ring-2 focus:ring-sonic-orange outline-none text-sm"
                />
                <Button variant="primary">
                    {content.cta}
                </Button>
            </div>
            <p className="text-[10px] text-zinc-400 mt-4 text-center">
                We respect your inbox. No spam, just engineering rigor.
            </p>
        </div>
      </div>
    </div>
  );
};