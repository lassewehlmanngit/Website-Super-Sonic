import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  lang?: 'de' | 'en';
  image?: string;
  path?: string;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  lang = 'de',
  image = 'https://supersonic.design/og-image.jpg',
  path = '',
  noindex = false
}) => {
  const location = useLocation();
  const baseUrl = 'https://supersonic.design';
  const currentPath = path || location.pathname;
  const fullUrl = `${baseUrl}${currentPath}`;
  const isDe = lang === 'de';

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string, hreflang?: string) => {
      let link = document.querySelector(`link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ''}`);
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (hreflang) link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Primary Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('title', title);
    
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    // Open Graph
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:locale', isDe ? 'de_DE' : 'en_US', true);
    updateMetaTag('og:site_name', 'Super Sonic Prototypes', true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', fullUrl);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Canonical URL
    updateLinkTag('canonical', fullUrl);

    // Alternate Languages
    const alternatePath = currentPath.replace(/^\/(de|en)/, '');
    updateLinkTag('alternate', `${baseUrl}/de${alternatePath}`, 'de');
    updateLinkTag('alternate', `${baseUrl}/en${alternatePath}`, 'en');
    updateLinkTag('alternate', `${baseUrl}/de${alternatePath}`, 'x-default');

    // Update HTML lang attribute
    document.documentElement.lang = lang;

  }, [title, description, lang, image, fullUrl, currentPath, isDe, noindex]);

  return null;
};

