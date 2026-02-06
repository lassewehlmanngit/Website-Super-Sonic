import type { Collection } from "tinacms";
import { heroBlock } from "../blocks/hero";
import { faqBlock } from "../blocks/faq";
import { caseStudiesBlock } from "../blocks/caseStudies";

/**
 * Page Collection - The Block-Based Page Builder
 * 
 * Each page is a JSON file in content/pages/
 * Naming convention: <slug>-<lang>.json (e.g., home-de.json, about-en.json)
 */
export const pageCollection: Collection = {
  name: "page",
  label: "📄 Pages",
  path: "content/pages",
  format: "json",
  
  ui: {
    // i18n-aware routing: home-de.json → /de, about-en.json → /en/about
    router: ({ document }) => {
      const filename = document._sys.filename;
      const langMatch = filename.match(/-(\w{2})$/);
      const lang = langMatch?.[1] || 'de';
      const slug = filename.replace(/-\w{2}$/, '');
      
      if (slug === 'home') return `/${lang}`;
      return `/${lang}/${slug}`;
    },
  },
  
  fields: [
    // SEO Settings
    {
      type: "object",
      name: "seo",
      label: "🔍 SEO Settings",
      fields: [
        { 
          type: "string", 
          name: "title", 
          label: "Meta Title",
          description: "Appears in browser tab and search results"
        },
        { 
          type: "string", 
          name: "description", 
          label: "Meta Description",
          description: "Appears in search results (max 160 chars)",
          ui: { component: "textarea" } 
        },
        {
          type: "image",
          name: "ogImage",
          label: "Social Share Image",
          description: "Image shown when page is shared on social media"
        }
      ]
    },
    
    // Page Blocks - The polymorphic list
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "🧱 Page Sections",
      templates: [
        heroBlock,
        faqBlock,
        caseStudiesBlock,
        // Add new blocks here
      ],
    },
  ],
};
