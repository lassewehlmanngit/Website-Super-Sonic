import type { Collection } from "tinacms";

export const privacyCollection: Collection = {
  name: "privacy",
  label: "🔒 Privacy Page",
  path: "content/privacy",
  format: "json",
  ui: {
    // Lock the filename to 'privacy' so we effectively have a singleton
    filename: {
      readonly: true,
      slugify: () => "privacy",
    },
    allowedActions: {
      create: false,
      delete: false,
    },
    router: () => "/de/datenschutz",
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      required: true,
    },
    {
      type: "object",
      name: "sections",
      label: "Content Sections",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item.title || "Section",
        }),
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title",
        },
        {
          type: "rich-text",
          name: "content",
          label: "Content",
        },
      ],
    },
    {
      type: "object",
      name: "seo",
      label: "SEO Settings",
      fields: [
        { type: "string", name: "title", label: "Meta Title" },
        { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } },
      ],
    },
  ],
};
