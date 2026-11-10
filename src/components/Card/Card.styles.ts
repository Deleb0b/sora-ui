export const cardStyles = `
.sora-card {
  position: relative; display: block; border-radius: var(--sora-radius-lg);
  font-family: var(--sora-font-body); color: var(--sora-color-text-primary);
  transition: box-shadow .15s ease, transform .1s ease, border-color .15s ease, background-color .15s ease;
}
.sora-card[data-padding="none"] { padding: 0; }
.sora-card[data-padding="small"] { padding: var(--sora-space-md); }
.sora-card[data-padding="medium"] { padding: var(--sora-space-lg); }
.sora-card[data-padding="large"] { padding: var(--sora-space-xl); }
.sora-card[data-variant="elevated"] { background: var(--sora-color-bg-surface); box-shadow: var(--sora-shadow-card); border: 2px solid transparent; }
.sora-card[data-variant="outlined"] { background: var(--sora-color-bg-surface); border: 2px solid var(--sora-color-border-default); }
.sora-card[data-variant="filled"] { background: var(--sora-color-bg-subtle); border: 2px solid transparent; }
.sora-card[data-interactive] { cursor: pointer; }
.sora-card[data-interactive]:hover { box-shadow: 0 8px 20px rgba(59, 31, 78, .16); }
.sora-card[data-interactive]:active { transform: scale(.99); }
.sora-card[data-interactive]:focus-visible { outline: none; box-shadow: var(--sora-shadow-focus-ring); }
.sora-card[data-selected] { border-color: var(--sora-color-border-focus); background-color: #FBF8FE; }
.sora-card[data-disabled] { opacity: .6; cursor: not-allowed; }
`;
