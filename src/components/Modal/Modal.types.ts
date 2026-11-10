import type { ReactNode } from 'react';

export type ModalSize = 'small' | 'medium' | 'large';

export interface ModalProps {
  /** Controla si el modal está abierto. */
  open: boolean;
  /** Se llama al cerrar (botón X, clic en el fondo o tecla Esc). */
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** Zona inferior para acciones (botones). */
  footer?: ReactNode;
  size?: ModalSize;
  /** Cerrar al hacer clic fuera del contenido. Por defecto true. */
  closeOnOverlayClick?: boolean;
  /** Cerrar con la tecla Esc. Por defecto true. */
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
  className?: string;
}
