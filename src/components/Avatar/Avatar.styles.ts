import { sizes } from '../../tokens/sizes';

export const avatarStyles = `
.sora-avatar { position: relative; display: inline-flex; flex: none; }
.sora-avatar__circle {
  display: inline-flex; align-items: center; justify-content: center; overflow: hidden; width: 100%; height: 100%;
  border-radius: var(--sora-radius-full); color: var(--sora-color-text-on-action);
  font-family: var(--sora-font-body); font-weight: 700;
}
.sora-avatar__circle img { width: 100%; height: 100%; object-fit: cover; }
.sora-avatar[data-color="malva"] .sora-avatar__circle { background: var(--sora-palette-malva-abrazo); }
.sora-avatar[data-color="coral"] .sora-avatar__circle { background: var(--sora-palette-coral-sora); }
.sora-avatar[data-size="md"] { width: ${sizes.avatar.md}px; height: ${sizes.avatar.md}px; font-size: 18px; }
.sora-avatar[data-size="lg"] { width: ${sizes.avatar.lg}px; height: ${sizes.avatar.lg}px; font-size: 24px; }
.sora-avatar[data-size="xl"] { width: ${sizes.avatar.xl}px; height: ${sizes.avatar.xl}px; font-size: 32px; }
.sora-avatar__status {
  position: absolute; right: 0; bottom: 0; border-radius: 50%;
  background: var(--sora-color-state-success); border: 2px solid var(--sora-color-bg-default);
}
.sora-avatar[data-size="md"] .sora-avatar__status { width: 12px; height: 12px; }
.sora-avatar[data-size="lg"] .sora-avatar__status { width: 14px; height: 14px; }
.sora-avatar[data-size="xl"] .sora-avatar__status { width: 18px; height: 18px; }
`;
