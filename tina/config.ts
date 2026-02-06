import { defineConfig } from "tinacms";
import { pageCollection } from "./collections/page";
import { globalCollection } from "./collections/global";

// Re-export helpers for convenience (they're defined in helpers.ts)
export { listItemProps, buttonField } from "./helpers";

// =========================================
// 🌍 i18n HELPERS
// =========================================

export const SUPPORTED_LANGUAGES = ['de', 'en', 'ja'] as const;
export type Language = typeof SUPPORTED_LANGUAGES[number];

/**
 * Extract language code from filename
 * e.g., "home-de" → "de"
 */
export const getLanguageFromFilename = (filename: string): Language => {
  const match = filename.match(/-(\w{2})$/);
  return (match?.[1] as Language) || 'de';
};

// =========================================
// ⚙️ MAIN CONFIG
// =========================================

const branch = process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,
  
  // Tina Cloud credentials (optional for local dev)
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: { 
      mediaRoot: "uploads", 
      publicFolder: "public" 
    },
  },
  
  schema: {
    collections: [
      pageCollection,
      globalCollection,
    ],
  },
});
