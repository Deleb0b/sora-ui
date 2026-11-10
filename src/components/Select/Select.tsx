import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { cx, useControllableState, useSoraStyles } from '../../utils';
import { AlertCircleIcon, CheckCircleIcon, CheckIcon, ChevronDownIcon } from '../../icons';
import type { SelectOption, SelectProps } from './Select.types';

/**
 * Lista desplegable con el estilo de Text field.
 * Estados: default, hover, focus, open, selected, active (resaltada), error, success y disabled.
 * Teclado: Enter/Espacio/↓ abren · ↑↓ navegan · Enter elige · Esc cierra.
 */
export function Select<V extends string = string>({
  options,
  value,
  defaultValue = null,
  onChange,
  label,
  placeholder = 'Selecciona una opción',
  helperText,
  error,
  success,
  disabled = false,
  required,
  name,
  id,
  className,
  onOpenChange,
}: SelectProps<V>) {
  useSoraStyles();
  const autoId = useId();
  const baseId = id ?? `sora-select-${autoId}`;
  const listId = `${baseId}-list`;
  const helperId = `${baseId}-helper`;

  const [selected, setSelected] = useControllableState<V | null>(value, defaultValue);
  const [open, setOpenState] = useState(false);
  const [active, setActive] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const setOpen = (next: boolean) => {
    setOpenState(next);
    onOpenChange?.(next);
    if (next) {
      const i = options.findIndex((o) => o.value === selected);
      setActive(i >= 0 ? i : options.findIndex((o) => !o.disabled));
    }
  };

  // Cerrar al hacer clic fuera
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const choose = (opt: SelectOption<V>) => {
    if (opt.disabled) return;
    setSelected(opt.value);
    onChange?.(opt.value, opt);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const move = (dir: 1 | -1) => {
    if (!options.length) return;
    let i = active;
    for (let n = 0; n < options.length; n++) {
      i = (i + dir + options.length) % options.length;
      if (!options[i].disabled) break;
    }
    setActive(i);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        e.preventDefault();
        if (!open) setOpen(true);
        else move(e.key === 'ArrowDown' ? 1 : -1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (!open) setOpen(true);
        else if (active >= 0) choose(options[active]);
        break;
      case 'Escape':
        if (open) {
          e.preventDefault();
          setOpen(false);
        }
        break;
      case 'Tab':
        if (open) setOpen(false);
        break;
      case 'Home':
      case 'End':
        if (open) {
          e.preventDefault();
          setActive(e.key === 'Home' ? 0 : options.length - 1);
        }
        break;
    }
  };

  const selectedOption = options.find((o) => o.value === selected);
  const hasError = !disabled && !!error;
  const hasSuccess = !disabled && !hasError && !!success;
  const message = hasError
    ? typeof error === 'string' ? error : undefined
    : hasSuccess
      ? typeof success === 'string' ? success : undefined
      : helperText;
  const state = disabled ? 'disabled' : hasError ? 'error' : hasSuccess ? 'success' : 'default';

  return (
    <div
      ref={rootRef}
      className={cx('sora-reset', 'sora-field', 'sora-select', className)}
      data-state={state}
      data-open={open || undefined}
    >
      {label && (
        <span id={`${baseId}-label`} className="sora-field__label">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </span>
      )}
      <div className="sora-select__wrapper">
        <button
          ref={triggerRef}
          id={baseId}
          type="button"
          role="combobox"
          className="sora-select__trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={label ? `${baseId}-label ${baseId}` : undefined}
          aria-activedescendant={open && active >= 0 ? `${baseId}-opt-${active}` : undefined}
          aria-invalid={hasError || undefined}
          aria-required={required || undefined}
          aria-describedby={message ? helperId : undefined}
          disabled={disabled}
          onClick={() => setOpen(!open)}
          onKeyDown={onKeyDown}
        >
          <span className="sora-select__value" data-placeholder={!selectedOption || undefined}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDownIcon size={20} className="sora-select__chevron" />
        </button>

        {open && (
          <ul id={listId} role="listbox" className="sora-select__list" aria-labelledby={label ? `${baseId}-label` : undefined}>
            {options.map((opt, i) => (
              <li
                key={opt.value}
                id={`${baseId}-opt-${i}`}
                role="option"
                aria-selected={opt.value === selected}
                aria-disabled={opt.disabled || undefined}
                className="sora-select__option"
                data-active={i === active || undefined}
                onMouseEnter={() => !opt.disabled && setActive(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(opt)}
              >
                <span>{opt.label}</span>
                {opt.value === selected && <CheckIcon size={16} />}
              </li>
            ))}
          </ul>
        )}
      </div>
      {name && <input type="hidden" name={name} value={selected ?? ''} />}
      {message && (
        <p id={helperId} className="sora-field__helper" role={hasError ? 'alert' : undefined}>
          {hasError && <AlertCircleIcon size={16} />}
          {hasSuccess && <CheckCircleIcon size={16} />}
          <span>{message}</span>
        </p>
      )}
    </div>
  );
}
