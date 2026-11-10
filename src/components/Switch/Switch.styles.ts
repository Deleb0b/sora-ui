import { sizes } from '../../tokens/sizes';

const { width, height, knob } = sizes.switch;
const travel = width - knob - 4 * 2 - 2; // borde 2 px + margen 3 px por lado

export const switchStyles = `
.sora-switch {
  position: relative; display: inline-flex; align-items: center; gap: var(--sora-space-md);
  cursor: pointer; font-family: var(--sora-font-body); font-size: 16px; line-height: 24px; color: var(--sora-color-text-primary);
}
.sora-switch[data-label-position="start"] { flex-direction: row-reverse; }
.sora-switch__track {
  flex: none; position: relative; display: inline-flex; align-items: center;
  width: ${width}px; height: ${height}px; padding: 0 3px;
  border: 2px solid var(--sora-color-border-default); border-radius: var(--sora-radius-full);
  background: var(--sora-color-bg-subtle); transition: background-color .16s ease, border-color .16s ease;
}
.sora-switch__knob {
  width: ${knob}px; height: ${knob}px; border-radius: 50%; background: var(--sora-palette-white);
  box-shadow: 0 1px 3px rgba(59, 31, 78, .25); transition: transform .16s ease;
}
.sora-switch:hover .sora-switch__track { border-color: var(--sora-color-border-focus); }
.sora-switch[data-checked] .sora-switch__track { background: var(--sora-color-action-secondary); border-color: var(--sora-color-action-secondary); }
.sora-switch[data-checked]:hover .sora-switch__track { background: var(--sora-color-action-secondary-hover); border-color: var(--sora-color-action-secondary-hover); }
.sora-switch[data-checked] .sora-switch__knob { transform: translateX(${travel}px); }
.sora-switch__input:focus-visible + .sora-switch__track { box-shadow: var(--sora-shadow-focus-ring); }
.sora-switch[data-disabled] { cursor: not-allowed; color: var(--sora-color-text-secondary); }
.sora-switch[data-disabled] .sora-switch__track,
.sora-switch[data-disabled]:hover .sora-switch__track { background: var(--sora-color-action-disabled-bg); border-color: var(--sora-color-border-default); opacity: .6; }
`;
