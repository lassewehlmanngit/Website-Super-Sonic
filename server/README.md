# Keystatic API Server

This Express server provides the API endpoints needed for Keystatic's admin UI to function.

## Development

```bash
# Install dependencies
cd server && npm install

# Run the server
npm run dev

# The server will run on http://localhost:3001
```

## Production

The server is deployed separately on Render as a Node.js service. See `render.yaml` for configuration.

## Environment Variables

Required for GitHub storage mode:

- `KEYSTATIC_GITHUB_REPO_OWNER` - Your GitHub username/org
- `KEYSTATIC_GITHUB_REPO_NAME` - Repository name
- `KEYSTATIC_GITHUB_CLIENT_ID` - GitHub App Client ID
- `KEYSTATIC_GITHUB_CLIENT_SECRET` - GitHub App Client Secret

For local development, the server will use local file storage if these are not set.

## API Endpoints

- `GET /health` - Health check
- `/api/keystatic/*` - All Keystatic API routes (handled by `@keystatic/core/api`)

