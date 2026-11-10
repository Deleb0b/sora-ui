import type { HTMLAttributes } from 'react';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Diámetro en px. Figma: Icon/Spinner 18 px. */
  size?: number;
  /** Color del trazo. Por defecto hereda el color del texto. */
  color?: string;
  /** Texto para lectores de pantalla. */
  label?: string;
}
