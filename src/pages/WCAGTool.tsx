import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Code2, Play } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const WCAGTool: React.FC = () => {
  const [inputCode, setInputCode] = useState(`<button>Click me</button>`);
  const [result, setResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeCode = () => {
    setIsAnalyzing(true);
    // Simulating AI Analysis for the demo
    setTimeout(() => {
      setResult(`<!-- Analysis Result: WCAG 2.1 AA Violation -->
<!-- Issue: Missing accessible name on button -->

<button aria-label="Submit Form" className="px-4 py-2 bg-sonic-orange text-white rounded">
  Click me
</button>

<!-- Fix Applied: Added aria-label and distinct styling for focus states. -->`);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-950 border-t border-zinc-800 h-[500px]">
      <div className="p-0 border-r border-zinc-800 flex flex-col">
        <div className="bg-zinc-900 px-4 py-2 text-xs font-mono text-zinc-500 flex justify-between items-center border-b border-zinc-800">
          <span>INPUT: HTML / REACT</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>
        <textarea 
          className="flex-1 w-full bg-black p-4 text-sm font-mono text-zinc-300 outline-none resize-none"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          spellCheck="false"
        />
        <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
          <Button onClick={analyzeCode} disabled={isAnalyzing} className="w-full flex items-center gap-2">
            {isAnalyzing ? 'AI Thinking...' : <><Play size={16} /> Run Accessibility Check</>}
          </Button>
        </div>
      </div>

      <div className="flex flex-col bg-zinc-950/50">
        <div className="bg-zinc-900 px-4 py-2 text-xs font-mono text-emerald-500 border-b border-zinc-800 flex items-center gap-2">
            <Code2 size={14} /> AI OUTPUT
        </div>
        <div className="flex-1 p-4 font-mono text-sm overflow-auto">
          {isAnalyzing ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500 gap-4">
               <div className="w-8 h-8 border-2 border-zinc-700 border-t-sonic-orange rounded-full animate-spin"></div>
               <div className="text-xs">Analyzing DOM Structure...</div>
            </div>
          ) : result ? (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-start gap-3 p-3 bg-red-900/10 border border-red-900/30 rounded text-red-300 text-xs">
                 <AlertCircle size={16} className="shrink-0 mt-0.5" />
                 <div>Violation Detected: Button missing accessible name.</div>
              </div>
              <pre className="text-zinc-300 whitespace-pre-wrap">{result}</pre>
              <div className="flex items-center gap-2 text-emerald-500 text-xs mt-4">
                  <CheckCircle size={14} /> Fix generated successfully.
              </div>
            </div>
          ) : (
            <div className="text-zinc-600">Waiting for input...</div>
          )}
        </div>
      </div>
    </div>
  );
};