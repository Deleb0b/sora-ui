import type { AvatarColor } from '../Avatar';
import type { CardVariant } from '../Card';

export interface ContactCardProps {
  name: string;
  /** Texto bajo el nombre. Por defecto "Contacto de confianza". */
  relation?: string;
  available?: boolean;
  avatarSrc?: string;
  avatarColor?: AvatarColor;
  variant?: CardVariant;
  onCall?: () => void;
  onMessage?: () => void;
  callLabel?: string;
  messageLabel?: string;
  className?: string;
}
