import { sizes } from '../../tokens/sizes';

/** Estilos compartidos por los campos de formulario (Input y Select). */
export const fieldStyles = `
.sora-field { display: flex; flex-direction: column; gap: var(--sora-space-sm); width: 100%; font-family: var(--sora-font-body); }
.sora-field__label { font-family: var(--sora-font-body); font-weight: 700; font-size: 16px; line-height: 20px; color: var(--sora-color-text-primary); }
.sora-field[data-state="disabled"] .sora-field__label { color: var(--sora-color-text-secondary); }
.sora-field__helper { display: flex; align-items: center; gap: 6px; margin: 0; font-size: 13px; line-height: 18px; color: var(--sora-color-text-secondary); }
.sora-field[data-state="error"] .sora-field__helper { color: var(--sora-color-state-error); }
.sora-field[data-state="success"] .sora-field__helper { color: var(--sora-color-state-success); }

.sora-input, .sora-select__trigger {
  display: flex; align-items: center; gap: var(--sora-space-sm);
  min-height: ${sizes.input}px; padding: var(--sora-space-sm) var(--sora-space-lg);
  background: var(--sora-color-bg-surface);
  border: 2px solid var(--sora-color-border-default); border-radius: var(--sora-radius-md);
  transition: border-color .15s ease, box-shadow .15s ease;
}
.sora-input:hover, .sora-select__trigger:hover { border-color: var(--sora-color-border-focus); }
.sora-input:focus-within, .sora-select__trigger:focus-visible, .sora-select[data-open] .sora-select__trigger {
  outline: none; border-color: var(--sora-color-border-focus); box-shadow: 0 0 0 1px var(--sora-color-border-focus);
}
.sora-field[data-state="error"] .sora-input, .sora-field[data-state="error"] .sora-select__trigger { border-color: var(--sora-color-border-error); }
.sora-field[data-state="error"] .sora-input:focus-within,
.sora-field[data-state="error"] .sora-select__trigger:focus-visible { box-shadow: 0 0 0 1px var(--sora-color-border-error); }
.sora-field[data-state="success"] .sora-input, .sora-field[data-state="success"] .sora-select__trigger { border-color: var(--sora-color-state-success); }
.sora-field[data-state="disabled"] .sora-input, .sora-field[data-state="disabled"] .sora-select__trigger {
  background: var(--sora-color-action-disabled-bg); border-color: var(--sora-color-border-default); box-shadow: none; cursor: not-allowed;
}
`;

export const inputStyles = `
.sora-input__icon { display: inline-flex; color: var(--sora-color-text-secondary); }
.sora-input__control {
  flex: 1; min-width: 0; border: 0; outline: none; background: transparent; padding: 0; margin: 0;
  font-family: var(--sora-font-body); font-size: 16px; line-height: 24px; color: var(--sora-color-text-primary);
  caret-color: var(--sora-color-border-focus);
}
.sora-input__control::placeholder { color: var(--sora-color-text-secondary); opacity: 1; }
.sora-input__control:disabled { color: var(--sora-color-text-secondary); cursor: not-allowed; }
`;
