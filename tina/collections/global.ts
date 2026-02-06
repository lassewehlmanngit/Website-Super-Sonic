import type { Collection } from "tinacms";
import { listItemProps } from "../helpers";

/**
 * Global Collection - Site-wide Settings
 * 
 * Controls theme, navigation, and other global settings
 * Stored in content/global/
 */
export const globalCollection: Collection = {
  name: "global",
  label: "🌍 Global Settings",
  path: "content/global",
  format: "json",
  ui: { 
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    }
  },
  
  fields: [
    // Theme / Branding
    {
      type: "object",
      name: "theme",
      label: "🎨 Branding",
      fields: [
        { 
          type: "string", 
          name: "primaryColor", 
          label: "Primary Color",
          description: "Main brand color (e.g., #FF5500)",
          ui: { component: "color" } 
        },
        { 
          type: "string", 
          name: "secondaryColor", 
          label: "Secondary Color",
          description: "Secondary accent color",
          ui: { component: "color" } 
        },
        {
          type: "string",
          name: "backgroundColor",
          label: "Background Color",
          ui: { component: "color" }
        },
        { 
          type: "string", 
          name: "fontHeading", 
          label: "Heading Font",
          description: "Google Fonts name (e.g., Inter, Space Grotesk)"
        },
        {
          type: "string",
          name: "fontBody",
          label: "Body Font",
          description: "Google Fonts name for body text"
        }
      ]
    },
    
    // Navigation
    {
      type: "object",
      name: "navigation",
      label: "🧭 Navigation",
      fields: [
        {
          type: "object",
          name: "links",
          label: "Nav Links",
          list: true,
          ui: listItemProps('label'),
          fields: [
            { type: "string", name: "label", label: "Link Label" },
            { type: "string", name: "url", label: "Link URL" }
          ]
        },
        {
          type: "object",
          name: "cta",
          label: "CTA Button",
          fields: [
            { type: "string", name: "label", label: "Button Label" },
            { type: "string", name: "url", label: "Button URL" }
          ]
        }
      ]
    },
    
    // Footer
    {
      type: "object",
      name: "footer",
      label: "🦶 Footer",
      fields: [
        { 
          type: "string", 
          name: "copyright", 
          label: "Copyright Text" 
        },
        {
          type: "object",
          name: "socialLinks",
          label: "Social Links",
          list: true,
          ui: listItemProps('platform'),
          fields: [
            { 
              type: "string", 
              name: "platform", 
              label: "Platform",
              options: ["linkedin", "twitter", "instagram", "github", "youtube"]
            },
            { type: "string", name: "url", label: "URL" }
          ]
        }
      ]
    }
  ]
};
