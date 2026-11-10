import { sizes } from '../../tokens/sizes';

export const checkboxStyles = `
.sora-checkbox {
  position: relative; display: inline-flex; align-items: center; gap: var(--sora-space-md);
  cursor: pointer; font-family: var(--sora-font-body); font-size: 16px; line-height: 24px;
  color: var(--sora-color-text-primary); user-select: none;
}
.sora-checkbox__box {
  flex: none; display: inline-flex; align-items: center; justify-content: center;
  width: ${sizes.checkbox}px; height: ${sizes.checkbox}px;
  border: 2px solid var(--sora-color-border-default); border-radius: var(--sora-radius-sm);
  background: var(--sora-color-bg-surface); color: var(--sora-color-text-on-action);
  transition: background-color .15s ease, border-color .15s ease;
}
.sora-checkbox:hover .sora-checkbox__box { background: var(--sora-color-bg-subtle); border-color: var(--sora-color-border-focus); }
.sora-checkbox__input:focus-visible + .sora-checkbox__box { border-width: 3px; border-color: var(--sora-color-border-focus); box-shadow: var(--sora-shadow-focus-ring); }
.sora-checkbox[data-checked] .sora-checkbox__box { background: var(--sora-color-action-secondary); border-color: var(--sora-color-action-secondary); }
.sora-checkbox[data-checked]:hover .sora-checkbox__box { background: var(--sora-color-action-secondary-hover); border-color: var(--sora-color-action-secondary-hover); }
.sora-checkbox[data-error] .sora-checkbox__box { border-color: var(--sora-color-border-error); }
.sora-checkbox__error { font-size: 13px; line-height: 18px; color: var(--sora-color-state-error); }
.sora-checkbox[data-disabled] { cursor: not-allowed; color: var(--sora-color-text-secondary); }
.sora-checkbox[data-disabled] .sora-checkbox__box,
.sora-checkbox[data-disabled]:hover .sora-checkbox__box { background: var(--sora-color-action-disabled-bg); border-color: var(--sora-color-border-default); color: var(--sora-color-text-secondary); }
`;
