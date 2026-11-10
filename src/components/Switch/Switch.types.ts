import type { ChangeEvent, InputHTMLAttributes } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  /** Texto junto al interruptor. */
  label?: string;
  /** Estado controlado (Figma: Toggle → State = On | Off). */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onCheckedChange?: (checked: boolean) => void;
  /** Posición del texto respecto al interruptor. */
  labelPosition?: 'start' | 'end';
}
