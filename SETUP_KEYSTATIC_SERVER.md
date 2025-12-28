# Keystatic API Server Setup

This project now includes a separate Express server for Keystatic's admin UI.

## Architecture

- **Frontend**: Static React/Vite app (deployed as static site on Render)
- **Backend**: Express API server (deployed as Node.js service on Render)
- **Communication**: Frontend proxies `/api/keystatic` requests to the API server

## Local Development

### Option 1: Run Both Servers Separately

```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: API Server
npm run dev:server
```

### Option 2: Run Both Together

```bash
npm run dev:all
```

This uses `concurrently` to run both servers simultaneously.

The frontend will be available at `http://localhost:3000` and will automatically proxy API requests to the server at `http://localhost:3001`.

## Accessing Keystatic Admin

Once both servers are running, you can access the Keystatic admin UI at:

```
http://localhost:3000/keystatic
```

Or directly on the API server:

```
http://localhost:3001/api/keystatic
```

## Environment Variables

### Frontend (.env)
```
VITE_KEYSTATIC_GITHUB_REPO_OWNER=your-username
VITE_KEYSTATIC_GITHUB_REPO_NAME=your-repo
VITE_KEYSTATIC_API_URL=http://localhost:3001
```

### Server (.env in server/ directory)
```
KEYSTATIC_GITHUB_REPO_OWNER=your-username
KEYSTATIC_GITHUB_REPO_NAME=your-repo
KEYSTATIC_GITHUB_CLIENT_ID=your-client-id
KEYSTATIC_GITHUB_CLIENT_SECRET=your-client-secret
PORT=3001
```

## Production Deployment (Render)

The `render.yaml` file is configured with two services:

1. **super-sonic-prototypes**: Static site (frontend)
2. **super-sonic-keystatic-api**: Node.js service (API server)

### Setting Up on Render

1. Push your code to GitHub
2. In Render Dashboard, go to **Blueprints**
3. Connect your repository
4. Render will detect `render.yaml` and create both services
5. Set the environment variables for each service:
   - **Frontend**: `VITE_KEYSTATIC_GITHUB_REPO_OWNER`, `VITE_KEYSTATIC_GITHUB_REPO_NAME`, `VITE_KEYSTATIC_API_URL`
   - **API Server**: `KEYSTATIC_GITHUB_REPO_OWNER`, `KEYSTATIC_GITHUB_REPO_NAME`, `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`

### Important: Update API URL

After the API server is deployed, update the frontend's `VITE_KEYSTATIC_API_URL` environment variable to point to your Render API service URL (e.g., `https://super-sonic-keystatic-api.onrender.com`).

## GitHub App Setup

For GitHub storage mode, you need to create a GitHub App:

1. Go to https://github.com/settings/apps/new
2. Set the following:
   - **Name**: Your app name
   - **Homepage URL**: Your site URL
   - **Callback URL**: `https://your-api-server.onrender.com/api/keystatic/api/auth/github/callback`
   - **Repository permissions**: 
     - Contents: Read & Write
     - Metadata: Read-only
3. Generate a Client Secret
4. Install the app on your repository
5. Use the Client ID and Client Secret in your environment variables

## Troubleshooting

### CORS Issues
If you see CORS errors, make sure the API server is running and the proxy is configured correctly in `vite.config.ts`.

### Admin UI Not Loading
- Check that both servers are running
- Verify environment variables are set correctly
- Check browser console for errors
- Ensure the API server is accessible at the configured URL

### GitHub Authentication Issues
- Verify your GitHub App is installed on the repository
- Check that Client ID and Secret are correct
- Ensure callback URL matches your API server URL

