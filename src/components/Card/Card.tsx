import { forwardRef } from 'react';
import { cx, useSoraStyles } from '../../utils';
import type { CardProps } from './Card.types';

/** Contenedor base (Figma: Tarjetas). */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = 'elevated', padding = 'medium', selected = false, disabled = false, onClick, onKeyDown, className, children, ...rest },
  ref,
) {
  useSoraStyles();
  const interactive = !!onClick && !disabled;

  return (
    <div
      ref={ref}
      className={cx('sora-reset', 'sora-card', className)}
      data-variant={variant}
      data-padding={padding}
      data-selected={selected || undefined}
      data-interactive={interactive || undefined}
      data-disabled={disabled || undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-pressed={onClick ? selected : undefined}
      aria-disabled={onClick && disabled ? true : undefined}
      onClick={interactive ? onClick : undefined}
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          e.currentTarget.click();
        }
        onKeyDown?.(e);
      }}
      {...rest}
    >
      {children}
    </div>
  );
});
