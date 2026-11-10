import type { HTMLAttributes, ElementType } from 'react';
import type { TypographyVariant } from '../../tokens/typography';

export type TextColor = 'primary' | 'secondary' | 'onAction' | 'link' | 'success' | 'warning' | 'error' | 'inherit';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Estilo tipográfico de Figma: Heading/H1–H3, Body, Note, Label/Button. */
  variant?: TypographyVariant;
  /** Elemento HTML a renderizar. Por defecto depende de la variante (h1, h2, h3 o p). */
  as?: ElementType;
  color?: TextColor;
}
