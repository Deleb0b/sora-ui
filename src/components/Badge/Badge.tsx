import { cx, useSoraStyles } from '../../utils';
import type { BadgeProps } from './Badge.types';

/** Etiqueta pequeña de estado. */
export function Badge({ variant = 'neutral', dot = false, className, children, ...rest }: BadgeProps) {
  useSoraStyles();
  return (
    <span className={cx('sora-reset', 'sora-badge', className)} data-variant={variant} {...rest}>
      {dot && <span className="sora-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
