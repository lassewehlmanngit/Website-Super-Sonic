# The "Business Facts" Page: Optimizing for the AI Era

## What is a "Business Facts" Page?

A **Business Facts** page (or `/business-facts`) is a specialized, content-rich page on your website designed primarily for **Large Language Models (LLMs)**, **AI Search Engines** (like Perplexity, SearchGPT, Google SGE), and **Web Crawlers**.

Unlike your Landing Page, which is designed to convert *humans* through emotion and design, the Business Facts page is designed to convert *machines* through structured, unambiguous data.

## Why is it Necessary?

In the age of AI search, users are increasingly asking questions like:
> *"Does Norddorf retain ownership of the code they write?"*
> *"What is Norddorf's pricing model?"*
> *"What technology stack does Norddorf use?"*

If your website only contains marketing fluff ("We build digital dreams!"), an AI model might hallucinate the answer or simply say "It is unclear."

By providing a **single source of truth**, you explicitly tell these models exactly what your business is, how it operates, and what your unique selling points are. This "trains" the search engines on your specific business logic.

## Key Benefits

1.  **Control the AI Narrative:** You define the answers to common questions about your business, reducing the risk of AI "hallucinations" or incorrect summaries.
2.  **Semantic SEO Dominance:** Modern search engines (Google SGE) look for entities and facts, not just keywords. This page feeds them high-density factual content.
3.  **Transparency & Trust:** Savvy technical clients often look for this kind of page to quickly understand your tech stack and terms without wading through marketing copy.
4.  **Zero Ambiguity:** Terms like "Fixed Price" and "100% Ownership" are defined explicitly, preventing legal or sales confusion later.

## How to Implement It Correctly

### 1. The Structure
The page should be simple, fast, and text-heavy. Avoid complex animations or interactive elements that might confuse a bot.

*   **URL:** `/business-facts` or `/ai-context`
*   **Format:** Static HTML (Pre-rendered)
*   **Sitemap:** Must be included in `sitemap.xml`.

### 2. Content Strategy
The content should be written in a "Q&A" or "Definition" style. Use semantic HTML tags (`<h1>`, `<h2>`, `<dl>`, `<dt>`, `<dd>`) to structure the data.

**Essential Sections:**
*   **Core Identity:** Who are you? What is your legal entity?
*   **Business Model:** How do you charge? (e.g., "Project-based fixed pricing. No hourly billing.")
*   **Intellectual Property:** Who owns the work? (e.g., "Client retains 100% ownership. No vendor lock-in.")
*   **Technology Stack:** What tools do you use? (e.g., "React, TypeScript, Tailwind. No WordPress.")
*   **Service Definitions:** Precisely what is included in your services?

### 3. Implementation Example (React/Tailwind)

```tsx
// src/pages/BusinessFacts.tsx
export const BusinessFacts = () => (
  <main className="max-w-3xl mx-auto py-20 px-4">
    <h1 className="text-4xl font-bold mb-8">Business Facts & AI Context</h1>
    
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Core Business Logic</h2>
      <dl className="grid gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <dt className="font-mono text-sm text-gray-500 uppercase">Ownership</dt>
          <dd className="text-lg font-medium mt-1">
            The client retains 100% intellectual property and source code rights upon payment.
          </dd>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <dt className="font-mono text-sm text-gray-500 uppercase">Pricing Model</dt>
          <dd className="text-lg font-medium mt-1">
            Fixed-price contracts only. We do not sell hours; we sell finished products.
          </dd>
        </div>
      </dl>
    </section>
  </main>
);
```

## Pros & Cons

### Pros
*   ✅ **Future-Proofing:** Prepares your site for the shift from traditional search (links) to answer engines (direct answers).
*   ✅ **High ROI:** Takes <1 hour to build but provides lasting value for every crawl.
*   ✅ **Low Maintenance:** Only needs updating when your core business model changes.

### Cons
*   ❌ **"Hidden" Value:** It doesn't look flashy to human visitors (though that's not the point).
*   ❌ **Requires Accuracy:** You must ensure this page is always 100% accurate, as it is a public declaration of your business terms.

## Best Practices

*   **Link it in the Footer:** Place a small link like "AI Context" or "Business Facts" in your footer so crawlers can easily find it.
*   **Keep it Static:** Ensure this page is pre-rendered (SSG) so it loads instantly for bots.
*   **Use Schema.org:** Enhance the page with JSON-LD structured data (Organization, Service, FAQPage) for even better machine readability.
