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

    // Add LocalBusiness Schema (Global)
    const addLocalBusinessSchema = () => {
      // Remove existing LocalBusiness schema if present
      const existing = document.querySelector('script[data-schema="localbusiness"]');
      if (existing) existing.remove();

      const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${baseUrl}#organization`,
        "name": "Super Sonic Prototypes",
        "legalName": "Super Sonic Prototypes Pte. Ltd.",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "description": isDe 
          ? "Entwicklung von Webseiten und MVPs als echtes Firmeneigentum. 100% Quellcode-Übergabe. Kein Vendor Lock-in."
          : "Development of websites and MVPs as real company assets. 100% source code handover. No vendor lock-in.",
        "priceRange": "€€€",
        "priceCurrency": "EUR",
        "areaServed": [
          {
            "@type": "Country",
            "name": "Germany"
          },
          {
            "@type": "Country", 
            "name": "Austria"
          },
          {
            "@type": "Country",
            "name": "Switzerland"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SG",
          "addressLocality": "Singapore"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "hello@supersonic.design",
          "availableLanguage": ["de", "en"]
        },
        "sameAs": [
          baseUrl
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "5000",
          "highPrice": "50000",
          "offerCount": "3"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'localbusiness');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addLocalBusinessSchema();

    // Add WebSite Schema (for sitelinks search and AI understanding)
    const addWebSiteSchema = () => {
      const existing = document.querySelector('script[data-schema="website"]');
      if (existing) existing.remove();

      const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        "url": baseUrl,
        "name": "Super Sonic Prototypes",
        "description": isDe
          ? "Webseiten für den Mittelstand. 14 Tage, Festpreis, 100% Eigentum."
          : "Websites for SMBs. 14 days, fixed price, 100% ownership.",
        "publisher": {
          "@id": `${baseUrl}#organization`
        },
        "inLanguage": ["de", "en"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}/${lang}#faq`
          },
          "query-input": "required name=search_term_string"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'website');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addWebSiteSchema();

    // Add Service Schema (for web development offerings)
    const addServiceSchema = () => {
      const existing = document.querySelector('script[data-schema="service"]');
      if (existing) existing.remove();

      const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}#service`,
        "name": isDe ? "Website-Entwicklung" : "Website Development",
        "description": isDe
          ? "Professionelle Webseiten für den Mittelstand. 14 Tage Lieferzeit, Festpreis von 5.600€, 100% Eigentum am Code."
          : "Professional websites for SMBs. 14-day delivery, fixed price of €5,600, 100% code ownership.",
        "provider": {
          "@id": `${baseUrl}#organization`
        },
        "serviceType": "Web Development",
        "areaServed": [
          { "@type": "Country", "name": "Germany" },
          { "@type": "Country", "name": "Austria" },
          { "@type": "Country", "name": "Switzerland" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": isDe ? "Website-Pakete" : "Website Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": isDe ? "Sonic Website" : "Sonic Website",
              "description": isDe 
                ? "Komplette Website mit CMS, SEO-Optimierung und DSGVO-Konformität"
                : "Complete website with CMS, SEO optimization and GDPR compliance",
              "price": "5600",
              "priceCurrency": "EUR",
              "priceValidUntil": "2026-12-31",
              "availability": "https://schema.org/InStock",
              "deliveryLeadTime": {
                "@type": "QuantitativeValue",
                "value": "14",
                "unitCode": "DAY"
              },
              "itemOffered": {
                "@type": "Service",
                "name": isDe ? "Website-Entwicklung" : "Website Development"
              }
            }
          ]
        },
        "termsOfService": `${baseUrl}/${isDe ? 'de/agb' : 'en/terms'}`,
        "serviceOutput": {
          "@type": "WebSite",
          "description": isDe
            ? "Moderne, schnelle Website mit CMS-Integration"
            : "Modern, fast website with CMS integration"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', 'service');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addServiceSchema();

  }, [title, description, lang, image, fullUrl, currentPath, isDe, noindex, baseUrl]);

  return null;
};

