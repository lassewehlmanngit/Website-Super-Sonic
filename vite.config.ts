import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { deferCSS } from './vite-plugin-defer-css';
import { resourceHints } from './vite-plugin-resource-hints';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      root: '.',
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          '/api/keystatic': {
            target: 'http://localhost:3001',
            changeOrigin: true,
            secure: false,
          },
        },
      },
      plugins: [react(), tailwindcss(), deferCSS(), resourceHints()],
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
                  id.includes('@keystatic')) {
                return; // undefined = bundle with importing module
              }
              
              // Safe to split - these don't have circular dependencies
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'react-vendor';
              }
              
              if (id.includes('lucide-react')) {
                return 'ui-vendor';
              }
              
              if (id.includes('@google/genai')) {
                return 'genai';
              }
              
              // For all other node_modules, return undefined to prevent auto-splitting
              // This ensures problematic libraries stay with their consumers
              return;
            },
            // Optimize chunk file names
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          },
        },
        // Increase chunk size warning limit
        chunkSizeWarningLimit: 1000,
        // Enable source maps for debugging (disable in production for better performance)
        sourcemap: mode === 'development',
        // Optimize CSS
        cssCodeSplit: true,
        cssMinify: true,
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
      },
    };
});
