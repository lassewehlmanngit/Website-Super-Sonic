import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { deferCSS } from './vite-plugin-defer-css';
import { resourceHints } from './vite-plugin-resource-hints';

/**
 * Vite plugin to serve the content directory for TinaCMS
 * This allows fetching /content/pages/*.json during development
 */
function serveContentPlugin(): Plugin {
  return {
    name: 'serve-content',
    configureServer(server) {
      server.middlewares.use('/content', (req, res, next) => {
        const filePath = path.join(process.cwd(), 'content', req.url || '');
        
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const content = fs.readFileSync(filePath, 'utf-8');
          res.setHeader('Content-Type', 'application/json');
          res.end(content);
        } else {
          next();
        }
      });
    }
  };
}

export default defineConfig(({ mode, isSsrBuild }) => {
    const env = loadEnv(mode, '.', '');
    return {
      root: '.',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(), 
        tailwindcss(), 
        // Only run HTML transformation plugins for client build
        !isSsrBuild && deferCSS(), 
        !isSsrBuild && resourceHints(), 
        serveContentPlugin()
      ].filter(Boolean),
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        },
        // Prevent automatic chunk splitting for react-pdf browser builds
        conditions: ['import', 'module', 'browser', 'default'],
      },
      build: {
        // Enable minification
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.log in production
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug'], // Remove specific console functions
            passes: 2, // Multiple passes for better compression
            unsafe: true, // Enable unsafe optimizations
            unsafe_comps: true, // Optimize comparisons
            unsafe_math: true, // Optimize math expressions
            unsafe_methods: true, // Optimize method calls
            dead_code: true, // Remove dead code
            unused: true, // Remove unused code
          },
          mangle: {
            safari10: true, // Fix Safari 10 issues
          },
          format: {
            comments: false, // Remove comments
          },
        },
        // Optimize chunk splitting
        rollupOptions: {
          output: {
            // Disable automatic chunk splitting to prevent circular dependency issues
            // Large dependencies like react-pdf and @keystatic will be bundled with their components
            manualChunks: (id) => {
              // Only process node_modules for vendor chunks
              if (!id.includes('node_modules')) {
                return; // App code stays with routes/components
              }
              
            // CRITICAL: Never split these - they cause circular dependency errors
            // They will be bundled with the components/routes that dynamically import them
            if (id.includes('@react-pdf/renderer') || 
                id.includes('react-pdf') || 
                id.includes('@react-pdf') ||
                id.includes('tinacms')) {
              return; // undefined = bundle with importing module
            }
              
              // Safe to split - these don't have circular dependencies
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'react-vendor';
              }
              
              if (id.includes('lucide-react')) {
                return 'ui-vendor';
              }
              
              // For all other node_modules, return undefined to prevent auto-splitting
              // This ensures problematic libraries stay with their consumers
              return;
            },
            // Optimize chunk file names
            chunkFileNames: isSsrBuild ? '[name].js' : 'assets/js/[name]-[hash].js',
            entryFileNames: isSsrBuild ? '[name].js' : 'assets/js/[name]-[hash].js',
            assetFileNames: isSsrBuild ? '[name].[ext]' : 'assets/[ext]/[name]-[hash].[ext]',
          },
        },
        // Increase chunk size warning limit
        chunkSizeWarningLimit: 1000,
        // Enable source maps for debugging (disable in production for better performance)
        sourcemap: mode === 'development',
        // Optimize CSS
        cssCodeSplit: true,
        cssMinify: true,
        // Enable tree-shaking
        treeshake: {
          moduleSideEffects: false, // Assume no side effects for better tree-shaking
          preset: 'smallest', // Most aggressive tree-shaking
        },
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
        // Exclude heavy dependencies that are already lazy-loaded
        exclude: ['@react-pdf/renderer', 'tinacms'],
      },
    };
});
