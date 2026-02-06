import type { Template } from "tinacms";
import { buttonField } from "../helpers";

/**
 * Hero Block Schema
 * 
 * The main hero/banner section for landing pages.
 * Supports multiple design variants.
 */
export const heroBlock: Template = {
  name: "hero",
  label: "✨ Hero Section",
  
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      eyebrow: "Webseiten für den Mittelstand",
      headline: "Du brauchst eine Website, die funktioniert.",
      subheadline: "Keinen Raketenplan.",
      body: "Maximal 14 Tage. Festpreis. 100% dein Eigentum.",
      variant: "dark"
    }
  },
  
  fields: [
    // Content
    { 
      type: "string", 
      name: "eyebrow", 
      label: "Eyebrow Text",
      description: "Small text above the headline"
    },
    { 
      type: "string", 
      name: "headline", 
      label: "Headline",
      description: "Main headline text"
    },
    { 
      type: "string", 
      name: "subheadline", 
      label: "Subheadline (Accent)",
      description: "Second line shown in accent color"
    },
    { 
      type: "string", 
      name: "body", 
      label: "Body Text",
      description: "Supporting paragraph below headline",
      ui: { component: "textarea" }
    },
    
    // CTAs
    buttonField("primaryCta", "Primary CTA"),
    buttonField("secondaryCta", "Secondary CTA"),
    
    // Design Options
    { 
      type: "string", 
      name: "variant", 
      label: "Design Variant",
      options: [
        { label: "Dark Background", value: "dark" },
        { label: "Light Background", value: "light" },
        { label: "Centered Layout", value: "centered" }
      ]
    },
    { 
      type: "image", 
      name: "backgroundImage", 
      label: "Background Image" 
    }
  ]
};
