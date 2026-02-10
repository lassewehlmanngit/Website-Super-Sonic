import React from 'react';
import { SEO } from '../../SEO';

interface BlogLayoutProps {
  children: React.ReactNode;
  seo?: {
    title: string;
    description: string;
    image?: string;
  };
  lang?: 'de' | 'en';
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({ children, seo, lang = 'de' }) => {
  return (
    <>
      {seo && (
        <SEO
          title={seo.title}
          description={seo.description}
          image={seo.image}
          lang={lang}
        />
      )}
      <main className="min-h-screen bg-white">
        <article className="w-full">
          {children}
        </article>
      </main>
    </>
  );
};
