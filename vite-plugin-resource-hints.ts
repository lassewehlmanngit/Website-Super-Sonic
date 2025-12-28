import type { Plugin } from 'vite';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Vite plugin to add resource hints (modulepreload) for critical JS chunks
 * This helps the browser start downloading critical resources earlier
 */
export function resourceHints(): Plugin {
  return {
    name: 'resource-hints',
    apply: 'build',
    enforce: 'post',
    writeBundle(options, bundle) {
      const htmlPath = join(options.dir || 'dist', 'index.html');
      try {
        let html = readFileSync(htmlPath, 'utf-8');
        
        // Find all JS module chunks in the bundle
        const jsChunks: string[] = [];
        Object.keys(bundle).forEach(key => {
          const chunk = bundle[key];
          if (chunk.type === 'chunk' && chunk.isEntry) {
            // Entry chunks are critical
            const fileName = chunk.fileName;
            if (fileName.endsWith('.js')) {
              jsChunks.push(fileName);
            }
          }
        });
        
        // Also find react-vendor chunk (critical for initial render)
        Object.keys(bundle).forEach(key => {
          const chunk = bundle[key];
          if (chunk.type === 'chunk' && chunk.fileName.includes('react-vendor')) {
            jsChunks.push(chunk.fileName);
          }
        });
        
        // Add modulepreload hints before </head>
        if (jsChunks.length > 0) {
          // Filter out chunks that already have modulepreload hints
          const existingHints = html.match(/<link\s+rel="modulepreload"[^>]+href="([^"]+)"[^>]*>/g) || [];
          const existingFiles = existingHints.map(hint => {
            const match = hint.match(/href="([^"]+)"/);
            return match ? match[1].replace(/^\//, '') : '';
          });
          
          const newHints = jsChunks
            .filter(fileName => !existingFiles.includes(fileName))
            .map(fileName => `    <link rel="modulepreload" crossorigin href="/${fileName}" />`)
            .join('\n');
          
          // Insert before </head> if there are new hints to add
          if (newHints) {
            html = html.replace('</head>', newHints + '\n  </head>');
          }
        }
        
        writeFileSync(htmlPath, html, 'utf-8');
      } catch (error) {
        console.warn('Could not add resource hints:', error);
      }
    },
  };
}

