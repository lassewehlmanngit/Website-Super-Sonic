import React, { useState } from 'react';
import { 
  ArrowRight, Check, AlertCircle, Cpu, Database, 
  ShieldCheck, Download, ChevronRight, Share2, 
  Layout, BarChart3, Globe, FileText, Printer, Lock 
} from 'lucide-react';
import { Button } from '../ui/Button';

// --- Types & Questions Config (Preserved Logic) ---
interface Question {
  id: string;
  phase: string;
  question: string;
  subtext: string;
  type: 'single' | 'multi' | 'text';
  options?: string[];
}

interface Estimate {
  minPrice: number;
  maxPrice: number;
  minWeeks: number;
  maxWeeks: number;
  score: number;
}

const QUESTIONS: Question[] = [
  // Phase 0: Context
  {
    id: 'industry',
    phase: 'Phase 1: Context',
    question: "What business are you in?",
    subtext: "We benchmark against industry standards.",
    type: 'single',
    options: ["SaaS / Tech", "Real Estate / Architecture", "E-commerce / Retail", "Consulting / Agency", "Creative / Portfolio"]
  },
  {
    id: 'engine',
    phase: 'Phase 1: Context',
    question: "What is the goal?",
    subtext: "What matters most right now?",
    type: 'single',
    options: ["Showcase Work (Brand)", "Get Leads (Sales)", "Sell Products (E-comm)", "Help Users (Support)"]
  },
  {
    id: 'size',
    phase: 'Phase 1: Context',
    question: "How big is the site?",
    subtext: "Determines complexity.",
    type: 'single',
    options: ["One Page (Landing)", "Small (3-5 Pages)", "Standard (5-10 Pages)", "Large (10+ Pages)"]
  },
  {
    id: 'content',
    phase: 'Phase 1: Context',
    question: "Need dynamic content?",
    subtext: "Do you need to add items regularly?",
    type: 'single',
    options: ["Projects/Case Studies", "Blog/News Magazine", "Team/Career Hub", "No, just static text"]
  },
  // Phase 2: Tech Stack
  {
    id: 'ownership',
    phase: 'Phase 2: Tech',
    question: "Stance on Ownership?",
    subtext: "Rent or Own?",
    type: 'single',
    options: ["I want to Own the Code (Exportable)", "Rent/Subscription (Platform Locked)"]
  },
  {
    id: 'management',
    phase: 'Phase 2: Tech',
    question: "Who edits content?",
    subtext: "We build the CMS for this person.",
    type: 'single',
    options: ["Just me (Developer)", "Marketing Team (Non-tech)", "Whole Company"]
  },
  // Phase 3: AI
  {
    id: 'ai',
    phase: 'Phase 3: Features',
    question: "Integrate AI features?",
    subtext: "Automate engagement?",
    type: 'multi',
    options: ["AI Smart Search (Semantic)", "AI Content Assistant (Drafting)", "AI Image Optimization", "None"]
  },
  {
    id: 'schema',
    phase: 'Phase 3: Features',
    question: "Hidden SEO?",
    subtext: "Help Google understand your site.",
    type: 'single',
    options: ["Yes, full Schema Markup", "Basic SEO is fine"]
  },
  {
    id: 'magnet',
    phase: 'Phase 3: Features',
    question: "Custom 'Lead Magnet'?",
    subtext: "Tools convert better than forms. Describe one.",
    type: 'text'
  },
  // Phase 4: Compliance
  {
    id: 'wcag',
    phase: 'Phase 4: Compliance',
    question: "Accessibility?",
    subtext: "Strict compliance prevents lawsuits.",
    type: 'single',
    options: ["Strict Compliance (AA Level)", "Standard Best Practices"]
  },
  {
    id: 'timeline',
    phase: 'Phase 5: Logistics',
    question: "When do we launch?",
    subtext: "AI accelerates the process.",
    type: 'single',
    options: ["Rush (ASAP)", "4-6 Weeks", "Quality-First (Flexible)"]
  }
];

