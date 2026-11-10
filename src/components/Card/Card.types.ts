import type { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'none' | 'small' | 'medium' | 'large';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** elevated = Shadow/Card de Figma · outlined = borde malva · filled = fondo lavanda. */
  variant?: CardVariant;
  padding?: CardPadding;
  /** Marca la tarjeta como seleccionada. */
  selected?: boolean;
  /** Si recibe onClick, la tarjeta se vuelve interactiva (hover, pressed, focus y teclado). */
  onClick?: HTMLAttributes<HTMLDivElement>['onClick'];
  disabled?: boolean;
  children?: ReactNode;
}
