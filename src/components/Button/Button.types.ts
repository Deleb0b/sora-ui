import type { ButtonHTMLAttributes, ReactNode } from 'react';

/** Figma: Button → Type = Primary | Secondary. `tonal` viene de los botones de "Tarjetas". */
export type ButtonVariant = 'primary' | 'secondary' | 'tonal';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  /** medium = 48 px (tamaño de Figma). */
  size?: ButtonSize;
  /** Figma: State = Loading. Muestra un spinner y bloquea los clics. */
  loading?: boolean;
  /** Figma: State = Success. Fondo verde con ícono de check. */
  success?: boolean;
  /** Ocupa todo el ancho del contenedor. */
  fullWidth?: boolean;
  /** Ícono antes del texto. */
  icon?: ReactNode;
  children?: ReactNode;
}
