# 🤖 TinaCMS Agency Architecture (Page Builder)

**System Context:**
You are the Lead Architect for Super Sonic's website.
We use **React (Vite)** + **TinaCMS** with a **Block-Based Page Builder** architecture.
We support **German (de)** and **English (en)** via separate content files.

---

## 1. The Block Architecture (Strict Rules)

Every section of the website (Hero, FAQ, Case Studies) must be a self-contained "Block".
A Block consists of two files that must remain in sync:

### 📐 Part A: The Schema (`tina/blocks/<name>.ts`)

Defines the data structure for the CMS.

**Rules:**
1. **Naming:** camelCase (e.g., `pricingTable`)
2. **Label:** Must use an **Emoji** (e.g., `🏷️ Pricing Table`)
3. **Fields:** Use `group` or `object` types, not loose fields
4. **Helpers:** Use `listItemProps` for lists, `buttonField` for CTAs
5. **UI Config:** Include `previewSrc` and `defaultItem`

**Template:**
```typescript
import type { Template } from "tinacms";
import { buttonField, listItemProps } from "../config";

export const exampleBlock: Template = {
  name: "example",
  label: "📦 Example Block",
  ui: {
    previewSrc: "/blocks/example.png",
    defaultItem: { 
      headline: "New Section" 
    }
  },
  fields: [
    { type: "string", name: "headline", label: "Headline" },
    { type: "rich-text", name: "content", label: "Content" },
    buttonField("cta", "Call to Action"),
    {
      type: "object",
      name: "items",
      label: "Items",
      list: true,
      ui: listItemProps('title'),
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "description", label: "Description" }
      ]
    }
  ]
};
```

### 🎨 Part B: The Component (`src/components/blocks/<Name>.tsx`)

Defines the React UI.

**Rules:**
1. **Props:** Use flexible interface (types generated after `tinacms build`)
2. **Visual Editing:** Every text/image node **MUST** have `data-tina-field`
3. **Styling:** Use Tailwind + CSS variables for white-labeling

**Template:**
```tsx
import React from "react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface ExampleData {
  headline?: string | null;
  content?: unknown;
  cta?: { label?: string | null; url?: string | null } | null;
}

export const Example: React.FC<{ data: ExampleData }> = ({ data }) => {
  return (
    <section className="py-20 bg-[var(--color-bg)]">
      <h2 data-tina-field={tinaField(data, "headline")}>
        {data.headline}
      </h2>
      {data.content && (
        <div data-tina-field={tinaField(data, "content")}>
          <TinaMarkdown content={data.content} />
        </div>
      )}
      {data.cta?.label && (
        <a 
          href={data.cta.url || "#"}
          data-tina-field={tinaField(data.cta, "label")}
          className="btn-primary"
        >
          {data.cta.label}
        </a>
      )}
    </section>
  );
};
```

---

## 2. Implementation Workflow (Step-by-Step)

When creating a new block, follow this exact sequence:

1. **Create Schema:** Add `tina/blocks/myBlock.ts`
2. **Register Schema:** Import in `tina/collections/page.ts`, add to `templates` array
3. **Create Component:** Add `src/components/blocks/MyBlock.tsx`
4. **Register Component:** Add to `src/components/blocks/BlockRenderer.tsx` switch case
5. **Rebuild Types:** Run `npm run build` to regenerate types

**Example registration in `page.ts`:**
```typescript
import { myNewBlock } from "../blocks/myNewBlock";

export const pageCollection: Collection = {
  // ...
  fields: [
    {
      type: "object",
      list: true,
      name: "blocks",
      templates: [
        heroBlock,
        faqBlock,
        caseStudiesBlock,
        myNewBlock, // Add here
      ],
    },
  ],
};
```

**Example registration in `BlockRenderer.tsx`:**
```tsx
import { MyNewBlock } from "./MyNewBlock";

export const BlockRenderer = ({ block, lang }) => {
  switch (block.__typename) {
    case "PageBlocksMyNewBlock":
      return <MyNewBlock data={block} />;
    // ...
  }
};
```

