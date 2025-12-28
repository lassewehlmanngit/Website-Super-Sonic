# Render + Keystatic Setup Guide

This guide explains how to deploy your project on Render and configure Keystatic CMS with GitHub storage.

## 1. Prerequisites

- A [GitHub account](https://github.com/)
- A [Render account](https://render.com/)

## 2. GitHub Setup

1.  **Push your code** to a GitHub repository (private or public).
2.  **Create a GitHub App** for Keystatic (Required for Keystatic to write to your repo):
    -   Follow the [Keystatic GitHub Mode Guide](https://keystatic.com/docs/github-mode).
    -   You will need the `Client ID` and `Client Secret` if you are managing auth yourself, but for simple Render deployment with Keystatic Cloud (recommended for ease), you just need to connect the repo.
    -   **Important**: To allow Keystatic to work in production on Render, you must configure it to use GitHub storage.
    -   Set the following environment variables in your local `.env` (for testing) and in Render (for production):
        -   `VITE_KEYSTATIC_GITHUB_REPO_OWNER`: Your GitHub username or organization.
        -   `VITE_KEYSTATIC_GITHUB_REPO_NAME`: The name of your repository.

## 3. Render Deployment

1.  **Log in to Render** and go to your Dashboard.
2.  **New +** -> **Static Site**.
3.  **Connect your GitHub repository**.
4.  **Configure the service**:
    -   **Name**: `super-sonic-prototypes` (or your choice)
    -   **Branch**: `main` (or your default branch)
    -   **Build Command**: `npm install && npm run build`
    -   **Publish Directory**: `dist`
5.  **Environment Variables**:
    Add the following environment variables:
    -   `VITE_KEYSTATIC_GITHUB_REPO_OWNER`: (e.g., `your-username`)
    -   `VITE_KEYSTATIC_GITHUB_REPO_NAME`: (e.g., `super-sonic-prototypes`)
6.  **Create Static Site**.

**Infrastructure as Code (Blueprint):**
Alternatively, you can use the included `render.yaml` file.
1.  In Render, go to **Blueprints**.
2.  Connect your repo.
3.  Render will detect `render.yaml` and prompt for the environment variables defined in it.

## 4. Keystatic Admin

-   Once deployed, navigate to `https://your-site.onrender.com/admin`.
-   You will be prompted to log in with GitHub to manage your content.
-   Any changes made in the admin UI will be committed directly to your GitHub repository.

## Local Development

For local development:
-   Keystatic defaults to **Local Mode** if the GitHub environment variables are missing. Content is saved to `src/content/`.
-   If you want to test GitHub mode locally, add the env vars to your `.env` file.

## Troubleshooting

-   **SPA Routing 404s**: If refreshing a page gives a 404, ensure the **Rewrite Rule** is active. `render.yaml` includes a rewrite from `/*` to `/index.html`. If configuring manually in the dashboard, add a Rewrite Rule: Source `/*`, Destination `/index.html`.
