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
        // Pattern: <link rel="stylesheet" href="..." ...>
        html = html.replace(
          /<link\s+rel="stylesheet"\s+([^>]*href="([^"]+\.css[^"]*)"[^>]*)>/gi,
          (match, attrs, href) => {
            // Skip if it's already a preload or if it's a font stylesheet
            if (match.includes('preload') || match.includes('fonts.googleapis.com') || match.includes('onload')) {
              return match;
            }
            // Convert to preload with onload - add polyfill script if not present
            const deferredCSS = `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
            
            // Add loadCSS polyfill if not already present (for older browsers)
            if (!html.includes('loadCSS')) {
              const polyfill = `<script>!function(e){"use strict";var t=function(t,n,r){var o,i=e.document,a=i.createElement("link");if(n)o=n;else{var l=(i.body||i.getElementsByTagName("head")[0]).childNodes;o=l[l.length-1]}var d=i.styleSheets;a.rel="stylesheet",a.href=t,a.media="only x",function e(t){if(i.body)return t();setTimeout(function(){e(t)})}(function(){o.parentNode.insertBefore(a,n?o:o.nextSibling)});var f=function(e){for(var t=a.href,d=i.styleSheets;d.length&&d[d.length-1].href!==t;);a.media!==r&&(a.media=r||"all")};return a.addEventListener&&a.addEventListener("load",f),a.onloadcssdefined=f,f(),a};"undefined"!=typeof exports?exports.loadCSS=t:e.loadCSS=t}("undefined"!=typeof global?global:this);</script>`;
              html = html.replace('</head>', polyfill + '</head>');
            }
            
            return deferredCSS;
          }
        );
        
        writeFileSync(htmlPath, html, 'utf-8');
      } catch (error) {
        console.warn('Could not defer CSS:', error);
      }
    },
  };
}