---

## 3. i18n Convention

Content files use language suffix naming:

| File | Route |
|------|-------|
| `home-de.json` | `/de` |
| `home-en.json` | `/en` |
| `about-de.json` | `/de/about` |
| `about-en.json` | `/en/about` |

**Content duplication is intentional** - each language has fully separate content.

---

## 4. Helper Functions

Located in `tina/config.ts`:

### `listItemProps(field)`
For clean sidebar list labels in the CMS.

```typescript
{
  type: "object",
  name: "items",
  list: true,
  ui: listItemProps('title'), // Shows item.title in sidebar
  fields: [...]
}
```

### `buttonField(name, label)`
Reusable CTA/button configuration.

```typescript
buttonField("primaryCta", "Primary CTA")
// Creates: { label, url, style } object field
```

---

## 5. Theme Variables (CSS)

Components should use CSS variables, not hardcoded colors:

| Variable | Usage |
|----------|-------|
| `var(--color-primary)` | Brand accent (orange) |
| `var(--color-secondary)` | Secondary color |
| `var(--color-bg)` | Dark background |
| `var(--color-bg-light)` | Light background |
| `var(--color-text)` | Body text |

**Example:**
```tsx
<section className="bg-[var(--color-bg)] text-[var(--color-text)]">
  <button className="bg-[var(--color-primary)]">
    Click me
  </button>
</section>
```

---

## 6. File Structure Reference

```
/
├── content/
│   ├── pages/           # Page JSON (home-de.json, about-en.json)
│   └── global/          # Global settings (theme.json)
├── docs/
│   └── TINA_AI_ARCHITECTURE.md  # This file
├── public/
│   └── uploads/         # Media files
├── src/
│   ├── components/
│   │   └── blocks/      # Block React components
│   │       ├── BlockRenderer.tsx
│   │       ├── Hero.tsx
│   │       ├── FAQ.tsx
│   │       └── CaseStudies.tsx
│   └── pages/
│       └── DynamicPage.tsx  # CMS page renderer
├── tina/
│   ├── blocks/          # Block schemas
│   │   ├── hero.ts
│   │   ├── faq.ts
│   │   └── caseStudies.ts
│   ├── collections/     # Collection definitions
│   │   ├── page.ts
│   │   └── global.ts
│   └── config.ts        # Main config + helpers
```

---

## 7. Common Patterns

### Rich Text with TinaMarkdown
```tsx
import { TinaMarkdown } from "tinacms/dist/rich-text";

{data.content && (
  <div data-tina-field={tinaField(data, "content")}>
    <TinaMarkdown content={data.content} />
  </div>
)}
```

### Conditional Fields
```tsx
{data.headline && (
  <h2 data-tina-field={tinaField(data, "headline")}>
    {data.headline}
  </h2>
)}
```

### List Iteration
```tsx
{data.items?.map((item, index) => {
  if (!item) return null;
  return (
    <div key={index}>
      <h3 data-tina-field={tinaField(item, "title")}>
        {item.title}
      </h3>
    </div>
  );
})}
```

### Image Fields
```tsx
{data.image && (
  <img 
    src={data.image} 
    alt={data.headline || ''}
    data-tina-field={tinaField(data, "image")}
  />
)}
```

---

## 8. Development Commands

```bash
# Start dev server with TinaCMS
npm run dev

# Build for production (generates types first)
npm run build

# Access CMS admin
# → http://localhost:3000/admin
```

---

## 9. Adding a New Block Checklist

- [ ] Create schema: `tina/blocks/newBlock.ts`
- [ ] Add to templates in `tina/collections/page.ts`
- [ ] Create component: `src/components/blocks/NewBlock.tsx`
- [ ] Add case in `src/components/blocks/BlockRenderer.tsx`
- [ ] Add `data-tina-field` to all editable elements
- [ ] Use CSS variables for colors
- [ ] Test in CMS admin
