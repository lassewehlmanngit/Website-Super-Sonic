import React from "react";
import { Hero } from "./Hero";
import { FAQ } from "./FAQ";
import { CaseStudies } from "./CaseStudies";

/**
 * Block type from TinaCMS
 * This interface will be replaced by generated types after `tinacms build`
 */
interface Block {
  __typename?: string;
  _template?: string;  // Used in raw JSON files
  [key: string]: unknown;
}

interface BlockRendererProps {
  block: Block;
  lang?: 'de' | 'en';
}

/**
 * Get the normalized block type
 * 
 * TinaCMS uses different formats:
 * - __typename: "PageBlocksHero" (from Tina client/visual editor)
 * - _template: "hero" (from raw JSON files)
 * 
 * This function normalizes both to a simple lowercase name.
 */
const getBlockType = (block: Block): string => {
  // If __typename exists (from Tina client), extract the block name
  if (block.__typename) {
    // "PageBlocksHero" → "hero"
    // "PageBlocksFaq" → "faq"
    // "PageBlocksCaseStudies" → "casestudies"
    return block.__typename.replace('PageBlocks', '').toLowerCase();
  }
  
  // If _template exists (from raw JSON), use it directly
  if (block._template) {
    return block._template.toLowerCase();
  }
  
  return '';
};

/**
 * BlockRenderer - The heart of the page builder
 * 
 * Maps CMS block data to React components based on block type.
 * Supports both TinaCMS __typename and raw JSON _template formats.
 * Every new block must be registered here.
 * 
 * Block type mapping:
 * - hero → <Hero />
 * - faq → <FAQ />
 * - casestudies → <CaseStudies />
 */
export const BlockRenderer: React.FC<BlockRendererProps> = ({ block, lang = 'de' }) => {
  const blockType = getBlockType(block);
  
  switch (blockType) {
    case "hero":
      return <Hero data={block} />;
    
    case "faq":
      return <FAQ data={block} />;
    
    case "casestudies":
      return <CaseStudies data={block} lang={lang} />;
    
    default:
      // Development warning for unknown block types
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Unknown block type: ${blockType || 'undefined'}`, block);
        return (
          <div className="p-8 bg-yellow-50 border-2 border-dashed border-yellow-300 rounded-lg m-4">
            <p className="text-yellow-800 font-mono text-sm">
              Unknown block: <code>{blockType || block.__typename || block._template || 'undefined'}</code>
            </p>
            <p className="text-yellow-600 text-sm mt-2">
              Add this block to BlockRenderer.tsx
            </p>
          </div>
        );
      }
      return null;
  }
};

export default BlockRenderer;
