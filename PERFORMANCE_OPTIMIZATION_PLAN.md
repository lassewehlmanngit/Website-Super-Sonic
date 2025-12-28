# Mobile Performance Optimization Plan
## Target: 63 → 90+ (PageSpeed Insights)

### Current Performance Issues

**Metrics (Mobile):**
- Performance Score: **63** (Target: 90+)
- First Contentful Paint (FCP): **5.9s** (Target: <1.8s) ❌
- Largest Contentful Paint (LCP): **5.9s** (Target: <2.5s) ❌
- Speed Index: **6.5s** (Target: <3.4s) ❌
- Total Blocking Time (TBT): **70ms** ✅ (Good)
- Cumulative Layout Shift (CLS): **0** ✅ (Good)

**Critical Issues Identified:**
1. **Render-blocking CSS**: 160ms savings potential
2. **Large JavaScript bundle**: 72KB (`index-apKMny4w.js`) with 1,062ms critical path latency
3. **Network dependency chain**: Maximum critical path latency of 1,062ms
4. **No resource preloading**: Missing preload hints for critical resources

---

## Optimization Strategy

### Priority 1: Critical Path Optimization (Expected: +15-20 points)

#### 1.1 Defer Non-Critical CSS
**Problem:** CSS file (12KB) is blocking render
**Solution:**
- Extract critical CSS (above-the-fold) and inline it
- Defer remaining CSS with `media="print" onload="this.media='all'"`
- Use `preload` for critical CSS chunks

**Implementation:**
```html
<!-- Inline critical CSS in <head> -->
<style>
  /* Critical above-the-fold styles */
</style>

<!-- Defer non-critical CSS -->
<link rel="preload" href="/assets/css/index-[hash].css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/assets/css/index-[hash].css"></noscript>
```

#### 1.2 Optimize JavaScript Bundle Size
**Problem:** 72KB main bundle blocking render
**Solution:**
- Improve code splitting strategy
- Lazy load heavy components (PDF generators, calculators)
- Use dynamic imports for route-specific code
- Consider using `@vitejs/plugin-legacy` for modern-only builds

**Expected Impact:** Reduce main bundle from 72KB to ~40-50KB

#### 1.3 Add Resource Hints
**Problem:** Browser doesn't know about critical resources early
**Solution:**
- Add `preconnect` for external domains (already done for fonts)
- Add `dns-prefetch` for third-party resources
- Add `preload` for critical JS chunks
- Add `modulepreload` for ES modules

**Implementation:**
```html
<!-- Preconnect to own domain -->
<link rel="preconnect" href="https://super-sonic-prototypes.onrender.com" crossorigin>

<!-- Preload critical JS -->
<link rel="modulepreload" href="/assets/js/index-[hash].js">
<link rel="modulepreload" href="/assets/js/react-vendor-[hash].js">
```

---

### Priority 2: Font Loading Optimization (Expected: +5-8 points)

#### 2.1 Optimize Google Fonts Loading
**Current:** Fonts load with `media="print" onload` (good, but can improve)
**Solution:**
- Use `font-display: swap` in font CSS
- Preload font files directly (woff2)
- Use `font-display: optional` for non-critical fonts
- Consider self-hosting fonts for better control

**Implementation:**
```html
<!-- Preload critical font files -->
<link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/...woff2" as="font" type="font/woff2" crossorigin>

<!-- Load font CSS with display=swap -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" media="print" onload="this.media='all'">
```

---

### Priority 3: Code Splitting Improvements (Expected: +8-12 points)

#### 3.1 Lazy Load Heavy Components
**Components to lazy load:**
- PDF generators (`react-pdf`)
- Calculators (TCO, SAM)
- Heavy visual components (ChristmasBalls, WinterVillage - already done)
- Keystatic admin (already done)

**Implementation:**
```typescript
// Example: Lazy load PDF components
const ModernWebLawsPDF = lazy(() => 
  import('./components/pdf/ModernWebLawsPDF').then(m => ({ default: m.ModernWebLawsPDF }))
);
```

#### 3.2 Improve Vite Chunk Strategy
**Current:** Manual chunks are good, but can be optimized
**Solution:**
- Split by route more aggressively
- Separate heavy libraries (react-pdf, @google/genai)
- Use dynamic imports for conditional features

**Updated vite.config.ts:**
```typescript
manualChunks: {
  'react-vendor': ['react', 'react-dom', 'react-router-dom'],
  'ui-vendor': ['lucide-react'],
  'pdf-vendor': ['react-pdf', '@react-pdf/renderer'], // Separate PDF
  'genai': ['@google/genai'], // Already separate
  'cms-vendor': ['@keystatic/core'],
}
```

---

### Priority 4: Build Optimizations (Expected: +3-5 points)

#### 4.1 Enable Compression
**Solution:**
- Ensure server has Brotli/Gzip compression enabled
- Vite already minifies, but verify terser settings

#### 4.2 Optimize Asset Loading
**Solution:**
- Add `loading="lazy"` to images below the fold
- Use modern image formats (WebP with fallback)
- Implement responsive images with `srcset`

#### 4.3 Remove Source Maps in Production
**Current:** `sourcemap: mode === 'development'` ✅ (Already correct)

---

### Priority 5: Runtime Optimizations (Expected: +2-4 points)

#### 5.1 Implement Service Worker (Optional)
**Solution:**
- Cache static assets
- Cache API responses
- Offline fallback

#### 5.2 Optimize React Rendering
**Solution:**
- Use `React.memo` for expensive components
- Implement virtual scrolling for long lists
- Defer non-critical component rendering

---

## Implementation Checklist

### Immediate Actions (High Impact, Low Effort)
- [ ] Add `preconnect` for own domain
- [ ] Add `modulepreload` for critical JS chunks
- [ ] Extract and inline critical CSS
- [ ] Defer non-critical CSS loading
- [ ] Optimize font loading with `font-display: swap`
- [ ] Lazy load PDF components
- [ ] Lazy load calculator components

### Medium-Term Actions (High Impact, Medium Effort)
- [ ] Improve Vite chunk splitting strategy
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Implement responsive images
- [ ] Optimize bundle size (tree-shaking unused code)

### Long-Term Actions (Medium Impact, High Effort)
- [ ] Self-host fonts
- [ ] Implement service worker
- [ ] Consider SSR/SSG for initial page load
- [ ] Implement resource hints dynamically based on route

---

## Expected Results

After implementing Priority 1-3 optimizations:
- **FCP**: 5.9s → **~1.5s** (74% improvement)
- **LCP**: 5.9s → **~2.0s** (66% improvement)
- **Speed Index**: 6.5s → **~2.8s** (57% improvement)
- **Performance Score**: 63 → **85-92** (target achieved)

---

## Testing Strategy

1. **Before/After Comparison:**
   - Run PageSpeed Insights before changes
   - Implement optimizations incrementally
   - Test after each major change
   - Document improvements

2. **Real-World Testing:**
   - Test on actual mobile devices
   - Test on slow 3G connection
   - Monitor Core Web Vitals in production

3. **Continuous Monitoring:**
   - Set up Lighthouse CI
   - Monitor performance budgets
   - Alert on performance regressions

