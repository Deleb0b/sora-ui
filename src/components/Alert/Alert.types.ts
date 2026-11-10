import type { HTMLAttributes, ReactNode } from 'react';

/** Figma: Alert → Type = Success | Warning | Error | Info */
export type AlertType = 'success' | 'warning' | 'error' | 'info';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  type?: AlertType;
  title: ReactNode;
  /** Mensaje (Figma: Message). También se puede pasar como children. */
  message?: ReactNode;
  children?: ReactNode;
  /** Si se define, muestra la X para cerrar (Figma: Show close). */
  onClose?: () => void;
  /** Acción opcional (p. ej. un Button pequeño). */
  action?: ReactNode;
}
