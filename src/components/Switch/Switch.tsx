import { forwardRef, useId } from 'react';
import { cx, useControllableState, useSoraStyles } from '../../utils';
import type { SwitchProps } from './Switch.types';

/**
 * Interruptor (Figma: Toggle).
 * Estados: off, on, hover, focus y disabled.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, checked, defaultChecked = false, onChange, onCheckedChange, disabled, labelPosition = 'end', id, className, ...rest },
  ref,
) {
  useSoraStyles();
  const autoId = useId();
  const inputId = id ?? `sora-switch-${autoId}`;
  const [isOn, setOn] = useControllableState(checked, defaultChecked, onCheckedChange);

  return (
    <label
      htmlFor={inputId}
      className={cx('sora-reset', 'sora-switch', className)}
      data-checked={isOn || undefined}
      data-disabled={disabled || undefined}
      data-label-position={labelPosition}
    >
      <input
        ref={ref}
        id={inputId}
        type="checkbox"
        role="switch"
        aria-checked={isOn}
        className="sora-switch__input sora-visually-hidden"
        checked={isOn}
        disabled={disabled}
        onChange={(e) => {
          setOn(e.target.checked);
          onChange?.(e);
        }}
        {...rest}
      />
      <span className="sora-switch__track" aria-hidden="true">
        <span className="sora-switch__knob" />
      </span>
      {label && <span className="sora-switch__label">{label}</span>}
    </label>
  );
});

/** Alias con el nombre usado en Figma. */
export const Toggle = Switch;
