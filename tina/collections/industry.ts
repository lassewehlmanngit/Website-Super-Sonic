
import type { Collection } from "tinacms";

export const industryCollection: Collection = {
    name: "industry",
    label: "🏭 Industry Pages",
    path: "content/industry",
    format: "json",
    ui: {
        router: ({ document }) => {
            const filename = document._sys.filename;
            const langMatch = filename.match(/-(\w{2})$/);
            const lang = langMatch?.[1] || 'de';
            const slug = filename.replace(/-\w{2}$/, '');
            return `/${lang}/handwerk/${slug}`;
        },
    },
    fields: [
        {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
                { type: "string", name: "title", label: "Meta Title" },
                { type: "string", name: "description", label: "Meta Description", ui: { component: "textarea" } },
                { type: "image", name: "ogImage", label: "Share Image" },
            ],
        },
        {
            type: "object",
            name: "hero",
            label: "1. Hero Section",
            fields: [
                { type: "string", name: "kicker", label: "Kicker (Small Orange)" },
                { type: "string", name: "headline", label: "Headline (H1)", ui: { component: "textarea" } },
                { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
                { type: "string", name: "primaryCta", label: "Primary CTA Text" },
                { type: "string", name: "secondaryCta", label: "Secondary CTA Text" },
                { type: "string", name: "trustText", label: "Trust Text (Micro-copy)" },
                { type: "image", name: "image", label: "Hero Image/Mockup" },
                { type: "string", name: "imageAlt", label: "Hero Image Alt Text" },
            ],
        },
        {
            type: "object",
            name: "caseStudy",
            label: "2. Case Study",
            fields: [
                { type: "string", name: "kicker", label: "Section Kicker" },
                { type: "string", name: "headline", label: "Headline" },
                { type: "rich-text", name: "body", label: "Body Copy" },
                {
                    type: "object",
                    name: "stats",
                    label: "Stats Grid",
                    list: true,
                    fields: [
                        { type: "string", name: "label", label: "Label" },
                        { type: "string", name: "value", label: "Value" },
                    ],
                },
                { type: "string", name: "ctaText", label: "CTA Text" },
                { type: "string", name: "quote", label: "Quote (Optional)" },
                { type: "image", name: "image", label: "Case Study Image" },
                { type: "string", name: "imageAlt", label: "Case Study Image Alt Text" },
            ],
        },
        {
            type: "object",
            name: "problem",
            label: "3. The Problem",
            fields: [
                { type: "string", name: "headline", label: "Headline" },
                { type: "rich-text", name: "body", label: "Body Copy" },
                { type: "string", name: "callout", label: "Callout Box Text", ui: { component: "textarea" } },
            ],
        },
        {
            type: "object",
            name: "features",
            label: "4. Features (Was du bekommst)",
            fields: [
                { type: "string", name: "headline", label: "Section Headline" },
                {
                    type: "object",
                    name: "items",
                    label: "Feature Cards",
                    list: true,
                    fields: [
                        { type: "string", name: "title", label: "Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                        // Icon selection would ideally be a select field, keeping it simple for now
                        { type: "string", name: "icon", label: "Icon Name (optional)" },
                    ],
                },
            ],
        },
        {
            type: "object",
            name: "comparison",
            label: "5. Comparison",
            fields: [
                { type: "string", name: "headline", label: "Headline" },
                { type: "string", name: "subline", label: "Subline" },
                {
                    type: "object",
                    name: "rows",
                    label: "Comparison Rows",
                    list: true,
                    fields: [
                        { type: "string", name: "feature", label: "Feature Name" },
                        { type: "string", name: "competitor", label: "Competitor Value" },
                        { type: "string", name: "us", label: "Our Value" },
                    ],
                },
                {
                    type: "object",
                    name: "cta",
                    label: "After Table CTA",
                    fields: [
                        { type: "string", name: "text", label: "CTA Text", ui: { component: "textarea" } },
                        { type: "string", name: "primaryBtn", label: "Primary Button" },
                        { type: "string", name: "secondaryBtn", label: "Secondary Button" },
                    ]
                }
            ],
        },
        {
            type: "object",
            name: "process",
            label: "6. Process",
            fields: [
                { type: "string", name: "headline", label: "Headline" },
                {
                    type: "object",
                    name: "steps",
                    label: "Process Steps",
                    list: true,
                    fields: [
                        { type: "string", name: "title", label: "Step Title" },
                        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    ],
                },
            ],
        },
        {
            type: "object",
            name: "about",
            label: "7. About Lasse",
            fields: [
                { type: "string", name: "headline", label: "Headline" },
                { type: "rich-text", name: "body", label: "Body" },
                { type: "string", name: "credentials", label: "Micro credentials" },
                { type: "image", name: "image", label: "Portrait Image" },
                { type: "string", name: "imageAlt", label: "Portrait Alt Text" },
            ]
        },
        {
            type: "object",
            name: "faq",
            label: "8. FAQ",
            fields: [
                {
                    type: "object",
                    name: "items",
                    label: "Questions",
                    list: true,
                    fields: [
                        { type: "string", name: "question", label: "Question" },
                        { type: "rich-text", name: "answer", label: "Answer" },
                    ],
                },
            ],
        },
        {
            type: "object",
            name: "form",
            label: "9. Form Config",
            fields: [
                { type: "string", name: "headline", label: "Headline" },
                { type: "string", name: "subline", label: "Subline" },
                {
                    type: "object",
                    name: "fields",
                    label: "Field Placeholders",
                    fields: [
                        { type: "string", name: "namePlaceholder", label: "Name Placeholder" },
                        { type: "string", name: "emailPlaceholder", label: "Email Placeholder" },
                        { type: "string", name: "websitePlaceholder", label: "Website Placeholder" },
                        { type: "string", name: "servicePlaceholder", label: "Service Placeholder" },
                    ],
                },
                { type: "string", name: "trustText", label: "Trust Text" },
            ],
        },
        {
            type: "object",
            name: "finalCta",
            label: "10. Final CTA",
            fields: [
                { type: "string", name: "headline", label: "Headline" },
                { type: "string", name: "body", label: "Body" },
                { type: "string", name: "primaryBtn", label: "Primary Button" },
                { type: "string", name: "secondaryBtn", label: "Secondary Button" },
            ]
        }
    ],
};
