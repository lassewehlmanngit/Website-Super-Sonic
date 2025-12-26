// This is a simulation of fetching data from the generated JSON content.
// In a real build, Keystatic/Vite would generate these JSONs from the content files.

// TODO: To make this real:
// 1. Run the admin at /keystatic
// 2. Create your FAQ entries
// 3. This will generate files in src/content/faqs/
// 4. Import those files here directly:
//    // import homeFaqs from '../content/faqs/home.json';
//    // (You may need a vite plugin to import markdown/json as objects if not supported out of box)

import { useEffect, useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

// Mock data that simulates what the CMS would output for the "Home" page
const MOCK_HOME_FAQS = [
  {
      question: "Gehört der Code wirklich mir?",
      answer: "Ja. Zu 100%. Sie erhalten Zugriff auf das GitHub Repository. Keine versteckten Klauseln."
  },
  {
      question: "Kann ich Texte selbst ändern?",
      answer: "Ja. Wir integrieren ein Headless CMS (Keystatic/Sanity). Sie können Texte und Bilder ändern, ohne den Code zu berühren."
  },
  {
      question: "Warum keine WordPress Templates?",
      answer: "Templates sind langsam, unsicher und schwer zu warten. Wir bauen Assets, die skalieren und Ihnen gehören."
  }
];

export function useCMSContent(collection: 'faqs', slug: string) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate network fetch
        setTimeout(() => {
            if (collection === 'faqs' && slug === 'home') {
                setData(MOCK_HOME_FAQS);
            }
            setLoading(false);
        }, 500);
    }, [collection, slug]);

    return { data, loading };
}
