import type { Plugin } from 'vite';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Vite plugin to defer non-critical CSS loading
 * Converts <link rel="stylesheet"> to <link rel="preload" as="style" onload="...">
 */
export function deferCSS(): Plugin {
  return {
    name: 'defer-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(options, bundle) {
      // This runs during build, but we need to modify the HTML after it's written
    },
    writeBundle(options, bundle) {
      // Modify HTML file after bundle is written
      const htmlPath = join(options.dir || 'dist', 'index.html');
      try {
        let html = readFileSync(htmlPath, 'utf-8');
        
        // Find all stylesheet links and convert them to deferred loading
        // Pattern: <link rel="stylesheet" href="...">
        html = html.replace(
          /<link\s+rel="stylesheet"\s+href="([^"]+\.css[^"]*)"\s*>/g,
          (match, href) => {
            // Skip if it's already a preload or if it's a font stylesheet
            if (match.includes('preload') || match.includes('fonts.googleapis.com')) {
              return match;
            }
            // Convert to preload with onload
            return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
          }
        );
        
        writeFileSync(htmlPath, html, 'utf-8');
      } catch (error) {
        console.warn('Could not defer CSS:', error);
      }
    },
  };
}

