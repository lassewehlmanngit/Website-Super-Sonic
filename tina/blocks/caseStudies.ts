import type { Template } from "tinacms";
import { listItemProps } from "../helpers";

/**
 * Case Studies Block Schema
 * 
 * Showcase of projects/case studies.
 * Can display as grid or featured cards.
 */
export const caseStudiesBlock: Template = {
  name: "caseStudies",
  label: "📂 Case Studies",
  
  ui: {
    previewSrc: "/blocks/case-studies.png",
    defaultItem: {
      headline: "Unsere Projekte",
      subheadline: "Echte Ergebnisse für echte Unternehmen",
      variant: "grid"
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
    
    // Case Studies List
    {
      type: "object",
      name: "studies",
      label: "Case Studies",
      list: true,
      ui: listItemProps('title'),
      fields: [
        // Basic Info
        { 
          type: "string", 
          name: "slug", 
          label: "URL Slug",
          description: "Used in the detail page URL"
        },
        { 
          type: "string", 
          name: "title", 
          label: "Project Title" 
        },
        { 
          type: "string", 
          name: "client", 
          label: "Client Name" 
        },
        { 
          type: "string", 
          name: "industry", 
          label: "Industry" 
        },
        { 
          type: "string", 
          name: "year", 
          label: "Year" 
        },
        
        // Visual
        { 
          type: "image", 
          name: "heroImage", 
          label: "Hero Image" 
        },
        { 
          type: "string", 
          name: "color", 
          label: "Brand Color",
          ui: { component: "color" }
        },
        {
          type: "string",
          name: "icon",
          label: "Icon",
          options: [
            { label: "Leaf", value: "leaf" },
            { label: "Truck", value: "truck" },
            { label: "Scale", value: "scale" },
            { label: "Server", value: "server" },
            { label: "Building", value: "building" },
            { label: "Store", value: "store" }
          ]
        },
        
        // Preview Card Content
        {
          type: "object",
          name: "preview",
          label: "Preview Card",
          fields: [
            { type: "string", name: "problem", label: "Problem Statement" },
            { type: "string", name: "solution", label: "Solution Summary" },
            { type: "string", name: "result", label: "Key Result" },
            { type: "string", name: "metric", label: "Highlight Metric" },
            { type: "string", name: "metricLabel", label: "Metric Label" }
          ]
        },
        
        // Full Content (for detail page)
        {
          type: "object",
          name: "content",
          label: "Full Content",
          fields: [
            { 
              type: "rich-text", 
              name: "intro", 
              label: "Introduction" 
            },
            {
              type: "object",
              name: "story",
              label: "The Story",
              fields: [
                { type: "string", name: "hook", label: "The Hook", ui: { component: "textarea" } },
                { type: "string", name: "turningPoint", label: "The Turning Point", ui: { component: "textarea" } },
                { type: "string", name: "transformation", label: "The Transformation", ui: { component: "textarea" } }
              ]
            },
            {
              type: "string",
              name: "challenges",
              label: "Challenges",
              list: true,
            },
            {
              type: "string",
              name: "approach",
              label: "Our Approach",
              list: true,
            },
            {
              type: "object",
              name: "features",
              label: "Key Features",
              list: true,
              ui: listItemProps('title'),
              fields: [
                { type: "string", name: "title", label: "Feature Title" },
                { type: "string", name: "description", label: "Description" }
              ]
            },
            {
              type: "string",
              name: "results",
              label: "Results",
              list: true,
            },
            {
              type: "string",
              name: "techStack",
              label: "Tech Stack",
              list: true,
              ui: {
                component: "tags"
              }
            },
            {
              type: "object",
              name: "metrics",
              label: "Metrics",
              list: true,
              ui: listItemProps('label'),
              fields: [
                { type: "string", name: "label", label: "Metric Label" },
                { type: "string", name: "value", label: "Value" },
                { type: "string", name: "comparison", label: "Comparison" }
              ]
            },
            { 
              type: "rich-text", 
              name: "conclusion", 
              label: "Conclusion" 
            }
          ]
        },
        
        // SEO
        {
          type: "object",
          name: "seo",
          label: "SEO Settings",
          fields: [
            { type: "string", name: "title", label: "SEO Title" },
            { type: "string", name: "description", label: "SEO Description" }
          ]
        },
        
        // External Link
        { 
          type: "string", 
          name: "liveUrl", 
          label: "Live URL" 
        }
      ]
    },
    
    // Design Options
    {
      type: "string",
      name: "variant",
      label: "Display Variant",
      options: [
        { label: "Grid", value: "grid" },
        { label: "Featured Cards", value: "featured" },
        { label: "List", value: "list" }
      ]
    }
  ]
};
