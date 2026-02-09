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
 * - /de/:slug → slug-de.json
 * - /en/:slug → slug-en.json
 */
export const DynamicPage: React.FC<DynamicPageProps> = ({ lang }) => {
  const { slug } = useParams();
  const pageName = slug || "home";
  const relativePath = `${pageName}-${lang}.json`;
  
  // We need to fetch the initial data for useTina
  // In a real Next.js/SSG app this would be getStaticProps
  // Here we do it client-side for the SPA
  const [initialData, setInitialData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        
        // Wrap in the structure useTina expects
        // This mimics the GraphQL response structure
        setInitialData({
          page: data,
          // We don't have the query/variables here without the generated client
          // but useTina needs them to know what to query
          // For now, we'll just pass the data through and rely on local dev mode
        });
      } catch (err) {
        console.error('Failed to load page:', err);
        setError(err instanceof Error ? err.message : 'Failed to load page');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPage();
  }, [relativePath]);

  // Hook into Tina
  // detailed query is needed for production, but for local dev with JSON files
  // we can often get away with less if we're just editing existing files
  // However, without the generated client, we can't easily construct the query.
  // We will use a basic query structure.
  const { data } = useTina({
    query: `
      query Page($relativePath: String!) {
        page(relativePath: $relativePath) {
          seo {
            title
            description
            ogImage
          }
          blocks
        }
      }
    `,
    variables: { relativePath },
    data: initialData || { page: {} },
  });

  const page = data.page;

  // Loading state
  if (isLoading && !page?.blocks) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg,#0a0a0a)]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary,#FF5500)]" />
      </div>
    );
  }

  // Error state
  if (error && !page?.blocks) {
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
      {page?.seo && (
        <SEO 
          title={page.seo.title || ''} 
          description={page.seo.description || ''} 
          lang={lang}
        />
      )}
      
      {/* Page Blocks */}
      <main>
        {page?.blocks?.map((block: any, index: number) => (
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
