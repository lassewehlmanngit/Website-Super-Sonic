import React, { useEffect } from 'react';
import keystaticConfig from '../../keystatic.config';

/**
 * Keystatic Admin Page
 * 
 * Note: Keystatic CMS requires server-side API routes to function properly.
 * The admin UI is designed for frameworks like Next.js or Astro that have API routes.
 * 
 * For a static React/Vite app, you have these options:
 * 1. Use Keystatic CLI tools for content management
 * 2. Set up a backend API server (Express, etc.) with Keystatic API routes
 * 3. Use Keystatic Cloud (if available) for hosted admin
 * 4. Manage content directly in GitHub
 * 
 * Your content is configured in keystatic.config.ts and will be stored in:
 * - Local mode: src/content/ directory
 * - GitHub mode: Your GitHub repository
 */
const KeystaticAdmin: React.FC = () => {
  useEffect(() => {
    document.title = 'Keystatic CMS Admin';
  }, []);

  const isGitHubMode = keystaticConfig.storage.kind === 'github';
  const repoOwner = isGitHubMode ? keystaticConfig.storage.repo?.owner : null;
  const repoName = isGitHubMode ? keystaticConfig.storage.repo?.name : null;

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Keystatic CMS Admin</h1>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Admin UI Setup Required</h2>
          <p className="mb-4">
            Keystatic's admin UI requires server-side API routes to function. Since this is a static React/Vite application,
            the full admin interface isn't available in the browser.
          </p>
          
          <h3 className="font-semibold mb-2 mt-4">Options for Content Management:</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong>Keystatic CLI:</strong> Use command-line tools to manage content locally
            </li>
            <li>
              <strong>Backend API:</strong> Set up an Express server or similar with Keystatic API routes
            </li>
            <li>
              <strong>GitHub:</strong> Edit content files directly in your GitHub repository
            </li>
            <li>
              <strong>Keystatic Cloud:</strong> Use Keystatic's hosted admin (if available)
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Current Configuration</h2>
          <div className="space-y-2">
            <p>
              <strong>Storage Mode:</strong> {isGitHubMode ? 'GitHub' : 'Local'}
            </p>
            {isGitHubMode && (
              <>
                <p>
                  <strong>Repository:</strong> {repoOwner}/{repoName}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Content will be stored in your GitHub repository. You can edit files directly in GitHub
                  or use the Keystatic CLI tools.
                </p>
              </>
            )}
            {!isGitHubMode && (
              <p className="text-sm text-gray-600 mt-2">
                Content is stored locally in <code className="bg-white px-2 py-1 rounded">src/content/</code>
              </p>
            )}
          </div>
          <div className="mt-4">
            <p className="font-semibold mb-2">Available Collections:</p>
            <ul className="list-disc list-inside space-y-1">
              {Object.keys(keystaticConfig.collections || {}).map((collection) => (
                <li key={collection} className="capitalize">{collection}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://keystatic.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Keystatic Documentation
              </a>
            </li>
            <li>
              <a
                href="https://keystatic.com/docs/github-mode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Keystatic GitHub Mode Guide
              </a>
            </li>
            {isGitHubMode && repoOwner && repoName && (
              <li>
                <a
                  href={`https://github.com/${repoOwner}/${repoName}/tree/main/src/content`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Content in GitHub
                </a>
              </li>
            )}
            <li>
              <a
                href="./RENDER_SETUP.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Setup Guide (RENDER_SETUP.md)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KeystaticAdmin;
