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

  // Pre-render each route
  for (const url of routesToPrerender) {
    try {
      const appHtml = await render(url);

      const html = template.replace(
        '<!--app-html-->',
        appHtml
      );

      const filePath = `dist/static${url === '/' ? '/index' : url}/index.html`;
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(toAbsolute(filePath), html);
      console.log('Pre-rendered:', url);
    } catch (e) {
      console.error(`Error prerendering ${url}:`, e);
    }
  }
  
  // Also copy dist/static/index.html to dist/static/404.html for SPA fallback
  fs.copyFileSync(toAbsolute('dist/static/index.html'), toAbsolute('dist/static/404.html'));
}

prerender();
