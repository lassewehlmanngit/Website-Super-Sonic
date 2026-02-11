import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const BASE_URL = 'https://norddorf.com';
const TODAY = new Date().toISOString().split('T')[0];

function generateSitemap() {
  console.log('Generating sitemap...');
  
  let urlEntries = [];

  // 1. Static Routes Definitions
  // Define groups of pages that are translations of each other
  const staticGroups = [
    // Homepage
    {
      langs: {
        de: '/de',
        en: '/en',
        ja: '/ja'
      },
      priority: '1.0',
      changefreq: 'weekly'
    },
    // Impressum
    {
      langs: {
        de: '/de/impressum',
        en: '/en/impressum',
        ja: '/ja/tokushoho'
      },
      priority: '0.3',
      changefreq: 'yearly'
    },
    // Privacy
    {
      langs: {
        de: '/de/datenschutz',
        en: '/en/privacy',
        ja: '/ja/privacy'
      },
      priority: '0.3',
      changefreq: 'yearly'
    },
    // Terms
    {
      langs: {
        de: '/de/agb',
        en: '/en/terms',
        ja: '/ja/terms'
      },
      priority: '0.3',
      changefreq: 'yearly'
    },
    // Business Facts
    {
      langs: {
        de: '/business-facts',
        en: '/business-facts',
        ja: '/business-facts'
      },
      priority: '0.5',
      changefreq: 'monthly'
    }
  ];

  // Process Static Groups
  staticGroups.forEach(group => {
    const { priority, changefreq, langs } = group;
    
    // Calculate full URLs for alternates
    const alternates = {};
    Object.entries(langs).forEach(([lang, path]) => {
      alternates[lang] = `${BASE_URL}${path}`;
    });

    // Create an entry for each language version
    Object.entries(langs).forEach(([currentLang, path]) => {
      urlEntries.push({
        loc: `${BASE_URL}${path}`,
        alternates,
        priority,
        changefreq,
        defaultUrl: alternates['de'] // Default to German
      });
    });
  });

  // 2. Dynamic Case Studies
  try {
    const caseStudiesContent = fs.readFileSync(toAbsolute('src/data/caseStudies.ts'), 'utf-8');
    const slugMatches = [...caseStudiesContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
    const slugs = [...new Set(slugMatches.map(m => m[1]))];

    console.log(`Found ${slugs.length} case studies.`);

    slugs.forEach(slug => {
      const alternates = {
        de: `${BASE_URL}/de/projekte/${slug}`,
        en: `${BASE_URL}/en/projects/${slug}`,
        ja: `${BASE_URL}/ja/projects/${slug}`
      };

      // Add entry for each language version
      Object.entries(alternates).forEach(([lang, url]) => {
        urlEntries.push({
          loc: url,
          alternates,
          priority: '0.8',
          changefreq: 'monthly',
          defaultUrl: alternates['de']
        });
      });
    });
    
  } catch (e) {
    console.warn('Could not read case studies data for sitemap.', e);
  }

  // 3. Dynamic CMS Pages (content/pages/*.json)
  try {
    const contentDir = toAbsolute('content/pages');
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir);
      const cmsPages = {}; // Group by slug: { slug: { de: true, en: true, ja: false } }
      
      files.forEach(file => {
        if (!file.endsWith('.json')) return;
        
        // Extract slug and lang from filename: {slug}-{lang}.json
        const match = file.match(/^(.+)-([a-z]{2})\.json$/);
        
        if (match) {
          const [_, slug, lang] = match;
          
          // Skip 'home' as it's handled in static groups
          if (slug === 'home') return;
          
          if (!cmsPages[slug]) {
            cmsPages[slug] = {};
          }
          cmsPages[slug][lang] = true;
        }
      });

      // Generate entries for each slug
      Object.keys(cmsPages).forEach(slug => {
        const langs = cmsPages[slug];
        const alternates = {};
        
        // Build alternates map for this slug
        if (langs.de) alternates.de = `${BASE_URL}/de/${slug}`;
        if (langs.en) alternates.en = `${BASE_URL}/en/${slug}`;
        if (langs.ja) alternates.ja = `${BASE_URL}/ja/${slug}`;
        
        // Add entry for each language version that exists
        Object.keys(alternates).forEach(lang => {
          urlEntries.push({
            loc: alternates[lang],
            alternates,
            priority: '0.7',
            changefreq: 'monthly',
            defaultUrl: alternates['de'] || alternates[Object.keys(alternates)[0]]
          });
        });
      });
      
      console.log(`Found ${Object.keys(cmsPages).length} CMS dynamic pages.`);
    }
  } catch (e) {
    console.warn('Could not read content/pages for sitemap.', e);
  }

  // 4. Construct XML
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.map(entry => `
  <url>
    <loc>${entry.loc}</loc>
${Object.entries(entry.alternates).map(([lang, url]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${entry.defaultUrl}"/>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('')}
</urlset>`;

  // 5. Write to public/sitemap.xml
  fs.writeFileSync(toAbsolute('public/sitemap.xml'), sitemapContent);
  console.log('Sitemap generated at public/sitemap.xml');
}

generateSitemap();
