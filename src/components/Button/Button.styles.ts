import { sizes } from '../../tokens/sizes';

export const buttonStyles = `
.sora-button {
  display: inline-flex; align-items: center; justify-content: center; gap: var(--sora-space-sm);
  border: 0; cursor: pointer; text-decoration: none; white-space: nowrap;
  border-radius: var(--sora-radius-lg);
  font-family: var(--sora-font-body); font-weight: 700;
  color: var(--sora-color-text-on-action);
  transition: background-color .15s ease, transform .1s ease, box-shadow .15s ease;
  -webkit-tap-highlight-color: transparent;
}
.sora-button[data-size="small"]  { min-height: ${sizes.button.small}px;  padding: var(--sora-space-sm) var(--sora-space-lg); font-size: 14px; line-height: 20px; border-radius: var(--sora-radius-md); }
.sora-button[data-size="medium"] { min-height: ${sizes.button.medium}px; padding: var(--sora-space-md) var(--sora-space-xl); font-size: 18px; line-height: 24px; }
.sora-button[data-size="large"]  { min-height: ${sizes.button.large}px;  padding: var(--sora-space-lg) var(--sora-space-2xl); font-size: 18px; line-height: 24px; }
.sora-button[data-full-width] { display: flex; width: 100%; }
.sora-button__icon { display: inline-flex; }

.sora-button[data-variant="primary"]               { background: var(--sora-color-action-primary); }
.sora-button[data-variant="primary"]:hover         { background: var(--sora-color-action-primary-hover); }
.sora-button[data-variant="primary"]:active        { background: var(--sora-color-action-primary-pressed); }
.sora-button[data-variant="secondary"]             { background: var(--sora-color-action-secondary); }
.sora-button[data-variant="secondary"]:hover       { background: var(--sora-color-action-secondary-hover); }
.sora-button[data-variant="secondary"]:active      { background: var(--sora-color-action-secondary-pressed); }
.sora-button[data-variant="tonal"]                 { background: var(--sora-color-bg-subtle); color: var(--sora-color-text-primary); }
.sora-button[data-variant="tonal"]:hover           { background: #E3D5F2; }
.sora-button[data-variant="tonal"]:active          { background: #D8C6EC; }
.sora-button:active { transform: scale(.98); }
.sora-button:focus-visible { outline: none; box-shadow: var(--sora-shadow-focus-ring); }

.sora-button[data-loading] { cursor: progress; }
.sora-button[data-success],
.sora-button[data-success]:hover,
.sora-button[data-success]:active { background: var(--sora-color-state-success); color: var(--sora-color-text-on-action); }
.sora-button:disabled,
.sora-button:disabled:hover,
.sora-button:disabled:active {
  background: var(--sora-color-action-disabled-bg); color: var(--sora-color-action-disabled-text);
  cursor: not-allowed; transform: none;
}
`;