// --- Logic Helpers (Simplified for Brevity) ---
const calculateEstimates = (answers: Record<string, any>): Estimate => {
  let basePrice = 2500;
  let baseWeeks = 1;
  let score = 0;

  if (answers['size']?.includes("Small")) { basePrice += 1500; baseWeeks += 1; }
  if (answers['size']?.includes("Standard")) { basePrice += 3500; baseWeeks += 2; }
  if (answers['size']?.includes("Large")) { basePrice += 8000; baseWeeks += 4; }
  if (answers['engine']?.includes("Sell")) { basePrice += 4000; baseWeeks += 2; }
  if (answers['ai']?.includes("Smart Search")) { basePrice += 2000; baseWeeks += 1; }
  if (answers['magnet'] && answers['magnet'].length > 3) { basePrice += 2500; baseWeeks += 1.5; }

  return {
    minPrice: Math.round(basePrice),
    maxPrice: Math.round(basePrice * 1.25),
    minWeeks: Math.ceil(baseWeeks),
    maxWeeks: Math.ceil(baseWeeks + 1),
    score
  };
};

const generateSitemap = (answers: Record<string, any>) => {
  const nodes = [{ label: "Home", type: "root" }];
  if (answers['size']?.includes("One")) {
    nodes.push({ label: "Sections", type: "static" });
  } else {
    nodes.push({ label: "About", type: "static" });
    nodes.push({ label: "Contact", type: "static" });
  }
  if (answers['content']?.includes("Projects")) nodes.push({ label: "Case Studies", type: "dynamic" });
  if (answers['content']?.includes("Blog")) nodes.push({ label: "Journal", type: "dynamic" });
  if (answers['engine']?.includes("Sell")) {
    nodes.push({ label: "Shop", type: "commerce" });
    nodes.push({ label: "Cart", type: "commerce" });
  }
  return nodes;
};

// --- Component ---

