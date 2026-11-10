import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

// Playground de desarrollo: usa el código fuente de la biblioteca directamente.
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [react()],
  resolve: { alias: { '@sora-app/ui': fileURLToPath(new URL('../src/index.ts', import.meta.url)) } },
});
