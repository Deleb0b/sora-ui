// Genera dist/styles.css (opcional: para quien prefiera importar el CSS en vez de la inyección automática).
import { writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { sheet } = require('../dist/styles-sheet.cjs');
writeFileSync(new URL('../dist/styles.css', import.meta.url), sheet);
import { rmSync } from 'node:fs';
rmSync(new URL('../dist/styles-sheet.cjs', import.meta.url));
console.log('dist/styles.css generado');
