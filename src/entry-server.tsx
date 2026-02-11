import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import App from './App';
import { Writable } from 'node:stream';

export function render(url: string): Promise<{ html: string, helmet: HelmetServerState }> {
  return new Promise((resolve, reject) => {
    let html = '';
    const helmetContext = {} as { helmet: HelmetServerState };

    const writable = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });

    writable.on('finish', () => {
      resolve({ html, helmet: helmetContext.helmet });
    });

    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </React.StrictMode>,
      {
        onAllReady() {
          pipe(writable);
        },
        onError(error) {
          console.error('Render error:', error);
          reject(error);
        },
      }
    );
  });
}
