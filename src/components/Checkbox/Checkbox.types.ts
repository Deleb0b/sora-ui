import type { ChangeEvent, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  /** Texto junto a la casilla (Figma: Label). */
  label?: string;
  /** Estado controlado (Figma: Checked = True | False). */
  checked?: boolean;
  /** Estado inicial si no es controlado. */
  defaultChecked?: boolean;
  /** Evento nativo de cambio. */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Atajo: recibe directamente el nuevo valor. */
  onCheckedChange?: (checked: boolean) => void;
  /** Figma: State = Error. Un string se muestra como mensaje (por defecto "Obligatorio"). */
  error?: boolean | string;
}
