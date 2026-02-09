# Norddorf

This project is built with React, Vite, and Tailwind CSS. It uses Keystatic CMS for content management and is hosted on Render.

## Setup & Deployment

See [RENDER_SETUP.md](./RENDER_SETUP.md) for detailed instructions on deploying to Render and configuring Keystatic.

## Development

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

3.  Access the CMS Admin:
    ```
    http://localhost:3000/admin
    ```

## Features

-   **Keystatic CMS**: Manage Posts, Pages, and Projects.
    -   Local mode (default): Content stored in `src/content`.
    -   GitHub mode (production): Content stored in GitHub repo.
-   **Render Hosting**: Static site hosting with SPA support.

## Project Structure

-   `src/content`: CMS content (Markdown/JSON)
-   `src/components`: React components
-   `src/pages`: Route components
-   `keystatic.config.ts`: CMS schema configuration
-   `render.yaml`: Render deployment configuration
