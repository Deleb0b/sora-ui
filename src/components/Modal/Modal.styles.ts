export const modalStyles = `
.sora-modal__overlay {
  position: fixed; inset: 0; z-index: 2000; display: flex; align-items: center; justify-content: center;
  padding: var(--sora-space-lg); background: rgba(59, 31, 78, .45); animation: sora-fade-in .15s ease;
}
.sora-modal {
  width: 100%; max-height: calc(100vh - 32px); overflow: auto; display: flex; flex-direction: column; gap: var(--sora-space-md);
  padding: var(--sora-space-xl); background: var(--sora-color-bg-surface); border-radius: var(--sora-radius-lg);
  box-shadow: var(--sora-shadow-modal); font-family: var(--sora-font-body); color: var(--sora-color-text-primary);
  animation: sora-pop-in .18s ease; outline: none;
}
.sora-modal[data-size="small"] { max-width: 360px; }
.sora-modal[data-size="medium"] { max-width: 480px; }
.sora-modal[data-size="large"] { max-width: 720px; }
.sora-modal__header { display: flex; align-items: flex-start; justify-content: space-between; gap: var(--sora-space-md); }
.sora-modal__title { margin: 0; font-family: var(--sora-font-heading); font-weight: 700; font-size: 20px; line-height: 28px; }
.sora-modal__close {
  margin-left: auto; display: inline-flex; padding: 4px; border: 0; border-radius: var(--sora-radius-sm);
  background: transparent; color: var(--sora-color-text-secondary); cursor: pointer;
}
.sora-modal__close:hover { background: var(--sora-color-bg-subtle); color: var(--sora-color-text-primary); }
.sora-modal__close:focus-visible { outline: none; box-shadow: var(--sora-shadow-focus-ring); }
.sora-modal__description { margin: 0; font-size: 16px; line-height: 24px; color: var(--sora-color-text-secondary); }
.sora-modal__body { font-size: 16px; line-height: 24px; }
.sora-modal__footer { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: var(--sora-space-sm); margin-top: var(--sora-space-sm); }
`;
