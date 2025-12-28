# Ultimate Website Performance Optimization Guide
## Learnings from Super Sonic Prototypes

This guide details a comprehensive strategy for optimizing modern React applications, based on real-world analysis of the Super Sonic Prototypes codebase. It covers architectural decisions, runtime optimizations, and build configurations to achieve 90+ PageSpeed Insight scores.

---

## 1. Architecture: The "Bundle vs. CDN" Dilemma

### The Problem: External CDNs (Import Maps)
Many developers use `importmap` to load React or other libraries from CDNs (like `esm.sh` or `unpkg`) thinking it caches better. In reality, this often hurts performance for three reasons:
1.  **Waterfall Requests**: The browser must download the HTML, parse the import map, resolve the URL, *then* make a network connection to the CDN.
2.  **Connection Overhead**: Each new domain requires a DNS lookup, TCP handshake, and TLS negotiation.
3.  **No Tree-Shaking**: CDNs often serve the *entire* library, whereas a bundler removes unused code.

### The Solution: Local Bundling
Use a bundler like **Vite** to package dependencies locally.
*   **Why**: A single domain connection allows HTTP/2 multiplexing (downloading multiple files over one connection).
*   **Result**: Removes render-blocking network delays.

**Code Example (Vite Config):**
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Group core vendors into one cached file
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
});
```

---

## 2. Load Time: Code Splitting & Lazy Loading

### The Problem: The "Monolith" Bundle
By default, React imports every page component at the top of `App.tsx`. This means a user visiting the "Home" page also downloads the code for "About", "Contact", and "Admin" pages—megabytes of unused JavaScript.

### The Solution: Route-Based Splitting
Use `React.lazy` and `Suspense` to only load the code needed for the current URL.

**Implementation:**
```tsx
// src/App.tsx
import React, { Suspense, lazy } from 'react';

// BAD: Imports everything immediately
// import About from './pages/About';

// GOOD: Imports only when requested
const About = lazy(() => import('./pages/About'));
const Work = lazy(() => import('./pages/Work'));

const App = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  </Suspense>
);
```

### Advanced: Lazy Loading Heavy Libraries
If a modal (e.g., PDF generation) is rarely used, do not import its libraries at the top level.

```tsx
// Inside component
const handleDownload = async () => {
  // Dynamically import heavy library on click
  const { pdf } = await import('@react-pdf/renderer');
  await pdf(<MyDocument />).toBlob();
};
```

---

## 3. Runtime: Scroll & Animation Performance

### The Problem: The Main Thread Blocker
Attaching heavy logic to the `scroll` event kills mobile performance. High-refresh displays (120Hz) fire the scroll event 120 times per second. If your logic takes >8ms, the scroll stutters.

### The Solution: Passive Listeners & Throttling
1.  **Passive Listeners**: Tell the browser "I won't prevent the scroll," allowing the scrolling thread to run independently.
2.  **requestAnimationFrame**: Sync updates with the screen's refresh rate.

**Optimized Scroll Hook:**
```tsx
// Inside your Navigation component
useEffect(() => {
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Do your heavy logic here (e.g., checking scroll position)
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  };

  // { passive: true } is crucial for mobile performance
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

---

## 4. Rendering: CSS Containment for Complex UI

### The Problem: "Snow & Village" Effect
Decorative elements (like hundreds of snowflakes or complex SVG landscapes) at the bottom of the page can cause the browser to calculate layout for the *entire* page on initial load, delaying the "Largest Contentful Paint" (LCP).

### The Solution: `content-visibility: auto`
This CSS property tells the browser: "Don't calculate layout or paint this element until it approaches the viewport."

**Implementation:**
```tsx
// src/components/seasonal/WinterVillage.tsx
export const WinterVillage = () => (
  <div 
    className="..."
    style={{ 
      // Skips rendering work when off-screen
      contentVisibility: 'auto', 
      // Placeholder size to prevent scrollbar jumping
      containIntrinsicSize: '300px' 
    }}
  >
    {/* Complex children */}
  </div>
);
```

---

## 5. Assets: Font Loading Strategy

### The Problem: Invisible Text (FOIT)
Browsers often hide text until the custom font file is fully downloaded. This hurts the "First Contentful Paint" (FCP) and User Experience.

### The Solution: Preconnect & Swap
1.  **Preconnect**: Establish a handshake with the font server immediately.
2.  **Display Swap**: Show fallback system fonts immediately, then swap when the custom font loads.

**Optimized HTML Header:**
```html
<!-- 1. Handshake with Google Fonts server early -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- 2. Preload the specific font file (optional, for critical fonts) -->
<link rel="preload" as="font" href="..." crossorigin />

<!-- 3. Use 'display=swap' to show text immediately -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
```

---

## 6. Build: Minification & Source Maps

### The Checklist
In `vite.config.ts` (or Webpack config), ensure:

1.  **Minification**: Use `terser` or `esbuild` to strip whitespace and rename variables.
2.  **Drop Console**: Remove `console.log` in production to save bytes.
3.  **Disable Source Maps**: Do not ship `.map` files to production (saves bandwidth and hides source code).

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    sourcemap: false, // Disable in production
  }
});
```

---

## 7. Images & Layout Stability (CLS)

### The Problem: Janky Layouts
Images without dimensions cause the page layout to "jump" when they load, leading to a poor Cumulative Layout Shift (CLS) score. Large PNG/JPGs also slow down LCP.

### The Solution: Explicit Sizing & WebP
1.  **Explicit Dimensions**: Always set `width` and `height` attributes (or aspect-ratio CSS) so the browser reserves space.
2.  **Modern Formats**: Convert images to WebP or AVIF which are 30-50% smaller.

**Example:**
```tsx
// BAD
<img src="/hero.png" alt="Hero" />