export const ProjectScopeTool: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [leadMagnetInput, setLeadMagnetInput] = useState('');
  
  // Gating State
  const [isGateLocked, setIsGateLocked] = useState(true);
  const [email, setEmail] = useState("");

  const currentQ = QUESTIONS[currentStep];

  const handleOptionSelect = (option: string) => {
    if (currentQ.type === 'multi') {
      const current = answers[currentQ.id] || [];
      const updated = current.includes(option)
        ? current.filter((item: string) => item !== option)
        : [...current, option];
      setAnswers({ ...answers, [currentQ.id]: updated });
    } else {
      setAnswers({ ...answers, [currentQ.id]: option });
      setTimeout(() => nextStep(), 250);
    }
  };

  const handleTextSubmit = () => {
    setAnswers({ ...answers, [currentQ.id]: leadMagnetInput });
    nextStep();
  };

  const nextStep = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateReport();
    }
  };

  const generateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 2000);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if(email.includes('@')) setIsGateLocked(false);
  };

  const renderNodeCard = (node: any) => {
    let colorClass = "bg-white border-zinc-200 text-zinc-600"; 
    if (node.type === 'root') colorClass = "bg-black text-white border-black";
    if (node.type === 'dynamic') colorClass = "bg-purple-50 border-purple-100 text-purple-600";
    if (node.type === 'commerce') colorClass = "bg-emerald-50 border-emerald-100 text-emerald-600";

    return (
        <div className={`px-4 py-3 rounded-lg border text-xs font-mono font-bold shadow-sm w-32 md:w-auto text-center ${colorClass}`}>
            {node.label}
        </div>
    );
  };

  // --- RENDER REPORT ---
  const renderReport = () => {
    const estimates = calculateEstimates(answers);
    const sitemap = generateSitemap(answers);
    const date = new Date().toLocaleDateString();

    return (
      <div className="animate-fade-in w-full max-w-5xl mx-auto relative">
        
        {/* Actions Bar */}
        <div className={`flex justify-between items-center mb-6 ${isGateLocked ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
            <button onClick={() => window.location.reload()} className="text-zinc-500 hover:text-black text-sm flex items-center gap-2 font-medium">
                &larr; Restart
            </button>
            <Button variant="outline" size="sm" onClick={() => window.print()}>
               <Printer size={16} className="mr-2" /> PDF
            </Button>
        </div>

        {/* --- LOCKED GATE OVERLAY --- */}
        {isGateLocked && (
            <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
                <div className="bg-white border border-zinc-200 shadow-2xl p-8 rounded-[2rem] max-w-md w-full">
                    <div className="flex justify-center mb-4 text-black">
                        <Lock size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-black text-center mb-2">Strategy Ready.</h3>
                    <p className="text-zinc-500 text-center text-sm mb-6">
                        Where should we send your plan?
                    </p>
                    <form onSubmit={handleUnlock} className="space-y-4">
                        <input 
                            type="email" 
                            required
                            placeholder="name@company.com" 
                            className="w-full bg-zinc-50 border border-zinc-200 text-black p-4 rounded-xl focus:ring-2 focus:ring-black outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button type="submit" variant="primary" className="w-full justify-center">
                            Reveal Blueprint
                        </Button>
                    </form>
                </div>
            </div>
        )}

        <div id="strategy-report" className={`bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-500 ${isGateLocked ? 'blur-md opacity-50 select-none pointer-events-none' : 'blur-0 opacity-100'}`}>
          
          {/* Header */}
          <div className="bg-zinc-50 px-8 py-8 border-b border-zinc-200 flex flex-col md:flex-row justify-between md:items-center gap-6">
             <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="h-6 w-6 bg-black rounded flex items-center justify-center text-white">
                        <Cpu size={14} />
                    </div>
                    <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Strategy ID: #{Math.floor(Math.random() * 9000) + 1000}</span>
                </div>
                <h2 className="text-2xl font-bold text-black">
                    Architecture Blueprint
                </h2>
                <p className="text-zinc-500 text-sm mt-1">
                    Prepared for {answers['industry'] || "Client"} • {date}
                </p>
             </div>
             <div className="text-right hidden md:block">
                 <div className="text-2xl font-bold text-black mb-1">Norddorf.</div>
                 <div className="text-xs text-zinc-400 uppercase tracking-widest">Engineering Division</div>
             </div>
          </div>

          <div className="p-12 space-y-16">
            
            {/* 1. Sitemap */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <Layout className="text-black" />
                    <h3 className="text-lg font-bold text-black uppercase tracking-wider">01. Component Map</h3>
                </div>
                <div className="bg-zinc-50 border border-zinc-100 p-8 rounded-3xl flex flex-wrap justify-center gap-4">
                     {sitemap.map((node, i) => (
                         <div key={i} className="flex flex-col items-center">
                             {renderNodeCard(node)}
                         </div>
                     ))}
                </div>
            </section>

            {/* 2. Tech Stack */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                     <div className="flex items-center gap-3 mb-6">
                        <ShieldCheck className="text-black" />
                        <h3 className="text-lg font-bold text-black uppercase tracking-wider">02. Stack</h3>
                    </div>
                    <div className="bg-white border border-zinc-200 p-6 rounded-3xl h-full space-y-2">
                        <div className="flex justify-between p-3 bg-zinc-50 rounded-xl">
                            <span className="text-sm font-medium">Frontend</span>
                            <span className="text-xs font-mono bg-white border border-zinc-200 px-2 py-1 rounded">React / Vite</span>
                        </div>
                        <div className="flex justify-between p-3 bg-zinc-50 rounded-xl">
                            <span className="text-sm font-medium">CMS</span>
                            <span className="text-xs font-mono bg-white border border-zinc-200 px-2 py-1 rounded">Sanity.io</span>
                        </div>
                        <div className="flex justify-between p-3 bg-zinc-50 rounded-xl">
                            <span className="text-sm font-medium">Hosting</span>
                            <span className="text-xs font-mono bg-white border border-zinc-200 px-2 py-1 rounded">Vercel / CDN</span>
                        </div>
                    </div>
                </div>

                {/* 3. Estimates */}
                <div>
                     <div className="flex items-center gap-3 mb-6">
                        <FileText className="text-black" />
                        <h3 className="text-lg font-bold text-black uppercase tracking-wider">03. Investment</h3>
                    </div>
                    <div className="bg-black text-white p-6 rounded-3xl h-full flex flex-col justify-center text-center">
                        <div className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Estimated Range</div>
                        <div className="text-4xl font-bold text-white mb-2">
                            €{estimates.minPrice / 1000}k - €{estimates.maxPrice / 1000}k
                        </div>
                        <div className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2 mt-4">Timeline</div>
                         <div className="text-2xl font-bold text-white">
                            {estimates.minWeeks}-{estimates.maxWeeks} Weeks
                        </div>
                    </div>
                </div>
            </section>

          </div>
        </div>
      </div>
    );
  };

  if (showResult) return renderReport();

  // --- RENDER WIZARD ---
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wide">
            <span>{currentQ.phase}</span>
            <span>{Math.round(((currentStep) / QUESTIONS.length) * 100)}%</span>
        </div>
        <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
            <div 
                className="h-full bg-sonic-orange transition-all duration-500 ease-out"
                style={{ width: `${((currentStep) / QUESTIONS.length) * 100}%` }}
            ></div>
        </div>
      </div>

      {isGenerating ? (
        <div className="bg-white border border-zinc-200 p-12 rounded-[2.5rem] text-center space-y-6 shadow-xl">
             <div className="w-16 h-16 border-4 border-zinc-100 border-t-sonic-orange rounded-full animate-spin mx-auto"></div>
             <div>
                <h3 className="text-xl font-bold text-black mb-2">Generating Blueprint...</h3>
                <p className="text-zinc-500">Matching tech stack to industry benchmarks.</p>
             </div>
        </div>
      ) : (
        <div className="bg-white border border-zinc-200 p-8 md:p-12 rounded-[2.5rem] shadow-xl min-h-[400px] flex flex-col relative">
            <div className="flex-1">
                <div className="text-xs font-bold text-zinc-400 mb-6 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sonic-orange"></span>
                    Question {currentStep + 1} / {QUESTIONS.length}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                    {currentQ.question}
                </h2>
                
                <div className="flex items-start gap-2 text-zinc-500 text-sm mb-10">
                    <AlertCircle size={16} className="shrink-0 mt-0.5 text-zinc-400" />
                    <p>{currentQ.subtext}</p>
                </div>

                {/* Options */}
                <div className="space-y-3">
                    {currentQ.type === 'text' ? (
                        <div className="flex gap-2">
                            <input 
                                type="text"
                                className="flex-1 bg-zinc-50 border border-zinc-200 p-4 text-black rounded-xl focus:ring-2 focus:ring-black outline-none transition-all"
                                placeholder="E.g., A price calculator..."
                                value={leadMagnetInput}
                                onChange={(e) => setLeadMagnetInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleTextSubmit()}
                                autoFocus
                            />
                            <button 
                                onClick={handleTextSubmit}
                                className="bg-black hover:bg-zinc-800 text-white p-4 rounded-xl shadow-lg transition-transform hover:scale-105"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    ) : (
                        currentQ.options?.map((opt, idx) => {
                            const isSelected = currentQ.type === 'multi' 
                                ? answers[currentQ.id]?.includes(opt)
                                : answers[currentQ.id] === opt;
                                
                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(opt)}
                                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex justify-between items-center group ${
                                        isSelected 
                                            ? 'bg-black border-black text-white shadow-lg transform scale-[1.02]' 
                                            : 'bg-white border-zinc-200 text-zinc-600 hover:border-black hover:text-black'
                                    }`}
                                >
                                    <span className="font-medium">{opt}</span>
                                    {isSelected && <Check size={18} className="text-white" />}
                                </button>
                            );
                        })
                    )}
                </div>
            </div>

            {currentQ.type === 'multi' && (
                <div className="mt-8 flex justify-end">
                    <Button onClick={nextStep} variant="primary">
                        Next <ArrowRight size={16} className="ml-2" />
                    </Button>
                </div>
            )}
        </div>
      )}
    </div>
  );
};