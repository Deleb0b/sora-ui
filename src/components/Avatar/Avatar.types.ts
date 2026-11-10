import type { HTMLAttributes } from 'react';

/** Figma: Avatar → Size = Md | Lg | Xl, Color = Malva | Coral */
export type AvatarSize = 'md' | 'lg' | 'xl';
export type AvatarColor = 'malva' | 'coral';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Nombre de la persona; se usa su inicial y como texto alternativo. */
  name: string;
  src?: string;
  size?: AvatarSize;
  color?: AvatarColor;
  /** Figma: Show status (punto verde = disponible). */
  showStatus?: boolean;
}
