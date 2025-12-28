import React, { useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  title?: string;
  faqs: FAQ[];
  id?: string;
}

export const FAQSection: React.FC<Props> = ({
  title = "Häufige Fragen",
  faqs,
  id = "faq"
}) => {
  // Inject FAQPage Schema
  useEffect(() => {
    const schemaId = `faq-schema-${id}`;
    // Remove existing schema if present
    const existing = document.getElementById(schemaId);
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(schemaId);
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [faqs, id]);

  return (
    <section id={id} className="py-32 px-4 md:px-12 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold text-black mb-16 tracking-tighter">
        {title}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-white rounded-2xl border border-black/5 open:bg-zinc-50 transition-colors duration-300"
          >
            <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
              <span className="text-xl font-bold text-black pr-8">
                {faq.question}
              </span>
              <span className="text-sonic-orange transition-transform duration-300 group-open:rotate-180">
                 {/* Icon switching purely via CSS or just rotating */}
                 <Plus className="block group-open:hidden" />
                 <Minus className="hidden group-open:block" />
              </span>
            </summary>

            <div className="px-8 pb-8 text-zinc-600 leading-relaxed text-lg animate-fade-in">
                {faq.answer}
            </div>
          </details>
        ))}
      </div>

       {/* FAQPage Schema Markup - Injected via useEffect */}
    </section>
  );
};
