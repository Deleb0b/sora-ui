import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'neutral';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Figma: chip "Disponible" de Tarjetas → success. */
  variant?: BadgeVariant;
  /** Muestra un punto de color antes del texto. */
  dot?: boolean;
  children: ReactNode;
}
