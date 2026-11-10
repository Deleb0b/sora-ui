export const selectStyles = `
.sora-select__wrapper { position: relative; }
.sora-select__trigger {
  width: 100%; cursor: pointer; text-align: left; justify-content: space-between;
  font-family: var(--sora-font-body); font-size: 16px; line-height: 24px; color: var(--sora-color-text-primary);
}
.sora-select__trigger:disabled { color: var(--sora-color-text-secondary); }
.sora-select__value[data-placeholder] { color: var(--sora-color-text-secondary); }
.sora-select__chevron { flex: none; color: var(--sora-color-text-secondary); transition: transform .15s ease; }
.sora-select[data-open] .sora-select__chevron { transform: rotate(180deg); color: var(--sora-color-border-focus); }
.sora-select__list {
  position: absolute; z-index: 1000; left: 0; right: 0; top: calc(100% + var(--sora-space-xs));
  margin: 0; padding: var(--sora-space-xs); list-style: none; max-height: 264px; overflow: auto;
  background: var(--sora-color-bg-surface); border-radius: var(--sora-radius-md);
  box-shadow: var(--sora-shadow-card), 0 0 0 1px var(--sora-color-bg-subtle);
  animation: sora-pop-in .12s ease;
}
.sora-select__option {
  display: flex; align-items: center; justify-content: space-between; gap: var(--sora-space-sm);
  min-height: 44px; padding: var(--sora-space-sm) var(--sora-space-md); border-radius: var(--sora-radius-sm);
  cursor: pointer; font-size: 16px; line-height: 24px; color: var(--sora-color-text-primary);
}
.sora-select__option[data-active] { background: var(--sora-color-bg-subtle); }
.sora-select__option[aria-selected="true"] { font-weight: 700; color: var(--sora-color-action-secondary); }
.sora-select__option[aria-disabled] { color: var(--sora-color-text-secondary); opacity: .6; cursor: not-allowed; }
`;
