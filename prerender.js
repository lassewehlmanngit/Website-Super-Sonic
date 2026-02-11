import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

async function prerender() {
  const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');
  const { render } = await import('./dist/server/entry-server.js');

  // Determine routes to prerender
  const routesToPrerender = [
    '/de', '/en', '/ja',
    '/de/impressum', '/de/datenschutz', '/de/agb',
    '/en/impressum', '/en/privacy', '/en/terms',
    '/ja/tokushoho', '/ja/privacy', '/ja/terms',
    '/business-facts'
  ];

  // Add case studies from src/data/caseStudies.ts
  try {
    const caseStudiesContent = fs.readFileSync(toAbsolute('src/data/caseStudies.ts'), 'utf-8');
    const slugMatches = [...caseStudiesContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
    const slugs = [...new Set(slugMatches.map(m => m[1]))];

    slugs.forEach(slug => {
      routesToPrerender.push(`/de/projekte/${slug}`);
      routesToPrerender.push(`/en/projects/${slug}`);
      routesToPrerender.push(`/ja/projects/${slug}`);
    });
    console.log(`Found ${slugs.length} case studies to prerender.`);
  } catch (e) {
    console.warn('Could not read case studies data, skipping dynamic routes.', e);
  }

  // Add CMS pages from content/pages/
  try {
    const contentDir = toAbsolute('content/pages');
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir);
      const cmsRoutes = [];
      
      files.forEach(file => {
        if (!file.endsWith('.json')) return;
        
        // Extract slug and lang from filename: {slug}-{lang}.json
        // e.g. home-de.json -> slug: home, lang: de
        // e.g. about-us-en.json -> slug: about-us, lang: en
        const match = file.match(/^(.+)-([a-z]{2})\.json$/);
        
        if (match) {
          const [_, slug, lang] = match;
          
          // Skip 'home' slug as it's already handled by /de, /en, /ja
          if (slug === 'home') return;
          
          const route = `/${lang}/${slug}`;
          routesToPrerender.push(route);
          cmsRoutes.push(route);
        }
      });
      
      if (cmsRoutes.length > 0) {
        console.log(`Found ${cmsRoutes.length} CMS pages to prerender:`, cmsRoutes.join(', '));
      }
    }
  } catch (e) {
    console.warn('Could not read content/pages directory, skipping CMS routes.', e);
  }

  // Pre-render each route
  const routesToRender = [...new Set(routesToPrerender)]; // Deduplicate routes
  
  for (const url of routesToRender) {
    try {
      const { html: appHtml, helmet } = await render(url);

      let finalHtml = template;
      
      // Inject app content
      finalHtml = finalHtml.replace('<!--app-html-->', appHtml);

      // Remove default metadata to avoid duplicates with Helmet
      finalHtml = finalHtml.replace(/<title>.*?<\/title>/, '');
      finalHtml = finalHtml.replace(/<meta name="title" content=".*?" \/>/, '');
      finalHtml = finalHtml.replace(/<meta name="description" content=".*?" \/>/, '');
      finalHtml = finalHtml.replace(/<meta property="og:.*?" content=".*?" \/>/g, '');
      finalHtml = finalHtml.replace(/<meta name="twitter:.*?" content=".*?" \/>/g, '');
      finalHtml = finalHtml.replace(/<link rel="canonical" href=".*?" \/>/, '');
      finalHtml = finalHtml.replace(/<link rel="alternate" hreflang=".*?" href=".*?" \/>/g, '');

      // Inject Helmet HEAD tags
      const headContent = `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      `;
      
      finalHtml = finalHtml.replace('</head>', `${headContent}</head>`);
      
      // Update HTML lang attribute
      if (helmet.htmlAttributes) {
        // Try replacing both de and en defaults just in case
        finalHtml = finalHtml.replace('<html lang="de">', `<html ${helmet.htmlAttributes.toString()}>`);
        finalHtml = finalHtml.replace('<html lang="en">', `<html ${helmet.htmlAttributes.toString()}>`);
      }

      const filePath = `dist/static${url === '/' ? '/index' : url}/index.html`;
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(toAbsolute(filePath), finalHtml);
      console.log('Pre-rendered:', url);
    } catch (e) {
      console.error(`Error prerendering ${url}:`, e);
    }
  }
  
  // Also copy dist/static/index.html to dist/static/404.html for SPA fallback
  fs.copyFileSync(toAbsolute('dist/static/index.html'), toAbsolute('dist/static/404.html'));
}

prerender();
