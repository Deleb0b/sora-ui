import { typography } from '../../tokens/typography';

const variants = Object.entries(typography)
  .map(
    ([k, t]) =>
      `.sora-text[data-variant="${k}"] { font-family: ${t.fontFamily}; font-weight: ${t.fontWeight}; font-size: ${t.fontSize}px; line-height: ${t.lineHeight}px; }`,
  )
  .join('\n');

export const textStyles = `
.sora-text { margin: 0; }
${variants}
.sora-text[data-color="primary"] { color: var(--sora-color-text-primary); }
.sora-text[data-color="secondary"] { color: var(--sora-color-text-secondary); }
.sora-text[data-color="onAction"] { color: var(--sora-color-text-on-action); }
.sora-text[data-color="link"] { color: var(--sora-color-text-link); }
.sora-text[data-color="success"] { color: var(--sora-color-state-success); }
.sora-text[data-color="warning"] { color: var(--sora-color-state-warning); }
.sora-text[data-color="error"] { color: var(--sora-color-state-error); }
.sora-text[data-color="inherit"] { color: inherit; }
`;
