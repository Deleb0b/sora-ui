import { palette, colors } from './colors';
import { spacing } from './spacing';
import { radius } from './radius';
import { shadows } from './shadows';
import { typography, fontFamilies, fontWeights } from './typography';
import { sizes } from './sizes';

export * from './colors';
export * from './spacing';
export * from './radius';
export * from './shadows';
export * from './typography';
export * from './sizes';

/** Todos los tokens en un solo objeto. */
export const tokens = { palette, colors, spacing, radius, shadows, typography, fontFamilies, fontWeights, sizes } as const;
export type SoraTokens = typeof tokens;
