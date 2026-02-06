// ============================================
// SHARED TYPE DEFINITIONS
// ============================================

/**
 * Supported languages across the application
 * - de: German
 * - en: English  
 * - ja: Japanese
 */
export type Language = 'de' | 'en' | 'ja';

/**
 * Props interface for components that need language support
 */
export interface LanguageProps {
  lang: Language;
}
