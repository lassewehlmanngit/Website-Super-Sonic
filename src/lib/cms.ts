/**
 * CMS Content Utilities
 * 
 * This file provides helpers for fetching CMS content.
 * With TinaCMS, content is stored in /content/ directory as JSON files.
 * 
 * For full CMS integration:
 * 1. Run `npm run dev` to start TinaCMS
 * 2. Access admin at http://localhost:3000/admin
 * 3. Edit content in the visual editor
 * 4. Content saves to /content/pages/*.json
 */

import { useEffect, useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

// Mock data for legacy components not yet migrated to TinaCMS blocks
const MOCK_HOME_FAQS = [
  {
      question: "Gehört der Code wirklich mir?",
      answer: "Ja. Zu 100%. Sie erhalten Zugriff auf das GitHub Repository. Keine versteckten Klauseln."
  },
  {
      question: "Kann ich Texte selbst ändern?",
      answer: "Ja. Wir integrieren ein Headless CMS (TinaCMS). Sie können Texte und Bilder ändern, ohne den Code zu berühren."
  },
  {
      question: "Warum keine WordPress Templates?",
      answer: "Templates sind langsam, unsicher und schwer zu warten. Wir bauen Assets, die skalieren und Ihnen gehören."
  }
];

/**
 * Legacy hook for fetching CMS content
 * @deprecated Use TinaCMS blocks instead - see docs/TINA_AI_ARCHITECTURE.md
 */
export function useCMSContent(collection: 'faqs', slug: string) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate network fetch for legacy components
        setTimeout(() => {
            if (collection === 'faqs' && slug === 'home') {
                setData(MOCK_HOME_FAQS);
            }
            setLoading(false);
        }, 500);
    }, [collection, slug]);

    return { data, loading };
}
