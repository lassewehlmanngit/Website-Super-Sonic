import React, { useState } from 'react';
import { Copy, Check, FileJson } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const SchemaGenerator: React.FC = () => {
  const [businessName, setBusinessName] = useState('My Business');
  const [description, setDescription] = useState('We build great software.');
  const [schema, setSchema] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const generateSchema = () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": businessName,
      "description": description,
      "url": "https://example.com",
      "priceRange": "$$$"
    };
    setSchema(JSON.stringify(jsonLd, null, 2));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(schema);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-zinc-950 min-h-[400px]">
      {/* Inputs */}
      <div className="p-8 border-r border-zinc-800 space-y-6">
        <div>
           <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase">Business Name</label>
           <input 
             type="text" 
             className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded text-white text-sm focus:border-sonic-orange outline-none transition-colors"
             value={businessName}
             onChange={(e) => setBusinessName(e.target.value)}
           />
        </div>
        <div>
           <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase">Short Description</label>
           <textarea 
             className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded text-white text-sm h-32 resize-none focus:border-sonic-orange outline-none transition-colors"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
           />
        </div>
        <Button onClick={generateSchema} className="w-full">Generate JSON-LD</Button>
      </div>

      {/* Output */}
      <div className="bg-black p-0 flex flex-col relative">
         <div className="bg-zinc-900/50 px-4 py-2 border-b border-zinc-800 flex justify-between items-center">
             <div className="flex items-center gap-2 text-xs font-mono text-sonic-orange">
                 <FileJson size={14} /> schema.json
             </div>
             {schema && (
                 <button onClick={copyToClipboard} className="text-zinc-500 hover:text-white transition-colors">
                     {isCopied ? <Check size={16} /> : <Copy size={16} />}
                 </button>
             )}
         </div>
         <div className="flex-1 p-6 overflow-auto">
             {schema ? (
                 <pre className="text-xs font-mono text-green-400 whitespace-pre-wrap">{schema}</pre>
             ) : (
                 <div className="h-full flex items-center justify-center text-zinc-700 text-sm font-mono">
                     Waiting for generation...
                 </div>
             )}
         </div>
      </div>
    </div>
  );
};