import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTina } from "tinacms/dist/react";
import { SEO } from "../components/SEO";
import { BlockRenderer } from "../components/blocks/BlockRenderer";

interface DynamicPageProps {
  lang: 'de' | 'en' | 'ja';
}

/**
 * DynamicPage - The catch-all CMS page renderer
 * 
 * Loads page content from TinaCMS based on route parameters.
 * File naming: {slug}-{lang}.json (e.g., home-de.json, about-en.json)
 * 
 * Routes:
 * - /de → home-de.json
 * - /de/about → about-de.json
 * - /en → home-en.json
 * - /en/about → about-en.json
 */
export const DynamicPage: React.FC<DynamicPageProps> = ({ lang }) => {
  const { slug } = useParams();
  const pageName = slug || "home";
  const relativePath = `${pageName}-${lang}.json`;
  
  // State for client-side data fetching
  const [pageData, setPageData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch page data
  // In production with Tina Cloud, you'd use the generated client
  // For local development, we fetch the JSON directly
  useEffect(() => {
    const fetchPage = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Try to import the JSON file directly (works in development)
        const response = await fetch(`/content/pages/${relativePath}`);
        
        if (!response.ok) {
          throw new Error(`Page not found: ${relativePath}`);
        }
        
        const data = await response.json();
        setPageData(data);
      } catch (err) {
        console.error('Failed to load page:', err);
        setError(err instanceof Error ? err.message : 'Failed to load page');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPage();
  }, [relativePath]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg,#0a0a0a)]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary,#FF5500)]" />
      </div>
    );
  }

  // Error state
  if (error || !pageData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg,#0a0a0a)] text-white">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-zinc-400 mb-2">
          {lang === 'de' ? 'Seite nicht gefunden' : 'Page not found'}
        </p>
        <p className="text-zinc-500 text-sm font-mono">{relativePath}</p>
      </div>
    );
  }

  return (
    <>
      {/* SEO */}
      {pageData.seo && (
        <SEO 
          title={pageData.seo.title || ''} 
          description={pageData.seo.description || ''} 
          lang={lang}
        />
      )}
      
      {/* Page Blocks */}
      <main>
        {pageData.blocks?.map((block: any, index: number) => (
          <BlockRenderer 
            key={index} 
            block={block} 
            lang={lang}
          />
        ))}
      </main>
    </>
  );
};

export default DynamicPage;


/**
 * DynamicPageWithTina - Version using useTina hook for visual editing
 * 
 * Use this version when Tina Cloud is configured and you want
 * real-time visual editing in the CMS.
 * 
 * Prerequisites:
 * 1. Run `tinacms build` to generate types and client
 * 2. Configure TINA_PUBLIC_CLIENT_ID and TINA_TOKEN env vars
 * 3. Import the generated client: import client from "../../tina/__generated__/client"
 */
/*
export const DynamicPageWithTina: React.FC<DynamicPageProps> = ({ lang }) => {
  const { slug } = useParams();
  const pageName = slug || "home";
  const relativePath = `${pageName}-${lang}.json`;

  // Using the generated Tina client for type-safe queries
  const { data, isLoading } = useTina({
    query: client.queries.page,
    variables: { relativePath },
    data: {},
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]" />
      </div>
    );
  }

  if (!data?.page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">404 - Page not found</h1>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={data.page.seo?.title || ''} 
        description={data.page.seo?.description || ''} 
        lang={lang}
      />
      <main>
        {data.page.blocks?.map((block, index) => (
          <BlockRenderer key={index} block={block} lang={lang} />
        ))}
      </main>
    </>
  );
};
*/