// GOOD
<picture>
  <source srcSet="/hero.webp" type="image/webp" />
  <img 
    src="/hero.png" 
    alt="Hero" 
    width="800" 
    height="600" 
    style={{ aspectRatio: '4/3' }} 
    loading="eager" // "lazy" for below-fold images
  />
</picture>
```

---

## 8. React Performance: Memoization

### The Problem: Wasted Re-renders
Interactive components (calculators, complex forms) often re-render their children unnecessarily on every keystroke.

### The Solution: `React.memo` & `useMemo`
1.  **React.memo**: Wrap purely presentational components so they only re-render when props change.
2.  **useMemo**: Cache expensive calculations (sorting list, math).

```tsx
// Prevents re-calculation unless 'items' changes
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.price - b.price);
}, [items]);

// Prevents re-rendering child unless 'value' changes
const Child = React.memo(({ value }) => <div>{value}</div>);
```

---

## 9. Mobile Performance: Critical Path Optimization

### The Problem: Mobile Network Constraints
Mobile devices face unique challenges:
1.  **Slow Networks**: 3G/4G throttling means even small delays compound (5.7s FCP on mobile vs. fast desktop).
2.  **Limited CPU**: Mobile processors are slower, making JavaScript execution a bottleneck.
3.  **Battery Constraints**: Heavy JavaScript drains battery faster.

### The Solution: Mobile-First Optimizations

#### A. Loading Skeleton (Immediate Visual Feedback)
Show *something* immediately, even before React hydrates. This prevents the "blank white screen" that kills perceived performance.

**Implementation:**
```html
<!-- index.html -->
<body>
  <div id="root">
    <!-- Loading skeleton - React replaces this on mount -->
    <div class="loading-spinner" aria-label="Loading"></div>
  </div>
  <style>
    #root {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #F3F3F3;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .loading-spinner {
      width: 48px;
      height: 48px;
      border: 3px solid #FF4D00;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
  </style>
  <script type="module" src="/src/index.tsx"></script>
</body>
```

#### B. Lazy Load Layout Components
Navigation, Footer, and MobileNav are often loaded eagerly but aren't critical for initial render. Lazy load them.

```tsx
// src/App.tsx
// BAD: Eager loading
import { Navigation } from './components/layout/Navigation';

// GOOD: Lazy loading
const Navigation = lazy(() => 
  import('./components/layout/Navigation').then(m => ({ default: m.Navigation }))
);

// In Layout component
<Suspense fallback={null}>
  <Navigation />
  <MobileNav />
</Suspense>
```

#### C. Critical CSS Inlining
Inline the absolute minimum CSS needed for above-the-fold content. This prevents render-blocking.

**What to Inline:**
*   Body/root background colors
*   Navigation positioning
*   Hero section basics
*   Loading spinner styles

**What NOT to Inline:**
*   Scrollbar styles
*   Below-the-fold animations
*   Complex component styles

```html
<style>
  /* Critical CSS - Inlined for immediate rendering */
  body {
    background-color: #F3F3F3;
    color: #050505;
    margin: 0;
    font-family: 'Inter', system-ui, sans-serif;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
  }
  /* ... other critical styles ... */
</style>
```

#### D. Resource Hints for Mobile
On mobile, every millisecond counts. Use resource hints to start downloading critical assets earlier.

```html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Preload critical fonts -->
<link rel="preload" href="..." as="font" type="font/woff2" crossorigin />

<!-- Modulepreload for JS (Vite injects these automatically in production) -->
<!-- For manual control, use vite-plugin-html -->
```

**Note:** Vite automatically injects `<link rel="modulepreload">` hints for entry chunks in production builds. For manual control, use `vite-plugin-html` or build hooks.

#### E. Mobile Network Considerations
*   **Target Bundle Size**: Aim for <200KB initial bundle (gzipped) on mobile.
*   **Chunk Strategy**: Smaller chunks (20-30KB) load faster on 3G/4G than one large file.
*   **Progressive Enhancement**: Core functionality should work even if JavaScript fails to load.

---

## Summary Checklist

| Area | Action | Impact |
| :--- | :--- | :--- |
| **Network** | Remove `importmap` / CDN links | High (TBT / FCP) |
| **JS Bundle** | Implement `React.lazy` for routes | High (Load Time) |
| **Logic** | Dynamic import for heavy features (PDF) | High (Initial Bundle) |
| **Runtime** | Use `{ passive: true }` on scroll | Medium (Mobile smoothness) |
| **Rendering** | Add `content-visibility: auto` to footer | Medium (Initial Paint) |
| **Fonts** | Add `display=swap` & `preconnect` | Low (Perceived Speed) |
| **Images** | Use WebP & Explicit Width/Height | High (CLS / LCP) |
| **State** | Memoize heavy computations | Medium (Interaction Speed) |
| **Mobile** | Loading skeleton + Lazy layout | High (Mobile FCP/LCP) |
| **Mobile** | Critical CSS inlining | High (Mobile FCP) |
| **Mobile** | Resource hints & preload | Medium (Mobile Load Time) |

Apply these techniques to turn a score of **56** into **95+** (desktop) and **75+** (mobile).
