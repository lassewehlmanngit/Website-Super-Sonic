// tina/config.ts
import { defineConfig } from "tinacms";

// tina/helpers.ts
var listItemProps = (field = "title") => ({
  itemProps: (item) => ({
    label: item?.[field] || "New Item"
  })
});
var buttonField = (name = "button", label = "Button") => ({
  type: "object",
  name,
  label,
  fields: [
    { type: "string", name: "label", label: "Label" },
    { type: "string", name: "url", label: "URL" },
    {
      type: "string",
      name: "style",
      label: "Style",
      options: ["primary", "secondary", "outline"]
    }
  ]
});

// tina/blocks/hero.ts
var heroBlock = {
  name: "hero",
  label: "\u2728 Hero Section",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      eyebrow: "Webseiten f\xFCr den Mittelstand",
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

// tina/blocks/faq.ts
var faqBlock = {
  name: "faq",
  label: "\u2753 FAQ Section",
  ui: {
    previewSrc: "/blocks/faq.png",
    defaultItem: {
      headline: "H\xE4ufige Fragen",
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
      ui: listItemProps("question"),
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

// tina/blocks/caseStudies.ts
var caseStudiesBlock = {
  name: "caseStudies",
  label: "\u{1F4C2} Case Studies",
  ui: {
    previewSrc: "/blocks/case-studies.png",
    defaultItem: {
      headline: "Unsere Projekte",
      subheadline: "Echte Ergebnisse f\xFCr echte Unternehmen",
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
      ui: listItemProps("title"),
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
              list: true
            },
            {
              type: "string",
              name: "approach",
              label: "Our Approach",
              list: true
            },
            {
              type: "object",
              name: "features",
              label: "Key Features",
              list: true,
              ui: listItemProps("title"),
              fields: [
                { type: "string", name: "title", label: "Feature Title" },
                { type: "string", name: "description", label: "Description" }
              ]
            },
            {
              type: "string",
              name: "results",
              label: "Results",
              list: true
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
              ui: listItemProps("label"),
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

// tina/collections/page.ts
var pageCollection = {
  name: "page",
  label: "\u{1F4C4} Pages",
  path: "content/pages",
  format: "json",
  ui: {
    // i18n-aware routing: home-de.json → /de, about-en.json → /en/about
    router: ({ document }) => {
      const filename = document._sys.filename;
      const langMatch = filename.match(/-(\w{2})$/);
      const lang = langMatch?.[1] || "de";
      const slug = filename.replace(/-\w{2}$/, "");
      if (slug === "home") return `/${lang}`;
      return `/${lang}/${slug}`;
    }
  },
  fields: [
    // SEO Settings
    {
      type: "object",
      name: "seo",
      label: "\u{1F50D} SEO Settings",
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
      label: "\u{1F9F1} Page Sections",
      templates: [
        heroBlock,
        faqBlock,
        caseStudiesBlock
        // Add new blocks here
      ]
    }
  ]
};

// tina/collections/global.ts
var globalCollection = {
  name: "global",
  label: "\u{1F30D} Global Settings",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    // Theme / Branding
    {
      type: "object",
      name: "theme",
      label: "\u{1F3A8} Branding",
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
      label: "\u{1F9ED} Navigation",
      fields: [
        {
          type: "object",
          name: "links",
          label: "Nav Links",
          list: true,
          ui: listItemProps("label"),
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
      label: "\u{1F9B6} Footer",
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
          ui: listItemProps("platform"),
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

// tina/collections/privacy.ts
var privacyCollection = {
  name: "privacy",
  label: "\u{1F512} Privacy Page",
  path: "content/privacy",
  format: "json",
  ui: {
    // Lock the filename to 'privacy' so we effectively have a singleton
    filename: {
      readonly: true,
      slugify: () => "privacy"
    },
    allowedActions: {
      create: false,
      delete: false
    },
    router: () => "/de/datenschutz"
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      required: true
    },
    {
      type: "object",
      name: "sections",
      label: "Content Sections",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item.title || "Section"
        })
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title"
        },
        {
          type: "rich-text",
          name: "content",
          label: "Content"
        }
      ]
    },
    {
      type: "object",
      name: "seo",
      label: "SEO Settings",
      fields: [
        { type: "string", name: "title", label: "Meta Title" },
        { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } }
      ]
    }
  ]
};

// tina/collections/industry.ts
var industryCollection = {
  name: "industry",
  label: "\u{1F3ED} Industry Pages",
  path: "content/industry",
  format: "json",
  ui: {
    router: ({ document }) => {
      const filename = document._sys.filename;
      const langMatch = filename.match(/-(\w{2})$/);
      const lang = langMatch?.[1] || "de";
      const slug = filename.replace(/-\w{2}$/, "");
      return `/${lang}/handwerk/${slug}`;
    }
  },
  fields: [
    {
      type: "object",
      name: "seo",
      label: "SEO Settings",
      fields: [
        { type: "string", name: "title", label: "Meta Title" },
        { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } },
        { type: "image", name: "ogImage", label: "Share Image" }
      ]
    },
    {
      type: "object",
      name: "hero",
      label: "1. Hero Section",
      fields: [
        { type: "string", name: "kicker", label: "Kicker (Small Orange)" },
        { type: "string", name: "headline", label: "Headline (H1)", ui: { component: "textarea" } },
        { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
        { type: "string", name: "primaryCta", label: "Primary CTA Text" },
        { type: "string", name: "secondaryCta", label: "Secondary CTA Text" },
        { type: "string", name: "trustText", label: "Trust Text (Micro-copy)" },
        { type: "image", name: "image", label: "Hero Image/Mockup" },
        { type: "string", name: "imageAlt", label: "Hero Image Alt Text" }
      ]
    },
    {
      type: "object",
      name: "caseStudy",
      label: "2. Case Study",
      fields: [
        { type: "string", name: "kicker", label: "Section Kicker" },
        { type: "string", name: "headline", label: "Headline" },
        { type: "rich-text", name: "body", label: "Body Copy" },
        {
          type: "object",
          name: "stats",
          label: "Stats Grid",
          list: true,
          fields: [
            { type: "string", name: "label", label: "Label" },
            { type: "string", name: "value", label: "Value" }
          ]
        },
        { type: "string", name: "ctaText", label: "CTA Text" },
        { type: "string", name: "quote", label: "Quote (Optional)" },
        { type: "image", name: "image", label: "Case Study Image" },
        { type: "string", name: "imageAlt", label: "Case Study Image Alt Text" }
      ]
    },
    {
      type: "object",
      name: "problem",
      label: "3. The Problem",
      fields: [
        { type: "string", name: "headline", label: "Headline" },
        { type: "rich-text", name: "body", label: "Body Copy" },
        { type: "string", name: "callout", label: "Callout Box Text", ui: { component: "textarea" } }
      ]
    },
    {
      type: "object",
      name: "features",
      label: "4. Features (Was du bekommst)",
      fields: [
        { type: "string", name: "headline", label: "Section Headline" },
        {
          type: "object",
          name: "items",
          label: "Feature Cards",
          list: true,
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            // Icon selection would ideally be a select field, keeping it simple for now
            { type: "string", name: "icon", label: "Icon Name (optional)" }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "comparison",
      label: "5. Comparison",
      fields: [
        { type: "string", name: "headline", label: "Headline" },
        { type: "string", name: "subline", label: "Subline" },
        {
          type: "object",
          name: "rows",
          label: "Comparison Rows",
          list: true,
          fields: [
            { type: "string", name: "feature", label: "Feature Name" },
            { type: "string", name: "competitor", label: "Competitor Value" },
            { type: "string", name: "us", label: "Our Value" }
          ]
        },
        {
          type: "object",
          name: "cta",
          label: "After Table CTA",
          fields: [
            { type: "string", name: "text", label: "CTA Text", ui: { component: "textarea" } },
            { type: "string", name: "primaryBtn", label: "Primary Button" },
            { type: "string", name: "secondaryBtn", label: "Secondary Button" }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "process",
      label: "6. Process",
      fields: [
        { type: "string", name: "headline", label: "Headline" },
        {
          type: "object",
          name: "steps",
          label: "Process Steps",
          list: true,
          fields: [
            { type: "string", name: "title", label: "Step Title" },
            { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "about",
      label: "7. About Lasse",
      fields: [
        { type: "string", name: "headline", label: "Headline" },
        { type: "rich-text", name: "body", label: "Body" },
        { type: "string", name: "credentials", label: "Micro credentials" },
        { type: "image", name: "image", label: "Portrait Image" },
        { type: "string", name: "imageAlt", label: "Portrait Alt Text" }
      ]
    },
    {
      type: "object",
      name: "faq",
      label: "8. FAQ",
      fields: [
        {
          type: "object",
          name: "items",
          label: "Questions",
          list: true,
          fields: [
            { type: "string", name: "question", label: "Question" },
            { type: "rich-text", name: "answer", label: "Answer" }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "form",
      label: "9. Form Config",
      fields: [
        { type: "string", name: "headline", label: "Headline" },
        { type: "string", name: "subline", label: "Subline" },
        {
          type: "object",
          name: "fields",
          label: "Field Placeholders",
          fields: [
            { type: "string", name: "namePlaceholder", label: "Name Placeholder" },
            { type: "string", name: "emailPlaceholder", label: "Email Placeholder" },
            { type: "string", name: "websitePlaceholder", label: "Website Placeholder" },
            { type: "string", name: "servicePlaceholder", label: "Service Placeholder" }
          ]
        },
        { type: "string", name: "trustText", label: "Trust Text" }
      ]
    },
    {
      type: "object",
      name: "finalCta",
      label: "10. Final CTA",
      fields: [
        { type: "string", name: "headline", label: "Headline" },
        { type: "string", name: "body", label: "Body" },
        { type: "string", name: "primaryBtn", label: "Primary Button" },
        { type: "string", name: "secondaryBtn", label: "Secondary Button" }
      ]
    }
  ]
};

// tina/config.ts
var SUPPORTED_LANGUAGES = ["de", "en", "ja"];
var getLanguageFromFilename = (filename) => {
  const match = filename.match(/-(\w{2})$/);
  return match?.[1] || "de";
};
var branch = process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Tina Cloud credentials (optional for local dev)
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      pageCollection,
      globalCollection,
      privacyCollection,
      industryCollection
    ]
  }
});
export {
  SUPPORTED_LANGUAGES,
  buttonField,
  config_default as default,
  getLanguageFromFilename,
  listItemProps
};
