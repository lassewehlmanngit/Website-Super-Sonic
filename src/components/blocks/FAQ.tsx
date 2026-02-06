import React, { useState } from "react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ChevronDown } from "lucide-react";

// Type will be generated after first `tinacms build`
interface FAQItem {
  question?: string | null;
  answer?: unknown; // TinaCMS rich-text type
  category?: string | null;
}

interface FAQData {
  headline?: string | null;
  subheadline?: string | null;
  items?: (FAQItem | null)[] | null;
  variant?: string | null;
}

interface FAQProps {
  data: FAQData;
}

/**
 * FAQ Block Component
 * 
 * Accordion-style FAQ section with visual editing support.
 * Supports rich text answers via TinaMarkdown.
 */
export const FAQ: React.FC<FAQProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isCompact = data.variant === "compact";
  const isCards = data.variant === "cards";

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[var(--color-bg-light,#fafafa)]">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-12">
          {data.headline && (
            <h2 
              data-tina-field={tinaField(data, "headline")}
              className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text,#0a0a0a)]"
            >
              {data.headline}
            </h2>
          )}
          {data.subheadline && (
            <p 
              data-tina-field={tinaField(data, "subheadline")}
              className="text-lg text-zinc-600 max-w-2xl mx-auto"
            >
              {data.subheadline}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <div className={`max-w-3xl mx-auto ${isCards ? "grid gap-4" : "space-y-4"}`}>
          {data.items?.map((item, index) => {
            if (!item) return null;
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`overflow-hidden transition-all ${
                  isCards 
                    ? "bg-white rounded-xl shadow-sm border border-zinc-100" 
                    : "border border-zinc-200 rounded-lg bg-white"
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full flex items-center justify-between text-left hover:bg-zinc-50 transition-colors ${
                    isCompact ? "p-4" : "p-6"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span 
                    data-tina-field={tinaField(item, "question")}
                    className={`font-semibold text-[var(--color-text,#0a0a0a)] pr-4 ${
                      isCompact ? "text-base" : "text-lg"
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown 
                    size={20}
                    className={`flex-shrink-0 text-zinc-400 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.answer && (
                    <div 
                      data-tina-field={tinaField(item, "answer")}
                      className={`prose prose-zinc max-w-none border-t border-zinc-100 ${
                        isCompact ? "px-4 pb-4 pt-3" : "px-6 pb-6 pt-4"
                      }`}
                    >
                      <TinaMarkdown content={item.answer} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
