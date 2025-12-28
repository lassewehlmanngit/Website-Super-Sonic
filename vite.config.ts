import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { deferCSS } from './vite-plugin-defer-css';

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
      plugins: [react(), tailwindcss(), deferCSS()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
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
            manualChunks: (id) => {
              // Only process node_modules
              if (!id.includes('node_modules')) {
                return;
              }
              
              // Separate react-pdf into its own chunk (heavy library, only loaded on demand)
              if (id.includes('@react-pdf/renderer') || id.includes('react-pdf')) {
                return 'pdf-vendor';
              }
              
              // Core React libraries - keep together to avoid initialization issues
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'react-vendor';
              }
              
              // UI library
              if (id.includes('lucide-react')) {
                return 'ui-vendor';
              }
              
              // Don't split @keystatic - it's only used in lazy-loaded admin route
              // Splitting it causes circular dependency issues
              // It will be included in the KeystaticAdmin route chunk automatically
              if (id.includes('@keystatic')) {
                return; // Keep with route chunk
              }
              
              // AI library
              if (id.includes('@google/genai')) {
                return 'genai';
              }
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
