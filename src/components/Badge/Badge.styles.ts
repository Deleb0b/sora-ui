export const badgeStyles = `
.sora-badge {
  display: inline-flex; align-items: center; gap: 6px; padding: 2px var(--sora-space-sm);
  border-radius: var(--sora-radius-full); font-family: var(--sora-font-body); font-weight: 700;
  font-size: 13px; line-height: 18px; white-space: nowrap;
}
.sora-badge__dot { width: 8px; height: 8px; border-radius: 50%; background: currentColor; }
.sora-badge[data-variant="success"] { background: rgba(35, 120, 94, .12); color: var(--sora-color-state-success); }
.sora-badge[data-variant="warning"] { background: rgba(232, 162, 58, .2); color: #8A5A10; }
.sora-badge[data-variant="error"]   { background: rgba(194, 59, 71, .12); color: var(--sora-color-state-error); }
.sora-badge[data-variant="info"]    { background: var(--sora-color-bg-subtle); color: var(--sora-color-action-secondary-pressed); }
.sora-badge[data-variant="neutral"] { background: var(--sora-color-bg-subtle); color: var(--sora-color-text-secondary); }
`;
