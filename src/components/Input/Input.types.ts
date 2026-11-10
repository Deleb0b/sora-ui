import type { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Etiqueta visible (Figma: Label). */
  label?: string;
  /** Texto de ayuda debajo del campo. */
  helperText?: string;
  /** Figma: State = Error. `true` solo cambia el borde; un string además muestra el mensaje. */
  error?: boolean | string;
  /** Figma: State = Success. */
  success?: boolean | string;
  /**
   * Validación integrada: devuelve un mensaje de error o `undefined` si el valor es válido.
   * Se ejecuta al salir del campo y, después, en cada cambio.
   */
  validate?: (value: string) => string | undefined;
  /** Ícono al inicio del campo. */
  icon?: ReactNode;
  /** Clase para el contenedor externo. */
  containerClassName?: string;
}
