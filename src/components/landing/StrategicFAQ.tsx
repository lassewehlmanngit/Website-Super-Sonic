import React, { useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { getStrategicFAQs, FAQ } from '../../data/faq';

interface StrategicFAQProps {
  lang: 'de' | 'en' | 'ja';
}

export const StrategicFAQ: React.FC<StrategicFAQProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  const faqs: FAQ[] = getStrategicFAQs(lang);

  // Inject FAQPage Schema
  useEffect(() => {
    const schemaId = 'faq-schema-strategic';
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
  }, [faqs]);

  return (
    <section id="faq" className="fluid-section bg-white">
      <div className="container-responsive max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight">
            {isJa ? "よくあるご質問" : isDe ? "Häufige Fragen" : "FAQ"}
          </h2>
        </div>

        <div className="space-y-4 reveal delay-100">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-zinc-50 rounded-2xl border border-zinc-100 open:bg-white transition-colors duration-300"
            >
              <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none">
                <span className="fluid-lg font-bold text-zinc-900 pr-8">
                  {faq.question}
                </span>
                <span className="text-sonic-orange transition-transform duration-300 group-open:rotate-180 flex-shrink-0" aria-hidden="true">
                  <Plus className="block group-open:hidden" size={24} aria-hidden="true" />
                  <Minus className="hidden group-open:block" size={24} aria-hidden="true" />
                </span>
              </summary>

              <div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-600 leading-relaxed fluid-base">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

