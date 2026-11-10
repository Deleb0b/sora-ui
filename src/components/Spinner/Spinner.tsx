import { cx, useSoraStyles } from '../../utils';
import type { SpinnerProps } from './Spinner.types';

/** Indicador de carga. Lo usa Button en estado `loading`. */
export function Spinner({ size = 18, color, label = 'Cargando', className, style, ...rest }: SpinnerProps) {
  useSoraStyles();
  return (
    <span
      role="status"
      aria-label={label}
      className={cx('sora-spinner', className)}
      style={{ width: size, height: size, borderWidth: Math.max(2, Math.round(size / 8)), color, ...style }}
      {...rest}
    />
  );
}
