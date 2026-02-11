import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { businessConfig } from '../config/business';

interface SEOProps {
  title: string;
  description: string;
  lang?: 'de' | 'en' | 'ja';
  image?: string;
  path?: string;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  lang = 'de',
  image = 'https://norddorf.com/og-image.jpg',
  path = '',
  noindex = false
}) => {
  const location = useLocation();
  const baseUrl = 'https://norddorf.com';
  const currentPath = path || location.pathname;
  // Normalize path: remove index.html/php and trailing slashes (except root)
  const normalizedPath = currentPath
    .replace(/\/index\.(html|php)$/, '')
    .replace(/\/$/, '');
  
  const fullUrl = `${baseUrl}${normalizedPath || '/'}`;
  const isDe = lang === 'de';

  // Construct alternate links
  // Use normalizedPath to ensure alternate links are also clean (no index.html, no trailing slash)
  const alternatePath = normalizedPath.replace(/^\/(de|en|ja)/, '');
  
  // Schema data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    "name": businessConfig.name,
    "legalName": businessConfig.legalName,
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": isDe 
      ? "Entwicklung von Webseiten und MVPs als echtes Firmeneigentum. 100% Quellcode-Übergabe. Kein Vendor Lock-in."
      : "Development of websites and MVPs as real company assets. 100% source code handover. No vendor lock-in.",
    "priceRange": "€€€",
    "priceCurrency": "EUR",
    "areaServed": [
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "Austria" },
      { "@type": "Country", "name": "Switzerland" }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": businessConfig.address.countryCode,
      "addressLocality": businessConfig.address.city,
      "postalCode": businessConfig.address.postalCode,
      "streetAddress": businessConfig.address.street
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": businessConfig.contact.email,
      "telephone": businessConfig.contact.phone,
      "availableLanguage": ["de", "en"]
    },
    "sameAs": [baseUrl]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    "url": baseUrl,
    "name": businessConfig.name,
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

  const serviceSchema = {
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

  return (
    <Helmet>
      {/* HTML Lang Attribute */}
      <html lang={lang} />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={isDe ? 'de_DE' : 'en_US'} />
      <meta property="og:site_name" content={businessConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Alternate Languages - Correctly pointing to translated versions */}
      <link rel="alternate" hreflang="de" href={`${baseUrl}/de${alternatePath}`} />
      <link rel="alternate" hreflang="en" href={`${baseUrl}/en${alternatePath}`} />
      <link rel="alternate" hreflang="ja" href={`${baseUrl}/ja${alternatePath}`} />
      <link rel="alternate" hreflang="x-default" href={`${baseUrl}/de${alternatePath}`} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};
