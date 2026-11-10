import { forwardRef } from 'react';
import { cx, useSoraStyles } from '../../utils';
import { Spinner } from '../Spinner';
import { CheckIcon } from '../../icons';
import type { ButtonProps } from './Button.types';

/**
 * Botón del Design System Sora.
 * Estados: default, hover, pressed (:active), focus (:focus-visible), disabled, loading y success.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'medium',
    loading = false,
    success = false,
    fullWidth = false,
    disabled = false,
    icon,
    type = 'button',
    className,
    children,
    onClick,
    ...rest
  },
  ref,
) {
  useSoraStyles();
  const blocked = disabled || loading;
  const iconSize = size === 'small' ? 16 : 18;

  return (
    <button
      ref={ref}
      type={type}
      className={cx('sora-reset', 'sora-button', className)}
      data-variant={variant}
      data-size={size}
      data-loading={loading || undefined}
      data-success={success || undefined}
      data-full-width={fullWidth || undefined}
      disabled={disabled}
      aria-disabled={blocked || undefined}
      aria-busy={loading || undefined}
      onClick={(e) => {
        if (blocked) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      }}
      {...rest}
    >
      {loading ? (
        <Spinner size={iconSize} label="Cargando" />
      ) : success ? (
        <CheckIcon size={iconSize} />
      ) : (
        icon && <span className="sora-button__icon">{icon}</span>
      )}
      {children != null && <span className="sora-button__label">{children}</span>}
    </button>
  );
});
