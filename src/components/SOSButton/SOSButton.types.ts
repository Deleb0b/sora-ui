/** Figma: SOS Button → State = Default | Holding | Sent */
export type SOSState = 'default' | 'holding' | 'sent';

export interface SOSButtonProps {
  /** Se ejecuta cuando la usuaria mantiene presionado el tiempo completo. */
  onTrigger: () => void;
  /** Se ejecuta si suelta antes de completar. */
  onCancel?: () => void;
  /** Tiempo que se debe mantener presionado (ms). Figma: "Mantén 3 s". */
  holdDuration?: number;
  /** Fuerza el estado "Alerta enviada" (controlado). */
  sent?: boolean;
  disabled?: boolean;
  /** Diámetro en px (Figma: 240). */
  size?: number;
  hint?: string;
  cancelHint?: string;
  sentLabel?: string;
  className?: string;
}
