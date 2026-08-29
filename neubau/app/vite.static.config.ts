import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

const appRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: fileURLToPath(new URL('./static-site', import.meta.url)),
  base: '/neubau/',
  publicDir: fileURLToPath(new URL('./public', import.meta.url)),
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '@': appRoot,
      'next/image': fileURLToPath(new URL('./static-site/next-image.tsx', import.meta.url)),
      'next/link': fileURLToPath(new URL('./static-site/next-link.tsx', import.meta.url)),
    },
  },
  build: {
    outDir: fileURLToPath(new URL('..', import.meta.url)),
    emptyOutDir: false,
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL('./static-site/index.html', import.meta.url)),
        weeCrm: fileURLToPath(new URL('./static-site/projekte/wee-crm/index.html', import.meta.url)),
      },
    },
  },
});
