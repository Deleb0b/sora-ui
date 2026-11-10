import { colors, palette } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { radius } from '../tokens/radius';
import { shadows } from '../tokens/shadows';
import { fontFamilies } from '../tokens/typography';

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

function flatten(obj: Record<string, unknown>, prefix: string): string[] {
  return Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' && v !== null
      ? flatten(v as Record<string, unknown>, `${prefix}-${kebab(k)}`)
      : [`${prefix}-${kebab(k)}: ${typeof v === 'number' ? `${v}px` : v};`],
  );
}

/**
 * Variables CSS generadas a partir de los tokens (una sola fuente de verdad).
 * Ej.: colors.action.primary → var(--sora-color-action-primary)
 * Se pueden sobreescribir desde el proyecto consumidor para personalizar el tema.
 */
export const cssVariables = `:root {
  ${[
    ...flatten(palette, '--sora-palette'),
    ...flatten(colors, '--sora-color'),
    ...flatten(spacing, '--sora-space'),
    ...flatten(radius, '--sora-radius'),
    ...flatten(shadows, '--sora-shadow'),
    ...flatten(fontFamilies, '--sora-font'),
  ].join('\n  ')}
}`;
