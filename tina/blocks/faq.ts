import type { Template } from "tinacms";
import { listItemProps } from "../helpers";

/**
 * FAQ Block Schema
 * 
 * Accordion-style FAQ section.
 * Supports categories for filtering.
 */
export const faqBlock: Template = {
  name: "faq",
  label: "❓ FAQ Section",
  
  ui: {
    previewSrc: "/blocks/faq.png",
    defaultItem: {
      headline: "Häufige Fragen",
      items: [
        { 
          question: "Wie lange dauert ein Projekt?", 
          answer: { 
            type: "root", 
            children: [{ type: "p", children: [{ type: "text", text: "Maximal 14 Tage von Briefing bis Launch." }] }] 
          },
          category: "general" 
        }
      ]
    }
  },
  
  fields: [
    // Section Header
    { 
      type: "string", 
      name: "headline", 
      label: "Section Headline" 
    },
    { 
      type: "string", 
      name: "subheadline", 
      label: "Subheadline",
      ui: { component: "textarea" }
    },
    
    // FAQ Items
    {
      type: "object",
      name: "items",
      label: "FAQ Items",
      list: true,
      ui: listItemProps('question'),
      fields: [
        { 
          type: "string", 
          name: "question", 
          label: "Question" 
        },
        { 
          type: "rich-text", 
          name: "answer", 
          label: "Answer",
          description: "Supports formatting, links, and lists"
        },
        { 
          type: "string", 
          name: "category", 
          label: "Category",
          options: [
            { label: "General", value: "general" },
            { label: "Web Design", value: "web-design" },
            { label: "MVP / App", value: "app" },
            { label: "UX Design", value: "ux" },
            { label: "Pricing", value: "pricing" },
            { label: "Process", value: "process" }
          ]
        }
      ]
    },
    
    // Design Options
    {
      type: "string",
      name: "variant",
      label: "Design Variant",
      options: [
        { label: "Default", value: "default" },
        { label: "Compact", value: "compact" },
        { label: "Cards", value: "cards" }
      ]
    }
  ]
};
