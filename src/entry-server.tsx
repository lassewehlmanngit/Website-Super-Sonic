import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { Writable } from 'node:stream';

export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = '';
    const writable = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });

    writable.on('finish', () => {
      resolve(html);
    });

    const { pipe } = renderToPipeableStream(
      <React.StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
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
