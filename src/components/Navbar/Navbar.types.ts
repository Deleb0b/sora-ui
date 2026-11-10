import type { HTMLAttributes, ReactNode } from 'react';

export interface NavbarItem {
  value: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface NavbarProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'> {
  /** Si no se pasa, usa Inicio · Trayecto · Mi red · Ajustes (Figma). */
  items?: NavbarItem[];
  /** Pestaña activa (controlado). */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Fija la barra a la parte inferior de la pantalla. */
  fixed?: boolean;
}
