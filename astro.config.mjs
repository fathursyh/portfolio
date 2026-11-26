// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [react({
    experimentalReactChildren: true,
  }), playformCompress({
    JavaScript: true,
    CSS: true,
    SVG: true,
    HTML: {
      "html-minifier-terser": {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: false,
        collapseBooleanAttributes: true,
        removeComments: false,
      }
    }
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});