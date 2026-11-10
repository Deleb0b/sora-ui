import { sizes } from '../../tokens/sizes';

export const alertStyles = `
.sora-alert {
  display: flex; align-items: flex-start; gap: var(--sora-space-md); padding: var(--sora-space-lg);
  background: var(--sora-color-bg-surface); border-radius: var(--sora-radius-lg); box-shadow: var(--sora-shadow-card);
  font-family: var(--sora-font-body); animation: sora-pop-in .18s ease;
}
.sora-alert__icon {
  flex: none; display: inline-flex; align-items: center; justify-content: center;
  width: ${sizes.alertIcon}px; height: ${sizes.alertIcon}px; border-radius: var(--sora-radius-full); color: var(--sora-color-text-on-action);
}
.sora-alert[data-type="success"] .sora-alert__icon { background: var(--sora-color-state-success); }
.sora-alert[data-type="warning"] .sora-alert__icon { background: var(--sora-color-state-warning); color: var(--sora-color-text-primary); }
.sora-alert[data-type="error"] .sora-alert__icon { background: var(--sora-color-state-error); }
.sora-alert[data-type="info"] .sora-alert__icon { background: var(--sora-color-state-info); }
.sora-alert__content { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.sora-alert__title { margin: 0; font-weight: 700; font-size: 16px; line-height: 20px; color: var(--sora-color-text-primary); }
.sora-alert__message { font-size: 16px; line-height: 24px; color: var(--sora-color-text-secondary); }
.sora-alert__action { margin-top: var(--sora-space-sm); }
.sora-alert__close {
  flex: none; display: inline-flex; padding: 0; border: 0; background: transparent; cursor: pointer;
  color: var(--sora-color-text-secondary); border-radius: var(--sora-radius-sm);
}
.sora-alert__close:hover { color: var(--sora-color-text-primary); }
.sora-alert__close:focus-visible { outline: none; box-shadow: var(--sora-shadow-focus-ring); }
`;
