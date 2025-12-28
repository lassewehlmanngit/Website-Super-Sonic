import { config, fields, collection } from '@keystatic/core';

// Server-side config uses process.env (Node.js)
const storage =
  process.env.KEYSTATIC_GITHUB_REPO_OWNER && process.env.KEYSTATIC_GITHUB_REPO_NAME
    ? {
        kind: 'github' as const,
        repo: {
          owner: process.env.KEYSTATIC_GITHUB_REPO_OWNER,
          name: process.env.KEYSTATIC_GITHUB_REPO_NAME,
        },
      }
    : {
        kind: 'local' as const,
      };

export default config({
  storage,
  collections: {
    faqs: collection({
      label: 'FAQs',
      slugField: 'question',
      path: 'src/content/faqs/*',
      schema: {
        question: fields.text({ label: 'Question' }),
        answer: fields.document({
            label: 'Answer',
            formatting: true,
            dividers: true,
            links: true,
        }),
        category: fields.select({
            label: 'Category',
            options: [
                { label: 'General / Home', value: 'general' },
                { label: 'Web Design', value: 'web-design' },
                { label: 'MVP / App', value: 'app' },
                { label: 'UX Design', value: 'ux' },
            ],
            defaultValue: 'general'
        }),
        page: fields.select({
            label: 'Page',
            options: [
                { label: 'Home', value: 'home' },
                { label: 'Web Design', value: 'web-design' },
                { label: 'Software Design / MVP', value: 'app-design' },
                { label: 'UX Design', value: 'ux-design' },
                { label: 'About', value: 'about' },
                { label: 'All Pages', value: 'all' },
            ],
            defaultValue: 'home'
        }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
      }
    }),
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug' }),
        publishedDate: fields.date({ label: 'Published Date' }),
        author: fields.text({ label: 'Author' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/posts',
            publicPath: '/images/posts',
          },
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: (props) => props.value }
        ),
      },
    }),
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/pages',
            publicPath: '/images/pages',
          },
        }),
        seoTitle: fields.text({ label: 'SEO Title' }),
        seoDescription: fields.text({ label: 'SEO Description', multiline: true }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug' }),
        client: fields.text({ label: 'Client' }),
        year: fields.text({ label: 'Year' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Web Design', value: 'web-design' },
            { label: 'Software Design', value: 'app-design' },
            { label: 'UX Design', value: 'ux-design' },
            { label: 'Prototyping', value: 'prototyping' },
          ],
          defaultValue: 'web-design',
        }),
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'public/images/projects',
          publicPath: '/images/projects',
        }),
        gallery: fields.array(
          fields.image({
            label: 'Gallery Image',
            directory: 'public/images/projects',
            publicPath: '/images/projects',
          }),
          { label: 'Gallery', itemLabel: (props) => props.filename }
        ),
        description: fields.document({
          label: 'Description',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/projects',
            publicPath: '/images/projects',
          },
        }),
        technologies: fields.array(
          fields.text({ label: 'Technology' }),
          { label: 'Technologies', itemLabel: (props) => props.value }
        ),
        liveUrl: fields.text({ label: 'Live URL' }),
        githubUrl: fields.text({ label: 'GitHub URL' }),
      },
    }),
  },
});

