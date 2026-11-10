/** Fuentes del Design System (Figma: Nunito para títulos, Nunito Sans para texto). */
export const fontImport =
  "@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&family=Nunito+Sans:wght@400;700&display=swap');";

export const baseStyles = `
.sora-reset, .sora-reset * { box-sizing: border-box; }
.sora-visually-hidden {
  position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
}
@keyframes sora-spin { to { transform: rotate(360deg); } }
@keyframes sora-fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes sora-pop-in { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) {
  [class^="sora-"], [class*=" sora-"] { animation-duration: 1ms !important; transition-duration: 1ms !important; }
}
`;
