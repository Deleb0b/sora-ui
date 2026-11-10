import { forwardRef, useId } from 'react';
import { cx, useControllableState, useSoraStyles } from '../../utils';
import { CheckIcon } from '../../icons';
import type { CheckboxProps } from './Checkbox.types';

/**
 * Casilla de verificación.
 * Estados: default, hover, focus, checked, disabled y error.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, checked, defaultChecked = false, onChange, onCheckedChange, error, disabled, id, className, ...rest },
  ref,
) {
  useSoraStyles();
  const autoId = useId();
  const inputId = id ?? `sora-checkbox-${autoId}`;
  const [isChecked, setChecked] = useControllableState(checked, defaultChecked, onCheckedChange);
  const hasError = !!error && !disabled;

  return (
    <label
      htmlFor={inputId}
      className={cx('sora-reset', 'sora-checkbox', className)}
      data-checked={isChecked || undefined}
      data-disabled={disabled || undefined}
      data-error={hasError || undefined}
    >
      <input
        ref={ref}
        id={inputId}
        type="checkbox"
        className="sora-checkbox__input sora-visually-hidden"
        checked={isChecked}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        onChange={(e) => {
          setChecked(e.target.checked);
          onChange?.(e);
        }}
        {...rest}
      />
      <span className="sora-checkbox__box" aria-hidden="true">
        {isChecked && <CheckIcon size={14} strokeWidth={2.4} />}
      </span>
      {label && <span className="sora-checkbox__label">{label}</span>}
      {hasError && <span className="sora-checkbox__error">· {typeof error === 'string' ? error : 'Obligatorio'}</span>}
    </label>
  );
});
