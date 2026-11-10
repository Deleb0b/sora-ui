import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: { index: 'src/index.ts' },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    treeshake: false,
    target: 'es2020',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    banner: { js: "'use client';" },
  },
  {
    // Solo para generar dist/styles.css en el build (no se publica como entrada).
    entry: { 'styles-sheet': 'src/styles/index.ts' },
    format: ['cjs'],
    outExtension: () => ({ js: '.cjs' }),
    dts: false,
    clean: false,
  },
]);
