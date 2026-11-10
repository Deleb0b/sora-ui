export const navbarStyles = `
.sora-navbar { background: var(--sora-color-bg-surface); border-top: 1px solid var(--sora-color-bg-subtle); padding: 10px; font-family: var(--sora-font-body); }
.sora-navbar[data-fixed] { position: fixed; left: 0; right: 0; bottom: 0; z-index: 900; padding-bottom: calc(10px + env(safe-area-inset-bottom)); }
.sora-navbar__list { display: flex; justify-content: space-around; gap: var(--sora-space-xs); margin: 0; padding: 0; list-style: none; }
.sora-navbar__item {
  display: flex; flex-direction: column; align-items: center; min-width: 64px; padding: var(--sora-space-xs) var(--sora-space-sm) 0;
  border: 0; border-radius: var(--sora-radius-md); background: transparent; cursor: pointer;
  color: var(--sora-color-text-primary); font-family: inherit; font-size: 16px; line-height: 22px;
  transition: color .15s ease, background-color .15s ease;
}
.sora-navbar__item:hover { background: var(--sora-color-bg-subtle); }
.sora-navbar__item:focus-visible { outline: none; box-shadow: var(--sora-shadow-focus-ring); }
.sora-navbar__item[data-selected] { color: var(--sora-color-action-secondary); font-weight: 700; }
.sora-navbar__item:disabled { color: var(--sora-color-text-secondary); opacity: .5; cursor: not-allowed; background: transparent; }
.sora-navbar__icon { display: inline-flex; }
.sora-navbar__indicator { width: 28px; height: 6px; margin-top: 2px; border-radius: var(--sora-radius-md); background: transparent; transition: background-color .15s ease; }
.sora-navbar__item[data-selected] .sora-navbar__indicator { background: currentColor; }
`;
