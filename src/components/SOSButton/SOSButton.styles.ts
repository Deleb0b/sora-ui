export const sosStyles = `
.sora-sos {
  position: relative; display: inline-flex; align-items: center; justify-content: center; flex: none;
  padding: 0; border: 0; background: transparent; cursor: pointer; border-radius: 50%;
  touch-action: none; user-select: none; -webkit-user-select: none; -webkit-tap-highlight-color: transparent;
  font-family: var(--sora-font-body); color: var(--sora-color-text-on-action);
}
.sora-sos__halo { position: absolute; inset: 0; border-radius: 50%; background: var(--sora-color-action-primary); opacity: .2; transition: opacity .2s ease, transform .2s ease; }
.sora-sos:hover .sora-sos__halo { opacity: .26; }
.sora-sos[data-state="holding"] .sora-sos__halo, .sora-sos[data-state="sent"] .sora-sos__halo { opacity: .28; }
.sora-sos__ring { position: absolute; inset: 0; color: var(--sora-color-text-primary); }
.sora-sos__core {
  position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
  width: 83.33%; height: 83.33%; border-radius: 50%; background: var(--sora-color-action-primary);
  text-align: center; transition: background-color .15s ease, transform .15s ease;
}
.sora-sos:hover .sora-sos__core { background: var(--sora-color-action-primary-hover); }
.sora-sos[data-state="holding"] .sora-sos__core { background: var(--sora-color-action-primary-pressed); transform: scale(.97); }
.sora-sos[data-state="sent"] .sora-sos__core { background: var(--sora-color-action-primary); }
.sora-sos__label { font-family: var(--sora-font-heading); font-weight: 800; font-size: calc(var(--sora-sos-size) * .2); line-height: 1.33; }
.sora-sos__hint { font-weight: 700; font-size: max(14px, calc(var(--sora-sos-size) * .075)); line-height: 1.33; padding: 0 12%; }
.sora-sos:focus-visible { outline: none; box-shadow: 0 0 0 4px var(--sora-color-bg-default), 0 0 0 7px var(--sora-color-border-focus); }
.sora-sos:disabled { cursor: not-allowed; filter: grayscale(.6); opacity: .6; }
`;
