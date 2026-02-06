/**
 * Shared Helper Functions for TinaCMS Blocks
 * 
 * These helpers are used across multiple block schemas.
 * Separated from config.ts to avoid circular dependencies.
 */

/**
 * Helper for clean sidebar list labels
 * Usage: ui: listItemProps('title')
 */
export const listItemProps = (field: string = 'title') => ({
  itemProps: (item: Record<string, unknown>) => ({
    label: (item?.[field] as string) || "New Item",
  }),
});

/**
 * Reusable button/CTA field configuration
 * Usage: buttonField("cta", "Call to Action")
 */
export const buttonField = (name = "button", label = "Button") => ({
  type: "object" as const,
  name,
  label,
  fields: [
    { type: "string" as const, name: "label", label: "Label" },
    { type: "string" as const, name: "url", label: "URL" },
    { 
      type: "string" as const, 
      name: "style", 
      label: "Style",
      options: ["primary", "secondary", "outline"] 
    }
  ]
});
