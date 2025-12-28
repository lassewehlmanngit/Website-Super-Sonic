import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, CheckCircle2, Rocket, Zap, Download, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { LEAD_MAGNETS, LeadMagnet } from '../../lib/lead-magnets';

// Removed static imports of heavy PDF libraries
// import { pdf } from '@react-pdf/renderer';
// import { MVPProtocolPDF } from '../pdf/MVPProtocolPDF';
// import { ModernWebLawsPDF } from '../pdf/ModernWebLawsPDF';

export const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const location = useLocation();

  useEffect(() => {
    // Unique key for this version ensures it works again for you (clears previous session block)
    const STORAGE_KEY = 'supersonic_exit_intent_v5'; // Bumped version for new PDF
    
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

  // Return a string identifier instead of the component instance
  const getModalContent = (): LeadMagnet & { icon: React.ElementType, pdfId: string } => {
    const path = location.pathname;

    if (path.includes('app-design')) {
        return {
            ...LEAD_MAGNETS['mvp-protocol'],
            icon: Rocket,
            pdfId: 'mvp'
        };
    }

    // Web-design and Home both use Modern Web Laws
    if (path.includes('web-design')) {
        return {
            ...LEAD_MAGNETS['modern-guide'],
            icon: Zap,
            pdfId: 'laws'
        };
    }

    // Default / Home
    return {
        ...LEAD_MAGNETS['modern-guide'],
        icon: Zap,
        pdfId: 'laws'
    };
  };

  const content = getModalContent();

  const handleDownload = async () => {
    try {
        // Dynamically import the heavy PDF renderer only when needed
        const { pdf } = await import('@react-pdf/renderer');
        
        let PdfComponent;
        
        // Dynamically import the specific PDF document
        if (content.pdfId === 'mvp') {
           const module = await import('../pdf/MVPProtocolPDF');
           PdfComponent = module.MVPProtocolPDF;
        } else {
           const module = await import('../pdf/ModernWebLawsPDF');
           PdfComponent = module.ModernWebLawsPDF;
        }

        // Generate PDF Blob on the fly
        const blob = await pdf(<PdfComponent />).toBlob();
        const url = URL.createObjectURL(blob);
        
        const element = document.createElement('a');
        element.href = url;
        // Switch extension to .pdf
        element.download = content.filename.replace('.txt', '.pdf'); 
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error("PDF Generation failed:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate network delay -> Then Generate PDF
    // We start the download immediately after the "network request" finishes
    setTimeout(async () => {
        await handleDownload();
        setStatus('success');
    }, 100); // Reduced delay since we have async imports now
  };

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
            {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-8 animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-black mb-2">Check your downloads!</h2>
                    <p className="text-zinc-500 text-sm mb-8 max-w-xs">
                        We've started the download for <strong>{content.filename.replace('.txt', '.pdf')}</strong>.
                    </p>
                    <Button variant="primary" onClick={handleDownload} className="gap-2">
                        <Download size={16} />
                        Download Again
                    </Button>
                </div>
            ) : (
                <>
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
                            {content.checklistItems.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-xs text-zinc-600 font-medium">
                                    <CheckCircle2 size={14} className="text-sonic-orange shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-3">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={status === 'loading'}
                                className="flex-1 bg-white border border-zinc-200 text-black px-4 py-3 rounded-full focus:ring-2 focus:ring-sonic-orange outline-none text-sm disabled:opacity-50"
                            />
                            <Button variant="primary" disabled={status === 'loading'}>
                                {status === 'loading' ? (
                                    <Loader2 className="animate-spin" size={18} />
                                ) : (
                                    content.cta
                                )}
                            </Button>
                        </div>
                    </form>
                    <p className="text-[10px] text-zinc-400 mt-4 text-center">
                        We respect your inbox. No spam, just engineering rigor.
                    </p>
                </>
            )}
        </div>
      </div>
    </div>
  );
};
