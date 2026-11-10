import { forwardRef, useId, useState } from 'react';
import { cx, useSoraStyles } from '../../utils';
import { AlertCircleIcon, CheckCircleIcon } from '../../icons';
import type { InputProps } from './Input.types';

/**
 * Campo de texto (Figma: Text field).
 * Estados: default, hover, focus, filled, error, success y disabled.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    helperText,
    error,
    success,
    validate,
    icon,
    disabled,
    id,
    className,
    containerClassName,
    value,
    defaultValue,
    onChange,
    onBlur,
    ...rest
  },
  ref,
) {
  useSoraStyles();
  const autoId = useId();
  const inputId = id ?? `sora-input-${autoId}`;
  const helperId = `${inputId}-helper`;

  const [touched, setTouched] = useState(false);
  const [internalValue, setInternalValue] = useState(String(defaultValue ?? ''));
  const currentValue = value !== undefined ? String(value) : internalValue;
  const validationError = validate && touched ? validate(currentValue) : undefined;

  const errorMsg = error ?? validationError;
  const hasError = !disabled && !!errorMsg;
  const hasSuccess = !disabled && !hasError && !!success;
  const message = hasError
    ? typeof errorMsg === 'string' ? errorMsg : undefined
    : hasSuccess
      ? typeof success === 'string' ? success : undefined
      : helperText;

  const state = disabled ? 'disabled' : hasError ? 'error' : hasSuccess ? 'success' : 'default';

  return (
    <div className={cx('sora-reset', 'sora-field', containerClassName)} data-state={state}>
      {label && (
        <label htmlFor={inputId} className="sora-field__label">
          {label}
          {rest.required && <span aria-hidden="true"> *</span>}
        </label>
      )}
      <div className="sora-input" data-filled={currentValue !== '' || undefined}>
        {icon && <span className="sora-input__icon">{icon}</span>}
        <input
          ref={ref}
          id={inputId}
          className={cx('sora-input__control', className)}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={message ? helperId : undefined}
          value={value}
          defaultValue={value === undefined ? defaultValue : undefined}
          onChange={(e) => {
            if (value === undefined) setInternalValue(e.target.value);
            onChange?.(e);
          }}
          onBlur={(e) => {
            setTouched(true);
            onBlur?.(e);
          }}
          {...rest}
        />
      </div>
      {message && (
        <p id={helperId} className="sora-field__helper" role={hasError ? 'alert' : undefined}>
          {hasError && <AlertCircleIcon size={16} />}
          {hasSuccess && <CheckCircleIcon size={16} />}
          <span>{message}</span>
        </p>
      )}
    </div>
  );
});
